import './setTimer.css';
import Btn from '../../components/button/Btn';
import vectorLeft from '../../assets/vectorLeft.svg';
import vectorRigth from '../../assets/vectorRigth.svg';

function SetTimer() {
    return (
        <div className="set-timer">
            <section className="set-time">
                <figure className="vector-left">
                    <img src={vectorLeft} alt="vector left" />
                </figure>
                <h1>00</h1>
                <figure className="vector-rigth">
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
                < Btn text="START TIMER" />
            </div>
        </div>
    )
};

export default SetTimer;

