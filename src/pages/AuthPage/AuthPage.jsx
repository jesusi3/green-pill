import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (

    <main>
      <h1>AuthPage</h1>
     
        <h1>hello</h1>
      <div>
        <div>
            { showLogin ?
         
            <LoginForm setUser={setUser}/>
         
            :
         
            <SignUpForm setUser={setUser}/>
         
            }
        </div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGNUP' : 'LOGIN'}</h3>
      </div>
    </main>
  );
}