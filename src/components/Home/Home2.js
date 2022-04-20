import { useState } from "react";
import Gif from "../../components/Gif"
export default function Home2() {
  
  const [results] = useState([]);
  const [setGifs] = useState('');
  const [term, updateTerm] = useState('');
  async function fetchGifs() {
    try {
      const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
      const BASE_URL = 'http://api.giphy.com/v1/gifs/trending';
      const resJson = await fetch(`${BASE_URL}?api_key=${GIPHY_KEY}&q=${term}`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  } 

  function onEdit(newTerm) {
    updateTerm(newTerm);
    fetchGifs();
  }


  // const [query] = useState("");
  // const [results, setResults] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   getData();
    
  // };

  // const getData = async () => {
  //   const url = `api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=20`;
    
  //     const response = await fetch(url)
  //     .then((res) => res.json())
  //     .catch((e) => console.log(e));
  //   setResults(response.data);
  // }
  
  return (
    <div>
      <button onClick={onEdit}>Klik Me</button>
      <br />
      {results.map((it) => (
        <Gif key={it.id} source={it.images.downsized.url} title={it.title} />
      ))}
    </div>
  )
}
