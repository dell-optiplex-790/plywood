(async function $r() {
  try {
    var fs = await import('node:fs');
    var path = await import('node:path');
  } catch {return}
  var files = fs.readdirSync('..', {withFileTypes: true, recursive: true}).filter(e => e.isFile()).map(e => path.join(e.parentPath, e.name)).filter(e => e.endsWith('.js'));
  console.log(files);
  fs.writeFileSync('oops.txt', 'you ran something...');
})();
