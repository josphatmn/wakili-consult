import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const AGENTS = [
  { type: "RESEARCH", name: "AI Research Agent", description: "Deep legal research across Kenyan Acts, Constitution, case law, and regulations", model: "gpt-5.5", temperature: 0.5 },
  { type: "DRAFTING", name: "Legal Drafting Agent", description: "Draft contracts, demand letters, court pleadings, and other legal documents", model: "gpt-5.5", temperature: 0.7 },
  { type: "CONTRACT_REVIEW", name: "Contract Review Agent", description: "Review contracts for risks, missing clauses, and compliance issues", model: "gpt-5.5", temperature: 0.3 },
  { type: "CASE_LAW", name: "Case Law Research Agent", description: "Find relevant precedents and analyze court decisions", model: "gpt-5.5", temperature: 0.4 },
  { type: "LITIGATION", name: "Litigation Assistant", description: "Prepare submissions, organize evidence, and generate timelines", model: "gpt-5.5", temperature: 0.6 },
  { type: "FAMILY_LAW", name: "Family Law Agent", description: "Expert in Marriage Act, Children Act, succession, and divorce", model: "gpt-5.5", temperature: 0.6 },
  { type: "EMPLOYMENT_LAW", name: "Employment Law Agent", description: "Expert in Employment Act, labour relations, and workplace rights", model: "gpt-5.5", temperature: 0.6 },
  { type: "LAND_LAW", name: "Land Law Agent", description: "Expert in Land Act, Land Registration Act, and land disputes", model: "gpt-5.5", temperature: 0.6 },
  { type: "IMMIGRATION", name: "Immigration Agent", description: "Expert in Kenya Citizenship and Immigration Act", model: "gpt-5.5", temperature: 0.6 },
  { type: "CORPORATE", name: "Corporate Law Agent", description: "Expert in Companies Act and corporate governance", model: "gpt-5.5", temperature: 0.6 },
  { type: "TAX", name: "Tax Agent", description: "Expert in Tax Procedures Act, Income Tax Act, and VAT Act", model: "gpt-5.5", temperature: 0.6 },
  { type: "COMPLIANCE", name: "Compliance Agent", description: "Advise on KRA, NSSF, SHA, Data Protection Act compliance", model: "gpt-5.5", temperature: 0.5 },
  { type: "CRIMINAL_LAW", name: "Criminal Law Agent", description: "Expert in Penal Code and Criminal Procedure Code", model: "gpt-5.5", temperature: 0.6 },
  { type: "SUCCESSION", name: "Succession Agent", description: "Expert in Law of Succession Act and estate planning", model: "gpt-5.5", temperature: 0.6 },
  { type: "CONSTITUTION", name: "Constitution Agent", description: "Expert in the Constitution of Kenya 2010", model: "gpt-5.5", temperature: 0.5 },
  { type: "BUSINESS_REGISTRATION", name: "Business Registration Agent", description: "Expert in company registration, NGOs, and business names", model: "gpt-5.5", temperature: 0.6 },
]

async function main() {
  console.log("Seeding database...")

  for (const agent of AGENTS) {
    await prisma.aIAgent.upsert({
      where: { type: agent.type as any },
      update: {},
      create: agent as any,
    })
    console.log(`  Created agent: ${agent.name}`)
  }

  console.log("Seeding complete!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
