export default function ServiceSchema({ name, description, url }: { name: string, description: string, url: string }) {
  const absoluteUrl = url.startsWith('http') ? url : `https://codigonexo.mx${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "CódigoNexo",
      "url": "https://codigonexo.mx"
    },
    "url": absoluteUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
