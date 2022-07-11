import Card from './components/Card';
import data from './data';
import './index.css';


function App() {
  const items = data;

  return (
    <div className="App">
      <header className='mainhead'> shoppping app </header>
      {items.map(item => <Card item={item} />)}
    </div>
  );
}

export default App;
