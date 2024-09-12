import { useTranslation } from "react-i18next";


const AboutPage = () => {   
    const {t} = useTranslation();

    return (
        <>
            {t('О сайте')}
        </>
    )
};


export default AboutPage;