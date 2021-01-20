import {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const fetchData = () => {
    // REST API call comes here
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
