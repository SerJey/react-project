import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends Component {
    state = {
        username: 'Sergey',
        fieldText: 'Test'
    };

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    rootInputHandler = (event) => {
        this.setState({fieldText: event.target.value})
    };

    deleteSymbolHandler = (symbolIndex) => {
        let fieldChars = this.state.fieldText.split('');
        fieldChars.splice(symbolIndex, 1);
        this.setState({fieldText: fieldChars.join('')});
    };

    render() {
        let fieldChars = (
            this.state.fieldText.split('').map((symbol, index) => {
                return <Char
                    symbol={symbol}
                    key={index}
                    click={() => this.deleteSymbolHandler(index)}/>
            })
        );

        return (
            <div className="App">
                <input type="text" onChange={this.rootInputHandler} value={this.state.fieldText}/>
                <Validation textLength={this.state.fieldText.length}/>
                <p>{this.state.fieldText.length}</p>
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
