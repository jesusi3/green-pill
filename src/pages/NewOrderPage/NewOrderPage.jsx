import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {
  const [item, setItem] = useState([]);
    useEffect( function() {
      async function getAll() {
        const items = await itemsAPI.getAll();
        setItem(items);
      }
      getAll();
    }, []);
  return (
    <h1>NewOrderPage</h1>
  );
}