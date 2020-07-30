import React, { useState, useCallback } from 'react';

import { Container,Teste } from './styles';



const Calculator: React.FC = () => {

  const [result,setResult] = useState(0)
  const [calculation,setCalculation] = useState(0)
  const [screen,setScreen] = useState('0')
  const [isNegative,setIsNegative] = useState(false)
  const [lastOperator,setLastOperator] = useState('')

  const calculate = useCallback((operator:string)=>{

    if(lastOperator ==='+'){
      setResult(state=> state + calculation)
      setScreen(`${result + calculation}${(operator ==='=')?'':operator }`)
    } 
    if(lastOperator ==='-'){
      setResult(state=> state - calculation)
      setScreen(`${result - calculation}${(operator ==='=')?'':operator }`)
    } 
    if(lastOperator ==='*'){
      setResult(state=> state * calculation)
      setScreen(`${result * calculation}${(operator ==='=')?'':operator }`)
    } 
    if(lastOperator ==='/'){
      setResult(state=> state / calculation)
      setScreen(`${result / calculation}${(operator ==='=')?'':operator }`)
    } 
    if(lastOperator ===''){
      setResult(calculation)
      setScreen(state=>state+operator)
    }
    setCalculation(0)

    if(operator !== '=')  setLastOperator(operator)
  },[calculation, lastOperator, result])



  const invertNumber = useCallback(()=>{
      setIsNegative(state=> !state)
      if(!isNegative){
        setScreen(state=>`-${state}`)
        setCalculation(-parseInt(screen))
      }else{
        const positive = screen.replace(/-/,'')
        setScreen(positive)
        setCalculation(state=>-state)
      }
    
  },[isNegative, screen])



  const addToCalculation = useCallback((number:number) => {
    if(number === -1) return

    setScreen(state=>{
      return (state==='0') ? number.toString():state+number
    })
    setCalculation(state=> {
      const concatenatedState =''+state+number
      return parseFloat(concatenatedState)
    })
  },[])
  const reset = useCallback(()=>{
    setScreen('0')
    setResult(0)
    setCalculation(0)
    setLastOperator('')
  },[])



  return(
    <>
    <Container>
      <p>{screen}</p>
      <button className="operator-grey" onClick={()=>{reset()}}>AC</button>
      <button 
      className="operator-grey" 
      onClick={()=>{invertNumber()}}
      >
        +/-
      </button>
      <button className="operator-grey">%</button>
      <button 
        className="operator-orange"
        onClick={()=>{calculate('/')}}
      >/</button>
      <button onClick={()=>addToCalculation(7)}>7</button>
      <button onClick={()=>addToCalculation(8)}>8</button>
      <button onClick={()=>addToCalculation(9)}>9</button>
      <button 
        className="operator-orange"
        onClick={()=>{calculate('*')}}
      >
        x
      </button>
      <button onClick={()=>addToCalculation(4)}>4</button>
      <button onClick={()=>addToCalculation(5)}>5</button>
      <button onClick={()=>addToCalculation(6)}>6</button>
      <button 
        className="operator-orange"
        onClick={()=>{calculate('-')}}
      >-</button>
      <button onClick={()=>addToCalculation(1)}>1</button>
      <button onClick={()=>addToCalculation(2)}>2</button>
      <button onClick={()=>addToCalculation(3)}>3</button>
      <button 
        className="operator-orange"
        onClick={()=>{calculate('+')}}
      >+</button>
      <button className="zero" onClick={()=>addToCalculation(0)}>0</button>
      <button onClick={()=>addToCalculation(-1)}>,</button>
      <button className="operator-orange" onClick={()=>{calculate('=')}}>=</button>
    </Container>
    <Teste>
      <p>result:{result}</p>
      <p>screen:{screen}</p>
      <p>calculation:{calculation}</p>
      <p>lastoperator:{lastOperator}</p>
    </Teste>
    </>
  ) 
}

export default Calculator;