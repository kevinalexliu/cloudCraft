import React from 'react';
import axios from 'axios';
import faker from 'faker';
import styles from './styles.css';
// import GroupChannels from './groupChannels';

class Groups2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessages: [],
      channelName: '',
    };
    this.getDirectMessages = this.getDirectMessages.bind(this);
    this.getChannelName = this.getChannelName.bind(this);
  }

  getChannelName(channelID) {
    axios.get('/channelName', {
      params: {
        channel: channelID,
      }
    })
    .then((success) => {
      this.setState({
        channelName: `${success.data[0].channel_name}`
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getDirectMessages(user_id) {
    axios.get('/directMessages', {
      params: {
        userLoggedIn: user_id,
      }
    })
    .then((success) => {
      const channelData = success.data;
      const channels = [];
      for (let i = 0; i < channelData.length; i++) {
        channels.push(channelData[i].channel_id);
      }
      this.setState({
        directMessages: channels,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }


  componentDidMount() {
    const { user_id } = this.props;
    // this.getDirectMessages(user_id);
    Promise.all([this.getDirectMessages(user_id), this.getChannelName(this.state.directMessages[0])])
    .then(([directMessages, name]) => {
      this.setState({
        directMessages: directMessages,
        channelName: name
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  componentDidUpdate(prevProps) {
    const { user_id } = this.props;
    if (this.props.user_id !== prevProps.user_id) {
      this.getDirectMessages(user_id);
    }
  }

  render() {
    const { directMessages, channelName } = this.state;
    console.log('state in group two:', this.state);

    const { handleChannelClick, user_id } = this.props;

    const avatarStyle = {
      verticalAlign: 'middle',
      width: '35px',
      height: '35px',
      borderRadius: '15%',
      marginLeft: '15px',
    };

    return (
      <div>
        <h3>Direct Messages</h3>
        {directMessages && directMessages.map((channel) => {
          const imageSrc = faker.image.avatar();
          return (
            <div
              key={channel}
              className={styles.select}
            >
              <img
                alt="avatar-img"
                src={imageSrc}
                style={avatarStyle}
              />
             <p onClick={() => handleChannelClick(channel)}
            style={{
              fontSize: '14px',
              marginLeft: '25px',
              cursor: 'pointer',
            }}>
            #
            {/* {this.getChannelName(channel)} */}
            {this.state.channelName}
          </p>
        </div>
          );
        })}
      </div>
    );
  }
}

export default React.memo(Groups2);
