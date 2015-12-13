var AmmendFormDOMView = (function () {

function getAmmendFormSelector() {
  return $('[id="ammend-form"]');
}

function getAmmendBottomRowSelector() {
  return $('[id="ammend-bottom-row"]');
}

function getCommentsClassSelector() {
  return $('[class="comments"]');
}

function createPreviewBox() {
    return ('<p class="preview-box"></p>');
  }

function createButton(content) {
    return ('<button class="button" data-button-' + content.toLowerCase() + '>' + content + '</button>');
  }

function createActualMap() {
  return ('<div class="map-div" id="ammend-form-map"></div>');
}

function renderAmmendFormTopRow(month, year) {
  var ammendFormTopRow = $('<div class="form-section-top" id="blank-top-row"><h3 class="heading" id="blank-form-heading">' + month + " " + year + '</h3></div>');
  getAmmendFormSelector().append(ammendFormTopRow);
}

function renderAmmendFormBottomRow() {
  var ammendFormBottomRow = $('<div class="form-section-bottom" id="ammend-bottom-row"></div>');
  getAmmendFormSelector().append(ammendFormBottomRow);
}

function renderText() {
  var text = $('<p>YOUR FULL-DAY EVENT</p>');
  getAmmendBottomRowSelector().append(text);
}

function renderAmmendFormLeft() {
  var ammendFormLeft = $('<form class="event-form" id="ammend-form-left-column">' + createPreviewBox() + createButton("Close") + createButton("Edit") + createButton("Remove") + '</form>');
  getAmmendBottomRowSelector().append(ammendFormLeft);
}

function renderAmmendFormRight() {
  var ammendFormRight= $('<div class="event-form" id="ammend-form-right-column">' + createActualMap() + '</div>');
  getAmmendBottomRowSelector().append(ammendFormRight);
}

function renderAmmendEventForm() {
  var ammendEventForm = $('<form class="comments"></form>');
  $('[id="ammend-form-left-column"]').append(ammendEventForm);
}

return {
       getAmmendFormSelector: getAmmendFormSelector,
       getAmmendBottomRowSelector: getAmmendBottomRowSelector,
       getCommentsClassSelector: getCommentsClassSelector,
       renderAmmendFormTopRow: renderAmmendFormTopRow,
       renderAmmendFormBottomRow: renderAmmendFormBottomRow,
       renderText: renderText,
       renderAmmendFormLeft: renderAmmendFormLeft,
       renderAmmendFormRight: renderAmmendFormRight,
       renderAmmendEventForm: renderAmmendEventForm
  };
})();