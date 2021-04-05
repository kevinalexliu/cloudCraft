import React from 'react';
import axios from 'axios';
import { YaleBlue, AliceBlue } from '../styles/colors';
import faker from 'faker';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    axios.get('/users')
    .then((response) => {
      const users = response.data;
      this.setState({
        users: users
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.state;
    const { handleUserClick } = this.props;

    const avatarStyle = {
      verticalAlign: 'middle',
      width: '35px',
      height: '35px',
      borderRadius: '15%',
      marginLeft: '15px',
    };

    const userList = users.map((user) => {
      const imageSrc= faker.image.avatar();
      return (
      <div
          className="user-container"
          style={{
            display: 'flex',
            padding: '3px'
          }}
          key={user.user_id}
        >
        <img src={imageSrc} style={avatarStyle} />
        <p
          onClick={() => handleUserClick(user.user_id)}
          style={{
            fontSize: '14px',
            marginLeft: '25px',
            cursor: 'pointer',
          }}
        >
          {user.name}
        </p>
      </div>
      );
    })
    return (
      <div
        className="userList"
        style={{
          marginLeft: '15px'
        }}
      >
        <h3>Direct Messages</h3>
        {userList}
      </div>
    )
  }
}

export default Users;
