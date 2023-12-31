import { useState, createContext, ReactNode} from "react";
import {IGlobal} from "../interfaces/GlobalInterface";

export const GlobalContext = createContext<IGlobal>({} as IGlobal);

export const GlobalContextProvider = ({ children }: { children: ReactNode}) => {
  const [player, setPlayer] = useState<string>("p1");
  const [cellValue, setCellValue] = useState<string>("")
  const [cellsPlayer1, setCellsPlayer1] = useState<Array<number>>([0])
  const [cellsPlayer2, setCellsPlayer2] = useState<Array<number>>([0])
  const [isGameOn, setIsGameOn] = useState<boolean>(false)
  
  return (
    <GlobalContext.Provider value={{
      player, 
      setPlayer, 
      cellValue, 
      setCellValue,
      cellsPlayer1, 
      setCellsPlayer1,
      cellsPlayer2, 
      setCellsPlayer2,
      isGameOn,
      setIsGameOn
    }}>{children}
    </GlobalContext.Provider>
  );
};
