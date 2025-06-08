---
title: Pár slov o Swapdoodlu
description: Nikdy by mě nenapadlo, že se dostaneme tak daleko.
lang: cs
date: 2025-06-07 21:31:00
---

Už si nevzpomínám, kdo s tím přišel a kdy.

Jediné, co si pamatuji je, že já a moje kamarádka [Šarlot](https://github.com/centdemeern1) jsme se jednou rozhodli: _Swapdoodle zprovozníme, i kdyby nám to mělo trvat roky_. A tak jsme začali experimentovat.

Někteří z vás, co můj blog čtete, asi nevíte, co vůbec Swapdoodle je. <span style="opacity:0.5">(Čau Moni!)</span> Ve zkratce; je to aplikace pro herní konzoli Nintendo 3DS, která umožňuje posílat kamarádům ručně psané zprávy.

Stejně jako všechny ostatní 3DS aplikace přestala fungovat 8. dubna 2024, onoho dne Nintendo ukončilo podporu a vypnulo servery. Naštěstí už existují služby, které je nahrazují! [Pretendo Network](https://pretendo.network/) je _de facto_ novým oficiálním serverem. Je až neuvěřitelné, kolik toho už dokázali, nicméně podporovaných her je zatím poskrovnu. Swapdoodle byla oblíbená aplikace a mnoho lidí se netrpělivě ptala, kdy pro ni zavedou podporu - nebo si to alespoň v duchu přáli.
**Já jsem byl jedním z nich.**

Postupem času mi... asi došla trpělivost? Chápal jsem, že Pretendo má asi lepší věci na práci, ale stýskalo se mi po tom nadšení z modrého světélka, které oznamovalo novou zprávu. *Zoufale* jsem to chtěl zpátky. Swapdoodle mělo jednoduše kouzlo, které ostatní 3DS aplikace prostě neměly. Svou frustraci jsem sdílel s kamarády, se kterými jsem si kdysi posílal psaníčka. Jeden z nich i vtipkoval, že to budu já, kdo Swapdoodle přivede zpět ze záhrobí.

# Programujeme herní server

Když jsem s Šarlotou poprvé začal zkoumat Swapdoodle, neměl jsem **sebemenší** tušení, kde začít. Naštěstí jsem narazil na [pretendo-docker](https://github.com/MatthewL246/pretendo-docker) od [MatthewL246](https://github.com/MatthewL246), což se ukázalo jako báječný počáteční bod pro naše experimenty. Umožňuje jednoduše nastavit lokální instanci Pretenda, se kterou si můžete dále hrát. Jako první po instalaci jsem si pohrál s proxy serverem, který to nastaví - snadno se tak dá zjistit, ke kterým adresám URL se konzole připojuje, a co odesílá. Rychle jsem tak například objevil, který server kdysi obsluhoval Swapdoodle: [http://hpp-001a2c00-l1.n.app.nintendowifi.net](http://hpp-001a2c00-l1.n.app.nintendowifi.net).

V tuhle chvíli jsem ještě nevěděl, co HPP vůbec znamená <span style="opacity:0.5">(tohle bude za chvíli důležité)</span>, a začal zběsile analyzovat pakety, které hra posílala. Rozuměl jsem něčemu, ale rozhodně ne dostatečně na to, abych dokázal postavit celý server. Dokonce jsem se i zeptal na Discord serveru Pretenda, jestli bych se nemohl podívat na záznamy síťového provozu, které Pretendo jednu chvíli sbíralo. A marně - nedostal jsem nic. Zpětně to asi dává smysl - ty záznamy obsahují spoustu osobních údajů které by týpek z východní Evropy *za žádných okolností* neměl mít přístup. Cítil jsem se poraženě a nevěděl, co dál. Tak jsme zkusili něco trochu jiného...

# Kašlu na to, uděláme editor souborů

Na 3DBrew, což je taková Wikipedie čistě o konzoli 3DS, je článek o Swapdoodlu. Mimo jiné taky popisuje *strukturu* souborů, které Swapdoodle interně používá. Záměrně používám slovo *struktura* - formát, který Swapdoodle používá, je typ kontejneru. Takový po domácku splácaný `.zip`, chcete-li. Začali jsme se tedy věnovat souborům hry, zatímco jsme nevěděli, jak pohnout se serverem. Naším hlavním cílem bylo pochopit formát, ve kterém Swapdoodle ukládá zprávy - jelikož si uživatel může přehrát, jak se psaníčko postupně píše, nemůže to být jen statický obrázek.

O pár pokusů později jsme na to přišli. Soubor používá sekvence čtyř bajtů, který popisuje jednotlivé "tahy" na plátnu. A teď mi odpusťe - **_Koho sakra napadlo, že tohle je dobrý nápad???_** Podívejte se na to! Vždyť to je šílenost!

![Image of the file format](/blog-assets/weird-ass-format.png)

Souřadnice bodu, kde se kreslí, jsou _rozdělené_. Proč?! Vždyť je tolik lepších způsobů, jak to ukládat, ale Nintendo si vybralo zrovna tenhle. Watafak?

V rychlosti jsem uvařil program, který zobrazuje informace z souborů Swapdoodlu. Z toho se posléze stala plnohodnotná webová aplikace, založená na komponentě, kterou Šarlot napsala v programovacím jazyce Rust. Super!

Bylo to zrovna touto dobou, kdy jsem zavadil o článek popisující něco zvané HPP. Tak počkat, to je mi povědomé...

# Všechna práce už byla udělána za nás

Nejdůležitějším projektem Pretenda je bez omylu [nex-go](https://github.com/PretendoNetwork/nex-go/), implementace NEXu. Nintendo nenapsalo svoje vlastní multiplayerové servery, ale místo toho si licencovalo NEX od francouzské společnosti Quazal. To jsem věděl už dávno, co jsem však nevěděl je, že má NEX verzi přenášenou přes protokol HTTP, zvanou... HPP. Ty pakety, které jsem analyzoval, byly ve skutečnosti standardní NEX pakety. A aby toho nebylo málo, Pretendo už dávno napsalo nástroje pro snadnou tvorbu HPP serverů! Bylo načase se znovu ponořit do světa serverů... A naučit se programovací jazyk Go, který Pretendo používá.

Netrvalo dlouho a byli jsme schopní bezchybně *nahrávat* Swapdoodlí psaníčka! Byli jsme nadšení, že se zase hýbeme kupředu, ale záhy jsme narazili na další překážku. Doteď jsme pracovali s tím, co naše konzole odesílaly serveru. Nevěděli jsme však, jak má server odeslat upozornění *zpátky konzoli*, jelikož to byl úkol pro originální server, který jsme se snažili napodobit. Nejdříve jsme předpokládali, že se odesílají pomocí SpotPass (3DS služba pro distribuci souborů, kterou Pretendo rovněž implementovalo), ale tento náš předpoklad jeden vývojář rychle sestřelil. Vypadalo to, že naše snaha opět nedojde daleko...

# Náš zachránce přichádza

Swapdoodle jsem pověsil na hřebík a považoval ho jako neřešitelný příklad. To změnil [Miles](https://bsky.app/profile/milesthecreator.bsky.social), který mě jednoho dne zkontaktoval přes Discord. Našel náš program na prohlížení Swapdoodle souborů a vlákno, ve kterém jsme prosili o ty záznamy. K mému naprostému překvapení, Miles měl *kompletní záznamy* z dob, kdy Swapdoodle stále fungovalo. Hned jsem se na ně šel podívat a našel **všechno, co nám doposud chybělo**. Ukázalo se, že to nakonec všechno byly funkce, které Pretendo již objevilo a implementovalo, jen jsme nevěděli, že je Swapdoodle využívá. Jen o pár dní později jsme z napůl hotového serveru měli kompletní, plně funkční server. Takhle šťastný jsem z programování nebyl *už hodně dlouho*.

To nás přivedlo k poslednímu kroku - říct Pretendu o tom, co jsme vytvořili. Měl jsem zpočátku strach, že naši snahu odmítnout, ale mýlil jsem se. Jon, vedoucí vývojář Pretenda, naši snahu uvítal a pomohl nám formálně nabídnout náš kód Pretendu. V době, kdy toto píšu, je náš kód ve fázi [merge requestu](https://github.com/PretendoNetwork/swapdoodle/pull/1) a nemůžu se dočkat na to, co bude následovat. Tohle byl můj první příspěvek k nějakému Open Source projektu, čímž byl můj zážitek o to víc stresující. Pokud je to ovšem takto příjemné i v ostatních projektech, nejspíš budu v přispívání k OSS pokračovat.

# Closing words

Před pár dny Jon zveřejnil [blog na webových stránkách Pretenda](https://pretendo.network/blog/6-2-25), ve kterém popsal všechny novinky ohledně Pretenda za posledních pár měsíců, a dokonce v něm zmínil i naši práci! Strašně moc mi to zvedlo náladu a chtěl bych mu za to, co pro nás udělal, moc poděkovat. Na Discordu Pretenda teď vidím lidi, jak jsou *nadšení*, že se Swapdoodle vrátí. A to všechno díky mě a Šarlotě. Vidět tu radost mě hřeje na srdíčku, protože bych se jen před pár měsíci cítil úplně stejně.

Tohle je koneckonců můj osobní cíl v životě, přesně jak to mám napsané na domovské stránce - *dělat věci, za které jsou lidé vděční a jsou jim užitečné*.

Děkuji za přečtení!