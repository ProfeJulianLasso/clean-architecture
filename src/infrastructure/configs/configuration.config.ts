import * as dotenv from 'dotenv';
import { join } from 'node:path';

dotenv.config({
  path: join(
    process.cwd(),
    'environments',
    `.env.${process.env.SCOPE?.trim()}`,
  ),
});

type DatabaseConfigurationType = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

type ConfigurationType = {
  database: DatabaseConfigurationType;
};

export const Configuration = (): ConfigurationType => ({
  database: {
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '5432'),
    username: process.env.DATABASE_USERNAME ?? 'root',
    password: process.env.DATABASE_PASSWORD ?? 'password',
    database: process.env.DATABASE_NAME ?? 'postgres',
  },
});
