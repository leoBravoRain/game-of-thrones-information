<template>
    <!-- <va-list> -->
    <div
        class="row flex"
    >
        <!-- <va-list-label>
        Casas
        </va-list-label> -->

        <!-- <va-list-item  -->
        <div
            v-for="(house) in houses" 
            :key="house.id"
            class="flex md4 xs6"
        >
            <House 
                :house="house"
            />
        <!-- </va-list-item> -->
        </div>

    </div>
    <!-- </va-list> -->
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