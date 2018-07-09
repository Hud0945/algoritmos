class Retangulo {
    constructor (base, altura) {
      this._base = base;
      this._altura = altura;  
    }

    definirBase(base) {
        this._base = base;
    }

    definirAltura(altura) {
        this.altura = altura;
    }

    obterBase() {
        return this._base;
    }

    obterAltura() {
        return this.altura;
    }

    obterArea() {
        return this.base * this._altura;
    }

    obeterPerimetro() {
        return 2 * (this._base + this._altura);
    }

}