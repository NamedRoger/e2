import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import Table from './components/table';

function App() {
  const [personas, setPersonas] = useState([]);

  const onSubmit =  async (values) => {
    await fetch("https://localhost:7115/personas", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...values}),
    });
  }

  const listarPersonas = useCallback(async () => {
    const res = await (await fetch("https://localhost:7115/personas")).json();
    setPersonas(res);
  }, []);

  useEffect(() => {
    (async() => {
      listarPersonas();
    })();
  }, [listarPersonas]);

  return (
    <div className="App">
      <div>
        <Form onSubmit={onSubmit}/>
      </div>
      <div>
        <Table personas={personas}/>
      </div>
    </div>
  );
}

export default App;