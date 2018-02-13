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
  }
};

// var seaTacAir = {};

// var seaCenter = {};

// var capHill = {};

// var alki = {};