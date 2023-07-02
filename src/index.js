import React from 'react';
import './styles.css';
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
        <Intro />
        <SkillList />
        </div>
      </div>
    </>
  );
}
function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill="KineMaster" emoji="💪" color="cyan"/>
      <Skill skill="Python" emoji="💪" color="orange"/>
      <Skill skill="HTML" emoji="🤏" color="yellow"/>
      <Skill skill="CSS" emoji="🤏" color="orangered"/>
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color  }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>อิศวร์รักษ์ หนูทอง</h1>
      <p>
      นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ มหาวิทยาลัยอุบลราชธานี
ผู้ที่ชื่นชอบการตัดต่อวิดีโอ ซึ่งงานการไม่ทำชอบชวนเพื่อนไปตีแบด
      </p>
    </div>
  );
}
function Avatar() {
  return <img className='avatar' src="myProfile.jpg" alt="My Avatar"/>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);