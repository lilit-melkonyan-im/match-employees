import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";

function Modal({
    children,
    handleClose,
    handleSubmit,
    open,
    title,
    leftBtnText,
    rightBtnText,
}) {
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        startIcon={<CancelIcon />}
                    >
                        {leftBtnText}
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        color="primary"
                        startIcon={<SaveIcon />}
                    >
                        {rightBtnText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;
