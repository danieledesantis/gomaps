var GoogleMaps = require("../../dist/gomaps");

GoogleMaps.init({
	key: 'AIzaSyAjN7VyImzPiqQvpVeNzFOTRXLWy7tAejg',
	markerIconUrl : '../assets/my-marker.png',
	mapTypeId : 'satellite',
	disableDefaultUI : true,
	zoom: 8
});
