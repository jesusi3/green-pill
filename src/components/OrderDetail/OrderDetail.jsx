import './OrderDetail.css';
export default function OrderDetail({order}) {
    if(!order) return 'null';
const lineItems = order.lineItems.map(item =>
    <lineItem 
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
                <main>
                    {lineItems}
                </main>    
                <footer className='total'>
                    <button>Checkout</button>
                </footer>
            </div>
        </div>
    );
}