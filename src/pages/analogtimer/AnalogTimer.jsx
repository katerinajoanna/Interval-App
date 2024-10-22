import { useState } from 'react';
import './analogTimer.css';
import navicon from '../../assets/navicon.svg';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu/Menu';
import Btn from '../../components/button/Btn';
import minutes from '../../assets/minutes.svg';

function AnalogTimer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const abortTimer = () => {
        navigate('/set-timer');
    };

    const handleMenuSelect = (option) => {
        setIsMenuOpen(false);
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
        <div className='analog'>
            <section className="analog-nav">
                <img src={navicon} alt="nav icon" onClick={toggleMenu} />
                <p>interval</p>
            </section>
            <section className="analog-timer">
                <figure className="analog-img">
                    <img src={minutes} alt="minutes timer" />
                    <div className="hand minute-hand"></div>
                    <div className="hand second-hand"></div>
                </figure>
            </section>
            <section className="analog-btn">
                < Btn text="ABORT TIMER" onClick={abortTimer} />
            </section>

            {isMenuOpen && <Menu onSelect={handleMenuSelect} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} />}
        </div>
    )
};

export default AnalogTimer;
