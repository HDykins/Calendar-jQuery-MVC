var MapUtility = (function () {

	var myLatLng = {};
	var myMarker;
	var blankFormMap;
	var ammendFormMap;
	var mapViewMap;

	function initMapViewMap(myLatLngObject) {

		var mapInfoMapView = {
	    center: {lat: 51.507310, lng: -0.127646},
	    zoom: 8
	  	}

	  	mapViewMap = new google.maps.Map(document.getElementById('map-view-map'), mapInfoMapView);
	}

	function initBlankFormMap(myLatLngObject) {

	  	var mapInfoForms = {
	 	center: {lat: 51.507310, lng: -0.127646},
	    zoom: 8
		}

	 	blankFormMap = new google.maps.Map(document.getElementById('blank-form-map'), mapInfoForms);
	}

	function initAmmendFormMap(myLatLngObject) {

	  	var mapInfoForms = {
	 	center: myLatLngObject,
	    zoom: 16
		}

	  	ammendFormMap = new google.maps.Map(document.getElementById('ammend-form-map'), mapInfoForms);

	  	var myMarker = new google.maps.Marker({
	    position: myLatLngObject,
	    map: ammendFormMap
	  	});
	}

	function createMapViewMarkers(daysWithLocations, idListObject, storeMarkersInMarkersObject) {
		daysWithLocations.map(function(element) {
			var marker = new google.maps.Marker({
	    	position: {
	    		"lat": idListObject[element].latitude,
	    		"lng": idListObject[element].longitude
	    	},
	    	map: mapViewMap
			});
			storeMarkersInMarkersObject(element, marker);
	  	});
	}

	function addMarkerToMapViewMap(markerObject) {
		markerObject.setMap(mapViewMap);
	}

	function addMarkerToBlankFormMap(markerObject) {
		markerObject.setMap(blankFormMap);
	}

	function removeMarker(markerObject) {
  		markerObject.setMap(null);
	}

	return {
		initMapViewMap: initMapViewMap,
		initBlankFormMap: initBlankFormMap,
		initAmmendFormMap: initAmmendFormMap,
		createMapViewMarkers: createMapViewMarkers,
		addMarkerToMapViewMap: addMarkerToMapViewMap,
		addMarkerToBlankFormMap: addMarkerToBlankFormMap,
		removeMarker: removeMarker
	};

})();