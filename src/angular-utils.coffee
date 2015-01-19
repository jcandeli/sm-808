module.exports =
    addDirective: (name, directiveFactory) ->
        angular.module('directives').directive(name, directiveFactory)

    addController: (name, dependencies) ->
        angular.module('controllers').controller(name, dependencies)

    addFactory: (name, factoryFunction) ->
        angular.module('factories').factory(name, factoryFunction)

    addService: (name, serviceFunction) ->
        angular.module('services').factory(name, serviceFunction)

    addFilter: (name, filterFunction) ->
        angular.module('filters').filter(name, filterFunction)

    addProvider: (name, providerFunction) ->
        angular.module('providers').provider(name, providerFunction)
        