<template>
  <div class="q-pa-md">
    <q-table
      title="Blogs"
      :rows="blogs"
      :columns="columns"
      :loading="loading"
      row-key="name"
      :filter="filter"
      @row-click="
        (evt, row, index) => {
          onRowClick(row, index);
        }
      "
    >
      <template v-slot:top-right>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useTestApi from "../composables/useTestApi";

const columns = [
  {
    name: "userId",
    required: true,
    label: "User Id",
    field: "title",
    // align: "left",
    field: (row) => row.userId,
    // sortable: true,
  },
  {
    name: "id",
    required: true,
    label: "Id",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: "title",
    align: "center",
    label: "Title",
    field: "title",
    align: "left",
    sortable: true,
  },
  { name: "body", label: "Body", field: "body", sortable: true, align: "left" },
];

const rows = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },

  {
    userId: 2,
    id: 2,
    title: "qui est esse",
    body: "st rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
export default {
  setup() {
    const filter = ref("");
    const {
      loading,
      blogs,
      getBlogList,
      // filter,
      // devicesMatchingFilter
    } = useTestApi();
    return {
      columns,
      rows,
      loading,
      blogs,
      getBlogList,
      filter,
      onRowClick(row, index) {},
    };
  },
};
</script>
