// app/page.tsx

import { headers } from 'next/headers';
import HomePage from './HomePage';

export default function Page() {
  const headersList = headers();
  const acceptLang = headersList.get('accept-language') || 'en';
  const initialLanguage = acceptLang.startsWith('ar') ? 'ar' : 'en';

  return <HomePage initialLanguage={initialLanguage} />;
}