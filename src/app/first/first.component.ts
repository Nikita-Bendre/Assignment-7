import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  public text: string = "";

  public marvellousInfosystem: string = "";


  fun1(): string {
    return "Marvellous Infosystems";
  }


  fun() {
    this.text = "Educating for Better tommorrow"
  }


  upperCase() {
    this.marvellousInfosystem = "Marvellous Infosystems".toUpperCase()

  }

  lowerCase() {
    this.marvellousInfosystem = "Marvellous Infosystems".toLowerCase()

  }

}
