// import { initModals } from "./modals.js";
// import { initSliders } from "./sliders.js";
// import initTabs, { selectors } from "./tabs.js";
// // import initSomething from "./tabs.js"; // можно назвать как угодно, если экспортировано через default

// initModals()
// initSliders()
// initTabs()
 
// импорт сразу всех сущностей из файла
import * as constants from './constants.js'
console.log('constants', constants)
console.log(constants.a)
console.log(constants.b)
console.log(constants.c)
constants.default() 

// constants Module {Symbol(Symbol.toStringTag): 'Module'}
// script.js:13 1
// script.js:14 2
// script.js:15 3
// constants.js:6 cat