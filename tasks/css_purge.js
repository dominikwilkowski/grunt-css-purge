/***************************************************************************************************************************************************************
 *
 * css purge
 *
 * A CSS tool written in Node JS as a command line app or library for the purging, burning, reducing, shortening, compressing, cleaning,
 * trimming and formatting of duplicate, extra, excess or bloated CSS, phew!
 *
 * @license     https://github.com/dominikwilkowski/grunt-css-purge/blob/master/LICENSE
 * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
 * @repository  https://github.com/dominikwilkowski/grunt-css-purge
 *
 **************************************************************************************************************************************************************/

'use strict';

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
const CSSPurge = require('css-purge');
const Chalk = require('chalk');
const Path = require('path');
const Fs = require('fs');


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Grunt plugin
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
module.exports = function( Grunt ) {

	// Check files existence
	const GetAvailableFiles = filesArray => (
		filesArray.filter( filepath => {
			if( !Grunt.file.exists( filepath ) ) {
				Grunt.log.warn(`Source file ${ chalk.cyan( filepath ) } not found`);

				return false;
			}
			else {
				return true;
			}
		})
	);

	Grunt.registerMultiTask('css_purge', 'Grunt plugin to run CSS-Purge', function() {

		const done = this.async();

		this.files.forEach( ( files ) => {
			// Get source files and destination location
			const srcFiles = GetAvailableFiles( files.src );
			const destFile = files.dest ? files.dest : this.data.dest;

			// Check source files
			if( srcFiles.length === 0 ) {
				Grunt.log.warn( `Destination (${ Chalk.cyan( destFile ) }) not written because source files were empty.` );

				return;
			}

			let CSS = '';

			// Iterate over all files
			srcFiles.forEach( ( srcFile ) => {

				// Create folder if we have to
				if( !Fs.existsSync( Path.dirname( destFile ) ) ) {
					const newFolder = Path.dirname( destFile );

					Grunt.file.mkdir( newFolder, null );
					Grunt.log.writeln( Chalk.cyan('"' + newFolder + '/" has been created' ) );
				}

				// Get all CSS together
				CSS += Grunt.file.read( srcFile );
			});

			// Try Purging
			try {

				CSSPurge.purgeCSS( CSS, this.options(), ( error, result, thing ) => {
					if( error ) {
						Grunt.log.warn( `Purging CSS failed for "${ Chalk.cyan( destFile ) }".` );
						Grunt.log.warn( error );
					}
					else {
						Grunt.file.write( destFile, result );
						Grunt.log.ok( `File${ srcFiles.length > 1 ? 's' : '' } successfully purged to "${ Chalk.green( destFile ) }"` );
					}

					done();
				});

			}
			catch( error ) {
				var errorMessage = new Error( 'css-purge failed.' );

				if( error.msg ) {
					errorMessage.message += ` ${ error.msg }.`;
				}

				errorMessage.origError = error;
				Grunt.log.warn( `Purging CSS failed for "${ Chalk.cyan( destFile ) }".` );
				Grunt.fail.warn( errorMessage );

				done();
			}
		});
	});

};
