import './modalBody.scss'

export default function ModalBody (props) {
return(
    <h2 class='body'>
    {props.children}
    </h2>
)
}