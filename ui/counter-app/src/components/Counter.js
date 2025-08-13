import { useEffect, useState } from 'react';
import '../css/Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState("1");

    useEffect(() => {
        const handler = (event) => {
            if (event.key === 'ArrowUp') {
                setCount(prev => prev + Number(step));
            } else if (event.key === 'ArrowDown') {
                setCount(prev => Math.max(0, prev - Number(step)));
            } else if (event.key === 'r') {
                setCount(0);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [step]);

    return (
        <div className="Counter">
            <div className="counter-display">
                <p>{count}</p>
                <input
                    type='number'
                    value={step}
                    onChange={e => setStep(e.target.value)}
                />
                <div className="buttons">
                    <button onClick={() => setCount(count + Number(step))}>+</button>
                    <button onClick={() => setCount(Math.max(0, count - Number(step)))}>-</button>
                    <button onClick={() => setCount(0)}>Sıfırla</button>
                </div>
            </div>
        </div>
    );
}
