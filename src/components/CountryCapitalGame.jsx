import React from 'react'
import { useState } from 'react'

const CountryCapitalGame = ({data}) => {
    const SELECTED = "SELECTED";
    const WRONG = "WRONG";
    const DEFAULT = "DEFAULT";
    const states = Object.keys(data);
    const capitals = Object.values(data);



    const [buttonTexts, setButtonTexts] = useState([...states, ...capitals]
            .map(value => ({
              value: value,
              state: DEFAULT
            }))
            .sort(randomSort)
      );

    const [prevValue, setPrevValue] = useState('')

    function randomSort() {
        return 0.5 - Math.random();
    }

    const getButtonColor = (textState) => {
            switch(textState) {
              case SELECTED:
                return "selected";
              case WRONG:
                return "wrong"
              case DEFAULT:
                return ''
            }
    }

    const restart = () => {
            setButtonTexts([...states, ...capitals].map(value => ({
              value: value,
              state: DEFAULT
            }))
            .sort(randomSort))
    } 

    const buttonClickHandler = (text, buttonTexts) => {
            if(!prevValue) {
                setButtonTexts(
                    buttonTexts.map(option => {
                          return {
                                ...option,
                                state: option === text ? SELECTED : DEFAULT
                              }
                }))
                setPrevValue(text.value)
            }
            else if (text.value !== prevValue) {
                  if ((data.hasOwnProperty(text.value) && data[text.value] === prevValue) || (data[prevValue] === text.value)){
                      setButtonTexts(buttonTexts.filter(opt => {
                          return opt.value !== text.value && opt.value !== prevValue} ))
                  }
                  else {
                      setButtonTexts(
                        buttonTexts.map(option => {
                              return option === text || option.state === SELECTED
                                  ? {
                                    ...option,
                                    state: WRONG
                                  } 
                                  : option;
                    }));
                  }
                setPrevValue("");
            }
    }

    const createButtons = buttonTexts.map(text => {
                            return (<button key={text.value}
                                            className={getButtonColor(text.state)}
                                            onClick={() => buttonClickHandler(text, buttonTexts)}>
                                      {text.value}
                                    </button>
                                    )
                          });

    return (<div className="section-container">
              {buttonTexts.length === 0 ? (<div >
                                              <p>Congratulations!</p>
                                              <button onClick={restart}>Play Again</button>
                                            </div>
                                          )
                                          : 
                                          createButtons}
            </div>
          )
}

export default CountryCapitalGame