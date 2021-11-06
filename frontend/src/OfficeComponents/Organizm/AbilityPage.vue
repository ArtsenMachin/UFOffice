<template>
    <v-container class='mt-15'>
        <v-row>
            <v-col
            col='6'>
                <v-card
                width="400px"
                dark
                max-width="100%"
                class='mx-auto RotateBlock'
                color="indigo">
                    <v-card-text class='Children'>
                        <v-row>
                            <v-col
                            cols='12'
                            class='text-center'>
                                <v-btn
                                color="green"
                                x-large fab
                                @click="openAbility('vuejs')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-vuejs
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            class='text-center mt-5'>
                                <v-btn
                                color="red"
                                x-large fab
                                   @click="openAbility('angular')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-angular
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            offset="4"
                            class='text-center  mt-5'>
                            <v-btn
                                color="blue"
                                x-large fab
                                   @click="openAbility('react')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-react
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            class='text-center  mt-10'>
                            <v-btn
                                color="blue"
                                x-large fab
                                   @click="openAbility('typescript')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-language-typescript
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            offset="4"
                            class='text-center  mt-10'>
                                <v-btn
                                color="purple"
                                x-large fab
                                   @click="openAbility('bootstrap')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-bootstrap
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='12'
                            class='text-center  mt-5'>
                                <v-btn
                                color="amber"
                                x-large fab
                                   @click="openAbility('javascript')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-language-javascript
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
            col='6'>
                <v-card
                width="400px"
                dark
                max-width="100%"
                class='mx-auto RotateBlock'
                color="indigo">
                    <v-card-text class='Children'>
                        <v-row>
                            <v-col
                            cols='12'
                            class='text-center'>
                                <v-btn
                                color="amber"
                                x-large fab
                                @click="openAbility('python')"
                                id="python"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-language-python
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            class='text-center mt-5'>
                                <v-btn
                                color="red"
                                x-large fab
                                   @click="openAbility('swift')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-language-swift
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            offset="4"
                            class='text-center  mt-5'>
                            <v-btn
                                color="blue"
                                x-large fab
                                   @click="openAbility('go')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-language-go
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            class='text-center  mt-10'>
                            <v-btn
                                color="blue-grey darken-4"
                                x-large fab
                                @click="openAbility('github')"
                                id="github"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-github
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='4'
                            offset="4"
                            class='text-center  mt-10'>
                                <v-btn
                                color="purple"
                                x-large fab
                                @click="openAbility('csharp')"
                                id="csharp"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-language-csharp
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <v-col
                            cols='12'
                            class='text-center mt-5'>
                                <v-btn
                                color="orange"
                                x-large fab
                                @click="openAbility('java')"
                                dark
                                >
                                    <v-icon
                                    large>
                                        mdi-language-java
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'AbilityPage',
  methods: {
    openAbility(el) {
      this.$router.push({ path: `/ability/${el}` });
    },
  },
};
</script>

<style scoped>
.RotateBlock{
    height: 400px;
    width: 400px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    border-radius: 8px;
    background-color: #3F51B5;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Children{
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    color: #F1F2F6;
}
</style>
