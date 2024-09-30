import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  newTitle : string = ""
  newAuthor : string = ""
  bookList: Book[] = []

  book: Book = {
    id: 1,
    title: "Robinson Crusoe",
    author: "Daniel Dafoe"
  }

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")
    this.bookList = savedBooks ? JSON.parse(savedBooks) : []
  }

  addBook() {
    if(this.newTitle.trim().length && this.newAuthor.trim().length){
      let newBook: Book = {
        id: this.bookList.length + 1,
        title: this.newTitle,
        author: this.newAuthor
      }
      this.bookList.push(newBook);
      this.newTitle = "";
      this.newAuthor = "";
    }
  }
}
