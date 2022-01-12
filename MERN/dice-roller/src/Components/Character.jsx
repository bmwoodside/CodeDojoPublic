import React, { useState } from 'react';
// import axios from 'axios';


const Character = props => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [mass, setMass] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [race, setRace] = useState('');
    const [alignment, setAlignment] = useState('');
    const [stats, setStats] = useState({
        Strength: 0,
        Dexterity: 0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0
    })

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
        // return setStats(stats);

        // this is causing an infinite loop for some reason
        // setStats(stats);

        return stats;
    };
    // why is this causing an infinite loop?
    // setStats(rollStats());

    
    return (
        <>
            <h1>{name}, placeholder</h1>
            {/* {console.log(this.props.state)} */}
            {console.log(rollStats())}
            {/* {console.log(stats)} */}
            {/* {console.log(Character.stats)} */}
            {/* {console.log(this.Charisma)} */}
        </>
    );

}

export default Character;