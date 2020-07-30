import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion'

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
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return(
    <>
    <Container 
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={item}
      >{screen}</motion.p>
      <motion.button 
      className="operator-grey" onClick={()=>{reset()}}
      variants={item}
      >
        AC
      </motion.button>
      <motion.button 
      className="operator-grey" 
      onClick={()=>{invertNumber()}}
      variants={item}
      >
        +/-
      </motion.button>
      <motion.button 
      variants={item}
      className="operator-grey">%</motion.button>
      <motion.button 
      variants={item}
        className="operator-orange"
        onClick={()=>{calculate('/')}}
      >/</motion.button>
      <motion.button onClick={()=>addToCalculation(7)}
        variants={item}
      >7</motion.button>
      <motion.button onClick={()=>addToCalculation(8)}
        variants={item}
      >8</motion.button>
      <motion.button onClick={()=>addToCalculation(9)}
        variants={item}
      >9</motion.button>
      <motion.button 
      variants={item}
        className="operator-orange"
        onClick={()=>{calculate('*')}}
      >
        x
      </motion.button>
      <motion.button
        variants={item}
      onClick={()=>addToCalculation(4)}>4</motion.button>
      <motion.button variants={item} onClick={()=>addToCalculation(5)}>5</motion.button>
      <motion.button variants={item} onClick={()=>addToCalculation(6)}>6</motion.button>
      <motion.button 
        variants={item}
        className="operator-orange"
        onClick={()=>{calculate('-')}}
      >-</motion.button>
      <motion.button variants={item} onClick={()=>addToCalculation(1)}>1</motion.button>
      <motion.button variants={item} onClick={()=>addToCalculation(2)}>2</motion.button>
      <motion.button variants={item} onClick={()=>addToCalculation(3)}>3</motion.button>
      <motion.button 
      variants={item}
        className="operator-orange"
        onClick={()=>{calculate('+')}}
      >+</motion.button>
      <motion.button variants={item} className="zero" onClick={()=>addToCalculation(0)}>0</motion.button>
      <motion.button variants={item} onClick={()=>addToCalculation(-1)}>,</motion.button>
      <motion.button variants={item} className="operator-orange" onClick={()=>{calculate('=')}}>=</motion.button>
    </Container>
    {/* <Teste>
      <p>result:{result}</p>
      <p>screen:{screen}</p>
      <p>calculation:{calculation}</p>
      <p>lastoperator:{lastOperator}</p>
    </Teste> */}
    </>
  ) 
}

export default Calculator;