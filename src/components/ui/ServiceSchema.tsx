interface Props {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ name, description, url }: Props) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "CódigoNexo",
      "url": "https://codigonexo.com"
    },
    "url": `https://codigonexo.com${url}`,
    "areaServed": "Worldwide"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
