import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const [value, setValue] = useState('');
  const [expression, setExpression] = useState('');
  const [result,setResult]=useState("")

  // Function to handle button clicks
  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        // Evaluate the expression and update the value
        const evaluatedResult = eval(expression); // Caution: Use eval carefully
        // setValue(evaluatedResult.toString());
        setResult(evaluatedResult.toString());
      } catch (error) {
        setValue('Error'); // Handle invalid expressions gracefully
        setExpression('');
      }
    } else if (buttonValue === 'C') {
      // Clear the calculator
      setValue('');
      setExpression('')
      setResult('');
    } else {
      setExpression((prev) => prev + buttonValue); // Update the expression
      setValue((prev) => prev + buttonValue); // Update the displayed value
    }
  };


  return (
    <div className="App">
      <h1>React Calculator</h1>
      {/* Bind value to state and update on change */}
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type='text'
        // Make input read-only to prevent manual edits
      />
      <br></br>
      {result && <p>{result}</p>}
      <br></br>
      {/* Pass button values to handleButtonClick */}
      <Button value="7" onClick={() => handleButtonClick('7')} type="button"/>
      <Button value="8" onClick={() => handleButtonClick('8')} type="button"/>
      <Button value="9" onClick={() => handleButtonClick('9')} type="button"/>
      <Button value="+" onClick={() => handleButtonClick('+')} type="button"/>
      <br></br>
      <Button value="6" onClick={() => handleButtonClick('6')} type="button"/>
      <Button value="5" onClick={() => handleButtonClick('5')} type="button"/>
      <Button value="4" onClick={() => handleButtonClick('4')} type="button"/>
      <Button value="-" onClick={() => handleButtonClick('-')} type="button"/>
      <br></br>
      <Button value="1" onClick={() => handleButtonClick('1')} type="button"/>
      <Button value="2" onClick={() => handleButtonClick('2')}  type="button"/>
      <Button value="3" onClick={() => handleButtonClick('3')}  type="button"/>
      <Button value="*" onClick={() => handleButtonClick('*')}  type="button"/>
      <br></br>
      <Button value="=" onClick={()=>handleButtonClick("=")} type="button"/>
      <Button value="0" onClick={()=> handleButtonClick('0')} type="button"/>
      <Button value="C" onClick={()=>handleButtonClick("C")} type="button"/>
      <Button value="/" onClick={() => handleButtonClick('/')}  type="button"/>

    </div>
  );
}

export default App;
