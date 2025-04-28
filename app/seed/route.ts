import { sql } from '@vercel/postgres';
import bcrypt from 'bcryptjs';

// ビルド時の静的評価を回避
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Password is irrelevant for the tutorial
    const hashedPassword = await bcrypt.hash('irrelevant', 10);
    await sql`
      INSERT INTO users (name, email, password)
      VALUES ('User', 'user@nextmail.com', ${hashedPassword})
    `;
    return new Response('Database seeded successfully', { status: 200 });
  } catch (error) {
    console.error('Seed error:', error);
    return new Response(`Failed to seed database: ${JSON.stringify(error, null, 2)}`, { status: 500 });
  }
}