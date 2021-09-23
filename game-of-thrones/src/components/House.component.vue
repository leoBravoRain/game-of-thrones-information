<template>
    <div @click="onClick">

    <va-list-item-section>

        <va-card style="padding:10px">

            <div class="row">

            <va-avatar>
                <img :src="require('../assets/images/'+ house.url.split('/')[5] + '.png')">
            </va-avatar>

            <!-- <var-card-title> {{ house.name }} </var-card-title> -->
            <va-list-item-section style="margin-left:15px">
                <va-list-item-label>
                    {{ house.name }}
                </va-list-item-label>

                <va-list-item-label caption style="text-align:left">
                    {{ house.region }}
                </va-list-item-label>
            </va-list-item-section>

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
    </va-list-item-section>

    </div>
</template>

<script>

export default {
    name: "House",
    props: {
        house: Object,
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