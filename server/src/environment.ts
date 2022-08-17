import env from 'env-var';

// CORS
export const corsDomains = env.get('CORS_DOMAINS').required().asArray();

// Server
export const port = env.get('SERVER_PORT').required().asString();
export const host = env.get('SERVER_HOST').required().asString();
export const user = env.get('SERVER_USER').required().asString();
export const password = env.get('SERVER_PASSWORD').required().asString();

// Database
export const database = env.get('DB_NAME').required().asString();

// Tables
export const reviewsTable = env.get('REVIEWS_TABLE').required().asString();
