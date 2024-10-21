import { useState } from 'react';
import './menu.css';
import { motion } from 'framer-motion';
import navicon from '../../assets/navicon.svg';

function Menu({ onSelect }) {

    const [isIconClicked, setIsIconClicked] = useState();

    // definera animation för elem.
    const menuItemVariants = {
        hidden: {
            opacity: 0,
            x: 100
        },    // initial transparens 0, flyttas till höger
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2 + 0.2,
                duration: 0.4
            },
        }),
    };

    //initial transparens för icon
    const iconVariants = {
        hidden: { opacity: 0, x: 100, filter: 'invert(0.8)' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 0.2,
            },
        },
        clicked: {
            x: 0,
            rotate: 360,
            filter: 'invert(0.5)',
            scale: 0.8,
            transition: {
                duration: 0.9,
                ease: 'linear',
            },
        },

    };

    const handleSelect = (option) => {
        onSelect(option);
    };

    // function för icon
    const handleIconClick = () => {
        setIsIconClicked(true);
        setTimeout(() => {
            handleSelect('close');     // för att stänga
            setIsIconClicked(false);
        }, 400);    // ms för att sluta animation
    };


    return (
        <div className='menu'>
            <motion.img
                src={navicon}
                alt="nav icon"
                className="img"
                variants={iconVariants}
                initial="hidden"
                animate={isIconClicked ? 'clicked' : 'visible'}    //function att stänga anim
                onClick={handleIconClick}
                style={{ filter: isIconClicked ? 'invert(1)' : 'invert(0)' }}
            />
            {['digital', 'analog', 'visual'].map((option, index) => (
                <motion.h1
                    key={option}
                    variants={menuItemVariants}
                    initial='hidden'
                    animate='visible'   // användr animation
                    custom={index}      //som argument till animation
                    onClick={() => handleSelect(option)}
                >
                    {option.toUpperCase()}
                </motion.h1>

            )
            )};
        </div>
    )
};

export default Menu;
