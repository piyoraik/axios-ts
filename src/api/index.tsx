import axios from "axios"
import { Qiita } from "../types/types"

export async function main() {
  const res = await axios.get<Qiita[]>("https://qiita.com/api/v2/items");
  return res;
}