import { IGlobal } from "../interfaces/GlobalInterface"
import isGameOn from "./isGameOn"

export function winCheck(t: Array<number>, c: IGlobal){
   console.log(t)

   if(t?.includes(1) && t?.includes(2) && t?.includes(3 )){
    console.log('você ganhou')
    isGameOn(c, false)
    return
   }
   if(t?.includes(4) && t?.includes(5) && t?.includes(6 )){
    isGameOn(c, false)
    console.log('você ganhou')
    return
   }
   if(t?.includes(7) && t?.includes(8) && t?.includes(9 )){
    isGameOn(c, false)
    console.log('você ganhou')
    return
   }
   if(t?.includes(1) && t?.includes(4) && t?.includes(7 )){
    isGameOn(c, false)
    console.log('você ganhou')
    return
   }
   if(t?.includes(2) && t?.includes(5) && t?.includes(8 )){
    isGameOn(c, false)
    console.log('você ganhou')
    return
   }
   if(t?.includes(3) && t?.includes(6) && t?.includes(9 )){
    isGameOn(c, false)
    console.log('você ganhou')
    return
   }
   if(t?.includes(1) && t?.includes(5) && t?.includes(9 )){
    isGameOn(c, false)
    console.log('você ganhou')
    return
   }
   if(t?.includes(3) && t?.includes(5) && t?.includes(7 )){
    isGameOn(c, false)
    console.log('você ganhou')
    return
   }
}