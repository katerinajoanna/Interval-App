import './digitalTimer.css';
import navicon from '../../assets/navicon.svg';
import Btn from '../../components/button/Btn';
import { useNavigate } from 'react-router-dom';


function DigitalTimer() {
    const navigate = useNavigate();

    const abortTimer = () => {
        navigate('/set-timer');
    }

    return (
        <div className='digital'>
            <section className="digital-nav">
                <img src={navicon} alt="nav icon" />
                <p>interval</p>
            </section>
            <section className="digital-timer">
                <p>00:00</p>
            </section>
            <section className="digital-btn">
                <Btn text="ABORT TIMER" onClick={abortTimer} />
            </section>
        </div>
    )
};

export default DigitalTimer;
