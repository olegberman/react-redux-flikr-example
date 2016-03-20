// very basic endpoint builder for Flikr

const base         = 'https://api.flickr.com/services/rest/'
const method       = 'flickr.photos.search'
const format       = 'json'
const media        = 'photos'
const callbackName = '__flikr'
const apiKey       = 'your api key here'
const extras       = 'url_m,url_l,date_upload,views'
const count        = 10

const makeUrl = (query, page = 0) => {
  return `${base}?method=${method}&api_key=${apiKey}&text=${query}&per_page=${count}media=${media}&extras=${extras}&format=${format}&page=${page}&jsoncallback=${callbackName}`
}

export { callbackName, makeUrl }
