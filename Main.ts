import {Student} from "./student";
import {Teacher} from "./teacher";
import {Data} from "./data";

let data = new Data();
let s1 = new Student();
data.registerObserver(s1)
data.measureChange('SWE-4134', '10.07.2021 23:56', 'Observer Pattern', 'Nazmul haque')

let t1= new Teacher();
data.registerObserver(t1) 
data.measureChange('SWE-4134','10.07.2021 23:45', 'Strategy Pattern', 'Nazmul haque')