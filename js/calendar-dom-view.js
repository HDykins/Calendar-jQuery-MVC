var CalendarDOMView = (function () {

  var calendarDatesArray = Model.appendAndPrependToDateArray();
  var arraysOfRowsObject = createRowArrayObject(calendarDatesArray);

  function createRowArrayObject(calendarDatesArray) {
    arraysOfRowsObject = {};
    
    for (var i =3; i<9; i++) {
      arraysOfRowsObject["row" + i] = calendarDatesArray.splice(0, 7);
    }
    return arraysOfRowsObject;
  }
    
  function getArraysOfRowsObject() {
    return arraysOfRowsObject;
  }

  function createMonthHeaderView(month, year) {
    var topRow = $('<div class="row" id="row1"></div>');
    $('[id="main-padding"]').append(topRow);

    var monthDiv = $('<div class="col-xs-12" id="div-month"></div>');
    $('[id="row1"]').append(monthDiv);

    var monthBox = $('<div class="black-box" id="monthBox"></div>');
    $('[id="div-month"]').append(monthBox);

    var monthBoxSelector = $('[id="monthBox"]'); 
    var heading = $('<h1 class="heading" id="headingId">' + month + " " + year + '</h1>');
    monthBoxSelector.append(heading);

    var mapViewButton = $('<button data-button-map-view class="map-button" id="map-view-button">Map View</button>');
    monthBoxSelector.append(mapViewButton);
  }

  function renderRow(content, idNum) {
    var row = $('<div class="row" id="row' + idNum + '">' +  content + '</div>');
    $('[class="container-fluid"]').append(row);
  }

  function createDayBox(content) {
    if (Number.isInteger(content)){
     return ('<div class="col-xs-1" id="divBox' + content + '"><div data-calendar-day="' + content + '" class="box" id="box'+ content + '">' + content + '</div></div>');
    }
    else {
      return ('<div class="col-xs-1" id="divBox' + content + '"><div class="black-box" id="box'+ content + '">' + content + '</div></div>');
    }
  }

  function renderDayNameBoxes(days){
      var daysBoxes = days.map(createDayBox).join('');
      renderRow(daysBoxes, 2);    
  }

  function createDaysOfWeekRow(weekDaysArray) {
     return renderDayNameBoxes(weekDaysArray);
  }

  function createCalendarDateRows() {
    for (var i = 3; i < 9; i++) {
    var datesBoxes = arraysOfRowsObject['row'+i].map(createDayBox).join('');
    renderRow(datesBoxes, i);
    } 
  }

  function highlightTodaysDate() {
    $('#box' + Model.getCurrentDay() +'').addClass('red-box');
  }

    return {
      createMonthHeaderView: createMonthHeaderView,
      getArraysOfRowsObject: getArraysOfRowsObject,
      createDaysOfWeekRow: createDaysOfWeekRow,
      renderRow: renderRow,
      createDayBox: createDayBox,
      createCalendarDateRows: createCalendarDateRows,
      highlightTodaysDate: highlightTodaysDate

    };

})();