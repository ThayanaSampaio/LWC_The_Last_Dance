import { LightningElement, track } from 'lwc';


export default class Lwc_cal_01 extends LightningElement {
    @track num1 = 0;
    @track num2 = 0;
    @track num3 = 0;
    @track isAdd = false;
    @track isSub = false;
    @track isMul = false;
    @track isDiv = false;
    @track isRefresh = false;
    @track errorMessage = '';

    handleNum1Change(event) {
        this.num1 = event.target.value;
    }

    handleNum2Change(event) {
        this.num2 = event.target.value;
    }

    addAction() {
        let num1 = parseInt(this.num1);
        let num2 = parseInt(this.num2);
        if (isNaN(num1) || isNaN(num2)) {
            this.errorMessage = 'Por favor, insira números válidos.';
            return;
        }
        let num3 = num1 + num2;
        this.num3 = num3;
        this.isAdd = true;
        this.isRefresh = true;
        this.isMul = false;
        this.isSub = false;
        this.isDiv = false;
        this.errorMessage = '';
    }

    subtractionAction() {
        let num1 = parseInt(this.num1);
        let num2 = parseInt(this.num2);
        if (isNaN(num1) || isNaN(num2)) {
            this.errorMessage = 'Por favor, insira números válidos.';
            return;
        }
        let num3 = num1 - num2;
        this.num3 = num3;
        this.isSub = true;
        this.isRefresh = true;
        this.isAdd = false;
        this.isMul = false;
        this.isDiv = false;
        this.errorMessage = '';
    }

    multiplicationAction() {
        let num1 = parseInt(this.num1);
        let num2 = parseInt(this.num2);
        if (isNaN(num1) || isNaN(num2)) {
            this.errorMessage = 'Por favor, insira números válidos.';
            return;
        }
        let num3 = num1 * num2;
        this.num3 = num3;
        this.isMul = true;
        this.isRefresh = true;
        this.isAdd = false;
        this.isSub = false;
        this.isDiv = false;
        this.errorMessage = '';
    }

    divisionAction() {
        let num1 = parseInt(this.num1);
        let num2 = parseInt(this.num2);
        if (isNaN(num1) || isNaN(num2)) {
            this.errorMessage = 'Por favor, insira números válidos.';
            return;
        }
        if (num2 === 0) {
            this.errorMessage = 'Não é possível dividir por zero.';
            return;
        }
        let num3 = num1 / num2;
        this.num3 = num3;
        this.isDiv = true;
        this.isRefresh = true;
        this.isAdd = false;
        this.isSub = false;
        this.isMul = false;
        this.errorMessage = '';
    }

    resetAction() {
        this.num1 = '';
        this.num2 = '';
        this.num3 = '';
        this.isAdd = false;
        this.isSub = false;
        this.isMul = false;
        this.isDiv = false;
        this.isRefresh = false;
        this.errorMessage = '';
    }
}