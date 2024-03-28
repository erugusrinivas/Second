// // import './App.css';

// // import './App.css';
// // import LoginForm from './Components/LoginForm';
// // import GratsButton from './Components/GratsButtton';
// // import prectimage from './practimage.png';
// // import LoginForm from './Components/User.js';
// // function App() {
// //   return (

// // <div className='Myapp'>
// // <div className="navbar">
// //             <ul>
// //                 <li><h1>FACEBOOK</h1></li>
// //             </ul>
// //             </div>
// //             <div class="img">
// //             <h2><b>facebook helps you connect and share with the people in your life</b></h2>
// //             <img src={prectimage} alt="profile pic" />

// //         </div>
// // <div className='Appcontainer'>
// // <div className='mainContainers'>
// //   <div> <LoginForm  titleClass="TextField" placeholder={"Email address or phone number"}/></div>
// //   <div><LoginForm  titleClass="TextField1" placeholder={"Password"} /> </div>
// //   <GratsButton title={"Log in"} handleOnClick={()=>console.log("Login")} titleClass="submitTitle" color="blue"/>
// //   <div className="Forget"><a href='https://www.facebook.com'>Forgotten password?</a></div>
// //   <div className='line'></div>
// //   <GratsButton title={"Create new account"} handleOnClick={()=>console.log("Submit")} titleClass="Submit" color="green"/>

// // </div>
// // </div>

// // </div>
// //   );
// // }

// // export default App;



// // import { useEffect, useState } from "react";
// // import "./App.css";

// // function App() {
// //   const [categories, setCategories] = useState([]);
// //   const [entries, setEntries] = useState([]);
// //   const [category, setCategory] = useState('');


// //   useEffect(() => {
// //     fetch('https://api.publicapis.org/categories', {
// //       method:"GET",
// //     })
// //       .then((resp) => {
// //         resp.json().then((response) => {
// //           setCategories(response.categories);
// //         });
// //       })
// //       .catch((err) => alert(err.message ?? "Something went wrong"));
// //   }, []);

// //   useEffect(() => {
// //     if(category){
// //     fetch(`https://api.publicapis.org/entries?Category=${category}`, {
// //       method:"GET",
// //     })
// //       .then((resp) => {
// //         resp.json().then((response) => {
// //           setEntries(response.entries);
// //         });
// //       })
// //       .catch((err) => alert(err.message ?? "Something went wrong"));
// //     }
// //   },[category]);
// //   return (
// //     <div>
// //       <select value={category} onChange={(e)=> setCategory(e.target.value)}>
// //         {categories.map((category, index) => {
// //           <option key={index} value={category}>{category}</option>
// //         })}
// //       </select>

// //       <div className="mainUser">
// //         {entries.length > 0 && entries.map((item) => {
// //           return (
// //           <div key={item} className="miniContainer" >
// //         <div>{item.Description}</div>
// //         <div style={(color:'red',marginTop:20)}>{item.Category}</div>
// //           </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }
// // export default App;


// // import { useEffect, useState } from "react";
// // import './App.css';
// // function App() {
// //   const [categories, setCategories] = useState([]);
// //   const [entries, setEntries] = useState([]);
// //   const [category, setCategory] = useState('');


// //   useEffect(() => {
// //     fetch('https://api.publicapis.org/categories', {
// //       method:"GET",
// //     })
// //       .then((resp) => {
// //         resp.json().then((response) => {
// //           setCategories(response.categories);
// //         });
// //       })
// //       .catch((err) => alert(err.message ?? "Something went wrong"));
// //   }, []);

// //   useEffect(() => {
// //     if(category){
// //     fetch(`https://api.publicapis.org/entries?Category=${category}`, {
// //       method:"GET",
// //     })
// //       .then((resp) => {
// //         resp.json().then((response) => {
// //           setEntries(response.entries);
// //         });
// //       })
// //       .catch((err) => alert(err.message ?? "Something went wrong"));
// //     }
// //   },[category]);

// //   return (
// //     <div className="header">
// //       <div className="container container-header">
// //         <div className="logo-container border-white">
// //           <div className="logo"> </div>
// //             <span className="dotin">.in</span>
// //             </div>
// //             <div className="address-container">
// //               <p class="hello"></p>
// //               <div className="icon-address">
// //               <p></p>
// //               </div>
// //             </div>
// //             <div className="search-container">
// //             </div>
// //       <div className="Drop">
// //       <select value={category} onChange={(e)=> setCategory(e.target.value)} className="search-select">
// //         {categories.map((category, index) => (
// //           <option key={index} value={category}>{category}</option>
// //         ))}
// //       </select>
// //       <div className="search-icon">

// //       </div>
// //       </div>
// //       </div>
// //       <div className="Search-bar">
// //       <div className="mainContainer">
// //         {entries.length > 0 && entries.map((item, index) => (
// //           <div key={index} className="miniContainer" >
// //            <div className="api"><span>API :</span> {item.API}</div>
// //             <div className="des"><span>Description :</span>  {item.Description}</div>
// //             <div className="Auth"><span>Auth :</span> {item.Auth}</div>
// //             <div className="Http"><span>HTTPS :</span> {item.HTTPS}</div>
// //             <div className="cors"><span>Cors :</span> {item.Cors}</div>
// //           <div className="anchor"><span>Link:</span><a href={item.Link} target="_blank">{item.Link}</a></div>
// //             <div className="Category"><span>Category :</span> {item.Category}</div>
// //           </div>
// //         ))}
// //       </div>
// //       </div>
// //       </div>
// //   )
// //         }
// //         export default App;



// // import './App.css'
// // import moment from 'moment/moment';
// //     function App(){
// //       return(
// //         <>
// //         <div className='container'>
// //           <table>
// //           <thead>
// //             <tr>
// //               <th colspan={9}><span>Day-Date-month-year</span></th>
// //               <th colSpan={2}>Date-month-year</th>
// //               <th colSpan={3}>Hours-Minutes-AM/PM</th>
// //               <th colSpan={2}>Hours-Minutes-Seconds/PM</th>
// //               <th colSpan={2}>Day-Date/Month/Year/Hours/Minutes/Seconds/PM</th>
// //             </tr>    
// //    <td colSpan={9}> <div><p>{moment(new Date()).format(' ddd DD MM YYYY ')}</p></div></td> 
// //    <td colSpan={2}><div><p>{moment(new Date()).format('D - M - YY')}</p></div></td>
// //      <td colSpan={3}><div><p>{moment(new Date()).format('hh:mm A')}</p></div></td>
// //    <td colSpan={1}><div><p>{moment(new Date()).format('hh:mm:ss A')}</p></div></td>
// //      <td colSpan={5}><div><h4>{moment(new Date()).format('ddd DD MMMM YYYY hh:mm:SS A')}</h4></div></td>
// //      </thead>
// //      </table>
// //      </div>
// //         </>
// //       )
// //     }
// // export default  App;


// import React from "react";
// import './App.css';
// // import Button from "react-bootstrap/Button"
// // import { render } from "react-dom";
// // import "bootstrap/dist/css/bootstrap.min.css"

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       categories:[],
//       entries:[],
//       category:''
//     };

//   }

//   componentDidMount() {
//     fetch('https://api.publicapis.org/categories')
//     .then(resp=>{
//       resp.json()
//     })
//     .then(data=>{
//       this.setState({categories:data.categories})
//     })
//     .catch(error=>{
//       console.error('Fetching Error',error);
//     });
    
//   }
// componentDidUpdate(preProps,prevState){
//   if(this.state.category !== prevState.category){
//     if(this.state.category){
//       fetch(`https://api.publicapis.org/entries?Category=${this.state.category}`)
//       .then(resp =>{
//         resp.json()
//       })
//       .then(data =>{
//         this.setState({entries:data.entries});
//       })
//       .catch(error =>{
//         console.error('Error fetching data',error);
//       });
//     }
//     else{
//       this.setState({entries:[]});
//     }
//   }
// }
//   render() {
//    const{categories,entries} = this.state
//     return (
//       <div className="header">
//       <div className="container container-header">
//         <div className="logo-container border-white">
//           <div className="logo"> </div>
//           <span className="dotin">.in</span>
//         </div>
//         <div className="address-container">
//           <p className="hello"></p>
//           <div className="icon-address">
//             <p></p>
//           </div>
//         </div>
//         <div className="search-container">
//           <div className="Drop">
//             <select value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })} className="search-select">
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>{category}</option>
//               ))}
//             </select>
//             <div className="search-icon">
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Search-bar">
//         <div className="mainContainer">
//           {entries.length > 0 && entries.map((item, index) => (
//             <div key={index} className="miniContainer" >
//               <div className="api"><span>API :</span> {item.API}</div>
//               <div className="des"><span>Description :</span>  {item.Description}</div>
//               <div className="Auth"><span>Auth :</span> {item.Auth}</div>
//               <div className="Http"><span>HTTPS :</span> {item.HTTPS}</div>
//               <div className="cors"><span>Cors :</span> {item.Cors}</div>
//               <div className="anchor"><span>Link:</span><a href={item.Link} target="_blank" rel="noopener noreferrer">{item.Link}</a></div>
//               <div className="Category"><span>Category :</span> {item.Category}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     );
//   }
// }
// export default App;
import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      entries: [],
      category: ''
    };
  }

  componentDidMount() {
    fetch('https://api.publicapis.org/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ categories: data.categories });
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        alert(error.message ?? "Something went wrong");
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.category !== prevState.category) {
      if (this.state.category) {
        fetch(`https://api.publicapis.org/entries?Category=${this.state.category}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch entries');
            }
            return response.json();
          })
          .then(data => {
            this.setState({ entries: data.entries });
          })
          .catch(error => {
            console.error('Error fetching entries:', error);
            alert(error.message ?? "Something went wrong");
          });
      } else {
        this.setState({ entries: [] });
      }
    }
  }

  render() {
    const { categories, entries } = this.state;

    return (
      <div className="header">
        <div className="container container-header">
          <div className="logo-container border-white">
            <div className="logo"><h1>API</h1></div>
            <span className="dotin">.in</span>
          </div>
          <div className="address-container">
            <p className="hello"></p>
            <div className="icon-address">
              <p></p>
            </div>
          </div>
          <div className="search-container">
            <div className="Drop">
              <select value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })} className="search-select">
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <div className="search-icon">
              </div>
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
                <div className="anchor"><span>Link:</span><a href={item.Link} target="_blank" rel="noopener noreferrer">{item.Link}</a></div>
                <div className="Category"><span>Category :</span> {item.Category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
