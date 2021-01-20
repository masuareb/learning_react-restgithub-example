import {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const fetchData = () => {
    // REST API call comes here
  }
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={fetchData} value={keyword}>fetch</button>
    </div>
  );
}

export default App;
