import ModalWrapper from "./modalWrapper/ModalWrapper";
import ModalHeader from "./modalHeader/modalHeader";
import ModalFooter from "./modalFooter/modalFooter"
import ModalClose from "./modalClose/modalClose";
import ModalBody from "./ModalBody/ModalBody";

import './modal.scss'

export default function Modal(props) {
        const handleClose = (e) => {
            if(e.target === e.currentTarget){
                props.handlerClose()
            }
        }

    return (
        <>
            {props.isModal && <div className="modalWrapper" onClick={handleClose}>
            <ModalWrapper >
                <ModalClose handlerClose={props.handlerClose}/>
                <ModalHeader>
                    {props.header}
                </ModalHeader>
                <ModalBody>
                    {props.body}
                </ModalBody>
                <ModalFooter> 
                    {props.footer}
                </ModalFooter>
            </ModalWrapper>
            </div>}
        </>
    )
}