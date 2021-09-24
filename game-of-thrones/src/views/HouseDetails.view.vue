// class="flex align--center align-content--center justify--center"
// require('../assets/images/'+ house.url.split('/')[5] + '.png')
// :src="house.url != null ? require('../assets/images/'+ house.url.split('/')[5] + '.png') : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII='"
<template>
    <div class="row" v-if="house != null">

        <!-- image -->
        <div 
            class="flex md4 xs12" 
        >
            <img 
                :src="require('../assets/images/coat.jpg')"
                style="max-width:300px"
            >
        </div>

        <!-- data -->
        <div 
            class="flex md8 xs12" 
        >
            <h3 
                class="display-3" 
                style="margin-bottom:20px"
            >
                {{house.name}}
            </h3> 

            <!-- region -->
            <div class="row">
                <div class="flex xs6" style="text-align:end">
                    Region
                </div>
                <div class="flex xs6" style="text-align:center">
                    {{house.region}}
                </div>
                <!-- <p>Region: {{house.region}}</p>  -->
            </div>
            <va-divider/>
            
            <!-- words -->
            <!-- <p v-if="house.words.length>0">Palabras: {{house.words}}</p>  -->
            <div v-if="house.words.length>0" class="row">
            <!-- <div class="row"> -->
                <div class="flex xs6" style="text-align:end">
                    Palabras
                </div>
                <div class="flex xs6" style="text-align:center">
                    {{house.words}}
                </div>
                <!-- <p>Region: {{house.region}}</p>  -->
            </div>
            <va-divider v-if="house.words.length>0"/>

            <!-- lord -->
            <div 
                class="flex row"
            >
                <p class="md6" style="text-align:end">Lord</p>
                <Character
                    class="md6"
                    v-if="currentLord!=null"
                    :character="currentLord"
                />
                <div v-else class="flex xs6">
                    <p>
                    No tiene Lord actualmente
                    </p>
                </div>
            </div>
            <!-- <va-divider/> -->

        </div>       
       <!-- <h3>{{house.currentLord}}</h3>  -->
       <!-- <p>{{house.day}}</p> -->
       <!-- <i @click='$emit("delete-house", house.id)' class="fas fa-times"></i> -->
    </div>
    <div v-else>
        <va-progress-circle indeterminate />
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
            house: null,
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