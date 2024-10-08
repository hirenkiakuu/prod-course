import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

// компонент для тестов
const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={throwError}>{t("throw error")}</Button>;
};

export default BugButton;
