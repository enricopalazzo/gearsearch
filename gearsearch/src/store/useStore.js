import { reactive, toRefs } from "vue";
import { searchResults, shopResults, videoResults } from "../services";
//const url = 'https://jsonplaceholder.typicode.com/todos';

const state = reactive({
  searchResults: [],
  shopResults:[],
  videoResults:[],
  loading: false,
  searchTerm:""
  //selectedTodo: null
});

export default function useTodos() {
  const searchIt = /*async*/ () => {
    state.loading = true;
    setTimeout(() => { 
      state.searchResults = searchResults;
      state.shopResults = shopResults;
      state.videoResults = videoResults.items.filter(item => item.snippet);
      state.loading = false;}, 1500);
  }

  return {
    ...toRefs(state), // convert to refs when returning
    searchIt
  }
}