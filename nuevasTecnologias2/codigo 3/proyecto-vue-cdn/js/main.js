var app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor: 123,
        valor2: 456,
        valor1:Float32Array,
        valor3:0,
        contador: 123,
        contador2: 456,
        contador3: 789,
        mostrar: true,
        mostrar2: true,
        usuarios: [
            'Pedro',
            'Juan',
            'Ana',
            'Laura'
        ]
    },
    methods: {
        incrementar() {
            this.contador3++
        },
        getContador() {
            return this.contador3
        },
        actualizar(e) {
            //console.log('actualizar',e)
            let dato = e.target.value
            console.log(dato)
            this.valor2 = dato
        }
    }
})