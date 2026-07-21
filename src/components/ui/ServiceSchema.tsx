interface Props {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ name, description, url }: Props) {
  const absoluteUrl = url.startsWith('http') ? url : `https://codigonexo.mx${url}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "CódigoNexo",
      "url": "https://codigonexo.mx"
    },
    "url": absoluteUrl,
    "areaServed": "Worldwide"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
