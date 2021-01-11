'use strict';
var workingHours = ['6:00am','7:00am ','8:00am ','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm', 'Daily Location Total'];

var finalTable= [];
// creat table and append it in main
var getFirstRow = document.getElementById('main');
var table = document.createElement('table');
getFirstRow.appendChild(table);


// craet image and append it in header

var headPage =document.getElementById('header');
var headImg= document.createElement('img');
headPage.appendChild(headImg);
headImg.setAttribute('src','img/salmon.png');



// creat Header raw and append it in table
var firstHeadingRow = document.createElement('tr');
table.appendChild(firstHeadingRow);

var firstColHeadingRowTH = document.createElement('th');
firstHeadingRow.appendChild(firstColHeadingRowTH);

// creat th and append it in tr

for(var x = 0 ; x < workingHours.length; x++){
    var firstHeadingRowTH = document.createElement('th');
    firstHeadingRow.appendChild(firstHeadingRowTH);
    finalTable.push(firstHeadingRowTH.textContent= workingHours[x]);
}

// Summation of 6 am colum

var sum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


// Creating the Constructor


function Branches(name, minHouralyCust, maxHouralyCust, avgCookSalesPerCust) {
    this.name = name;
    this.minHouralyCust = minHouralyCust;
    this.maxHouralyCust = maxHouralyCust;
    this.avgCookSalesPerCust = avgCookSalesPerCust;

    this.allCustPerHour= [];    
  
    this.allCookiesPerHour= [];
    this.total = 0;



  }

// Prototype for total
Branches.prototype.totalResult= function(){
    
    for(var k = 0 ; k < this.allCookiesPerHour.length; k++){
        this.total=this.total+this.allCookiesPerHour[k];
    }
    return this.total;

};

// prototype for randomNumOfCust Function
Branches.prototype.randomNumOfCust=function(){
    
        for (var i = 0; i < 14; i++) {
          this.allCustPerHour.push(RandomNumOfCustPerHour(this.minHouralyCust, this.maxHouralyCust));
        }
        return this.allCustPerHour;
    };

    

// prototype for calcCookiesPerHour Function
Branches.prototype.calcCookiesPerHour= function () {
    for (var i = 0; i < 14; i++) {
        
        this.allCookiesPerHour.push(Math.ceil(this.allCustPerHour[i] * this.avgCookSalesPerCust));
        // console.log(this.allCookiesPerHour[i]);
    }
    // return this.allCookiesPerHour;

};



// rendering
Branches.prototype.render= function () {



// creat shop raw and append it in table
var shopRow = document.createElement('tr');
table.appendChild(shopRow);

// creat td and append it in tr




this.allCookiesPerHour.unshift(this.name);
this.allCookiesPerHour.push(this.total);
// console.log(this.allCookiesPerHour);
var shopName;

for(var z = 0 ; z < this.allCookiesPerHour.length; z++){

    shopName = document.createElement('td');
    shopRow.appendChild(shopName);
    finalTable.push(shopName.textContent= this.allCookiesPerHour[z]);
}

// craet a summation of the column:

var summationArray = this.allCookiesPerHour;


summationArray.shift();
// console.log(summationArray);
for(var s = 0 ; s < sum.length; s++){
    sum[s]= sum[s]+summationArray[s];
    
}

};



// seattle shop

  var seattle = new Branches('Seattle', 23, 65, 6.3);

  seattle.randomNumOfCust();
  seattle.calcCookiesPerHour();
  seattle.totalResult();
  seattle.render();
  

// tokyo shop

var tokyo = new Branches('Tokyo', 3, 24, 1.2);

tokyo.randomNumOfCust();
tokyo.calcCookiesPerHour();
tokyo.totalResult();
tokyo.render();


// dubai shop

var dubai = new Branches('Dubai', 11, 38, 8.7);

dubai.randomNumOfCust();
dubai.calcCookiesPerHour();
dubai.totalResult();
dubai.render();

// Paris shop

var paris = new Branches('Paris', 20, 38, 2.3);

paris.randomNumOfCust();
paris.calcCookiesPerHour();
paris.totalResult();
paris.render();

// Lima shop

var lima = new Branches('Lima', 2, 16, 6.4);

lima.randomNumOfCust();
lima.calcCookiesPerHour();
lima.totalResult();
lima.render();





// Declaring Function




function RandomNumOfCustPerHour(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
  }


/////////////////
  

// creat Footer raw and append it in table
var lastRow = document.createElement('tr');
table.appendChild(lastRow);

var firstColFooterRowTH = document.createElement('th');
lastRow.appendChild(firstColFooterRowTH);
firstColFooterRowTH.textContent=['Total',];

// creat th and append it in tr

for(var s = 0 ; s < sum.length; s++){
    var sumRow = document.createElement('th');
    lastRow.appendChild(sumRow);
    finalTable.push(sumRow.textContent= sum[s]);
}

console.log(sum);


