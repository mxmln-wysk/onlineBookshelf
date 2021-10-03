import React, {useState} from 'react';
import Book from "./components/book";
import unsortedBooks from "./functions/bookList"
import BookModal from "./components/modal";
import Sort from "./components/sort";
import sorting from "./functions/sortFunctions";
import filterBooks from "./functions/searchFunctions"
import book from "./interface/book";
import index from "./interface";
import Search from "./components/search"
let bookProps = unsortedBooks[1];
let searchedBook: book[]= unsortedBooks;
let firstStateIndex:index = "jahr";

export default function App() {
    const [isOpen, toggleModal] = useState(false);
    const [searchValue, changeSearch] = useState("");
    const [sortedBy, changeSort] = useState(firstStateIndex);
    const [isAsc,changeAsc] = useState(true);

    const changeDirection = () =>{
        changeAsc(!isAsc)
    }
    const sortBtn = (childData:any) => {
      changeSort(childData)
    }
    const showModal = (props:book) =>{
        toggleModal(true);
        bookProps = props;
    }
    const hideModal = () => {
        toggleModal(false);
    }
    const handleChange = (event:any) => {
        changeSearch(event.target.value);
        searchedBook = filterBooks(unsortedBooks,event.target.value);
    }
    return (
      <div className={"container"}>
          <h1 className={"text-secondary"}>Digitales Bücherregal ({searchedBook.length} Bücher)</h1>
          <Search
              value={searchValue}
              onChange={handleChange}
          />
          <Sort sortFunc={sortBtn} changeAsc={changeDirection} current={sortedBy} direction={isAsc} arr={searchedBook}/>
          <div id={"bookshelf"} className={"row pe-2"}>
              {sorting(sortedBy, searchedBook,isAsc).map((currentBook:book) =>
                  <Book titel={currentBook.titel}
                        autor_in={currentBook.autor_in}
                        typ={currentBook.typ}
                        jahr={currentBook.jahr}
                        key={currentBook.titel+"_"+currentBook.jahr}
                        bookDesign={currentBook.bookDesign}
                        onClick={() => {showModal(currentBook)}}
                  />
              )}
          </div>
          <BookModal
              show={isOpen}
              onHide={() => hideModal()}
              onClick={()=> hideModal()}
              modalContent = {bookProps}
          />
      </div>
  );
}