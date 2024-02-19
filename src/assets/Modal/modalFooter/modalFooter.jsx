import './modalFooter.scss'
import Button from '../../Button/Button'



export default function ModalFooter(props) {
    return (
        <>
        { props.children &&  <div  className='container-btn'>{props.children}</div>} 
        </>
    )
}






// if(props.secondaryText === ''){
//     return <div className="container-btn">
//         <Button className={props.listClass2} onClick={props.firstClick}>{props.firstText}</Button>
//     </div>
// }else{
//     return (
//         <div className="container-btn">
//             <Button className={props.listClass} onClick={props.firstClick}>{props.firstText}</Button>
//             <Button  onClick={props.secondaryClick}>{props.secondaryText}</Button>
//         </div>
//     )
// }