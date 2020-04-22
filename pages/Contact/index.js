import { useState, useEffect } from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';

var index = 0;
const headers_arr = [
  "Thanks for contacting me!",
  "Goodbye",
  "Let me know if you have other questions."
]

const Contact = () => {
  //step 1 - Create the state variable and the function to update it, and put a default inside.
  const [header_text, setHeader] = useState("Contact me!");
  //const [img_url, setImg] = useState("");
  const [pageleft, setLeft] = useState("-100%");
  //const [index, setIndex] = useState(0);

  useEffect(() => {
    //what to do when it's created/born/beginning of the life cycle
    setTimeout(() => {
      setLeft(0);
    }, 50);

    return ()=>{
      //what to do when the component dies
    }
  }, []);

  useEffect(() => {
    //what to do when it's created/born/beginning of the life cycle
  }, []);

  useEffect(()=>{
    //what to do when a state in the page/component updates
    //alert("Hi! Header text has changed.")
    setLeft(20);
    setTimeout(()=>{
      setLeft(0);
    },500);
  },[header_text]);

  //step 2 - connect the state variable to the UI
  return <div id="contactpage" style={{ left: pageleft }}>
    <Header text={header_text} fontSize={24} />
    {/* <img src={img_url} /> */}
    <CustomButton text="email" onClick={() => {
      //step 3 - connect the state function() to an interaction / figure out when you want to update the interface

      setHeader(headers_arr[index]);
      //setImg(headers_arr[index].img);
      index++;
      if (index > headers_arr.length - 1) {
        index = 0;
      }
      //setLeft("100%");
    }} />
  </div>
}
export default Contact;