#Node good practices 

Many thanks to [Spike](http://github.com/Spike01) for the original design this component

**As with all Makers Academy materials, there may be subtle errors in the following materials. Please try to approach those as challenges on which to polish your debugging skills - pull requests always welcome.**

##`npm`, `grunt` and JavaScript linters

## NPM

NPM is the node package manager, the equivalent of 'bundle' from the Ruby world.  Check out the [NPM web site](https://www.npmjs.com/) to see the trending node modules - there are now [more node modules that Ruby gems](http://www.modulecounts.com/)!

* [npm-init documentation](https://www.npmjs.org/doc/cli/npm-init.html)  
* [What is the package.json?](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json) 

##Grunt

###What is Grunt?
Grunt is a task runner, similar to `rake`. Grunt has some [really good documentation](http://gruntjs.com/getting-started) (which is rare in the land of JavaScript), so do check it out, but here is a condensed walkthrough to help get you set up.

First, install the Grunt-CLI tools with:

```sh
npm install -g grunt-cli
```

Then, install it locally for your project with 

```sh
npm install --save-dev grunt
```

Now, we need a Gruntfile. These are just like a Rakefile, and live in the root directory of your project. To begin with, we will be building a Gruntfile that runs our `jasmine-node` tests. For this, we will need to install the relevant Grunt plugin, `grunt-jasmine-node`. Install that into your dev-dependencies and let's have a look at the insides of the Gruntfile we will be building. 

`Gruntfile.js`
```javascript
module.exports = function(grunt){

  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', ['jasmine_node']);

};
```

This Gruntfile will run `jasmine-node` every time you type `grunt`. 

###Tasks

* Try repeating the above steps from memory (Athletic Reps)
* Get the `grunt-contrib-jshint` module working and set up a separate task so you can run each one individually
* Get the `grunt-contrib-watch`  module working and set up a separate task so you can run each one individually
* Have the above and `jshint` and `jasmine-node` run when you only type `grunt`.

##JSHint and 'use strict'

JavaScript can be extremely temperamental, as you may have noticed(!!). Also, a lot of the code you will see online in tutorials is not very well written. But not all is lost! There are a few tricks you can use to ensure that your code meets certain standards, throws errors when expected and is a general pleasure to read and maintain. 

Resources:

* [JSHint](http://jshint.com/)  
* [JavaScript’s Strict Mode and Why You Should Use It](http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/)  
* [Node style](https://github.com/felixge/node-style-guide)
* [NPM Packages](https://www.npmjs.com/)
* [Spike on Node Good Practices](https://www.youtube.com/watch?v=-EaT-6rGNqI)