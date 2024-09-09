import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
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

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
