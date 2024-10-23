import './alarmView.css';
import alarm from '../../assets/alarm icon.svg';
import Btn from '../../components/button/Btn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AlarmView() {
    const [nuTimer, setNuTimer] = useState(0);
    const navigate = useNavigate();

    const handleSetNuTimer = () => {
        setNuTimer(prevTimer => prevTimer + 1);
        console.log(`New timer set: ${nuTimer + 1}`);
        navigate('/set-timer');
    };

    return (
        <>
            <div className='alarm'>
                <div className="alarm-rings"></div>
                <section className="alarm-icon">
                    <img src={alarm} alt="alarm icon" />
                    <p>Times up!</p>
                </section>
                <section className="alarm-btn">
                    <Btn text="SET NU TIMER" onClick={handleSetNuTimer} />

                </section>

            </div>
        </>
    )
};

export default AlarmView;
