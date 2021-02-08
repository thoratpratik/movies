
import './App.css';
import React, { Fragment } from 'react';
import { useState } from 'react';
import axios from 'axios';
import MovieData from './componenet/MovieData'

function App() {

  const [query, setQuery] = useState("");
  const [movie , setMovie] = useState([]);
  const url1 =`https://api.themoviedb.org/3/search/movie?api_key=1557decf7dc746276d4d58de434aa538&query=${query}`
 
   const getdata = async () => {
    const result = await axios.get(url1);
    setMovie(result.data.results)
    console.log(movie);
   

  }

  const onChange = (e) => {
    setQuery(e.target.value)
    e.preventDefault();
    getdata();
  }

  return (
   <Fragment>
     <center>
     <h1 className="name">Search Movies</h1>
     <br/>
     <span>
      <input type="text" className="input" placeholder="  Iron-man...."  onChange= { onChange } value={ query }/>
      <br/>
      </span>
      <br/>
      { movie !==[] && movie.map(item =>
          <MovieData key={item.id} movie={item}/>
          )}
      </center>
    
    </Fragment>
  );
}

export default App;
