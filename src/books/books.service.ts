import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [
    { id: 1, title: 'Clean Code', author: 'Robert Martin' },
    { id: 2, title: 'Design Patterns', author: 'Gang of Four' },
  ];

  getAll() {
    return this.books;
  }
}
