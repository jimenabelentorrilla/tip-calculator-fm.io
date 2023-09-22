import './App.css';
import { useState, useEffect } from "react";
import Logo from "./assets/logo.svg";
import Dollar from "./assets/icon-dollar.svg";
import Person from "./assets/icon-person.svg"

function App() {

  const [inputBill, setInputBill] = useState("");

  const [inputPerson, setInputPerson] = useState("");
 
  const [percent, setPercent ] = useState("");

  const [ tipAmount, settipAmount ] = useState(0);
  
  const [totalPerson, settotalPerson ] = useState(0);


  useEffect(() => {
    
    if (inputPerson && inputBill !== 0) {
      const calculatedTip = parseFloat(((inputBill * percent) / 100) / inputPerson);
      const calculatedTotal = (parseFloat(inputBill) + (calculatedTip * inputPerson)) ;
      settipAmount(calculatedTip);
      settotalPerson(calculatedTotal);
  } else {
    settipAmount(0);
    settotalPerson(0);
  }
  }, [inputBill, inputPerson, percent]);

  return (
    <>
    <form >
      <div className='container'>
        <div>
          <img src={Logo}/>
        </div>
        <div></div>
        <div className='card-blanca'>
          <div className='subcard-blanca'>
            <div className='bill'>
              <p>Bill</p>
              <div className='input'>
                <div>
                  <img src={Dollar} />
                </div>
                <div>
                  <input  
                  type='text' 
                  placeholder='0'
                  onChange={ev => setInputBill (ev.target.value)}
                />
                </div>
              </div>
            </div>
            <div className='select'>
              <p> </p>
              <div className='btns'> 
                <button
                className="btn-percent" 
                value="5"
                onClick={(ev) => { 
                  ev.preventDefault();
                  bgBtnAct();
                  setPercent (ev.target.value) 
                }}
                type="submit">5%</button> 
                <button
                className="btn-percent"  
                value="10"
                onClick={ev => { 
                  ev.preventDefault();
                  setPercent (ev.target.value) 
                }}
                type="submit">10%</button>
                <button
                className="btn-percent"  
                value="15"
                onClick={ev => { 
                  ev.preventDefault();
                  setPercent (ev.target.value) 
                }}
                type="submit">15%</button>
                <button
                className="btn-percent"  
                value="25"
                onClick={ev => { 
                  ev.preventDefault();
                  setPercent (ev.target.value) 
                }}
                type="submit">25%</button>
                <button
                className="btn-percent"  
                value="50"
                onClick={ev => { 
                  ev.preventDefault();
                  setPercent (ev.target.value) 
                }}
                type="submit">50%</button>
              </div>
            </div>
            <div className='number'>
              <p>Number of people</p>
              <div className='input'>
                <div>
                  <img src={Person} />
                </div>
                <div>
                  <input 
                  type='text' 
                  placeholder='0'
                  onChange={ev => setInputPerson (ev.target.value)}
                />
                </div>
              </div>
            </div>
          </div>
          <div className='subcard-verde'>
            <div className='valores'>
              <div className='valores-flex'>
                <div className='val-text'>
                  <p>Tip Amount</p>
                  <span>/person</span>
                </div>
                <div className='val-cyan'>
                  <p>${tipAmount.toFixed(2)}</p>
                </div>
              </div>
              <div className='valores-flex'>
                <div className='val-text'>
                  <p>Total</p>
                  <span>/ person</span>
                </div>
                <div className='val-cyan'>
                  <p>${totalPerson.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className='button'>
              <button>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </form>
      
    </>
  )
}

export default App
