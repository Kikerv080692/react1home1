

import './modalWrapper.scss'

export default function ModalWrapper(props) {
    return (
        <div className="container_wrapper">
       {props.children}
        </div>
    )
}