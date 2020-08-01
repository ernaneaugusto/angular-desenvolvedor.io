import { Usuario } from './models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit {
    public cadastroForm: FormGroup;
    public usuario: Usuario;
    public MASKS = utilsBr.MASKS;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        const senhaRageLength = [6, 15];
        const senha = new FormControl(
            '',
            [Validators.required, Validators.maxLength(15), CustomValidators.rangeLength(senhaRageLength)]
        );
        const senhaConfirmacao = new FormControl(
            '',
            [Validators.required, Validators.maxLength(15), CustomValidators.rangeLength(senhaRageLength), CustomValidators.equalTo(senha)]
        );

        this.cadastroForm = this.fb.group({
            nome: [
                '',
                [Validators.required]
            ],
            cpf: [
                '',
                [Validators.required, NgBrazilValidators.cpf]
            ],
            email: [
                '',
                [Validators.required]
            ],
            senha: senha,
            senhaConfirmacao: senhaConfirmacao,
        });
    }

    public adicionarUsuario() {
        if (this.cadastroForm.invalid) {
            return;
        }
        this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
        console.log("#### this.usuario", this.usuario);
    }

}