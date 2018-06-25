/*
 * grunt-css-purge
 * https://github.com/dominikwilkowski/grunt-css-purge
 *
 * Copyright (c) 2018 Dominik Wilkowski
 * Licensed under the GNU GPL2 license.
 */

'use strict';

module.exports = function( grunt ) {
	require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig({
		clean: {
			tests: ['test/temp'],
		},

		css_purge: {

			// Default options in src / dest notation
			default_options: {
				options: {},
				src: 'test/css/test.css',
				dest: 'test/temp/default_options.css',
			},

			// Default options with multiple files in src / dest notation
			multiple_files: {
				options: {},
				src: [
					'test/css/test.css',
					'test/css/subfolder/test2.css',
				],
				dest: 'test/temp/multiple_files.css',
			},

			// Default options with multiple files in files notation
			multiple_files2: {
				options: {},
				files: {
					'test/temp/multiple_files2.css': ['test/css/test.css', 'test/css/subfolder/test2.css'],
				},
			},

			// Default options with multiple files with wildcard in files notation
			multiple_files3: {
				options: {},
				files: [{
					src: ['test/css/**/*.css'],
					dest: 'test/temp/multiple_files3.css',
				}],
			},

			// Default options with multiple files converting to multiple files
			multiple_files4: {
				options: {},
				files: [{
					expand: true,
					cwd: "test/css/",
					src: "*.css",
					dest: "test/temp/",
					ext: ".min.css",
				}],
			},

			// Default options with multiple files converting to multiple files in wildcard folder
			multiple_files5: {
				options: {},
				files: [{
					expand: true,
					cwd: "test/css/",
					src: "**/*.css",
					dest: "test/temp/",
					ext: ".min.css",
				}],
			},

			// Custom options
			custom_options: {
				options: {
					trim_comments: false,
					shorten: false,
				},
				src: 'test/css/test.css',
				dest: 'test/temp/default_options.css',
			},
		},

	});

	grunt.loadTasks('tasks');

	grunt.registerTask('test', ['clean', 'css_purge']);

	grunt.registerTask('default', ['test']);

};
