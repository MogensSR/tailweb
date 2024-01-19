import { useState, useEffect } from 'react';





const Fetch = () => {
  const [joke, setJokes] = useState([]);
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJokes(data);
      });
  }, []);
  return (
    <div>
      <h1>Joke:</h1>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};
export default Fetch;