import './LineItem.css';
export default function LineItem({lineItem, isPaid, handleChangeQty}) {
     
    return (
        <div className='item-p1'>
            <p className="name">{lineItem.item.name}</p>
            <section className='order-qty-total'>
            <span>${lineItem.item.price}</span>
            <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
                {!isPaid &&
                    <button
                    className="btn-xs"
                    onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
                    >−</button>
                }
                <span>{lineItem.qty}</span>
                {!isPaid &&
                    <button
                    className="btn-xs"
                    onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
                    >+</button>
                }
                </div>
            <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div></section>
      </div>
    );
}