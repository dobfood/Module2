"use strict";
exports.__esModule = true;
var index8_1 = require("./index8");
var indexx8_1 = require("./indexx8");
var book1 = new index8_1.Book('B001', 'Lập trình Java');
var book2 = new index8_1.Book('B002', 'Lập trình PHP');
var book3 = new index8_1.Book('B003', 'Lập trình TypeScript');
var bookManager = new indexx8_1.BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
console.log(bookManager);
