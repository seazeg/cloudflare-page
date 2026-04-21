import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
  return [
    { slug: 'website' },
    { slug: 'miniprogram' },
  ];
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />;
}
