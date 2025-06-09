import { useState } from 'react';
import Counter from './Counter.tsx';
import './scoreboard.css'

export default function Scoreboard() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div>
            {isPlayerA ? (
                <Counter key="Taylor" person="Taylor" />
            ) : (
                <Counter key="Sarah" person="Sarah" />
            )}
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
        </div>
    );
}
