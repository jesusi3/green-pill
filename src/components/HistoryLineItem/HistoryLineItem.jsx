import './HistoryLineItem.css';

export default function HistoryLineItem({order}) {

    return (
        <>  
            <div className="line-item">
                <div>
                    <img src={order.item.img} alt="" style={{objectFit:'contain', height:"14vh"}} />
                </div>
                <div className='column-rows'>
                    <h4>{order.item.name}</h4>
                    <h4>qty: {order.qty} &nbsp;&nbsp;&nbsp; cost: $ {order.extPrice}</h4>
                </div>
            </div>
        </>
    );
}