import {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const fetchData = () => {
    const url = `https://api.github.com/search/repositories?q=${keyword}`;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.items);
      });
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
