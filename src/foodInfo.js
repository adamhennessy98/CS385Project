import React, { Component } from "react";
import {fruitAndVegArray} from "./fruitAndVeg";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import InfoPage from "./InfoPage";

const fruitNVeg = fruitAndVegArray;

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
            const API_URL = "https://tinyurl.com/y2sy9cxc";
            // Fetch or access the service at the API_URL address
            const response = await fetch(API_URL);
            // wait for the response. When it arrives, store the JSON version
            // of the response in this variable.
            const jsonResult = await response.json();

            // update the state variables correctly.
            // Check the JSON response carefully - is there an array name?
            // here the array name is results.
            this.setState({ apiData: jsonResult });
            this.setState({ isFetched: true });
        } catch (error) {
            // In the case of an error ...
            this.setState({ isFetched: false });
            // This will be used to display error message.
            this.setState({ errorMsg: error });
        } // end of try catch
    } // end of componentDidMount()

    render(){
        if (this.state.errorMsg) {
            return (
                <div className="error">
                    <h1>We're very sorry: An error has occured in the API call</h1>

                    <p>The error message is: {this.state.errorMsg.toString()}</p>
                </div>
            ); // end of return.
        } else if (this.state.isFetched === false) {
            return (
                <div className="fetching">
                    <h1>We are loading your API request........</h1>
                    <p>Your data will be here very soon....</p>
                </div>
            ); // end of return
        }
        else {
            return (
                <div>
                    <h1>Fruit And Veg</h1>
                    {this.state.apiData.map((i) => (
                        <li key={i}>
                            <b>Name: </b> {i.vegetable.Name} &nbsp;&nbsp;
                            <b>Type: </b> {i.vegetable.Type} &nbsp;&nbsp;
                            <b>Price: </b> ${i.vegtable.Price} &nbsp;&nbsp;
                            <a href="https://www.w3schools.com/tags/tag_a.asp">Learn more</a>
                            <hr/>
                        </li>
                    ))}
                </div>

            );//End of return statement
        }
    }//End of render
}

export default App;
