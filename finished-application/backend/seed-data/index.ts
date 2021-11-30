import { PrismaClient } from '.prisma/client';
import { products } from './data';

export async function insertSeedData(prisma: PrismaClient) {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    const { photo, ...productData } = product;
    const { id } = await prisma.productImage.create({
      data: {
        image: JSON.stringify(product.photo),
        altText: product.description,
      },
    });

    await prisma.product.create({ data: { ...productData, photoId: id } });
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``
  );
  process.exit();
}
