import books from '../../utils/books';

function Home() {
    return (
        <div className="text-center">
            <h1>Welcome to My Web</h1>
            <p>This website was built using React, Vite and Bootstrap</p>

            <div className="container mt-5">
                <h3>About</h3>
                <p>Website ini dibuat untuk latihan dasar React Router. Tujuannya agar lebih cepat paham cara menggunakannya</p>

                <h3 className="mt-5">Novel Populer</h3>
                <div className="row">
                    {books.slice(0,3).map((book) => (
                        <div key={book.id} className="col-md-4 mb-3">
                            <div className="card p-2 shadow-sm">
                                <img src={book.image} alt={book.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5>{book.title}</h5>
                                    <p className="small">{book.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-3">
                    <a href="/team" className="btn btn-primary me-2">Team</a>
                    <a href="/contact" className="btn btn-primary secondary">Contact Us</a>
                    <a href="/books" className="btn btn-success">Lihat Buku</a>
                </div>
            </div>
        </div>
    )
}

export default Home;