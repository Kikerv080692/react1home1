import './modalHeader.scss'

export default function ModalHeader(props) {
    return (
        <div className="header">
            {props.children}
        </div>
    )
}