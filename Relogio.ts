class Relogio {

/** 
 * DataAtual (object) instance of Date() 
*/
DataAtual = new Date;

    /**
     * Obtem hora atual do sistema  
     */     
    get Hora() {
        return this.DataAtual.getHours;
    }

    /**
     * Obtem minutos atual do sistema
     */
    get Minutos() {
        return this.DataAtual.getMinutes;
    }

    /**
     * Obtem segundos atual do sistema
     */
    get Segundos() {
        return this.DataAtual.getSeconds;
    }

    /**
     * Obtem MiliSeg atual do sistema
     */
    get MiliSeg() {
        return this.DataAtual.getMilliseconds;
    }

}

Object.seal(Relogio);
export = Relogio;