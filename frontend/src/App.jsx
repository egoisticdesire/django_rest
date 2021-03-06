import React from 'react';
import axios from 'axios';
import UserList from './components/User';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {

    axios.get('http://127.0.0.1:8000/api/users/')
      .then(response => {
        const users = response.data.results;
        this.setState(
          {
            'users': users,
          }
        )
      }).catch(error => console.log(error));
  }

  render() {
    return (

      <UserList users={this.state.users} />

    )
  }
}

export default App;
