import HistoryLineItem from '../HistoryLineItem/HistoryLineItem';
import './HistoryDetail.css';
export default function HistoryDetail({selectedOrder, setSelectedOrder}) {
    if(!selectedOrder) return null;
    const order = selectedOrder.lineItems.map((x) =>
        (<HistoryLineItem 
        key={x._id}
        order={x}
        />)
        );

    return (
       <>
       <div className='history-detail'>
            <div className='history-list'>
                <div className='heading-history'>
                    <span><h3>Order Id - {selectedOrder.orderId}</h3></span>
                    <span> <button onClick={() => setSelectedOrder(null)}>X</button></span>
                </div>
                <main className='item1-order'>
                    {order}
                </main>    
                    <span>Total:{selectedOrder.orderTotal.toFixed(2)}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>QTY: {selectedOrder.totalQty}</span>
                    &nbsp;&nbsp;&nbsp;
            </div>
        </div>
       
       </>
    );
}