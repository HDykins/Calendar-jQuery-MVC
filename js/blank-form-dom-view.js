var BlankFormDOMView = (function () {

  function getBlankFormSelector() {
    return $('[id="blank-form"]');
  }

  function getBlankBottomRowSelector() {
    return $('[id="blank-bottom-row"]');
  }

  function getEventFormRightColumnSelector() {
    return $('#event-form-right-column');
  }

  function createEventBox() {
    return ('<textarea name="comments" id="comments" style="width:90%"></textarea>');
  }

  function createButton(content) {
    return ('<button class="button" data-button-' + content.toLowerCase() + '>' + content + '</button>');
  }

  function createPostCodeInput() {
    return ('<input class="box" id="post-code-input" placeholder="Postcode"></input>');
  }

  function createFindButton() {
    return ('<button data-button-find class="box" id="find-button">Find</button>');
  }

  function createMapDiv() {
    return ('<div class="map-div" id="map-div">' + createActualMap() + '</div>');
  }

  function createActualMap() {
    return ('<div class="map-div" id="blank-form-map"></div>');
  }

  function renderBlankFormTopRow(month, year) {
    var blankFormTopRow = $('<div class="form-section-top" id="blank-top-row"><h3 class="heading" id="blank-form-heading">' + month + " " + year + '</h3></div>');
    getBlankFormSelector().append(blankFormTopRow);
  }

  function renderBlankFormBottomRow() {
    var blankFormBottomRow = $('<div class="form-section-bottom" id="blank-bottom-row"></div>');
    getBlankFormSelector().append(blankFormBottomRow);
  }

  function renderQuestionText() {
    var questionText = $('<p class="blank-text" id="blank-text">What\'s your full day event?</p>');
    getBlankBottomRowSelector().append(questionText);
  }

  function renderEventFormLeft() {
    var eventFormLeft = $('<form class="event-form" id="event-form-left-column">' + createEventBox() + createButton("Save") + createButton("Cancel") + '</form>');
    getBlankBottomRowSelector().append(eventFormLeft);
  }

  function renderEventFormRight() {
    var eventFormRight= $('<div class="event-form" id="event-form-right-column"></div>');
    getBlankBottomRowSelector().append(eventFormRight);
  }

  function renderFormMapTopRow() {
    formMapTopRow = $('<div class="form-map-top-row" id="form-map-top-row">' + createPostCodeInput() + createFindButton() + '</div>');
    getEventFormRightColumnSelector().append(formMapTopRow);
  }

  function renderFormMapBottomRow() {
    var formMapBottomRow = $('<div class="form-map-bottom-row" id="form-map-bottom-row">' + createMapDiv() + '</div>');
    getEventFormRightColumnSelector().append(formMapBottomRow);
  }  

  return {
    getBlankFormSelector: getBlankFormSelector,
    getBlankBottomRowSelector: getBlankBottomRowSelector,
    getEventFormRightColumnSelector: getEventFormRightColumnSelector,
    renderBlankFormTopRow: renderBlankFormTopRow,
    renderBlankFormBottomRow: renderBlankFormBottomRow,
    renderQuestionText: renderQuestionText,
    renderEventFormLeft: renderEventFormLeft,
    renderEventFormRight: renderEventFormRight,
    renderFormMapTopRow: renderFormMapTopRow,
    renderFormMapBottomRow, renderFormMapBottomRow,
    createEventBox: createEventBox,
  };

})();