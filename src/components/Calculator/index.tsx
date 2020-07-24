import React, { useState, useCallback } from 'react';

import { Container } from './styles';



const Calculator: React.FC = () => {

  const [result,setResult] = useState(0)
  // const [ac,setAc] = useState(true)
  // const [calculation,setCalculation] = useState(0)

  // const addToCalculation = useCallback(()=>{
    
  // },[])

  return(
    <Container>
      <p>{result}</p>
      <button className="operator-grey">AC</button>
      <button className="operator-grey">+/-</button>
      <button className="operator-grey">%</button>
      <button className="operator-orange">/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="operator-orange">x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="operator-orange">-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="operator-orange">+</button>
      <button className="zero">0</button>
      <button>,</button>
      <button className="operator-orange">=</button>
    </Container>
  ) 
}

export default Calculator;