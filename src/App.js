// import React, { useEffect } from "react";
// import "./App.css";
// import { useDispatch } from "react-redux";
// import { saveUserDetails } from "./redux/slices/userSlice";
// import UserDetails from "./UserDetails";

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(saveUserDetails("E Srinivas"));
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <UserDetails />
//     </div>
//   );
// }

// export default App;

import './App.css';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserDetails from './UserDetails';
import { saveUserDetails } from './redux/slices/userSlice';
import CustomSnackbar from "./Snackbar/Snackbar";
import Loader from "./Loader/Loader";
import Pages from "./pages/Pages";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(saveUserDetails("E Srinivas"));
        }, 1000)
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(showSnackbar({ visible: true, message: 'HI Srinivas...!' }))
    //     setTimeout(() => {
    //         dispatch(showSnackbar({ visible: false, message: '' }))
    //     }, 3000)
    // }, [dispatch])

    // useEffect(()=>{
    //     dispatch(showLoader({visible:true}))
    //     setTimeout(()=>{
    //         dispatch(showLoader({visible:false}))
    //     },3000)
    // },[dispatch])
    

    return (
        <div>
            <UserDetails />
            <CustomSnackbar />
            <Loader/>
          <Pages/>

        </div>
    )
}
export default App