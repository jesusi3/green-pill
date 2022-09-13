import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";

export default function MenuList({menuItems, handleAddToOrder}) {
    
    const items = menuItems.map( item => 
        <MenuListItem 
        key={item._id}
        menuItem={item}
        handleAddToOrder={handleAddToOrder}
        />
        
        );
    return(
        // <div className="List">
        //     {items}
        // </div>
        <div className="row mt-2 g-4">
            {items}
        </div>
    );
}