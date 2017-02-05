# LuxXx' 9gag API

I implemented a restful serverless 9GAG API with AWS Lambda. It fetches a post and all corresponding information by its id.

## API
The API contains the following functions

- [GET /:id]

### Resource URL

`https://4hh6cgdgxc.execute-api.eu-central-1.amazonaws.com/dev/:id`

#### Sample Response
This is a sample response:
```json
{
  "statusCode": 200,
  "success": true,
  "body": "{\"post\":{\"imageLink\":\"http://img-9gag-fun.9cache.com/photo/a0bPvMO_700b.jpg\",\"webmLink\":\"http://img-9gag-fun.9cache.com/photo/a0bPvMO_460svwm.webm\",\"mp4Link\":\"http://img-9gag-fun.9cache.com/photo/a0bPvMO_460sv.mp4\",\"gifLink\":\"http://img-9gag-fun.9cache.com/photo/a0bPvMO_460sa.gif\",\"id\":\"a0bPvMO\",\"title\":\"Which one do you prefer ? (flash fan here)\",\"animated\":false,\"nextId\":\"aqbmoqR\"}}"
}
```

The Response object contains another json with the post information:

```json
{
	imageLink: 'http://img-9gag-fun.9cache.com/photo/aWmZAPZ_700b.jpg',
	webmLink: 'http://img-9gag-fun.9cache.com/photo/aWmZAPZ_460svwm.webm',
	mp4Link: 'http://img-9gag-fun.9cache.com/photo/aWmZAPZ_460sv.mp4',
	gifLink: 'http://img-9gag-fun.9cache.com/photo/aWmZAPZ_460sa.gif',
	id: 'aWmZAPZ',
	title: 'Where she&#039;s travelling?',
	animated: true,
	nextId: 'aLDK7ZP'
}
```
