import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState('')
  useEffect(()=>{
    const getPDF=()=>{
      const url='http://localhost:8000/api/pdf'
      axios({url:url,method:'GET',responseType:'blob'})
      .then((resp)=>{
          const data=resp.data;
          console.log(data)
          const href=URL.createObjectURL(data);
          console.log(href)
          setCount(href);
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    getPDF();
  },[]);
  return (
    <>
    <a href={count}>toto</a>
   hello
    </>
  )
}

export default App
