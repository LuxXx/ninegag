const https = require('https');


let id = 'aWmZAPZ';
https.get('https://ninegag.tdbr.de/' + id, (res) => {

  let data = '';

  res.on('data', (d) => {
    data += d;
  });
  res.on('end', () => {

    let obj = JSON.parse(data);

    // TODO: Do something with your post
    console.log(obj.body);

  });

}).on('error', (e) => {
  console.error(e);
});
