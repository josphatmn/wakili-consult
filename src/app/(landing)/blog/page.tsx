import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | M-Wakili AI",
  description: "Insights, updates, and analysis on Kenyan law, legal technology, and AI innovation from the M-Wakili AI team.",
}

const posts = [
  {
    title: "Understanding Kenya's Data Protection Act 2019: A Practical Guide",
    excerpt: "The Data Protection Act 2019 is Kenya's primary legislation on data privacy. Learn what it means for your business and how M-Wakili AI's Compliance Agent can help you stay compliant.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    author: "Dr. Sarah Wanjiku",
    role: "Legal Research Lead",
    date: "15 Jun 2026",
    category: "Compliance",
  },
  {
    title: "How AI is Transforming Legal Research in Kenyan Courts",
    excerpt: "From the Supreme Court to the Magistrates Courts, AI-powered legal research is helping Kenyan lawyers find relevant precedents faster than ever before.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    author: "James Mwangi",
    role: "Product Manager",
    date: "8 Jun 2026",
    category: "Legal Tech",
  },
  {
    title: "A Complete Guide to Company Registration in Kenya (2026)",
    excerpt: "Everything you need to know about registering a company in Kenya through eCitizen. From name search to certificate of incorporation — we cover it all.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
    author: "Grace Akinyi",
    role: "Legal Researcher",
    date: "1 Jun 2026",
    category: "Business Law",
  },
  {
    title: "Contract Review: 10 Clauses Every Kenyan Business Should Check",
    excerpt: "Before signing any business contract in Kenya, make sure these 10 critical clauses are properly drafted. Our Contract Review Agent can help you identify risks.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    author: "Hon. Justice Kamau (Rtd)",
    role: "Legal Advisor",
    date: "25 May 2026",
    category: "Contracts",
  },
  {
    title: "Employment Law in Kenya: A Guide for Employers",
    excerpt: "Understanding the Employment Act 2007 is crucial for every Kenyan employer. From hiring to termination, here is what the law requires.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    author: "Dr. Peter Ochieng",
    role: "Compliance Expert",
    date: "18 May 2026",
    category: "Employment",
  },
  {
    title: "The Future of Legal Services in Kenya: AI as a Force Multiplier",
    excerpt: "How Kenyan law firms are using AI to handle 3x more cases, reduce research time by 80%, and deliver better outcomes for their clients.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    author: "Sarah Wanjiku",
    role: "Managing Partner",
    date: "10 May 2026",
    category: "Legal Tech",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="animated-blob absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-500/10 px-4 py-1.5 rounded-full">Blog</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Insights &{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Updates</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Latest articles on Kenyan law, legal technology, AI innovation, and product updates from the M-Wakili AI team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 -mt-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.title} href="#" className="group">
                <article className="rounded-2xl border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-medium bg-white/90 backdrop-blur-sm text-violet-600 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-1 mt-4 text-sm font-medium text-violet-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
