import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";

export default function MenuList({menuItems}) {
    
    const items = menuItems.map( item => 
        <MenuListItem 
        key={item._id}
        menuItem={item}
        />
        
        );
    return(
        <div className="List">
            {items}
        </div>
    );
}