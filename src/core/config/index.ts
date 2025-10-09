import prod from "./config.prod.ts";
import dev from "./config.dev.ts";
import staging from "./config.staging.ts";

let config = dev;

switch (process.env.NODE_ENV) {
  case "production":
    config = prod;
    break;
  case "staging":
    config = staging;
    break;
}

export default config;
