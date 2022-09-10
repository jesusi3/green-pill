import HistoryLineItem from '../HistoryLineItem/HistoryLineItem';
import './HistoryDetail.css';
export default function HistoryDetail({selectedOrder}) {
    if(!selectedOrder) return 'null';
    // const order = selectedOrder.map((x) =>
    //     (<HistoryLineItem 
    //     key={x._id}
    //     order={x}
    //     items={x.lineItems.map(m => m)}
    //     />)
    //     );

    return (
       <>
       {/* {order} */}
       </>
    );
}