grunt-css-purge
===============
[![Dependency Status](https://david-dm.org/dominikwilkowski/grunt-css-purge.svg)](https://david-dm.org/dominikwilkowski/grunt-css-purge)
[![devDependency Status](https://david-dm.org/dominikwilkowski/grunt-css-purge/dev-status.svg)](https://david-dm.org/dominikwilkowski/grunt-css-purge#info=devDependencies)
> Grunt plugin to run [CSS-Purge](https://github.com/rbtech/css-purge)

[![NPM](https://nodei.co/npm/grunt-css-purge.png)](https://nodei.co/npm/grunt-css-purge/)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide,
as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar
with that process, you may install this plugin with this command:

```shell
npm install grunt-css-purge --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-purge');
```

## The "css_purge" task

### Overview
In your project's Gruntfile, add a section named `css_purge` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	css_purge: {
		options: {
			"verbose": false,
			"no_duplicate_property": true
		},
		target: {
		       	files: {
				'purged.css': 'bigFile.css'
			}
		}
	}
});
```

### Options

#### options.verbose
Type: `Boolen`
Default value: `false`

Show trace of optimization

#### options.no_duplicate_property
Type: `Boolen`
Default value: `true`

Allow duplicate properties on a selector

### Usage Examples

#### Default Options

```js
css_purge: {
	target {
	       	files: {
			'purged.css': 'bigFile.css'
		}
	}
}
```

#### Custom Options

```js
css_purge: {
	options: {
		"verbose": false,
		"no_duplicate_property": true
	},
	target {
	       	files: {
			'purged.css': 'bigFile.css'
		}
	}
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code using the [Grunt](http://gruntjs.com/) task already set up.

## Release History
* 0.0.4 - Updated peerDependencies for grunt 1.0
* 0.0.3 - updated license
* 0.0.2 - refinements
* 0.0.1 - alpha test

## License
Copyright (c) 2014 Dominik Wilkowski. Licensed under the GPLv2 license.
