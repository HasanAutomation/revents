import React from 'react'
import { Modal, ModalHeader } from 'semantic-ui-react';
import { closeModal } from './modalReducer';
import { useDispatch } from 'react-redux';
const ModalWrapper = ({header,size,children}) => {
    const dispatch = useDispatch();
    return ( 
        <Modal open={true} onClose={()=>dispatch(closeModal())} size={size}>
            {header && <ModalHeader>{header}</ModalHeader>}
            <Modal.Content>
                {children}
            </Modal.Content>

        </Modal>
     );
}
 
export default ModalWrapper;