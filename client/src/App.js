import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* Routes added here. exact so that Movie List does not render on all movie pages*/}
      <Route exact path="/" component={MovieList}/>
        {/* */}
        <Route path="/movies/ :id" render={props =><MovieCard {...props}movie={savedList} />}/>
    </div>
  );
};

export default App;
