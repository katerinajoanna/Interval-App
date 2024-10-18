import './menu.css';
import { motion } from 'framer-motion';

function Menu({ onSelect }) {
    // definera animation
    const menuItemVariants = {
        hidden: {
            opacity: 0,
            x: 100
        },    // initial transparens 0, flyttas till höger
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.4
            },
        }),
    };

    const handleSelect = (option) => {
        onSelect(option);
    };

    return (
        <div className='menu'>
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

export default Menu
