import OrderItem from '../OrderItem/OrderItem';
import './OrderList.css';
export default function OrderList({order, selectedOrder, setSelectedOrder}) {
    const ordersItem = order.map(x => 
    <OrderItem 
    key={x._id} 
    selectedOrder={x === selectedOrder}
    setSelectedOrder={setSelectedOrder}
    order={x}
    />) ;
    
    return (
        <div className='width'>
            {ordersItem}
        </div>
    );
}