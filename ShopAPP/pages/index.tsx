import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{t('welcome')}</h1>
      <p>{t('select_packet')}</p>
      <Link href="/order">
        <a className="text-blue-500">{t('order_now')}</a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
