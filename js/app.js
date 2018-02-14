'use strict';

var hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

var allStands = [];

//accessing table in the DOM
var standsTable = document.getElementById('allStands');

function Stand(name, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiePerCust = avgCookiePerCust;
  this.custEachHrArray = [];
  this.cookiesEachHrArray = [];
  this.totalCookies = 0;
  allStands.push(this);
  this.randNumCust();
  this.cookiesEachHr();
  // this.render();
};

Stand.prototype.randNumCust = function() {
  for(var i = 0; i < hour.length; i++) {
    this.custEachHrArray.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr);
  }
};

Stand.prototype.cookiesEachHr = function() {
  this.randNumCust();
  var totCookiesEachHr = 0;
  for(var i = 0; i < hour.length; i++) {
    this.cookiesEachHrArray.push(Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]));
    this.totalCookies += Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
  }
};

new Stand('1st and Pike', 23, 65, 6.3);
new Stand('SeaTac Airport', 3, 24, 1.2);
new Stand('Seattle Center', 11, 38, 3.7);
new Stand('Capitol Hill', 20, 38, 2.3);
new Stand('Alki', 2, 16, 4.6);