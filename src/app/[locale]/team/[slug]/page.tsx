import TeamDetailClient from './TeamDetailClient';

export function generateStaticParams() {
  return [
    { slug: 'member-1' },
    { slug: 'member-2' },
    { slug: 'member-3' },
  ];
}

export default function TeamDetailPage() {
  return <TeamDetailClient />;
}
