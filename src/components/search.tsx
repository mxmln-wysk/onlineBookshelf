import React from "react";
interface search{
    value:string,
    onChange:any
}
const Search = (props:search) => {
  return(
      <>
          <div className={"row  mb-1 text-secondary"}>
              <label className={"col-3"} htmlFor={"filter"}><h2> Suche nach: </h2></label>
              <input id={"filter"} className={"col form-control"} type={"text"} value={props.value} onChange={props.onChange}  name={"filter"}/>
          </div>
      </>

  )
}
export default Search;