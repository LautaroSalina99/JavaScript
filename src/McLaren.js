class McLaren {
    constructor(modelo, color, motor, transmision, chasis) {
        this.modelo = modelo;
        this.color = color;
        this.motor = motor;
        this.transmision = transmision;
        this.chasis = chasis;
        this.encendido = false;
        this.estado = 'Detenido';
    }

    encender() {
        this.encendido = true;
        this.estado = 'Encendido';
    }

    apagar() {
        this.encendido = false;
        this.estado = 'Apagado';
    }

    acelerar() {
        if (this.encendido) {
            this.estado = 'Acelerando';
        } else {
            console.log("No se puede acelerar. El McLaren está apagado.");
        }
    }

    detener() {
        this.estado = 'Detenido';
    }
}

module.exports = McLaren;