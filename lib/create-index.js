//Self executing function to allow being called directly through command line
(function(){
  var fs = require('fs');
  var path = require('path');

  var renderIndex = require('../lib/render-index');
  var url = require('url');
  var stats = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'stats.json')));

  var indexMarkup = renderIndex({dev: false, hash: stats.hash });
  var htmlLocation = 'build/index.html';
  var htmlPath = path.join(__dirname, '..', htmlLocation);
  function createIndexFile() {
    if(!fs.existsSync(htmlPath)){
      fs.writeFile(htmlPath, "", function(err) {
        if(err) {
          return console.log(err);
        }
        console.log('Stats.json created.');
      });
    }
  }
  function buildIndexFile() {
    if(!fs.existsSync(htmlPath)){
      console.log('Current build data does not exist. Run npm run build');
      createIndexFile();
    }
    var stats = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'stats.json')));
    fs.writeFile(htmlPath, indexMarkup, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log('index.html file built.');
    });
  }
  module.exports = buildIndexFile;

  //Check to see if being required by another module or not
  if(!module.parent){
    buildIndexFile();
  }
})();
