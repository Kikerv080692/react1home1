import './modalFooter.scss'

//firstText, secondaryText, firstClick, secondaryClick
export default function ModalFooter(props) {
    return (
        <button >
         {props.children}
        </button>
    )
}