<template>
  <div class="q-mt-xl" style="background-color: blue">
    <q-table
      title="List Network"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
      :rows-per-page-options="[5, 10, 20, 25, 30, 50, 100]"
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
// filter by status
// import { useQuasar } from "quasar";
// import router from "vue-router";
// import router from "../router/routes";
import { useRouter } from "vue-router";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "alias",
    label: "Alias",
    field: "alias",
  },
  { name: "channel", label: "Channel", field: "channel", sortable: true },
  { name: "address", label: "Address", field: "address" },
  { name: "city", label: "City", field: "city" },
  { name: "tier", label: "Tier", field: "tier" },
  {
    name: "towers",
    label: "Towers",
    field: "towers",
    // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "floor",
    label: "Floor",
    field: "floor",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "elevator",
    label: "Passenger Elevator",
    field: "elevator",
    align: "center",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "region",
    label: "Region",
    field: "region",
    align: "center",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "area",
    label: "Area",
    field: "area",
    align: "center",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "specialArea",
    label: "Special Area",
    field: "specialArea",
    sortable: true,
    align: "center",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "action",
    label: "Action",
    field: "action",
    align: "center",
  },
];

const originalRows = [
  {
    name: "Frozen Yogurt",
    alias: "asdasd",
    channel: 6.0,
    address: 24,
    city: 4.0,
    tier: 87,
    towers: "14%",
    floor: "1",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Ice cream sandwich",
    alias: 237,
    channel: 9.0,
    address: 37,
    city: 4.3,
    tier: 129,
    towers: "8%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Eclair",
    alias: 262,
    channel: 16.0,
    address: 23,
    city: 6.0,
    tier: 337,
    towers: "6%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Cupcake",
    alias: 305,
    channel: 3.7,
    address: 67,
    city: 4.3,
    tier: 413,
    towers: "3%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Gingerbread",
    alias: 356,
    channel: 16.0,
    address: 49,
    city: 3.9,
    tier: 78,
    towers: "7%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Jelly bean",
    alias: 375,
    channel: 0.0,
    address: 94,
    city: 0.0,
    tier: 50,
    towers: "0%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Lollipop",
    alias: 392,
    channel: 0.2,
    address: 98,
    city: 0,
    tier: 38,
    towers: "0%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Honeycomb",
    alias: 408,
    channel: 3.2,
    address: 87,
    city: 6.5,
    tier: 562,
    towers: "0%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "Donut",
    alias: 452,
    channel: 25.0,
    address: 51,
    city: 4.9,
    tier: 326,
    towers: "2%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
  {
    name: "KitKat",
    alias: 518,
    channel: 26.0,
    address: 65,
    city: 7,
    tier: 54,
    towers: "12%",
    floor: "12",
    elevator: 21,
    region: "Yogyakarta",
    area: "Bantul",
    specialArea: "Yogyakarta",
  },
];

export default {
  props: {
    toggleSelectedList: { type: Function, default: (row, index) => {} },
    // toggleSelectedList: Function,
  },
  setup() {
    const loading = ref(false);
    const filter = ref("");
    const rowCount = ref(10);
    const rows = ref([...originalRows]);
    // const fnToogle = ref(toggleSelectedList);
    const $router = useRouter();

    return {
      columns,
      rows,

      loading,
      filter,
      rowCount,

      // emulate fetching data from server
      addRow() {
        loading.value = true;
        setTimeout(() => {
          const index = Math.floor(Math.random() * (rows.value.length + 1)),
            row = originalRows[Math.floor(Math.random() * originalRows.length)];

          if (rows.value.length === 0) {
            rowCount.value = 0;
          }

          row.id = ++rowCount.value;
          const newRow = { ...row }; // extend({}, row, { name: `${row.name} (${row.__count})` })
          rows.value = [
            ...rows.value.slice(0, index),
            newRow,
            ...rows.value.slice(index),
          ];
          loading.value = false;
        }, 500);
      },

      removeRow() {
        loading.value = true;
        setTimeout(() => {
          const index = Math.floor(Math.random() * rows.value.length);
          rows.value = [
            ...rows.value.slice(0, index),
            ...rows.value.slice(index + 1),
          ];
          loading.value = false;
        }, 500);
      },
      onRowClick(row, index) {
        // alert(JSON.stringify(row));
        // router.push("/occupancy");
        // router.push({ path: "/database" });
        $router.push({ path: "/list-network-details" });
        // toggleSelectedList();
        // router.push({ path: `/` });
      },
    };
  },
};
</script>
