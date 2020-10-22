## Table of contents
* [Setup](#setup)
* [Task 2](#task-2)

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## Task 2

To build and deploy application to AWS use:
```
$ npm run cloudfront:update:build:deploy
```

or without confirmation:
```
$ npm run cloudfront:update:build:deploy:nc
```

### Deployed applications
[ManualS3](http://manual-app.s3-website-eu-west-1.amazonaws.com/) - 403 Forbidden

[ManualCloudFront](https://d1q5jypx9n3jx9.cloudfront.net/)

[AutoS3](http://automative-app.s3-website-us-east-1.amazonaws.com/) - 403 Forbidden

[AutoCloudFront](https://d232a2m5r21slj.cloudfront.net/)
