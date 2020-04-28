import Link from 'next/link';
import Router from 'next/router';
import {FaSearchengin} from 'react-icons/fa';
import {GiTreeBranch} from 'react-icons/gi';
import {IoMdContacts} from 'react-icons/io';
import './index.css';

import {data, ChangeData} from './data';

console.log("doesn't reload, loads only once", data);


function ClickIndex() {
  ChangeData({
    lastaction:"Went to Chat!",
    numClick:0
  })
  document.querySelector("#mainapp").style.right = "100%";
  setTimeout(function(){
    Router.push("/ChatPage");
  }, 1000)
}

const Index = () => <div id="mainapp">
  <div onClick={ClickIndex}>Index</div>
  <FaSearchengin />

  <Link href="/ChatPage"><button><GiTreeBranch color="#ABC" /> Chats!</button></Link>
  <Link href="/Contact"><button><IoMdContacts color="#ABC" /> Contact Me</button></Link>
</div>

export default Index;