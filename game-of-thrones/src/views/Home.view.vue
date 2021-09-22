<template>
  <div class="home">
    <Houses 
      :houses="houses"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Houses from '@/components/Houses.component.vue'

export default {
  name: 'Home',
  components: {
    Houses
  },
  data() {
    return {
      houses: [],
    }
  },
  methods: {

    // get houses
    async fetchHouses() {

      const res = await fetch("https://www.anapioficeandfire.com/api/houses");
      const data = await res.json();

      return data;

    },
  },

  // when it's created
  async created() {

    // get houses
    this.houses = await this.fetchHouses();

  }

}
</script>
