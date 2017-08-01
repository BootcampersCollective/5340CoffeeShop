module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        clean: [
            'public/images/*',
            'public/css/*',
            'public/js/*',
            'public/index.html'
        ],
        concat: {
            vendor:{
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.js',
                    'node_modules/angular-ui-router/release/stateEvents.js',
                    'node_modules/angular-ui-router/release/resolveService.js',
                    'node_modules/angular-filter/dist/angular-filter.js'
                ],
                dest: 'public/js/vendor.js',
                nonull: true
            },
            angular:{
                options: {
                    sourceMap: true
                },
                src: [
                    'client/app/**/*.module.js',
                    'client/app/**/*.js'
                ],
                dest: 'public/js/bundle.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'client/assets',
                        src: ['index.html'],
                        dest: 'public',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'client/assets/Images/',
                        src: ['**'],
                        dest: 'public/images'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/bootstrap/dist/css/bootstrap.css'
                        ],
                        dest: 'public/css'
                    }
                ]
            }
        },
        sass: {
            main: {
                options: {
                    sourcemap: 'inline'
                },
                files: {
                    'public/css/main.css': 'client/sass/main.scss'
                }
            }
        },
        watch : {
            src: {
                files: ['client/app/**/*.js', 'client/sass/**/*.scss', 'client/assets/index.html', 'GruntFile.js'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        'clean',
        'copy',
        'concat:vendor',
        'concat:angular',
        'sass'
    ]);
};
