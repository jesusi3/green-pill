import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as FaIcons from 'react-icons/fa';

import './NavBar.css';

export default function NavBar({user, setUser}) {

  function handleLogOut(evt) {
        userService.logOut();
        setUser(null);
    }
  return (
    <div>
    
    <nav>
      <div className='nav-bar'>
        <div className='item-container'>
          <Link to='#' ><FaIcons.FaHome/> Home</Link> 
          </div>  
        <div className='item-container'>
          <Link to='/orders' ><FaIcons.FaHistory/> Order History</Link>
          </div>  
      <div className='item-container'>
        <Link to='/orders/new'><FaIcons.FaShoppingBasket/> New Order</Link>
        
        </div>  
       
      <div id='item-container-end'>
        <div className='item-container'  id="user">
          welcome, {user.name}
          </div>  
        <div className='item-container'>
          <Link to='' onClick={handleLogOut} >SignOut <FaIcons.FaSignOutAlt/></Link>
          </div>  
      </div>  

      </div>
    </nav>
    </div>
  );
}