var SliderUtility = (function () {

	function sliderUpdate(daysWithTasksArray, idListObject, addMarkerToMapViewMap, removeMarker, markersObject) {

		$('#slider').slider({
		  range: true,
		  min: 1,
		  max: 30,
		  values: [ 1, 30 ],
		  slide: function( event, ui ) {
		  	setSliderDateHeaderValues(ui);
			daysWithTasksArray.map(function(taskNumber) {
				var minSliderValue = ui.values[0];
				var maxSliderValue = ui.values[1];
				if (minSliderValue <= taskNumber && maxSliderValue >= taskNumber) {
			      $('[id="task-row' + taskNumber + '"]').show();
			      $('[id="task-text-box' + taskNumber + '"]').show().text(taskNumber + ": " + idListObject[taskNumber].textValue);
			  	}
			  	else if (minSliderValue > taskNumber){
			  		$('[id="task-row' + taskNumber + '"]').hide();
			  		$('[id="task-text-box' + taskNumber + '"]').hide().text('');
			  	}
			  	else if (maxSliderValue < taskNumber) {
			  		$('[id="task-row' + taskNumber + '"]').hide();
			  		$('[id="task-text-box' + taskNumber + '"]').hide().text('');
			  	}
		  	});

		  	Storage.createDaysWithLocationsArray().map(function(taskNumber) {
				var minSliderValue = ui.values[0];
				var maxSliderValue = ui.values[1];
				if (minSliderValue == taskNumber || maxSliderValue == taskNumber) {
					addMarkerToMapViewMap(MarkerModel.getMarkersObject()[taskNumber]);
				}
				else if (minSliderValue > taskNumber){
					removeMarker(markersObject[taskNumber]);
			  	}
			  	else if (maxSliderValue < taskNumber) {
			  		removeMarker(markersObject[taskNumber]);
			  	}
			});
		  }
		});

		$( "#amount" ).val(" " + $( "#slider" ).slider( "values", 0 ) + "th - " + $( "#slider" ).slider( "values", 1 ) + "th" );
	}

	function setSliderDateHeaderValues(ui) {
		$( "#amount" ).val( " " + ui.values[ 0 ] + "th - " + ui.values[ 1 ] + "th" );
	}
	
	return {
		setSliderDateHeaderValues: setSliderDateHeaderValues,
		sliderUpdate: sliderUpdate
	};

})();