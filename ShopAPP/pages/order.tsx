import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Order() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Redirect to payment page with order details
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">{t('place_order')}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label>{t('diamond_packet')}</label>
          <select {...register('packet')} className="block w-full p-2 border">
            <option value="50">50 Diamonds</option>
            <option value="100">100 Diamonds</option>
            <option value="250">250 Diamonds</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label>{t('user_id')}</label>
          <input type="text" {...register('userId')} className="block w-full p-2 border" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">{t('proceed_to_payment')}</button>
      </form>
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
