import ModalWrapper from "./modalWrapper/ModalWrapper";
import ModalHeader from "./modalHeader/modalHeader";
import ModalFooter from "./modalFooter/modalFooter"
import ModalClose from "./modalClose/modalClose";
import ModalBody from "./ModalBody/ModalBody";

export default function Modal(props) {
    return (
        <ModalWrapper>
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
    )
}