

var Reserva = function (horario, comensales, precioPorPersona, codigoDescuento) {
    this.horario = horario; // Objeto Date "December 17, 2019 09:30:00"
    this.comensales = comensales; // NÚMERO ENTERO
    this.precioPorPersona = precioPorPersona; // NÚMERO ENTERO
    this.codigoDescuento = codigoDescuento; // STRING
}



Reserva.prototype.montoPorcentual = function (coeficiente) {
    let base = this.calcularPrecioBase();

    return base *= coeficiente
}

Reserva.prototype.calcularPrecioBase = function () {
    let cantidad = this.comensales;
    let precioUnitario = this.precioPorPersona;
    let precioBase = cantidad * precioUnitario;

    return precioBase;
}


Reserva.prototype.obtenerAdicionales = function () {
    let fechaReserva = this.horario;
    let diaReservado = fechaReserva.getDay();
    let horarioReservado = fechaReserva.getHours();
    let condicionDias = (diaReservado === 0 || diaReservado === 5 || diaReservado === 6);
    let condicionHorarios = (horarioReservado === 13 || horarioReservado === 20);

    return condicionDias ? this.montoPorcentual(0.10) : condicionHorarios ? this.montoPorcentual(0.05) : null;

}

Reserva.prototype.obtenerDescuentos = function () {
    let codigo = this.codigoDescuento;
    let descuentoQuince = (codigo === "DES15");
    let descuentoDoscientos = (codigo === "DES200");
    let descuentoValorUnaPersona = (codigo === "DES1");

    return descuentoQuince ? this.montoPorcentual(0.15) : descuentoDoscientos ? 200 : descuentoValorUnaPersona ? this.precioPorPersona : null;
}


Reserva.prototype.calcularPrecioTotal = function () {
    let base = (this.calcularPrecioBase());
    let adicionales = (this.obtenerAdicionales());
    let descuentos = (this.obtenerDescuentos());

    return ((base + adicionales) - descuentos);

}

