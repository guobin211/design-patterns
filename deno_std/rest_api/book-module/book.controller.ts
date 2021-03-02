import { RouterContext } from "../../mod.ts";
import bookService from "./book.service.ts";
import { BookVm } from "./book.vm.ts";

export async function getBooks(ctx: RouterContext) {
  ctx.response.body = await bookService.getBooks();
}


export async function getBook(ctx: RouterContext) {
  const id = ctx.params.id;
  if (!id) {
    ctx.response.status = 404;
    ctx.response.body = { message: "查询id必传"}
  } else {
    const book = await bookService.getBook(id);
    if (book) {
      ctx.response.status = 200
      ctx.response.body = book
    } else {
      ctx.response.status = 404
      ctx.response.body = { message: "Book not found" }
    }
  }
}

export async function addBook(ctx: RouterContext) {
  const body = await ctx.request.body();
  const book: BookVm = await body.value ;
  const add =  await bookService.createBook(book);
  if (add) {
    ctx.response.body = { message: 'OK' }
    ctx.response.status = 200
  } else {
    ctx.response.status = 502
    ctx.response.body = { message: "新增失败" }
  }
}
