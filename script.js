var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  var result = JSON.parse(req.response);
  // //1. Getting Asia Region using Filter Region
  var ans = result.filter((ele) => ele.region === "Asia");
  console.log(ans);
  // 2.countries with a population of less than 2 lakhs using Filter function
  var population = result.filter((a) => a.population < 2000000);
  console.log(population);

  //    //3.Print the following details name, capital, flag using forEach function
  var detail = result.forEach((element) => {
    console.log(element.name, element.capital, element.flag);
  });
};

//4.Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  var totalpopulation = result.reduce((a, b) => a + b.population, 0);
  console.log(totalpopulation);
};

//5.Print the country which uses US Dollars as currency.
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = () => {
  var data = JSON.parse(xhr.response);
  console.log(data);
  let answer = data.filter((dummy) => dummy.currencies !== undefined);
  console.log(answer.length);
  let realanswer = answer.filter((data) => {
    for (let key in data.currencies) {
      if (data.currencies[key].name === "United States dollar") {
        return data;
      }
    }
  });
  console.log(realanswer.length, realanswer[0].currencies);
};
