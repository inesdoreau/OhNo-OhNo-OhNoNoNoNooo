<template>
    <div>
        <h2>Mon compte</h2>
         Name : {{ user.pseudo }}
        <div>
         <router-link to='/quizz'>quizz</router-link>
        </div>
        <div v-if="user.isAdmin">
            Admin ! // A faire : implémenter une setcion de création de quiz
        </div>

    </div>   
</template>

<script>
module.exports = {
    props: {
        user: {type: Object},
    },
    data () {
        return {
        }
    },
    async mounted () {
    },
    methods: {
    }
}
</script>