import './digitalTimer.css';
import navicon from '../../assets/navicon.svg';
import Btn from '../../components/button/Btn';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from '../../components/menu/Menu';
import Timer from 'easytimer.js';

function DigitalTimer({timeLeft}) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        
    }, []);

    const abortTimer = () => {
        navigate('/set-timer');
    };

    const handleMenuSelect = (option) => {
        setIsMenuOpen(false);  //stänger menu
        if (option === 'digital') {
            navigate('/digital-timer');
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
        <div className='digital'>
            <section className="digital-nav">
                <img src={navicon} alt="nav icon" onClick={toggleMenu} />
                <p>interval</p>
            </section>
            <section className="digital-timer">
                <p>{timeLeft}</p>
            </section>
            <section className="digital-btn">
                <Btn text="ABORT TIMER" onClick={abortTimer} />
            </section>
            {isMenuOpen && <Menu onSelect={handleMenuSelect} setIsMenuOpen={setIsMenuOpen} />}
        </div>
    )
};

export default DigitalTimer;
