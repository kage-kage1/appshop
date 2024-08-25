import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">{t('profile')}</h2>
      <p>{t('user_info')}</p>
      <button className="bg-red-500 text-white p-2">{t('logout')}</button>
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
