## Meteor Cloudinary

A simple wrapper for Meteor of NPM Module Cloudinary, whoich is an image processing library.

If you're using > Meteor v 1.2, you can simply use this npm package in your project and you don't need to use this package. But if you are using Meteor 1.2 or below, then using npm packages is not so straight forward, that is when this package can help you.

### How to Use

Simple install it by

```
meteor add nodexperts:meteor-cloudinary
```

and import it in project using

```
import MeteorCloudinary from 'nodexperts:meteor-cloudinarye';

MeteorCloudinary.config({
  cloud_name: '******',
  api_key: '*******',
  api_secret: '********'
});

MeteorCloudinary.uploader.upload("bugs.png", function(result) {
  console.log(result)
});
```
