CShapJavaScriptDates
====================
JavaScript and .Net handle dates quite differently. 
JavaScript begins its count in milliseconds starting Jan 1, 1970. The system time for .Net begins its count in ticks (100 nano seconds) starting Jan 1, 1.

When creating a JavaScript Date from ticks, you'll need to use the ToUniversalTime method because JavaScript always using UTC. So as a contrived example, if you were to use html helpers, this usage provide the correct tick count:

Server:
@Html.TextAreaFor(model=>model.date.ToUniversalTime().Ticks)

To create a JavaScript Date simply call the method with a number representing the .Net ticks as the argument:

Client:
var tickDate = CSharpJsDates.JsDateFromTicks(635409917677196193);
//Mon Jul 14 2014 22:29:27 GMT-0500 (Central Daylight Time)

If converting from a JavaScript Date object to ticks to C# DateTime, you may need to make a temporary DateTime instance:

Client:
var back = CSharpJsDates.JsDateToTicks(new Date());
//635409939054550000

Server:
var temp = new DateTime(635409939054550000);
var fromJsDate = new DateTime(temp.ToLocalTime().Ticks);
