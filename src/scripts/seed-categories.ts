import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryName = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and Politics",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Sports",
  "Travel and events",
];

async function main() {
  console.log("seeding categories");

  try {
    const values = categoryName.map((name) => ({
      name,
      description: `videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
  } catch (error) {
    console.log("Error Seeding Categories: " + error);
    process.exit(1);
  }
}

main();
