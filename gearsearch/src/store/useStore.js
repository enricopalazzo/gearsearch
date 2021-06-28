import { reactive, toRefs } from "vue";
import { searchResults, shopResults, videoResults } from "../services";

const state = reactive({
  searchResults: [],
  shopResults: [],
  videoResults: [],
  loading: false,
  searchTerm: "",
  savedSearchs: JSON.parse(localStorage.getItem("savedSearch")) || []

});

export default function useTodos() {
  const saveSearch = /*async*/ () => {
    let savedSearchs = JSON.parse(localStorage.getItem("savedSearch")) || [];
    if (!savedSearchs.some(i => i.term.includes(state.searchTerm.toLocaleLowerCase()))) {
      savedSearchs.push({ "date": new Date(), "term": state.searchTerm.toLocaleLowerCase() });
      localStorage.setItem("savedSearch", JSON.stringify(savedSearchs));
      state.savedSearchs = savedSearchs;
    }
  }
  const searchIt = /*async*/ () => {

    state.loading = true;
    setTimeout(() => {
      state.searchResults = searchResults;
      state.shopResults = shopResults;
      state.videoResults = videoResults.items.filter(item => item.snippet);
      state.loading = false;
    }, 1500);
  }


  return {
    ...toRefs(state), // convert to refs when returning
    searchIt,
    saveSearch
  }
}