import laravel from './assets/laravel.jpg';
import react from './assets/react.png';
import mysql from './assets/mysql.png';
import livewire from './assets/livewire.png';

export const SKILLS = [
    {
        title: 'PHP ja Laravel',
        image: laravel,
        description: "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony."
    },
    {
        title: 'MySQL',
        image: mysql,
        description: "MySQL is an open-source relational database management system. Its name is a combination of My, the name of co-founder Michael Widenius's daughter, and SQL, the abbreviation for Structured Query Language."
    },
    {
        title: 'React',
        image: react,
        description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
    },
    {
        title: "Other Skills",
        image: livewire,
        description: "I also have experience in using Tailwind CSS, Livewire, and Alpine JS."
    }
];

export const EXAMPLES = {
    osamaksuturva: {
      title: 'Osamaksuturva.fi',
      description:
        'Osamaksuturva.fi on verkkosivusto, joka tarjoaa asiakkaille mahdollisuuden hakea osamaksuturvaa. Sivusto on toteutettu Laravelilla ja Tailwind CSS:llä. Projektissa toteutettiin hakemuslomake, joka lähettää tiedot API:lle. API:n kautta tiedot tallennetaan tietokantaan. Tietokannasta tiedot haetaan admin paneeliin, jossa ne voidaan hyväksyä tai hylätä. Admin paneeli on toteutettu Livewirella ja Tailwind CSS:llä.',
      link: 'https://osamaksuturva.fi',
    },
    luontotori: {
      title: 'Luontotori.fi',
      description:
        'Luontotori.fi on kaupankäyntialusta, jossa maanomistajat tarjoavat tuotteita ja palveluita kuluttajille. Projekti toteutettiin Laravelilla, HTML:llä, CSS:llä ja JavaScriptillä. Tietokantana käytettiin MySQL:ää. Projektissa toteutettiin mm. tuotteiden lisääminen, muokkaaminen ja poistaminen. Lisäksi toteutettiin hakutoiminto, jolla tuotteita voidaan hakea. Hakutoiminto on toteutettu Laravelin Eloquent kyselyiden avulla.',
      link: 'https://luontotori.fi',
    },
    roosaKosunen: {
      title: 'Valokuvaaja Roosa Kosunen',
      description:
        'Valokuvaaja Roosa Kosusen nettisivusto toteutettiin WordPress alustalla. Sivusto on toteutettu PHP:llä, HTML:llä, CSS:llä ja JavaScriptillä. Sivustolla on toteutettu mm. galleria, jossa on valokuvaajan ottamia kuvia. Galleria on toteutettu JavaScriptillä. Sivustolla on myös yhteydenottolomake, joka lähettää tiedot sähköpostiin. Lomake on toteutettu PHP:lla.',
      link: 'https://roosakosunen.fi',
    },
  };