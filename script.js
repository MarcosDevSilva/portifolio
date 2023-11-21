// config example for calendar: https://vkurko.github.io/calendar/
// documentation can be found here: https://github.com/vkurko/calendar#svelte-component--es6-module
// import { getCalendarData } from './calendarData.js';

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
import { getCalendarDataInfo } from './calendarData.js';

let ec = new EventCalendar(document.getElementById('ec'), {
	view: 'timeGridWeek',
	events: getCalendarDataInfo(),
});

ec.setOption('slotDuration', '00:30');
