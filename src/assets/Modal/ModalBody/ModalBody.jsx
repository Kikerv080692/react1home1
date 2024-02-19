import './modalBody.scss'

export default function ModalBody (props) {
return(
    <h2 className='body'>
    {props.children}
    </h2>
)
}