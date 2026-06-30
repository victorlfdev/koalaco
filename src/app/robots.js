export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://koalaco.vercel.app/sitemap.xml",
  };
}
