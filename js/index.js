/**
 * 
 * @param {function} howSay 
 * @param {string} whatSay 
 */
function saySomething(howSay, whatSay){
  howSay(whatSay);
}


saySomething(console.log, 'qwerty');
//console.log('qwerty');

saySomething(alert, 'alert');
saySomething(prompt, 'prompt');
saySomething(confirm, 'confirm');