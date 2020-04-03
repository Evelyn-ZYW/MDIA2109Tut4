import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
  title:"Custom Button",
  component:CustomButton
};

export const MyCustomButton = () => <CustomButton />

export const PageWithCustomButtons = () => <div>
  <Header
   fontSize={15}
   color="ABC"
   onMouseOver={CancelClick}
  />
  
  <Header
   fontSize={25}
   color="red"
   onMouseOver={OkClick}
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

function CancelClick(){
  alert("cancel");
}

function OkClick(){
  alert("OK");
}

function SubClick(){
  alert("Submit");
}

function MenuClick(){
  alert("Menu");
}