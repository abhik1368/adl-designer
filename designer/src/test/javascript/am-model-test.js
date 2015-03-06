/*
 * ADL2-core
 * Copyright (c) 2013-2014 Marand d.o.o. (www.marand.com)
 *
 * This file is part of ADL2-core.
 *
 * ADL2-core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var res = {
    bodyWeight: {
        "@type": "FLAT_ARCHETYPE",
        "description": {
            "@type": "RESOURCE_DESCRIPTION",
            "original_author": [{"@type": "STRING_DICTIONARY_ITEM", "value": "Sam Heard", "id": "name"}, {
                "@type": "STRING_DICTIONARY_ITEM",
                "value": "Ocean Informatics",
                "id": "organisation"
            }, {
                "@type": "STRING_DICTIONARY_ITEM",
                "value": "sam.heard@oceaninformatics.com",
                "id": "email"
            }, {"@type": "STRING_DICTIONARY_ITEM", "value": "2006-03-09", "id": "date"}],
            "other_contributors": ["Sheryl Alexander, NT Department of Health, Australia", "Rita Apelt, Department of Health,NT, Australia", "Marja Buur-Krom, Medisch Centrum Alkmaar, Netherlands", "Margaret Campbell, Queensland Health, Australia", "Stephen Chu, NEHTA, Australia", "Margaret Cotter, AMSANT, Australia", "Hans Demski, Helmholtz Zentrum München, Germany", "Paul Donaldson, Queensland Health, Australia", "Michelle Dowden, Miwatj Health Ngalkanbuy Health, Australia", "Tim Garden, NTG Department of Health, Australia", "Sebastian Garde, Ocean Informatics, Germany", "Tanya Gardner, CAAC, Australia", "Soon Ghee Yap, Singapore Health Services Pte Ltd, Singapore", "Heather Grain, Llewellyn Informatics, Australia", "Anne Harbison, Australia", "Sam Heard, Ocean Informatics, Australia (Editor)", "Andrew James, University of Toronto, Canada", "Bernadette Lack, Department of Health, Australia", "Heather Leslie, Ocean Informatics, Australia (Editor)", "Rikard Lovstrom, Swedish Medical Association, Sweden", "Ian McNicoll, Ocean Informatics UK, United Kingdom", "Jeroen Meintjens, Medisch Centrum Alkmaar, Netherlands", "Jeremy Oats, NT Health, Australia", "Steven Schatz, Department of Health (Northern Territory), Australia", "Cherie Whitbread, Royal Darwin Hospital, Australia", "Jo Wright, NT Dept of Health, Australia (Editor)"],
            "lifecycle_state": "unmanaged",
            "details": [{
                "@type": "RESOURCE_DESCRIPTION_ITEM",
                "language": {
                    "@type": "CODE_PHRASE",
                    "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                    "code_string": "pt-br"
                },
                "purpose": "Para registrar o peso corporal de um indivíduo - tanto real como aproximado.",
                "keywords": ["*weight(en)", "*gain(en)", "*loss(en)", "*increase(en)", "*decrease(en)", "*mass(en)", "*estimate(en)", "*actual(en)"],
                "use": "Usado para gravar a medição real de peso corporal, inclusive quando o indivíduo tem faltando uma parte do corpo devido a uma causa congênita ou após a remoção cirúrgica. A indicação da imperfeição física do corpo pode ser registrada no elemento 'fatores de erro', se necessário.\r\nEste é o arquétipo para ser utilizado para uma medição típica de peso, por exemplo, auto-medido pelo indivíduo em casa, uma medida médico em uma clínica / hospital, ou um instrutor de fitness em um ginásio. \r\n\r\nTambém pode ser usado para a gravar uma aproximação da medição do peso corporal em um cenário clínico no qual não é possível medir com precisão o peso do corpo - por exemplo, pesar uma criança inquieta, ou estimar o peso de um feto (quando 'sujeito' é um feto e a gravação ocorre no registro da saúde da mãe). Isso não é modelado explicitamente no arquétipo como o modelo de referência da openEHR permite que o atributo de aproximação para qualquer tipo de dados quantitativos. Na execução, por exemplo, uma interface de usuário do aplicativo pode permitir que os clínicos para selecionar uma caixa de seleção devidamente setados junto ao campo de dados de peso, indicando que o peso verificado é uma aproximação, ao invés de reais. \r\n\r\nUsada para gravar a mudança de peso, ou seja, qualquer perda ou ganho de peso. Pode ser modelado por restringir a 'qualquer evento' a um intervalo associado com funções matemáticas de aumentar ou diminuir, conforme o caso.",
                "misuse": "Não deve ser utilizado para gravar o primeiro peso de um bebê logo após o nascimento, que é designado como o seu 'peso' - use a especialização de seu nascimento arquétipo OBSERVATION.body_weight-birth.\r\nNão deve ser usado para registrar o peso do corpo ajustado por exemplo, um cálculo do peso de corpo inteiro de uma pessoa com amputação de membros, com base em medições de outro corpo e um algoritmo -OBSERVATION.body_weight-adjusted.\r\nNão deve ser usado para registrar o peso de um objeto ou parte do corpo.",
                "copyright": "© National E-Health Transition Authority",
                "original_resource_uri": []
            }, {
                "@type": "RESOURCE_DESCRIPTION_ITEM",
                "language": {
                    "@type": "CODE_PHRASE",
                    "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                    "code_string": "de"
                },
                "purpose": "Zur Dokumentation des Gewichtes eines Individuums, sowohl exakt als auch ungefähr.",
                "keywords": ["Gewicht", "Zunahme", "Verlust", "Masse", "Schätzung"],
                "use": "Zur Dokumentation des tatsächlichen Körpergewichts, auch wenn das Individuum einen Körperteil (angeboren oder später amputiert) vermisst. Sofern benötigt, kann dies im Datenelement 'Störfaktoren' dokumentiert werden. Dies ist der Archetyp, der gewöhnlicherweise für eine typische Gewichtsmessung benutzt werden sollte, z.B. bei Selbstmessung durch das Individuum zu Hause, durch einen Kliniker im Krankenhaus, oder einen Fitness-Trainer in einem Fitness-Center.\r\n\r\nDer Archetyp kann auch benutzt werden, um eine Schätzung des Körpergewichts zu dokumentieren, wenn es nicht möglich ist, das Gewicht genau zu bestimmen - z.B. bei der Messung des Gewichts eines nicht kooperativen Kindes, oder bei einem ungeborenen Fötus (hier ist das 'Subjekt der Daten' der Fötus und die Dokumentation erfolgt in der Akte der Mutter). Dass es sich um eine Schätzung handelt wird in diesem Archetyp nicht explizit modelliert, da das openEHR Referenzmodell dies direkt für 'Quantity'-Datentypen unterstützt. In einer konkreten klinischen Anwendung könnte die Benutzerschnittstelle es dem Kliniker z.B. über eine Checkbox ermöglichen, zu dokumentieren, dass es sich um eine Schätzung handelt.",
                "misuse": "Nicht zur Dokumentation des ersten Gewichts eines Neugeboren (Geburtsgewicht) - benutzen Sie hierzu den spezialisierten Archetyp OBSERVATION.body_weight-birth.\r\nNicht zur Dokumentation des angepassten Körpergewichts, z.B. eine Berechnung des vollständigen Körpergewichts bei einer Person mit amputierter Extremität auf Basis der anderen Körperteile und eines Algorithmus - benutzen Sie OBSERVATION.body_weight-adjusted.\r\nNicht zur Dokumentation eines Objekts oder eines Teils des Körpers.",
                "copyright": "© National E-Health Transition Authority",
                "original_resource_uri": []
            }, {
                "@type": "RESOURCE_DESCRIPTION_ITEM",
                "language": {
                    "@type": "CODE_PHRASE",
                    "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                    "code_string": "en"
                },
                "purpose": "To record the body weight of an individual - both actual and approximate.",
                "keywords": ["weight", "gain", "loss", "increase", "decrease", "mass", "estimate", "actual"],
                "use": "To be used for recording the actual measurement of body weight, including when the individual is missing a body part due to a congenital cause or after surgical removal.   A statement identifying the physical incompleteness of the body can be recorded in the 'Confounding factors' data element, if required. This is the usual archetype to be used for a typical measurement of weight, for example self-measured by the individual at home, a clinician measurement in a clinic/hospital, or a fitness instructor in a gymnasium.  \r\n\r\nCan also be used for recording an approximation of body weight measurement in a clinical scenario where it is not possible to accurately measure body weight - for example, weighing an uncooperative child, or estimating the weight of an unborn fetus (where the 'subject of data' is the Fetus and recording occurs within the mother's health record).  This is not modelled explicitly in the archetype as the openEHR Reference model allows the attribute of Approximation for any Quantity data type.  At implementation, for example, an application user interface could allow clinicians to select an appropriately labelled check box adjacent to the Weight data field to indicate that the recorded weight is an approximation, rather than actual.\r\n\r\nTo be used for recording weight change, that is, either weight loss or weight gain.  This can currently be modelled by constraining the 'any event' to an interval with associated mathematical function of increase or decrease, as appropriate.\r\n\r\nBirthweight (that is the first weight measured in close proximity to the time of birth) can be specifically identified by recording the weight measurement using the 'Birth' point in time event.",
                "misuse": "Not to be used to record the first weight of an infant soon after birth which is designated as their 'birth weight' - use the specialisation of this archetype OBSERVATION.body_weight-birth.\r\nNot to be used to record the adjusted body weight eg a calculation of the full body weight of a person with limb amputation, based on other body part measurements and an algorithm - use OBSERVATION.body_weight-adjusted.\r\nNot to be used to record the weight of an object or body part.",
                "copyright": "© openEHR",
                "original_resource_uri": []
            }, {
                "@type": "RESOURCE_DESCRIPTION_ITEM",
                "language": {
                    "@type": "CODE_PHRASE",
                    "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                    "code_string": "ru"
                },
                "purpose": "Для записи массы тела человека: фактической или приблизительной.",
                "keywords": ["вес", "масса тела", "прибавка", "потеря", "увеличение", "уменьшение", "оценка", "актуально"],
                "use": "Использовать для записи фактического измерения массы тела, включая случаи отсутсвия части(-ей) тела, врожденное или после хирургического удаления. Отметка о физической неполноте тела может быть зарегистрирована в элементе данных \"стохастическая погрешность\", если требуется. Это - обычный архетип, используемый для типичного измерения веса, например самоизмеренного человеком дома, измерение клинициста в клинике/больнице, или фитнес-инструктором в гимнастическом зале. \r\n\r\nМожет также использоваться для записи примерного измерения массы тела в клиническом сценарии, где не возможно взвешивание - например, сопротивляющийся ребёнок, или для оценики веса внутриутробного плода (где 'предметом данных' является плод, и регистрация происходит в пределах записи о состоянии здоровья матери). Это не оформлено явно в архетипе, поскольку модель openEHR позволяет атрибут «приблизительно» для любого типа данных «количество». При работе, например, прикладной пользовательский интерфейс позволяет клиницистам выбирать соответствующую отметку, смежную с полем данных «вес», чтобы указать, что зарегистрированный вес - приблизительный, а не фактический. \r\n\r\nИспользовать для записи изменения веса, то есть, потери веса или увеличения веса.\r\nЭто может в настоящее время моделироваться, привязывая 'каждый случай' к интервалу со связанной математической функцией увеличения или уменьшения, соответственно.",
                "misuse": "Не использовать для записи первого веса младенца после рождение, которое обозначено как 'вес при рождении' - использовать специализацию этого архетипа OBSERVATION.body_weight-birth. \r\nНе использовать для записи массы тела человека с протезами / приспособлениями для вычисление полной массы тела человека с ампутацией, основанной на других измерениях и алгоритме  - использовать архетип OBSERVATION.body_weight-adjusted.\r\nНе использовать, чтобы сделать запись веса части тела или объекта.",
                "copyright": "© National E-Health Transition Authority",
                "original_resource_uri": []
            }, {
                "@type": "RESOURCE_DESCRIPTION_ITEM",
                "language": {
                    "@type": "CODE_PHRASE",
                    "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                    "code_string": "nl"
                },
                "purpose": "Om het lichaamsgewicht van een persoon te registreren - zowel exact als geschat gewicht.",
                "keywords": ["gewicht", "stijging", "verlies", "toename", "daling", "massa", "schatting", "werkelijk", "afname"],
                "use": "Registreren van een actuele meting van het lichaamsgewicht, ook als deze persoon een lichaamsdeel mist, door een geboorteafwijking of na een chirurgische ingreep. Een verklaring over de fysieke inclompleetheid van het lichaam, kan zo nodig opgeslagen worden in het data element 'beïnvloedende factoren'. Dit is het gebruikelijke archetype voor gewichtmetingen, bij voorbeeld thuis gemeten door de persoon zelf, een klinische meting in een kliniek/ziekenhuis, of door een fitness instructeur in een sportschool.\r\n\r\nKan ook gebruikt worden om een geschat lichaamsgewicht te registreren in een klinische setting als het niet mogelijk is om het exacte lichaamsgewicht te meten - bijvoorbeeld, het wegen van een tegenwerkend kind, of een schatting van het gewicht van een ongeboren kind (waar het onderwerp van de gegevens de foetus is en de opslag in het patiënten dossier van de moeder plaatsvindt). Dit is niet expliciet gemodelleerd in het archetype, omdat het openEHR Referentie model een schatting in ieder kwantitatief data type toestaat. Bij de uitvoering, bijvoorbeeld, zou een applicatie gebruikersinterface, clinici een adequaat geëtiketteerd selectievakje kunnen aanbieden, naast de gegevens over het gewicht, waarin door selecteren aangegeven kan worden dat het opgenomen gewicht een schatting is, in plaats van het werkelijke gewicht.\r\n\r\nDient te worden gebruikt om gewichtsverandering op te slaan, zowel gewichtsverlies als gewichtstoename.  Dit kan gemodelleerd worden door 'any event' - elke gebeurtenis - in voorkomende gevallen, te beperken tot een interval met met bijbehorende rekenkundige functie van stijging of daling.",
                "misuse": "Dient niet te worden gebruikt voor het registreren van het eerste gewicht van een kind, na geboorte, welke wordt aangewezen als geboortegewicht. Gebruik hiervoor de specialisatie van dit archetype, OBSERVATION.body_weight-birth (OBSERVATION.lichaamsgewicht-geboorte.\r\nDient niet te worden gebruikt voor het registreren van het aangepaste lichaamsgewicht, bijvoorbeeld een berekening van het volledige lichaamsgewicht van een persoon met een amputatie van ledematen, gebaseerd op metingen van lichaamsdelen en een algoritme - gebruik hiervoor OBSERVATION.body_weight-adjusted. (OBSERVATION.lichaamsgewicht-aangepast).\r\nDient niet te worden gebruikt voor het vastleggen van het gewicht van een object of lichaamsdeel.",
                "copyright": "© National E-Health Transition Authority",
                "original_resource_uri": []
            }]
        },
        "translations": [{
            "@type": "TRANSLATION_DETAILS",
            "language": {
                "@type": "CODE_PHRASE",
                "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                "code_string": "de"
            },
            "author": [{
                "@type": "STRING_DICTIONARY_ITEM",
                "value": "Sebastian Garde, Jasmin Buck",
                "id": "name"
            }, {
                "@type": "STRING_DICTIONARY_ITEM",
                "value": "Ocean Informatics, University of Heidelberg",
                "id": "organisation"
            }],
            "other_details": []
        }, {
            "@type": "TRANSLATION_DETAILS",
            "language": {
                "@type": "CODE_PHRASE",
                "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                "code_string": "ru"
            },
            "author": [{"@type": "STRING_DICTIONARY_ITEM", "value": "Igor Lizunov", "id": "name"}, {
                "@type": "STRING_DICTIONARY_ITEM",
                "value": "i.lizunov@infinnity.ru",
                "id": "email"
            }],
            "other_details": []
        }, {
            "@type": "TRANSLATION_DETAILS",
            "language": {
                "@type": "CODE_PHRASE",
                "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                "code_string": "nl"
            },
            "author": [{"@type": "STRING_DICTIONARY_ITEM", "value": "Marja Buur", "id": "name"}, {
                "@type": "STRING_DICTIONARY_ITEM",
                "value": "Medisch Centrum Alkmaar, Nederland",
                "id": "organisation"
            }, {"@type": "STRING_DICTIONARY_ITEM", "value": "m.buur-krom@mca.nl", "id": "email"}],
            "accreditation": "Nurse informatics",
            "other_details": []
        }, {
            "@type": "TRANSLATION_DETAILS",
            "language": {
                "@type": "CODE_PHRASE",
                "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
                "code_string": "pt-br"
            },
            "author": [{"@type": "STRING_DICTIONARY_ITEM", "value": "Marco Borges", "id": "name"}, {
                "@type": "STRING_DICTIONARY_ITEM",
                "value": "P2D",
                "id": "organisation"
            }, {"@type": "STRING_DICTIONARY_ITEM", "value": "marco.borges@p2d.com.br", "id": "email"}],
            "accreditation": "P2D Health Advisor Council",
            "other_details": []
        }],
        "definition": {
            "@type": "C_COMPLEX_OBJECT",
            "attributes": [{
                "@type": "C_ATTRIBUTE",
                "rm_attribute_name": "data",
                "existence": {
                    "@type": "MULTIPLICITY_INTERVAL",
                    "lower_included": true,
                    "upper_included": true,
                    "lower_unbounded": false,
                    "upper_unbounded": false,
                    "lower": 1,
                    "upper": 1
                },
                "is_multiple": false,
                "match_negated": false,
                "children": [{
                    "@type": "C_COMPLEX_OBJECT",
                    "attributes": [{
                        "@type": "C_ATTRIBUTE",
                        "rm_attribute_name": "events",
                        "existence": {
                            "@type": "MULTIPLICITY_INTERVAL",
                            "lower_included": true,
                            "upper_included": true,
                            "lower_unbounded": false,
                            "upper_unbounded": false,
                            "lower": 1,
                            "upper": 1
                        },
                        "is_multiple": true,
                        "match_negated": false,
                        "children": [{
                            "@type": "C_COMPLEX_OBJECT",
                            "attributes": [{
                                "@type": "C_ATTRIBUTE",
                                "rm_attribute_name": "data",
                                "existence": {
                                    "@type": "MULTIPLICITY_INTERVAL",
                                    "lower_included": true,
                                    "upper_included": true,
                                    "lower_unbounded": false,
                                    "upper_unbounded": false,
                                    "lower": 1,
                                    "upper": 1
                                },
                                "is_multiple": false,
                                "match_negated": false,
                                "children": [{
                                    "@type": "C_COMPLEX_OBJECT",
                                    "attributes": [{
                                        "@type": "C_ATTRIBUTE",
                                        "rm_attribute_name": "items",
                                        "existence": {
                                            "@type": "MULTIPLICITY_INTERVAL",
                                            "lower_included": true,
                                            "upper_included": true,
                                            "lower_unbounded": false,
                                            "upper_unbounded": false,
                                            "lower": 1,
                                            "upper": 1
                                        },
                                        "is_multiple": true,
                                        "match_negated": false,
                                        "children": [{
                                            "@type": "C_COMPLEX_OBJECT",
                                            "attributes": [{
                                                "@type": "C_ATTRIBUTE",
                                                "rm_attribute_name": "value",
                                                "existence": {
                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                    "lower_included": true,
                                                    "upper_included": true,
                                                    "lower_unbounded": false,
                                                    "upper_unbounded": false,
                                                    "lower": 1,
                                                    "upper": 1
                                                },
                                                "is_multiple": false,
                                                "match_negated": false,
                                                "children": [{
                                                    "@type": "C_COMPLEX_OBJECT",
                                                    "attributes": [{
                                                        "@type": "C_ATTRIBUTE",
                                                        "rm_attribute_name": "property",
                                                        "existence": {
                                                            "@type": "MULTIPLICITY_INTERVAL",
                                                            "lower_included": true,
                                                            "upper_included": true,
                                                            "lower_unbounded": false,
                                                            "upper_unbounded": false,
                                                            "lower": 1,
                                                            "upper": 1
                                                        },
                                                        "is_multiple": false,
                                                        "match_negated": false,
                                                        "children": [{
                                                            "@type": "C_TERMINOLOGY_CODE",
                                                            "code_list": ["at19"],
                                                            "occurrences": {
                                                                "@type": "MULTIPLICITY_INTERVAL",
                                                                "lower_included": true,
                                                                "upper_included": true,
                                                                "lower_unbounded": false,
                                                                "upper_unbounded": false,
                                                                "lower": 1,
                                                                "upper": 1
                                                            },
                                                            "rm_type_name": "C_TERMINOLOGY_CODE"
                                                        }]
                                                    }],
                                                    "attribute_tuples": [{
                                                        "@type": "C_ATTRIBUTE_TUPLE",
                                                        "members": [{
                                                            "@type": "C_ATTRIBUTE",
                                                            "rm_attribute_name": "magnitude",
                                                            "existence": {
                                                                "@type": "MULTIPLICITY_INTERVAL",
                                                                "lower_included": true,
                                                                "upper_included": true,
                                                                "lower_unbounded": false,
                                                                "upper_unbounded": false,
                                                                "lower": 1,
                                                                "upper": 1
                                                            },
                                                            "is_multiple": false,
                                                            "match_negated": false
                                                        }, {
                                                            "@type": "C_ATTRIBUTE",
                                                            "rm_attribute_name": "units",
                                                            "existence": {
                                                                "@type": "MULTIPLICITY_INTERVAL",
                                                                "lower_included": true,
                                                                "upper_included": true,
                                                                "lower_unbounded": false,
                                                                "upper_unbounded": false,
                                                                "lower": 1,
                                                                "upper": 1
                                                            },
                                                            "is_multiple": false,
                                                            "match_negated": false
                                                        }],
                                                        "children": [{
                                                            "@type": "C_OBJECT_TUPLE",
                                                            "members": [{
                                                                "@type": "C_REAL",
                                                                "list": [],
                                                                "range": {
                                                                    "@type": "INTERVAL_OF_REAL",
                                                                    "lower": 0.0,
                                                                    "upper": 1000.0,
                                                                    "lower_included": true,
                                                                    "upper_included": true,
                                                                    "lower_unbounded": false,
                                                                    "upper_unbounded": false
                                                                },
                                                                "occurrences": {
                                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                                    "lower_included": true,
                                                                    "upper_included": true,
                                                                    "lower_unbounded": false,
                                                                    "upper_unbounded": false,
                                                                    "lower": 1,
                                                                    "upper": 1
                                                                },
                                                                "rm_type_name": "C_REAL"
                                                            }, {
                                                                "@type": "C_STRING",
                                                                "list": ["kg"],
                                                                "default_value": "kg",
                                                                "occurrences": {
                                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                                    "lower_included": true,
                                                                    "upper_included": true,
                                                                    "lower_unbounded": false,
                                                                    "upper_unbounded": false,
                                                                    "lower": 1,
                                                                    "upper": 1
                                                                },
                                                                "rm_type_name": "C_STRING"
                                                            }]
                                                        }, {
                                                            "@type": "C_OBJECT_TUPLE",
                                                            "members": [{
                                                                "@type": "C_REAL",
                                                                "list": [],
                                                                "range": {
                                                                    "@type": "INTERVAL_OF_REAL",
                                                                    "lower": 0.0,
                                                                    "upper": 2000.0,
                                                                    "lower_included": true,
                                                                    "upper_included": true,
                                                                    "lower_unbounded": false,
                                                                    "upper_unbounded": false
                                                                },
                                                                "occurrences": {
                                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                                    "lower_included": true,
                                                                    "upper_included": true,
                                                                    "lower_unbounded": false,
                                                                    "upper_unbounded": false,
                                                                    "lower": 1,
                                                                    "upper": 1
                                                                },
                                                                "rm_type_name": "C_REAL"
                                                            }, {
                                                                "@type": "C_STRING",
                                                                "list": ["lb"],
                                                                "default_value": "lb",
                                                                "occurrences": {
                                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                                    "lower_included": true,
                                                                    "upper_included": true,
                                                                    "lower_unbounded": false,
                                                                    "upper_unbounded": false,
                                                                    "lower": 1,
                                                                    "upper": 1
                                                                },
                                                                "rm_type_name": "C_STRING"
                                                            }]
                                                        }]
                                                    }],
                                                    "occurrences": {
                                                        "@type": "MULTIPLICITY_INTERVAL",
                                                        "lower_included": true,
                                                        "upper_included": true,
                                                        "lower_unbounded": false,
                                                        "upper_unbounded": false,
                                                        "lower": 1,
                                                        "upper": 1
                                                    },
                                                    "rm_type_name": "DV_QUANTITY",
                                                    "node_id": "id30"
                                                }]
                                            }],
                                            "attribute_tuples": [],
                                            "occurrences": {
                                                "@type": "MULTIPLICITY_INTERVAL",
                                                "lower_included": true,
                                                "upper_included": true,
                                                "lower_unbounded": false,
                                                "upper_unbounded": false,
                                                "lower": 1,
                                                "upper": 1
                                            },
                                            "rm_type_name": "ELEMENT",
                                            "node_id": "id5"
                                        }, {
                                            "@type": "C_COMPLEX_OBJECT",
                                            "attributes": [{
                                                "@type": "C_ATTRIBUTE",
                                                "rm_attribute_name": "value",
                                                "existence": {
                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                    "lower_included": true,
                                                    "upper_included": true,
                                                    "lower_unbounded": false,
                                                    "upper_unbounded": false,
                                                    "lower": 1,
                                                    "upper": 1
                                                },
                                                "is_multiple": false,
                                                "match_negated": false,
                                                "children": [{
                                                    "@type": "C_COMPLEX_OBJECT",
                                                    "attributes": [],
                                                    "attribute_tuples": [],
                                                    "occurrences": {
                                                        "@type": "MULTIPLICITY_INTERVAL",
                                                        "lower_included": true,
                                                        "upper_included": true,
                                                        "lower_unbounded": false,
                                                        "upper_unbounded": false,
                                                        "lower": 1,
                                                        "upper": 1
                                                    },
                                                    "rm_type_name": "DV_TEXT",
                                                    "node_id": "id31"
                                                }]
                                            }],
                                            "attribute_tuples": [],
                                            "occurrences": {
                                                "@type": "MULTIPLICITY_INTERVAL",
                                                "lower_included": true,
                                                "upper_included": true,
                                                "lower_unbounded": false,
                                                "upper_unbounded": false,
                                                "lower": 0,
                                                "upper": 1
                                            },
                                            "rm_type_name": "ELEMENT",
                                            "node_id": "id25"
                                        }],
                                        "cardinality": {
                                            "@type": "CARDINALITY",
                                            "is_ordered": false,
                                            "is_unique": false,
                                            "interval": {
                                                "@type": "MULTIPLICITY_INTERVAL",
                                                "lower_included": true,
                                                "upper_included": true,
                                                "lower_unbounded": false,
                                                "upper_unbounded": false,
                                                "lower": 1,
                                                "upper": 1
                                            }
                                        }
                                    }],
                                    "attribute_tuples": [],
                                    "occurrences": {
                                        "@type": "MULTIPLICITY_INTERVAL",
                                        "lower_included": true,
                                        "upper_included": true,
                                        "lower_unbounded": false,
                                        "upper_unbounded": false,
                                        "lower": 1,
                                        "upper": 1
                                    },
                                    "rm_type_name": "ITEM_TREE",
                                    "node_id": "id2"
                                }]
                            }, {
                                "@type": "C_ATTRIBUTE",
                                "rm_attribute_name": "state",
                                "existence": {
                                    "@type": "MULTIPLICITY_INTERVAL",
                                    "lower_included": true,
                                    "upper_included": true,
                                    "lower_unbounded": false,
                                    "upper_unbounded": false,
                                    "lower": 1,
                                    "upper": 1
                                },
                                "is_multiple": false,
                                "match_negated": false,
                                "children": [{
                                    "@type": "C_COMPLEX_OBJECT",
                                    "attributes": [{
                                        "@type": "C_ATTRIBUTE",
                                        "rm_attribute_name": "items",
                                        "existence": {
                                            "@type": "MULTIPLICITY_INTERVAL",
                                            "lower_included": true,
                                            "upper_included": true,
                                            "lower_unbounded": false,
                                            "upper_unbounded": false,
                                            "lower": 1,
                                            "upper": 1
                                        },
                                        "is_multiple": false,
                                        "match_negated": false,
                                        "children": [{
                                            "@type": "C_COMPLEX_OBJECT",
                                            "attributes": [{
                                                "@type": "C_ATTRIBUTE",
                                                "rm_attribute_name": "value",
                                                "existence": {
                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                    "lower_included": true,
                                                    "upper_included": true,
                                                    "lower_unbounded": false,
                                                    "upper_unbounded": false,
                                                    "lower": 1,
                                                    "upper": 1
                                                },
                                                "is_multiple": false,
                                                "match_negated": false,
                                                "children": [{
                                                    "@type": "C_COMPLEX_OBJECT",
                                                    "attributes": [{
                                                        "@type": "C_ATTRIBUTE",
                                                        "rm_attribute_name": "defining_code",
                                                        "existence": {
                                                            "@type": "MULTIPLICITY_INTERVAL",
                                                            "lower_included": true,
                                                            "upper_included": true,
                                                            "lower_unbounded": false,
                                                            "upper_unbounded": false,
                                                            "lower": 1,
                                                            "upper": 1
                                                        },
                                                        "is_multiple": false,
                                                        "match_negated": false,
                                                        "children": [{
                                                            "@type": "C_TERMINOLOGY_CODE",
                                                            "code_list": ["ac1"],
                                                            "occurrences": {
                                                                "@type": "MULTIPLICITY_INTERVAL",
                                                                "lower_included": true,
                                                                "upper_included": true,
                                                                "lower_unbounded": false,
                                                                "upper_unbounded": false,
                                                                "lower": 1,
                                                                "upper": 1
                                                            },
                                                            "rm_type_name": "C_TERMINOLOGY_CODE"
                                                        }]
                                                    }],
                                                    "attribute_tuples": [],
                                                    "occurrences": {
                                                        "@type": "MULTIPLICITY_INTERVAL",
                                                        "lower_included": true,
                                                        "upper_included": true,
                                                        "lower_unbounded": false,
                                                        "upper_unbounded": false,
                                                        "lower": 1,
                                                        "upper": 1
                                                    },
                                                    "rm_type_name": "DV_CODED_TEXT",
                                                    "node_id": "id32"
                                                }]
                                            }],
                                            "attribute_tuples": [],
                                            "occurrences": {
                                                "@type": "MULTIPLICITY_INTERVAL",
                                                "lower_included": true,
                                                "upper_included": true,
                                                "lower_unbounded": false,
                                                "upper_unbounded": false,
                                                "lower": 0,
                                                "upper": 1
                                            },
                                            "rm_type_name": "ELEMENT",
                                            "node_id": "id10"
                                        }, {
                                            "@type": "C_COMPLEX_OBJECT",
                                            "attributes": [{
                                                "@type": "C_ATTRIBUTE",
                                                "rm_attribute_name": "value",
                                                "existence": {
                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                    "lower_included": true,
                                                    "upper_included": true,
                                                    "lower_unbounded": false,
                                                    "upper_unbounded": false,
                                                    "lower": 1,
                                                    "upper": 1
                                                },
                                                "is_multiple": false,
                                                "match_negated": false,
                                                "children": [{
                                                    "@type": "C_COMPLEX_OBJECT",
                                                    "attributes": [{
                                                        "@type": "C_ATTRIBUTE",
                                                        "rm_attribute_name": "value",
                                                        "existence": {
                                                            "@type": "MULTIPLICITY_INTERVAL",
                                                            "lower_included": true,
                                                            "upper_included": true,
                                                            "lower_unbounded": false,
                                                            "upper_unbounded": false,
                                                            "lower": 1,
                                                            "upper": 1
                                                        },
                                                        "is_multiple": false,
                                                        "match_negated": false,
                                                        "children": [{
                                                            "@type": "C_BOOLEAN",
                                                            "true_valid": true,
                                                            "false_valid": true,
                                                            "assumed_value": false,
                                                            "occurrences": {
                                                                "@type": "MULTIPLICITY_INTERVAL",
                                                                "lower_included": true,
                                                                "upper_included": true,
                                                                "lower_unbounded": false,
                                                                "upper_unbounded": false,
                                                                "lower": 1,
                                                                "upper": 1
                                                            },
                                                            "rm_type_name": "C_BOOLEAN"
                                                        }]
                                                    }],
                                                    "attribute_tuples": [],
                                                    "occurrences": {
                                                        "@type": "MULTIPLICITY_INTERVAL",
                                                        "lower_included": true,
                                                        "upper_included": true,
                                                        "lower_unbounded": false,
                                                        "upper_unbounded": false,
                                                        "lower": 1,
                                                        "upper": 1
                                                    },
                                                    "rm_type_name": "DV_BOOLEAN",
                                                    "node_id": "id33"
                                                }]
                                            }],
                                            "attribute_tuples": [],
                                            "occurrences": {
                                                "@type": "MULTIPLICITY_INTERVAL",
                                                "lower_included": true,
                                                "upper_included": true,
                                                "lower_unbounded": false,
                                                "upper_unbounded": false,
                                                "lower": 0,
                                                "upper": 1
                                            },
                                            "rm_type_name": "ELEMENT",
                                            "node_id": "id29"
                                        }, {
                                            "@type": "C_COMPLEX_OBJECT",
                                            "attributes": [{
                                                "@type": "C_ATTRIBUTE",
                                                "rm_attribute_name": "value",
                                                "existence": {
                                                    "@type": "MULTIPLICITY_INTERVAL",
                                                    "lower_included": true,
                                                    "upper_included": true,
                                                    "lower_unbounded": false,
                                                    "upper_unbounded": false,
                                                    "lower": 1,
                                                    "upper": 1
                                                },
                                                "is_multiple": false,
                                                "match_negated": false,
                                                "children": [{
                                                    "@type": "C_COMPLEX_OBJECT",
                                                    "attributes": [],
                                                    "attribute_tuples": [],
                                                    "occurrences": {
                                                        "@type": "MULTIPLICITY_INTERVAL",
                                                        "lower_included": true,
                                                        "upper_included": true,
                                                        "lower_unbounded": false,
                                                        "upper_unbounded": false,
                                                        "lower": 1,
                                                        "upper": 1
                                                    },
                                                    "rm_type_name": "DV_TEXT",
                                                    "node_id": "id34"
                                                }]
                                            }],
                                            "attribute_tuples": [],
                                            "occurrences": {
                                                "@type": "MULTIPLICITY_INTERVAL",
                                                "lower_included": true,
                                                "upper_included": true,
                                                "lower_unbounded": false,
                                                "upper_unbounded": false,
                                                "lower": 0,
                                                "upper": 1
                                            },
                                            "rm_type_name": "ELEMENT",
                                            "node_id": "id26"
                                        }]
                                    }],
                                    "attribute_tuples": [],
                                    "occurrences": {
                                        "@type": "MULTIPLICITY_INTERVAL",
                                        "lower_included": true,
                                        "upper_included": true,
                                        "lower_unbounded": false,
                                        "upper_unbounded": false,
                                        "lower": 1,
                                        "upper": 1
                                    },
                                    "rm_type_name": "ITEM_TREE",
                                    "node_id": "id9"
                                }]
                            }],
                            "attribute_tuples": [],
                            "occurrences": {
                                "@type": "MULTIPLICITY_INTERVAL",
                                "lower_included": true,
                                "upper_included": false,
                                "lower_unbounded": false,
                                "upper_unbounded": true,
                                "lower": 0
                            },
                            "rm_type_name": "EVENT",
                            "node_id": "id4"
                        }, {
                            "@type": "C_COMPLEX_OBJECT",
                            "attributes": [{
                                "@type": "C_ATTRIBUTE",
                                "rm_attribute_name": "data",
                                "existence": {
                                    "@type": "MULTIPLICITY_INTERVAL",
                                    "lower_included": true,
                                    "upper_included": true,
                                    "lower_unbounded": false,
                                    "upper_unbounded": false,
                                    "lower": 1,
                                    "upper": 1
                                },
                                "is_multiple": false,
                                "match_negated": false,
                                "children": [{
                                    "@type": "ARCHETYPE_INTERNAL_REF",
                                    "target_path": "/data[id3]/events[id4]/data[id2]",
                                    "occurrences": {
                                        "@type": "MULTIPLICITY_INTERVAL",
                                        "lower_included": true,
                                        "upper_included": true,
                                        "lower_unbounded": false,
                                        "upper_unbounded": false,
                                        "lower": 1,
                                        "upper": 1
                                    },
                                    "rm_type_name": "ITEM_TREE",
                                    "node_id": "id35"
                                }]
                            }, {
                                "@type": "C_ATTRIBUTE",
                                "rm_attribute_name": "state",
                                "existence": {
                                    "@type": "MULTIPLICITY_INTERVAL",
                                    "lower_included": true,
                                    "upper_included": true,
                                    "lower_unbounded": false,
                                    "upper_unbounded": false,
                                    "lower": 1,
                                    "upper": 1
                                },
                                "is_multiple": false,
                                "match_negated": false,
                                "children": [{
                                    "@type": "ARCHETYPE_INTERNAL_REF",
                                    "target_path": "/data[id3]/events[id4]/state[id9]",
                                    "occurrences": {
                                        "@type": "MULTIPLICITY_INTERVAL",
                                        "lower_included": true,
                                        "upper_included": true,
                                        "lower_unbounded": false,
                                        "upper_unbounded": false,
                                        "lower": 1,
                                        "upper": 1
                                    },
                                    "rm_type_name": "ITEM_TREE",
                                    "node_id": "id36"
                                }]
                            }],
                            "attribute_tuples": [],
                            "occurrences": {
                                "@type": "MULTIPLICITY_INTERVAL",
                                "lower_included": true,
                                "upper_included": true,
                                "lower_unbounded": false,
                                "upper_unbounded": false,
                                "lower": 0,
                                "upper": 1
                            },
                            "rm_type_name": "POINT_EVENT",
                            "node_id": "id27"
                        }],
                        "cardinality": {
                            "@type": "CARDINALITY",
                            "is_ordered": false,
                            "is_unique": false,
                            "interval": {
                                "@type": "MULTIPLICITY_INTERVAL",
                                "lower_included": true,
                                "upper_included": false,
                                "lower_unbounded": false,
                                "upper_unbounded": true,
                                "lower": 1
                            }
                        }
                    }],
                    "attribute_tuples": [],
                    "occurrences": {
                        "@type": "MULTIPLICITY_INTERVAL",
                        "lower_included": true,
                        "upper_included": true,
                        "lower_unbounded": false,
                        "upper_unbounded": false,
                        "lower": 1,
                        "upper": 1
                    },
                    "rm_type_name": "HISTORY",
                    "node_id": "id3"
                }]
            }, {
                "@type": "C_ATTRIBUTE",
                "rm_attribute_name": "protocol",
                "existence": {
                    "@type": "MULTIPLICITY_INTERVAL",
                    "lower_included": true,
                    "upper_included": true,
                    "lower_unbounded": false,
                    "upper_unbounded": false,
                    "lower": 1,
                    "upper": 1
                },
                "is_multiple": false,
                "match_negated": false,
                "children": [{
                    "@type": "C_COMPLEX_OBJECT",
                    "attributes": [{
                        "@type": "C_ATTRIBUTE",
                        "rm_attribute_name": "items",
                        "existence": {
                            "@type": "MULTIPLICITY_INTERVAL",
                            "lower_included": true,
                            "upper_included": true,
                            "lower_unbounded": false,
                            "upper_unbounded": false,
                            "lower": 1,
                            "upper": 1
                        },
                        "is_multiple": false,
                        "match_negated": false,
                        "children": [{
                            "@type": "ARCHETYPE_SLOT",
                            "includes": [{
                                "@type": "ASSERTION",
                                "string_expression": "archetype_id/value matches {/openEHR-EHR-CLUSTER\\.device(-a-zA-Z0-9_]+)*\\.v1/}",
                                "expression": {"@type": "EXPR_BINARY_OPERATOR", "type": "CONSTRAINT"}
                            }],
                            "occurrences": {
                                "@type": "MULTIPLICITY_INTERVAL",
                                "lower_included": true,
                                "upper_included": true,
                                "lower_unbounded": false,
                                "upper_unbounded": false,
                                "lower": 0,
                                "upper": 1
                            },
                            "rm_type_name": "CLUSTER",
                            "node_id": "id21"
                        }, {
                            "@type": "C_COMPLEX_OBJECT",
                            "attributes": [{
                                "@type": "C_ATTRIBUTE",
                                "rm_attribute_name": "value",
                                "existence": {
                                    "@type": "MULTIPLICITY_INTERVAL",
                                    "lower_included": true,
                                    "upper_included": true,
                                    "lower_unbounded": false,
                                    "upper_unbounded": false,
                                    "lower": 1,
                                    "upper": 1
                                },
                                "is_multiple": false,
                                "match_negated": false,
                                "children": [{
                                    "@type": "C_COMPLEX_OBJECT",
                                    "attributes": [],
                                    "attribute_tuples": [],
                                    "occurrences": {
                                        "@type": "MULTIPLICITY_INTERVAL",
                                        "lower_included": true,
                                        "upper_included": true,
                                        "lower_unbounded": false,
                                        "upper_unbounded": false,
                                        "lower": 1,
                                        "upper": 1
                                    },
                                    "rm_type_name": "DV_TEXT",
                                    "node_id": "id37"
                                }]
                            }],
                            "attribute_tuples": [],
                            "occurrences": {
                                "@type": "MULTIPLICITY_INTERVAL",
                                "lower_included": true,
                                "upper_included": true,
                                "lower_unbounded": false,
                                "upper_unbounded": false,
                                "lower": 0,
                                "upper": 1
                            },
                            "rm_type_name": "ELEMENT",
                            "node_id": "id28"
                        }]
                    }],
                    "attribute_tuples": [],
                    "occurrences": {
                        "@type": "MULTIPLICITY_INTERVAL",
                        "lower_included": true,
                        "upper_included": true,
                        "lower_unbounded": false,
                        "upper_unbounded": false,
                        "lower": 1,
                        "upper": 1
                    },
                    "rm_type_name": "ITEM_TREE",
                    "node_id": "id16"
                }]
            }],
            "attribute_tuples": [],
            "occurrences": {
                "@type": "MULTIPLICITY_INTERVAL",
                "lower_included": true,
                "upper_included": true,
                "lower_unbounded": false,
                "upper_unbounded": false,
                "lower": 1,
                "upper": 1
            },
            "rm_type_name": "OBSERVATION",
            "node_id": "id1"
        },
        "invariants": [],
        "ontology": {
            "@type": "ARCHETYPE_ONTOLOGY",
            "term_definitions": {
                "nl": {
                    "id1": {
                        "text": "Lichaamsgewicht",
                        "description": "Meting van het lichaamsgewicht van een individu."
                    },
                    "id4": {"text": "Elke gebeurtenis", "description": "Elke gebeurtenis."},
                    "id5": {"text": "Gewicht", "description": "Het gewicht van het individu."},
                    "id10": {
                        "text": "Hoeveelheid kleding",
                        "description": "Beschrijving van de hoeveelheid kleding van de persoon, op het moment van wegen."
                    },
                    "at11": {
                        "text": "Volledig gekleed, inclusief schoenen",
                        "description": "Kleren die een significante bijdrage hebben aan het gewicht, inclusief schoenen."
                    },
                    "at12": {
                        "text": "Lichte kleding/ondergoed",
                        "description": "Kleding die niet significant het gewicht beÏnvloedt."
                    },
                    "at14": {"text": "Naakt", "description": "Zonder kleding."},
                    "at18": {
                        "text": "Luier",
                        "description": "Individu draagt alleen een luier - zou significant aan het gewicht kunnen bijdragen."
                    },
                    "id21": {"text": "Apparaat", "description": "Details over het weeginstrument."},
                    "id25": {"text": "Opmerking", "description": "Opmerking over de gewichts meting."},
                    "id26": {
                        "text": "BeÏnvloedende factoren",
                        "description": "Registreer eventuele problemen of factoren die van invloed kunnen zijn op de meting van het lichaamsgewicht bijvoorbeeld timing in de menstruele cyclus, timing van de recente stoelgang of het noteren van een amputatie."
                    },
                    "id27": {"text": "*Any event(en)", "description": "**(en)"},
                    "id28": {"text": "*New element(en)", "description": "**(en)"},
                    "id29": {"text": "*New element(en)", "description": "**(en)"},
                    "at19": {"text": "*Mass (en)", "description": "*Mass (en)"},
                    "ac1": {
                        "text": "Hoeveelheid kleding (synthesised)",
                        "description": "Beschrijving van de hoeveelheid kleding van de persoon, op het moment van wegen. (synthesised)"
                    }
                },
                "en": {
                    "id1": {"text": "Body Weight", "description": "Measurement of the body weight of an individual."},
                    "id4": {"text": "Any event", "description": "Any event."},
                    "id5": {"text": "Weight", "description": "The weight of the individual."},
                    "id10": {
                        "text": "State of Dress",
                        "description": "Description of the state of dress of the person at the time of weighing."
                    },
                    "at11": {
                        "text": "Fully clothed, including shoes",
                        "description": "Clothing which may add significantly to weight, including shoes."
                    },
                    "at12": {
                        "text": "Lightly clothed/underwear",
                        "description": "Clothing which will not add to weight significantly."
                    },
                    "at14": {"text": "Naked", "description": "Without any clothes."},
                    "at18": {
                        "text": "Nappy/diaper",
                        "description": "Wearing only a nappy - can add significant weight."
                    },
                    "id21": {"text": "Device", "description": "Details about the weighing device."},
                    "id25": {"text": "Comment", "description": "Comment about the measurement of weight."},
                    "id26": {
                        "text": "Confounding Factors",
                        "description": "Record any issues or factors that may impact on the measurement of body weight eg timing in menstrual cycle, timing of recent bowel motion or noting of amputation."
                    },
                    "id27": {"text": "Birth", "description": "First weight recorded after birth."},
                    "id28": {
                        "text": "Weight Estimation Formula",
                        "description": "Formula used to calculate the estimated weight."
                    },
                    "id29": {"text": "Pregnant?", "description": "Is the woman pregnant at time of measurement?"},
                    "at19": {"text": "Mass", "description": "Mass"},
                    "ac1": {
                        "text": "State of Dress (synthesised)",
                        "description": "Description of the state of dress of the person at the time of weighing. (synthesised)"
                    }
                },
                "de": {
                    "id1": {"text": "Körpergewicht", "description": "Messung des Körpergewichts eines Individuums."},
                    "id4": {"text": "*Any event(en)", "description": "*Any event(en)"},
                    "id5": {"text": "Gewicht", "description": "Das Gewicht eines Individuums."},
                    "id10": {
                        "text": "Bekleidung",
                        "description": "Beschreibung der Bekleidung zum Zeitpunkt der Messung."
                    },
                    "at11": {
                        "text": "Voll bekleidet, mit Schuhen",
                        "description": "Bekleidung, die signifikant zum Gewicht beiträgt, mit Schuhen."
                    },
                    "at12": {
                        "text": "Leicht bekleidet / Unterwäsche",
                        "description": "Bekleidung, die nicht signifikant zum Gewicht beiträgt."
                    },
                    "at14": {"text": "Unbekleidet", "description": "Ohne Kleidung."},
                    "at18": {"text": "Windel", "description": "Trägt Windel; kann signifikant zum Gewicht beitragen."},
                    "id21": {"text": "Gerät", "description": "Details über die benutzte Waage."},
                    "id25": {"text": "Kommentar", "description": "Kommentar über die Messung des Gewichts."},
                    "id26": {
                        "text": "Störfaktoren",
                        "description": "Zur Dokumentation von Faktoren, die einen Einfluss auf die Messung des Körpergewichts haben können, z.B. Zeitpunkt in der Menstruationsperiode, Zeitpunkt des letzten Stuhlgangs, durchgeführte Amputationen."
                    },
                    "id27": {"text": "*Any event(en)", "description": "**(en)"},
                    "id28": {"text": "*New element(en)", "description": "**(en)"},
                    "id29": {"text": "*New element(en)", "description": "**(en)"},
                    "at19": {"text": "*Mass (en)", "description": "*Mass (en)"},
                    "ac1": {
                        "text": "Bekleidung (synthesised)",
                        "description": "Beschreibung der Bekleidung zum Zeitpunkt der Messung. (synthesised)"
                    }
                },
                "pt-br": {
                    "id1": {"text": "Peso corporal", "description": "A medição do peso corporal de um indivíduo."},
                    "id4": {"text": "Qualquer evento", "description": "Qualquer evento."},
                    "id5": {"text": "Peso", "description": "O peso do indivíduo."},
                    "id10": {
                        "text": "Vestuário",
                        "description": "Descrição do vestuário da pessoa na hora da pesagem."
                    },
                    "at11": {
                        "text": "Totalmente vestida, incluindo sapatos",
                        "description": "Roupas que podem aumentar significativamente o peso, incluindo sapatos."
                    },
                    "at12": {
                        "text": "Levemente vestido / roupa íntimas",
                        "description": "Roupas que não irão acrescentar ao peso de forma significativa."
                    },
                    "at14": {"text": "Despido", "description": "Sem nenhuma roupa."},
                    "at18": {
                        "text": "Fralda",
                        "description": "Vestindo apenas uma fralda - pode adicionar peso significativo."
                    },
                    "id21": {"text": "Dispositivo", "description": "Detalhes sobre o dispositivo de pesagem."},
                    "id25": {"text": "Comentário", "description": "Comentário sobre a medição do peso."},
                    "id26": {
                        "text": "Fatores de erro",
                        "description": "Registrar quaisquer problemas ou fatores que possam ter impacto sobre a medição de peso corporal, por exemplo, no momento do ciclo menstrual, o ciclo intestinal ou anotando amputação."
                    },
                    "id27": {"text": "*Any event(en)", "description": "**(en)"},
                    "id28": {"text": "*New element(en)", "description": "**(en)"},
                    "id29": {"text": "*New element(en)", "description": "**(en)"},
                    "at19": {"text": "*Mass (en)", "description": "*Mass (en)"},
                    "ac1": {
                        "text": "Vestuário (synthesised)",
                        "description": "Descrição do vestuário da pessoa na hora da pesagem. (synthesised)"
                    }
                },
                "ru": {
                    "id1": {"text": "Масса тела", "description": "Взвешивание пациента."},
                    "id4": {"text": "Любое событие", "description": "Любое событие."},
                    "id5": {"text": "Вес", "description": "Вес пациента."},
                    "id10": {
                        "text": "Наличие и характер одежды",
                        "description": "Описание наличия и характера одежды пациента во время взвешивания."
                    },
                    "at11": {"text": "В одежде без обуви", "description": "Одежда может добавить значительный вес."},
                    "at12": {
                        "text": "В лёгкой одежде или раздевшись до белья",
                        "description": "Одежда, не добавляющая значительный вес."
                    },
                    "at14": {"text": "Обнажен", "description": "Без какой-либо одежды и белья."},
                    "at18": {
                        "text": "В памперсе",
                        "description": "Одет(а) только в памперс - может добавить значительный вес."
                    },
                    "id21": {
                        "text": "Устройство",
                        "description": "Весы (устройство, на котором производилось взвешивание): информация."
                    },
                    "id25": {"text": "Комментарии", "description": "Комментарии к взвешиванию."},
                    "id26": {
                        "text": "Стохастическая погрешность",
                        "description": "Фиксация любых фактов, могущих повлиять на результат взвешивания: фаза менструального цикла, давность опорожнения кишечника, сведения об ампутации и др."
                    },
                    "id27": {"text": "*Any event(en)", "description": "**(en)"},
                    "id28": {"text": "*New element(en)", "description": "**(en)"},
                    "id29": {"text": "*New element(en)", "description": "**(en)"},
                    "at19": {"text": "*Mass (en)", "description": "*Mass (en)"},
                    "ac1": {
                        "text": "Наличие и характер одежды (synthesised)",
                        "description": "Описание наличия и характера одежды пациента во время взвешивания. (synthesised)"
                    }
                }
            },
            "constraint_definitions": {},
            "term_bindings": {
                "openehr": {
                    "at19": {
                        "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "http://openehr.org/id"},
                        "code_string": "124"
                    }
                }
            },
            "constraint_bindings": {},
            "terminology_extracts": {},
            "value_sets": {"ac1": {"id": "ac1", "members": ["at12", "at14", "at11", "at18"]}}
        },
        "original_language": {
            "@type": "CODE_PHRASE",
            "terminology_id": {"@type": "TERMINOLOGY_ID", "value": "ISO_639-1"},
            "code_string": "en"
        },
        "is_controlled": false,
        "archetype_id": {"@type": "ARCHETYPE_ID", "value": "openEHR-EHR-OBSERVATION.body_weight.v1.0.0"},
        "adl_version": "1.5.1",
        "is_template": false,
        "is_overlay": false
    }
};


describe("NodeId", function () {
    it("parses root node", function () {
        var nodeId = new AOM.NodeId("id1");
        expect(nodeId.getSpecializationDepth()).toEqual(1);
        expect(nodeId.toString()).toEqual("id1");
    });

    it("parses specialized", function () {
        var nodeId = new AOM.NodeId("id1.2.3");
        expect(nodeId.getSpecializationDepth()).toEqual(3);
        expect(nodeId.toString()).toEqual("id1.2.3");
    });
});


describe("ArchetypeModel", function () {
    var am = new AOM.ArchetypeModel(res.bodyWeight);
    it("extracts term definition", function () {
        expect(am.getTermDefinitionText("id5")).toEqual("Weight");
    });
});

describe("EditableArchetypeModel.getRmPath", function () {
    var am = new AOM.EditableArchetypeModel(AmUtils.clone(res.bodyWeight));
    it("gets regular rm path", function () {
        var cons = AOM.AmQuery.get(am.data.definition, "/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]");

        var rmPath = am.getRmPath(cons).toString();
        expect(rmPath).toEqual("/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]");
    });

    it("gets tuple rm path", function () {
        var cons = AOM.AmQuery.get(am.data.definition, "/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]");
        cons = cons.attribute_tuples[0].children[0].members[0];
        var rmPath = am.getRmPath(cons).toString();
        expect(rmPath).toEqual("/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]/magnitude");
    });

    it("updates annotations", function () {
        var cons = AOM.AmQuery.get(am.data.definition, "/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]");
        var annotations = {"en": {"one": "1", "two": "2"}};
        am.updateAnnotationsForNode(cons, annotations);
        expect(am.data.annotations.items["en"]["/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]"]["one"]).toEqual("1");
        annotations = {"en": {"one": "1", "three": "3"}};
        am.updateAnnotationsForNode(cons, annotations);
        expect(am.data.annotations.items["en"]["/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]"]["two"]).toBeUndefined();
        expect(am.data.annotations.items["en"]["/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]"]["three"]).toEqual("3");

    });

});
describe("EditableArchetypeModel.generateSpecializedTermId", function () {
    var am = new AOM.EditableArchetypeModel(AmUtils.clone(res.bodyWeight));
    it("generates new specialized node by prefix", function () {
        expect(am.generateSpecializedTermId("id")).toEqual("id38");
        expect(am.generateSpecializedTermId("at")).toEqual("at20");
    });

});

describe("EditableArchetypeModel.addUnconstrainedAttributes", function () {
    var am = new AOM.EditableArchetypeModel(AmUtils.clone(res.bodyWeight));
    it("adds simple attribute", function () {
        var cons = AOM.AmQuery.get(am.data.definition, "/data[id3]/events[id4]/data[id2]/items[id25]");

        var targetCons = AOM.newCComplexObject(cons.rm_type_name);
        am.addUnconstrainedAttributes(cons, targetCons);
        expect(targetCons.attributes.length).toEqual(1);
        expect(AOM.AmQuery.get(targetCons, "/value[id31]")).not.toBeUndefined();

        // should not add another attribute, as it already exists
        am.addUnconstrainedAttributes(cons, targetCons);
        expect(targetCons.attributes.length).toEqual(1);
    });

    it("adds attribute and tuple", function () {
        var cons = AOM.AmQuery.get(am.data.definition, "/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]");

        var targetCons = AOM.newCComplexObject(cons.rm_type_name);
        am.addUnconstrainedAttributes(cons, targetCons);
        expect(targetCons.attributes.length).toEqual(1);
        expect(AOM.AmQuery.get(targetCons, "/property")).not.toBeUndefined();
        expect(targetCons.attribute_tuples.length).toEqual(1);
        expect(targetCons.attribute_tuples[0].members[0].rm_attribute_name).toEqual("magnitude");
        expect(targetCons.attribute_tuples[0].members[1].rm_attribute_name).toEqual("units");

        // should not add another attribute/tuple, as they already exist
        am.addUnconstrainedAttributes(cons, targetCons);
        expect(targetCons.attributes.length).toEqual(1);
        expect(AOM.AmQuery.get(targetCons, "/property")).not.toBeUndefined();
        expect(targetCons.attribute_tuples.length).toEqual(1);
        expect(targetCons.attribute_tuples[0].members[0].rm_attribute_name).toEqual("magnitude");
        expect(targetCons.attribute_tuples[0].members[1].rm_attribute_name).toEqual("units");
    });

    it("does not add attribute if tuple exists", function () {
        var cons = AOM.AmQuery.get(am.data.definition, "/data[id3]/events[id4]/data[id2]/items[id5]");

        var targetCons = AOM.newCComplexObject(cons.rm_type_name);
        targetCons.attribute_tuples.push(AOM.newCAttributeTuple(["value", "other_value"]));
        targetCons.attribute_tuples[0].children.push(AOM.newCObjectTuple([AOM.newCString(["kg"]), AOM.newCString(["name", "same"])]));

        am.addUnconstrainedAttributes(cons, targetCons);

        expect(targetCons.attributes.length).toEqual(0);
    });

});

describe("RmPath", function () {
    it("parses simple path", function () {
        var rmPath = new AOM.RmPath("/name/value");
        expect(rmPath.segments.length).toEqual(2);
        expect(rmPath.segments[0]).toEqual(jasmine.objectContaining({attribute: "name"}));
        expect(rmPath.segments[1]).toEqual(jasmine.objectContaining({attribute: "value"}));
    });

    it("parses path with node ids", function () {
        var rmPath = new AOM.RmPath("/content[id1]/data[id2.3]/events/items[id0.3]/value");

        expect(rmPath.segments.length).toEqual(5);
        expect(rmPath.segments[0]).toEqual(jasmine.objectContaining({attribute: "content", node_id: "id1"}));
        expect(rmPath.segments[1]).toEqual(jasmine.objectContaining({attribute: "data", node_id: "id2.3"}));
        expect(rmPath.segments[2]).toEqual(jasmine.objectContaining({attribute: "events"}));
        expect(rmPath.segments[3]).toEqual(jasmine.objectContaining({attribute: "items", node_id: "id0.3"}));
        expect(rmPath.segments[4]).toEqual(jasmine.objectContaining({attribute: "value"}));
    });

    it("builds rm path string", function () {
        var rmPath = new AOM.RmPath([
            {attribute: "content", node_id: "id1"},
            {attribute: "data", node_id: "id2.3"},
            {attribute: "events"}]);

        expect(rmPath.toString()).toEqual("/content[id1]/data[id2.3]/events");
    });

});

describe("AmQuery", function () {
    it("queries on simple path", function () {
        var matches = AOM.AmQuery.findAll(res.bodyWeight.definition, "/data/events/data/items");
        expect(matches).not.toBeUndefined();
        expect(matches.length).toEqual(2);
        expect(matches[0].node_id).toEqual("id5");
        expect(matches[1].node_id).toEqual("id25");
    });

    it("queries with node ids", function () {
        var matches = AOM.AmQuery.findAll(res.bodyWeight.definition, "/data[id3]/events[id4]/data[id2]/items[id5]");
        expect(matches).not.toBeUndefined();
        expect(matches.length).toEqual(1);
        expect(matches[0].node_id).toEqual("id5");
    });


    it("queries for tuples", function () {
        var matches = AOM.AmQuery.findAll(res.bodyWeight.definition, "/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]/magnitude");
        expect(matches.length).toEqual(2);
        expect(matches[0].range).toEqual(jasmine.objectContaining({lower: 0, upper: 1000})); //kg
        expect(matches[1].range).toEqual(jasmine.objectContaining({lower: 0, upper: 2000})); //lb

        matches = AOM.AmQuery.findAll(res.bodyWeight.definition, "/data[id3]/events[id4]/data[id2]/items[id5]/value[id30]/units");
        expect(matches.length).toEqual(2);
        expect(matches[0].list).toEqual(["kg"]);
        expect(matches[1].list).toEqual(["lb"]);
    });


});

