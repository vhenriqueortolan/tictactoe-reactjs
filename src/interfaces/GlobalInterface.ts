import React from "react";

export interface IGlobal {
  player?: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  cellValue: string;
  setCellValue: React.Dispatch<React.SetStateAction<string>>;
  cellsPlayer1: Array<number>;
  cellsPlayer2: Array<number>;
  setCellsPlayer1: React.Dispatch<React.SetStateAction<Array<number>>>;
  setCellsPlayer2: React.Dispatch<React.SetStateAction<Array<number>>>;
  isGameOn: boolean;
  setIsGameOn: React.Dispatch<React.SetStateAction<boolean>>;
}
