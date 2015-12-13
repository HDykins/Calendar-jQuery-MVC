var Storage = (function Storage() {

  var idListObject = {};
  var currentCalendarDay;

  function getIdListObject() {
    return idListObject;
  }

  function getTextValueFromIdListObject(currentCalendarDay) {
    return getIdListObject()[currentCalendarDay].textValue;
  }

  function setTextValueOfIdListObject(currentCalendarDay, newTask) {
    getIdListObject()[currentCalendarDay].textValue = newTask;
  }

  function getCurrentCalendarDay() {
    return currentCalendarDay;
  }

  function storeCurrentCalendarDay(newCurrentCalendarDay) {
    currentCalendarDay = newCurrentCalendarDay
  }

  function getLocationFromIdListObject(currentCalendarDay){
    return {
      'lat': getIdListObject()[currentCalendarDay].latitude,
      'lng': getIdListObject()[currentCalendarDay].longitude
    };
  }

  function createDaysWithLocationsArray() {
    var daysWithLocations = [];
    var property;
    
    for (property in getIdListObject()) {
      if (getIdListObject()[property].latitude !== null) {
        daysWithLocations.push(property);
      }
    }
    return daysWithLocations;
  }

  function createDaysWithTasksArray() {
    var daysWithTasks = [];
    var property;
    
    for (property in getIdListObject()) {
      if (getIdListObject()[property].textValue.length) {
        daysWithTasks.push(property);
      }
    }
    return daysWithTasks;
  }

  function setLocationOfIdListObject(data, currentCalendarDay) {
    getIdListObject()[currentCalendarDay].latitude = data.result.latitude;
    getIdListObject()[currentCalendarDay].longitude = data.result.longitude;
  }

  function removeLocationOfIdListObject(clearTask, currentCalendarDay) {
    getIdListObject()[currentCalendarDay].latitude = clearTask;
    getIdListObject()[currentCalendarDay].longitude = clearTask;
  }

  function assignInitialValuesToObjects(dateArray) {
    dateArray.forEach(function (element) {
       idListObject[element] = {textValue: "", latitude: null, longitude: null};
    });
  }

  return { 
    getIdListObject: getIdListObject,
    getTextValueFromIdListObject: getTextValueFromIdListObject,
    setTextValueOfIdListObject: setTextValueOfIdListObject,
    getCurrentCalendarDay: getCurrentCalendarDay,
    storeCurrentCalendarDay: storeCurrentCalendarDay,
    getLocationFromIdListObject: getLocationFromIdListObject,
    createDaysWithLocationsArray: createDaysWithLocationsArray,
    createDaysWithTasksArray: createDaysWithTasksArray,
    setLocationOfIdListObject: setLocationOfIdListObject,
    removeLocationOfIdListObject: removeLocationOfIdListObject,
    assignInitialValuesToObjects: assignInitialValuesToObjects
  }; 
})();