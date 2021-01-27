import React from 'react'
import useModal from './useModal'
import Modal from './Modal'

let ModalContext = React.createContext()
let {Provider} = ModalContext

let ModalProvider = ({children}) => {
    let {modalOpen, handleModal, modalContent } = useModal()
    return(
        <Provider value = {{modalOpen, handleModal, modalContent}}>
            <Modal></Modal>
            {children}
        </Provider>
    )
}

export {ModalContext, ModalProvider}