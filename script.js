document.getElementById("currentYear").innerHTML = new Date().getFullYear();
// const contentFiller = document.getElementById("content");


// for (i = 0; i <= 10; i += 1) {
//     contentFiller.appendChild(document.createElement("p"));
//     contentFiller.lastChild.innerHTML = 'Linha :' +i;
// }

document.addEventListener("DOMContentLoaded", function () {
	const calendarTarget = document.getElementById("calendar");
	const calendarPlugin = new FullCalendar.Calendar(calendarTarget, 
		{
			eventSources: 
			[
				{
					events: [
						{
							title  : 'CASAMENTO CÉLIA',
							start  : '2023-11-01'
						},
						{
							title  : 'VIAGEM AO SÍTIO',
							start  : '2023-11-05',
							end    : '2023-11-08'
						},
						{
							title  : 'ALMOÇO COM OS NOVATOS',
							start  : '2023-11-09T12:30:00',
							allDay : false // will make the time show
						}
					],
						color: "red",
						borderColor: "yellow",
						textColor: "white",
						backgroundColor: "rgb(0, 0, 0, 0.5)",
						initialView: "dayGridMonth",
						locale: "pt-br",
				}
			]
	});
	calendarPlugin.render();
});