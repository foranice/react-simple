import axios from 'axios'

export default async function searchMusic(key) {
  let searchJsonCallback = p => p
  /* eslint-disable no-eval */
  let res = await axios.get(encodeURI(`/fcgi-bin/fcg_search_xmldata.q?source=10&w=${key}&perpage=5&ie=utf-8`))
  return eval(res.data)
}
