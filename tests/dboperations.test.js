const dbOps = require('../dboperations');

test('Should return some data',function() {
  return dbOps.getHelloWorld().then( data => {
    expect(data).toBe('Hello World')
  });
});