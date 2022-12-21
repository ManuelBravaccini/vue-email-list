const { createApp } = Vue

createApp({
    data() {
        return {
            randomMail: '',
        }
    },

    methods: {
        getRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.randomMail = response.data.response;
            });
        }
    },

    created() {
        this.getRandomMail(); 
    }
}).mount('#app')
