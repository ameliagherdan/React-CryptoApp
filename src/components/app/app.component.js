import React from 'react';
import './app.style.css';
import Title from '../title/title.component';
import Card from '../card/card.component';

class App extends React.Component{
    
    constructor(props){
        super();

        this.state = {
            data: null,
            checkData: false
        };

    }
    getData = () => {
        fetch('https://api.coinlore.net/api/tickers/?start=0&limit=10')
        .then((response)=> response.json())
        .then((response)=> this.setState({data: response, checkData: true}));
    }
   
   
    componentDidMount = () => {
        this.getData();
    }
  
    display = () => {
        return this.state.data.data.map((object,index)=> <Card symbol={object.symbol} name={object.name} tSupply={object.tsupply} price={object.price_usd} event = {(e) => this.viewDetails(object.id)} key={index}/>);
    }

    viewDetails = (id) => {
        let i;
        for (i=0;i<10;i++){
            if(this.state.data.data[i].id === id)
            {
                alert("Market Cap: " + this.state.data.data[i].market_cap_usd);
            }
        }
    }

    render(){
        if(this.state.checkData){
            return(
                <div className="App">
                   
                     <Title titleApp="Crypto App"/>
                     <div className="coins">
                     {this.display()}
                </div>
                </div>
            )
        }
        else{
            return(
                <div>Loading</div>
            )
        }
    }
}

export default App;