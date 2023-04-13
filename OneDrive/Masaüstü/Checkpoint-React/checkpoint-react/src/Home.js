import { useState } from "react";
export default function Home(){
    const [url, setUrl] = useState("");
    const [evenList, setEvenList] = useState([]);
     const [oddList, setOddList] = useState([]);
        
     const randomStr = "13";
    const returnSentence = ()=>{
        
    }
    const Even = ()=>{
        if(Number%2===0){
        setEvenList(evenList)
        }
    }
    const Odd = () => {
      if (url % 2 === 1) {
        setOddList(oddList);
      }
    };

    return (
      <div>
        <button onClick={returnSentence}>Random</button>
        <button onClick={Even}>Even</button>
        <button onClick={Odd}>Odd</button>
      </div>
    );
}