Vue.component('Contador', {
    data() {
        return {
        }
    },
    props: ['id','color','contadores'],
    methods: {
        contar() {
            this.contadores[this.id]++
        },
        getClassColor() {
            return 'btn-'+this.color
        }
    },
    template: `
        <div style="border:2px solid black;padding:10px;margin-bottom:10px;border-radius:10px;">
            <button :class="['btn', getClassColor(),'my-2','mr-2']" @click="contar()">
                Cont{{id}} {{contadores[id]}}
            </button>
            <b>{{ contadores }}</b>
        </div>
    `
})


var app = new Vue({
    el: '#app',
    data: {
        contadores : {0: 10, 1:20, 2: 30}
    },
    methods: {
    },
    computed: {
    }
})