import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import FavMovies from "./components/FavMovies";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);

  function getMoviesInfo() {
    fetch("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
    .then(response => response.json()).then(data => 
      setData({
        categories : data.genres,
        movies : data.movies
      })
    )
  };

  useEffect (() => {
    getMoviesInfo()
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={props => 
            <Main {...props} {...data} />
          }
        />
        <Route
          path="/movie"
          render={props =>
            <FavMovies {...props} />
          }
        />
      </Switch>
    </div>
  );

};

export default App;
