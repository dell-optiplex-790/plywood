var fs = await import('node:fs/promises');
console.log('Ooops!');
await fs.writeFile('oops.txt', 'you ran something...');
