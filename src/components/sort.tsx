import index from "../interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
export default function Sort(props:any){
    const sortBtn:index[] = ["titel","autor_in","typ","jahr"]
    return(
        <div className={"row mb-3"}>
            <h2 className={"col-3 text-secondary"}>Sortiere nach:</h2>
            {sortBtn.map((title) =>
                SortBtn(props.current, props.direction, title, props.sortFunc,props.changeAsc)                
            )}
        </div>
    )
}
function SortBtn(current:string, direction:boolean, title:string, onClick:any, changeAsc:any){
    return(
        <button 
            className={"col btn btn-info m-1"}  
            onClick={()=> current === title ? changeAsc(): onClick(title)}
            >
            {title +" "}
            {current === title ? Direction(direction): ""}
        </button>
    )
}

const Direction = (direction:boolean) => {
    return(
            <FontAwesomeIcon icon={direction ? faSortUp : faSortDown}/>  
    )
}