import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
  title: "Custom Button",
  component: CustomButton
};


export const MyCustomButton = () => <CustomButton />


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