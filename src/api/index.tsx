import axios from "axios"

export const apiGet = (URL:string):any => {
  axios
    .get(URL)
    .then((result) => {
      console.log(result.data.items)
      return result.data.items
    })
    .catch((error) => {
      console.log('失敗')
      console.log(error)
      return
    })
}