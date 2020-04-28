import React, { useState, useEffect } from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Input from '../../comps/Input';
import Header from '../../comps/Header';

import {data, ChangeData} from '../data';

console.log("doesn't reload, loads only once", data);

/*
var welcome = "Welcome to my App!"
function setWelcome(){
  welcome = "Start with sending a message. "
  document.querySelector("#welcome").innerText = welcome;
}
*/



const ChatPage = ({ }) => {
  console.log("loads everytime I use the component", data);
  const [welcome, setWelcome] = useState("welcome to my App!");
  const [msg, setMsg] = useState("Pls type something!");
  const [resp, setResp] = useState("Let me respond.");
  const [color, setColor] = useState("#F1C7B5");
  const [text, setText] = useState("I'm a plain button");

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#chatpage").style.left = "30%";
    }, 50)
  }, []);

  return <div id="chatpage">
    <div id="welcome">
      <Header fontSize={32} text={welcome} />
    </div>
    <div id="chats" onClick={() => {
      setWelcome("Start with sending a message.");
    }}>
      <Chat name={"User 1"} msg={msg} />
      <p />
      <Chat
        img={"https://img.icons8.com/pastel-glyph/2x/robot-2--v2.png"}
        name={"Chat Bot"} backgroundColor={"#FAB"} msg={resp} />
    </div>
    <div id="controls">
      <Input onClick={(val) => {
        setMsg(val);
        var new_resp = CheckResponse(val);
        setResp(new_resp);
        // if (val === "hi"){
        //   setResp("I love pie.");
        // }
      }} />
    </div>
    <div id="custom_button">
      <CustomButton color={color} text={text} onClick={() => {
        setColor("#548591");
        setText("I'm a teal button");
      }} />
    </div>
  </div>
}

function CheckResponse(inp) {
  var num = data.numClicks;
  ChangeData({
    lastaction:"Clicked send",
    numClicks: num+1
  });
  switch (inp.toLowerCase()) {
    case "hi":
      return "I love pie";
    case "how are you?":
      return "great!";
    default:
      return "I don't understand what are you trying to say";
  }
}

ChatPage.defaultProps = {

}

export default ChatPage;