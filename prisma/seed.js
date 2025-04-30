const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // 既存のデータを削除（オプション）
  await prisma.user.deleteMany();

  // テストデータを挿入
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
    },
  });

  console.log('Seeded users:', [user1, user2]);
}

main()
  .catch(e => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });