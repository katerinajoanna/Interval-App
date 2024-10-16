import { useNavigate } from 'react-router-dom';
import './loading.css';
import navicon from '../../assets/navicon.svg';
import anime from 'animejs';

function Loading() {
    const navigate = useNavigate();
    const handleClick = () => {
        anime({
            targets: 'img',
            rotate: [90, -360],     // startposition 90deg, rotation360deg
            duration: 1000,
            easing: 'linear',
            filter: 'invert(1) '
        })
        // anim. för att förstora icon och text
        anime({
            targets: '.loading',
            scale: 1.2,
            duration: 400,
            easing: 'easeInOutQuad',
            complete: () => {
                navigate('/SetTimer');
            }
        });
    }
    return (
        <div className='loading' onClick={handleClick}>
            <figure className="nav">
                <img src={navicon} alt="nav icon" />
            </figure>
            <h1 className="heading">INTERVAL</h1>
            <p className="text">For all your timing needs</p>
        </div>
    )
};

export default Loading;
