import './setTimer.css';
import Btn from '../../components/button/Btn';
import vectorLeft from '../../assets/vectorLeft.svg';
import vectorRigth from '../../assets/vectorRigth.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SetTimer() {
    const [minutes, setMinutes] = useState(0);
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
            alert("Välj en tid som är längre än 0 minuter!");
            return;
        }

        const timeInSeconds = minutes * 60;
        navigate('/digital-timer', { state: { time: timeInSeconds } });
    };

    return (
        <div className="set-timer">
            <section className="set-time">
                <figure className="vector-left" onClick={decrementMinutes}>
                    <img src={vectorLeft} alt="vector left" />
                </figure>
                <h1>{minutes.toString().padStart(2, '0')}</h1>   {/*vissar minuter i format 00 */}
                <figure className="vector-rigth" onClick={incrementMinutes}>
                    <img src={vectorRigth} alt="vector rigth" />
                </figure>
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
            <div className="set-btn">
                < Btn text="START TIMER" onClick={startTimer} />
            </div>
        </div>
    )
};

export default SetTimer;

