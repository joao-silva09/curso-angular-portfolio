import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estagiário de Desenvolvimento de Software Fullstack',
        p: 'Maxicon Sistemas | ABR 2024 - Present',
      },
      text: '<p>exercendo a função de Office-boy, executando arquivamento de documentos de departamento pessoal e fiscal, abertura e fechamento de empresas e movimentação, emissão e lançamento de notas fiscais, elaboração de planilhas para controle de horas extras e registros diversos via sistema contábil.</p>',
    },
    {
      summary: {
        strong: 'Estagiário de Desenvolvimento de Software Fullstack',
        p: 'Lar Cooperativa Agroindustrial | AGO 2021 - AGO 2023',
      },
      text: '<p>Exercendo a função de estagiário, desenvolvendo e dando suporte para aplicações web de uso interno da cooperativa e criação de novas ferramentas, fornecendo agilidade e praticidade no trabalho dos usuários das áreas afetadas pelos sistemas desenvolvidos. Experiência na criação de APIs na Linguagem de Programação C#, criação de páginas web com React, Typescript, Redux, Material UI e ferramentas diversas.</p>',
    },
    {
      summary: {
        strong: 'Office Boy',
        p: 'Escritório Contábil Águia | FEV 2019 - JUL 2021',
      },
      text: '<p>Exercendo a função de Office-boy, executando arquivamento de documentos de departamento pessoal e fiscal, abertura e fechamento de empresas e movimentação, emissão e lançamento de notas fiscais, elaboração de planilhas para controle de horas extras e registros diversos via sistema contábil.</p>',
    },
  ]);
}
