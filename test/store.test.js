var expect = require('chai').expect;

var store = require ('../src/store').store;

describe('Store', function() {

  it('with toString() should return a string', function() {
    expect(store.toString()).to.be.a('string');
  });

  it('should return all these products', function() {
    expect(store.products).to.have.lengthOf(store.products.length);
  });

  it('with belowCost and belowDuration criteria should return right products', function() {
    expect(store.findProducts({belowCost: 20, belowDuration:150})).to.have.lengthOf(9);
  });

  it('with none belowCost and none belowDuration criteria should return right products', function() {
    expect(store.findProducts({belowCost: 0, belowDuration: 0})).to.have.lengthOf(0);
  });

  it('with asket should return right price', function() {
    expect(store.calculateTotalprice([
      store.products[3],
      store.products[5],
      store.products[6],
      store.products[10]])).to.be.equal(99.22);
  });

});
