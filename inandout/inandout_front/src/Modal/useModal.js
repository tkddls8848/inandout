import React from 'react'

export default () => {
    let [modalOpen, setModalOpen] = React.useState(false)
    let [modalContent, setModalContent] = React.useState(null)

    let handleModal = (content = false) => {
        setModalOpen(!modalOpen)
        if(content) {
            setModalContent(content)
        }
    }
    return { modalOpen, handleModal, modalContent}
}