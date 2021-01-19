import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  uppercase_value:string = '';
  datepipe_value:string = '';
  currency_value:number;

  onUppercaseInput(e:string){
    this.uppercase_value = e;
  }

  onDateInput(e:string){
    this.datepipe_value = e;
  }

  onCurrencyInput(e:string){
    this.currency_value = parseInt(e);
  }

  car:object = {
    marca: 'Tesla',
    modello: 'Model 3',
    colore: 'Rosso',
    accelerazione(){
      console.log('velocità massima')
    }
  }

}
