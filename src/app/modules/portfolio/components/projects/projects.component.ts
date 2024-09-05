import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'TODO',
      alt: 'Projeto Vida FulStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'TODO',
        },
      ],
    },
  ]);
}
