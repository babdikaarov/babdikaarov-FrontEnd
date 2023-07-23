import React from 'react';
import { CHOICES } from '../data/rockPaperScissor';
import styles from '../styles/Game.module.css';


export default function GameInterface({onSelectChoice}) {

/* Start by practicing your understanding of inline styling.

Find the <h1> element responsible for the game’s title, “Rock Paper Scissors”.

Apply an inline style to change the font size property to 48, and set the margin top property to 0. */
    return (
        <>
            <h1 style={{fontSize: 48, marginTop: 0}}>Rock Paper Scissors</h1>
            <div className={styles.choices}>
                {CHOICES.map((choice) => (
                    <button
                        className={styles.button}
                        key={choice.name}
                        onClick={()=>onSelectChoice(choice)}
                        aria-label={choice.name}
                    >
                        {choice.emoji}
                    </button>
                ))}
            </div>
        </>
    )
}