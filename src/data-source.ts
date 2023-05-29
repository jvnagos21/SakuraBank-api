import "dotenv/config";
import "reflect-metadata";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );
  const dbUrl: string | undefined = process.env.DATABASE_URL;
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  };
};

const AppDataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
