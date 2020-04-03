//use the same component to change the fontSize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => <div
className="custom_header"
style={{color:color, fontSize:fontSize}}
>
  <h1
  onMouseOver={onMouseOver}
  className="custom_header_inner"
  >
    {text}
  </h1>
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