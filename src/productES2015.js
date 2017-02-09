var chalk = require('chalk');

class Product {

  constructor(name,price){
    this.name = name;
    this.price = price;
  }

  toString(currency, rateCurrency){
    var currency = currency || "$";
    var rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + " cost " + chalk.red(this.price * rateCurrency) + currency;
  }
}

class Book extends class Product {


  constructor(name,price,isbn){
    this.name = name;
    this.price = price;
    this.isbn = isbn;
  }

}

class DVD extends class Product{


  constructor(name,price,moovie){
    this.name = name;
    this.price = price;
    this.moovie = moovie;
  }
}

class VideoGame extends class Product{


  constructor(name,price,platform){
    this.name = name;
    this.price = price;
    this.platform = platform;
  }

}


var Product = new Product("bonjour", 80.20);

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
}