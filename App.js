import React, { Component } from "react";
import {fruitAndVegArray} from "./fruitAndVeg";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import InfoPage from "./InfoPage";

//const fruitNVeg = fruitAndVegArray;

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
          apiData: [],
          isFetched: false,
          errorMsg: null
      };
  }


    async componentDidMount() {
        try {
            const API_URL = "https://raw.githubusercontent.com/adamhennessy98/CS385Project/main/fruitAndVeg.json?token=GHSAT0AAAAAAB3CKCRHJF67QNCLEKX3G2O4Y4GHF2A";
            // Fetch or access the service at the API_URL address
            const response = await fetch(API_URL);
            // wait for the response. When it arrives, store the JSON version
            // of the response in this variable.
            const jsonResult = await response.json();

            // update the state variables correctly.
            // Check the JSON response carefully - is there an array name?
            // here the array name is results.
            this.setState({ apiData: jsonResult.vegetable });
            this.setState({ isFetched: true });
        } catch (error) {
            // In the case of an error ...
            this.setState({ isFetched: false });
            // This will be used to display error message.
            this.setState({ errorMsg: error });
        } // end of try catch
    } // end of componentDidMount()

  render(){
  return(
      <div>
        <h1>Vegetables</h1>
        {this.state.apiData.map((i) => (
            <li key={i.ID}>
              <b>Name: </b> {i.Name} &nbsp;&nbsp;
              <b>Type: </b> {i.Type} &nbsp;&nbsp;
              <b>Price: </b> ${i.Price} &nbsp;&nbsp;
                <a href = "https://www.w3schools.com/tags/tag_a.asp">Learn more</a>
                <hr/>
            </li>
          ))}
      </div>



  );//End of return statement
  }//End of render

}

export default App;
