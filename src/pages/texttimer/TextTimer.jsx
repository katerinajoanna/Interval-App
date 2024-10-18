import { useState } from 'react';
import './textTimer.css';
import navicon from '../../assets/navicon.svg';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Btn from '../../components/button/Btn';

function TextTimer() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const abortTimer = () => {
        navigate('/set-timer');
    };

    const handleMenuSelect = (option) => {
        setIsMenuOpen(false);
        if (option === 'digital') {
            navigate('/timer');
        } else if (option === 'analog') {
            navigate('/analog-timer');
        } else if (option === 'visual') {
            navigate('/visual-timer');
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <div className="visual">
            <section className="visual-nav">
                <img src={navicon} alt="nav icon" onClick={toggleMenu} />
                <p>interval</p>
            </section>
            <section className="visual-timer">
                <p>SJU MINUTER</p>
                <p> OCH TRETTIOTVÅ </p>
                <p> SEKUNDER KVAR</p>
            </section>
            <section className="visual-btn">
                < Btn text="ABORT TIMER" onClick={abortTimer} />
            </section>
            {/* Renderuj menu, jeśli isMenuOpen jest true */}
            {isMenuOpen && <Menu onSelect={handleMenuSelect} toggleMenu={toggleMenu} />}
        </div>
    )
};

export default TextTimer;
