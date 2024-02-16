import './button.scss'
//[type, classNames, onClick, children]
export default  function Button(props) {
    
    return (
        <button type={props.type} className={props.className} onClick={props.handlerClick}>{props.children}</button>
    )
}

