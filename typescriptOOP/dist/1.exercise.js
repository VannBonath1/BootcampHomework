"use strict";
class Book {
    constructor(title, author, genre, avaliable) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.avaliable = avaliable;
    }
}
class library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(addedBook) {
        this.books.push(addedBook);
    }
    removeBook(title) {
        this.books = this.books.filter((bookElement) => bookElement.title !== title);
    }
    searchBook(titlee) {
        const result = this.books.filter((bookElement) => {
            return bookElement.title === titlee;
        });
        return result;
    }
    availableBook() {
        const availableBookResult = this.books.filter((bookElement) => {
            return bookElement.avaliable === true;
        });
        return availableBookResult;
    }
    borrowBook(titlee) {
        const book = this.books.find((bookElement) => {
            return bookElement.title === titlee && bookElement.avaliable === true;
        });
        if (book) {
            console.log(`i borrowed ${titlee} book`);
            book.avaliable = false;
        }
        return true;
    }
    returnBook(titlee) {
        const book = this.books.find((bookElement) => {
            return bookElement.title === titlee && bookElement.avaliable === false;
        });
        if (book) {
            console.log(`i return ${titlee} book`);
            book.avaliable = false;
            return true;
        }
        return false;
    }
}
const library1 = new library("new year library");
const Book1 = new Book("Iron man", "Stephen chov", "romantic", true);
const Book2 = new Book("Iron man2", "Stephen chov2", "romantic2", true);
const Book3 = new Book("Iron man3", "Stephen chov3", "romantic3", true);
library1.addBook(Book1);
library1.addBook(Book2);
library1.addBook(Book3);
library1.borrowBook("Iron man");
console.log(library1.books);
library1.returnBook("Iron man");
console.log(library1.books);
class User {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook1(library2, title) {
        if (this.borrowedBooks.length >= 5) {
            console.log("You have reached the maximum limit for borrowing books.");
            return false;
        }
        const success = library2.borrowBook(title);
        if (success) {
            const book = library2.books.find((book) => book.title === title);
            if (book) {
                this.borrowedBooks.push(book);
                console.log(`successfully borrowed ${title} to your account`);
            }
        }
        return success;
    }
    viewBorrowedBooks() {
        return this.borrowedBooks;
    }
}
const user1 = new User("bonath");
const result2 = user1.borrowBook1(library1, "Iron man2");
console.log(result2);
const result3 = user1.viewBorrowedBooks();
console.log(result3);
