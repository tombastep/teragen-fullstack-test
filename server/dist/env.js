import dotenv from 'dotenv';
dotenv.config();
// CORS
export const corsDomains = process.env.CORS_DOMAINS.split(', ') || [
    'http://localhost:3000',
];
// Server
export const port = process.env.SERVER_PORT;
export const host = process.env.SERVER_HOST;
export const user = process.env.SERVER_USER;
export const password = process.env.SERVER_PASSWORD;
// Database
export const database = process.env.DB_NAME;
// Tables
export const reviewsTable = process.env.REVIEWS_TABLE;
//# sourceMappingURL=env.js.map