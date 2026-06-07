import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule],
})
export class HomePage {
  constructor() {}

  mostrar_lista_criaturas:boolean = false
  mostrar_lista_catalogo:boolean = false

  

  listaCriaturas: Criatura[] = [
    {id: 1, nome: `Shukaku`, tipo: `Besta de cauda`, nivelPerigo: 7.9, catalogada: true, descricao: `Besta de uma cauda que controla a areia`},
    {id: 2, nome: `Dio Drando`, tipo: `Vampiro da máscara de pedra`, nivelPerigo: 8.6, catalogada: false, descricao: `Vampiro com poder ancestral, pode infectar pessoas`},
    {id: 3, nome: `Sanakan`, tipo: `Safe guard`, nivelPerigo: 6.8, catalogada: false, descricao: `Exemplar de espécie biónica que elimina humanos sem o "net terminal gene"`},
    {id: 4, nome: `White Gauna`, tipo: `Gauna`, nivelPerigo: 9.9, catalogada: true, descricao: `Monstros capazes de absorver humanos, escalam de tamanho e perigo extremamente rápido`},
    {id: 5, nome: `Gedou Mazou`, tipo: `Estátua demoniáca`, nivelPerigo: 7.1, catalogada: true, descricao: `Estátua do cadáver da jubi, pode ser controlado com o rinnegan`},
  ];



listarCriaturas(){
  this.mostrar_lista_criaturas = !this.mostrar_lista_criaturas
}
listarCatalogo(){
  this.mostrar_lista_catalogo = !this.mostrar_lista_catalogo
}
filtrarCriaturas(catalogada: boolean){
  return this.listaCriaturas.filter(Criaturas => Criaturas.catalogada ===  catalogada)
}
}

export type Criatura = {
  id: number
  nome: string
  tipo: string
  nivelPerigo: number
  catalogada: boolean
  descricao: string
};