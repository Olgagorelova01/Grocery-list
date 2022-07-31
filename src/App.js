
import './App.css';
import { GroceryList } from './GroceryList';
import image from './man1.png';
import imageTwo from './man2.png'


function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={ image } width="180px" alt="shopping man"/>
      </div>
      <div className='container'>
        <h1>Grocery list</h1>
      </div>
      <GroceryList/>
      <div className='container'>
        <img src={ imageTwo } width="180px" alt="shopping online"/>
      </div>
    </div>
  );
}

export default App;
