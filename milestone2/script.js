let app = new Vue ({
    el:"#root",
    data:{
        card: []
    },
    mounted: function (){
        axios
        .get("http://localhost:8888/php-ajax-dischi/milestone2/database.php")
        .then((risposta) => {
            this.card = risposta.data; 
        })
        .catch((error) => {
            console.log(error)
        })
    }
})