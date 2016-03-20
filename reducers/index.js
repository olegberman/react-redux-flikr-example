// root reducer

let page = 0

export default (state = {
  pending:         false,
  results:         [],
  page:            0
}, action) => {
  state = Object.assign({}, state)
  switch (action.type) {

    case 'REPLACE_WITH_NEW_RESULTS':
      state.pending = false
      state.results = action.results
      state.page = page = 0
      return state
    break;

    case 'ADD_TO_CURRENT':
      page = page + 1
      state.page = page
      state.results = [...state.results, ...action.results]
      return state
    break;

    case 'INITIATE_SEARCH':
      state.pending = true
      return state
    break;

    case 'SORT_CURRENT':
      return sort(state, action)
    break;

    case 'SEARCH_ERROR':
      state.error = action.errorDescription
      return state
    break;

    case 'EXPAND_IMAGE':
      state.currentExpanded = action.url
      return state
    break;

    case 'DRAIN':
      state.pending = false
      state.results = []
      state.page = 0
      state.error = null
      state.currentExpanded = null
      state.sortedBy = null
      return state
    break;

    case 'CLOSE_EXPANDED':
      state.currentExpanded = null
      return state
    break;

    default:
      return state
    break;
  }
}

// sorting reducer functionality will be here soon

const sort = (state, action) => {
  state = Object.assign({}, state)
  // hacky way to force react-redux trigger
  // rerender after array sorting
  state.results = [...state.results]
  switch(action.by.toUpperCase()) {
    case 'DATE':
      state.sortedBy = 'date'
      state.results = state.results.sort((a, b) => Number(a.dateupload) - Number(b.dateupload))
      return state
    break;
    case 'VIEWS':
      state.sortedBy = 'views'
      state.results = state.results.sort((a, b) => Number(a.views) - Number(b.views))
      return state
    break;
    default:
      return state
    break;
  }
}
