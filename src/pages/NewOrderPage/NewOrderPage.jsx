import { useState, useEffect, useRef} from 'react';
// import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import SupplementCat from '../../components/SupplementCat/SupplementCat';
import EquipmentCat from '../../components/EquipmentCat/EquipmentCat';
import MenuList from '../../components/MenuList/MenuList'
import OrderDetail from '../../components/OrderDetail/OrderDetail';
 
export default function NewOrderPage() {
  const [mainCat, setMainCat] = useState(true);
  const [menuItem, setMenuItem] = useState([]);
  const [equipActiveCat, setEquipActiveCat] = useState('');
  const [supActiveCat, setSupActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const supplementRef = useRef([]);
  const equipmentRef = useRef([]);
  // const navigate = useNavigate();
    useEffect( function() {
      async function getAll() {
        const items = await itemsAPI.getAll();
        const five =  await items.filter((c) =>  c.category.category.includes('Supplements'));
        supplementRef.current = [...new Set(five.map((m) => m.category.name))];
        const four =  await items.filter((c) =>  c.category.category.includes('Equipment'));
        equipmentRef.current = [...new Set(four.map((m) => m.category.name))];
        setMenuItem(items);
        setSupActiveCat(supplementRef.current[0]);
        setEquipActiveCat(equipmentRef.current[0]);
      }
      getAll();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart()


    }, []);
    
    async function handleAddToOrder(itemId) {
      // alert(`add item: ${itemId}`)
      const updatedCart = await ordersAPI.addToCart(itemId);
      setCart(updatedCart)
    }
   
    async function handleChangeQty(itemId, newQty) {
      const updatedCart = await ordersAPI.setItemQtyInCart(itemId,newQty);
      setCart(updatedCart);
    }

    async function handleCheckOut() {
      await ordersAPI.checkOut();
      // navigate('/orders');
    }
 
  return (
    <div className="container-fluid">
      {/* <h1 onClick={getSupCat}>NewOrderPage</h1> */}
      <button onClick={() => setMainCat(!mainCat)} type="button" className="btn btn-dark btn-sm">{mainCat ? 'Equipment' : 'Supplements'}</button>
      <OrderDetail 
      order={cart}
      handleChangeQty={handleChangeQty}
      handleCheckOut={handleCheckOut}
      />
      {mainCat ?
        <>
          <SupplementCat
            categories={supplementRef.current}
            activeCat={supActiveCat}
            setActiveCat={setSupActiveCat}
          />
          <MenuList 
          menuItems={menuItem.filter(x => x.category.name === supActiveCat)}
          handleAddToOrder={handleAddToOrder}
          />
        </>
        :
        <>
          <EquipmentCat
            categories={equipmentRef.current}
            activeCat={equipActiveCat}
            setActiveCat={setEquipActiveCat}
          />
        <MenuList 
        menuItems={menuItem.filter(x => x.category.name === equipActiveCat)}
        handleAddToOrder={handleAddToOrder}
        />
       </> 
      }
    </div>
  );
}

