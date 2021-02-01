import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import FavMovies from "./components/FavMovies";
import Navbar from "./components/Navbar";
import RandomMovie from "./components/RandomMovie"

function App() {
  const [data, setData] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState ([])

  function getMoviesInfo() {
    fetch("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
    .then(response => response.json()).then(data => 
      setData({
        categories : data.genres,
        movies : data.movies,
      })
    )
  };

  useEffect (() => {
    getMoviesInfo()
  }, []);
 

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar/>
      <Switch>
        <Route
          exact path="/"
          render={props => 
            <Main
              data={data}
              favoriteMovies={favoriteMovies}
              setFavoriteMovies={setFavoriteMovies} 
              {...props}
            />
          }
        />
        <Route
          path="/favorites"
          render={props =>
            <FavMovies
              data={data}
              favoriteMovies={favoriteMovies}
              setFavoriteMovies={setFavoriteMovies}
              {...props}
            />
          }
        />
        <Route
          path="/random"
          render={props =>
            <RandomMovie
              {...props}
            />
          }
        />
      </Switch>
    </div>
  );

};

export default App;
