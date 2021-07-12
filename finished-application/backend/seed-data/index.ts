import { KeystoneContext } from '@keystone-next/types';
import { products } from './data';

export async function insertSeedData(context: KeystoneContext) {
  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.name}`);
    await context.sudo().lists.Product.createOne({ data: product });
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
