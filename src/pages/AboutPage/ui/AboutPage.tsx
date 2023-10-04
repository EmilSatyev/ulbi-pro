import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <>{t('about')}</>;
};
export default AboutPage;
