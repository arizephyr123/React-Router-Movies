import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* Routes added here - inside App div 
      *exact so that Movie List does not render on all movie pages*/}
      <Route exact path="/" component={MovieList} />
      {/* [ x ] * Inside your App file add two routes.
[ x ] * one route for `/` that loads the `MovieList` component.
[ x ] * one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.*/}
{/* */}
      <Route
        path="/movies/:id"
        render={props => <Movie {...props} />}
      />
    </div>
  );
};

export default App;
