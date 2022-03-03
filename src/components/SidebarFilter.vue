<template>
  <q-drawer
    v-model="t"
    side="right"
    overlay
    bordered
    elevated
    class="q-px-md q-py-md"
  >
    <q-scroll-area class="fit">
      <q-toolbar>
        <q-btn flat round dense icon="o_filter_alt" />
        <q-toolbar-title> Filter </q-toolbar-title>
        <q-btn flat round dense icon="close" @click="toggleRightDrawer" />
      </q-toolbar>
      <q-separator />

      <div class="q-mb-xl q-mt-xl">
        <q-select
          filled
          v-model="city"
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
          filter
          @filter="filterFn"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>

      <div class="q-mb-xl">
        <q-select
          filled
          v-model="region"
          label="Filter by region"
          virtual-scroll-slice-size="20"
          style="margin-bottom: 20px"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options2"
          @filter="filterFn"
        >
        </q-select>
      </div>

      <div class="q-mb-xl">
        <q-select
          filled
          v-model="area"
          use-input
          use-chips
          input-debounce="0"
          label="Filter By Area"
          :options="options3"
          @filter="filterFn3"
          @filter-abort="abortFilterFn"
          hint="With use-chips"
          multiple
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>

      <div class="q-mb-xl">
        <q-select
          filled
          v-model="channel"
          label="Filter by Channel"
          virtual-scroll-slice-size="20"
          style="margin-bottom: 20px"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options2"
          @filter="filterFn"
        >
        </q-select>
      </div>

      <div class="q-mb-xl">
        <!-- <q-select
            v-model="tower"
            label="Filter by Towers Count"
            virtual-scroll-slice-size="20"
            style="margin-bottom: 20px"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="options2"
            @filter="filterFn"
          >
          </q-select> -->

        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="minimumTower"
              type="number"
              label=" Minimum tower "
            />
          </div>
          <div class="col offset-md-1">
            <q-input
              filled
              v-model="maximumTower"
              type="number"
              label="Maximum tower"
            />
          </div>
        </div>
      </div>
      <div class="q-mb-xl">
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="minimumFloor"
              type="number"
              label=" Minimum Floors "
            />
          </div>
          <div class="col offset-md-1">
            <q-input
              filled
              v-model="maximumFloor"
              type="number"
              label="Maximum Floors"
            />
          </div>
        </div>
      </div>

      <div class="q-mb-xl">
        <q-select
          filled
          v-model="tier"
          label="Filter by Tier"
          virtual-scroll-slice-size="20"
          style="margin-bottom: 20px"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options2"
          @filter="filterFn"
        >
        </q-select>
      </div>

      <div class="q-mb-xl">
        <q-select
          filled
          v-model="gpspoint"
          label="Filter by GPS point"
          virtual-scroll-slice-size="20"
          style="margin-bottom: 20px"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          toggleRightDrawer
        >
        </q-select>
      </div>

      <div class="q-mb-xl">
        <q-select
          filled
          v-model="status"
          label="Filter by Status"
          virtual-scroll-slice-size="20"
          style="margin-bottom: 20px"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          toggleRightDrawer
          :options="options2"
        >
        </q-select>
      </div>

      <div class="q-mb-xl" style="margin-bottom: 10px">
        <q-select
          filled
          v-model="gpsradius"
          label="Filter by GPS Radius"
          virtual-scroll-slice-size="20"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          :options="options2"
          @filter="filterFn"
        >
        </q-select>
      </div>

      <q-btn color="primary" label="Filter" style="margin-top: 20px" />
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { ref, toRefs } from "vue";

const stringOptions = [
  "Bandung",

  "Jakarta",

  "Surabaya",

  "Yogyakarta",

  "Semarang",
];

const stringOptions3 = [
  {
    id: 1,
    label: "Surabaya",
    value: "Surabaya",
    description: "Search engine",
    category: "1",
  },
  {
    id: 2,
    label: "Bandung",
    value: "Bandung",
    description: "Social media",
    category: "1",
  },
  {
    id: 3,
    label: "Jogja",
    value: "Jogja",
    description: "Quick updates",
    category: "2",
  },
  {
    id: 4,
    label: "Bali",
    value: "Bali",
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
  name: "SidebarFilter",
  props: {
    v: { type: Boolean },
    toggleRightDrawer: { type: Function, default: (row, index) => {} },
  },
  watch: {
    v() {
      this.t = this.v;
    },
  },
  setup(props) {
    // const rightDrawerOpen = ref(true);

    const channelList = ref("");
    const date = ref("");
    const channel = ref("");
    const city = ref("");
    const area = ref(null);
    const region = ref("");
    const tower = ref("");
    const floor = ref("");
    const tier = ref("");
    const gpspoint = ref("");
    const gpsradius = ref("");
    const tagmodel = ref(null);
    const minimumTower = ref();
    const maximumTower = ref();
    const minimumFloor = ref();
    const maximumFloor = ref();
    const status = ref();

    const options2 = ref(stringOptions);
    const options3 = ref(stringOptions3);
    const t = ref(false);

    // const { openProps } = toRefs(props.rightDrawerOpenProps);

    return {
      model: ref(""),
      date,
      channelList,
      city,
      channel,
      t,
      options2,
      // rightDrawerOpen,
      // baru: this.v,
      stringOptions,
      tower,
      floor,
      tier,
      gpspoint,
      gpsradius,
      area,
      region,
      options3,
      tagmodel,
      minimumTower,
      maximumTower,
      minimumFloor,
      maximumFloor,
      status,
      // openProps,

      // toggleRightDrawer() {
      //   rightDrawerOpen.value = !rightDrawerOpen.value;
      // },
      filterFn(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options2.value = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
      filterFn3(val, update, abort) {
        update(() => {
          const needle = val.toLowerCase();
          options3.value = stringOptions3.filter(
            (v) => v.value.toLowerCase().indexOf(needle) > -1
          );
        });
      },
      abortFilterFn() {
        // console.log('delayed filter aborted')
      },
      // log() {
      //   this.$emit("ce", !this.t);
      //   console.log("oke");
      // },
    };
  },
  methods: {
    log() {
      // this.$emit("ce", !this.t);
      console.log("oke");
    },
  },
  mounted() {
    console.log(this.v, 338);
  },
};
</script>
