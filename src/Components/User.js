// import { useEffect, useState } from "react";
// import "./App.css";

// function User() {
//     const [categories,setCategories] = useState([]);

//     useEffect(() => {
//         fetch('https://api.publicapis.org/categories',{
//             method:  'GET',
//         })
//         .then((resp) => {
//             resp.json().then((response) => {
//                setCategories(response.categories);
//             });
//         })
//         .catch((err) => alert(err.message ?? "Something went wrong"));
//     }, []);
//     return (
//         <div>
//              <select>
//             {categories.map((category,index)=>{
//                 <option key={index} value={category}>{category}</option>
//             })}
//             </select>
        
//         <div className="mainUser">
//             {Array.map((item) => {
//                 return <div key={item} className="miniContainer" />
//             })}
//         </div>
//         </div>
//     );
// }
// export default User;