import urlGetter from "./utils";
import { ADDRESS, PORT, PATH, REGION } from "./constant";

const url = urlGetter(ADDRESS, PORT, PATH);
const region = REGION;

export { url, region };
