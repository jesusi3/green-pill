import './HistoryLineItem.css';

export default function HistoryLineItem({order}) {

    return (
        <>  
            <div className="line-item">
            {/* <h4>{order.item._id}</h4> */}
            <h4>{order.item.name}</h4></div>
        </>
    );
}