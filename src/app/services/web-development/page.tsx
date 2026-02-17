import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { webDevelopmentPage } from '@/lib/data/service-pages';

export const metadata: Metadata = {
  title: webDevelopmentPage.metadata.title,
  description: webDevelopmentPage.metadata.description,
};

export default function WebDevelopmentPage() {
  return <ServiceLayout data={webDevelopmentPage} />;
}
