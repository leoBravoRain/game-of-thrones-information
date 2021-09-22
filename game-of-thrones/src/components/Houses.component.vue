<template>
    <div v-for="(house) in houses" :key="house.id">
        <House 
            :house="house"
        />
    </div>
</template>

<script>
import House from "./House.component";

export default {
    name: "Houses",
    components: {
        House,
    },
    props: {
        houses: Array,
    },
    emits:["house-details"],
}
</script>