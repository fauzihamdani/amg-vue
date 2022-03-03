<template>
  <h1>Database Page</h1>
  <h5>{{ model }}</h5>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        filled
        v-model="model"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="options"
        @filter="filterFn"
        hint="Basic filtering"
        style="width: 250px; padding-bottom: 32px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const stringOptions = [
  {
    id: 1,
    label: "Google",
    value: "Google",
    description: "Search engine",
    category: "1",
  },
  {
    id: 2,
    label: "Facebook",
    value: "Facebook",
    description: "Social media",
    category: "1",
  },
  {
    id: 3,
    label: "Twitter",
    value: "Twitter",
    description: "Quick updates",
    category: "2",
  },
  {
    id: 4,
    label: "Apple",
    value: "Apple",
    description: "iStuff",
    category: "2",
  },
  {
    id: 5,
    label: "Oracle",
    value: "Oracle",
    disable: true,
    description: "Databases",
    category: "3",
  },
];

export default {
  setup() {
    const options = ref(stringOptions);

    return {
      model: ref(null),
      options,
      hello() {
        alert("halooo");
      },
      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options.value = stringOptions.filter(
            (v) => v.value.toLowerCase().indexOf(needle) > -1
          );
        });
      },
    };
  },
};
</script>
