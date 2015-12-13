$(function () {

  
  (function Controller() {
    
    createDomSection();
    CalendarDOMView.createMonthHeaderView(Model.convertMonthNumberToString(Model.getMonth()), Model.getYear());
    CalendarDOMView.createDaysOfWeekRow(Model.getDays());
    CalendarDOMView.createCalendarDateRows();
    CalendarDOMView.highlightTodaysDate();
    BlankFormDOMView.renderBlankFormTopRow(Model.convertMonthNumberToString(Model.getMonth()), Model.getYear());
    BlankFormDOMView.renderBlankFormBottomRow();
    BlankFormDOMView.renderQuestionText();
    BlankFormDOMView.renderEventFormLeft();
    BlankFormDOMView.renderEventFormRight();
    BlankFormDOMView.renderFormMapTopRow();
    BlankFormDOMView.renderFormMapBottomRow();
    AmmendFormDOMView.renderAmmendFormTopRow(Model.convertMonthNumberToString(Model.getMonth()), Model.getYear());
    AmmendFormDOMView.renderAmmendFormBottomRow();
    AmmendFormDOMView.renderText();
    AmmendFormDOMView.renderAmmendFormLeft();
    AmmendFormDOMView.renderAmmendFormRight();
    AmmendFormDOMView.renderAmmendEventForm();
    mapDomView.renderSliderRow(Model.convertMonthNumberToString(Model.getMonth()), Model.getYear());
    mapDomView.renderLeftPane();
    mapDomView.renderRightPane();
    Storage.assignInitialValuesToObjects(Model.getDateArray(12, 2015));

    ClickEventsCalendarDOMView.addCalendarDayClickListener('data-calendar-day', function addCalendarDayClickHandler(currentCalendarDay) {

      if (Storage.getTextValueFromIdListObject(currentCalendarDay) === '') {
      ClickEventsCalendarDOMView.getBlankFormText(Storage.getTextValueFromIdListObject(currentCalendarDay));
      ClickEventsCalendarDOMView.setBlankFormDateHeadingView(currentCalendarDay, Model.convertMonthNumberToString(Model.getMonth()), Model.getYear());
      Storage.storeCurrentCalendarDay(currentCalendarDay);
      ClickEventsCalendarDOMView.showBlankForm();
      MapUtility.initBlankFormMap(Storage.getLocationFromIdListObject(currentCalendarDay));

      } else {
         Storage.storeCurrentCalendarDay(currentCalendarDay);
        ClickEventsCalendarDOMView.getAmmendFormPreviewBoxText(Storage.getTextValueFromIdListObject(currentCalendarDay));
        Storage.storeCurrentCalendarDay(currentCalendarDay);
        ClickEventsCalendarDOMView.showAmmendForm();
        if (Storage.getIdListObject()[Storage.getCurrentCalendarDay()].latitude !== null) {
          MapUtility.initAmmendFormMap(Storage.getLocationFromIdListObject(currentCalendarDay));
        }
      }
    });

    ClickEventsCalendarDOMView.addSaveButtonClickListener('data-button-save', function addSaveButtonClickEventHandler() {

      if (ClickEventsCalendarDOMView.getBlankFormTextInputSelector()) {
      Storage.setTextValueOfIdListObject(Storage.getCurrentCalendarDay(), ClickEventsCalendarDOMView.getBlankFormTextInputSelector());
      ClickEventsCalendarDOMView.hideBlankForm();
      ClickEventsCalendarDOMView.setBoxClassToShaded(Storage.getCurrentCalendarDay());
      ClickEventsCalendarDOMView.clearFindInputBox();
      } else {
        ClickEventsCalendarDOMView.hideBlankForm();
      }
    });

    ClickEventsCalendarDOMView.addCancelButtonClickListener('data-button-cancel', function addCancelButtonClickEventHandler() {
      ClickEventsCalendarDOMView.hideBlankForm();
    });

    ClickEventsCalendarDOMView.addCloseButtonClickListener('data-button-close', function addCloseButtonClickEventHandler() {
      ClickEventsCalendarDOMView.hideAmmendForm();
    });

    ClickEventsCalendarDOMView.addEditButtonClickListener('data-button-edit', function addEditButtonClickEventHandler() {
      ClickEventsCalendarDOMView.hideAmmendForm();
      ClickEventsCalendarDOMView.getBlankFormText(Storage.getTextValueFromIdListObject(Storage.getCurrentCalendarDay()));
      ClickEventsCalendarDOMView.showBlankForm();
      if (Storage.getIdListObject()[Storage.getCurrentCalendarDay()].latitude !== null) {
        MapUtility.initBlankFormMap(Storage.getLocationFromIdListObject(Storage.getCurrentCalendarDay()));
        MapUtility.addMarkerToBlankFormMap(MarkerModel.getMarkersObject()[Storage.getCurrentCalendarDay()]);
      }
    });

    ClickEventsCalendarDOMView.addRemoveButtonClickListener('data-button-remove', function addRemoveButtonClickEventHandler() {
      ClickEventsCalendarDOMView.setBoxClassToNotShaded(Storage.getCurrentCalendarDay());
      Storage.setTextValueOfIdListObject(Storage.getCurrentCalendarDay(), "");
      Storage.removeLocationOfIdListObject(null, Storage.getCurrentCalendarDay());
      ClickEventsCalendarDOMView.hideAmmendForm();
    });

    ClickEventsCalendarDOMView.addMapViewButtonClickListener('data-button-map-view', function addMapViewButtonClickEventHandler() {
      ClickEventsCalendarDOMView.hideCalendarView();
      ClickEventsCalendarDOMView.showMapView();
      if (Storage.createDaysWithLocationsArray().length) {
        MapUtility.initMapViewMap(Storage.getLocationFromIdListObject(Storage.getCurrentCalendarDay()));
        MapUtility.createMapViewMarkers(Storage.createDaysWithLocationsArray(), Storage.getIdListObject(), MarkerModel.storeMarkersInMarkersObject);
      }
      SliderUtility.sliderUpdate(Storage.createDaysWithTasksArray(), Storage.getIdListObject(), MapUtility.addMarkerToMapViewMap, MapUtility.removeMarker, MarkerModel.getMarkersObject());
      ClickEventsCalendarDOMView.createTaskBoxes(Storage.createDaysWithTasksArray(), Storage.getTextValueFromIdListObject);
    });

    ClickEventsCalendarDOMView.addCalendarViewButtonClickListener('data-button-calendar-view', function addCalendarViewButtonClickEventHandler() {
      ClickEventsCalendarDOMView.showCalendarView();
      ClickEventsCalendarDOMView.hideMapView();
      ClickEventsCalendarDOMView.removeTaskBoxes();
      ClickEventsCalendarDOMView.removeAllMarkersFromMapView(Storage.createDaysWithLocationsArray(), MapUtility.removeMarker, MarkerModel.getMarkersObject());
    });

    ClickEventsCalendarDOMView.addFindButtonClickListener('data-button-find', function addFindButtonClickEventHandler() {
      console.log("Finding");

    console.log(Storage.getLocationFromIdListObject(Storage.getCurrentCalendarDay()));
    XhrPostcodeRequester.getPostCode(ClickEventsCalendarDOMView.getUserPostcodeInput(), function functioncalledwhendone(error, data) {

      if (error) {
        return;
      }
      Storage.setLocationOfIdListObject(data, Storage.getCurrentCalendarDay());
      if (MarkerModel.getMarkersObject()[Storage.getCurrentCalendarDay()]) {
        MapUtility.removeMarker(MarkerModel.getMarkersObject()[Storage.getCurrentCalendarDay()]);
      }
      MapUtility.createMapViewMarkers(Storage.createDaysWithLocationsArray(), Storage.getIdListObject(), MarkerModel.storeMarkersInMarkersObject);
      MapUtility.addMarkerToBlankFormMap(MarkerModel.getMarkersObject()[Storage.getCurrentCalendarDay()]);
    });

          
      


  

  


    });    
      
  })();


});