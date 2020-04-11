import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
  title: "My comps",
  component: CustomButton
};



export const MyCustomButton = () => <CustomButton />;

function CancelClick() {
  alert("cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton 
color="#999"
text="Cancel"
onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input 
  placeholder="Custom Placeholder"
  />;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;
/*
export const PageWithCustomButtons = () => <div>
  <Header
    text="This is going to be fun"
    fontSize={25}
    color="pink"
    onMouseOver={OneFun}
  />

  <Header
    text="This is going to be fun fun"
    fontSize={21}
    color="lightblue"
    onMouseOver={TwoFun}
  />

  <Header
    text="This is going to be fun fun fun"
    fontSize={18}
    color="purple"
    onMouseOver={ThreeFun}
  />

  <Header
    text="This is going to be fun fun fun fun"
    fontSize={15}
    color="lightgreen"
    onMouseOver={FourFun}
  />

  <CustomButton
    color="#999"
    text="Cancel"
    onClick={CancelClick}
  />
  <CustomButton
    color="#3F5"
    text="OK"
    onClick={OkClick}
  />
  <CustomButton
    color="#F3F"
    text="Submit"
    onClick={SubClick}
  />
  <CustomButton
    text="Menu"
    onClick={MenuClick}
  />
</div>

function CancelClick() {
  alert("cancel");
}

function OkClick() {
  alert("OK");
}

function SubClick() {
  alert("Submit");
}

function MenuClick() {
  alert("Menu");
}

function OneFun() {
  alert("Are you sure?");
}

function TwoFun() {
  alert("No you have no idea.");
}

function ThreeFun() {
  alert("Ok stoooooooooop");
}

function FourFun() {
  alert("lolololololololol");
}
*/