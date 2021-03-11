/* jscs:disable */
/* eslint-disable */

/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

"use strict";

exports.__esModule = true;
exports.extractDependencyAndFactory = extractDependencyAndFactory;
exports.findAmdModule = findAmdModule;
exports.extractDependencyMap = extractDependencyMap;
exports.removeExportsDependency = removeExportsDependency;
exports.isEsModulePropertyDefinition = isEsModulePropertyDefinition;
exports.isObjectAssignment = isObjectAssignment;
exports.isVoidExpression = isVoidExpression;
exports.isInteropRequireCall = isInteropRequireCall;
exports.isInteropRequireDefinition = isInteropRequireDefinition;

var t = _interopRequireWildcard(require("@babel/types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INTEROP_FUNCTION_NAME = '_interopRequire';

var findExpression = function findExpression(path) {
    if (!t.isExpressionStatement(path.node)) {
        return false;
    }

    return path.get('expression');
};

var isObjectProperty = function isObjectProperty(path, objectName, propertyName) {
    return t.isMemberExpression(path) && path.get('object').isIdentifier(t.identifier(objectName)) && path.get('property').isIdentifier(t.identifier(propertyName));
};

function extractDependencyAndFactory(path) {
    var args = path.node.arguments;
    var dependencies = path.get("arguments." + (args.length - 2));
    var factory = path.get("arguments." + (args.length - 1));
    return {
        dependencies: dependencies,
        factory: factory
    };
}

function findAmdModule(path) {
    if (!path.parentPath.isProgram()) {
        return false;
    }

    var expression = findExpression(path);

    if (!expression || !t.isCallExpression(expression) || !t.isIdentifier(expression.node.callee, {
        name: 'define'
    })) {
        return false;
    }

    var _extractDependencyAnd = extractDependencyAndFactory(expression),
        dependencies = _extractDependencyAnd.dependencies,
        factory = _extractDependencyAnd.factory;

    if (dependencies && factory) {
        return expression;
    }

    return false;
}

function extractDependencyMap(path) {
    var dependencyMap = {};

    var _extractDependencyAnd2 = extractDependencyAndFactory(path),
        dependencies = _extractDependencyAnd2.dependencies,
        factory = _extractDependencyAnd2.factory;

    var dependencyList = dependencies.node.elements;
    var factoryParams = factory.node.params;
    dependencyList.forEach(function (dependency, index) {
        if (factoryParams[index]) {
            dependencyMap[dependency.value] = factoryParams[index];
        }
    });
    return dependencyMap;
}

function removeExportsDependency(path) {
    var _extractDependencyAnd3 = extractDependencyAndFactory(path),
        dependencies = _extractDependencyAnd3.dependencies,
        factory = _extractDependencyAnd3.factory;

    var dependencyMap = extractDependencyMap(path);

    if (!dependencyMap.exports) {
        return;
    }

    dependencies.node.elements = dependencies.node.elements.filter(function (item) {
        return !t.isStringLiteral(item, {
            value: 'exports'
        });
    });
    factory.node.params = factory.node.params.filter(function (item) {
        return !t.isIdentifier(item, dependencyMap.exports);
    });
}

function isEsModulePropertyDefinition(path, scope) {
    var callExpression = findExpression(path);
    var callee = callExpression.get('callee');
    var callArguments = callExpression.node.arguments;
    var isObjectDefinePropertyCall = isObjectProperty(callee, 'Object', 'defineProperty');

    if (isObjectDefinePropertyCall) {
        var isEsModulePropertyInArguments = t.isStringLiteral(callArguments[1], {
            value: '__esModule'
        });
        var isInScope = t.isIdentifier(callArguments[0], scope);
        return isEsModulePropertyInArguments && isInScope;
    }

    return false;
}

function isObjectAssignment(path, objectId) {
    var expression = t.isAssignmentExpression(path) ? path : findExpression(path);
    var isMemberAssignment = t.isAssignmentExpression(expression) && t.isMemberExpression(expression.get('left'));

    if (isMemberAssignment) {
        return t.isNodesEquivalent(expression.get('left.object').node, objectId);
    }

    return false;
}

function isVoidExpression(path) {
    return t.isUnaryExpression(path) && path.node.operator === 'void';
}

function isInteropRequireCall(path) {
    var expression = findExpression(path);
    var isAssignmentCall = t.isAssignmentExpression(expression) && t.isCallExpression(expression.get('right'));

    if (isAssignmentCall) {
        var callee = expression.get('right.callee');
        return callee.isIdentifier() && callee.node.name.indexOf(INTEROP_FUNCTION_NAME) === 0;
    }

    return false;
}

function isInteropRequireDefinition(path) {
    if (t.isFunction(path) && path.node.id) {
        return path.node.id.name.indexOf(INTEROP_FUNCTION_NAME) === 0;
    }

    return false;
}