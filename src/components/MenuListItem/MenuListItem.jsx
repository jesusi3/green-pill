import "./MenuListItem.css";
export default function MenuListItem({menuItem, handleAddToOrder}) {

    return (
        <div className="col-md-4">
            <div className="card p-1" style={{backgroundColor:"#152238", color:"white"}}>
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-base imagename"> 
                        <div className="flex-row align-items-start">
                            {menuItem.name} 
                        </div>
                        <div className="flex-column lh-base imagename"> 
                            <div className="d-flex align-items-center">
                            <button 
                            className="btn-sm" 
                            onClick={() => handleAddToOrder(menuItem._id)}
                            style={{backgroundColor:"white", color:"#152238"}}
                            >ADD</button>
                            &nbsp; $ {menuItem.price}
                            </div>
                        </div>
                    </div>
                    <div > <img src={menuItem.img} alt='Item' className="img" /> </div>
                </div>
            </div>
        </div>
    ) ;
}