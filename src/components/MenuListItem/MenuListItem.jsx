import "./MenuListItem.css";
export default function MenuListItem({menuItem, handleAddToOrder}) {

    return (
        <div className="card custom_class" style={{width:"50vmin", height:"65vmin", backgroundColor:"#152238"}}> 
            <h5 className="Content_class">{menuItem.name}</h5>
            <img src={menuItem.img} alt="Item" className="size_class"/>
            <button className="button" onClick={() => handleAddToOrder(menuItem._id)}>ADD</button>
        </div>
    ) ;
}