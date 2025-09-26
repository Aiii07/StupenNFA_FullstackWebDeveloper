import foto1 from "../../assets/foto1.jpeg";
import foto2 from "../../assets/foto2.jpeg";
import foto3 from "../../assets/foto3.jpeg";
import styles from './Team.module.css';

function Team() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Our Team</h2>
            <div className="row">
                <div className="col-md-4 text-center mb-3">
                    <div className="card p-3 shadow-sm">
                        <img src={foto1} alt="member1" className={`mx-auto mb-3 ${styles.teamImg}`} />
                        <h5>Hong Jisoo</h5>
                        <p>UI/UX Design</p>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-3">
                    <div className="card p-3 shadow-sm">
                        <img src={foto2} alt="member2" className={`mx-auto mb-3 ${styles.teamImg}`} />
                        <h5>Choi Sungcheol</h5>
                        <p>Frontend Developer</p>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-3">
                    <div className="card p-3 shadow-sm">
                        <img src={foto3} alt="member3" className={`mx-auto mb-3 ${styles.teamImg}`} />
                        <h5>Yoon Jeonghan</h5>
                        <p>Backend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;