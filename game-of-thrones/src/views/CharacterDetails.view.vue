<template>
  <div v-if="character != null">
    <h3 class="display-3"> {{character.name}}</h3>

    <p>Género: {{character.gender=='male'?'Hombre':'Mujer'}}</p>
    <va-divider/>

    <p v-if="character.culture.length>0">Cultura: {{character.culture}}</p>
    <va-divider v-if="character.culture.length>0"/>

    <p v-if="character.born.length>0">Nació: {{character.born}}</p>
    <va-divider v-if="character.born.length>0"/>

    <p v-if="character.died.length>0">Murió: {{character.died}}</p>
    <va-divider v-if="character.died.length>0"/>

    <!-- array of strings -->
    <p v-if="character.titles.length>0">Títulos: {{character.titles.toString()}}</p>
    <va-divider v-if="character.titles.length>0"/> 

    <!-- array of strings -->
    <p v-if="character.aliases.length>0 ? character.aliases[0].length>0 ? true : false : false">Alias: {{character.aliases.toString()}}</p>
    <va-divider v-if="character.aliases.length>0 ? character.aliases[0].length>0 ? true : false : false"/> 

    <!-- father -->
    <div 
      v-if="father!=null"
      class="flex row"
    >
      <p class="md6">Padre:</p>
      <Character
        class="md6"
        :character="father"
      />
    </div>
    <va-divider v-if="father!=null"/>

    <!-- mother -->
    <div 
      v-if="mother!=null"
      class="flex row"
    >
      <p class="md6">Madre:</p>
      <Character
        class="md6"
        :character="mother"
      />
    </div>
    <va-divider v-if="mother!=null"/>

    <!-- spouse -->
    <div 
      v-if="spouse!=null"
      class="flex row"
    >
      <p class="md6" style="text-align:right; margin-right:20px;">Espos@:</p>
      <Character
        class="md6"
        :character="spouse"
      />
    </div>
    <va-divider v-if="spouse!=null"/>

    <!-- allegiance -->
    <div 
      v-if="allegiances!=null" 
      class="flex row"
    >
      <p class="md6">Lealtades:</p>
      <Houses
        class="md6"
        :houses="allegiances"
      />
    </div>

  </div>

  <div v-else>
      <va-progress-circle indeterminate />
  </div>

</template>

<script>
// @ is an alias to /src
import Character from "../components/Character.component";
import Houses from "../components/Houses.component";

export default {
  name: 'CharacterDetails',
  components: {
    Character,
    Houses
  },
  data() {
    return {
      character: null,
      father: null,
      mother: null,
      spouse: null,
      allegiances: null,
    }
  },
  methods: {

    // get Character
    // witout_id: it's because to get charcst it's using the id, but to get character, it's using the full url
    async fetchData(url, without_id=true) {

      if (!without_id) {
        url = "https://www.anapioficeandfire.com/api/characters/" + url;
      }

      const res = await fetch(url);
      const data = await res.json();

      return data;

    },

  },

  // when it's created
  async created() {

    console.log("new load");
    
    // get Character from parameter
    // const character = JSON.parse(this.$router.currentRoute.value.params.character);
    // this is using the character id
    const character = await this.fetchData(this.$route.params.character_id, false);

    // update character view
    this.character = character;

    // get father
    if (character.father.length > 0) {
        this.father = await this.fetchData(character.father);
    }

    // get mother
    if (character.mother.length > 0) {
        this.mother = await this.fetchData(character.mother);
    }

    // get spouse
    if (character.spouse.length > 0) {
        this.spouse = await this.fetchData(character.spouse);
    }

    // get allegiances
    if (character.allegiances.length > 0) {
      var urls = [];
      character.allegiances.forEach((url) => {
        // urls.push(url);
        urls.push(this.fetchData(url));
      });
      // console.log("urls allegiances: ", urls);
      // run all promises
      // const allegiances = await Promise.all(urls);

      // console.log("allegiances: ", allegiances)
      // update allegiances
      this.allegiances = await Promise.all(urls);
      
    }
  }

}
</script>

<style scoped>
  p {
    margin-top: 10px;
  }
</style>
