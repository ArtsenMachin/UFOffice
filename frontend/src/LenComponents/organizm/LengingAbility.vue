<template>
    <v-container id='ability'>
        <v-row class='mt-5'>
            <v-col
            cols='12'
            class='text-center'>
                <p class='text-h3 indigo--text'>
                    Возможности UFOffice
                </p>
                <p class='text-h5'>
                    Создавайте команды, работайте, соревнуйтесь,
                    обучайтесь, общайтесь вместе с нашим инопланетным гостем Чимси!
                </p>
            </v-col>
            <lending-ability-card
            v-for="(ability, key) in abilityCfg"
            :key="key"
            :ability="ability"/>
        </v-row>
    </v-container>
</template>

<script>
import LendingAbilityCard from '../molecules/LendingAbilityCard.vue';

export default {
  components: { LendingAbilityCard },
  name: 'LendingAbility',
  data: () => ({
    abilityCfg: [
      {
        color: 'indigo', textClass: 'indigo--text', header: 'Кооперируйся', text: 'Работай вместе сосвоей командой, будто вы рядом', active: false,
      },
      {
        color: 'teal', textClass: 'teal--text', header: 'Работай', text: 'Выполняй задания, зарабатывай достижения, стань лучшим в своей коллективе', active: true,
      },
      {
        color: 'deep-orange', textClass: 'deep-orange--text', header: 'Управляй', text: 'Объедини свою команду, ставь цели, назначай задачи, будь хорошим лидером', active: false,
      },
    ],
  }),
};
</script>
