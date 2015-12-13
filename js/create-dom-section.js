function createDomSection() {

	var stylesImport = $('<link href="css/styles.css" rel="stylesheet"></link>');
	$('head').append(stylesImport);
	var bootstrapImport = $('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"></link>');
	$('head').append(bootstrapImport);

	var mainDiv = $('<div class="container-fluid" id="main-padding"></div>');
	$('body').append(mainDiv);

	var blankForm = $('<div class="form" id="blank-form"></div>').hide();
	$('body').append(blankForm);

	var ammendForm = $('<div class="form" id="ammend-form"></div>').hide();
	$('body').append(ammendForm);

	var mapView = $('<div class="container" id="map-view"></div>').hide();
	$('body').append(mapView);
}