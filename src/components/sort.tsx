import index from "../interface";
export default function Sort(props:any){
    const sortBtn:index[] = ["titel","autor_in","typ","jahr"]
    return(
        <div className={"row mb-3"}>
            <h2 className={"col-3 text-secondary"}>Sortiere nach:</h2>
            {sortBtn.map((item,index) =>
                <SortBtn bookArr={props.arr} key={index} title={item} onClick={props.sortFunc}/>
            )}
        </div>
    )
}
function SortBtn(props:any){
    return(
        <button className={"col btn btn-info m-1"}  onClick={()=>props.onClick(props.title)}>{props.title}</button>
    )
}