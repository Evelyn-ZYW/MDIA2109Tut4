import React from 'react';

import './chat.css';

import Header from '../Header';

import {GiSharpSmile} from 'react-icons/gi';

const defaultImg = require('./default.png');

const Chat = ({ msg, img, name, backgroundColor }) => <div
  style={{backgroundColor:backgroundColor}}
  className="chat_card">
  <div className="chat_user">
    <img src={img} />
    <Header fontSize="100%" text={name} />
  </div>
  <div className="chat_msg">
    {msg}
    <GiSharpSmile />
  </div>
</div>;

Chat.defaultProps = {
  msg: "Please type something!",
  img: defaultImg,
  name: "Username",
  backgroundColor: "#EEE"
}

export default Chat;