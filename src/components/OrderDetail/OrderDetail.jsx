import LineItem from '../LineItem/LineItem';
import './OrderDetail.css';
export default function OrderDetail({order}) {
    if(!order) return 'null';
const lineItems = order.lineItems.map(item =>
    <LineItem 
    key={item._id}
    lineItem={item}
    isPaid={order.isPaid}
    />
    )

    return (
        <div className='OrderDetail'>
            <div className='hi'>
                <div className='heading'>
                    <h1>New Order</h1>
                </div>
                <main className='item1-order'>
                    {lineItems}
                </main>    
                    <button className='total'>Checkout</button>
            </div>
        </div>
    );
}