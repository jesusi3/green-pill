import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (

    <main className='grid'>
      <div className='column-1'>
        <div className='title-name'>
        <h1 className='project-name'>Green Pill</h1>
        </div>
        <div className='about-us' style={{height:"68.5vh"}}>
          <div className='about-us-text'> 
            Welcome, <br />
            Whether you're purchasing Supplements or Gym Equipment, we got it all. 
            Take your first steps into Purchasing your first item by creating an account
            on our ECommmerce SignUp page.
          </div>
        </div>
      </div>
      <div className="login">
        <div className='login-center' >
            { showLogin ?
         
            <LoginForm setUser={setUser}/>
         
            :
         
            <SignUpForm setUser={setUser}/>
         
            }
        </div>
        <h3 className="toggle-login" onClick={() => setShowLogin(!showLogin)} style={{color:'white'}}>{showLogin ? 'SIGNUP' : 'LOGIN'}</h3>
      </div>
    </main>
  );
}