import OrderItem from '../OrderItem/OrderItem';
import './OrderList.css';
export default function OrderList({order}) {
    const ordersItem = order.map(x => <OrderItem key={x._id} order={x}/>) ;
    console.log(ordersItem);
    return (
        <div className='width'>
            {ordersItem}
        </div>
    );
}