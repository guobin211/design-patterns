import { BookVm } from "./book.vm.ts";

let books: BookVm[] = [
  { id: "1", title: 'deno', anthor: "rua"}
];

export class BookService {
  async createBook(bv: Partial<BookVm>): Promise<BookVm> {
    const book = Object.assign({ id: "", title: "", anthor: "" }, bv, { id: (books.length + 1).toString(10) });
    books.push(book);
    return book;
  }

  async getBooks() {
    return books;
  }

  async getBook(id: string) {
    return books.find(e => e.id === id);
  }

  async updateBook(bv: BookVm) {
    let b = await this.getBook(bv.id);
    if (b) {
      b = {...b, ...bv};
      books = [...books.filter(el => el.id !== bv.id), b];
      return b;
    } else {
      return false;
    }
  }
}

const bookService = new BookService();

export default bookService;
