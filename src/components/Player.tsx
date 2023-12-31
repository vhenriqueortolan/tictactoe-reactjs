import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import togglePlayer from "../handlers/togglePlayer";

export function Player() {
  const context = useContext(GlobalContext);

  return <div>
    <span>É a vez do jogador {context?.player}</span>
    <button hidden={context.isGameOn} onClick={()=>{togglePlayer(context!)}}>
      Trocar Jogador
    </button>
    </div>;
}
