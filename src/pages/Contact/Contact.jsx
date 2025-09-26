function Contact() {
    return (
        <div className="container mt-5 col-md-6">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" placeholder="masukan nama"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="masukan email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea className="form-control" rows="3" placeholder="tulisakan pesan"/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Kirim</button>
            </form>
        </div>
    );
}

export default Contact;