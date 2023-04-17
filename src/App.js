import './App.css';
// import { Planet } from './Planet';
// import { User } from './User';
import { useState } from 'react';

function App() {
  // const age = 15;
  // const isGreen = true;
  // const names = ['Pedro', 'Jake', 'Jessica', 'Mike', 'Dustin', 'Lukas'];
  // const users = [
  //   { id: 1, name: 'Pedro', age: 21 },
  //   { id: 2, name: 'Jake', age: 25 },
  //   { id: 3, name: 'Jessica', age: 45 },
  //   { id: 4, name: 'Herbert', age: 35 },
  // ];
  // const planets = [
  //   { name: 'Mars', isGasPlanet: false },
  //   { name: 'Earth', isGasPlanet: false },
  //   { name: 'Jupiter', isGasPlanet: true },
  //   { name: 'Venus', isGasPlanet: false },
  //   { name: 'Neptune', isGasPlanet: true },
  //   { name: 'Uranus', isGasPlanet: true },
  // ];

  /* return (
    /*
    <div className='App'>
      {/* tenary operator * /}
      {/* {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{ color: isGreen ? 'green' : 'red' }}>THIS HAS COLOR</h1>
      {isGreen && <button>THIS IS A BUTTON</button>} * /}

      {/* <User name='Pedro' age={21} email='pedro@pedro.com' />
      <User name='Henry' age={35} email='walherb@gmail.com' /> * /}
      
      {/* <h1 className='name'>Pedro</h1> * /}
      
      {/* {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })} * /}
      
      {/* {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })} * /}
      
      {/* {planets.map(
        (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
      )} * /}
    </div> * /
  );
  */

  // const [age, setAge] = useState(1);
  // const increaseAge = () => {
  //   setAge(age - 1);
  // };

  // const [inputValue, setInputValue] = useState('');
  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const [showText, setShowText] = useState(false);

  // const [textColor, setTextColor] = useState('black');

  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* {age} <button onClick={increaseAge}>Increase Age</button> */}

      {/* <input type='text' onChange={handleInputChange} />
      {inputValue} */}

      {/* <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {showText && <h1>HI MY NAME IS PEDRO</h1>} */}

      {/* <button
        type='text'
        onClick={() => {
          setTextColor(textColor === 'black' ? 'red' : 'black');
        }}
      >
        Show/Hide
      </button>
      <h1 style={{ color: textColor }}>HI MY NAME IS PEDRO</h1> */}

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>

      {count}
    </div>
  );
}

// const User = (props) => {
//   const { name, age, email } = props;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{email}</h1>
//     </div>
//   );
// };

export default App;
