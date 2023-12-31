import { IGlobal } from "../interfaces/GlobalInterface";

export default function togglePlayer(context: IGlobal) {
  const p = context.player === "p1" ? "p2" : "p1";
  context.setPlayer(p)
}
