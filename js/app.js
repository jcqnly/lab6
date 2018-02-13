'use strict';

// var militaryHourArray = [];
// for(var i = 600; i <= 2000; i += 100) {
//   militaryHourArray.push(i);
// }

var hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

var pike = {
  name: "1st and Pike",
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgCookiePerCust: 6.3,
  
  custEachHrArray: [],//customers PER HOUR,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < hour.length; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
    }
  },
  
  cookiesEachHrArray: [],//cookies per hr based on # of customers
  cookiesEachHr: function() {
    this.randNumCust();
    for(var i = 0; i < hour.length; i++) {
      var cookiesEveryHr = Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      this.totalCookies += cookiesEveryHr;
    }
  }, 
  
  totalCookies: 0, //Does it matter if this is before or after the function that uses this value?

  render: function() {//add total cookies within this funct
    this.cookiesEachHr();
    for(var i = 0; i < hour.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hour[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      //append to parent
      var ulEl = document.getElementById('firstPike');
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaTacAir = {
  name: "SeaTac Airport",
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgCookiePerCust: 1.2,
  
  custEachHrArray: [],//customers PER HOUR,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < hour.length; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
    }
  },
  
  cookiesEachHrArray: [],//cookies per hr based on # of customers
  cookiesEachHr: function() {
    this.randNumCust();
    for(var i = 0; i < hour.length; i++) {
      var cookiesEveryHr = Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      this.totalCookies += cookiesEveryHr;
    }
  }, 
  
  totalCookies: 0, //Does it matter if this is before or after the function that uses this value?

  render: function() {//add total cookies within this funct
    this.cookiesEachHr();
    for(var i = 0; i < hour.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hour[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      //append to parent
      var ulEl = document.getElementById('seaTac');
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaCenter = {
  name: "Seattle Center",
  minCustPerHr: 11,
  maxCustPerHr: 38,
  avgCookiePerCust: 3.7,
  
  custEachHrArray: [],//customers PER HOUR,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < hour.length; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
    }
  },
  
  cookiesEachHrArray: [],//cookies per hr based on # of customers
  cookiesEachHr: function() {
    this.randNumCust();
    for(var i = 0; i < hour.length; i++) {
      var cookiesEveryHr = Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      this.totalCookies += cookiesEveryHr;
    }
  }, 
  
  totalCookies: 0, //Does it matter if this is before or after the function that uses this value?

  render: function() {//add total cookies within this funct
    this.cookiesEachHr();
    for(var i = 0; i < hour.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hour[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      //append to parent
      var ulEl = document.getElementById('seaCen');
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }  
};

var capitolHill = {
  name: "Capitol Hill",
  minCustPerHr: 20,
  maxCustPerHr: 38,
  avgCookiePerCust: 2.3,
  
  custEachHrArray: [],//customers PER HOUR,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < hour.length; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
    }
  },
  
  cookiesEachHrArray: [],//cookies per hr based on # of customers
  cookiesEachHr: function() {
    this.randNumCust();
    for(var i = 0; i < hour.length; i++) {
      var cookiesEveryHr = Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      this.totalCookies += cookiesEveryHr;
    }
  }, 
  
  totalCookies: 0, //Does it matter if this is before or after the function that uses this value?

  render: function() {//add total cookies within this funct
    this.cookiesEachHr();
    for(var i = 0; i < hour.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hour[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      //append to parent
      var ulEl = document.getElementById('capHill');
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  }   
};

var alkiBeach = {
  name: "Alki",
  minCustPerHr: 2,
  maxCustPerHr: 16,
  avgCookiePerCust: 4.6,
  
  custEachHrArray: [],//customers PER HOUR,
  randNumCust: function (minCustPerHr, maxCustPerHr) {
    for(var i = 0; i < hour.length; i++) {
      var custNum = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1)) + this.minCustPerHr;
      this.custEachHrArray.push(custNum);
    }
  },
  
  cookiesEachHrArray: [],//cookies per hr based on # of customers
  cookiesEachHr: function() {
    this.randNumCust();
    for(var i = 0; i < hour.length; i++) {
      var cookiesEveryHr = Math.ceil(this.avgCookiePerCust * this.custEachHrArray[i]);
      this.cookiesEachHrArray.push(cookiesEveryHr);
      this.totalCookies += cookiesEveryHr;
    }
  }, 
  
  totalCookies: 0, //Does it matter if this is before or after the function that uses this value?

  render: function() {//add total cookies within this funct
    this.cookiesEachHr();
    for(var i = 0; i < hour.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give it content
      liEl.textContent = hour[i] + ': ' + this.cookiesEachHrArray[i] + ' cookies';
      //append to parent
      var ulEl = document.getElementById('alki');
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    ulEl.appendChild(liEl);
  } 
};

pike.render();
seaTacAir.render();
seaCenter.render();
capitolHill.render();
alkiBeach.render();
