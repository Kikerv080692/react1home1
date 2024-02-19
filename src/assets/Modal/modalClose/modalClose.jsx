import './maodelClose.scss'


export default function ModalClose(props) {
    return (
        <div className='btn-close'>
            <button onClick={props.handlerClose}> &times;</button>
        </div>
    )
}