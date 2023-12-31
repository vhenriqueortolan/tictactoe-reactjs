import React from "react"
import { IGlobal } from "../interfaces/GlobalInterface"
import togglePlayer from "./togglePlayer"
import isGameOn from "./isGameOn"


export  function clickCell(n: React.MutableRefObject<HTMLButtonElement | null>, cellId: number, context: IGlobal) {
  isGameOn(context, true)
  if (context.player === "p1"){
    const arr = [...context.cellsPlayer1!, cellId]
    context.setCellsPlayer1(arr)
    togglePlayer(context)
    n.current!.innerText = "X"
    return
   }
  else{
    const arr = [...context.cellsPlayer2!, cellId]
    context.setCellsPlayer2(arr)
    togglePlayer(context)
    n.current!.innerText = "O"
    return
   }
}