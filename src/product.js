var chalk = require('chalk');

function Product(name, price, runningTime, minDuration, maxDuration) {
  this.name = name;
  this.price = price;
  this.runningTime = runningTime;
  this.minDuration = minDuration;
  this.maxDuration = maxDuration;

  this.toString = function(currency, rateCurrency, runningTime, minDuration, maxDuration) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency
    + ' runningTime : ' + this.runningTime + ' minDuration : ' + this.minDuration + ' maxDuration : '+ this.maxDuration;
  }
}

function Book(name, price, isbn, minDuration, maxDuration) {
  Product.apply(this, [name, price, null,minDuration, maxDuration]);
  this.isbn = isbn;

}
Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});

function DVD(name, price, moovie, runningTime) {
  Product.apply(this, [name, price, runningTime,null,null]);
  this.moovie = moovie;

}
DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});


function VideoGame(name, price, platform, minDuration, maxDuration){
  Product.apply(this, [name, price, null,minDuration, maxDuration]);
  this.platform = platform;

}
VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});


module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};