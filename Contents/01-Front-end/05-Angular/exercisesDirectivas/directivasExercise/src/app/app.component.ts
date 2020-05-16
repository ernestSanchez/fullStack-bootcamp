import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  events: object[] = [
    { "event": "NodeJs", "dateIni": "25/05/2020 19:00", "nameFacilit": "pedro", "mail": "carajo@com", "MaxNum": "" },
    { "event": "javaScript", "dateIni": "30/08/2019 15:00", "nameFacilit": "ramona", "mail": "cascarla@com", "MaxNum": "" },
    { "event": "CSS y HTML", "dateIni": "10/06/2020 17:00", "nameFacilit": "paco", "mail": "chuparla@com", "MaxNum": "" }
  ]

  adedUser() {
    let InfoEvent: string = this.getInput('.event-name');
    let InfoDate: string = this.getInput('.event-date');
    let InfoqTime: string = this.getInput('.event-time');
    let InfoName: string = this.getInput('.event-facilitador');
    let InfoNum: string = this.getInput('.event-MaxNum');
    // let neWnum: number = parseInt(InfoNum)

    let userAdd = { "event": InfoEvent, "dateIni": InfoDate + " " + InfoqTime, "nameFacilit": InfoName, "MaxNum": InfoNum }
    this.events.push(userAdd)



  }

  getInput(clase: string) {
    let infoInput: string = (<HTMLInputElement>document.querySelector(clase)).value

    return infoInput;
  }
  deleteEvent() {
    this.events.pop()
  }

  countNumbers(i,valor) {

    // let numActual = this.events[i]

    if (valor > this.events[i]['MaxNum']) {
      alert('te has pasado')
    }

    // else {
    //   this.events[i]['Num'] = numActual
    // }
  }
}
