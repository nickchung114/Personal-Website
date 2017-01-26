/* not working because next page loads too quickly */
/* http://stackoverflow.com/questions/18873574/css-transition-property-on-page-exit */
window.onbeforeunload = function (e) {
	console.log('hello');
    document.getElementsByTagName('body')[0].className = 'out';
}