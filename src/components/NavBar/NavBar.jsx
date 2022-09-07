import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from "react-icons/ai";
import './NavBar.css';

export default function NavBar({user, setUser}) {
  const [sidebar, setSidebar] = useState(true);
    
  function showSideBar() {
      setSidebar(!sidebar)
    }
  function handleLogOut(evt) {
        userService.logOut();
        setUser(null);
    }
  return (
    <div>
    
    <nav className="navbar navbar-expand d-flex felx-column align-item start">
        <Link to='#' clasName="navbar-brand text-light mt-5">
          <div className='display-5 font-weight-bold'>
            {/* <FaIcons.FaBars onClick={showSideBar} /> */}
            Thanos
          </div>
        </Link>
      <ul className='navbar-nav d-flex flex-column mt-5'>
        <li className='nav-item w-100'>
          <Link to='#' clasName="nav-link text-light pl-4">home</Link>
        </li >
        <li className='nav-item w-100'>
        <Link to='/orders' clasName="nav-link text-light pl-4">Order History</Link>
        </li>
        <li className='nav-item w-100'>
        <Link to='/orders/new'clasName="nav-link text-light pl-4">New Order</Link>
        </li>
        <li className='nav-item w-100'>
        <h4 clasName="nav-link text-light pl-4">welcome, {user.name}</h4>
        </li>
        <li className='nav-item w-100'>
        <Link to='' onClick={handleLogOut} clasName="nav-link text-light pl-4">signOut</Link>
        </li>

      </ul>
    </nav>
    </div>
  );
}