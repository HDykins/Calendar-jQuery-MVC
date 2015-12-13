var mapDomView = (function() {

  function getMapViewSelector() {
    return $('[id="map-view"]');
  }

  function createMapDiv() {
    return ('<div class="map" id="mapDiv">' + createCalendarViewButton() + createActualMap() + '</div>');
  }

  function createCalendarViewButton() {
    return ('<button data-button-calendar-view class="calendar-button" id="calendar-view-button">Calendar View</button>');
  }

  function createActualMap() {
    return ('<div class="eventsMap" id="map-view-map"></div>');
  }

  function renderSliderRow(year, month) {
    var sliderRow = $('<div class="slider-row" id="slider-row"><label for="amount">' + year + " " + month + '</label><input type="text" id="amount" readonly style="border:0; line-height:2vh; color:#f6931f; font-weight:bold;"><div id="slider"></div></div>');
    getMapViewSelector().append(sliderRow);
  }

  function renderLeftPane() {
    var leftPane = $('<div class="col-xs-6" id="left-pane"></div>');
    getMapViewSelector().append(leftPane);
  }

  function renderRightPane() {
    var rightPane = $('<div class="col-xs-6" id="right-pane">' + createMapDiv() + '</div>');
    getMapViewSelector().append(rightPane);
  }

  return {
    renderSliderRow: renderSliderRow,
    renderLeftPane: renderLeftPane,
    renderRightPane: renderRightPane
  };
})();