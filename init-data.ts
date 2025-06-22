import fs from "fs"

const years = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => 2000 + i)
const result = {}

async function fetchVNsByYear(year: number) {
  const res = await fetch("https://api.vndb.org/kana/vn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filters: ["and", ["released", ">", `${year}-01-01`], ["released", "<", `${year + 1}-01-01`]],
      sort: "votecount",
      reverse: true,
      results: 12,
      fields: "id,rating,title,titles{lang,title,latin}",
    }),
  })
  const data = await res.json()
  return data.results.map((vn: any) => ({
    ID: vn.id,
    titleEn: vn.titles?.find((t: any) => t.lang === "en")?.title ?? vn.title,
    titleJa: vn.titles?.find((t: any) => t.lang === "ja")?.title ?? vn.title,
    score: Math.round(vn.rating * 100) / 100,
  }))
}

for (const year of years) {
  console.log(`Fetching VNs for ${year}...`)
  result[year] = await fetchVNsByYear(year)
}

fs.writeFileSync("vns.json", JSON.stringify(result, null, 2))
