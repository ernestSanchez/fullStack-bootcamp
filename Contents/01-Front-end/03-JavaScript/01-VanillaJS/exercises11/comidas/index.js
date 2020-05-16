
import {Desayuno} from "./desayuno.js"
import {Almuerzo} from "./almuerzo.js"
import {Cena} from "./cena.js"



const huevosRevueltos = new Desayuno(1500,"200g","salado");

const paella = new Almuerzo(1500,"800g","variado");

const merluza = new  Cena(800,"200g","salado");


huevosRevueltos.comer()

paella.comer()

merluza.comer()