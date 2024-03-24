import './App.css';
import './App.css';
import LoginForm from './Components/LoginForm';
import GratsButton from './Components/GratsButtton';
import prectimage from './practimage.png';
function App() {
  return (
    <div className='Myapp'>
    <div className="navbar">
                <ul>
                    <li><h1>FACEBOOK</h1></li>
                </ul>
                </div>
                <div class="img">
                <h2><b>facebook helps you connect and share with the people in your life</b></h2>
                <img src={prectimage} alt="profile pic" />
               
            </div>
    <div className='Appcontainer'>
    <div className='mainContainers'>
      <div> <LoginForm  titleClass="TextField" placeholder={"Email address or phone number"}/></div>
      <div><LoginForm  titleClass="TextField1" placeholder={"Password"} /> </div>
      <GratsButton title={"Log in"} handleOnClick={()=>console.log("Login")} titleClass="submitTitle" color="blue"/>
      <div className="Forget"><a href='https://www.facebook.com'>Forgotten password?</a></div>
      <div className='line'></div>
      <GratsButton title={"Create new account"} handleOnClick={()=>console.log("Submit")} titleClass="Submit" color="green"/>

    </div>
    </div>
    
    </div>
  );
}

export default App;
