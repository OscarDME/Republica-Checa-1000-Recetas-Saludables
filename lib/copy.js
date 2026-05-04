// lib/copy.js — KOMPLETNÍ viditelný obsah prodejní stránky.
// Všechny úpravy textu se provádějí zde. Komponenty čtou data výhradně z tohoto objektu.

export const copy = {
  metadata: {
    title: "1000 Zdravých receptů 2.0",
    description:
      "1000 Zdravých receptů 2.0 pro diabetiky: chutné, snadné a vytvořené speciálně pro kontrolu hladiny cukru v krvi. Speciální akce: 199 Kč + 5 bonusů zdarma.",
    lang: "cs",
  },

  brand: {
    name: "",
    tagline: "",
  },

  hero: {
    banner: "TATO AKCE + BONUSY ZDARMA KONČÍ ZA:",
    timerLabels: { days: "Dny", hours: "Hod", minutes: "Min", seconds: "Sek" },
    kicker: "Více než 2 000 lidí už změnilo svůj život",
    headlinePre: "Už více než 2 000 lidí",
    headlineHighlight: "zlepšilo své zdraví",
    headlinePost: "díky našim 1000 receptům",
    subheadline: "Cukrovka není důvod k tomu, abyste se vzdali dobrého jídla!",
    supporting:
      "Zlepšete si zdraví a užívejte si skvělé chutě s našimi 1000 zdravými recepty 2.0.",
    cta: "Chci knihu teď! 📖",
    imageAlt: "E-kniha 1000 Zdravých receptů 2.0 pro diabetiky",
    trustChips: [
      { icon: "⭐", text: "Více než 2 000 lidí" },
      { icon: "🎁", text: "5 bonusů zdarma" },
      { icon: "🛡️", text: "7denní garance vrácení peněz" },
    ],
  },

  story: {
    headlinePre: "Věděli jste, že špatná strava může zvýšit riziko",
    headlineHighlight: "komplikací spojených s cukrovkou",
    headlinePost: "rychle a naprosto nepozorovaně?",
    intro:
      "Na každém soustu záleží. To, co sníte dnes, rozhoduje o tom, jak se budete cítit zítra. A když žijete s diabetem, i malé dietní chyby se tichounce sčítají.",
    problemsLead: "Tohle se stane, když začnete zanedbávat svůj jídelníček:",
    problems: [
      {
        title: "Prudké výkyvy krevního cukru",
        desc: "Špatná strava může způsobit náhlé skoky cukru, což vede k postupnému poškození nervů, očí a ledvin.",
      },
      {
        title: "Nechtěné přibírání na váze",
        desc: "Nezdravé jídlo často znamená kila navíc, a ta dokážou cukrovku ještě výrazně zhoršit.",
      },
      {
        title: "Zvýšené riziko srdečních chorob",
        desc: "Špatné stravovací návyky zvyšují riziko problémů se srdcem, což je u diabetiků jedna z hlavních příčin úmrtí.",
      },
      {
        title: "Problémy s trávením",
        desc: "Některé nevhodné suroviny mohou způsobit nesnášenlivost, zácpu, nadýmání a celkový diskomfort.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Jedna ruka drží zelené jablko, druhá růžovou koblihu: na výběru záleží",
    solutionBadge: "Řešení",
    solutionHeadline:
      "Chcete se naučit vařit zdravě a přitom si pochutnat, aniž byste ohrozili svou cukrovku?",
  },

  benefits: {
    forYouHeadline: "Tato e-kniha je přesně pro vás, pokud...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Máte cukrovku, nebo se staráte o někoho, kdo ji má",
        desc: "Najdete zde recepty navržené tak, aby udržely cukr na uzdě, aniž byste přišli o radost z jídla.",
      },
      {
        icon: "Sparkles",
        title: "Chcete si usnadnit zdravé vaření",
        desc: "Zdravé jídlo nemusí být složité: ukážeme vám rychlé a naprosto jasné postupy.",
      },
      {
        icon: "Users",
        title: "Hledáte chutné a snadné recepty pro celou rodinu",
        desc: "Jídla, na kterých si pochutná celá domácnost, nejen člověk s diabetem.",
      },
    ],
    headline: "Co získáte s 1000 Zdravými recepty 2.0",
    items: [
      {
        icon: "ChefHat",
        title: "Zdravé a neskutečně dobré recepty",
        desc: "Které bude vaše rodina milovat při každém jídle.",
      },
      {
        icon: "ListChecks",
        title: "Návody krok za krokem",
        desc: "Snadné na přípravu, i když jste v kuchyni naprostý začátečník.",
      },
      {
        icon: "ShoppingBasket",
        title: "Obyčejné suroviny",
        desc: "Snadno k sehnání v každém běžném supermarketu na rohu.",
      },
      {
        icon: "Lightbulb",
        title: "Tipy a triky od profíků",
        desc: "Abyste vařili s jistotou a dostali z jídla ještě lepší chuť.",
      },
      {
        icon: "Apple",
        title: "Pečlivě vybrané živiny",
        desc: "Naučíte se dát tělu přesně to palivo, které potřebuje.",
      },
      {
        icon: "Wheat",
        title: "Kontrolu nad příjmem sacharidů",
        desc: "Bez omezování se v chuti, porcích nebo rozmanitosti.",
      },
      {
        icon: "Activity",
        title: "Stabilní hladinu cukru v krvi",
        desc: "Jídla, která vám pomohou mít vše pod dokonalou kontrolou.",
      },
      {
        icon: "HeartPulse",
        title: "Zlepšení celkového zdraví",
        desc: "Získáte víc energie, lepší trávení a mnohem kvalitnější život.",
      },
    ],
    socialProof:
      "S našimi 1000 Zdravými recepty 2.0 pro diabetiky už lidé přesně jako vy dostali krevní cukr pod kontrolu, shodili přebytečná kila a vrátila se jim radost ze života.",
  },

  features: {
    headline: "Co všechno v e-knize najdete?",
    subheadline: "Vše potřebné k tomu, abyste jedli chutně, zdravě a bez zbytečných starostí.",
    items: [
      {
        icon: "Utensils",
        title: "Chutné a zdravé recepty pro každého",
        desc: "Obrovský výběr vyvážených jídel – od obědů a večeří až po lahodné zdravé omáčky a krémy.",
      },
      {
        icon: "BookOpen",
        title: "Základy zdravého vaření pro diabetiky",
        desc: "Zjistíte, jak přesně jsou tyto recepty poskládané, aby vyhovovaly vašim specifickým potřebám.",
      },
      {
        icon: "Lightbulb",
        title: "Praktické kuchařské vychytávky",
        desc: "Objevte užitečné tipy, díky kterým vás bude čas strávený v kuchyni opravdu bavit.",
      },
      {
        icon: "Replace",
        title: "Průvodce zdravými náhradami",
        desc: "Dozvíte se, jaké suroviny jsou pro cukrovku ideální a čím bezbolestně nahradit ty škodlivé.",
      },
      {
        icon: "Gift",
        title: "Další skvělé výhody",
        desc: "K nákupu dostanete i exkluzivní dárky a rovnou přístup do našeho VIP klubu.",
      },
    ],
  },

  bonuses: {
    badge: "BONUSY ZDARMA",
    headline: "V rámci časově omezené akce získáte těchto 5 dárků",
    subheadline: "K dnešnímu nákupu e-knihy je dostanete naprosto zdarma.",
    freeLabel: "ZDARMA!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "BONUS 1",
        title: "E-kniha: 100 Zdravých polévek",
        desc: "Obsahuje 100 parádních receptů na teplé polévky s nízkým obsahem sacharidů a cukrů.",
        value: "390 Kč",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "BONUS 2",
        title: "E-kniha: 67 Zdravých smoothie",
        desc: "67 receptů na osvěžující smoothie bez zbytečných cukrů.",
        value: "390 Kč",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "BONUS 3",
        title: "E-kniha: 100 Zdravých svačinek",
        desc: "100 nápadů na rychlé a zdravé odpolední zakousnutí pro lidi s diabetem.",
        value: "390 Kč",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "BONUS 4",
        title: "E-kniha: Plánovač jídelníčku",
        desc: "Praktický plánovač, se kterým si snadno zorganizujete celé denní i týdenní menu.",
        value: "390 Kč",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "BONUS 5",
        title: "Přístup do VIP klubu",
        desc: "Nárok na všechny budoucí aktualizace, garanci a slevy na naše další kuchařky.",
        value: "490 Kč",
      },
    ],
    totalLabel: "Celková hodnota bonusů: 2 050 Kč — Dnes: ZDARMA",
    footer: "Vše vám doručíme elektronicky ihned po dokončení nákupu.",
  },

  testimonials: {
    headline: "Co o nás říkají naši zákazníci",
    subheadline:
      "Reální lidé sdílejí své zkušenosti s e-knihou 1000 Zdravých receptů 2.0.",
    productLabel: "1000 Zdravých receptů 2.0 pro diabetiky",
    reviewedLabel: "ohodnotil/a",
    rating: "5★",
    actions: { like: "To se mi líbí", comment: "Komentář", share: "Sdílet" },
    items: [
      {
        name: "Petr Novák",
        text:
          "Hledal jsem jednoduché recepty z dostupných surovin. Tahle kniha jich má spoustu, jsou skvělé a uvaříte si parádní jídlo raz dva. Doporučuju na 100 %!",
      },
      {
        name: "Jana Svobodová",
        text:
          "Největší strach jsem měla z toho, že s cukrovkou už si nikdy nepochutnám. Recepty jsou neuvěřitelně dobré. Navíc mám e-knihu v mobilu, takže do ní koukám rovnou při nákupu v obchoďáku.",
      },
      {
        name: "Martina Dvořáková",
        text:
          "Jako máma syna s diabetem jsem měla obrovský problém uvařit tak, aby to jedla celá rodina. Tahle kniha nás zachránila. Recepty mají u nás doma obrovský úspěch.",
      },
      {
        name: "Eva Černá",
        text:
          "Když manželovi diagnostikovali cukrovku, tahle e-kniha mi strašně moc pomohla. Obyčejné suroviny, žádné drahé nesmysly a výsledek je mňam. Vřele doporučuji všem!",
      },
      {
        name: "Klára Procházková",
        text:
          "Knihu určitě doporučuji: jídla jsou lahodná a snadná na přípravu. Moc děkuji za bonusy, hlavně plánovač jídelníčku je na hlídání stravy naprosto ideální.",
      },
      {
        name: "Tomáš Horák",
        text:
          "Naprosto mi to změnilo pohled na vaření. Dřív jsem si vařil zvlášť a zbytek rodiny jedl něco jiného. Teď jíme všichni to samé bez jakýchkoli starostí. Tisíceré díky!",
      },
    ],
    cta: "CHCI ZAČÍT JEŠTĚ DNES",
  },

  finalCta: {
    preHeadline: "TEĎ JE TEN SPRÁVNÝ ČAS",
    urgencyTop: "SLEVA 80 %",
    headline:
      "ZÍSKEJTE NAŠI E-KNIHU JEŠTĚ DNES S OBROVSKOU SLEVOU!",
    subUrgency:
      "Více než 2 000 lidí už díky těmto receptům vzalo své zdraví do vlastních rukou. Dnes je řada na vás.",
    bundleList: [
      "E-kniha: 1000 Zdravých receptů 2.0 pro diabetiky",
      "Bonus 1 — 100 Zdravých polévek",
      "Bonus 2 — 67 Zdravých smoothie",
      "Bonus 3 — 100 Zdravých svačinek",
      "Bonus 4 — Plánovač jídelníčku",
      "Bonus 5 — Přístup do VIP klubu",
    ],
    imageAlt: "Kompletní balíček 1000 Zdravých receptů 2.0 + 5 bonusů",
    guaranteeText:
      "Stále váháte? Buďte v klidu, absolutně nic neriskujete! Vaše zdraví za to stojí. Dáváme vám 7denní garanci spokojenosti.",
    guaranteeImageAlt: "Záruka",
    regularPriceLabel: "Místo",
    regularPrice: "995 Kč",
    offerPrice: "199 Kč",
    discountBadge: "SLEVA 80 %",
    urgencyText: "PLATBA JE 100% BEZPEČNÁ",
    bottomUrgency: "Tato akce zmizí, jakmile odpočet dorazí na nulu.",
    button: "CHCI VYUŽÍT TUTO NABÍDKU DNES",
    trustRow: "100% bezpečná platba · Okamžitý přístup · 7denní záruka",
  },

  faq: {
    authorRole: "Tým pro zdravou výživu",
    authorHeadline: "Skvělé jídlo, které aktivně pečuje o vaše zdraví",
    authorBio:
      "Věříme, že by vás cukrovka neměla připravit o to nejlepší – potěšení z jídla. Každý náš recept je vyladěný tak, abyste si mohli pochutnávat bez výčitek a zároveň měli svou glukózu plně pod kontrolou.",
    authorImageAlt: "Náš tým",
    worksHeadline: "Pro koho TATO E-KNIHA NENÍ?",
    doesntWork: [
      "Pro lidi, kteří chtějí dál jíst nezdravě a doufají, že to nebude mít následky.",
      "Pro lidi, kteří nejsou ochotni otevřít se novým chutím.",
      "Pro lidi, kteří čekají zázraky, aniž by pro to sami cokololi udělali.",
    ],
    worksText:
      "Ale pokud hledáte skutečné, jednoduché a lahodné recepty, které si stoprocentně rozumí s vaší cukrovkou, tahle e-kniha je navržena přesně pro vás.",
    headline: "Často kladené dotazy (FAQ)",
    subheadline: "Vše, co potřebujete vědět, než se do toho pustíte.",
    items: [
      {
        q: "Jak e-knihu po zaplacení dostanu?",
        a: "Ihned po zaplacení vám do e-mailu přistane odkaz ke stažení. Můžete si ji pak snadno číst v mobilu, na tabletu nebo v počítači.",
      },
      {
        q: "V jakém je kniha formátu?",
        a: "Je to vysoce kvalitní PDF soubor, přizpůsobený pro snadné čtení na jakémkoli displeji. Zvládne ho otevřít úplně každé zařízení a není potřeba nic tisknout.",
      },
      {
        q: "Jsou recepty vhodné pro diabetiky 1. i 2. typu?",
        a: "Ano, recepty jsme sestavili tak, aby primárně pomáhaly držet krevní cukr pod kontrolou všem. Přesto ale vždy doporučujeme konzultovat jakoukoli změnu jídelníčku s vaším ošetřujícím lékařem.",
      },
      {
        q: "Budu muset kupovat nějaké divné nebo drahé suroviny?",
        a: "Vůbec ne. Všechny recepty vaříme z naprosto běžných a cenově dostupných potravin, které najdete v každém normálním supermarketu.",
      },
      {
        q: "Mám nějakou záruku?",
        a: "Ano, samozřejmě. Dáváme vám 7denní garanci vrácení peněz. Pokud nebudete s knihou absolutně nadšení, vrátíme vám 100 % částky, a to bez jakýchkoli otázek.",
      }
    ],
  },

  closing: {
    kicker: "POSLEDNÍ KROK",
    headline: "Vaše zdraví už prostě nepočká",
    subheadline:
      "Začněte jíst chutně a bez strachu o svou cukrovku ještě dnes. Zítra už tahle cena nemusí platit.",
    regularPrice: "995 Kč",
    offerPrice: "199 Kč",
    ctaLabel: "CHCI VYUŽÍT TUTO NABÍDKU",
    trustRow: "Bezpečná platba · Okamžitý přístup · 7denní záruka",
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Tento web není součástí webových stránek Facebooku ani společnosti Facebook Inc. Navíc tento web NENÍ společností Facebook žádným způsobem podporován ani sponzorován.",
    trademark: "FACEBOOK je registrovaná ochranná známka společnosti FACEBOOK, Inc.",
  },
};