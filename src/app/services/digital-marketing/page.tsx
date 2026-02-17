import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { digitalMarketingPage } from '@/lib/data/service-pages';

export const metadata: Metadata = {
  title: digitalMarketingPage.metadata.title,
  description: digitalMarketingPage.metadata.description,
};

export default function DigitalMarketingPage() {
  return <ServiceLayout data={digitalMarketingPage} />;
}
