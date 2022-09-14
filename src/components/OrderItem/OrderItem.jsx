import './OrderItem.css';
export default function OrderItem({order, selectedOrder, setSelectedOrder}) {
    return (
        <li className='li-item'>
            <div
            className={selectedOrder? 'text-success order-paid-container' : ' order-paid-container'}
            onClick={() => setSelectedOrder(order)}
            style={{color:"white"}}
            >
                <div className='order-paid-item'>
                    <h3>OrderId: {order.orderId}</h3>
                    Day Ordered: {new Date(order.updatedAt).toLocaleDateString()}
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className='order-paid-item-right'>
                <h4>$ {order.orderTotal.toFixed(2)}</h4>
                    <h5>{order.totalQty} items</h5>
                </div>
            </div>
        </li>
    );
}