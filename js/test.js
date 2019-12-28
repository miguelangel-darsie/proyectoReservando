
var expect = chai.expect;

// Testeo de la función reservarHorario

describe('Reservando un horario en un restaurante', function () {

    beforeEach('Creación de un Restaurant para testear', function () {
        restoTester = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);

    });

    it('Al reservar un horario, 13:00, éste se quita del array', function () {
        restoTester.reservarHorario("13:00");
        expect(restoTester.horarios).to.eql(["15:30", "18:00"]);

    })

    it('Al reservar dos horarios, 13:00 y 18:00, éstos se quitan del array', function () {
        restoTester.reservarHorario("13:00");
        restoTester.reservarHorario("18:00");
        expect(restoTester.horarios).to.eql(["15:30"]);

    })

    it('Al reservar todos los horarios, 13:00, 15:30 y 18:00, éstos se quitan del array', function () {
        restoTester.reservarHorario("13:00");
        restoTester.reservarHorario("15:30");
        restoTester.reservarHorario("18:00");
        expect(restoTester.horarios.length).to.equal(0);

    })


    it('Al ingresar un horario no existente, no se modifica el array de la propiedad horarios', function () {
        var arrayHorarios = restoTester.horarios;
        restoTester.reservarHorario("19:00");
        expect(restoTester.horarios).to.eql(arrayHorarios);

    })

    it('Al no ingresar parámetro, no se modifica el array de la propiedad horarios', function () {
        restoTester.reservarHorario();
        expect(restoTester.horarios).to.eql(["13:00", "15:30", "18:00"]);

    })

    it('Al ingresar un parámetro inválido, 1800,  no se modifica el array de la propiedad horarios', function () {
        var arrayHorarios = restoTester.horarios;
        restoTester.reservarHorario(1800);
        expect(restoTester.horarios).to.eql(arrayHorarios);

    })

    it('Al ingresar un parámetro inválido, 0, no se modifica el array de la propiedad horarios', function () {
        var arrayHorarios = restoTester.horarios;
        restoTester.reservarHorario(0);
        expect(restoTester.horarios).to.eql(arrayHorarios);

    })

    it('Al ingresar un parámetro inválido, -1800, no se modifica el array de la propiedad horarios', function () {
        var arrayHorarios = restoTester.horarios;
        restoTester.reservarHorario(-1800);
        expect(restoTester.horarios).to.eql(arrayHorarios);

    })

})




// Testeo de la función obtenerPuntuacion();

describe('Obteniendo la puntuación del restaurante', function () {

    beforeEach('Creación de un Restaurant para testear', function () {
        restoTester = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);

    });

    it('Dados los números, 6,7,9,10,5; se obtiene 7.4', function () {
        expect(restoTester.obtenerPuntuacion()).to.equal(7.4);

    })

    it('Al agregar una calificación de 5 al array, se obtiene 7', function () {
        restoTester.calificar(5);
        expect(restoTester.obtenerPuntuacion()).to.equal(7);

    })

    it('Sin calificaciones, se obtiene 0', function () {
        restoTester.calificaciones = [];
        expect(restoTester.obtenerPuntuacion()).to.equal(0);

    })
})


// Testeo de la función calificar();

describe('Calificando a un restaurante', function () {

    beforeEach('Creación de un Restaurant para testear', function () {
        restoTester = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);


    });

    it('La nueva calificación, 8, se agrega correctamente al array correspondiente', function () {
        restoTester.calificar(8);
        var ultimoElemento = restoTester.calificaciones.length - 1;
        expect(8).to.equal(restoTester.calificaciones[ultimoElemento])

    })  // Probé inicialmente con 10 y no estaba comprendido en el rango de la función. Se refactoriza para que lo admita.  


    it('La nueva calificación, 10, se agrega correctamente al array correspondiente', function () {
        restoTester.calificar(10);
        var ultimoElemento = restoTester.calificaciones.length - 1;
        expect(10).to.equal(restoTester.calificaciones[ultimoElemento])

    })

    it('La nueva calificación, 0, no provoca cambios en el array correspondiente', function () {
        var arrayControl = restoTester.calificaciones;
        restoTester.calificar(0);
        expect(arrayControl).to.eql(restoTester.calificaciones);

    })

    it('La nueva calificación no válida, -8, no provoca cambios en el array correspondiente', function () {
        var arrayControl = restoTester.calificaciones;
        restoTester.calificar(-8);
        expect(arrayControl).to.eql(restoTester.calificaciones);

    })

    it('La nueva calificación no válida, 12, no provoca cambios en el array correspondiente', function () {
        var arrayControl = restoTester.calificaciones;
        restoTester.calificar(-8);
        expect(arrayControl).to.eql(restoTester.calificaciones);

    })

    it('Ejecutar sin parametro, no provoca cambios en el array correspondiente', function () {
        var arrayControl = restoTester.calificaciones;
        restoTester.calificar();
        expect(arrayControl).to.eql(restoTester.calificaciones);

    })

    it('Se introduce un número en string, "8", no provoca cambios en el array correspondiente', function () {
        var arrayControl = restoTester.calificaciones;
        restoTester.calificar("8");
        expect(arrayControl).to.eql(restoTester.calificaciones);

    })
})

// Testeo de la función buscarPorId

describe('Buscando restaurante por ID', function () {

    it('Devuelve el dato solicitado', function () {
        var restoTester = new Restaurant(12, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", [8, 1, 4, 5, 5, 7]);
        //console.log(listado.buscarRestaurante(12));
        expect(listado.buscarRestaurante(12)).to.eql(restoTester);

    })

    it('Se introduce un número en string, no provoca cambios', function () {
        var listadoControl = listado;
        listado.buscarRestaurante("12");
        expect(listado).to.eql(listadoControl);

    })

    it('Se introduce un id no existente, no provoca cambios', function () {
        var listadoControl = listado;
        listado.buscarRestaurante(52);
        expect(listado).to.eql(listadoControl);

    })

    it('Se introduce un id inválido (negativo), no provoca cambios', function () {
        var listadoControl = listado;
        listado.buscarRestaurante(-52);
        expect(listado).to.eql(listadoControl);
    })

    it('Se introduce un id inválido (0), no provoca cambios', function () {
        var listadoControl = listado;
        listado.buscarRestaurante(0);
        expect(listado).to.eql(listadoControl);
    })

})

// Testeo de la función obtenerRestaurantes()

describe('Obteniendo Restaurantes a través de los filtros seleccionados', function () {
    it('Ejecución con los 3 parámetros en null', function () {
        var listadoControl = listado.restaurantes;
        var listaFiltrada = listado.obtenerRestaurantes(null, null, null);
        expect(listaFiltrada).to.eql(listadoControl);

    })

    it('Ejecución con el primer parámetro válido, segundo y tercero en null', function () {
        var listaFiltrada = listado.obtenerRestaurantes("Pasta", null, null);
        expect(listaFiltrada.length).to.equal(5);

    })

    it('Ejecución con el segundo parámetro válido, primero y tercero en null', function () {
        var listaFiltrada = listado.obtenerRestaurantes(null, "Roma", null)
        let arrayControl = [];
        listado.restaurantes.forEach(restaurante => {
            if ((restaurante.ubicacion === "Roma")) {
                arrayControl.push(restaurante);
            }
        });
        expect(listaFiltrada).to.eql(arrayControl);
    })

    it('Ejecución con el tercer parámetro válido, primero y segundo en null', function () {
        var listaFiltrada = listado.obtenerRestaurantes(null, null, "14:30");
        let arrayControl = [];
        listado.restaurantes.forEach(restaurante => {
            restaurante.horarios.forEach(horario => {
                if (horario === "14:30") {
                    arrayControl.push(restaurante);
                }
            })
        });
        expect(listaFiltrada).to.eql(arrayControl);
    })

    it('Ejecución con dos parámetros válidos, resto en null', function () {
        var listaFiltrada = listado.obtenerRestaurantes("Desayuno", "París", null);
        let arrayControl = [];
        listado.restaurantes.forEach(restaurante => {
            if ((restaurante.rubro === "Desayuno") && (restaurante.ubicacion === "París")) {
                arrayControl.push(restaurante);
            }
        });
        expect(listaFiltrada).to.eql(arrayControl);

    })

    it('Ejecución con todos los parámetros válidos', function () {
        var listaFiltrada = listado.obtenerRestaurantes("Desayuno", "París", "17:00");
        let arrayControl = [];
        listado.restaurantes.forEach(restaurante => {
            if ((restaurante.rubro === "Desayuno") && (restaurante.ubicacion === "París") && (restaurante.horarios.forEach(horario => {
                if (horario === "17:00") {
                    arrayControl.push(restaurante);
                }
            }))) { }
        });
        expect(listaFiltrada).to.eql(arrayControl);
    })

    it('Ejecución con primer parámetro en 0, resto en null', function () {
        var listaFiltrada = listado.obtenerRestaurantes(0, null, null);
        expect(listado.restaurantes).to.eql(listaFiltrada);

    }) // En este caso, al utilizar 0 cómo parámetro, nos devuelve un array vacío. Se refactoriza para que el caso test 0 tenga el mismo resultado que si utilizaramos null.

    it('Ejecución con el segundo parámetro en 0, resto en null', function () {
        var listaFiltrada = listado.obtenerRestaurantes(null, 0, null);
        expect(listado.restaurantes).to.eql(listaFiltrada);

    })

    it('Ejecución con el tercer parámetro en 0, resto en null', function () {
        var listaFiltrada = listado.obtenerRestaurantes(null, null, 0);
        expect(listado.restaurantes).to.eql(listaFiltrada);

    })
})

describe('Obteniendo precios a través del Objeto Reserva', function () {
    it('Calculando el precio base de una cena', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 6, 220, "DES15")
        expect(reserva1.calcularPrecioBase()).to.equal(1320);
    })

    it('Calculando el recargo por día de una cena', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 26, 11, 00), 6, 220, "DES200")
        expect(reserva1.obtenerAdicionales()).to.equal(132);
    })

    it('Calculando el recargo por horario de una cena', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 21, 20, 30), 6, 220, "")
        expect(reserva1.obtenerAdicionales()).to.equal(66);
    })

    it('Calculando el descuento del 15% de una cena', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 21, 20, 30), 5, 300, "DES15")
        expect(reserva1.obtenerDescuentos()).to.equal(225);
    })

    it('Calculando el descuento de $200 de una cena', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 21, 20, 30), 6, 220, "DES200")
        expect(reserva1.obtenerDescuentos()).to.equal(200);
    })


    it('Calculando el descuento de 1 persona de una cena', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 21, 20, 30), 6, 380, "DES1")
        expect(reserva1.obtenerDescuentos()).to.equal(380);
    })

    it('Calculando el precio total de una cena sin recargos ni descuentos', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 21, 11, 00), 6, 220, "")
        expect(reserva1.calcularPrecioTotal()).to.equal(1320);
    })

    it('Calculando el precio total de una cena con recargo por día y sin descuento', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "")
        expect(reserva1.calcularPrecioTotal()).to.equal(3080);

    })

    it('Calculando el precio total de una cena con recargo por día y descuento $200', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES200")
        expect(reserva1.calcularPrecioTotal()).to.equal(2880);

    })

    it('Calculando el precio total de una cena sin recargo y descuento de una persona', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 22, 11, 00), 8, 350, "DES1")
        expect(reserva1.calcularPrecioTotal()).to.equal(2450);

    })

    it('Calculando el precio total de una cena con recargo por horario y descuento 15%', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 23, 13, 00), 8, 350, "DES15")
        expect(reserva1.calcularPrecioTotal()).to.equal(2520);

    })
})

