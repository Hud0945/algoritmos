class Retangulo {
    constructor (base, altura) {
      this._base = base;
      this._altura = altura;  
    }

    mudarBase(base) {
        this._base = base;
    }

    mudarAltura(altura) {
        this.altura = altura;
    }

    obterArea() {
        return this.base * this._altura;
    }

    obeterPerimetro() {
        return 2 * (this._base + this._altura);
    }

}