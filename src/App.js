// import './App.css';

// import './App.css';
// import LoginForm from './Components/LoginForm';
// import GratsButton from './Components/GratsButtton';
// import prectimage from './practimage.png';
// import LoginForm from './Components/User.js';
// function App() {
//   return (

// <div className='Myapp'>
// <div className="navbar">
//             <ul>
//                 <li><h1>FACEBOOK</h1></li>
//             </ul>
//             </div>
//             <div class="img">
//             <h2><b>facebook helps you connect and share with the people in your life</b></h2>
//             <img src={prectimage} alt="profile pic" />

//         </div>
// <div className='Appcontainer'>
// <div className='mainContainers'>
//   <div> <LoginForm  titleClass="TextField" placeholder={"Email address or phone number"}/></div>
//   <div><LoginForm  titleClass="TextField1" placeholder={"Password"} /> </div>
//   <GratsButton title={"Log in"} handleOnClick={()=>console.log("Login")} titleClass="submitTitle" color="blue"/>
//   <div className="Forget"><a href='https://www.facebook.com'>Forgotten password?</a></div>
//   <div className='line'></div>
//   <GratsButton title={"Create new account"} handleOnClick={()=>console.log("Submit")} titleClass="Submit" color="green"/>

// </div>
// </div>

// </div>
//   );
// }

// export default App;



// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [categories, setCategories] = useState([]);
//   const [entries, setEntries] = useState([]);
//   const [category, setCategory] = useState('');
  

//   useEffect(() => {
//     fetch('https://api.publicapis.org/categories', {
//       method:"GET",
//     })
//       .then((resp) => {
//         resp.json().then((response) => {
//           setCategories(response.categories);
//         });
//       })
//       .catch((err) => alert(err.message ?? "Something went wrong"));
//   }, []);

//   useEffect(() => {
//     if(category){
//     fetch(`https://api.publicapis.org/entries?Category=${category}`, {
//       method:"GET",
//     })
//       .then((resp) => {
//         resp.json().then((response) => {
//           setEntries(response.entries);
//         });
//       })
//       .catch((err) => alert(err.message ?? "Something went wrong"));
//     }
//   },[category]);
//   return (
//     <div>
//       <select value={category} onChange={(e)=> setCategory(e.target.value)}>
//         {categories.map((category, index) => {
//           <option key={index} value={category}>{category}</option>
//         })}
//       </select>

//       <div className="mainUser">
//         {entries.length > 0 && entries.map((item) => {
//           return (
//           <div key={item} className="miniContainer" >
//         <div>{item.Description}</div>
//         <div style={(color:'red',marginTop:20)}>{item.Category}</div>
//           </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// export default App;


import { useEffect, useState } from "react";
import './App.css';
function App() {
  const [categories, setCategories] = useState([]);
  const [entries, setEntries] = useState([]);
  const [category, setCategory] = useState('');
  

  useEffect(() => {
    fetch('https://api.publicapis.org/categories', {
      method:"GET",
    })
      .then((resp) => {
        resp.json().then((response) => {
          setCategories(response.categories);
        });
      })
      .catch((err) => alert(err.message ?? "Something went wrong"));
  }, []);

  useEffect(() => {
    if(category){
    fetch(`https://api.publicapis.org/entries?Category=${category}`, {
      method:"GET",
    })
      .then((resp) => {
        resp.json().then((response) => {
          setEntries(response.entries);
        });
      })
      .catch((err) => alert(err.message ?? "Something went wrong"));
    }
  },[category]);
  
  return (
    <div className="header">
      <div className="container container-header">
        <div className="logo-container border-white">
          <div className="logo"> </div>
            <span className="dotin">.in</span>
            </div>
            <div className="address-container">
              <p class="hello"></p>
              <div className="icon-address">
              <p></p>
              </div>
            </div>
            <div className="search-container">
            </div>
      <div className="Drop">
      <select value={category} onChange={(e)=> setCategory(e.target.value)} className="search-select">
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <div className="search-icon">

      </div>
      </div>
      </div>
      <div className="Search-bar">
      <div className="mainContainer">
        {entries.length > 0 && entries.map((item, index) => (
          <div key={index} className="miniContainer" >
           <div className="api"><span>API :</span> {item.API}</div>
            <div className="des"><span>Description :</span>  {item.Description}</div>
            <div className="Auth"><span>Auth :</span> {item.Auth}</div>
            <div className="Http"><span>HTTPS :</span> {item.HTTPS}</div>
            <div className="cors"><span>Cors :</span> {item.Cors}</div>
          <div className="anchor"><span>Link:</span><a href={item.Link} target="_blank">{item.Link}</a></div>
            <div className="Category"><span>Category :</span> {item.Category}</div>
          </div>
        ))}
      </div>
      </div>
      </div>
    
  );
}

export default App;
