import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card, { CardActions, CardBlock, CardDivider, CardFooter, CardImage, CardTitle } from 'mineral-ui/Card';



class App extends Component {

  constructor() {
    super();
    this.state = {
      foodList : []
    };
  }

  componentDidMount() {
    fetch('http://texpertise.in/data.php')
      .then(results => {
        return results.json();              
      }).then(data=> {
        // console.log("data",data);
        let foodList = data.map((res,key)=>{
          // console.log("res",res);
          return (
            <Card key={key}>
              <CardTitle>Card Title</CardTitle>
              <CardImage src={res.image} alt="gradient placeholder" />          
            </Card>
          )}
      )
      console.log("foodList",foodList);
        this.setState({
          foodList : foodList
        });  
        // console.log("state",this.state.foodList);
        
      })

     
  }

  render() {
    return (
      <div className="App">
        {this.state.foodList}
      </div>
    );
  }
}

export default App;
