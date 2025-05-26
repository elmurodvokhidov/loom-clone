import arcjet from "@arcjet/next";
import { getEnv } from "@/lib/utils";

const aj = arcjet({
    key: getEnv("ARCJET_API_KEY"),
    rules: [],
});

export default aj;