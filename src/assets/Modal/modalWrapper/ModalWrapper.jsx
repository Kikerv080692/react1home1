

import './modalWrapper.scss'

export default function ModalWrapper(props) {
    return (
        <div  className="container-wrapper">
       {props.children}
        </div>
    )
}