<template>
    <div>
       <h3 @click="onClick">{{house.name}}</h3> 
       <!-- <p>{{house.day}}</p> -->
       <!-- <i @click='$emit("delete-house", house.id)' class="fas fa-times"></i> -->
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