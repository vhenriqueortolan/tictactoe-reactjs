/* eslint-disable react-hooks/exhaustive-deps */
import "./styles.css";
import Cell from "./components/Cell";
import { Player } from "./components/Player";
import { useContext, useEffect } from "react";
import { winCheck } from "./handlers/resultCheck";
import { GlobalContext } from "./context/GlobalContext";

export default function App() {
  const context = useContext(GlobalContext)

  useEffect(()=>{
    winCheck(context.cellsPlayer1, context)  
    },[context.cellsPlayer1])

  useEffect(()=>{
    winCheck(context.cellsPlayer2, context)  
  },[context.cellsPlayer2])

  useEffect(()=>{
    if(!context.isGameOn && context.cellsPlayer1.length > 3){
      const arr = document.getElementsByName("Cell")
      for (let i = 0; i < arr.length; i++){
      const b = arr[i] as HTMLButtonElement
      b.disabled = true
    }}
  },[context.isGameOn])

  return (
    <div id="App" className="App">
      <div className="Cells">
        <Cell cellId={1}/>
        <Cell cellId={2}/>
        <Cell cellId={3}/>
        <Cell cellId={4}/>
        <Cell cellId={5}/>
        <Cell cellId={6}/>
        <Cell cellId={7}/>
        <Cell cellId={8}/>
        <Cell cellId={9}/>
      </div>
      <Player />
    </div>
  );
}
