import index from "../interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
export default function Sort(props:any){
    const sortBtn:index[] = ["titel","autor_in","typ","jahr"]
    return(
        <div className={"row mb-3"}>
            <h2 className={"col-3 text-secondary"}>Sortiere nach:</h2>
            {sortBtn.map((item,index) =>
                <SortBtn 
                bookArr={props.arr}  
                current={props.current}
                direction={props.direction} 
                key={index} title={item} 
                onClick={props.sortFunc}
                changeAsc={props.changeAsc}
                />
                
            )}
        </div>
    )
}
function SortBtn(props:any){
    return(
        <button 
            className={"col btn btn-info m-1"}  
            onClick={()=> props.current === props.title ? props.changeAsc(): props.onClick(props.title)}
            >
            {props.title +" "}
            {props.current === props.title ? <Direction direction={props.direction}/>: ""}
        </button>
    )
}

const Direction = (props:any) => {
    return(
            <FontAwesomeIcon icon={props.direction ? faSortUp : faSortDown}/>  
    )
}