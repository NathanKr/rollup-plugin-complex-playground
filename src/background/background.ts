import { sum } from "./utils";

console.log('background script is running ....');

console.log(sum(1,2)); 

/* 
    this is commented out because this is not browser extension 
    thus i just want to see if declaration is ok and it is.
    simply undo the remark and invoke : npm run build 
    and  you will see that it is build ok
*/    
// chrome.runtime; 

