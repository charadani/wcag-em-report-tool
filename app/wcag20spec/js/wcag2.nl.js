'use strict';

angular.module('wcagReporter')
.run(function (wcag20spec) {

    wcag20spec.addSpec('nl', {
        "principles": [
            {
                "id": "WCAG2:perceivable",
                "num": "1",
                "handle": "Waarneembaar",
                "text": "informatie en componenten van de gebruikersinterface moeten toonbaar zijn aan gebruikers op voor hen waarneembare wijze.",
                "guidelines": [
                    {
                        "id": "WCAG2:text-equiv",
                        "num": "1.1",
                        "handle": "Tekstalternatieven",
                        "text": "Lever tekstalternatieven voor alle niet-tekstuele content, zodat die veranderd kan worden in andere vormen die mensen nodig hebben, zoals grote letters, braille, spraak, symbolen of eenvoudiger taal.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:text-equiv-all",
                                "num": "1.1.1",
                                "handle": "Niet-tekstuele content",
                                "text": "Alle niet-tekstuele content die aan de gebruiker wordt gepresenteerd, heeft een tekstalternatief dat een gelijkwaardig doel dient, behalve voor de hierna vermelde situaties.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Bedieningselementen, invoer",
                                                "text": "Als niet-tekstuele content een bedieningselement is of gebruikersinvoer accepteert, dan heeft ze een naam die het doel ervan beschrijft. (We verwijzen naar Succescriterium 4.1.2 voor aanvullende eisen ten aanzien van bedieningselementen en content die gebruikersinvoer accepteren.)"
                                            },
                                            {
                                                "handle": "Op tijd gebaseerde media",
                                                "text": "Als niet-tekstuele content op tijd gebaseerde media is, dan leveren tekstalternatieven ten minste een beschrijving van de niet-tekstuele content. (We verwijzen naar Richtlijn 1.2 voor aanvullende eisen ten aanzien van media.)"
                                            },
                                            {
                                                "handle": "Test",
                                                "text": "Als niet-tekstuele content een test of oefening is die, als ze door middel van tekst gepresenteerd wordt onjuist zou zijn, dan leveren tekstalternatieven ten minste een beschrijving van de niet-tekstuele content."
                                            },
                                            {
                                                "handle": "Zintuiglijk",
                                                "text": "Als niet-tekstuele content primair is bedoeld om een specifieke zintuiglijke ervaring te creëren, dan leveren tekstalternatieven ten minste een beschrijving van de niet-tekstuele content."
                                            },
                                            {
                                                "handle": "CAPTCHA",
                                                "text": "Als het doel van niet-tekstuele content is om te bevestigen dat content wordt gebruikt door een persoon in plaats van een computer, dan worden tekstalternatieven geleverd die het doel van de niet-tekstuele content identificeren en beschrijven. En er worden alternatieve vormen van CAPTCHA aangeboden gebruikmakend van uitvoermodes voor verschillende soorten van zintuiglijke perceptie om tegemoet te komen aan verschillende functiebeperkingen."
                                            },
                                            {
                                                "handle": "Decoratie, opmaak, onzichtbaar",
                                                "text": "Als niet-tekstuele content puur decoratief is, slechts voor visuele opmaak wordt gebruikt, of niet aan gebruikers wordt gerepresenteerd, dan wordt ze op zo'n manier geïmplementeerd dat ze genegeerd kan worden door hulptechnologie."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:media-equiv",
                        "num": "1.2",
                        "handle": "Op tijd gebaseerde media",
                        "text": "Lever alternatieven voor op tijd gebaseerde media.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:media-equiv-av-only-alt",
                                "num": "1.2.1",
                                "handle": "Louter-geluid en louter-videobeeld (vooraf opgenomen)",
                                "text": "Voor media met vooraf opgenomen louter-geluid en vooraf opgenomen louter-videobeeld is het volgende waar, behalve als de audio of video een media-alternatief voor tekst is en duidelijk als zodanig is gelabeld:",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Vooraf opgenomen louter-geluid",
                                                "text": "Er wordt een alternatief geleverd voor op tijd gebaseerde media dat equivalente informatie geeft voor vooraf opgenomen louter-geluid content."
                                            },
                                            {
                                                "handle": "Vooraf opgenomen louter-videobeeld",
                                                "text": "Er wordt een alternatief geleverd voor op tijd gebaseerde media of een geluidsspoor dat equivalente informatie geeft voor vooraf opgenomen louter-videobeeld content."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:media-equiv-captions",
                                "num": "1.2.2",
                                "handle": "Ondertiteling voor doven en slechthorenden (vooraf opgenomen)",
                                "text": "Er worden ondertitels voor doven en slechthorenden geleverd voor alle vooraf opgenomen audiocontent in gesynchroniseerde media, behalve als het mediabestand een media-alternatief is voor tekst en duidelijk als zodanig is gelabeld.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:media-equiv-audio-desc",
                                "num": "1.2.3",
                                "handle": "Audiodescriptie of media-alternatief (vooraf opgenomen)",
                                "text": "Er wordt een alternatief voor op tijd gebaseerde media of audiodescriptie van de vooraf opgenomen videocontent geleverd voor gesynchroniseerde media, behalve als het mediabestand een media-alternatief is voor tekst en duidelijk als zodanig is gelabeld.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:media-equiv-real-time-captions",
                                "num": "1.2.4",
                                "handle": "Ondertitels voor doven en slechthorenden (live)",
                                "text": "Er worden ondertitels voor doven en slechthorenden geleverd voor alle live audiocontent in gesynchroniseerde media.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:media-equiv-audio-desc-only",
                                "num": "1.2.5",
                                "handle": "Audiodescriptie (vooraf opgenomen)",
                                "text": "Er wordt een audiodescriptie geleverd voor alle vooraf opgenomen videocontent in gesynchroniseerde media.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:media-equiv-sign",
                                "num": "1.2.6",
                                "handle": "Gebarentaal (vooraf opgenomen)",
                                "text": "Er wordt een gebarentaalvertolking geleverd voor alle vooraf opgenomen audiocontent in gesynchroniseerde media.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:media-equiv-extended-ad",
                                "num": "1.2.7",
                                "handle": "Verlengde audiodescriptie (vooraf opgenomen)",
                                "text": "Waar pauzes in voorgrondgeluid onvoldoende zijn om audiodescripties toe te passen om de boodschap van de video over te brengen, wordt een verlengde audiodescriptie geleverd voor alle vooraf opgenomen videocontent in gesynchroniseerde media.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:media-equiv-text-doc",
                                "num": "1.2.8",
                                "handle": "Mediumalternatief (vooraf opgenomen)",
                                "text": "Er wordt een alternatief voor op tijd gebaseerde media geleverd voor alle vooraf opgenomen gesynchroniseerde media en voor alle vooraf opgenomen louter-videobeeld media.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:media-equiv-live-audio-only",
                                "num": "1.2.9",
                                "handle": "Louter-geluid (live)",
                                "text": "Er wordt een alternatief voor op tijd gebaseerde media geleverd dat equivalente informatie presenteert voor live louter-geluid content .",
                                "level": "AAA"
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:content-structure-separation",
                        "num": "1.3",
                        "handle": "Aanpasbaar",
                        "text": "Creëer content die op verschillende manieren gepresenteerd kan worden (bijvoorbeeld eenvoudiger lay-out) zonder verlies van informatie of structuur.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:content-structure-separation-programmatic",
                                "num": "1.3.1",
                                "handle": "Info en relaties",
                                "text": "Informatie, structuur, en relaties overgebracht door presentatie kunnen door software bepaald worden of zijn beschikbaar in tekst.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:content-structure-separation-sequence",
                                "num": "1.3.2",
                                "handle": "Betekenisvolle volgorde",
                                "text": "Als de volgorde waarin content wordt gepresenteerd van invloed is op zijn betekenis, kan een betekenisvolle leesvolgorde door software bepaald worden.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:content-structure-separation-understanding",
                                "num": "1.3.3",
                                "handle": "Zintuiglijke eigenschappen",
                                "text": "Instructies die geleverd worden om content te begrijpen en te bedienen zijn niet alleen afhankelijk van zintuiglijke eigenschappen van componenten zoals vorm, omvang, visuele locatie, oriëntatie of geluid.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "voor eisen met betrekking tot kleur zie Richtlijn 1.4."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:visual-audio-contrast",
                        "num": "1.4",
                        "handle": "Onderscheidbaar",
                        "text": "Maak het voor gebruikers gemakkelijker om content te horen en te zien, waaronder scheiding van voorgrond en achtergrond.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:visual-audio-contrast-without-color",
                                "num": "1.4.1",
                                "handle": "Gebruik van kleur",
                                "text": "Kleur wordt niet als het enige visuele middel gebruikt om informatie over te brengen, een actie aan te geven, tot een reactie op te roepen of een visueel element te onderscheiden.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "dit succescriterium richt zich specifiek op kleurperceptie. Andere vormen van perceptie worden behandeld in Richtlijn 1.3 inclusief softwarematige toegang tot kleur en andere codering van visuele-presentatie."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast-dis-audio",
                                "num": "1.4.2",
                                "handle": "Geluidsbediening",
                                "text": "Als een geluidsweergave op een webpagina automatisch meer dan 3 seconden speelt, is er of een mechanisme beschikbaar om de geluidsweergave te pauzeren of te stoppen, of er is een mechanisme beschikbaar om het geluidsvolume onafhankelijk van het overall systeemvolume te regelen.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "omdat content die niet aan dit succescriterium voldoet het vermogen van een gebruiker om de hele pagina te gebruiken kan belemmeren, moet alle content op de webpagina (of die nu wel of niet gebruikt wordt om aan andere succescriteria te voldoen) aan dit succescriterium voldoen. Zie Conformiteitseis 5: Niet-Interferentie."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast-contrast",
                                "num": "1.4.3",
                                "handle": "Contrast (minimum)",
                                "text": "De visuele weergave van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 4,5:1, behalve in de volgende gevallen:",
                                "level": "AA",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Grote tekst",
                                                "text": "Grote tekst en afbeeldingen van grote tekst hebben een contrastverhouding van ten minste 3:1;"
                                            },
                                            {
                                                "handle": "Incidenteel",
                                                "text": "Tekst of afbeeldingen van tekst die deel zijn van een inactieve component van de gebruikersinterface, die puur decoratief zijn, die voor niemand zichtbaar zijn, of die onderdeel zijn van een afbeelding die significant andere visuele content bevat, hebben geen contrasteis."
                                            },
                                            {
                                                "handle": "Logotypes",
                                                "text": "Tekst die onderdeel is van een logo of merknaam heeft geen contrasteis."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast-scale",
                                "num": "1.4.4",
                                "handle": "Herschalen van tekst",
                                "text": "Behalve voor ondertitels voor doven en slechthorenden en afbeeldingen van tekst, kan tekst zonder hulptechnologie tot 200 procent schalen zonder verlies van content of functionaliteit.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast-text-presentation",
                                "num": "1.4.5",
                                "handle": "Afbeeldingen van tekst",
                                "text": "Als de gebruikte technologieën de visuele weergave tot stand kunnen brengen, wordt tekst gebruikt in plaats van afbeeldingen van tekst om informatie over te brengen, behalve in de volgende gevallen:",
                                "level": "AA",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Aanpasbaar",
                                                "text": "De afbeelding van tekst kan visueel worden aangepast aan de eisen van de gebruiker;"
                                            },
                                            {
                                                "handle": "Essentieel",
                                                "text": "Een specifieke weergave van tekst is essentieel voor de informatie die wordt overgebracht."
                                            }
                                        ]
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "logotypes (tekst die onderdeel is van een logo of merknaam) worden als essentieel beschouwd."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast7",
                                "num": "1.4.6",
                                "handle": "Contrast (versterkt)",
                                "text": "De visuele weergave van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 7:1, behalve in de volgende gevallen:",
                                "level": "AAA",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Grote tekst",
                                                "text": "Grote tekst en afbeeldingen van grote tekst hebben een contrastverhouding van ten minste 4,5:1;"
                                            },
                                            {
                                                "handle": "Incidenteel",
                                                "text": "Tekst of afbeeldingen van tekst die onderdeel zijn van een inactieve component van de gebruikersinterface, die puur decoratief zijn, die voor niemand zichtbaar zijn, of die onderdeel zijn van een afbeelding die significant andere visuele content bevat, hebben geen contrasteis."
                                            },
                                            {
                                                "handle": "Logotypes",
                                                "text": "Tekst die onderdeel is van een logo of merknaam heeft geen minimum contrasteis."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast-noaudio",
                                "num": "1.4.7",
                                "handle": "Weinig of geen achtergrondgeluid",
                                "text": "Voor vooraf opgenomen louter-geluidcontent die (1) voornamelijk spraak op de voorgrond bevat, (2) geen geluids-CAPTCHA of audiologo is, en (3) geen vocalisatie is die primair bedoeld is als muzikale expressie zoals zingen of rappen, is ten minste een van de volgende zaken waar:",
                                "level": "AAA",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Geen achtergrond",
                                                "text": "De geluidsopname bevat geen achtergrondgeluiden."
                                            },
                                            {
                                                "handle": "Uitzetten",
                                                "text": "De achtergrondgeluiden kunnen uitgezet worden."
                                            },
                                            {
                                                "handle": "20 dB",
                                                "text": "De achtergrondgeluiden zijn ten minste 20 decibel lager dan voorgrondspraak content, met uitzondering van incidentele geluiden die slechts één of twee seconden duren. Opmerking: uit de definitie van \"decibel\" volgt dat achtergrondgeluid dat aan deze eis voldoet ongeveer vier keer zachter klinkt dan de spraakcontent op de voorgrond."
                                            }
                                        ]
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "uit de definitie van \"decibel\" volgt dat achtergrondgeluid dat aan deze eis voldoet ongeveer vier keer zachter klinkt dan de spraakcontent op de voorgrond."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast-visual-presentation",
                                "num": "1.4.8",
                                "handle": "Visuele weergave",
                                "text": "Voor de visuele weergave van tekstblokken is een mechanisme beschikbaar om het volgende te realiseren:",
                                "level": "AAA",
                                "details": [
                                    {
                                        "type": "olist",
                                        "items": [
                                            {
                                                "handle": "",
                                                "text": "Voor- en achtergrondkleuren kunnen door de gebruiker worden gekozen."
                                            },
                                            {
                                                "handle": "",
                                                "text": "De breedte is niet meer dan 80 karakters of tekens (40 in het geval van CJK)."
                                            },
                                            {
                                                "handle": "",
                                                "text": "Tekst is niet uitgevuld (uitgelijnd naar linker- en rechterkantlijnen)."
                                            },
                                            {
                                                "handle": "",
                                                "text": "Regelafstand is ten minste 1,5 spatie binnen alinea's en alinea-afstand is ten minste 1,5 keer zo groot als de regelafstand."
                                            },
                                            {
                                                "handle": "",
                                                "text": "Tekst kan zonder hulptechnologie herschaald worden tot 200 procent op een zodanige manier dat de gebruiker niet horizontaal hoeft te scrollen om een regel tekst te lezen op een venster even groot als het volle beeld."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:visual-audio-contrast-text-images",
                                "num": "1.4.9",
                                "handle": "Afbeeldingen van tekst (geen uitzondering)",
                                "text": "Afbeeldingen van tekst worden alleen puur decoratief gebruikt, of daar waar een specifieke weergave van tekst essentieel is voor de informatie die wordt overgebracht.",
                                "level": "AAA",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "logotypes (tekst die onderdeel is van een logo of merknaam) worden als essentieel beschouwd."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "WCAG2:operable",
                "num": "2",
                "handle": "Bedienbaar",
                "text": "componenten van de gebruikersinterface en navigatie moeten bedienbaar zijn.",
                "guidelines": [
                    {
                        "id": "WCAG2:keyboard-operation",
                        "num": "2.1",
                        "handle": "Toetsenbordtoegankelijk",
                        "text": "Maak alle functionaliteit beschikbaar vanaf een toetsenbord.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:keyboard-operation-keyboard-operable",
                                "num": "2.1.1",
                                "handle": "Toetsenbord",
                                "text": "Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder dat afzonderlijke toetsaanslagen aan tijd gebonden zijn, behalve als de onderliggende functie een invoer vereist die afhangt van het pad dat de gebruiker aflegt en niet alleen van de eindpunten.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 1",
                                        "text": "deze uitzondering is gerelateerd aan de onderliggende functie, niet aan de invoertechniek. Als we bijvoorbeeld met de hand geschreven tekst invoeren, vereist de invoertechniek (met de hand geschreven tekst) padafhankelijke invoer, maar de onderliggende functie (tekstinvoer) vereist dat niet."
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 2",
                                        "text": "dit succescriterium verbiedt geen muisinvoer of andere invoermethoden naast de toetsenbordinvoer en wil dit ook niet ontmoedigen."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:keyboard-operation-trapping",
                                "num": "2.1.2",
                                "handle": "Geen toetsenbordval",
                                "text": "Als de toetsenbordfocus met de toetsenbordinterface verplaatst kan worden naar een component van de pagina, dan kan de focus ook met alleen de toetsenbordinterface weer van dat component weg worden bewogen, en, als er meer nodig is dan de standaard pijl- of tabtoetsen of andere standaard methoden om de focus te verplaatsen, dan wordt de gebruiker geïnformeerd over de manier waarop de focus kan worden verplaatst.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "omdat content die niet aan dit succescriterium voldoet het vermogen van een gebruiker om de hele pagina te gebruiken kan belemmeren, moet alle content op de webpagina (of ze gebruikt wordt om aan andere succescriteria te voldoen of niet) voldoen aan dit succescriterium. Zie conformiteitseis 5: Niet-Interferentie."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:keyboard-operation-all-funcs",
                                "num": "2.1.3",
                                "handle": "Toetsenbord (geen uitzondering)",
                                "text": "Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder specifieke timing te vereisen voor de individuele toetsaanslagen.",
                                "level": "AAA"
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:time-limits",
                        "num": "2.2",
                        "handle": "Genoeg tijd",
                        "text": "Geef gebruikers genoeg tijd om content te lezen en te gebruiken.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:time-limits-required-behaviors",
                                "num": "2.2.1",
                                "handle": "Timing aanpasbaar",
                                "text": "Voor elke tijdslimiet die door de content wordt ingesteld geldt ten minste een van de volgende zaken:",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Uitzetten",
                                                "text": "De gebruiker kan de tijdslimiet uitzetten voordat die wordt bereikt; of"
                                            },
                                            {
                                                "handle": "Aanpassen",
                                                "text": "De gebruiker mag de tijdslimiet aanpassen voordat deze is verstreken over een bereik van ten minste tien keer de standaardinstelling; of"
                                            },
                                            {
                                                "handle": "Verlengen",
                                                "text": "De gebruiker wordt gewaarschuwd voor de tijd afloopt en krijgt ten minste 20 seconden om de tijdslimiet met een eenvoudige handeling te verlengen (bijvoorbeeld, \"druk op de spatiebalk\"), en de gebruiker mag de tijdslimiet ten minste tien keer verlengen; of"
                                            },
                                            {
                                                "handle": "Real-time uitzondering",
                                                "text": "De tijdslimiet is onderdeel van een realtime gebeurtenis (een veiling bijvoorbeeld) en er is geen alternatief voor de tijdslimiet mogelijk; of"
                                            },
                                            {
                                                "handle": "Essentiële uitzondering",
                                                "text": "De tijdslimiet is essentieel en verlenging zou de activiteit ongeldig maken; of"
                                            },
                                            {
                                                "handle": "20 uur uitzondering",
                                                "text": "De tijdslimiet is langer dan 20 uur."
                                            }
                                        ]
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "dit succescriterium helpt om ervoor te zorgen dat gebruikers taken kunnen voltooien zonder onverwachte veranderingen in content of context die het resultaat zijn van een tijdslimiet. Dit succescriterium moet in samenhang met Succescriterium 3.2.1 worden beschouwd, dat limieten stelt aan veranderingen van content of context als gevolg van een gebruikersactie."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:time-limits-pause",
                                "num": "2.2.2",
                                "handle": "Pauzeren, stoppen, verbergen",
                                "text": "Voor alle bewegende, knipperende, scrollende of automatisch actualiserende informatie gelden alle volgende zaken:",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "ulist",
                                        "items": [
                                            {
                                                "handle": "Bewegen, knipperen, scrollen",
                                                "text": "Voor bewegende, knipperende of scrollende informatie die (1) automatisch start, (2) langer dan vijf seconden duurt, en (3) parallel met andere content wordt getoond, is er een mechanisme voor de gebruiker om dit te pauzeren, te stoppen of te verbergen, tenzij de beweging, knippering of scrolling, onderdeel is van een activiteit waar ze essentieel is en"
                                            },
                                            {
                                                "handle": "Automatisch actualiserend",
                                                "text": "Voor elke soort automatisch actualiserende informatie die (1) automatisch start en (2) parallel met andere content wordt gepresenteerd, is er een mechanisme voor de gebruiker om dit te pauzeren, te stoppen of te verbergen of de frequentie van de actualisering in te stellen tenzij de automatische actualisering onderdeel is van een activiteit waar ze essentieel is."
                                            }
                                        ]
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 1",
                                        "text": "voor eisen gerelateerd aan knipperende of flitsende content zie Richtlijn 2.3."
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 2",
                                        "text": "omdat content die niet aan dit succescriterium voldoet het vermogen van een gebruiker om de hele pagina te gebruiken kan belemmeren, moet alle content op de webpagina (of ze gebruikt wordt om aan andere succescriteria te voldoen of niet) voldoen aan dit succescriterium. Zie conformiteitseis 5: Niet-interferentie."
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 3",
                                        "text": "van content die periodiek door software wordt geactualiseerd of die naar de user agent wordt verzonden wordt niet vereist dat ze informatie behoudt of weergeeft die gegenereerd of ontvangen wordt tussen het begin van de pauze en het moment van de hervatting van de weergave, aangezien dit technisch wellicht niet mogelijk is en het in veel situaties misleidend is om dit te doen."
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 4",
                                        "text": "een animatie die speelt tijdens het laden of een gelijkwaardige situatie, kan als essentieel worden beschouwd als niet tegelijkertijd interactie kan plaatsvinden door alle gebruikers en als het niet aangeven van de voortgang gebruikers zou kunnen verwarren of laten denken dat de content vastgelopen of onvolledig was."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:time-limits-no-exceptions",
                                "num": "2.2.3",
                                "handle": "Geen timing",
                                "text": "Timing is geen essentieel onderdeel van de gebeurtenis of activiteit die door de content wordt weergegeven, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:time-limits-postponed",
                                "num": "2.2.4",
                                "handle": "Onderbrekingen",
                                "text": "Onderbrekingen kunnen uitgesteld of uitgezet worden door de gebruiker, behalve onderbrekingen die met een noodsituatie samenhangen.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:time-limits-server-timeout",
                                "num": "2.2.5",
                                "handle": "Herauthentisering",
                                "text": "Als een geauthentiseerde sessie verloopt, kan de gebruiker na herauthentisering de activiteit zonder gegevensverlies voortzetten.",
                                "level": "AAA"
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:seizure",
                        "num": "2.3",
                        "handle": "Toevallen",
                        "text": "Ontwerp content niet op een manier waarvan bekend is dat die toevallen veroorzaakt.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:seizure-does-not-violate",
                                "num": "2.3.1",
                                "handle": "Drie flitsen of beneden drempelwaarde",
                                "text": "Webpagina's bevatten niets wat meer dan drie keer flitst in enige periode van één seconde of de flits is beneden de algemene flits- en rodeflitsdrempelwaarden.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "omdat content die niet aan dit succescriterium voldoet het vermogen van een gebruiker om de hele pagina te gebruiken kan belemmeren, moet alle content op de webpagina (of ze gebruikt wordt om aan andere succescriteria te voldoen of niet) voldoen aan dit succescriterium. Zie conformiteitseis 5: Niet-interferentie."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:seizure-three-times",
                                "num": "2.3.2",
                                "handle": "Drie flitsen",
                                "text": "Webpagina's bevatten niets wat meer dan drie keer flitst in enige periode van één seconde.",
                                "level": "AAA"
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:navigation-mechanisms",
                        "num": "2.4",
                        "handle": "Navigeerbaar",
                        "text": "Lever manieren om gebruikers te helpen navigeren, content te vinden en te bepalen waar ze zijn.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:navigation-mechanisms-skip",
                                "num": "2.4.1",
                                "handle": "Blokken omzeilen",
                                "text": "Er is een mechanisme beschikbaar om blokken content die op meerdere webpagina's worden herhaald te omzeilen.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-title",
                                "num": "2.4.2",
                                "handle": "Paginatitel",
                                "text": "Webpagina's hebben titels die het onderwerp of doel beschrijven.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-focus-order",
                                "num": "2.4.3",
                                "handle": "Focus volgorde",
                                "text": "Als een webpagina sequentieel genavigeerd kan worden en de navigatiesequenties hebben invloed op de betekenis of het gebruik, dan krijgen focusbare componenten de focus in de juiste volgorde waardoor betekenis en bedienbaarheid behouden blijft.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-refs",
                                "num": "2.4.4",
                                "handle": "Linkdoel (in context)",
                                "text": "Het doel van elke link kan bepaald worden uit enkel de linktekst of uit de linktekst samen met zijn door software bepaalde linkcontext, behalve daar waar het doel van de link een dubbelzinnige betekenis zou kunnen hebben voor gebruikers in het algemeen.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-mult-loc",
                                "num": "2.4.5",
                                "handle": "Meerdere manieren",
                                "text": "Er is meer dan één manier beschikbaar om een webpagina binnen een verzameling webpagina's te vinden, behalve wanneer de webpagina het resultaat is van, of een stap in, een proces.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-descriptive",
                                "num": "2.4.6",
                                "handle": "Koppen en labels",
                                "text": "Koppen en labels beschrijven het onderwerp of doel.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-focus-visible",
                                "num": "2.4.7",
                                "handle": "Focus zichtbaar",
                                "text": "Elke gebruikersinterface die met een toetsenbord te bedienen is, heeft een bedieningswijze waarbij de indicator van de toetsenbordfocus zichtbaar is.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-location",
                                "num": "2.4.8",
                                "handle": "Locatie",
                                "text": "Informatie over de locatie van de gebruiker binnen een verzameling webpagina's is beschikbaar.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-link",
                                "num": "2.4.9",
                                "handle": "Linkdoel (alleen link)",
                                "text": "Er is een mechanisme beschikbaar waarmee het doel van elke link bepaald kan worden op basis van alleen de linktekst, behalve waar het doel van de link dubbelzinnig voor gebruikers in het algemeen zou zijn.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:navigation-mechanisms-headings",
                                "num": "2.4.10",
                                "handle": "Paragraafkoppen",
                                "text": "Paragraafkoppen worden gebruikt om de content te structureren.",
                                "level": "AAA",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 1",
                                        "text": "\"kop\" wordt in algemene zin gebruikt met inbegrip van titels en andere manieren om een kop aan verschillende soorten content te geven."
                                    },
                                    {
                                        "type": "note",
                                        "handle": "Opmerking 2",
                                        "text": "dit succescriterium betreft paragrafen binnen de tekst, niet componenten van de gebruikersinterface. Componenten van de gebruikersinterface vallen onder Succescriterium 4.1.2."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "WCAG2:understandable",
                "num": "3",
                "handle": "Begrijpelijk",
                "text": "Informatie en de bediening van de gebruikersinterface moeten begrijpelijk zijn.",
                "guidelines": [
                    {
                        "id": "WCAG2:meaning",
                        "num": "3.1",
                        "handle": "Leesbaar",
                        "text": "Maak tekstcontent leesbaar en begrijpelijk.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:meaning-doc-lang-id",
                                "num": "3.1.1",
                                "handle": "Taal van de pagina",
                                "text": "De standaard menselijke taal van elke webpagina kan door software bepaald worden.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:meaning-other-lang-id",
                                "num": "3.1.2",
                                "handle": "Taal van onderdelen",
                                "text": "De menselijke taal van elke passage of zin in de content kan door software bepaald worden, behalve waar het gaat om eigennamen, technische termen, woorden van onbepaalde taal en woorden of zinsdelen die deel zijn gaan uitmaken van het jargon van de onmiddellijk omringende tekst.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:meaning-idioms",
                                "num": "3.1.3",
                                "handle": "Ongebruikelijke woorden",
                                "text": "Er is een mechanisme beschikbaar voor de identificatie van specifieke definities van woorden of zinsdelen die op een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomatische uitdrukkingen en jargon.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:meaning-located",
                                "num": "3.1.4",
                                "handle": "Afkortingen",
                                "text": "Er is een mechanisme beschikbaar voor de identificatie van de voluit geschreven vorm of betekenis van afkortingen.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:meaning-supplements",
                                "num": "3.1.5",
                                "handle": "Leesniveau",
                                "text": "Als tekst, nadat eigennamen en titels verwijderd zijn, een leesvaardigheid vereist die hoger is dan het niveau van drie jaar middelbaar onderwijs, dan is aanvullende content beschikbaar, of er is een versie beschikbaar die geen leesvaardigheid vereist die hoger is dan van drie jaar middelbaar onderwijs.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:meaning-pronunciation",
                                "num": "3.1.6",
                                "handle": "Uitspraak",
                                "text": "Een mechanisme is beschikbaar voor het vaststellen van de specifieke uitspraak van woorden indien de betekenis van de woorden in de context dubbelzinnig is zonder kennis van de uitspraak.",
                                "level": "AAA"
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:consistent-behavior",
                        "num": "3.2",
                        "handle": "Voorspelbaar",
                        "text": "Maak het uiterlijk en de bediening van webpagina's voorspelbaar.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:consistent-behavior-receive-focus",
                                "num": "3.2.1",
                                "handle": "Bij focus",
                                "text": "Als een component de focus krijgt, dan veroorzaakt dat geen contextwijziging.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:consistent-behavior-unpredictable-change",
                                "num": "3.2.2",
                                "handle": "Bij input",
                                "text": "Verandering van de instelling van een component van de gebruikersinterface veroorzaakt niet automatisch een contextwijziging tenzij de gebruiker geïnformeerd is over het gedrag vóór het gebruik van dit component.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:consistent-behavior-consistent-locations",
                                "num": "3.2.3",
                                "handle": "Consistente navigatie",
                                "text": "Navigatiemechanismen, die op meerdere webpagina's binnen een verzameling webpagina's herhaald worden, komen elke keer dat ze worden herhaald in dezelfde relatieve volgorde voor, tenzij een verandering wordt geïnitieerd door de gebruiker.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:consistent-behavior-consistent-functionality",
                                "num": "3.2.4",
                                "handle": "Consistente identificatie",
                                "text": "Componenten die dezelfde functionaliteit hebben binnen een verzameling webpagina's worden consistent geïdentificeerd.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:consistent-behavior-no-extreme-changes-context",
                                "num": "3.2.5",
                                "handle": "Verandering op verzoek",
                                "text": "Contextwijzigingen worden alleen geïnitieerd op verzoek van de gebruiker of er is een mechanisme beschikbaar om zulke veranderingen uit te zetten.",
                                "level": "AAA"
                            }
                        ]
                    },
                    {
                        "id": "WCAG2:minimize-error",
                        "num": "3.3",
                        "handle": "Assistentie bij invoer",
                        "text": "Help gebruikers om fouten te vermijden en ze te verbeteren.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:minimize-error-identified",
                                "num": "3.3.1",
                                "handle": "Fout identificatie",
                                "text": "Als een invoerfout automatisch ontdekt wordt, dan wordt het onderdeel waar de fout zit geïdentificeerd en de fout wordt tekstueel aan de gebruiker meegedeeld.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:minimize-error-cues",
                                "num": "3.3.2",
                                "handle": "Labels of instructies",
                                "text": "Als de content gebruikersinvoer vereist, dan worden labels of instructies geleverd.",
                                "level": "A"
                            },
                            {
                                "id": "WCAG2:minimize-error-suggestions",
                                "num": "3.3.3",
                                "handle": "Foutsuggestie",
                                "text": "Als een invoerfout automatisch ontdekt wordt en suggesties voor verbetering bekend zijn, dan worden de suggesties aan de gebruiker geleverd, tenzij dit de beveiliging of het doel van de content in gevaar zou brengen.",
                                "level": "AA"
                            },
                            {
                                "id": "WCAG2:minimize-error-reversible",
                                "num": "3.3.4",
                                "handle": "Foutpreventie (wettelijk, financieel, gegevens)",
                                "text": "Voor webpagina's die wettelijke verplichtingen of financiële transacties voor de gebruiker uitvoeren, die, door de gebruiker te beheren gegevens in gegevensopslagplaatsen verwijderen of wijzigen, of die antwoorden van de gebruiker verzenden, geldt ten minste één van de volgende zaken:",
                                "level": "AA",
                                "details": [
                                    {
                                        "type": "olist",
                                        "items": [
                                            {
                                                "handle": "Annuleerbaar",
                                                "text": "Verzendingen kunnen ongedaan gemaakt worden."
                                            },
                                            {
                                                "handle": "Gecontroleerd",
                                                "text": "Door de gebruiker ingevoerde gegevens worden gecontroleerd op invoerfouten en de gebruiker wordt de mogelijkheid gegeven om ze te verbeteren."
                                            },
                                            {
                                                "handle": "Bevestigd",
                                                "text": "Er is een mechanisme beschikbaar voor het beoordelen, bevestigen en verbeteren van informatie voor de verzending wordt voltooid."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:minimize-error-context-help",
                                "num": "3.3.5",
                                "handle": "Hulp",
                                "text": "contextgevoelige hulp is beschikbaar.",
                                "level": "AAA"
                            },
                            {
                                "id": "WCAG2:minimize-error-reversible-all",
                                "num": "3.3.6",
                                "handle": "Foutpreventie (alle)",
                                "text": "Voor webpagina's die vereisen dat de gebruiker informatie invoert en verzendt, geldt ten minste een van de volgende zaken:",
                                "level": "AAA",
                                "details": [
                                    {
                                        "type": "olist",
                                        "items": [
                                            {
                                                "handle": "Omkeerbaar",
                                                "text": "Het invoeren en verzenden zijn omkeerbaar."
                                            },
                                            {
                                                "handle": "Gecontroleerd",
                                                "text": "Door de gebruiker ingevoerde gegevens worden gecontroleerd op invoerfouten en de gebruiker wordt de mogelijkheid gegeven om ze te verbeteren."
                                            },
                                            {
                                                "handle": "Bevestigd",
                                                "text": "Er is een mechanisme beschikbaar voor het beoordelen, bevestigen en verbeteren van informatie voor het voltooien van het invoeren en verzenden."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "WCAG2:robust",
                "num": "4",
                "handle": "Robuust",
                "text": "Content moet voldoende robuust zijn om betrouwbaar geïnterpreteerd te kunnen worden door een breed scala van user agents, met inbegrip van hulptechnologieën.",
                "guidelines": [
                    {
                        "id": "WCAG2:ensure-compat",
                        "num": "4.1",
                        "handle": "Compatibel",
                        "text": "Maximaliseer compatibiliteit met huidige en toekomstige user agents, met inbegrip van hulptechnologieën.",
                        "successcriteria": [
                            {
                                "id": "WCAG2:ensure-compat-parses",
                                "num": "4.1.1",
                                "handle": "Parsen",
                                "text": "In content die geïmplementeerd is met opmaaktalen hebben elementen volledige begin- en eindtags, zijn elementen genest volgens hun specificatie, bevatten elementen geen dubbele attributen en zijn alle ID's uniek, behalve waar de specificatie deze eigenschappen toelaat.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "begin- en eindtags die een cruciaal karakter in hun formatie missen, zoals een sluithaak of een verkeerd gebruikt aanhalingsteken voor een attribuutwaarde, zijn niet volledig."
                                    }
                                ]
                            },
                            {
                                "id": "WCAG2:ensure-compat-rsv",
                                "num": "4.1.2",
                                "handle": "Naam, rol, waarde",
                                "text": "Voor alle componenten van de gebruikersinterface (inclusief, maar niet uitsluitend voor formulierelementen, links en door scripts gegenereerde componenten), kunnen de naam (name) en rol (role), door software bepaald worden; toestanden (states), eigenschappen (properties) en waarden (values) die door de gebruiker ingesteld kunnen worden kunnen door software bepaald worden; en kennisgeving van veranderingen in deze items is beschikbaar voor user agents, met inbegrip van hulptechnologieën.",
                                "level": "A",
                                "details": [
                                    {
                                        "type": "note",
                                        "handle": "Opmerking",
                                        "text": "dit succescriterium is primair voor webauteurs die hun eigen componenten van de gebruikersinterface ontwikkelen of scripten. Standaard bedieningselementen in HTML bijvoorbeeld voldoen al aan dit succescriterium als ze gebruikt worden volgens specificatie."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
});