import React, { useState } from 'react';
// import axios from 'axios';


const Character = props => {
    const [character, setCharacter] = useState({
        name: "",
        height: "",
        mass: "",
        hairColor: "",
        race: "",
        alignment: "",
        characterStats: {
            Strength: 0,
            Dexterity: 0,
            Constitution: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0
        }
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

        setCharacter({
            ...character,
            [character.characterStats]: stats
        })

        return stats;
    };

    // const rerollStats = () => {
    //     rollStats()
    // }

    const keepStats = () => {
        // keep stats... store in state or something, then redirect.
        // is this going to be handled in state or through a Database?
    }

    
    return (
        <>
            <h1>{character.name}, placeholder</h1>
            {console.log(character.characterStats)}
            <button onClick={() => rollStats()}>Roll New Stats</button>
            <button onClick={keepStats}>Keep These Stats!</button>
        </>
    );

}

export default Character;