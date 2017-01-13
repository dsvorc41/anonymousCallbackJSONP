var fetchJsonp = function(url, callback) {
  //create a script tag
  var script = document.createElement('script');
  //add a source to the script
  script.src = url + '&callback=' + callback;
  //append the script to the body of our page
  document.body.appendChild(script)
};

//search for the first paragraph of Wikipedia article for 'London'
fetchJsonp('http://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=&titles=London', function (data) {
  //find the data located under a specific key
  for (var key in data.query.pages) {
    var jsonResponseText = document.createTextNode(data.query.pages[key].extract); 
  }
  //append the fetched data to the DOM
  var paragraph = document.createElement('P');
  paragraph.appendChild(jsonResponseText);
  document.getElementById('jsonp-data').appendChild(paragraph);

});
