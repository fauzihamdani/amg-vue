<template>
  <!-- channel partner list -->

  <q-layout view="hhr lpR ffr">
    <SidebarFilter
      :v="rightDrawerOpen"
      :toggleRightDrawer="toggleRightDrawer"
    />

    <div class="q-mt-xl" style="">
      <div class="row">
        <q-btn color="positive" label="Add Partner" @click="toggleSelectedList">
          <q-tooltip> Add Partner</q-tooltip>
        </q-btn>
      </div>
    </div>

    <!-- :rightDrawerOpen="rightDrawerOpen" -->

    <!-- ============================ Right Drawer Start ==================================== -->
    <!-- <q-drawer
      v-model="rightDrawerOpen"
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

        <div class="q-mb-xl">
          <q-select
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
          <div class="row">
            <div class="col">
              <q-input
                v-model="minimumTower"
                type="number"
                label=" Minimum tower "
              />
            </div>
            <div class="col offset-md-1">
              <q-input
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
                v-model="minimumFloor"
                type="number"
                label=" Minimum Floors "
              />
            </div>
            <div class="col offset-md-1">
              <q-input
                v-model="maximumFloor"
                type="number"
                label="Maximum Floors"
              />
            </div>
          </div>
        </div>

        <div class="q-mb-xl">
          <q-select
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
            v-model="gpspoint"
            label="Filter by GPS point"
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
            v-model="gpsradius"
            label="Filter by GPS Radius"
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

        <q-btn color="primary" label="Filter" style="margin-top: 50px" />
      </q-scroll-area>
    </q-drawer> -->

    <!-- ============================ Right Drawer End ==================================== -->
    <!-- *** -->
    <!-- *** -->
    <!-- *** -->
    <!-- *** -->
    <!-- *** -->
    <!-- ============================ Selected List Network Drawer Start ==================================== -->

    <q-drawer
      v-model="SelectedListDrawerOpen"
      side="right"
      overlay
      bordered
      elevated
      class="q-px-md q-py-md drwr-style"
      :width="screenWidthVal"
    >
      <q-scroll-area class="fit">
        <q-toolbar style="width: 100x">
          <q-btn flat round dense icon="o_filter_alt" />
          <q-toolbar-title> Filter </q-toolbar-title>
          <q-btn flat round dense icon="close" @click="toggleSelectedList" />
        </q-toolbar>

        <q-separator />
        <q-btn color="primary" label="Filter" style="margin-top: 50px" />
      </q-scroll-area>
    </q-drawer>

    <!-- ============================ Selected List Network Drawer  End ==================================== -->

    <q-page-container>
      <!-- <div class="q-pa-md q-mt-xl">
        <div class="row">
          <div class="col-1" style="">
            <div class="row justify-center">
              <q-btn
                color="primary"
                label="Direction"
                @click="toggleSelectedList"
              />
            </div>
          </div>
          <div class="col-1" style="">
            <q-btn color="primary" label="Download" />
          </div>
        </div>
      </div> -->
    </q-page-container>

    <ListNetwork :toggleSelectedList="toggleSelectedList" />
  </q-layout>
  <StickyToolbar
    :title="'Partner List'"
    :toggleRightDrawer="toggleRightDrawer"
  />
  <!-- :toggleRightDrawer="toggleRightDrawer" -->
</template>

<script>
import { ref } from "vue";
import ListNetwork from "../components/ListNetwork.vue";
import StickyToolbar from "../components/StickyToolbar.vue";
import SidebarFilter from "../components/SidebarFilter.vue";

const stringOptions = [
  "Bandung",

  "Jakarta",

  "Surabaya",

  "Yogyakarta",

  "Semarang",
];

let screenWidth = screen.width;

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
  methods: {
    showAlert() {
      alert(this.model);
    },
    log() {
      console.log("oke");
    },
  },
  components: {
    ListNetwork,
    StickyToolbar,
    SidebarFilter,
  },
  setup(props) {
    const searchCityValue = [];

    stringOptions.map((val) => {
      searchCityValue.push(val.value);
    });

    const screenWidthVal = ref(window.innerWidth);

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
    const minimumTower = ref("");
    const maximumTower = ref("");
    const minimumFloor = ref();
    const maximumFloor = ref();

    const options2 = ref(stringOptions);
    const options3 = ref(stringOptions3);

    const rightDrawerOpen = ref(false);

    const SelectedListDrawerOpen = ref(false);

    // console.log("search city", searchCityValue);

    return {
      teal: ref(true),
      orange: ref(false),
      red: ref(true),
      cyan: ref(false),
      screenWidthVal,
      model: ref(""),
      date,
      channelList,
      city,
      channel,
      // options,
      options2,
      rightDrawerOpen,
      searchCityValue,
      stringOptions,
      tower,
      floor,
      tier,
      gpspoint,
      gpsradius,
      area,
      region,
      options3,
      // testCheckbox,
      tagmodel,
      minimumTower,
      maximumTower,
      minimumFloor,
      maximumFloor,
      SelectedListDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
        console.log(rightDrawerOpen.value, 395);
      },
      toggleSelectedList() {
        SelectedListDrawerOpen.value = !SelectedListDrawerOpen.value;
      },
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
    };
  },
  // mounted() {
  //   console.log(rightDrawerOpen.value, 422);
  // },
};
</script>

<style scoped>
.q-drawer--right {
  background-color: red !important;
}
</style>
