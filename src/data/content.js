export const content = {
  name:{
      first: "Dodewaards",
      second: "Mannenkoor",
  },
  routes: [
      {name: "Home", link: "/", options: ''},
      {name: "Wie we zijn", link: "/wiewezijn", options: 
        [{name: "Over ons", link: "/overons"},{name: "geschiedenis", link: "/geschiedenis"},{name: "bestuur", link: "/bestuur"}]},
      {name: "Agenda", link: "/agenda", options: ''},
      {name: "Foto's", link: "/foto", options: ''},
      {name: "Lid worden", link: "/lidworden", options: ''},
      {name: "Sponseren", link: "/sponseren", options: ''},
      {name: "Contact", link: "/contact", options: ''},
  ],
  sections:{
    introduction:{
        heading: 'Welkom op de website van het dodewaards mannenkoor',
        paragraph: [
            'Het Dodewaards Mannenkoor is een algemeen koor met leden uit Dodewaard en omgeving. Ons koor bestaat sinds 1948 en is een graag geziene gast bij verschillende gelegenheden.',
            'Bij het begin van de vakantie en begin januari worden ook de dames van de leden betrokken bij de activiteit die er dan wordt georganiseerd.De dames en enkele leden van ons koor maken in december ook kerstversieringen welke de leden dan op de markt verkopen.',
            'Het koor treed meerdere keren per jaar op voor verschillende doelgroepen. Mocht u graag eens een avond in de week iets anders willen doen, kom eens vrijblijvend luisteren of meezingen op een oefenavond.',
            'Zangervaring is echt niet nodig dit wordt vanzelf bijgebracht net zoals dit bij de meeste leden is gebeurd. ',
            'Welkom en kijk gerust verder op onze website!',
        ],
        images:['intro-1.jpg', 'intro-2.jpg'],
        videos: ['intro-video.mp4', 'intro-video.webm']
    },
    news: {
        heading: 'Nieuws & Update',
        list:[{date: '27-11-2020', text: 'Uiteraard houden we ons aan de richtlijnen van het RIVM.'}]
    },
    agenda:{
        heading: 'Agenda',
        upcommingEvents: 'Komende Evenementen',
        paragraph: ['Uiteraard kan dit alleen doorgaan als de Coronacrisis dit toelaat.'],
        list:[
            {date: '11-12-2020', dispalyDate: '11 Dec', text: 'Adventsconcert'},
            {date: '16-12-2020', dispalyDate: '16 Dec',text: 'Kerstbakjes maken'},
            {date: '18-12-2020', dispalyDate: '18 Dec',text: 'Kerstconcert'},
            {date: '19-12-2020', dispalyDate: '19 Dec',text: 'Kerstbakjes verkoop @Hoge Hof Herveld'},
        ]
    },
    history:{
        heading: 'Geschiedenis',
        paragraph: ['Het koor is ontstaan na de Tweede Wereldoorlog, vanuit muziekvereniging Amicitia te Dodewaard.',
        'Omdat door de Duitse bezetter ook muziekinstrumenten waren ingevorderd en muzikanten daarnaast hun instrumenten hadden verborgen kon er geen muziek worden gemaakt. Daarom kwamen enkele mannen op het idee om hun stem als instrument te gaan gebruiken.',
        'Opzet was, om dat mannengezang aan te houden tot het moment, dat men weer over muziekinstrumenten kon beschikken. Dan kon men weer op de “normale manier” muziek gaan maken. Nou dat is even iets anders gelopen, dan men zich had voorgesteld!',
        'Als mannen zingen is tot op de dag van vandaag nog een activiteit waar zo’n 30 mannen zinvol mee bezig zijn. Daarbij verzorgen de heren optredens binnen en buiten Dodewaard. Zijn een graag geziene gast in o.a bejaardenhuizen en kerken. Het typeert het koor dan ook, dat men van alle gezindten thuis is, naast religieuze liederen, zingt men ook Rijnliederen en liefdesliederen.',
        'Het Dodewaards Mannenkoor voldoet in al die jaren aan een duidelijke behoefte. Dat blijkt wel uit het feit, dat er mannen zijn die reeds 57 jaar lid zijn en nog steeds actief mee zingen.',
        'Het koor is in de loop van de jaren uitgegroeid van een mannenkoor tot een zingende herensociëteit, zoals onze oud voorzitter Henk Onderstal het vaak noemt. Dat is ook de kracht. Zingen blijft uiteraard super belangrijk, maar het samen als mannenkoor vertoeven en sociaal samen te zijn speelt een steeds grotere rol. Kende men vroeger het vereenzamen van ouderen minder, tegenwoordig is dat een vaststaand feit. Het Dodewaards Mannenkoor biedt middels haar activiteiten mannen een sociaal ontmoetingspunt aan, waar je ook kan zingen. Als je dingen niet kunt zeggen, dan kun je het zeker wel zingen.'],
        images:[{text: 'Dodewaards mannenkoor. foto genomen tussen 1945 en 1948', image: '../assets/history.jpg'}],
    },
    board:{
        heading: 'Bestuur',
        paragraph: ['Het bestuur bestaat uit 5 personen.',
                    'Wim Veerman uit Ochten is onze dirigent. Tijdens het oefenen is hij heel erg gemotiveerd en bevlogen.'],
        members:[
        {position: 'Voorzitter', name: 'Kees van Dijk', image: '/boadMembers/KeesVanDijk.jpg'},
        {position: 'Secretaris', name: 'Wim Bloemendal', image: '/boadMembers/WimBloemendal.jpg'},
        {position: 'Penningmeester', name: 'Jan Heikamp', image: '/boadMembers/JanHeikamp.jpg'},
        {position: 'Bestuurslid', name: 'Kees Hoogakker', image: '/boadMembers/KeesHoogakker.jpg'},
        {position: 'Bestuurslid', name: 'Casper van Doorn', image: '/boadMembers/CasperVanDoorn.jpg'}],
        
    },
    activities:{
        heading: "Foto's",
        images: [{text: 'Deelname aan winkel van sinkel', image: '../assets/activities/Deelname aan winkel van sinkel.jpg'},
                 {text: 'Deelnemers oldtimerrit', image: '../assets/activities/Deelnemers oldtimerrit.jpg'},
                 {text: 'Kerststukjes maken', image: '../assets/activities/Kerststukjes.jpg'},
                 {text: 'Nieuwjaarsbijeenkomst', image: '../assets/activities/Nieuwjaarsbijeenkomst.jpg'},
                 {text: 'Nieuwjaarsreceptie', image: '../assets/activities/Nieuwjaarsreceptie.jpg'},
                 {text: 'Optocht bevrijdingsdag 5-05-2015', image: '../assets/activities/Optocht bevrijdingsdag 5-05-2015-1.jpg'},
                 {text: 'Optocht bevrijdingsdag 5-05-2015', image: '../assets/activities/Optocht bevrijdingsdag 5-05-2015-2.jpg'},
                 {text: 'Verkoop kerstbakjes', image: '../assets/activities/Verkoop kerstbakjes.jpg'},
                 {text: 'Visdag met barbecue', image: '../assets/activities/Visdag met barbecue.jpg'},
                 {text: 'Wat zou er aanzitten', image: '../assets/activities/Wat zou er aanzitten.jpg'},],
    },
    becomeMember:{
        heading: 'Lid Worden',
        paragraph:['Nieuwe leden,','Mannen uit Dodewaard en omstreken!','Kom een keer vrijblijvend kennismaken','Elke donderdag om 19:30 uur tot 21.30 uur. Momenteel tijdens Corona wordt er tot nader bericht niet gezongen. Voor nadere informatie mail naar secretarisdmk@outlook.com.',
                    'Waarom zingen?', 'Zingen is een sport en zingen in een koor kun je zelfs teamsport noemen. Maar goede resultaten bereik je niet zomaar ...Presteren vraagt om een goede combinatie van houding, ademhaling en techniek. De conditie van de (zang)spieren, tactiek, strategie en spelinzicht. Laat dat allemaal over aan de coach van het koor, de dirigent, dan kunnen wij samen lekker zingen. De mooiste muziekinstrumenten zijn zingende mensen!',
                    "Als je gaat zingen heb je jouw instrument altijd bij je. Dat is makkelijk, jouw instrument doet het altijd en je kunt meteen beginnen. Je kunt zonder les gehad te hebben meteen al een aardig nootje zingen. Zingen neemt niet te duiden barrières weg, verzoent en geeft verbroedering. Al zingende vervalt de schroom, komen emoties los, ontstaat begrip en verheldering. Vandaar de uitdrukking als iemand niet uit zijn woorden kan komen: ‘zing het maar’.",],
        list:
        {text: 'Zingen bij het Dodewaards Mannenkoor',
         options: ['Dat is 1 keer per week trainen en regelmatig een wedstrijd',
         'De repetities zijn iedere donderdagavond van 19:30 tot 21:30 uur met uitzondering van de schoolvakanties en er is pauze van 20:30 tot 20:45 uur.',
         'Regelmatig geven wij concerten en zijn er ook diverse optredens in de omgeving, kerstconcerten e.d.',
         'U mag onze dirigent overtuigen dat u niet kunt zingen, wedden dat u het wel kunt. Noten kunnen lezen is niet noodzakelijk, maar is wel makkelijker.','Elk jaar houden we een nieuwjaarsbijeenkomst en in de zomer een barbecue samen met onze partners, want het Dodewaards Mannenkoor is meer dan zingen alleen!']
        },
        download:{
            text: 'Download de privacyverklaring',

        }
    },
    sponser:{
        heading: 'Sponseren',
        paragraph: ['Sponsoren en donateurs,',
                    'Het Dodewaards Mannenkoor kan bijna niet bestaan zonder sponsoring en donaties. Natuurlijk houden wij zelf ook steeds acties om onze verenigingskas aan te vullen, maar dat blijkt vaak niet genoeg om al onze onkosten te bestrijden. Als ons koor u aanspreekt en u wilt ons financieel steunen, dan zijn wij daar erg dankbaar voor.',
                    'Als sponsor en donateur ondersteunt u het in stand houden van het koor. Als sponsor krijgt u op onze site een vermelding van het logo van uw bedrijf. Indien gewenst maken wij een link naar uw eigen website.',
                    'Heeft u belangstelling om ons op enige manier te ondersteunen, dan kunt u contact opnemen met de secretaris.',],

    },
    contact:{
        heading: 'Contact',
        paragraph: ['Secretaris: Wim Bloemendal', 'Email: secretarisdmk@outlook.com'],

    },    

  }


}