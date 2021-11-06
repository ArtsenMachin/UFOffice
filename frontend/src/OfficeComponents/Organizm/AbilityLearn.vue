<template>
    <v-container>
      <div class="text-h4 success--text">VueJS</div>
        <v-stepper
        v-model="e6"
        vertical
        class='mt-4'
      >
        <v-stepper-step
          :complete="e6 > 1"
          step="1"
        >
          Изучите видео
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            height="600px"
            flat
          >
          <iframe width="100%" height="600px" src="https://www.youtube.com/embed/OlnwgS-gk8Y"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
          </iframe>
          </v-card>
          <v-btn
            color="primary"
            @click="e6 = 2"
          >
            Далее
          </v-btn>
          <v-btn text>
            Отмена
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="e6 > 2"
          step="2"
        >
          Пройдите мини-тест
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            height="200px"
            flat
          >
          <v-row>
            <v-col
            cols='12'
            lg="4">
                <v-card class='pa-2'>
                  <p>Что такое VueJS</p>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      :label="'JS фреймворк'"
                      color="red"
                      :value="0"
                    ></v-radio>
                    <v-radio
                      :label="'Библиотека компонентов'"
                      color="red"
                      :value="1"
                    ></v-radio>
                    <v-radio
                      :label="'Праздник в Танзании'"
                      color="red"
                      :value="2"
                    ></v-radio>
                    <v-radio
                      :label="'Расширение на браузер'"
                      color="red"
                      :value="3"
                    ></v-radio>
                  </v-radio-group>
                </v-card>
            </v-col>
            <v-col
            cols='12'
            lg="4">
                <v-card class='pa-2'>
                  <p>Зачем используется Vue-router</p>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      :label="'Для хранения данных'"
                      color="secondary"
                      :value="0"
                    ></v-radio>
                    <v-radio
                      :label="'Для передачи запросов'"
                      color="secondary"
                      :value="1"
                    ></v-radio>
                    <v-radio
                      :label="'Для адресации внутри приложения'"
                      color="secondary"
                      :value="2"
                    ></v-radio>
                    <v-radio
                      :label="'Подается главным блюдом на праздник VueJS'"
                      color="secondary"
                      :value="3"
                    ></v-radio>
                  </v-radio-group>
                </v-card>
            </v-col>
            <v-col
            cols='12'
            lg="4">
                <v-card class='pa-2'>
                    <p>Что такое Vuex</p>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      :label="'Тоже самое что и VueJs только от Google'"
                      color="success"
                      :value="0"
                    ></v-radio>
                    <v-radio
                      :label="'Библиотека компонентов'"
                      color="success"
                      :value="1"
                    ></v-radio>
                    <v-radio
                      :label="'Танец в Танзании'"
                      color="success"
                      :value="2"
                    ></v-radio>
                    <v-radio
                      :label="'Локальное хранилище данных'"
                      color="success"
                      :value="3"
                    ></v-radio>
                  </v-radio-group>
                </v-card>
            </v-col>
          </v-row>
          </v-card>
          <v-btn
            color="primary"
            @click="e6 = 3"
          >
            Далее
          </v-btn>
          <v-btn text>
            Отмена
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="e6 > 3"
          step="3"
        >
         Выполните тестовое задание
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card
            flat
            class="mb-12 text-center"
            height="200px"
          >
          <p>Тестовое задание находиться по ссылке:</p>
          <a href="https://docs.google.com/document/d/1oQcukpTSnlL1rOgO26Hkl0ljx_f7247xdApRPEcL_Nw/edit">https://docs.google.com/document/d/1oQcukpTSnlL1rOgO26Hkl0ljx_f7247xdApRPEcL_Nw/edit</a>
          </v-card>
          <v-btn
            color="primary"
            @click="e6 = 4"
          >
            Далее
          </v-btn>
          <v-btn text>
            Отмена
          </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4">
          Залейте решение на Git
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            class="mb-12 text-center"
            height="200px"
          >
          <p>Ссылка на Git:</p>
          <a href="https://github.com/ArtsenMachin/UFOffice/tree/master">https://github.com/ArtsenMachin/UFOffice/tree/master</a>
          </v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Далее
          </v-btn>
          <v-btn text>
            Отмена
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
</template>

<script>
export default {
  name: 'AbilityLearn',
  data: () => ({
    e6: 1,
  }),
};
</script>
