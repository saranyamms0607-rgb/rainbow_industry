import React from 'react';
import './Doodles.css';

import doodle1 from '../../assets/doodle 1.webp';
import doodle2 from '../../assets/doodle 2.jpg';
import doodle3 from '../../assets/doodle 3.jpg';
import { GiAppleMaggot, GiBread, GiCarrot, GiFullPizza, GiCoffeeCup, GiHamburger } from 'react-icons/gi';

const Doodles = () => {
    const doodles = [
        { id: 1, src: doodle1, type: 'img', className: 'doodle-1' },
        { id: 2, src: doodle2, type: 'img', className: 'doodle-2' },
        { id: 3, src: doodle3, type: 'img', className: 'doodle-3' },
        { id: 4, icon: <GiAppleMaggot />, type: 'icon', className: 'doodle-apple' },
        { id: 5, icon: <GiBread />, type: 'icon', className: 'doodle-bread' },
        { id: 6, icon: <GiCarrot />, type: 'icon', className: 'doodle-carrot' },
        { id: 7, icon: <GiFullPizza />, type: 'icon', className: 'doodle-pizza' },
        { id: 8, icon: <GiCoffeeCup />, type: 'icon', className: 'doodle-coffee' },
        { id: 9, icon: <GiHamburger />, type: 'icon', className: 'doodle-hamburger' },
    ];

    return (
        <div className="overall-doodle-container">
            {doodles.map((doodle) => (
                <div key={doodle.id} className={`floating-doodle ${doodle.className}`}>
                    {doodle.type === 'img' ? (
                        <img src={doodle.src} alt="doodle" />
                    ) : (
                        doodle.icon
                    )}
                </div>
            ))}
        </div>
    );
};

export default Doodles;
