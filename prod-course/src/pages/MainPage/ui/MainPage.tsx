import { BugButton } from "app/providers/errorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <BugButton />
        {t("Главная страница")}
      </div>
    </>
  );
};

export default MainPage;
