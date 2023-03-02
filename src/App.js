import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [items, setItems] = useState(data);
  const removeItems = (id) => {
  let newItems = items.filter(item => item.id !==id);
  setItems(newItems);
  }


  return (
    <div>
    <div className='container'>
      <h1> List of {items.length} products</h1>
    </div>

    {items.map((element => {
      const {id, item, image} = element;

      return(
        <div key={id}>
          <div className='container'>
            <h2>{id} - {item}</h2>
          </div>

          <div className='container'>
            <img src={image} width="300px"/>
          </div>

          <div className='container'> 
          <button onClick={() => removeItems(id)}>Remove</button>
          </div>
        </div>
      )
    }))}
    
    <div className='container'>
    <button onClick={()=> setItems([])}>delete all</button>
    </div>
    </div>
  );
}

export default App;
