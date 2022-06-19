import React from 'react';
import './BookList.scss'
function Book({ books }) {
  return (
    <div>
      {/* // <b>{books.id}</b> <span>{books.bookName}</span><span>{books.writerName}</span><span>{books.bookId}</span>  */}
      <div class="table">
        <table>
          <tbody>
              <tr>
                  <td class='idvalue'>{books.bookId}</td>
                  <td class='namevalue'>{books.bookName}</td>
                  <td class='writervalue'>{books.writerName}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BookList({books}) {
  return (
    <div>
      {books.map(books => (
        <Book books={books} key={books.bookId} />
      ))}
    </div>
  );
}

export default BookList;