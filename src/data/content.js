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
      {name: "Sponsoren", link: "/sponsoren", options: ''},
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
        paragraph: [],
        y2023:[
            {displayDate: '13 April', text: 'Zingen in Zorgcentrum Elim in Ochten', date: '04/13/2023'},
            {displayDate: '22 April', text: 'Tent samen met KNA opzetten op het dorpsplein', date: '04/22/2023'},
            {displayDate: '27 April', text: 'Om 11.00 uur zingen tijdens de aubade te Dodewaard', date: '04/27/2023'},
            {displayDate: '6 Juli', text: 'Zingen in het Vrijhof in Tiel om 19.30 uur', date: '07/06/2023'},
            {displayDate: '13 Juli', text: 'Laatste oefenavond voor de vakantie', date: '07/13/2023'},
            {displayDate: '31 Augustus', text: 'De eerste oefenavond na de vakantie', date: '08/31/2023'},
            {displayDate: '26 Oktober', text: 'Zingen in Kesteren op uitnodiging van gemengd koor Kesteren.', date: '10/26/2023'},
        ],
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
                    'Onze dirigent is Jaap van Dijk uit Renswoude. Tijdens het oefenen is hij heel erg gemotiveerd.'],
        members:[
        {position: 'Voorzitter', name: 'Gert van de Kolk', image: '/boadMembers/GertvandeKolk.jpg'},
        {position: 'Secretaris', name: 'Wim Bloemendal', image: '/boadMembers/WimBloemendal.jpg'},
        {position: 'Penningmeester', name: 'Jan Heikamp', image: '/boadMembers/JanHeikamp.jpg'},
        {position: 'Bestuurslid', name: 'Kees Hoogakker', image: '/boadMembers/KeesHoogakker.jpg'},
        {position: 'Bestuurslid', name: 'Casper van Doorn', image: '/boadMembers/CasperVanDoorn.jpg'}],
        
    },
    activities:{
        heading: "Foto's",
        images: [
                 {text: 'Deelname aan winkel van sinkel', image: '../assets/activities/Deelname aan winkel van sinkel.jpg'},
                 {text: 'Deelnemers oldtimerrit', image: '../assets/activities/Deelnemers oldtimerrit.jpg'},
                 {text: 'Kerststukjes maken', image: '../assets/activities/Kerststukjes.jpg'},
                 {text: 'Nieuwjaarsbijeenkomst', image: '../assets/activities/Nieuwjaarsbijeenkomst.jpg'},
                 {text: 'Nieuwjaarsreceptie', image: '../assets/activities/Nieuwjaarsreceptie.jpg'},
                 {text: 'Optocht bevrijdingsdag 5-05-2015', image: '../assets/activities/Optocht bevrijdingsdag 5-05-2015-1.jpg'},
                 {text: 'Optocht bevrijdingsdag 5-05-2015', image: '../assets/activities/Optocht bevrijdingsdag 5-05-2015-2.jpg'},
                 {text: 'Verkoop kerstbakjes', image: '../assets/activities/Verkoop kerstbakjes.jpg'},
                 {text: 'Visdag met barbecue', image: '../assets/activities/Visdag met barbecue.jpg'},
                 {text: 'Wat zou er aanzitten', image: '../assets/activities/Wat zou er aanzitten.jpg'},
                 {text: 'Jan Bijl 40 jarig jubileum', image: '../assets/activities/jan.png'},
                 {text: 'Keurig verzorgde lekkere hapjes', image: '../assets/activities/.jpg'},
                 {text: 'Gezelligheid met hapjes en partners', image: '../assets/activities/Gezelligheid met hapjes en partners.jpg'},
                 {text: 'Avond met hapjes en gezelligheid', image: '../assets/activities/Avond met hapjes en gezelligheid.jpg'},
                ],
    },
    becomeMember:{
        heading: 'Lid Worden',
        paragraph:[
            'Nieuwe leden,',
            'Mannen uit Dodewaard en omstreken!','Kom een keer vrijblijvend kennismaken.',
            "Elke donderdag om 19:30 uur tot 21.30 uur. Voor nadere informatie mail naar secretarisdmk@outlook.com. Waarom zingen?", 'Zingen is een sport en zingen in een koor kun je zelfs teamsport noemen. Maar goede resultaten bereik je niet zomaar ...Presteren vraagt om een goede combinatie van houding, ademhaling, techniek en de conditie van de (zang)spieren.',
            'Laat dat maar over aan de coach van het koor, de dirigent. De mooiste muziekinstrumenten zijn de stemmen van zingende mensen!',
            "Als je gaat zingen heb je jouw instrument altijd bij je. Zonder les te hebben kan je al een aardig nootje zingen. Zingen neemt barrières weg, verzoent en geeft verbroedering. Al zingend vervalt de schroom, komen emoties los, ontstaat begrip en verheldering. Vandaar de uitdrukking als iemand niet uit zijn woorden kan komen: ‘zing het maar’.",
            'Zingen bij het Dodewaards Mannenkoor: Dat is 1 keer per week trainen en regelmatig een wedstrijd. De repetities zijn iedere donderdagavond van 19:30 tot 21:30 uur met uitzondering van de schoolvakanties en er is pauze van 20:30 tot 20:45 uur.',
            'Regelmatig geven wij concerten, waaronder kerstconcerten, en zijn er ook diverse optredens in de omgeving. Denkt u dat u niet kan zingen? Daar denkt onze dirigent anders over. Wedden dat u wel kunt zingen? Noten kunnen lezen is niet noodzakelijk.',
            ],
        // list:
        // {text: 'Zingen bij het Dodewaards Mannenkoor',
        //  options: ['Dat is 1 keer per week trainen en regelmatig een wedstrijd',
        //  'De repetities zijn iedere donderdagavond van 19:30 tot 21:30 uur met uitzondering van de schoolvakanties en er is pauze van 20:30 tot 20:45 uur.',
        //  'Regelmatig geven wij concerten en zijn er ook diverse optredens in de omgeving, kerstconcerten e.d.',
        //  'U mag onze dirigent overtuigen dat u niet kunt zingen, wedden dat u het wel kunt. Noten kunnen lezen is niet noodzakelijk, maar is wel makkelijker.','Elk jaar houden we een nieuwjaarsbijeenkomst en in de zomer een barbecue samen met onze partners, want het Dodewaards Mannenkoor is meer dan zingen alleen!']
        // },
        download:{
            text: 'Download de privacyverklaring',

        }
    },
    sponser:{
        heading: 'Sponsoren',
        paragraph: ['Sponsoren en donateurs,',
                    'Het Dodewaards Mannenkoor kan niet bestaan zonder sponsoring en donaties. Het houden van concerten is vaak een dure aangelegenheid. De opbrengst van de contributie blijkt vaak niet genoeg om al onze onkosten te dekken. Als ons koor u aanspreekt en u wilt ons financieel steunen, dan zijn wij daar erg dankbaar voor.',
                    'Als sponsor en donateur ondersteunt u het koor, waardoor het kan blijven bestaan. Als sponsor krijgt u op onze site een vermelding met het logo van uw bedrijf. Indien gewenst maken wij een link naar uw eigen website.',
                    'Heeft u belangstelling om ons op enige manier te ondersteunen, dan kunt u contact opnemen met de secretaris.','secretarisdmk@outlook.com '],

    },
    contact:{
        heading: 'Contact',
        paragraph: ['Secretaris: Wim Bloemendal', 'Email: secretarisdmk@outlook.com'],

    },    

  }


}