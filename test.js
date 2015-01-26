'use strict';

var chai   = require('chai');
var expect = chai.expect;
var isString = require('lodash.isstring');

var mockObject = {
  a: 'c',
  b: 'd'
};

describe('object to string', function() {
  var parseObject;
  before(function() {
    parseObject = require(__dirname + '/index.js');
  });

  it('should return string', function() {
    var result = parseObject.parsify(mockObject, {
      attrSeparator: '\n'
    });
    expect(isString(result)).to.be.true;
  });

  it('should return error', function() {
    expect(function() {
      return parseObject.parsify('');
    }).to.throw(/Object is required/);
  });

  it('should remove last `attrSeparator`', function() {
    var attrSeparator = ',';
    var result = parseObject.parsify(mockObject, {
      attrSeparator: attrSeparator
    });

    var lastChar = result[result.length - 1];

    expect(lastChar).to.not.equal(attrSeparator);
  });
});