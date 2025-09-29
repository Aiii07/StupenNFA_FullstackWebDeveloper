import {useState} from 'react';
import booksData from '../../utils/books';

function Books() {
    const [bookList, setBookList] = useState([...booksData]);

    const handleAddBook = () => {
        const newBook = {
            id: bookList.length + 1,
            title: "New Book",
            author: "Yoon Jeonghan",
            year: 2025,
            description: "Buku tambahan menggunakan Hooks.",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wattpad.com%2F568694294-book-3-the-seventeen-heirs-series-yoon-jeonghan&psig=AOvVaw0J9-uQ338ptfMW9cATBDAN&ust=1759217475288000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjj2Mi5_Y8DFQAAAAAdAAAAABAE"
        };
        setBookList([...bookList, newBook]);
        alert("Buku baru berhasil ditambahkan")
    };

    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>Daftar Buku</h2>
            <div className='row'>
                {bookList.map((book) => (
                    <div key={book.id} className='col-md-4 mb-3'>
                        <div className='card h-100 p-2 shadow-sm'>
                            <img src={book.image} alt={book.title} className='card-img-top'/>
                            <div className='card-body'>
                                <h5>{book.title}</h5>
                                <p><b>Author:</b>{book.author}</p>
                                <p><b>Year:</b>{book.year}</p>
                                <p className='small'>{book.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleAddBook} className='btn btn-primary mt-3'>Tambah Buku</button>
        </div>
    );
}

export default Books;