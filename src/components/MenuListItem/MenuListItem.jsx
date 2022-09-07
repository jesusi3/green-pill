import "./MenuListItem.css";
export default function MenuListItem({menuItem}) {

    return (
        <div className="card custom_class" style={{width:"50vmin", height:"65vmin", backgroundColor:"#33AB5F"}}> 
            <h5 className="Content_class">{menuItem.name}</h5>
            <img src={menuItem.img} alt="Item" className="size_class"/>
        </div>
    ) ;
}