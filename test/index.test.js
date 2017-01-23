var expect = require('chai').expect;

var hello = require ('../index').hello;

describe('Hello Word', function() {

  it('hello function should return hello', function() {
    expect(hello()).to.be.equal('Hello World !');
  });

});
