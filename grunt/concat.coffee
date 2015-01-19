module.exports =
    js:
        files:
            '<%= pkg.dest %>/scripts/vendor.js': [
                '<%= pkg.bowerDependencies %>/angular/angular.js'
            ]

    css:
        files:
            '<%= pkg.dest %>/styles/vendor.css': [
                '<%= pkg.bowerDependencies %>/bootstrap/dist/css/bootstrap.min.css'
            ]

