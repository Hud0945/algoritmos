class Televisao {
    constructor(canal = 1,volume = 50 ) {
        this._canal = canal;
        this._volume = volume;
    }
    mudarCanal(canal) {
       return this._canal;   
    }
    aumentarVolume(numero) {
        if(numero == 0) {
            return true;

        }
    } 

 
}