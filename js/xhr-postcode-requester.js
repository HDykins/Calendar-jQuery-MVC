var XhrPostcodeRequester = (function requestPostcode() {

  function getPostCode(postcode, done) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI('http://api.postcodes.io/postcodes/' + postcode + ''));
    xhr.onload = function loadHandler() {
      if (xhr.status !== 200) {
        console.log('Not OK: ' + xhr.status);
        return;
      }

      var data = JSON.parse(xhr.responseText);
      done(null, data);
    };
    xhr.send();
  }
  
  return {
    getPostCode: getPostCode
  }

})();