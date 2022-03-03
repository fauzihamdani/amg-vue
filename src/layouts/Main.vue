<template>
  <div>
    <q-layout view="lHh Lpr lff">
      <q-header elevated classx="bg-cyan-8">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="drawer = !drawer"
          />
          <q-toolbar-title> AMG Database </q-toolbar-title>
          <q-btn flat round dense icon="account_circle">
            <q-menu>
              <q-list style="min-width: 230px">
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar>
                      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Your Name</q-item-label>
                    <q-item-label caption>account@amg.co.id</q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
        <!-- <q-tabs align="left">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs> -->
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="400">
        <q-scroll-area style="height: 100%; border-right: 1px solid #ddd">
          <q-list>
            <LeftMenuItem
              v-for="(menu, index) in menus"
              :key="index"
              v-bind="menu"
            />

            <q-expansion-item
              icon="perm_identity"
              label="Account settings"
              caption="John Doe"
            >
              <q-card style="width: 230px; margin-left: auto">
                <q-expansion-item
                  expand-separator
                  icon="perm_identity"
                  label="Account settings"
                  caption="John Doe"
                >
                </q-expansion-item>
              </q-card>
              <q-card style="width: 230px; margin-left: auto">
                <q-expansion-item
                  expand-separator
                  icon="perm_identity"
                  label="Account settings"
                  caption="John Doe"
                >
                </q-expansion-item>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import menuItems from "../config/menus";
import LeftMenuItem from "src/components/LeftMenuItem.vue";

export default {
  name: "MainLayout",

  components: {
    LeftMenuItem,
  },

  setup() {
    const drawer = ref(false);
    const menus = ref(menuItems);

    // Find default route
    const activeItem = menuItems.find((item) => item.active);

    if (activeItem && location.hash === "#/") {
      location.hash = activeItem.link;
    }

    return {
      drawer,
      menus,
    };
  },
};
</script>
