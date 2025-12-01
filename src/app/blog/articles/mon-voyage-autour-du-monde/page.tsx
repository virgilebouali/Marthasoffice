"use client"
import { Footer } from '@/src/app/components/Footer'
import { NavbarDesktop } from '@/src/app/components/NavbarDesktop'
import { NavbarMobile } from '@/src/app/components/navbarMobile'
import Image from 'next/image';
import { useLanguage } from '@/src/app/LanguageContext'
import { frenchTranslations } from '@/src/app/locales/fr-default'


const Article1 = () => {
    const langContext = useLanguage();
    const translations = langContext?.translations ?? frenchTranslations;

    return (
        <>
            <NavbarDesktop />
            <NavbarMobile />
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-16  text-gray-900 " >
                <div className="w-full mx-auto space-y-4">
                    <h2 className="text-3xl xl:text-5xl  font-bold leading-none text-red">{translations?.ArticleTitle1 || 'Mon voyage à travers le monde et son impact sur ma vie professionnelle'}</h2>
                    <Image width={500} height={500} src="/travel.jpeg" alt="mon-voyage-a-travers-le-monde" className="inline-block h-60 w-full object-cover" />

                    <div className="flex flex-wrap space-x-2 text-sm text-gray-600">
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Travel</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Lifestyle</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Découverte</a>
                    </div>
                    <p className="text-sm text-gray-600">par : 
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue font-bold">
                            <span>{translations?.Name || 'Cynthia Cereyon'}</span>
                        </a>
                    </p>
                </div>
                <div className="text-gray-800">
                    <p className="mb-4">{translations?.['1paragraphe1'] || "L'année dernière, j'ai bénéficié d'une pause de six mois et j'ai réalisé le rêve de ma fille en entreprenant un tour du monde, visitant 17 pays."}</p>
                    <p className="mb-4">{translations?.['1paragraphe2'] || "Pendant cette période, j'ai également rencontré des entrepreneurs et des propriétaires de start-ups, leur offrant des conseils et des services qui les ont aidés à prospérer."}</p>
                    <p className="mb-4">{translations?.['1paragraphe3'] || "Un ami de longue date que j'ai rencontré en Afrique m'a remercié en disant : \"Tu as littéralement changé ma vie, Cynthia, en changeant ma perception de la vie et des événements professionnels.\""}</p>
                    <p className="mb-4">{translations?.['1paragraphe4'] || "Elle a ensuite repensé sa stratégie d'entreprise, ajusté ses prix pour rendre son entreprise plus rentable, et a depuis développé avec succès sa nouvelle entreprise."}</p>
                    <p className="mb-4">{translations?.['1paragraphe5'] || "Un autre nouveau compagnon de voyage que j'ai rencontré en Amérique du Sud a reconnu l'importance de mon travail. Un leader d'entreprise confronté à des défis financiers a déclaré : \"Merci pour tout. Nous, en tant que dirigeants, avons besoin de vos services à court ou moyen terme.\" Ces expériences ont renforcé ma conviction que mon travail peut avoir un impact réel et significatif sur la vie des entrepreneurs que j'accompagne."}</p>
                    <p className="mb-4">{"Inspirée par ces expériences, j'ai décidé de créer \"Marthas Office\", une entreprise dédiée à soutenir et guider les entrepreneurs dans leur croissance."}</p>
                </div>

            </article>
            <Footer />  
        </>
    )
}

export default Article1