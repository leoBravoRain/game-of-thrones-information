// class="flex align--center align-content--center justify--center"

<template>
    <div class="row">

        <!-- image -->
        <div 
            class="flex md4 xs12" 
        >
            <img :src="require('../assets/images/'+ house.url.split('/')[5] + '.png')">
        </div>
        
        <!-- data -->
        <div 
            class="flex md8 xs12" 
        >
            <h3 class="display-3 " 
            >{{house.name}}</h3> 
            <p>Region: {{house.region}}</p> 
            <p v-if="house.words.length>0">Palabras: {{house.words}}</p> 
            <div 
                class="flex row"
            >
                <p class="md6">Señor:</p>
                <Character
                    class="md6"
                    v-if="currentLord!=null"
                    :character="currentLord"
                />
                <div v-else>
                    No tiene lord actualmente
                </div>
            </div>

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

<style scoped>
    p {
        /* background-color: black; */
        margin-top: 20px;
    }
</style>