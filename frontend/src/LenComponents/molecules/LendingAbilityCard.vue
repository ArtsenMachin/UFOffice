<template>
    <v-col
    cols='12'
    md="6"
    lg="4"
    class='mx-auto'>
        <v-card
        width='350px'
        max-width="100%"
        class='text-center mx-auto'
        elevation="0"
        :class="{ active: ability.active }">
            <v-card-text>
                <v-avatar
                :color="ability.color"
                size='65'>
                    <img
                    :src="require(`@/assets/img/rocket.svg`)"
                    />
                </v-avatar>
                <p class='text-h5'
                :class="ability.textClass">
                    {{ability.header}}
                </p>
                <p>
                    {{ability.text}}
                </p>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
  name: 'LendingAbilityCard',
  props: {
    ability: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
};
</script>

<style scoped>
img{
    height: 40px !important;
    border-radius: unset !important;
}
.v-card:hover, .active{
        -webkit-box-shadow: 0px 25px 75px 6px rgba(255, 225, 234, 0.64) !important;
        -moz-box-shadow: 0px 25px 75px 6px rgba(255, 225, 234, 0.64) !important;
        box-shadow: 0px 25px 75px 6px rgba(255, 225, 234, 0.64) !important;
        transition: all 0.2s ease-in-out !important;
}
</style>
