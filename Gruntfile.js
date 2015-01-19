module.exports = function(grunt) {
    require('time-grunt')(grunt);

    packageJSON = grunt.file.readJSON('package.json');

    require('load-grunt-config')(grunt, {
         data: {
            pkg: packageJSON
         }
    });
};
