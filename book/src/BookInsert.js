import React, {useState, useRef} from 'react';
import './BookInsert.scss'
import BookList from './BookList';
import BookTable from './BookTableTemplate';


const BookInsert = () => {
    // const [bookName, setBookName] = useState('');
    // const [writerName, setWriterName] = useState('');
    // const [bookId, setBookId] = useState('');
    const [inputs, setInputs] = useState({
        bookName: '',
        writerName: '',
        bookId: '',
    });
    const [books, setBooks] = useState([
        {
            id: 1,
            bookName: '나의 투쟁',
            writerName: '히틀러',
            bookId: '2323'
        }
    ])

    const {bookName, writerName, bookId} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
          });
    }
    const nextId = useRef(2);

    const onClick = ()=> {
        const newBook = {
            id: nextId.current,
            bookName,
            writerName,
            bookId
        };
        setBooks([...books, newBook]);
        setInputs({
            bookName: '',
             writerName: '',
            bookId: '',
         });
        nextId.current += 1;
        console.log(books);
    }

    return(
        <>
            <form className='BookNameInsert'>
                <input 
                type="text"
                name='bookName'
                placeholder='책 제목을 입력하세요'
                value={bookName}
                onChange = {onChange}
                />
            </form>
            <form className='WriterNameInsert'>
                <input 
                type="text"
                name='writerName'
                placeholder='작가 이름을 입력하세요' 
                value={writerName}
                onChange = {onChange}
                />
            </form>
            <form className='BookIdInsert'>
                <input 
                type="text"
                name='bookId'
                placeholder='일련번호를 입력하세요' 
                value={bookId}
                onChange = {onChange}
                />
            </form>
            <div className='InsertButton'>
                <button 
                onClick = {onClick}
                >+</button>
            </div>
            <div >
                <BookTable>
                </BookTable>
                <BookList books={books} />
            </div>
        </>
    )
}
export default BookInsert;