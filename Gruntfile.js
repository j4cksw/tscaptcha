module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            source: {
                src: ['ts/src/**/*.ts'],
                dest: 'js/src',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5',
                }
            },
            test: {
                src: ['ts/test/**/*.ts'],
                dest: 'js/test',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5',
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        clean: ['js']
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['clean', 'typescript', 'karma']);
};
