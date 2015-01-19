module.exports =
    browserify:
        files: ['<%= pkg.src %>/**/*.coffee']
        tasks: ['browserify', 'notify:browserify']

    templates:
        files: ['<%= pkg.src %>/**/*.html']
        tasks: ['ngtemplates', 'notify:ngtemplates']

    scss:
        files: ['<%= pkg.src %>/**/*.scss']
        tasks: ['sass:dist', 'notify:dist']

    options:
        livereload: true