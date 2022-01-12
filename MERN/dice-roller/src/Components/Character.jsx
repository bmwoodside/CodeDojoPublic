import React, { useState } from 'react';
// import axios from 'axios';


const Character = props => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [mass, setMass] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [race, setRace] = useState('');
    const [alignment, setAlignment] = useState('');
    

    // const rollD4 = () => Math.floor(Math.random() * 4) + 1;
    const rollD6 = () => Math.floor(Math.random() * 6) + 1;
    // const rollD8 = () => Math.floor(Math.random() * 8) + 1;
    // const rollD10 = () => Math.floor(Math.random() * 10) + 1;
    // const rollD12 = () => Math.floor(Math.random() * 12) + 1;
    // const rollD20 = () => Math.floor(Math.random() * 20) + 1;
    // const rollD100 = () => Math.floor(Math.random() * 100) + 1;

    // need to implement "for...while" loop to roll stats
    // otherwise this will only roll once and use the same value for all stats
    // let statRoller = rollD6() + rollD6() + rollD6();

    const rollStats = () => {
        let stats = {
            Strength: rollD6() + rollD6() + rollD6(),
            Dexterity: rollD6() + rollD6() + rollD6(),
            Constitution: rollD6() + rollD6() + rollD6(),
            Intelligence: rollD6() + rollD6() + rollD6(),
            Wisdom: rollD6() + rollD6() + rollD6(),
            Charisma: rollD6() + rollD6() + rollD6()
        }

        return stats;
    };

    const [stats, setStats] = useState(rollStats());

    
    return (
        <>
            <h1>{name}, placeholder</h1>
        </>
    );

}

export default Character;