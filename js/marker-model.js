var MarkerModel = (function () {

	var markersObject = {};

	function getMarkersObject() {
		return markersObject;
	}

	function storeMarkersInMarkersObject(element, marker) {
		getMarkersObject()[element] = marker;
	}

	return {
		getMarkersObject: getMarkersObject,
		storeMarkersInMarkersObject: storeMarkersInMarkersObject
	};

})();