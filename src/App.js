import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  //Old method
  // useEffect(() => {
  //   const getUsers=()=>{
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res=>res.json())
  //     .then(data=>setUsers(data))
  //     .catch(err=>console.log(err))
  //   }
  
  //  getUsers()
  //  setLoading(false)
  //  console.log(users)
  // }, [])
  useEffect(() => {
    const fetchUsers= async()=>{
      try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchUsers();
  setLoading(false)
   
  }, [])
  
  return (
    <div className="App">
    {
      loading?'loading':(users.map(el=><div>
        <h1>{el.name}</h1>
        <p>{el.email}</p>
      </div>))
    }
    </div>
  );
}

export default App;
