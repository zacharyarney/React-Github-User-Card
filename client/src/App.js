import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
    userData: {},
    followers: [],
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/zacharyarney').then((res) => {
      this.setState({ userData: res.data });
      // console.log(res.data)
    });
    axios
      .get('https://api.github.com/users/zacharyarney/followers')
      .then((res) => {
        this.setState({ followers: res.data });
      });
  }

  render() {
    return (
      <div className="App">
        <UserCard
          userData={this.state.userData}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
