'use strict';

var militaryHourArray = [];
for(var i = 600; i <= 2000; i += 100) {
  militaryHourArray.push(i);
}

var pike = {
  name: "1st and Pike",
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgCookiePerCust: 6.3,
  
  custEachHrArray: [],//customers PER HOUR array,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < 15; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
      console.log(custNum);
    }
  },

  cookiesEachHrArray: [],
  cookiesEachHr: function() {//avgCookiesPerCust * random#ofCust
    this.randNumCust();
    for(var i = 0; i < this.custEachHrArray.length; i++) {
      var cookiesEveryHr = Math.round(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      console.log(cookiesEveryHr);
    }
  },

  render: function() {
    this.cookiesEachHr();
    var totalCookies = 0;
    var ulEl = document.getElementById('firstPike');
    for(var i = 0; i < this.custEachHrArray.length; i++) {
      totalCookies += this.cookiesEachHrArray[i];
      var liEl = document.createElement('li');
      liEl.textContent = militaryHourArray[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaTacAir = {
  name: "SeaTac Airport",
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgCookiePerCust: 1.2,
  
  custEachHrArray: [],//customers PER HOUR array,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < 15; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
      console.log(custNum);
    }
  },

  cookiesEachHrArray: [],
  cookiesEachHr: function() {//avgCookiesPerCust * random#ofCust
    this.randNumCust();
    for(var i = 0; i < this.custEachHrArray.length; i++) {
      var cookiesEveryHr = Math.round(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      console.log(cookiesEveryHr);
    }
  },

  render: function() {
    this.cookiesEachHr();
    var totalCookies = 0;
    var ulEl = document.getElementById('seaTac');
    for(var i = 0; i < this.custEachHrArray.length; i++) {
      totalCookies += this.cookiesEachHrArray[i];
      var liEl = document.createElement('li');
      liEl.textContent = militaryHourArray[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaCenter = {
  name: "Seattle Center",
  minCustPerHr: 11,
  maxCustPerHr: 38,
  avgCookiePerCust: 3.7,
  
  custEachHrArray: [],//customers PER HOUR array,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < 15; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
      console.log(custNum);
    }
  },

  cookiesEachHrArray: [],
  cookiesEachHr: function() {//avgCookiesPerCust * random#ofCust
    this.randNumCust();
    for(var i = 0; i < this.custEachHrArray.length; i++) {
      var cookiesEveryHr = Math.round(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      console.log(cookiesEveryHr);
    }
  },

  render: function() {
    this.cookiesEachHr();
    var totalCookies = 0;
    var ulEl = document.getElementById('seaCen');
    for(var i = 0; i < this.custEachHrArray.length; i++) {
      totalCookies += this.cookiesEachHrArray[i];
      var liEl = document.createElement('li');
      liEl.textContent = militaryHourArray[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }  
};

// var capHill = {};

// var alki = {};
pike.render();
seaTacAir.render();
seaCenter.render();