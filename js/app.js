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
  this.render();
};

Stand.prototype.randNumCust = function() {
  for(var i = 0; i < hour.length; i++) {
    this.custEachHrArray.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr);
  }
};//check with allStands[0].custEachArray

Stand.prototype.cookiesEachHr = function() {
  this.randNumCust();
  for(var i = 0; i < hour.length; i++) {
    this.cookiesEachHrArray.push(Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]));
    this.totalCookies += Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
  }
};

Stand.prototype.render = function() {
  var trEl = document.createElement('tr'); //create tr

  var tdEl = document.createElement('td'); //create td
  tdEl.textContent = this.name; //td content for name of stand
  trEl.appendChild(tdEl);//append the td

  for(var i = 0; i < hour.length; i++) {
    tdEl = document.createElement('td'); //create td
    tdEl.textContent = this.cookiesEachHrArray[i];
    trEl.appendChild(tdEl);
  }
  standsTable.appendChild(trEl);
};


function makeHeaderRow() {//table header
  var trEl = document.createElement('tr'); // create tr
  var thEl = document.createElement('th'); //create th
  thEl.textContent = 'Name'; //give th content, stand name
  trEl.appendChild(thEl);
  
  for(var i = 0; i < hour.length; i++) {
    thEl = document.createElement('th'); 
    thEl.textContent = hour[i];
    trEl.appendChild(thEl);
  }
  standsTable.appendChild(trEl);
}

function TotPerHr() {
  var trEl = document.createElement('tr'); //create tr
  var tdEl = document.createElement('td'); //create td
  tdEl.textContent = 'Total'; //td content for name of stand
  trEl.appendChild(tdEl);//append the td

  standsTable.appendChild(trEl);
  // for(var i = 0; i < hour.length; i++){
  //   tdEl = document.createElement('td');
  //   tdEl.textContent = 'Hello';
  // }  
}
makeHeaderRow();

new Stand('1st and Pike', 23, 65, 6.3);
new Stand('SeaTac Airport', 3, 24, 1.2);
new Stand('Seattle Center', 11, 38, 3.7);
new Stand('Capitol Hill', 20, 38, 2.3);
new Stand('Alki', 2, 16, 4.6);

TotPerHr();