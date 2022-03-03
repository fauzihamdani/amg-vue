import { ref, onMounted, watch, computed } from "vue";
import fetchTesApi from "../api/fetchTesApi";

export default function useTestApi() {
  const loading = ref(true);
  const blogs = ref([]);
  //   const filter = ref("");

  const getBlogList = async () => {
    loading.value = true;
    try {
      blogs.value = await fetchTesApi();
    } finally {
      loading.value = false;
    }
  };

  onMounted(getBlogList);

  return {
    loading,
    blogs,
    getBlogList,
    // filter,
    // devicesMatchingFilter
  };
}
