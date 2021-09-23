<template>
    <va-list>
        <!-- <va-list-label>
        Casas
        </va-list-label> -->

        <va-list-item 
            v-for="(house) in houses" 
            :key="house.id"
        >
            <House 
                :house="house"
            />
        </va-list-item>

    </va-list>
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