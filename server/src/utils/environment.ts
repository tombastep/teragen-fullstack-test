import env from 'env-var';

// CORS
export const corsDomains: string[] = env
    .get('CORS_DOMAINS')
    .default('http://localhost:3000')
    .asArray();

// Server
export const port: number = env.get('SERVER_PORT').default(5000).asInt();
export const host: string = env
    .get('SERVER_HOST')
    .default('localhost')
    .asString();
export const user: string = env.get('SERVER_USER').default('root').asString();
export const password: string = env
    .get('SERVER_PASSWORD')
    .default('root')
    .asString();

// Database
export const database: string = env
    .get('DB_NAME')
    .default('reviews_db')
    .asString();

// Tables
export const reviewsTable: string = env
    .get('REVIEWS_TABLE')
    .default('reviews')
    .asString();
