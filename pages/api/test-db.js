import { sql } from '../../lib/db';

export default async function handler(req, res) {
  try {
    // ガイドに基づくcommentsテーブルを作成
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        comment TEXT
      )
    `;

    // サンプルデータを挿入
    await sql`INSERT INTO comments (comment) VALUES ('Sample comment')`;

    // データの取得
    const result = await sql`SELECT * FROM comments`;

    res.status(200).json({ message: 'Table created and data inserted', data: result });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to connect or create table' });
  }
}