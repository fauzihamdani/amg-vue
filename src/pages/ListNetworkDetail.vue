<template>
  <div class="q-pa-md q-mt-sm">
    <div>
      <div class="row">
        <div>
          <q-btn color="primary" label="Back" @click="clickBack">
            <q-tooltip> Back </q-tooltip>
          </q-btn>
        </div>

        <div class="q-ml-auto">
          <q-btn color="positive" label="Add Tower" @click="toggleSelectedList">
            <q-tooltip> Add more tower on this Partner information</q-tooltip>
          </q-btn>
        </div>
      </div>
    </div>
    <div class="q-mt-xl" style="">
      <h3>Frozen Yogurt</h3>
    </div>
  </div>

  <div class="q-pa-md">
    <q-table
      title="Tower(s)"
      dense
      :rows="rows"
      :columns="columns"
      row-key="id"
      hide-bottom
    >
      <!-- <template v-slot:top>
        <q-space />
      </template> -->
      <template v-slot:body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="alias" :props="props">
            {{ props.row.alias }}
          </q-td>
          <q-td key="channel" :props="props">
            {{ props.row.channel }}
          </q-td>
          <q-td key="address" :props="props">
            {{ props.row.address }}
          </q-td>
          <q-td key="city" :props="props">
            {{ props.row.city }}
          </q-td>
          <q-td key="tier" :props="props">
            {{ props.row.tier }}
          </q-td>
          <q-td key="towers" :props="props">
            {{ props.row.towers }}
          </q-td>
          <q-td key="floor" :props="props">
            {{ props.row.floor }}
          </q-td>
          <q-td key="elevator" :props="props">
            {{ props.row.elevator }}
          </q-td>
          <q-td key="region" :props="props">
            {{ props.row.region }}
          </q-td>
          <q-td key="area" :props="props">
            {{ props.row.area }}
          </q-td>
          <q-td key="specialArea" :props="props">
            {{ props.row.specialArea }}
          </q-td>
          <q-td key="action" class="td-action" :props="props">
            <q-btn
              color="secondary"
              label="Edit"
              @click="editButtonClick(props.row)"
            />
            <q-btn
              class="q-ml-sm"
              color="secondary"
              label="Delete"
              @click="alert = true"
            />
            <q-btn
              class="q-ml-sm"
              color="primary"
              label="Direction"
              @click="toggleSelectedList"
            >
              <q-tooltip>
                Click this button to Get Partner Location on google
                map</q-tooltip
              >
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>

  <q-dialog v-model="alert" persistent>
    <q-card class="card-delete" style="width: 500px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Are You sure want to delete this network?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn label="OK" color="negative" v-close-popup @click="showAlert" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="edit" persistent>
    <q-card style="width: 800px">
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Edit Network {{ selectedRow.name }}
      </q-card-section>

      <div class="q-mt-xl q-pa-md">
        <div class="q-mb-xl q-mt-xl">
          <q-select
            v-model="selectedRow.name"
            label="Filter by City"
            virtual-scroll-slice-size="20"
            style="margin-bottom: 20px"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="options2"
            List
            dropdown
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn label="Update" color="info" v-close-popup @click="showAlert" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
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
    name: "Frozen Yogurt 1",
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
    name: "Frozen Yogurt 2",
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
];
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const loading = ref(false);
    const filter = ref("");
    const rowCount = ref(10);
    const rows = ref([...originalRows]);
    const $router = useRouter();
    const alert = ref(false);
    const selectedRow = ref({ name: "" });

    const edit = ref(false);

    const stringOptions = [
      "Bandung",

      "Jakarta",

      "Surabaya",

      "Yogyakarta",

      "Semarang",
    ];

    const options2 = ref(stringOptions);

    return {
      columns,
      alert,
      edit,
      rows,
      clickBack(row, index) {
        $router.push({ path: "/list-network" });
      },
      showAlert() {
        console.log("haloooo");
      },
      onRowClick(row) {
        // alert(JSON.stringify(row));
        // router.push("/occupancy");
        // router.push({ path: "/database" });
        // $router.push({ path: "/database" });
        // console.log("logged~~~", row.name);
        // toggleSelectedList();
        // router.push({ path: `/` });
        // selectedRow.value.name = row.name;
        console.log("selected Row", selectedRow.value);
        console.log("selected Row", selectedRow.value);
      },
      editButtonClick(row) {
        selectedRow.value.name = row.name;
        edit.value = true;
      },
      loading,
      filter,
      rowCount,
      options2,
      selectedRow,
    };
  },
};
</script>

<style scoped>
.td-action {
  width: 200px;
}
.card-delete {
  /* width: 1800px; */
}
</style>
