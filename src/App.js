import React, {useState, useEffect} from 'react';
import './App.css';
import SiteBar from './home/Navbar'
import Auth from './Auth/Auth'
import WorkoutIndex from './workouts/WorkoutIndex';


function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(()=>{
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  },[])
  const updateToken =(newToken) =>{
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken =() => {
    localStorage.clear();
    setSessionToken('');
  }
  const protectedViews=() =>{
    return(sessionToken === localStorage.getItem('token') ? <WorkoutIndex token ={sessionToken}/>
    :<Auth updateToken={updateToken}/>)
  }

    

  return(
  <div>
    <SiteBar clearToken={clearToken}/>
    {protectedViews()}
    
  </div>
  )
}

export default App;
