export type MediumArticle = {
  title: string;
  link: string;
  pubDate: Date;
  excerpt: string;
  image?: string;
  categories: string[];
};

const FALLBACK_ARTICLES: MediumArticle[] = [
  {
    title: "Quand la sociologie éclaire le neuromarketing",
    link: "https://medium.com",
    pubDate: new Date("2026-09-12"),
    excerpt:
      "L'attention n'est pas un réflexe isolé : elle se construit dans des cadres sociaux. Relire les biais cognitifs avec un regard sociologique.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,c_fill,w_1200,h_750/sample",
    categories: ["Neuromarketing", "Sociologie"],
  },
  {
    title: "Le parcours client comme rituel contemporain",
    link: "https://medium.com",
    pubDate: new Date("2026-08-03"),
    excerpt:
      "Du premier regard à la décision, chaque étape d'un parcours est un mini-rite. Comment concevoir des expériences qui respectent l'humain.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,c_fill,w_1200,h_750/docs/camera-shopping",
    categories: ["Expérience", "Ingénierie d'affaires"],
  },
  {
    title: "Perception de marque : ce que le cerveau retient vraiment",
    link: "https://medium.com",
    pubDate: new Date("2026-06-21"),
    excerpt:
      "Couleur, rythme, silence visuel : les micro-signaux qui façonnent la mémoire de marque au-delà du discours officiel.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,c_fill,w_1200,h_750/docs/models",
    categories: ["Perception", "Marque"],
  },
];

function decode(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function tag(block: string, name: string) {
  const match = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return match ? decode(match[1]) : "";
}

function tags(block: string, name: string) {
  return [...block.matchAll(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "gi"))].map((m) =>
    decode(m[1]),
  );
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstImage(html: string) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

function parseRss(xml: string): MediumArticle[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((m) => m[1]);

  return items.map((item) => {
    const content = tag(item, "content:encoded") || tag(item, "description");
    const excerpt = stripHtml(content).slice(0, 180).trim();

    return {
      title: tag(item, "title") || "Sans titre",
      link: tag(item, "link"),
      pubDate: new Date(tag(item, "pubDate") || Date.now()),
      excerpt: excerpt ? `${excerpt}…` : "",
      image: firstImage(content),
      categories: tags(item, "category"),
    };
  });
}

export async function getMediumArticles(username = ""): Promise<MediumArticle[]> {
  const handle = username.replace(/^@/, "").trim();

  if (!handle) {
    return FALLBACK_ARTICLES;
  }

  try {
    const response = await fetch(`https://medium.com/feed/@${handle}`, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "SvetlanaPortfolio/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`Medium RSS ${response.status}`);
    }

    const articles = parseRss(await response.text());
    return articles.length ? articles : FALLBACK_ARTICLES;
  } catch {
    return FALLBACK_ARTICLES;
  }
}
