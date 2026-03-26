import { Helmet } from "react-helmet-async";

const SITE_NAME = "Trinity EV";
const SITE_URL = "https://yourdomain.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title = "Trinity EV | Electric Scooters for Modern Mobility",
  description = "Trinity EV offers stylish and practical electric scooters designed for modern mobility, performance, and everyday convenience.",
  path = "/",
  image = DEFAULT_IMAGE,
  keywords = "Trinity EV, electric scooter, EV scooter, electric mobility, e-scooter India, modern electric scooter",
}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}