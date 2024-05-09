import logo from './logo.svg';
//import './App.css';

import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkCompnent from './components/BlinkComponent';
import CBlinkComponent from './components/CBlinkComponent';
import CountComponent from './components/CountComponent';
import {useState} from "react";

function App() {
  const [showCount,setShowCount] = useState(true);
  return (
    <div className="App">
      <button onClick={(e)=>{
        setShowCount(!showCount);
      }}>버튼</button>
      {showCount ? <CountComponent/>: null}
        {/* <HelloWorld/> */}
        {/* <CaptionImage 
        imgUrl = "https://wimg.mk.co.kr/news/cms/202312/02/20231202_01160106000003_L00.jpg"
        caption="이건 트럭입니다."/> */}
        {/* <BlinkCompnent text="깜빡"/> */}
        {/* <CBlinkComponent text = "까암빡"/> */}

    </div>
  );
}

export default App;
