import ModalWrapper from "./modalWrapper/ModalWrapper";
import ModalHeader from "./modalHeader/modalHeader";
import ModalFooter from "./modalFooter/modalFooter"
import ModalClose from "./modalClose/modalClose";
import ModalBody from "./ModalBody/ModalBody";

import './modal.scss'

export default function Modal(props) {
    return (
        <div className="modalWrapper">
            <ModalWrapper >
                <ModalClose handlerClose={props.handlerClose}/>
                <ModalHeader>
                    {props.header}
                </ModalHeader>
                <ModalBody>
                    {props.body}
                </ModalBody>
                <ModalFooter listClass={props.listClass}  listClass2={props.listClass2} firstClick={props.handlerClose} secondaryClick={props.handlerClose} 
                            firstText={props.firstText} secondaryText={props.secondaryText} />
            </ModalWrapper>
        </div>
    )
}