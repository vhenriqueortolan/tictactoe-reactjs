import { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { clickCell } from "../handlers/clickCell";

function Cell({ cellId }: { cellId: number}) {
  const context = useContext(GlobalContext)
  const cellRef = useRef<HTMLButtonElement>(null)

  return (
    <button ref={cellRef} name="Cell" className="Cell" onClick={()=>{
      if (cellRef.current?.innerHTML === "X" || cellRef.current?.innerHTML === "O"){
        return
      }      
      clickCell(cellRef, cellId, context)
      }}>
    </button>
  );
}

export default Cell;
