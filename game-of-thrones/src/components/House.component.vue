<template>
    <!-- <div @click="onClick"> -->

    <!-- <va-list-item-section> -->
        <va-hover v-model="hover">

        <va-card 
            style="padding:10px;margin:10px;cursor:pointer" 
            @click="onClick"
            :dark="hover"
        >

            <div class="row">

                <va-avatar style="margin-right:10px;">
                    <!-- <img  :src="require('../assets/images/'+ (house.url.split('/')[5] < 11 ? house.url.split('/')[5] : 11) + '.png')"> -->
                    <img :src="require('../assets/images/coat.jpg')">
                </va-avatar>

                <!-- <var-card-title> {{ house.name }} </var-card-title> -->
                <!-- <va-list-item-section style="margin-left:15px"> -->
                <div
                    style="text-align:left"
                    class="column"
                >
                    <!-- <va-list-item-label> -->
                    <p>
                        {{ house.name }}
                    <!-- </va-list-item-label> -->
                    </p>

                    <!-- <va-list-item-label caption style="text-align:left"> -->
                    <p class="text--secondary">
                        {{ house.region }}
                    <!-- </va-list-item-label> -->
                    </p>
                <!-- </va-list-item-section> -->
                </div>

            </div>

        <!-- <va-image
          :src="require('../assets/images/'+ house.url.split('/')[5] + '.png')"
          style="height: 200px;"
        /> -->
        <!-- <va-card-title @click="onClick">{{house.name}}</va-card-title> -->
        <!-- <va-card-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</va-card-content> -->
       <!-- <h3 @click="onClick">{{house.name}}</h3>  -->
       <!-- <p>{{house.day}}</p> -->
       <!-- <i @click='$emit("delete-house", house.id)' class="fas fa-times"></i> -->
       </va-card>

        </va-hover>
    <!-- </va-list-item-section> -->

    <!-- </div> -->
</template>

<script>

export default {
    name: "House",
    props: {
        house: Object,
    },
    data () {
        return {
            hover:false,
        }
    },
    methods: {
        onClick() {

            // console.log(this.house.url.split("/")[5]);
            // go to house details
            // pass house as parameter
            this.$router.push({ 
                name: 'HouseDetails', 
                params: { 
                    house_id: this.house.url.split("/")[5], 
                    // house: JSON.stringify(this.house)
                }
            })
        }
    }
}
</script>