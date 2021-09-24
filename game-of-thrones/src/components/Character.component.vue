<template>
    <!-- <div class="flex md4 xs4"> -->
    <!-- <div 
    > -->
    <va-hover v-model="hover">
        <va-card 
            @click="onClick" 
            style="width:max-content;padding:10px;margin:10px;cursor:pointer"
            :dark="hover"
        >
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
    </va-hover>
    <!-- </div> -->
</template>

<script>
// aasdjasd
export default {
    name: "Character",
    props: {
        character: Object,
    },
    data () {
        return {
            hover:false,
        }
    },
    methods: {
        onClick() {
            console.log(this.$router.currentRoute.value.name);
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