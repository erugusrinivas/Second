import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { showSnackbar } from "../redux/slices/userSlice";

const CustomSnackbar = () => {
    const dispatch = useDispatch();
    const snackBarContent = useSelector(state => state.user.snackBarContent);

    const handleClose = () => {
        dispatch(showSnackbar({}))
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(showSnackbar({ visible: false, message: '' }))
        }, 1000)
    }, [dispatch])

    return (
        <Snackbar
            open={snackBarContent.visible}
            autoHideDuration={4000}
            onClose={handleClose}
            message={snackBarContent.message}
        />
    );

}
export default CustomSnackbar