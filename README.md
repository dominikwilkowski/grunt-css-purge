<img alt="Grunt CSS Purge" src="https://raw.githubusercontent.com/rbtech/css-purge/master/assets/images/grunt-css-purge.png" width="133px">


Grunt CSS-PURGE
===============

Purges duplicate CSS rules and more. Based on [css-purge](https://www.npmjs.org/package/css-purge).


## You have an issue?

This is a simple [grunt](http://gruntjs.com/) plugin, which means it’s a thin wrapper around `css-purge`. If you are having CSS issues, please
contact [css-purge](https://github.com/rbtech/css-purge/issues). Please only create a new issue if it looks like you’re having a problem with the grunt plugin.


## Install

```
npm install grunt-css-purge --save-dev
```


## Options

Visit the [CSS-PURGE website](http://rbtech.github.io/css-purge)


## Getting Started

This plugin requires Grunt.

If you haven’t used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide,
as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you’re familiar
with that process, you may install this plugin.
Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-purge');
```


## Example use cases

The most basic `Gruntfile.js` setup:

```js
'use strict';

module.exports = function( grunt ) {
	grunt.loadNpmTasks('grunt-css-purge');

	grunt.initConfig({
		css_purge: {
			site: {
				options: {},
				src: 'site.css',
				dest: 'site.min.css',
			},
		},
	});

	grunt.registerTask('default', ['css_purge']);
};
```

For more infos about the options please look at the [CSS-Purge website](http://rbtech.github.io/css-purge/).

See below a couple different ways you can use the grunt task with various different files.

A single file:

```js
default_options: {
	options: {},
	src: 'site.css',
	dest: 'site.min.css',
},
```

Multiple files:

```js
multiple_files: {
	options: {},
	src: [
		'site1.css',
		'site2.css',
	],
	dest: 'site.min.css',
},
```

Multiple files:

```js
multiple_files2: {
	options: {},
	files: {
		'site.min.css': ['site1.css', 'site2.css'],
	},
},
```

Multiple files with a wildcard:

```js
multiple_files3: {
	options: {},
	files: [{
		src: ['css/**/*.css'],
		dest: 'site.min.css',
	}],
},
```

Purge a folder as is into multiple files:

```js
multiple_files4: {
	options: {},
	files: [{
		expand: true,
		cwd: "css/", // all *.css files inside the css/ folder will be purged
		src: "*.css",
		dest: "output/", //and placed into the output folder
		ext: ".min.css",
	}],
},
```

Purge a folder as is into multiple files while keeping sub-folder intact:

```js
multiple_files5: {
	options: {},
	files: [{
		expand: true,
		cwd: "css/",
		src: "**/*.css", // all *.css files in the css/ and it's sub-folders will be purged
		dest: "output/", //and placed into the output folder
		ext: ".min.css",
	}],
},
```

Custom options:

```js
custom_options: {
	options: {
		trim_comments: false,
		generate_report: true,
	},
	src: 'site.css',
	dest: 'site.min.css',
},
```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.


## Release History

* 1.1.0 - Mad task async
* 1.0.2 - Fixed to major `css-purge` version
* 1.0.1 - Reduced dependencies
* 1.0.0 - Updated to CSS-Purge 3.0.0
* 0.0.4 - Updated peerDependencies for grunt 1.0
* 0.0.3 - updated license
* 0.0.2 - refinements
* 0.0.1 - alpha test


## License

Copyright (c) 2018 Dominik Wilkowski. Licensed under the GPLv2 license.
