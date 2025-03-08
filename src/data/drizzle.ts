import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";


export function dbInit(env: Env) {
    const url = env.TURSO_DATABASE_URL?.trim();
    if (url === undefined) {
      throw new Error('TURSO_URL is not defined');
    }
  
    const authToken = env.TURSO_AUTH_TOKEN?.trim();
    if (authToken === undefined) {
      throw new Error('TURSO_AUTH_TOKEN is not defined');
    }
  
    return createClient({ url, authToken });

    //return drizzle(turso);
}