<template>
    <div>
       <h3>Nombre: {{house.name}}</h3> 
       <h3>Region: {{house.region}}</h3> 
       <h3>Palabras: {{house.words}}</h3> 
       <Character
            v-if="currentLord!=null"
            :character="currentLord"
       />
        <div v-else>
            No tiene lord actualmente
        </div>
       
       <!-- <h3>{{house.currentLord}}</h3>  -->
       <!-- <p>{{house.day}}</p> -->
       <!-- <i @click='$emit("delete-house", house.id)' class="fas fa-times"></i> -->
    </div>
</template>

<script>
import Character from "../components/Character.component";

export default {
    name: "HouseDetails",
    // props: {
    //     house: Object,
    // },
    components: {
        Character,
    },
    data() {
        return {
            house: Object,
            currentLord: null,
        }
    },
    methods: {

        // get character
        // witout_id: it's because to get houses it's using the id, but to get character, it's using the full url
        async fetchData(url, without_id=true) {

            // add id (comming)
            // it's because to get houses it's using the id, but to get character, it's using the full url
            if (!without_id) {
                url = "https://www.anapioficeandfire.com/api/houses/" + url;
            }

            const res = await fetch(url);
            const data = await res.json();


            return data;

        },
    },
    async created() {
        // console.log(this.$router);
        // console.log(JSON.parse(this.$router.currentRoute.value.params.house));

        // get house parameter
        // this is getting the house directly
        // const house = JSON.parse(this.$router.currentRoute.value.params.house);
        // this is getting the house from house_id
        const house = await this.fetchData(this.$route.params.house_id, false);

        // set house view
        this.house = house;

        // get current lord
        if (house.currentLord.length > 0) {

            this.currentLord = await this.fetchData(house.currentLord);

            // console.log("current lord: ", this.currentLord);
        }
        // else{
        //     // console.log("no current Lord")
        // }
    }
}
</script>