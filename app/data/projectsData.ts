/**
 * Selected client projects.
 * Rule: Kept empty until real, authorized project case studies are provided.
 * Components rendering selected work must check `selectedProjects.length > 0`
 * and remain completely hidden when empty.
 */

export interface Project {
  slug: string;
  title: string;
  client: string;
  clientIndustry: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  published: boolean;
}

export const selectedProjects: Project[] = [];
