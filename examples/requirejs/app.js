require.config({
    baseUrl: '../../dist',
});

requirejs(['gomaps'],
function   (GoMaps) {
	GoMaps.init({
		key: 'AIzaSyAjN7VyImzPiqQvpVeNzFOTRXLWy7tAejg',
		markerIconUrl : '../assets/my-marker.png',
		mapTypeId : 'satellite',
		disableDefaultUI : true,
		zoom: 8
	});
});
