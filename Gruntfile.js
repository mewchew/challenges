 module.exports = function(grunt) {
     grunt.initConfig({

         less: {
            development: {
                 options: {
                     paths: ["widget"]
                 },
                 files: {"widget/style.css": "widget/style.less"}
            }
         }
     });
     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.registerTask('default', ['less']);
 };