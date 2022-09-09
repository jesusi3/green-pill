import LineItem from '../LineItem/LineItem';
import './OrderDetail.css';
export default function OrderDetail({order, handleChangeQty, handleCheckOut}) {
    if(!order) return 'null';
const lineItems = order.lineItems.map(item =>
    <LineItem 
    key={item._id}
    lineItem={item}
    isPaid={order.isPaid}
    handleChangeQty={handleChangeQty}
    />
    )

    return (
        <div className='OrderDetail'>
            <div className='hi'>
                <div className='heading'>
                    <h3>New Order - {order.orderId}</h3>
                </div>
                <main className='item1-order'>
                    {lineItems}
                </main>    
                    <button 
                    className='total'
                    onClick={handleCheckOut}
                    disabled={!lineItems.length}
                    >Checkout</button>
            </div>
        </div>
    );
}