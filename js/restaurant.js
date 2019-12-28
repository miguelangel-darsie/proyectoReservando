var Restaurant = function (id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function (horarioReservado) {
    const resultado = this.horarios.filter(horario => horario !== horarioReservado)
    this.horarios = resultado;

}

Restaurant.prototype.calificar = function (nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion <= 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length) {
        let promedio = promediar(this.calificaciones);
        let condicion = ((promedio > 0) && (promedio <= 10));
        if (condicion) {
            return promedio;
        } else { alert('Estamos teniendo problemas para realizar cálculos. Vuelva a intentarlo más tarde.') }
    } else {
        return 0;
    }
}


// Funciones auxiliares
function sumatoria(arr) {
    return arr.reduce((a, b) => a + b);
};


function promediar(arr) {
    let promedio = this.sumatoria(arr) / arr.length;
    return Math.round(promedio * 10) / 10;
}



