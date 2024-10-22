import Timer from 'easytimer.js';
import Menu from '../../components/menu/Menu';
import DigitalTimer from '../digitaltimer/DigitalTimer';
import AnalogTimer from '../analogtimer/AnalogTimer';
import TextTimer from '../texttimer/TextTimer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const timer = new Timer();

function TimerPage({ time }) {
    const [timeLeft, setTimeLeft] = useState(0);
    const [displayDigital, setDisplayDigital] = useState(true);
    const [displayAnalog, setDisplayAnalog] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        console.log(time);
        timer.start({
            countdown: true,
            startValue: {
                seconds: time
            }
        });

        const secondsUpdatedHandler = () => {
            setTimeLeft(timer.getTimeValues().toString());
        };

        const targetAchievedHandler = () => {
            navigate('/alarm');
        };


        timer.addEventListener('secondsUpdated', secondsUpdatedHandler);

        return () => {
            timer.stop(); // stopar timer vid avmontering av en vy
            timer.removeEventListener('secondsUpdated', secondsUpdatedHandler);
            timer.removeEventListener('targetAchieved', targetAchievedHandler);
        };
    }, [navigate, time]);

    const handleMenuSelect = (option) => {
        console.log('setIsMenuOpen:', setIsMenuOpen);
        setDisplayDigital(option === 'digital');
        setDisplayAnalog(option === 'analog');
        setDisplayText(option === 'visual');
        setIsMenuOpen(false);
    };

    return (
        <div>
            {/* menu przekazuje handlery do zmiany widoków */}
            {isMenuOpen && (
                <Menu onSelect={handleMenuSelect} setIsMenuOpen={setIsMenuOpen} />
            )}

            {/* visar lämlig timer */}
            {displayDigital && <DigitalTimer timeLeft={timeLeft} />}
            {displayAnalog && <AnalogTimer timeLeft={timeLeft} />}
            {displayText && <TextTimer timeLeft={timeLeft} />}
        </div>

    )
}
export default TimerPage;