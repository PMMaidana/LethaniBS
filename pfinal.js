class LibrosDnd{
    constructor (name, releaseDate, price, imgbook, id) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.price = price;
    this.imgbook = imgbook;
    this.id = id
    }
}

bookDmg = new LibrosDnd ("Dungeon Master's Guide", '09/12/2014', 49.95, "https://i.pinimg.com/474x/4d/5c/00/4d5c001badae042be36879e70efa346e.jpg", "dmgbook")
bookPh = new LibrosDnd ("Player's Handbook", '19/08/2014', 49.95, "https://images-na.ssl-images-amazon.com/images/I/51b1qXcbM+L._SX380_BO1,204,203,200_.jpg", "phbook")
bookMm = new LibrosDnd ("Monster Manual", '30/09/2014', 49.95, "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7869/9780786965618.jpg", "mmbook")

var currentStock = [bookDmg, bookPh, bookMm];


