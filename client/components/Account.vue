<template>
    
    <div>
        <h2>Mon compte</h2>
         Name : {{ user.pseudo }}

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