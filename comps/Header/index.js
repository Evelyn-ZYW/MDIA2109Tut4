//use the same component to change the fontSize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div>
  <h1>Header</h1>
</div>

function MouseOver(){
  alert("mouse is over");
}

Header.defaultProps = {
  fontSize:12,
  color:"#000",
  onMouseOver:MouseOver
}


export default Header;