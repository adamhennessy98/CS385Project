import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
          apiData: [],
          isFetched: false,
          errorMsg: null
      };
  }
  functionName(title, data){
      return(
          <div>
              <h1>{title}</h1>
              {data && data.map((i) => (
                  <li key={i.ID}>
                      <b>Name: </b> {i.Name} &nbsp;&nbsp;
                      <b>Type: </b> {i.Type} &nbsp;&nbsp;
                      <b>Price: </b> ${i.Price} &nbsp;&nbsp;
                      <a href = {i.ref} >Learn more</a>
                      <hr/>
                  </li>
              ))}
          </div>
      )
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
            this.setState({ apiData: jsonResult });
            console.log("What is this " + jsonResult);
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
          {this.functionName("Vegetables", this.state.apiData.vegetable)}


          {this.functionName("Fruit", this.state.apiData.fruit)}

      </div>


  );//End of return statement
  }//End of render

}

export default App;
