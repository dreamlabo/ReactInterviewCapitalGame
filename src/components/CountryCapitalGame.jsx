import React from 'react'
import { useState } from 'react'
// import Button from './Button'


const blueColor = "#0000FF";
const ButtonState = "DEFAULT" | "SELECTED" | "WRONG"


const CountryCapitalGame = ({data}) => {
 

  const [colorMapping, setColorMapping] = useState({});
  const [clicked, setClicked] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');


  const states = Object.keys(data);
  const capitals = Object.values(data);
  const [buttonTexts, setButtonTexts] = useState([...states, ...capitals]
          .map(value => ({
            value: value,
            state: "DEFAULT"
          }))
          .sort(randomSort)
    );

  const [prevValue, setPrevValue] = useState('')

  function randomSort() {
      return 0.5 - Math.random();
  }

  const createButtons = buttonTexts.map(text => {
                          return (<button key={text.value}
                                          className={text.state === "SELECTED" ? "selected" : ""}
                                        
                                          onClick={() => {
                                            // console.log("prev", prevValue)
                                            if(!prevValue) {
                                              // console.log("clicked", text.value)
                                              setButtonTexts(
                                                  buttonTexts.map(option => {
                                                        return option === text 
                                                        ? {
                                                          ...option,
                                                          state: "SELECTED"
                                                        } : option;
                                              }))
                                              setPrevValue(text.value)
                                            }
                                            else if (text.value !== prevValue) {
                                                if (data.hasOwnProperty(text.value) && data[text.value] === prevValue) {
                                                    console.log("Its a key/value match")
                                                }
                                                else if (data[prevValue] === text.value) {     
                                                            console.log("found")
                                                        }
                                                    }
                                                }



                                            
                                            
                                            
                                            }
                                          >
                                    {text.value}
                                  </button>)
  });
  // const createButtons = randomArray.map(text =>  {
  //   return ( <button 
  //     className={colorMapping[text] === "SELECTED" ? "selected" : ""}
  //   onClick={() => {
  //     setColorMapping({
  //       ...colorMapping,
  //       [text]: "SELECTED"
  //     })

  //   }}> 
  //     {text}
  //     </button>)
  // })


  // const handleClick = (btnText, isState) => {
  //   if(clicked) {
  //     console.log('second click', btnText);
     
  //     if(isState) {
  //         if (data.hasOwnProperty(btnText) && data[btnText] === buttonText) {
  //           console.log(`Object has key '${btnText}' and the value matches '${buttonText}'`);
  //       } else {
  //           console.log(`Object does not have key '${btnText}' or the value does not match '${buttonText}'`);
  //       }
  //     }
  //     else{
  //       for (const key in data) {
  //         if (data[key] === btnText) {
  //             // hasMatchingValue = true;
  //             console.log("found")
  //             break;  // Exit the loop early since we found a match
  //         }
  //     }
  //     }
  //     setButtonText('');
  //     setClicked(false);
  //   }
  //   else {
  //     setClicked(true);
  //     setButtonText(btnText);
  //   }
  // }

//  const createButtons = () => {
//   return Object.entries(data).flatMap(([key, value], index) => [
//     <Button buttonColor={buttonColor} isState={true} key={`${index}-${key}`} onClick={handleClick} text={key}/>,
//     <Button buttonColor={buttonColor} isState={false} key={`${index}-${value}`} onClick={handleClick} text={value} />,
  
//           // <Button key={`${index}-${key}`} />,
//           // <Button key={`${index}-${value}`}>{value}} />
  
//   ]);

//  };
  return (
    <>
      {createButtons}
    </>
  )
}

export default CountryCapitalGame