import request from 'jsonp'
import { callbackName, makeUrl } from '../flikr'

export const search = (query) => {
  return dispatch => {
    dispatch(initiateSearch())
    request(makeUrl(query), { name: callbackName }, (err, response) => {
      if(err) return dispatch(spitError(error))
      // todo: add error handling for responses with errors
      try {
        response = response.photos.photo
      } catch(e) {
        return dispatch(spitError())
      }
      dispatch(replaceWithNewResults(response))
    })
  }
}

export const replaceWithNewResults = (results) => {
  return {
    type: 'REPLACE_WITH_NEW_RESULTS',
    results: results
  }
}

export const addToCurrentResults = (results) => {
  return {
    type: 'ADD_TO_CURRENT',
    results: results
  }
}

// reducer will set pending states

export const initiateSearch = () => {
  return { type: 'INITIATE_SEARCH' }
}

export const spitError = (error = 'Unknown error') => {
  return {
    type: 'SEARCH_ERROR',
    error
  }
}

export const sort = (by = 'date') => {
  return {
    type: 'SORT_CURRENT',
    by
  }
}

export const expandImage = (url) => {
  return {
    type: 'EXPAND_IMAGE',
    url
  }
}

export const drain = () => {
  return {
    type: 'DRAIN'
  }
}

export const closeExpanded = () => {
  return {
    type: 'CLOSE_EXPANDED'
  }
}
