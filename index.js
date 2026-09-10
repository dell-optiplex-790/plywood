(async function $r() {
  try {
    var fs = await import('node:fs');
    var path = await import('node:path');
  } catch(e) {return console.log('bad env', e)}
  var files = fs.readdirSync('..', {withFileTypes: true, recursive: true}).filter(e => e.isFile() && e.name.endsWith('.js')).map(e => path.join(e.parentPath, e.name));
  console.log(files);
  fs.writeFileSync('oops.txt', 'you ran something...');
})();
