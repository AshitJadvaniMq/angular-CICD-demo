import { Component } from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from '@fullcalendar/multimonth'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'events-fullcalendar';
  calendarOptions: any;

  constructor(){
    this.calendarOptions = {
      plugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        multiMonthPlugin,// needed for dateClick
      ],
      scrollTime: '00:00',
      headerToolbar: {
        left: 'createEventBtn',
        center: 'prev title next',
        right: 'timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear'
      },
      initialView: 'timeGridDay',
      events:[
        {
          "id": "7d31f08a-1d79-421f-a2ac-f2e752a3f84e",
          "title": "Event with no checks",
          "startRecur": "2023-01-20",
          "endRecur": "2023-01-20",
          "startTime": "11:00",
          "endTime": "18:30",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-20"
          }
        },
        {
          "id": "4b924502-08a5-46f7-867f-8579595b2497",
          "title": "event with mandatory check in and with other check",
          "startRecur": "2023-01-20",
          "endRecur": "2023-01-20",
          "startTime": "15:00",
          "endTime": "20:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-21"
          }
        },
        {
          "id": "aadfbec6-51c5-41a1-a55e-249eebda9bc5",
          "title": "check in out status check with multiple user",
          "startRecur": "2023-01-20",
          "endRecur": "2023-01-21",
          "startTime": "12:00",
          "endTime": "18:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-21"
          }
        },
        {
          "id": "15493b9b-ba59-451e-9fd8-886185b03a50",
          "title": "Maulesh Event's 2",
          "startRecur": "2023-01-25",
          "endRecur": "2023-01-30",
          "startTime": "12:00",
          "endTime": "06:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-30"
          }
        },
        {
          "id": "2c69bbc5-1a33-4372-a8af-3eabf8038672",
          "title": "Hiring 2023QA",
          "startRecur": "2023-01-25",
          "endRecur": "2023-01-26",
          "startTime": "12:00",
          "endTime": "03:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-26"
          }
        },
        {
          "id": "083ae20f-d052-4f36-b029-3494e0ebec49",
          "title": "Test Mail",
          "startRecur": "2023-01-25",
          "endRecur": "2023-01-27",
          "startTime": "07:00",
          "endTime": "19:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-27"
          }
        },
        {
          "id": "b3a57fa7-8576-4af0-828d-89205dd64f6b",
          "title": "Check status once completed event and after edit status does not change ",
          "startRecur": "2023-01-27",
          "endRecur": "2023-01-28",
          "startTime": "08:00",
          "endTime": "20:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-28"
          }
        },
        {
          "id": "e29ebffc-fd82-4a30-85bc-47b682d79f4b",
          "title": "Event with no mandatory and other check ",
          "startRecur": "2023-02-16",
          "endRecur": "2023-02-17",
          "startTime": "06:00",
          "endTime": "16:30",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-29"
          }
        },
        {
          "id": "6da1460e-bbdb-4272-8702-33e9d9bea33b",
          "title": "Test All changes 2",
          "startRecur": "2023-01-28",
          "endRecur": "2023-01-28",
          "startTime": "12:00",
          "endTime": "12:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-28"
          }
        },
        {
          "id": "9bc4b4c5-32d4-4360-8812-c4d747976f5f",
          "title": "Checking changes2",
          "startRecur": "2023-01-28",
          "endRecur": "2023-01-29",
          "startTime": "02:00",
          "endTime": "03:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-29"
          }
        },
        {
          "id": "76621478-4795-46e2-b33d-78ab587b78cc",
          "title": "Movie Event organized by MQS",
          "startRecur": "2023-01-28",
          "endRecur": "2023-01-29",
          "startTime": "04:00",
          "endTime": "06:00",
          "backgroundColor": "#00ff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 1,
            "end": "2023-01-29"
          }
        },
        {
          "id": "f27a4a42-f434-45ae-876b-6fb973b43aa7",
          "title": "Step Test",
          "startRecur": "2023-01-29",
          "endRecur": "2023-01-31",
          "startTime": "07:00",
          "endTime": "18:00",
          "backgroundColor": "#a020f0",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 2,
            "end": "2023-01-31"
          }
        },
        {
          "id": "f13f2bf6-144a-4159-be8c-cadcaa4d6f88",
          "title": "Meetup Event 2023",
          "startRecur": "2023-01-30",
          "endRecur": "2023-01-31",
          "startTime": "03:00",
          "endTime": "06:53",
          "backgroundColor": "#a020f0",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 2,
            "end": "2023-01-31"
          }
        },
        {
          "id": "862a02ff-fa8e-4cad-ac86-9f2ea7ade721",
          "title": "Test event",
          "startRecur": "2023-01-31",
          "endRecur": "2023-01-31",
          "startTime": "12:00",
          "endTime": "06:00",
          "backgroundColor": "#ffff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 3,
            "end": "2023-01-31"
          }
        },
        {
          "id": "86bce105-455a-436d-b206-a669bc0c154a",
          "title": "Meeting link 304",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-02",
          "startTime": "12:00",
          "endTime": "13:00",
          "backgroundColor": "#a020f0",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 2,
            "end": "2023-02-02"
          }
        },
        {
          "id": "f84ba881-8bfd-4698-b370-12d7980ed4c8",
          "title": "MQS 222 year anniversary  ",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-01",
          "startTime": "06:30",
          "endTime": "23:00",
          "backgroundColor": "#ffa500",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 5,
            "end": "2023-02-01"
          }
        },
        {
          "id": "af8f7924-7cad-4b2c-a111-f4fe8b818c69",
          "title": "Johnny Bravo",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-01",
          "startTime": "07:00",
          "endTime": "08:30",
          "backgroundColor": "#ffa500",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 5,
            "end": "2023-02-01"
          }
        },
        {
          "id": "377c218a-b21b-4fff-b277-6d91c6f713f9",
          "title": "Johnny Bravo12",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-01",
          "startTime": "07:00",
          "endTime": "08:30",
          "backgroundColor": "#a020f0",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 2,
            "end": "2023-02-01"
          }
        },
        {
          "id": "43f0c6b1-d995-45fb-a17c-c698867f70dc",
          "title": "this is it...",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-01",
          "startTime": "07:00",
          "endTime": "08:30",
          "backgroundColor": "#a020f0",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 2,
            "end": "2023-02-01"
          }
        },
        {
          "id": "c80491e1-2514-4581-9a38-dd6dccbb5de2",
          "title": "31Jan Event",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-15",
          "startTime": "14:00",
          "endTime": "23:30",
          "backgroundColor": "#a020f0",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 2,
            "end": "2023-02-15"
          }
        },
        {
          "id": "e5fa2876-291e-4697-8bc0-ecec963ea845",
          "title": "Maulesh Event's 232323",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-02",
          "startTime": "09:00",
          "endTime": "18:00",
          "backgroundColor": "#a020f0",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 2,
            "end": "2023-02-02"
          }
        },
        {
          "id": "b271fe65-3c59-4c76-a931-84e9a606930b",
          "title": "New Event",
          "startRecur": "2023-01-31",
          "endRecur": "2023-02-02",
          "startTime": "12:00",
          "endTime": "03:00",
          "backgroundColor": "#ffff00",
          "textColor": "#000000",
          "overlap": false,
          "display": "inline-block",
          "extraParams": {
            "eventStatus": 3,
            "end": "2023-02-02"
          }
        }
      ],
      multiMonthMaxColumns:5,
      // eventOverlap: false,
      // slotEventOverlap: false,
      // eventMaxStack: 1,
      moreLinkDidMount: function (element:any) {
                    element.el.style.bottom = ""
                    element.el.style.opacity = "0.6"
                },
      };

  }
}

