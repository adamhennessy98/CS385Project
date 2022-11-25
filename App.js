import React, { Component } from "react";
import {fruitAndVegArray} from "./fruitAndVeg";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import InfoPage from "./InfoPage";

const fruitNVeg = fruitAndVegArray;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {display: fruitNVeg};
  }


  render(){
  return(
      <router>
      <div>



        <h1>Fruit And Veg</h1>
        {this.state.display.map((i) => (
            <li key={i}>
              <b>Name: </b> {i.Name} &nbsp;&nbsp;
              <b>Type: </b> {i.Type} &nbsp;&nbsp;
              <b>Price: </b> ${i.Price} &nbsp;&nbsp;
                <a href = "https://www.w3schools.com/tags/tag_a.asp">Learn more</a>
                <hr/>
            </li>
          ))}
      </div>
      </router>
  );//End of return statement
  }//End of render
}

export default App;
