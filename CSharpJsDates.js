//C# DateTime class starts counting ticks from 1/1/0001
//JavaScript's Date starts counting milliseconds from 1/1/1970   
var CSharpJsDates = (function() {
	var mSec = 1000;
	var mMin = mSec * 60;
	var mHour = mMin * 60;
	var mDay = mHour * 24;
	var TicksPerMillisecond = 10000;
	var mYearOneTo1970 = 62135596800000;
	var dates = [];
	var tickList = [];
	
	var CsJs = {};
	CsJs.JsDateFromTicks = function(ticks) {
		if(typeof ticks === 'number') {
			return new Date((ticks/TicksPerMillisecond) - mYearOneTo1970);
		} else {
			return false;
		}
	}
	
	CsJs.JsDateToTicks = function(dateObj) {
		//is object instance of Date
		if(typeof dateObj.getDate === 'function') {
			return  ((dateObj.valueOf() * TicksPerMillisecond) + (mYearOneTo1970 * TicksPerMillisecond)); 
		} else {
			return -1;
		}
	}
	
	CsJs.setDateList = function(date) {
		if(typeof date === 'string' || typeof date === 'number') {
			dates.push(new Date(date));
		} 
		else if(typeof date.getDate === 'function') {
			dates.push(date);
		} 
	}
	
	CsJs.getDateList = function() {
		return dates;
	}
	
	CsJs.setTickList = function(ticks) {
		if(typeof ticks === 'number') {
			tickList.push(ticks);
		} 
	}
	
	CsJs.getTickList = function() {
		return tickList;
	}
	
	return CsJs;
	
})();



