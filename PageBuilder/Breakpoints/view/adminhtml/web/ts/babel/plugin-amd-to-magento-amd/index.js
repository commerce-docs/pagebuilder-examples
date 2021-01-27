/* jscs:disable */
/* eslint-disable */

/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

"use strict";

exports.__esModule = true;
exports.default = _default;

var _astUtils = require("./ast-utils");

var t = _interopRequireWildcard(require("@babel/types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var replaceExportAssignment = function replaceExportAssignment(path, state) {
    var property = path.get('left.property');
    var expression = path.get('right');
    path.remove();

    if ((0, _astUtils.isVoidExpression)(expression)) {
        return;
    }

    if (property.isIdentifier({
        name: 'default'
    })) {
        state.defaultExport = expression.node;
        return;
    }

    state.exports.push(t.objectProperty(property.node, expression.node));
};

var memberExpressionVisitor = {
    MemberExpression: function MemberExpression(path, state) {
        var matchedDependencies = state.dependencies.filter(function (item) {
            return path.get('object').isIdentifier({
                name: item.name
            });
        });
        var isDefaultDependency = matchedDependencies.length === 1 && path.get('property').isIdentifier({
            name: 'default'
        });

        if (isDefaultDependency) {
            path.replaceWith(matchedDependencies[0]);
        }
    }
};
var functionBodyVisitor = {
    ExpressionStatement: function ExpressionStatement(path, state) {
        if ((0, _astUtils.isEsModulePropertyDefinition)(path, state.scope)) {
            path.remove();
        }

        if ((0, _astUtils.isObjectAssignment)(path, state.scope)) {
            replaceExportAssignment(path.get('expression'), state);
        }

        if ((0, _astUtils.isInteropRequireCall)(path)) {
            path.remove();
        }
    },
    Function: function Function(path, state) {
        if ((0, _astUtils.isInteropRequireDefinition)(path)) {
            path.remove();
        }

        path.traverse(memberExpressionVisitor, state);
    },
    ClassMethod: function ClassMethod(path, state) {
        path.traverse(memberExpressionVisitor, state);
    },
    DirectiveLiteral: function DirectiveLiteral(path) {
        if (path.node.value === 'use strict') {
            path.parentPath.remove();
        }
    },
    MemberExpression: memberExpressionVisitor.MemberExpression
};

var processAmdDefinition = function processAmdDefinition(path) {
    var _extractDependencyAnd = (0, _astUtils.extractDependencyAndFactory)(path),
        factory = _extractDependencyAnd.factory;

    var dependencyMap = (0, _astUtils.extractDependencyMap)(path);

    if (dependencyMap.exports) {
        (0, _astUtils.removeExportsDependency)(path);
        var state = {
            scope: dependencyMap.exports,
            dependencies: Object.values(dependencyMap),
            exports: []
        };
        factory.traverse(functionBodyVisitor, state);
        var returnStatement = t.objectExpression(state.exports);

        if (state.defaultExport) {
            returnStatement = state.defaultExport;

            if (state.exports.length > 0) {
                returnStatement = t.callExpression(t.memberExpression(t.identifier('Object'), t.identifier('assign')), [state.defaultExport, t.objectExpression(state.exports)]);
            }
        }

        factory.get('body').pushContainer('body', t.returnStatement(returnStatement));
    }
};

var programVisitor = {
    ExpressionStatement: function ExpressionStatement(path) {
        var amdModule = (0, _astUtils.findAmdModule)(path);

        if (amdModule) {
            processAmdDefinition(amdModule);
        }
    }
};

function _default() {
    return {
        visitor: {
            Program: {
                exit: function exit(path) {
                    path.traverse(programVisitor);
                }
            }
        }
    };
}