import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonToggle, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonToggle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    FormsModule, 
    CommonModule,
    ReactiveFormsModule
  ],
})
export class HomePage {
  formulario: FormGroup;
  mostrar_lista_criaturas: boolean = false;
  mostrar_lista_catalogo: boolean = false;
  mostrar_formulario: boolean = false;
  proximoId: number = 6;

  listaCriaturas: Criatura[] = [
    { id: 1, nome: `Shukaku`, tipo: `Besta de cauda`, nivelPerigo: 7.9, catalogada: true, descricao: `Besta de uma cauda que controla a areia` },
    { id: 2, nome: `Dio Drando`, tipo: `Vampiro da máscara de pedra`, nivelPerigo: 8.6, catalogada: false, descricao: `Vampiro com poder ancestral, pode infectar pessoas` },
    { id: 3, nome: `Sanakan`, tipo: `Safe guard`, nivelPerigo: 6.8, catalogada: false, descricao: `Exemplar de espécie biónica que elimina humanos sem o "net terminal gene"` },
    { id: 4, nome: `White Gauna`, tipo: `Gauna`, nivelPerigo: 9.9, catalogada: true, descricao: `Monstros capazes de absorver humanos, escalam de tamanho e perigo extremamente rápido` },
    { id: 5, nome: `Gedou Mazou`, tipo: `Estátua demoniáca`, nivelPerigo: 7.1, catalogada: true, descricao: `Estátua do cadáver da jubi, pode ser controlado com o rinnegan` },
  ];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required, Validators.minLength(3)]],
      nivelPerigo: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      descricao: ['', [Validators.required, Validators.minLength(10)]],
      catalogada: [false]
    });
  }

  listarCriaturas() {
    this.mostrar_lista_criaturas = !this.mostrar_lista_criaturas;
  }

  listarCatalogo() {
    this.mostrar_lista_catalogo = !this.mostrar_lista_catalogo;
  }

  toggleFormulario() {
    this.mostrar_formulario = !this.mostrar_formulario;
  }

  filtrarCriaturas(catalogada: boolean) {
    return this.listaCriaturas.filter(Criaturas => Criaturas.catalogada === catalogada);
  }

  adicionarCriatura() {
    if (this.formulario.valid) {
      const novaCriatura: Criatura = {
        id: this.proximoId++,
        ...this.formulario.value
      };

      this.listaCriaturas.push(novaCriatura);
      this.formulario.reset();
      this.mostrar_formulario = false;
      alert('Criatura adicionada com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  removerCriatura(id: number) {
    this.listaCriaturas = this.listaCriaturas.filter(criatura => criatura.id !== id);
  }
}

export type Criatura = {
  id: number;
  nome: string;
  tipo: string;
  nivelPerigo: number;
  catalogada: boolean;
  descricao: string;
};
