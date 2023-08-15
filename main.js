const fs = require("fs");
const { parse } = require("csv-parse");
const argv = process.argv[2];

const data = [];

fs.createReadStream(argv)
  .pipe(parse({
    delimiter: ",",
    columns: true,
    ltrim: true,
  }))
  .on("data", function (row) {
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("finished");
    const _json = eval(data);
    const features = [];

    for(var i=0; i < _json.length; i++){
      const title = _json[i].zip.length < 5 ? '0' + _json[i].zip : _json[i].zip;
      const type = _json[i].type;
      const lat = _json[i].latitude;
      const lng = _json[i].longitude;

      const properties = {
        title: title,
        description: type
      };

      const geometry = {
        type: "Point", 
        coordinates: [lng, lat],
      };

      const feature = {
        type: "Feature",
        properties,
        geometry
      }
      features.push(feature);
      console.log(features)
    }
    const output = {
      features
    }
    fs.writeFileSync('./features.json', JSON.stringify(output, null, 2) , 'utf-8');


  });
