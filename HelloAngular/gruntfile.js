module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                //files: {
                // 'scss/css/*.css': 'scss/scss/*.scss'
                //}
                files: [
                    {
                        expand: true,
                        cwd: 'scss',
                        src: ['**/*.scss'],
                        ext: '.css',
                        dest: 'styles'
                    }
                ]
            }
        },
        clean: {
            css: ['styles']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('buildSass', ['clean:css', 'sass']);
};
