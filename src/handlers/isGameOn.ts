import { IGlobal } from "../interfaces/GlobalInterface";

export default function isGameOn(context: IGlobal, set: boolean){
    context.setIsGameOn(set)
}