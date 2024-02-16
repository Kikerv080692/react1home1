import './modalHeader.scss'

export default function ModalHeader(props) {
    return (
        <div class="header">
            {props.children}
        </div>
    )
}