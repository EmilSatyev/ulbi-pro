import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>{t('main')}</>
  );
};

export default MainPage;
