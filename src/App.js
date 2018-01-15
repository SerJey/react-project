import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        username: 'Sergey'
    };

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <UserOutput username={this.state.username}/>
                <UserInput change={this.changeUsername} value={this.state.username}/>
                <UserOutput username="User 1"/>
                <UserOutput username="User 2"/>
            </div>
        );
    }
}

export default App;
