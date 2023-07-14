let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//console.log(secretMessage.length);
secretMessage.pop();
//console.log(secretMessage.length);

secretMessage.push('to', 'Program');
//console.log(secretMessage.length);
const find = replace => replace === 'easily';

const replace = secretMessage.findIndex(find);
//console.log(replace);
//console.log(secretMessage);
secretMessage.splice(replace, 1, 'right');
//console.log(secretMessage);
secretMessage.shift();
//console.log(secretMessage);
secretMessage.unshift('Programming ');
//console.log(secretMessage);
const delStart= start => start === 'get'; 
const start = secretMessage.findIndex(delStart);
const delEnd= end => end === 'time,'; 
const end = secretMessage.findIndex(delEnd) - start + 1;
//console.log(start);
//console.log(end);
secretMessage.splice(start, end, 'know,');
console.log(secretMessage.join(' '));