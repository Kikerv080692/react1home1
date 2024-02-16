import './maodelClose.scss'


export default function ModalClose(props) {
    return (
        <div className='btnClose'>
            <button onClick={props.handlerClose}> &times;</button>
        </div>
    )
}