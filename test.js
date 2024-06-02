import cache from "./controllers/kgsCache.js";
import { encodeBase62 } from "./utils/intToBase62.js";
const { getCryptoID, getKey, setKeys } = cache;

const id = await getCryptoID();
// console.log(id);

// setKeys();
console.log(await getKey());

console.log(encodeBase62(100000000000)); //1lUUE
