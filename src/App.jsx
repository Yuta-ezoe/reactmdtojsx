import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
 
import Header from "./Header";
import home from "./Pages/home/home";
import mde from "./Pages/mdeditor/mde";

 
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={home} />
        <Route path="/items/new" component={home} />
        <Route path="/items/delete" component={mde} />
      </BrowserRouter>
    </div>
  );
};
 
export default App;