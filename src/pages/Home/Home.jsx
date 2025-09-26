function Home() {
    return (
        <div className="text-center">
            <h1>Welcome to My Web</h1>
            <p>This website was built using React, Vite and Bootstrap</p>
            <div className="container mt-5">
                <h3>About</h3>
                <p>Website ini dibuat untuk latihan dasar React Router. Tujuannya agar lebih cepat paham cara menggunakannya</p>
                <div className="mt-3">
                    <a href="/team" className="btn btn-primary me-2">Team</a>
                    <a href="/contact" className="btn btn-primary secondary">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Home;