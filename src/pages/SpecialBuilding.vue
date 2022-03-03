<template>
  <h1>Special Building Page</h1>

  <!-- <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-badge color="secondary" multi-line> Model: "{{ model }}" </q-badge>

      <q-select filled v-model="model" :options="options" label="Standard" />
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),

      options: [
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
      ],
    };
  },
};
</script>
