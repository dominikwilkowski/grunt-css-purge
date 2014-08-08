/*
 * grunt-css-purge
 * https://github.com/dominikwilkowski/grunt-css-purge
 *
 * Copyright (c) 2014 Dominik Wilkowski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {
	// Dependencies
	var CSSPurge = require( './lib/css-purge.js' ),
			chalk    = require( 'chalk' ),
			fs       = require('fs'),
			path     = require('path');

	grunt.registerMultiTask('css_purge', 'Grunt plugin to run CSS-Purge', function() {

		var options = this.options({
			'verbose': false,
			'no_duplicate_property': true
		});


		this.files.forEach(function( files ) {
			var src = files.src.filter(function( filepath ) {

				// Warn on and remove invalid source files (if nonull was set).
				if( !grunt.file.exists( filepath ) ) {
					grunt.log.warn( 'Source file "' + filepath + '" not found.' );
					return false;
				}
				else {
					return true;
				}
			});

			if( src.length === 0 ) {
				grunt.log.warn( 'Destination (' + files.dest + ') not written because src files were empty.' );
				return;
			}

			// Iterate over all files
			src.forEach(function(sourceFile) {

				try {

					// Create folder if we have to
					if(!fs.existsSync(files.dest)) {
						var newFolder = path.dirname(files.dest);

						grunt.file.mkdir(newFolder, null);
						grunt.log.writeln( chalk.cyan('"' + newFolder + '/" has been created' ) );
					}

					// Purge that CSS!
					var csspurge = new CSSPurge(
						sourceFile,
						files.dest,
						{
							"verbose": options.verbose,
							"no_duplicate_property": options.no_duplicate_property
						}
					);

				}
				catch( e ) {
					var err = new Error( 'css-purge failed.' );
					if( e.msg ) {
						err.message += ', ' + e.msg + '.';
					}
					err.origError = e;
					grunt.log.warn( 'Purging source "' + sourceFile + '" failed.' );
					grunt.fail.warn( err );
				}

			});
		});


	});

};