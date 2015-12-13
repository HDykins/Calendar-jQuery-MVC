var ClickEventsCalendarDOMView =   (function () {

  function showBlankForm() {
    return $('[id="blank-form"]').show();
  }

  function hideBlankForm() {
    return $('[id="blank-form"]').hide();
  }

  function showAmmendForm() {
    return $('[id="ammend-form"]').show();
  }

  function hideAmmendForm() {
    return $('[id="ammend-form"]').hide();
  }

  function showMapView() {
    return $('[id="map-view"]').show();
  }

  function hideMapView() {
    return $('[id="map-view"]').hide();
  }

  function showCalendarView() {
    $('[id="main-padding"]').show();
  }

  function hideCalendarView() {
    $('[id="main-padding"]').hide();
  }

  function setBlankFormDateHeadingView(currentCalendarDay, month, year) {
    $('[id="blank-form-heading"]').text(currentCalendarDay + " of " + month + " " + year);
  }

  function setBoxClassToShaded(currentCalendarDay) {
    $('[data-calendar-day="' + currentCalendarDay + '"]').addClass('shadedBox').removeClass('box');
    if (Model.getCurrentDay()==currentCalendarDay) {
      $('[data-calendar-day="' + currentCalendarDay + '"]').removeClass('red-box').addClass('red-box');
    }
  }

  function setBoxClassToNotShaded(currentCalendarDay) {
    $('[data-calendar-day="' + currentCalendarDay + '"]').addClass('box').removeClass('shadedBox');
    if (Model.getCurrentDay()==currentCalendarDay) {
      $('[data-calendar-day="' + currentCalendarDay + '"]').removeClass('red-box').addClass('red-box');
    }
  }

  function getUserPostcodeInput() {
    return $('[id="post-code-input"]').val();
  }

  function getBlankFormText(blankFormText) {
     $('[id="comments"]').val(blankFormText);
  }

  function getBlankFormTextInputSelector() {
    return $('[id="comments"]').val();
  }

  function getAmmendFormPreviewBoxText(ammendFormText) {
    $('[class="preview-box"]').text(ammendFormText);
  }  

  function createTaskBoxes(daysWithTasks, getTextValue) {
    daysWithTasks.map(function createTaskBox(taskNumber) {
      var TaskRow = $('<div class="task-row" id="task-row' + taskNumber + '"><div class="task-text-box" id="task-text-box' + taskNumber + '">' + taskNumber + ": " +  getTextValue(taskNumber) + '</div></div>');
      $('[id="left-pane"]').append(TaskRow);
    });
  }

  function removeTaskBoxes() {
      $('[class="task-row"]').remove();
  }

  function removeAllMarkersFromMapView(daysWithLocationsArray, removeMarker, markersObject) {
    daysWithLocationsArray.map(function(taskNumber) {
      removeMarker(markersObject[taskNumber]);
    });
  }

  function clearFindInputBox() {
    $('[id="post-code-input"]').val('');
  }

  function addCalendarDayClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      console.log(this);
      var currentCalendarDay = $(this).attr(selector);
      callback(currentCalendarDay);
    });
  }

  function addSaveButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addCancelButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addCloseButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addEditButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addRemoveButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addMapViewButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addCalendarViewButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  function addFindButtonClickListener(selector, callback) {
    $('body').on('click', '[' + selector + ']', function (clickEvent) {
      clickEvent.preventDefault();
      callback();
    });
  }

  return {
    showBlankForm: showBlankForm,
    hideBlankForm: hideBlankForm,
    showAmmendForm: showAmmendForm,
    hideAmmendForm: hideAmmendForm,
    showMapView: showMapView,
    hideMapView: hideMapView,
    showCalendarView: showCalendarView,
    hideCalendarView: hideCalendarView,
    setBlankFormDateHeadingView: setBlankFormDateHeadingView,
    setBoxClassToShaded: setBoxClassToShaded,
    setBoxClassToNotShaded: setBoxClassToNotShaded,
    getUserPostcodeInput: getUserPostcodeInput,
    getBlankFormTextInputSelector: getBlankFormTextInputSelector,
    getAmmendFormPreviewBoxText: getAmmendFormPreviewBoxText,
    getBlankFormText: getBlankFormText,
    createTaskBoxes: createTaskBoxes,
    removeTaskBoxes: removeTaskBoxes,
    removeAllMarkersFromMapView: removeAllMarkersFromMapView,
    clearFindInputBox: clearFindInputBox,
    addCalendarDayClickListener: addCalendarDayClickListener,
    addSaveButtonClickListener: addSaveButtonClickListener,
    addCancelButtonClickListener: addCancelButtonClickListener,
    addCloseButtonClickListener: addCloseButtonClickListener,
    addEditButtonClickListener: addEditButtonClickListener,
    addRemoveButtonClickListener: addRemoveButtonClickListener,
    addMapViewButtonClickListener: addMapViewButtonClickListener,
    addCalendarViewButtonClickListener: addCalendarViewButtonClickListener,
    addFindButtonClickListener: addFindButtonClickListener
  };

})();
