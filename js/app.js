'use strict';


var Seattle = {
    name: 'Seattle',
  minHouralyCust: 23,
  maxHouralyCust: 65,
  avgCookSalesPerCust: 6.3,

  allCustPerHour: [],
  randomNumOfCust: function () {
    var custPerHr = [];
    for (var i = 0; i < 14; i++) {
        custPerHr[i] = RandomNumOfCustPerHour(this.minHouralyCust, this.maxHouralyCust);
    }
    return custPerHr;
},


allCookiesPerHour: [],
calcCookiesPerHour: function () {
    var cookiesPerHr = [];
    for (var i = 0; i < 14; i++) {
        cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookSalesPerCust);
    }
    return cookiesPerHr;

}

};


Seattle.allCustPerHour = Seattle.randomNumOfCust();
Seattle.allCookiesPerHour = Seattle.calcCookiesPerHour();
console.log(Seattle);




var Tokyo = {
    name: 'Tokyo',
    minHouralyCust: 3,
    maxHouralyCust: 24,
    avgCookSalesPerCust: 1.2,
  
    
  allCustPerHour: [],
  randomNumOfCust: function () {
    var custPerHr = [];
    for (var i = 0; i < 14; i++) {
        custPerHr[i] = RandomNumOfCustPerHour(this.minHouralyCust, this.maxHouralyCust);
    }
    return custPerHr;
},


allCookiesPerHour: [],
calcCookiesPerHour: function () {
    var cookiesPerHr = [];
    for (var i = 0; i < 14; i++) {
        cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookSalesPerCust);
    }
    return cookiesPerHr;

}
  
  };

  
Tokyo.allCustPerHour = Tokyo.randomNumOfCust();
Tokyo.allCookiesPerHour = Tokyo.calcCookiesPerHour();
console.log(Tokyo);


var Dubai = {
    name: 'Dubai',
    minHouralyCust: 11,
    maxHouralyCust: 38,
    avgCookSalesPerCust: 8.7,
  
    
  allCustPerHour: [],
  randomNumOfCust: function () {
    var custPerHr = [];
    for (var i = 0; i < 14; i++) {
        custPerHr[i] = RandomNumOfCustPerHour(this.minHouralyCust, this.maxHouralyCust);
    }
    return custPerHr;
},


allCookiesPerHour: [],
calcCookiesPerHour: function () {
    var cookiesPerHr = [];
    for (var i = 0; i < 14; i++) {
        cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookSalesPerCust);
    }
    return cookiesPerHr;

}

    
};

Dubai.allCustPerHour = Dubai.randomNumOfCust();
Dubai.allCookiesPerHour = Dubai.calcCookiesPerHour();
console.log(Dubai);




  var Paris = {
    name: 'Paris',
    minHouralyCust: 20,
    maxHouralyCust: 38,
    avgCookSalesPerCust: 2.3,
  
    
  allCustPerHour: [],
  randomNumOfCust: function () {
    var custPerHr = [];
    for (var i = 0; i < 14; i++) {
        custPerHr[i] = RandomNumOfCustPerHour(this.minHouralyCust, this.maxHouralyCust);
    }
    return custPerHr;
},


allCookiesPerHour: [],
calcCookiesPerHour: function () {
    var cookiesPerHr = [];
    for (var i = 0; i < 14; i++) {
        cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookSalesPerCust);
    }
    return cookiesPerHr;

}
  
  };

  
Paris.allCustPerHour = Paris.randomNumOfCust();
Paris.allCookiesPerHour = Paris.calcCookiesPerHour();
console.log(Paris);



  var Lima = {
    name: 'Lima',
    minHouralyCust: 2,
    maxHouralyCust: 16,
    avgCookSalesPerCust: 4.6,
  

    
  allCustPerHour: [],
  randomNumOfCust: function () {
    var custPerHr = [];
    for (var i = 0; i < 14; i++) {
        custPerHr[i] = RandomNumOfCustPerHour(this.minHouralyCust, this.maxHouralyCust);
    }
    return custPerHr;
},


allCookiesPerHour: [],
calcCookiesPerHour: function () {
    var cookiesPerHr = [];
    for (var i = 0; i < 14; i++) {
        cookiesPerHr[i] = Math.floor(this.allCustPerHour[i] * this.avgCookSalesPerCust);
    }
    return cookiesPerHr;

}
  
  };


  Lima.allCustPerHour = Lima.randomNumOfCust();
  Lima.allCookiesPerHour = Lima.calcCookiesPerHour();
  console.log(Lima);
  




/////////////////////////////////////////////////
var shops=[Seattle,Dubai,Paris, Lima];
var workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


var headPage =document.getElementById('location');
var headImg= document.createElement('img');
headPage.appendChild(headImg);
headImg.src='https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/assets/salmon.png'




// Declaring Function




  function RandomNumOfCustPerHour(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

////////////


function writrList(name) {
    var parentBody = document.getElementById('finalResult');
    var Article = document.createElement('article');
    parentBody.appendChild(Article);

    // add title
    var Name = document.createElement('h2');
    Name.textContent = name.name;
    Article.appendChild(Name);
    var cum=0;
    console.log(Name.textContent = name.name);
    // unorderd list
    var List = document.createElement('ul');
    Article.appendChild(List);
    for(var k=0;k<workingHours.length;k++){
        cum=cum+name.allCookiesPerHour[k];
    
    
    // branch of list
    var Branch = document.createElement('li');
    Branch.textContent = workingHours[k] + ': ' + name.allCookiesPerHour[k]+' cookies';
    List.appendChild(Branch);
    
    }
    //add total
   
    var Branch = document.createElement('li');
    Branch.textContent ='Total: '+ cum +' cookies';
    List.appendChild(Branch); 
}

for(var i=0;i<shops.length;i++ ){
    var Name =shops[i]
    
        writrList(Name);
        
    
}
