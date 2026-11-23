export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export interface CardData {
  plain: string;
  accent: string;
  text: string;
}

export interface Dict {
  meta: { title: string; description: string };
  nav: { label: string; menu: string; home: string; safe: string; gala: string };
  hero: {
    /** HTML autorisé : <span> pour la partie "ALL" colorée */
    title: string;
    line1: string;
    line2: string;
    credit: string;
    instagram: string;
  };
  actions: { title: string; items: CardData[] };
  gallery: { title: string; label: string };
  events: { title: string; items: CardData[] };
  team: { title: string; alt: string };
  footer: { made: string; home: string; safe: string; gala: string; bde: string };
  switchLabel: string;
}

export const ui: Record<Lang, Dict> = {
  fr: {
    meta: {
      title: 'EquALLity | Club féministe',
      description: 'EquALLity, le club féministe du campus : notre équipe, nos actions et nos évènements.',
    },
    nav: { label: 'Navigation principale', menu: 'Ouvrir le menu', home: 'Accueil', safe: 'Safe', gala: 'Gala' },
    hero: {
      title: 'Bienvenue sur Equ<span>ALL</span>ity.fr!',
      line1: 'EquALLity est le club féministe du campus!',
      line2: "Vous pouvez en apprendre plus grâce à ce site sur l'équipe, nos actions...",
      credit: 'Crédit photos: déclic',
      instagram: 'Instagram',
    },
    actions: {
      title: 'Nos actions régulières',
      items: [
        { plain: 'Stand', accent: 'Safe', text: "Nous tenons à chaque grand évènement un \"stand safe\" en collaboration avec In&AcT. Ce stand permet aux étudiants de disposer d'une safe place/endroit calme en soirée ainsi que de protections (auditives, de verre, hygiéniques, préservatifs). Ils y a toujours un responsable VSS de présent prêt à intervenir." },
        { plain: 'Distribution de', accent: 'serviettes hygiéniques', text: "Régulièrement, EquALLity organise des distributions gratuites afin de lutter contre la précarité menstruelle. Ces stands se tiennent le jeudi après-midi toutes les 2 semaines." },
      ],
    },
    gallery: { title: 'Plus d\'images', label: "Galerie d'images" },
    events: {
      title: 'Nos évènements exceptionnels',
      items: [
        { plain: 'Octobre', accent: 'Rose', text: "Chaque année EquALLity organise avec l'ASINT (association sportive)une course où le principe est simple et solidaire: 1km parcourut = 1€ reversé au profit de l'association Octobre Rose. Chaque année, plus de 1100€ sont récoltés." },
        { plain: 'Girl', accent: 'Xtreme', text: "Cette évènement avec le club Xtrem vise à mettre à l'honneur des femmes inspirantes qui conjuguent leur parcourt professionnel avec le sport. Le programme se compose d'un temps d'échange et de conseils suivi par un footing avec les étudiants." },
      ],
    },
    team: { title: 'Notre équipe', alt: "Photo de l'équipe EquALLity" },
    footer: { made: 'créé par EquALLity', home: 'Accueil', safe: 'Safe', gala: 'Gala', bde: 'BDE' },
    switchLabel: 'Switch to English',
  },
  en: {
    meta: {
      title: 'EquALLity | Feminist club',
      description: 'EquALLity, the campus feminist club: meet our team, our actions and our special events.',
    },
    nav: { label: 'Main navigation', menu: 'Open menu', home: 'Home', safe: 'Safe', gala: 'Gala' },
    hero: {
      title: 'Welcome to Equ<span>ALL</span>ity.fr!',
      line1: 'EquALLity is the feminist club of the campus!',
      line2: 'Learn more about our team and our actions on this website...',
      credit: 'Photo credits: déclic',
      instagram: 'Instagram',
    },
    actions: {
      title: 'Our regular actions',
      items: [
        { plain: 'Safe', accent: 'Stand', text: "At every major event, we host a \"safe stand\" in collaboration with In&AcT. This stand provides students with a safe space/a quiet area to retreat to during the evening, as well as various protective items (such as earplugs, drink covers, hygiene products, and condoms). A designated person responsible for addressing gender-based and sexual violence (VSS) is always present and ready to intervene." },
        { plain: 'Free', accent: 'sanitary pad distribution', text: "EquALLity regularly organizes free distributions to fight against period poverty. These stands take place on Thursday afternoons." },
      ],
    },
    gallery: { title: 'More pictures', label: 'Image gallery' },
    events: {
      title: 'Our special events',
      items: [
        { plain: 'Pink', accent: 'October', text: "Every year, EquALLity teams up with ASINT (the sports association) to organize a charity run with a simple, supportive concept: 1 km run = €1 donated to the Pink October breast cancer awareness charity. Over €1,100 is raised each year." },
        { plain: 'Girl', accent: 'Xtreme', text: "This event, held with the Xtrem club, aims to highlight inspiring women who balance their professional careers with sports. The program includes a Q&A and advice session followed by a group jog with students." },
      ],
    },
    team: { title: 'Our team', alt: 'EquALLity team photo' },
    footer: { made: 'made by EquALLity', home: 'Home', safe: 'Safe', gala: 'Gala', bde: 'BDE' },
    switchLabel: 'Passer en français',
  },
};

export const getDict = (lang: Lang): Dict => ui[lang];
export const getOtherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr');
