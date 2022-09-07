import { useState, useEffect, useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import SupplementCat from '../../components/SupplementCat/SupplementCat';
import EquipmentCat from '../../components/EquipmentCat/EquipmentCat';
import MenuList from '../../components/MenuList/MenuList'
 
export default function NewOrderPage() {
  const [mainCat, setMainCat] = useState(true);
  const [menuItem, setMenuItem] = useState([]);
  const [equipActiveCat, setEquipActiveCat] = useState('');
  const [supActiveCat, setSupActiveCat] = useState('');
  const supplementRef = useRef([]);
  const equipmentRef = useRef([]);
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
    }, []);
    
    
   
 
  return (
    <div className="container-fluid">
      {/* <h1 onClick={getSupCat}>NewOrderPage</h1> */}
      <button onClick={() => setMainCat(!mainCat)} type="button" className="btn btn-dark btn-sm">{mainCat ? 'Equipment' : 'Supplements'}</button>
      {mainCat ?
        <>
          <SupplementCat
            categories={supplementRef.current}
            activeCat={supActiveCat}
            setActiveCat={setSupActiveCat}
          />
          <MenuList menuItems={menuItem.filter(x => x.category.name === supActiveCat)}/>
        </>
        :
        <EquipmentCat
          categories={equipmentRef.current}
          activeCat={equipActiveCat}
          setActiveCat={setEquipActiveCat}
        />
      }
 
    </div>
  );
}

