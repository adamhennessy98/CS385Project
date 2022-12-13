import React, { Component } from "react";
//import './App.css';
import navbar from "./narbar";
import "./navbar.css"
import {Router, Route, Routes} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            isFetched: false,
            errorMsg: null,
            buying: [],
            buyFood: []
        };
        this.buySeeds = this.buySeeds.bind(this);
    }

    buySeeds(seedID) {
        //Beginning of buySeeds

        let foundSeed = this.state.apiData.filter(this.findObjectByName(seedID));
        this.setState({ buying: this.state.buying.concat(foundSeed) });
    }

    filterProductBy(theType){
        return function(prodObj){
            return prodObj.type === theType;
        }
    }

    // Your ID field in the JSON file has a space ... 'ID ' so this cannot be
    // used as a property. So I've used name here.
    findObjectByName(seedIDToFind) {
        console.log(seedIDToFind);
        return function (seedObject) {
            return seedObject.Name.toLowerCase() === seedIDToFind.toLowerCase();
        };
    }

    async componentDidMount() {
        try {
            const API_URL =
                "https://raw.githubusercontent.com/adamhennessy98/CS385Project/main/fruitAndVeg.json?token=GHSAT0AAAAAAB3CKCRHJF67QNCLEKX3G2O4Y4GHF2A";
            // Fetch or access the service at the API_URL address
            const response = await fetch(API_URL);
            // wait for the response. When it arrives, store the JSON version
            // of the response in this variable.
            const jsonResult = await response.json();

            // update the state variables correctly.
            // Check the JSON response carefully - is there an array name?
            // here the array name is results.
            this.setState({ apiData: jsonResult.name });
            // This the JSON array being returned!
            console.log("What is this " + jsonResult.name);
            this.setState({ isFetched: true });
        } catch (error) {
            // In the case of an error ...
            this.setState({ isFetched: false });
            // This will be used to display error message.
            this.setState({ errorMsg: error });
        } // end of try catch
    } // end of componentDidMount()

    render() {
        return (

            <div className="App">
                <div className="navbar">
                <nav className="nav">
                    <a href="/" className="site_title">
                        Fruit n Veg
                    </a>
                    <ul>
                        <li>
                            <a href="/Market">Market</a>
                        </li>
                        <li>
                            <a href="/Produce">Produce</a>
                        </li>
                    </ul>
                </nav>
                </div>


                <ul>
                    {this.state.apiData.map((i) => (
                        <li key={i.ID}>
                            <b>Name: </b> {i.Name} &nbsp;&nbsp;
                            <b>Type: </b> {i.Type} &nbsp;&nbsp;
                            <b>Price: </b> ${i.Price} &nbsp;&nbsp;
                            <a href={i.ref}>Learn more</a> &nbsp;&nbsp;
                            <button onClick={() => this.buySeeds(i.Name)}>Buy</button>
                            <hr />
                        </li>
                    ))}
                </ul>

                <p>
                    <b>Your total amount of seeds for growing:</b>{" "}
                    {this.state.buying.length}
                    {this.state.buying.map((i, index) => (
                        <p key={i.ID}>
                            Item: {index + 1}: <b>Name: </b> {i.Name} &nbsp;&nbsp;
                            <b>Type: </b> {i.Type} &nbsp;&nbsp;
                            <b>Price: </b> €{i.Price} &nbsp;&nbsp;
                        </p>
                    ))}
                </p>
            </div>

        ); //End of return statement
    } //End of render
}
export default App;

