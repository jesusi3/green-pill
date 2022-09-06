import { useState, useEffect, useRef} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import SupplementsPage from '../../components/SupplementsPage/SupplementsPage';
import EquipmentPage from '../../components/EquipmentPage/EquipmentPage';

export default function NewOrderPage() {
  const [mainCat, setMainCat] = useState(true);
  const [menuItem, setMenuItem] = useState([]);
  const [activeCat, setAcativeCat] = useState('');
  const categoriesRef = useRef([]);
    useEffect( function() {
      async function getAll() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = [...new Set(items.map(item => item.category.name))];
        setMenuItem(items);
        setAcativeCat(categoriesRef.current[0]);
      }
      getAll();

    }, []);

    const getMainSup = menuItem.filter(item = item.category.category === "Supplements")
    const getMainEquip = menuItem.filter(item = item.category.category === "Equipment")

  return (
    <div class="container-fluid">
      <h1>NewOrderPage</h1>
      {mainCat ?
      <SupplementsPage categories={categoriesRef.current} />
      :
      <EquipmentPage />
      }
      <button onClick={() => setMainCat(!mainCat)} type="button" class="btn btn-dark">{mainCat ? 'Equipment' : 'Supplements'}</button>
    </div>
  );
}