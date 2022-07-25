//creo un array di oggetti
const lista =[
    {
        text: 'Svegliarsi presto',
        done: false
    },
    
    {
        text: 'Studiare con Boolean',
        done: true
    },
    {
        text: 'Fare pranzo',
        done: false
    },
    
    {
        text: 'Disperare tutto il pomeriggio',
        done: true
    },
    {
        text: 'Fare cena',
        done: false
    },
    
    {
        text: 'Disperare ancora',
        done: true
    },
]



//creo una nuova istanza Vue in cui richiamo il mio array di oggetti
//creo una nuova chiave in cui inserirò ciò che scriverò nel mio input
const day = new Vue(
    {
        el: '#day',
        data:{
            lista,
            newLista: ''
        },
        methods:{
            //usata per aggiungere un nuovo li al DOM           
            addList() {
                this.lista.push(
                    {
                        text: this.newLista,
                        done: false
                    }
                )
                this.newLista = '';
            },
            // usato per rimuovere un li dal DOM
            removeList(index){
                this.lista.splice(index, 1)
            }
        }
    }
);