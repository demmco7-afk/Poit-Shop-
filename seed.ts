import { PrismaClient } from "@prisma/client"; import bcrypt from "bcryptjs"
const db = new PrismaClient()
async function main() {
  const email = process.env.OWNER_EMAIL || "owner@poitshop.com"
  const pw = process.env.OWNER_PASSWORD || "GantiPasswordIni123"
  await db.user.upsert({ where: { email }, update: {}, create: { email, name: "Owner", role: "OWNER", passwordHash: await bcrypt.hash(pw, 12) } })
  for (const r of ["OWNER","ADMIN","KASIR","SELLER","JOKI","CUSTOMER"]) await db.role.upsert({ where: { name: r }, update: {}, create: { name: r } })
  const cats = [["Akun Game","akun-game","GAME_ACCOUNT"],["Jasa Joki","joki","JOKI"],["Produk Digital","produk-digital","DIGITAL"],["Top Up Game","top-up","TOPUP"],["Jasa","jasa","SERVICE"]]
  for (const [name, slug, type] of cats) await db.category.upsert({ where: { slug }, update: {}, create: { name, slug, type } })
  console.log("Seed selesai. Login Owner:", email)
}
main().finally(() => db.$disconnect())
