



var app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje',
        valor: 555,
       alumno: {nombre: 'Juan', foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
       estado1:true,
       color:'red',
       counter:0,
    },
    methods: {

        cambiarColor(){
            this.estado1=!this.estado1;
        },

        aumentarValor(){
           return this.valor++;
        }
    },
    computed: {
    }
})