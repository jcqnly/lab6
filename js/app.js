'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStands = [];
var standsTable = document.getElementById('allStands');
var storeForm = document.getElementById('storeForm');

function Stand(name, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiePerCust = avgCookiePerCust;
  this.custEachHrArray = [];
  this.cookiesEachHrArray = [];
  this.totalCookiesPerStand = 0;
  allStands.push(this);
  this.randNumCust();
  this.cookiesEachHr();
  this.render();
}

Stand.prototype.randNumCust = function() {
  for(var i = 0; i < hour.length; i++) {
    this.custEachHrArray.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr);
  }
};//check with allStands[0].custEachHrArray

Stand.prototype.cookiesEachHr = function() {
  this.randNumCust();
  for(var i = 0; i < hour.length; i++) {
    var cookiesOneHr = Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
    this.cookiesEachHrArray.push(cookiesOneHr);
  }
};

Stand.prototype.render = function() {
  //add each unique values to the cell along the row
  var trEl = document.createElement('tr'); //create tr

  var tdEl = document.createElement('td'); //create td
  tdEl.textContent = this.name; //td content for name of stand
  trEl.appendChild(tdEl);//append the td

  for(var i = 0; i < hour.length; i++) {
    tdEl = document.createElement('td'); //create td
    tdEl.textContent = this.cookiesEachHrArray[i];//for every hour
    trEl.appendChild(tdEl);
  }
  //sum total of daily cookies per store
  for(var j = 0; j < hour.length; j++) {
    this.totalCookiesPerStand += this.cookiesEachHrArray[j];
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerStand;
  trEl.appendChild(tdEl);
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

  var thElTotal = document.createElement('th');
  thElTotal.textContent = 'Total';
  trEl.appendChild(thEl);
  standsTable.appendChild(trEl);
}

function footerRow() {
  var trEl = document.createElement('tr'); //create tr
  trEl.setAttribute('id', 'footer');
  var tdEl = document.createElement('td'); //create td
  // trEl.id = 'footer';
  trEl.setAttribute('id', 'footer');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);//append the td
  var totalOfTotal = 0;
  for(var i = 0; i < hour.length; i++) {
    var total = 0;
    for(var j = 0; j < allStands.length; j++) {
      total += allStands[j].cookiesEachHrArray[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);

    totalOfTotal += total; //adding the total row
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalOfTotal;
  trEl.appendChild(tdEl);
  standsTable.appendChild(trEl);
}

makeHeaderRow();
//Instantiate constructor for each est of inputs
new Stand('1st and Pike', 23, 65, 6.3);
new Stand('SeaTac Airport', 3, 24, 1.2);
new Stand('Seattle Center', 11, 38, 3.7);
new Stand('Capitol Hill', 20, 38, 2.3);
new Stand('Alki', 2, 16, 4.6);
footerRow();

//event triggger
function handleStoreSubmit(event) {
  event.preventDefault();
  //Prevent empty submission
  if (!event.target.store.value || !event.target.minCustPerHr.value || !event.target.maxCustPerHr.value || !event.target.avgCookiePerCust.value) {
    return alert('Fields cannot be empty!');
  }
  var location = event.target.store.value;
  var min = parseInt(event.target.minCustPerHr.value);
  var max = parseInt(event.target.maxCustPerHr.value);
  var avg = parseInt(event.target.avgCookiePerCust.value);

  clearTable();

  new Stand(location, min, max, avg);

  //empty the form fields
  event.target.store.value = null;
  event.target.minCustPerHr.value = null;
  event.target.maxCustPerHr.value = null;
  event.target.avgCookiePerCust.value = null;
  footerRow();
}

function clearTable() {
  document.getElementById('footer').innerHTML = '';
}
//event listener for store submission form
storeForm.addEventListener('submit', handleStoreSubmit);