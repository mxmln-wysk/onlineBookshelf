import book from "../interface/book";
export default function Book(props:book){
    return(
        <div onClick={props.onClick} className={"buch rounded-1 p-1 align-self-end buch"+props.bookDesign}>
            <span className={"title p-1 ps-2 pe-2"}>
                {props.titel}
            </span>
            <span className={"autor"}>
                {props.autor_in}
            </span>
        </div>
    )
}