import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]); 

   const addItem = () => {
    if (text.trim() !== "") {
      setItems([...items, text]);
      setText("");
    }
  };
  
  return (
    <>
    <form>
      <input value={text} type="text" id="ffl" onChange={(e) => setText(e.target.value)} required /> 
      <button onClick={addItem}>Добавить</button>
    </form>
        <p>{text}</p>
    <ul>
      {items.map((item,index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
    </>
  );
}

export default App;
