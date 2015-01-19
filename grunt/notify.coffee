# notifications for grunt only
module.exports =
    cssmin:
        options:
            message: 'CSS has been minified'

    coffee:
        options:
            message: 'Coffeescript has been compiled and minified'

    sass:
        options:
            message: 'SCSS has been compiled'

    browserify:
        options:
            message: 'Browserify has finished'

    ngtemplates:
        options:
            message: 'Templates compiled'
