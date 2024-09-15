import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import Loader from "../Loader/Loader";

const PageLoader = () => {
  return (
    <div className={classNames(cls.pageLoader, {}, [])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
