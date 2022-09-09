import { useState ,useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList'
import './OrderHistoryPage.css';
export default function OrderHistoryPage() {
  const [order, setOrder] = useState([]);

  useEffect(function () {
    async function getOrderList() {
      const order = await ordersAPI.getOrders();
      setOrder(order);
    }
    getOrderList()

  }, []);

  return (
    <div className="history">
      <div className='title-top' >
      <h1 >OrderHistoryPage</h1></div>
      <div className='order-list'>
        <ul className='unorder'>
          {/* {menuItem.filter(x => x.category.name === supActiveCat)} */}
          <OrderList order={order}/>
        </ul>
      </div>
    </div>
  );
}
