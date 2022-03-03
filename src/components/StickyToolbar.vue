<template>
  <q-page-sticky expand position="top">
    <div class="full-width">
      <q-toolbar class="bg-white">
        <q-btn flat round dense icon="o_content_paste" />
        <q-toolbar-title> {{ title }}</q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="o_filter_alt"
          @click="toggleRightDrawer"
        />
      </q-toolbar>

      <q-separator />
    </div>
  </q-page-sticky>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "Page" },
    toggleRightDrawer: { type: Function, default: (row, index) => {} },
  },
};
</script>
