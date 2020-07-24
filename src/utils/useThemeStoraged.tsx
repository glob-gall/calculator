import {useState, useEffect} from 'react'


export default function useThemeStoraged<T>(key:string, initialState:T){
  const[theme,setTheme] = useState(()=>{
    const storagedTheme = localStorage.getItem(key)

    if(storagedTheme) return JSON.parse(storagedTheme)

    return initialState
  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(theme))
  },[key,theme])
  

  return [theme,setTheme]
}