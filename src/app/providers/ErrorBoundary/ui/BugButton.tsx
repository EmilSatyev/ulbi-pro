import { Button } from '@storybook/react/demo';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw Error('sdf');
    }
  }, [error]);
  return <Button onClick={throwError}>{t('error')}</Button>;
};
