import book from "../interface/book";
import index from "../interface";


export default function sorting(sortBy:index,books:book[],lastSort:index){
    console.log("current: " + sortBy+ " last: "+ lastSort);
    
        if(sortBy === lastSort){
            console.log("test")
            //let reversedArray:book[] = [];
            return books.sort((bookA: book, bookB: book) => {
                let bookOne = bookA[sortBy];
                let bookTwo = bookB[sortBy];
                if (bookOne < bookTwo) {
                    return 1;
                } else if (bookOne > bookTwo) {
                    return -1
                } else {
                    return 0
                }
            });
        }
       
    return books.sort((bookA: book, bookB: book) => {
        let bookOne = bookA[sortBy];
        let bookTwo = bookB[sortBy];
        if (bookOne < bookTwo) {
            return -1;
        } else if (bookOne > bookTwo) {
            return 1
        } else {
            return 0
        }
    });
}