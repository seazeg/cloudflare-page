import fs from 'fs';
import path from 'path';

const designsDirectory = path.join(process.cwd(), 'data/designs');

export type ServiceType = '独立站' | '小程序' | 'APP';

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

export function getAllDesigns(): DesignShowcase[] {
  if (!fs.existsSync(designsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(designsDirectory);
  const designs = files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(designsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContent) as DesignShowcase;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return designs;
}

export function getFeaturedDesigns(): DesignShowcase[] {
  return getAllDesigns().filter(design => design.featured);
}

export function getDesignsByType(type: ServiceType): DesignShowcase[] {
  return getAllDesigns().filter(design => design.serviceType === type);
}

export function getDesignsByIndustry(industry: string): DesignShowcase[] {
  return getAllDesigns().filter(design => design.industry === industry);
}

export function getDesignsByStyle(style: string): DesignShowcase[] {
  return getAllDesigns().filter(design => design.style === style);
}

export function getDesignById(id: string): DesignShowcase | null {
  const designs = getAllDesigns();
  return designs.find(design => design.id === id) || null;
}

export function filterDesigns(filters: {
  type?: ServiceType;
  industry?: string;
  style?: string;
}): DesignShowcase[] {
  let designs = getAllDesigns();

  if (filters.type) {
    designs = designs.filter(design => design.serviceType === filters.type);
  }

  if (filters.industry) {
    designs = designs.filter(design => design.industry === filters.industry);
  }

  if (filters.style) {
    designs = designs.filter(design => design.style === filters.style);
  }

  return designs;
}

export function getAllIndustries(): string[] {
  const designs = getAllDesigns();
  const industries = new Set(designs.map(design => design.industry));
  return Array.from(industries);
}

export function getAllStyles(): string[] {
  const designs = getAllDesigns();
  const styles = new Set(designs.map(design => design.style));
  return Array.from(styles);
}
