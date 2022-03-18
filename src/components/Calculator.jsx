import { useState } from 'react'



function Calculator() {
    // Set that original value of the state to '0'
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    // Set the state of the results to the numbers added together
    const [result, setResult] = useState(value1+value2);
    const [subResult, setSubResult] = useState(value1-value2);


    const inputHandling1 = (e) => {
        // Set value1 to the value the user innput's from 'value1' field
        setValue1(parseInt(e.target.value))
    }

    const inputHandling2 = (e) => {
        // Set value2 to the value the user innput's from 'value2' field
        return setValue2(parseInt(e.target.value))
    }

    const add = (e) => {
        e.preventDefault();
        
        return setResult(value1 + value2)
    }

    const subtract = (e) => {
        e.preventDefault();

        return setSubResult(value1 - value2)
    }



    return(
        <div>
            <h1>Calculate with React!</h1>

            <form className="add">
                <input type="text" name="value1" onChange={ inputHandling1 } />
                <span>+</span>
                <input type="text" name="value2" onChange={ inputHandling2 } />
                <span>=</span>
                <h4>SEE RESULT BELOW!</h4>
                <span></span>
                {/* addition results */}
                <h3>{ result }</h3>
                <div className='add-button'>
                    <button className='add-results' onClick={add}>Add</button>
                </div>
                <span></span>
                {/* subtraction results */}
                <h3>{ subResult }</h3>
                <div className='subtract-button'>
                    <button className='subtract-results' onClick={ subtract }>Subtract</button>
                </div>
            </form>
        </div>
    )
}

export default Calculator