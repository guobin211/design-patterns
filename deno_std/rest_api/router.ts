import { Router } from "../mod.ts";
import { addBook, getBook, getBooks } from "./book-module/book.controller.ts";

const router = new Router();
const pathname = "/books";

router.get(pathname, getBooks)
      .get(`${pathname}/:id`, getBook)
      .post(pathname, addBook)

export default router;
