Package.describe({
  name: 'nodexperts:meteor-cloudinary',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Cloudinary Wrapper for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nodexpertsdev/meteor-cloudinary',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'cloudinary': '1.9.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4.2');
  api.use('ecmascript');
  api.mainModule('meteor-cloudinary.js');
});
