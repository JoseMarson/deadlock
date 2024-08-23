import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateProcess2ModalComponent } from '../create-process-2-modal/create-process-2-modal.component';
import { BankerService } from 'src/app/shared/services/banker.service';


@Component({
  selector: 'app-resource-manager',
  templateUrl: './resource-manager.component.html',
  styleUrls: ['./resource-manager.component.scss']
})
export class ResourceManagerComponent {
  bankerForm!: FormGroup;
  aplicarConfiguracoesEvent = new EventEmitter<number>();
  tipoRecurso: number = 0;
  processoCriado = false;
  modoReset: boolean = false;

  constructor(private formBuilder: FormBuilder, private modal: MatDialog, private cdr: ChangeDetectorRef, private bankerService: BankerService ) {
    this.bankerForm = this.formBuilder.group({ 
      creditosRecursoArray: this.formBuilder.array([]),
      quantidadeRecurso: [1],
      selectedOption: [''],
    });
    this.bankerForm.get('quantidadeRecurso')?.valueChanges.subscribe((newValue) => {
      this.atualizarCreditosRecursoArray(newValue);
    });
    this.atualizarCreditosRecursoArray(this.bankerForm.get('quantidadeRecurso')?.value);
  }

  ngOnInit() {
    this.bankerService.currentProcess$.subscribe(valor => {
      this.processoCriado = valor;
    });
  
    this.bankerService.currentCreatedRecurses$.subscribe(valor => {
      const creditosRecursoArray = this.bankerForm.get('creditosRecursoArray') as FormArray;
    });
  }
  
  atualizarCreditosRecursoArray(novaQuantidade: number): void {
    const creditosRecursoArrayControl = this.bankerForm.get('creditosRecursoArray') as FormArray;
  
    creditosRecursoArrayControl.clear();
  
    const quantidade = novaQuantidade > 0 ? novaQuantidade : 1;
  
    for (let i = 0; i < quantidade; i++) {
      creditosRecursoArrayControl.push(this.formBuilder.control(1));
    }
   
  }
  
 
  creditosDoRecursoValueArray(x: number): number {
    const creditosRecursoArrayControl = this.bankerForm.get('creditosRecursoArray') as FormArray;
  
      const control = creditosRecursoArrayControl.at(x) as FormControl;
      return control.value;
    
  }
  get quantidadeRecursoValue(): number | undefined {
    return this.bankerForm.get('quantidadeRecurso')?.value;
  }  
  

  decrementarQuantidade(index?: number): void {
    if(index != null) this.atualizarQuantidade(-1, index);
    else this.atualizarQuantidade(-1);
    
  }

  incrementarQuantidade(index?: number): void {
    if(index != null) this.atualizarQuantidade(1, index);
    else this.atualizarQuantidade(1);
  }

  private atualizarQuantidade(valor: number, index?: number): void {
    if (index == null && this.quantidadeRecursoValue && (this.quantidadeRecursoValue >= 1 && this.quantidadeRecursoValue <= 4) &&  valor+this.quantidadeRecursoValue >= 1 &&  valor+this.quantidadeRecursoValue <= 4) {
      let novoValor = this.quantidadeRecursoValue + valor;
      this.bankerForm.get('quantidadeRecurso')?.setValue(novoValor);
      this.markFormAsDirty();
    }
    else if(index != null && this.creditosDoRecursoValueArray(index) && (this.creditosDoRecursoValueArray(index)>= 1 && this.creditosDoRecursoValueArray(index) <= 20) &&  valor+this.creditosDoRecursoValueArray(index) >= 1 &&  valor+this.creditosDoRecursoValueArray(index) <= 20){
      let novoValor = this.creditosDoRecursoValueArray(index) + valor;
      this.getCreditControl(index).setValue(novoValor);
    }
  }
   
  private markFormAsDirty(): void {
    this.cdr.detectChanges();
  }

  openModal() { 
    this.modal.open(CreateProcess2ModalComponent, {
      data: { quantidadeRecurso:  this.bankerForm.get('quantidadeRecurso')?.value }
    });
  }

  getQuantityRange() {
    return Array.from({ length: this.bankerForm.get('quantidadeRecurso')?.value }, (_, index) => index);
  }

  getCreditControl(index: number): FormControl {
    const creditosRecursoArrayControl = this.bankerForm.get('creditosRecursoArray') as FormArray;
  
    if (creditosRecursoArrayControl && index >= 0 && index < creditosRecursoArrayControl.length) {
      return creditosRecursoArrayControl.at(index) as FormControl;
    }
  
    return new FormControl();
  }

  aplicarConfiguracoes(): void {

    this.modoReset = !this.modoReset;
    if(this.modoReset){
      const payload = {
        quantidadeRecurso: this.bankerForm.controls['quantidadeRecurso'].value,
        creditosRecursoArray: this.bankerForm.controls['creditosRecursoArray'].value
      }
      this.bankerService.setRecurses(payload)
      this.bankerService.updateProcessStatus(true);
    }
    else {
      this.bankerForm.controls['quantidadeRecurso'].setValue(1);
      this.bankerForm.controls['creditosRecursoArray'].setValue([1]);
      const payload = {
        quantidadeRecurso: 1,
        creditosRecursoArray: this.bankerForm.controls['creditosRecursoArray'].value
      };
      this.bankerService.setRecurses(payload);
      this.bankerService.updateProcessStatus(false);
    }
    
  }
}
