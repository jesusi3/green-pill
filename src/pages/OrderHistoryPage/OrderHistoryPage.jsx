import { useState ,useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList'
import HistoryDetail from '../../components/HistoryDetail/HistoryDetail';
import './OrderHistoryPage.css';
export default function OrderHistoryPage() {
  const [order, setOrder] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function () {
    async function getOrderList() {
      const order = await ordersAPI.getOrders();
      setOrder(order);
      // setSelectedOrder(order[0]);
    }
    getOrderList()

  }, []);

  return (
    <div className="history">
      <div className='title-top' >
        <h1 >OrderHistoryPage</h1>
      </div>
      <div className='order-list'>
        <ul className='unorder'>
         
          <OrderList 
          order={order}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
          />
        </ul>
      </div>
      <HistoryDetail 
      // order={order}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      />
    </div>
  );
}
