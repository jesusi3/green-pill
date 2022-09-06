import { useState, useEffect} from 'react';
import * as itemsAPI from '../../utilities/items-api';
import SupplementsPage from '../../components/SupplementsPage/SupplementsPage';
import EquipmentPage from '../../components/EquipmentPage/EquipmentPage';

export default function NewOrderPage() {
  const [mainCat, setMainCat] = useState(true);
  const [item, setItem] = useState([]);
    useEffect( function() {
      async function getAll() {
        const items = await itemsAPI.getAll();
        setItem(items);
      }
      getAll();
    }, []);
  return (
    <div class="container-fluid">
      {/* <h1>NewOrderPage</h1> */}
      {mainCat ?
      <SupplementsPage />
      :
      <EquipmentPage />
      }
      <button onClick={() => setMainCat(!mainCat)} type="button" class="btn btn-dark">{mainCat ? 'Equipment' : 'Supplements'}</button>
    </div>
  );
}