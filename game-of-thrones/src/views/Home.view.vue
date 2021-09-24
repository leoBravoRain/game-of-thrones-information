<template>
  <div class="home">
    <h1 class="display-2">Estas son las casas de Games of Thrones</h1>
    <p class="text--secondary" style="margin:10px">Selecciona alguna que quieras ver</p>

    <div 
      style="margin:20px;justify-content:center;center;display:flex"
    >
    <va-button-group>
      <va-button :disabled="this.page<=1" @click="updateHouses(this.page-1)">  Previo </va-button>|
      <va-button @click="updateHouses(this.page+1)">Siguiente</va-button>
    </va-button-group>
    </div>

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
      page:1,
    }
  },
  methods: {

    // get houses
    async fetchHouses(page) {

      const res = await fetch("https://www.anapioficeandfire.com/api/houses?page=" + page +"&pageSize=12");
      // console.log(res);
      const data = await res.json();

      return data;

    },

    // get previoes page
    async updateHouses(page) {
      
      // get houses
      this.houses = await this.fetchHouses(page);

      // update page index
      this.page = page;
    } 
  },

  // when it's created
  async created() {

    // get houses
    this.houses = await this.fetchHouses(0);

  }

}
</script>
