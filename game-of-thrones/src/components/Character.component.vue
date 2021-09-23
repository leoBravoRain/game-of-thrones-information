<template>
    <div class="flex md4 xs4">
        <va-card @click="onClick">
            <div class="row">
                <va-avatar>
                    <img :src="require('../assets/images/' + (character.gender == 'male' ? 'male' : 'female') + '.jpg')">
                </va-avatar>
                <va-card-content>
                    {{character.name}}
                </va-card-content>
            </div>
        <!-- <h3 @click="onClick">{{character.name}}</h3>  -->
       <!-- <p>{{character.day}}</p> -->
       <!-- <i @click='$emit("delete-character", character.id)' class="fas fa-times"></i> -->
        </va-card>
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