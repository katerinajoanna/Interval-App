import './digitalTimer.css';
import navicon from '../../assets/navicon.svg';
import Btn from '../../components/button/Btn';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from '../../components/menu/Menu';
//import Timer from 'easytimer.js';
import { motion } from 'framer-motion';


function DigitalTimer({ display, timeLeft }) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //const [time, setTime] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {

    }, [timeLeft]);

    const abortTimer = () => {
        setIsClicked(true);
        setTimeout(() => {
            navigate('/set-timer');
        }, 500);
    };

    const handleMenuSelect = (option) => {
        setIsMenuOpen(false);  //stänger menu
        if (option === 'digital') {
            navigate('/timer')
        }
        // if (option === 'digital') {
        //     navigate('/digital-timer');
        // } else if (option === 'analog') {
        //     navigate('/analog-timer');
        // } else if (option === 'visual') {
        //     navigate('/visual-timer');
        // }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={display ? 'digital display-timer' : 'digital hide-timer'}>
            <section className="digital-nav">
                <img src={navicon} alt="nav icon" onClick={toggleMenu} />
                <p>interval</p>
            </section>
            <section className="digital-timer">
                <p>{timeLeft}</p>
            </section>

            <motion.section
                className="digital-btn"
                initial={{
                    scale: 1,
                    rotate: 0,
                    fontSize: 14
                }}
                animate={isClicked
                    ? {
                        scale: 1.6,
                        rotate: 360,
                        fontSize: 20
                    }
                    : {
                        scale: 1,
                        rotate: 0
                    }
                }
                transition={{ duration: 0.5 }}

            >
                <Btn text="ABORT TIMER" onClick={abortTimer} />
            </motion.section>
            {isMenuOpen && <Menu onSelect={handleMenuSelect} setIsMenuOpen={setIsMenuOpen} />}
        </div>
    )
};

export default DigitalTimer;
