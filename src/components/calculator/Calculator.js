import './Calculator.css'
import React from 'react'

export default function Calculator() {

    const [firstNumber, setfirstNumber] = React.useState(0);
    const [secondNumber, setsecondNumber] = React.useState(0);
    const [result, setResult] = React.useState(0);

    const handleChange = (e) => {
        if (e.target.name === "input1")
            setfirstNumber(e.target.value);

        if (e.target.name === "input2")
            setsecondNumber(e.target.value);
    }

    return (


        <div>
            <div>
                <label class="input_box"> Enter first Number :
                    <input name="input1" placeholder="First number" type="number" class="input_box" value={firstNumber} onChange={handleChange} ></input> <br />
                </label>
            </div>q
            {/* <label>Enter Second Number</label> */}
            <label class="input_box"> Enter Second Number :
                <input name="input2" placeholder="Second Number" type="number" class="input_box" value={secondNumber} onChange={handleChange}></input> <br />
            </label><br />
            <button onClick={() => { setResult(parseInt(firstNumber) + parseInt(secondNumber)) }} >Add</button>
            <button onClick={() => { setResult(parseInt(firstNumber) - parseInt(secondNumber)) }} id="Subtract">Subtract</button>
            <button onClick={() => { setResult(parseInt(firstNumber) * parseInt(secondNumber)) }} id="Multiply">Multiply</button>
            <button onClick={() => { setResult(parseInt(firstNumber) / parseInt(secondNumber)) }} id="divide">Divide</button> <br />

            <label class="result_box"> Result :
                <input placeholder="Result" id="third" value={result}  ></input>
            </label>

        </div>
    )
}