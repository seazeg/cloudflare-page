// 静态数据版本，用于客户端
import designsData from '../../data/designs/designs.json';

export type ServiceType = '独立站' | '小程序';

export interface DesignShowcase {
  id: string;
  title: string;
  serviceType: ServiceType;
  industry: string;
  style: string;
  cover: string;
  images: string[];
  tags: string[];
  featured: boolean;
  date: string;
}

const designs: DesignShowcase[] = designsData as DesignShowcase[];

export function getAllDesigns(): DesignShowcase[] {
  return [...designs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedDesigns(): DesignShowcase[] {
  return designs.filter(design => design.featured);
}

export function getDesignsByType(type: ServiceType): DesignShowcase[] {
  return designs.filter(design => design.serviceType === type);
}

export function getDesignsByIndustry(industry: string): DesignShowcase[] {
  return designs.filter(design => design.industry === industry);
}

export function getDesignsByStyle(style: string): DesignShowcase[] {
  return designs.filter(design => design.style === style);
}

export function getDesignById(id: string): DesignShowcase | null {
  return designs.find(design => design.id === id) || null;
}

export function filterDesigns(filters: {
  type?: ServiceType;
  industry?: string;
  style?: string;
}): DesignShowcase[] {
  let result = [...designs];

  if (filters.type) {
    result = result.filter(design => design.serviceType === filters.type);
  }

  if (filters.industry) {
    result = result.filter(design => design.industry === filters.industry);
  }

  if (filters.style) {
    result = result.filter(design => design.style === filters.style);
  }

  return result;
}

export function getAllIndustries(): string[] {
  const industries = new Set(designs.map(design => design.industry));
  return Array.from(industries);
}

export function getAllStyles(): string[] {
  const styles = new Set(designs.map(design => design.style));
  return Array.from(styles);
}
