import './digitalTimer.css';
import navicon from '../../assets/navicon.svg';
import Btn from '../../components/button/Btn';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../../components/menu/Menu';

function DigitalTimer() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <p>00:00</p>
            </section>
            <section className="digital-btn">
                <Btn text="ABORT TIMER" onClick={abortTimer} />
            </section>
            {isMenuOpen && <Menu onSelect={handleMenuSelect} setIsMenuOpen={setIsMenuOpen} />}
        </div>
    )
};

export default DigitalTimer;
