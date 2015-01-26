'use strict';

var defaults = require('lodash.defaults');
var isObject = require('lodash.isobject');
var debug = require('debug')('index');

module.exports = {
  parsify: function(object, options) {
    if (!isObject(object)) {
      throw new Error('Object is required');
    }

    var result = [];
    var opts = defaults(options || {}, {
      keySeparator: ':',
      attrSeparator: ','
    });

    debug(opts);

    for (var key in object) {
      var line = key.concat(opts.keySeparator).concat(object[key]);
      result.push(line);
    }

    debug(result);

    return result.join(opts.attrSeparator);
  }
};