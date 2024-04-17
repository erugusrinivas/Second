import '../../src/App.css';
import { CircularProgress, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
// import DialogTitle from '@mui/material/DialogTitle';

const Loader = () => {
    const showLoaderContent = useSelector(store => store.user.showLoaderContent);
    return (

        <>
            <div >
                <Dialog style={{overflow:"hidden"}}
                    open={showLoaderContent}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    
                    <CircularProgress style={{backgroundColor:"transparent",overflow:"hidden",margin:"0px",position: "relative", borderradius:"50%" }}/>
                </Dialog>
                </div>
            
        </>
    )
}
export default Loader