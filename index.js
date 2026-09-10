var fs = await import('node:fs');
console.log('Ooops!');
fs.writeFile('oops.txt', 'you ran something...');
