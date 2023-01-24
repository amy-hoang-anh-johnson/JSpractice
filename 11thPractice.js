let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.pop());
console.log(secretMessage.length);
console.log(secretMessage.push('to','Program'));

secretMessage[7] = 'right';
console.log(secretMessage[7]);
console.log(secretMessage.shift());

console.log(secretMessage.unshift('Programming'));
console.log(secretMessage.splice(6,5,'know'));
console.log(secretMessage.join(' '));

console.log(secretMessage.length);
