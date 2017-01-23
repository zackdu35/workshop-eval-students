var http = require('http');

function getExchangeRateEUR(callback) {
  return http.get({
    host: 'api.fixer.io',
    path: '/latest?base=USD'
  }, function(response) {
    // Continuously update stream with data
    var body = '';
    response.on('data', function(d) {
        body += d;
    });
    response.on('end', function() {
      // Data reception is done, do whatever with it!
      var parsed = JSON.parse(body);
      callback(parsed.rates.EUR);
    });
  });
}

module.exports = {
  service: {
    getExchangeRateEUR: getExchangeRateEUR
  }
};