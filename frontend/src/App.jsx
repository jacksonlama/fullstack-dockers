
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const backendUrl = '';
    axios.get(`${backendUrl}/api/example`)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Full Stack App 🚀</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
