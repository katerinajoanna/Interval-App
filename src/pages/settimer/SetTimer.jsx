import './setTimer.css';
import Btn from '../../components/button/Btn';
import vectorLeft from '../../assets/vectorLeft.svg';
import vectorRigth from '../../assets/vectorRigth.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

function SetTimer({ setTime }) {
    const [minutes, setMinutes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();


    const incrementMinutes = () => {
        if (minutes < 99) {
            setMinutes(minutes + 1)
        }
    };

    const decrementMinutes = () => {
        if (minutes > 0) {
            setMinutes(minutes - 1)
        }
    };

    const startTimer = () => {
        if (minutes === 0) {
            //alert("Välj en tid som är längre än 0 minuter!");
            return;
        }
        console.log(minutes);
        console.log(typeof minutes);
        const timeInSeconds = minutes * 60;
        console.log(timeInSeconds);
        setTime(timeInSeconds);

        setIsClicked(true);

        setTimeout(() => {
            navigate('/timer');
        }, 500);
    };

    return (
        <div className="set-timer">
            <section className="set-time">
                <motion.figure
                    className="vector-left"
                    onClick={decrementMinutes}
                    whileTap={{
                        scale: 1.6,
                        rotate: -20
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <img src={vectorLeft} alt="vector left" />
                </motion.figure>
                <h1>{minutes.toString().padStart(2, '0')}</h1>   {/*vissar minuter i format 00 */}
                <motion.figure
                    className="vector-rigth"
                    onClick={incrementMinutes}
                    whileTap={{
                        scale: 1.6,
                        rotate: -20
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <img src={vectorRigth} alt="vector rigth" />
                </motion.figure>
            </section>
            <p>minutes</p>
            <section className="box">
                <div className="checkbox-container">
                    <label>
                        <input type="checkbox" />
                        intervals
                    </label>
                </div>
                <div className="checkbox-container">
                    <label>
                        <input type="checkbox" />
                        5 min / interval
                    </label>
                </div>
            </section>

            <motion.div
                className="set-btn"
                initial={{ y: 0, scale: 1, backgroundColor: 'rgba(255, 255, 255, 0)' }}
                animate={isClicked
                    ? { y: 100, opacity: 0, scale: 0.3, backgroundColor: 'rgb(0, 255, 0)' }
                    : { y: 0, opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0)' }}

                transition={{
                    duration: 0.5
                }}
            >
                <Btn text="START TIMER" onClick={startTimer} />
            </motion.div>
        </div>
    )
};

export default SetTimer;