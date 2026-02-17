import type { Metadata } from 'next';
import { ServiceLayout } from '@/components/services/ServiceLayout';
import { itConsultingPage } from '@/lib/data/service-pages';

export const metadata: Metadata = {
  title: itConsultingPage.metadata.title,
  description: itConsultingPage.metadata.description,
};

export default function ITConsultingPage() {
  return <ServiceLayout data={itConsultingPage} />;
}
