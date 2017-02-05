const https = require('https');


let id = 'aWmZAPZ';
https.get('https://4hh6cgdgxc.execute-api.eu-central-1.amazonaws.com/dev/' + id, (res) => {

  let data = '';

  res.on('data', (d) => {
    data += d;
  });
  res.on('end', () => {

    let obj = JSON.parse(data);
    let post = JSON.parse(obj.body).post;

    // TODO: Do something with your post
    console.log(post);

  });

}).on('error', (e) => {
  console.error(e);
});
