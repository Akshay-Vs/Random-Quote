import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default {
  schema: "./src/db/*",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: 'mysql://syj9rp1f84oig4zzs0c2:pscale_pw_4LHHfOkXiHL0iIKtw19UQBK2rULvIggQeYTndh8dRbm@aws.connect.psdb.cloud/randomquotes?ssl={"rejectUnauthorized":true}'
  },
} satisfies Config;
