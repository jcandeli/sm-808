module.exports =
    bundle:
        files:
            '<%= pkg.dest %>/scripts/bundle.js': ['<%= pkg.src %>/**/*.coffee']
        options:
            transform: ['coffeeify']
            browserifyOptions :
                debug : true
                basedir: '<%= pkg.src %>'
                extensions: ['.coffee']
