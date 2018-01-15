import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        username: 'Sergey',
        length: 0,
        fieldText: 'kjb'
    };

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    rootInputHandler = (event) => {
        let length = event.target.value.length;
        let fieldText = event.target.value;
        this.setState({
            length: length,
            fieldText: fieldText
        })
    };

    deleteSymbolHandler = (symbolIndex) => {
        let fieldChars = this.state.fieldText.split('');
        fieldChars.splice(symbolIndex, 1);
        this.setState({fieldText: fieldChars.join('')});
    };

    render() {
        let fieldChars = (
            this.state.fieldText.split('').map((symbol, index) => {
                return <CharComponent
                    symbol={symbol}
                    click={() => this.deleteSymbolHandler(index)}/>
            })
        );

        return (
            <div className="App">
                <input type="text" onChange={this.rootInputHandler} value={this.state.fieldText}/>
                <ValidationComponent textLength={this.state.length}/>
                <p>{this.state.length}</p>
                {fieldChars}
                <UserOutput username={this.state.username}/>
                <UserInput change={this.changeUsername} value={this.state.username}/>
                <UserOutput username="User 1"/>
                <UserOutput username="User 2"/>
            </div>
        );
    }
}

export default App;
