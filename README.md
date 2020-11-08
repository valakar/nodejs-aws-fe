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
[AppS3](http://vstore-app-bucket.s3-website-eu-west-1.amazonaws.com/)

[AppCloudFront](https://d1jpnfaozgam1v.cloudfront.net)
