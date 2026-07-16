import { Providers } from '@/app/providers';

export default function ReadLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
