import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { aiAutomationPage } from '@/lib/data/service-pages';

export const metadata: Metadata = {
  title: aiAutomationPage.metadata.title,
  description: aiAutomationPage.metadata.description,
};

export default function AIAutomationPage() {
  return <ServiceLayout data={aiAutomationPage} />;
}
