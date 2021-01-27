import React from "react"
import { ModalContext } from "./modalContext"
import { Dialog, DialogActions, Button } from "@material-ui/core"

const Modal = () => {
    let {modalContent,modalOpen,handleModal} = React.useContext(ModalContext)
    const handleClose = () => {
        handleModal()
    }
    return (
        <Dialog fullWidth maxWidth="xs" open={modalOpen} onClose={handleClose}>
        {modalContent}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default Modal