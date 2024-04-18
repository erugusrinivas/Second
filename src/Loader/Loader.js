// import '../../src/App.css';
// import { CircularProgress, Dialog } from '@mui/material';
// import { useSelector } from 'react-redux';
// // import DialogTitle from '@mui/material/DialogTitle';

// const Loader = () => {
//     const showLoaderContent = useSelector(store => store.user.showLoaderContent);
//     return (

//         <>
//             <div >
//                 <Dialog style={{overflow:"hidden"}}
//                     open={showLoaderContent}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                 >
                    
//                     <CircularProgress style={{backgroundColor:"none",overflow:"hidden",margin:"30px",position: "relative", borderradius:"50%" }}/>
//                 </Dialog>
//                 </div>
            
//         </>
//     )
// }
// export default Loader
import '../../src/App.css';
import { CircularProgress, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
// import DialogTitle from '@mui/material/DialogTitle';

// Define the Loader component as a functional component
const Loader = () => {
  // Use the useSelector hook to get the showLoaderContent value from the Redux store
  const showLoaderContent = useSelector(store => store.user.showLoaderContent);

  // Return the JSX content of the Loader component
  return (
    <>
      <div id="Loader" >
        <Dialog style={{ overflow: "hidden" }}
          open={showLoaderContent.visible}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* Use the CircularProgress component to display a loading spinner */}
          <CircularProgress style={{ background: "none", overflow: "hidden", margin: "30px", position: "relative", borderRadius: "50%", width: "50px", height: "50px" }} />
        </Dialog>
      </div>
    </>
  )
}

// Export the Loader component as the default export
export default Loader;