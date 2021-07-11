import {Student} from "./student";
import {Teacher} from "./teacher";
import {Data} from "./data";

let data = new Data();
let s1 = new Student();
data.registerObserver(s1)
data.measureChange('SWE-4501', '10.07.2021 23:56', 'Observer Pattern', 'Nazmul haque')

let t1= new Teacher();
data.registerObserver(t1) 
data.measureChange('SWE-4501','10.07.2021 23:45', 'Strategy Pattern', 'Nazmul haque')

let t2= new Teacher();
data.removeObserver(s1)
data.registerObserver(t2) 
data.measureChange('SWE-4502','11.07.2021 15:45', 'Strategy pattern Lab', 'Mamun Rashid')