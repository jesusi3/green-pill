import './OrderItem.css';
export default function OrderItem({order, selectedOrder, setSelectedOrder}) {
    return (
        <li className='li-item'>
            <div
            className={selectedOrder? 'text-success' : 'text-primary'}
            onClick={() => setSelectedOrder(order)}
            >
            <h3>{order.orderId}</h3>
            <span>{order.totalQty}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>{order.orderTotal.toFixed(2)}</span>
            </div>
        </li>
    );
}