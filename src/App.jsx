import { useState, useEffect } from 'react'

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let timer;

    if (isRunning) {

      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);

  }, [isRunning, time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  

  return (

    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>

  )
}

export default App
