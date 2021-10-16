import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listStudents:any[] = [ //uma estrutura de lista any permitindo queseja inserido qualquer valor//
    {name: 'Cristyan Roberto do Nascimento', registration: 3312224, course: 'Analise e Desenvolvimento', price: 299.56, date: '08/30/1994'},
    {name: 'Eric Robert John', registration: 1234567, course: 'Analise e Desenvolvimento', price: 299.56, date: '09/11/1995'},
    {name: 'John Oliveira dos Santos', registration: 6712345, course: 'Curso Angular Iniciante', price: 69.56, date: '02/07/1990'},
    {name: 'Jared Robert Walker', registration: 4567123, course: 'Curso Angular Avançado', price: 169.56, date: '10/06/1996'},
  ];
}
