import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import {
  rxSandbox,
  expectedObservable,
  coldObservable,
  getObservableMessage,
} from 'rx-sandbox';
import { GoogleBooksService } from './google-books.service';
import { Book, generateMockBook } from './book';
import { mapTo, map } from 'rxjs/operators';
import { mockProvider } from './test-providers';

describe('GoogleBooksService', () => {
  let books: Book[] = [];
  let httpClient: jasmine.SpyObj<HttpClient>;
  let service: GoogleBooksService;
  let cold: coldObservable;
  let e: expectedObservable;
  let getMessages: getObservableMessage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoogleBooksService,
        mockProvider(HttpClient)
      ],
    });

    books = [generateMockBook()];
    httpClient = TestBed.get(HttpClient);
    service = TestBed.get(GoogleBooksService);
  });

  beforeEach(() => {
    let sandbox = rxSandbox.create(true);
    cold = sandbox.cold;
    e = sandbox.e;
    getMessages = sandbox.getMessages;
  });

  it('should return a list of books', done => {
    const response = of(books);
    
    httpClient.get.and.returnValue(response);

    service.searchBooks('RxJS').subscribe(res => {
      expect(res).toEqual(books);
      done();
    });
  });

  it('should return a list of books (marbles)', () => {
    const response = cold('--a|', { a: books });
    const expected = e('--b|', { b: books });
    
    httpClient.get.and.returnValue(response);
    const output = getMessages(service.searchBooks('RxJS'));

    expect(output).toEqual(expected);
  });
});
