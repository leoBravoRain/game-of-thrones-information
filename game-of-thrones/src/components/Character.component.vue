<template>
    <div>
        <h3 @click="onClick">{{character.name}}</h3> 
       <!-- <p>{{character.day}}</p> -->
       <!-- <i @click='$emit("delete-character", character.id)' class="fas fa-times"></i> -->
    </div>
</template>

<script>
// aasdjasd
export default {
    name: "Character",
    props: {
        character: Object,
    },
    methods: {
        onClick() {
            // alert("go to " + this.character.name);
            // go to character details
            // pass character as parameter
            this.$router.push({ 
                name: 'CharacterDetails', 
                params: { 
                    character_id: this.character.url.split("/")[5], 
                    // character: JSON.stringify(this.character)
                } 
            });

        }
    },
    // created() {
    //     console.log("from character component: ", this.character)
    // }
}
</script>