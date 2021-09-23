<template>
  <div class="home">
    <h1 class="display-2">Estas son las casas de Games of Thrones</h1>
    <p class="text--secondary" style="margin:10px">Selecciona alguna que quieras ver</p>
    <Houses 
      style="margin-top:20px;"
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
