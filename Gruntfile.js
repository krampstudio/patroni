/**
 * Default Grunt configuration.
 * Tasks are conbfigured into their respective files :
 *  - grunt/sass.js   : SCSS compilcation
 *  - grunt/test.js   : compile and run tests
 *  - grunt/bundle.js : compile and optimize client side js
 *  - grunt/dev.js    : development modes
 */
module.exports = function(grunt) {

    grunt.initConfig({

    //tasks default configuration/options
        browserify: {
            options: {
                transform: [
                    ['babelify', {
                        'presets': ['es2015']
                    }]
                ],
                browserifyOptions: {
                    debug: true
                }
            }
        },
        connect: {
            options: {
                hostname: '0.0.0.0',
                port: 4321,
                base: 'public',
                livereload: false
            }
        },
        clean: {
            options: {
                force : true
            }
        }
    });

    //load npm tasks
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    //load configurations into the grunt folder
    grunt.loadTasks('.grunt/');

    //the default task
    grunt.registerTask('build',   'Compile and test, before releasing', ['bundle', 'sass:compile', 'test']);
    grunt.registerTask('default', 'Compile and test, before releasing', ['build']);
};

