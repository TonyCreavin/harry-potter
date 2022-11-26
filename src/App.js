import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);

  const getWizardInfo = async () => {
    axios
      .get('https://hp-api.herokuapp.com/api/characters')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  };

  useEffect(() => {
    getWizardInfo();
  }, []);

  return (
    <div>
      <ul>
        {data
          .filter((e) => e.image !== '')
          .map((wizard) => (
            <li key={wizard.id}>
              <Card wizard={wizard} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
