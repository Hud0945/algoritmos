class Contacorrente {
    constructor (conta,correntista,saldo) {
            this._conta = conta;
            this._correntista = correntista;
            this._saldo = saldo;
    }
    alterarNome(novocorrentistanome) {
        this._correntista = novocorrentistanome;
    }
    deposita(valor){
        if(valor > 0) {
          this._saldo += valor; 
          return true; 
        }
        return false;
    }
    saca(valor) {
        if(valor > 0 && valor <= this._saldo) {
            this._saldo -= valor; 
            return true;
        }
        return false;
        
    }

    transferir(valor, contaDestino) {
        if(this.saca(valor)) {
            contaDestino.deposita(valor);
            return true;
        }
        return false;
    }

    toString() {
        return '\ Conta {\ Correntista:   '+this._correntista+', \ numero: '+this._numero+', \ saldo: '+this._saldo+' \
     }';
    }
}