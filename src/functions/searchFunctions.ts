import book from "../interface/book";



export default function filterBooks(book:book[],searchItem:string){
    let filteredBooks = book.filter(function (el:book){
        if (el.titel.toLowerCase().indexOf(searchItem.toLowerCase()) > -1){
            return true;
        }
        else if(el.autor_in.toLowerCase().indexOf(searchItem.toLowerCase()) > -1){
             return true
        }
        else if(el.typ.toLowerCase().indexOf(searchItem.toLowerCase()) > -1){
            return true
        }
        else if(el.jahr.toString().indexOf(searchItem.toLowerCase()) > -1){
            return true
        }
        else{
            return false
        }
    })
    return filteredBooks;
}