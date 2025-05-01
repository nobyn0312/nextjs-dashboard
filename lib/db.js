import { neon } from '@neondatabase/serverless';

// DATABASE_URLから接続を初期化
export const sql = neon(process.env.DATABASE_URL);