import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets',
      alt: 'Ícone de conhecimento de ',
    },
    {
      src: 'assets',
      alt: 'Ícone de conhecimento de ',
    },
    {
      src: 'assets',
      alt: 'Ícone de conhecimento de ',
    },
    {
      src: 'assets',
      alt: 'Ícone de conhecimento de ',
    },
    {
      src: 'assets',
      alt: 'Ícone de conhecimento de ',
    },
  ]);
}
