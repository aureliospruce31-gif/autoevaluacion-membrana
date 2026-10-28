window.MEIOSIS_BANK = {
  "version": "1.0.0",
  "title": "Meiosis · Autoevaluación",
  "brand": "Aurelio–Spruce",
  "description": "24 preguntas para comprender cromosomas, mecanismos y consecuencias.",
  "units": [
    {
      "id": 1,
      "title": "Cromosomas, cromátidas y ploidía",
      "reading": "PDF · unidad 1 · págs. 4–6"
    },
    {
      "id": 2,
      "title": "Meiosis I",
      "reading": "PDF · unidad 2 · págs. 7–8"
    },
    {
      "id": 3,
      "title": "Meiosis II",
      "reading": "PDF · unidad 5 · págs. 19–20"
    },
    {
      "id": 4,
      "title": "Profase I y recombinación homóloga",
      "reading": "PDF · unidades 3 y 4 · págs. 9–18"
    },
    {
      "id": 5,
      "title": "Meiosis y diversidad genética",
      "reading": "PDF · unidades 4 y 6 · págs. 13 y 21–22"
    },
    {
      "id": 6,
      "title": "Errores de segregación e integración",
      "reading": "PDF · unidad 7 y síntesis · págs. 24–27"
    }
  ],
  "questions": [
    {
      "id": "MEI-01",
      "unit": 1,
      "title": "Replicar no aumenta la ploidía",
      "prompt": "Una célula de una especie con 2n = 6 acaba de completar la fase S. Todavía no se han separado las cromátidas hermanas. ¿Qué recuento corresponde a toda la célula?",
      "options": [
        {
          "key": "A",
          "label": "12 cromosomas, 12 cromátidas y 4C de ADN",
          "feedback": "La fase S duplica las moléculas de ADN, pero las hermanas asociadas siguen contando como un cromosoma. El número de cromosomas continúa siendo seis."
        },
        {
          "key": "B",
          "label": "6 cromosomas, 12 cromátidas y 4C de ADN",
          "feedback": "Los seis cromosomas tienen dos cromátidas cada uno: 6 × 2 = 12. El ADN pasa de 2C a 4C y la ploidía permanece en 2n."
        },
        {
          "key": "C",
          "label": "6 cromosomas, 6 cromátidas y 2C de ADN",
          "feedback": "Ese recuento corresponde al estado diploide anterior a la replicación. Después de S hay doce cromátidas y 4C de ADN."
        },
        {
          "key": "D",
          "label": "3 cromosomas, 6 cromátidas y 2C de ADN",
          "feedback": "Ese recuento es compatible con un núcleo después de meiosis I, una vez repartidos los homólogos. La fase S por sí sola no produce esa reducción."
        }
      ],
      "correct": "B",
      "hint": "Contá por separado las unidades cromosómicas y las copias de ADN que permanecen asociadas.",
      "explanation": "Después de S, el estado es 2n, 4C. Cada cromátida contiene una molécula de ADN bicatenario; el cromosoma duplicado conserva dos cromátidas hasta su separación.",
      "figure": "after_s"
    },
    {
      "id": "MEI-02",
      "unit": 1,
      "title": "Homólogos y hermanas",
      "prompt": "Dos cromosomas autosómicos de una célula diploide proceden de progenitores diferentes y presentan los mismos loci en posiciones correspondientes, aunque llevan algunos alelos distintos. ¿Cómo se relacionan?",
      "options": [
        {
          "key": "A",
          "label": "Son cromátidas hermanas de un cromosoma",
          "feedback": "Las hermanas proceden de la replicación de un mismo cromosoma. El enunciado describe los dos representantes parentales de un tipo cromosómico."
        },
        {
          "key": "B",
          "label": "Son cromosomas no homólogos de igual función",
          "feedback": "Compartir loci en posiciones correspondientes es una relación de homología, no una semejanza funcional entre cromosomas no homólogos."
        },
        {
          "key": "C",
          "label": "Son cromosomas homólogos de un mismo par",
          "feedback": "Un par autosómico reúne un homólogo de cada progenitor. Compartir los loci no obliga a portar los mismos alelos."
        },
        {
          "key": "D",
          "label": "Son fragmentos generados por una rotura de ADN",
          "feedback": "El enunciado describe cromosomas completos y su organización de loci. No aporta evidencia de una rotura o fragmentación."
        }
      ],
      "correct": "C",
      "hint": "El origen por replicación y el origen parental son dos criterios diferentes.",
      "explanation": "Las hermanas son copias derivadas de un cromosoma; los homólogos son los dos representantes de un tipo cromosómico en el modelo diploide.",
      "figure": null
    },
    {
      "id": "MEI-03",
      "unit": 1,
      "title": "El estado después de meiosis I",
      "prompt": "Una meiosis normal comienza en una célula con 2n = 4. Después de meiosis I y de la citocinesis, ¿qué contiene cada una de las dos células?",
      "options": [
        {
          "key": "A",
          "label": "4 cromosomas, 8 cromátidas; 2n, 4C",
          "feedback": "Es el recuento de la célula inicial después de S. Tras meiosis I cada célula recibe un homólogo de cada par."
        },
        {
          "key": "B",
          "label": "2 cromosomas, 2 cromátidas; n, 1C",
          "feedback": "Ese es el resultado esperado después de meiosis II. Al terminar la primera división las hermanas todavía permanecen asociadas."
        },
        {
          "key": "C",
          "label": "4 cromosomas, 4 cromátidas; 2n, 2C",
          "feedback": "Ese estado corresponde a una célula diploide no replicada. No describe el reparto de homólogos duplicados realizado en meiosis I."
        },
        {
          "key": "D",
          "label": "2 cromosomas, 4 cromátidas; n, 2C",
          "feedback": "Cada célula recibe dos cromosomas, uno de cada par. Cada uno conserva dos cromátidas: 2 × 2 = 4; el núcleo es haploide y contiene 2C."
        }
      ],
      "correct": "D",
      "hint": "Identificá qué unidades se separaron en la primera división y cuáles siguen asociadas.",
      "explanation": "La primera división reduce el número de juegos cromosómicos. El estado n, 2C combina haploidía con cromosomas todavía duplicados.",
      "figure": "after_i"
    },
    {
      "id": "MEI-04",
      "unit": 1,
      "title": "El resultado de las dos divisiones",
      "prompt": "En una especie con 2n = 6, se completan las dos divisiones meióticas sin errores. ¿Qué recuento corresponde a cada núcleo final?",
      "options": [
        {
          "key": "A",
          "label": "3 cromosomas, 3 cromátidas y 1C de ADN",
          "feedback": "El número haploide es tres. Tras separar las hermanas, cada núcleo recibe tres cromosomas no replicados y 1C de ADN."
        },
        {
          "key": "B",
          "label": "3 cromosomas, 6 cromátidas y 2C de ADN",
          "feedback": "Ese recuento corresponde al resultado de meiosis I. La segunda división distribuye las hermanas y reduce el ADN a 1C por núcleo."
        },
        {
          "key": "C",
          "label": "6 cromosomas, 6 cromátidas y 2C de ADN",
          "feedback": "Ese es el complemento diploide no replicado. La meiosis completa reduce de dos juegos a uno por núcleo."
        },
        {
          "key": "D",
          "label": "6 cromosomas, 12 cromátidas y 4C de ADN",
          "feedback": "Ese es el recuento diploide después de S, antes de las divisiones. No es el resultado final de la meiosis."
        }
      ],
      "correct": "A",
      "hint": "Seguí un solo representante de cada par hasta el final de la segunda división.",
      "explanation": "Con 2n = 6, n = 3. La secuencia de ADN por núcleo es 4C después de S, 2C tras meiosis I y 1C tras meiosis II.",
      "figure": null
    },
    {
      "id": "MEI-05",
      "unit": 2,
      "title": "Orientación en metafase I",
      "prompt": "En el modelo de una meiosis diploide con centrómeros localizados, ¿qué organización permite separar los homólogos sin separar todavía las hermanas?",
      "options": [
        {
          "key": "A",
          "label": "Las hermanas se coorientan hacia un polo y el homólogo se orienta hacia el polo opuesto",
          "feedback": "En meiosis I los cinetocoros de las hermanas actúan coordinadamente hacia un mismo polo. El homólogo del bivalente queda orientado al opuesto."
        },
        {
          "key": "B",
          "label": "Las hermanas se orientan hacia polos opuestos y los homólogos hacia el mismo polo",
          "feedback": "La biorientación de las hermanas corresponde a meiosis II y a mitosis. Llevar los dos homólogos al mismo polo produciría un reparto desequilibrado."
        },
        {
          "key": "C",
          "label": "Cada bivalente se une a un único polo y se divide por su región central",
          "feedback": "Los homólogos de un bivalente deben orientarse hacia polos diferentes. El bivalente no es un cromosoma fusionado que se corte por el centro."
        },
        {
          "key": "D",
          "label": "Los cromosomas se orientan después de que las hermanas ya se hayan separado",
          "feedback": "La orientación adecuada debe preceder a la segregación. Las hermanas permanecen asociadas durante la primera separación."
        }
      ],
      "correct": "A",
      "hint": "Relacioná la dirección del movimiento con la unidad que debe viajar completa en meiosis I.",
      "explanation": "La orientación de los cinetocoros y la conservación selectiva de cohesión permiten repartir homólogos duplicados hacia polos opuestos.",
      "figure": "orientation"
    },
    {
      "id": "MEI-06",
      "unit": 2,
      "title": "Cohesión en dos tiempos",
      "prompt": "Un bivalente posee quiasmas y se prepara para anafase I. ¿Qué cambio permite separar sus homólogos manteniendo juntas las cromátidas hermanas?",
      "options": [
        {
          "key": "A",
          "label": "Eliminar simultáneamente toda la cohesión de brazos y centrómeros",
          "feedback": "Eliminar también la cohesión centromérica liberaría las hermanas antes de la segunda división."
        },
        {
          "key": "B",
          "label": "Conservar toda la cohesión hasta que termine meiosis II",
          "feedback": "Mantener las conexiones de los brazos impediría liberar normalmente los homólogos en anafase I."
        },
        {
          "key": "C",
          "label": "Liberar cohesión de los brazos y proteger la de la región centromérica",
          "feedback": "La eliminación de cohesión de brazos permite resolver las conexiones entre homólogos. La protección centromérica mantiene asociadas a las hermanas."
        },
        {
          "key": "D",
          "label": "Replicar los centrómeros justo antes de la primera separación",
          "feedback": "No hay una fase de replicación de centrómeros que desencadene anafase I. La separación depende de la regulación de cohesión y del huso."
        }
      ],
      "correct": "C",
      "hint": "La cohesión no se elimina al mismo tiempo en todas las regiones del cromosoma.",
      "explanation": "La liberación de cohesión en dos etapas conecta las dos segregaciones: homólogos en meiosis I y hermanas en meiosis II.",
      "figure": null
    },
    {
      "id": "MEI-07",
      "unit": 2,
      "title": "Entre las dos divisiones",
      "prompt": "Una célula acaba de completar meiosis I. ¿Qué debe ocurrir para que la segunda división distribuya el ADN ya replicado antes de la meiosis?",
      "options": [
        {
          "key": "A",
          "label": "Una fase S completa que vuelva a duplicar todos los cromosomas",
          "feedback": "Una nueva fase S duplicaría otra vez el ADN. El programa meiótico habitual contiene una replicación seguida de dos divisiones."
        },
        {
          "key": "B",
          "label": "La preparación del segundo huso sin una nueva replicación del genoma",
          "feedback": "Meiosis II utiliza las cromátidas producidas en la fase S previa a meiosis I. Puede haber intercinesis, pero no una nueva duplicación del genoma."
        },
        {
          "key": "C",
          "label": "Una fecundación que restaure primero el número diploide",
          "feedback": "La fecundación no es un paso general intermedio entre ambas divisiones. En la ovogénesis humana puede desencadenar la finalización de meiosis II, ya iniciada."
        },
        {
          "key": "D",
          "label": "Una fusión de las dos células producidas por meiosis I",
          "feedback": "La segunda división actúa sobre los conjuntos cromosómicos repartidos. No requiere volver a reunir las dos células."
        }
      ],
      "correct": "B",
      "hint": "Distinguí la reorganización celular de una fase S.",
      "explanation": "Una sola replicación abastece las dos divisiones meióticas. La cantidad de ADN se reduce por núcleo en cada segregación.",
      "figure": null
    },
    {
      "id": "MEI-08",
      "unit": 2,
      "title": "Por qué meiosis I es reduccional",
      "prompt": "¿Qué acontecimiento explica directamente la reducción de ploidía de 2n a n durante meiosis I?",
      "options": [
        {
          "key": "A",
          "label": "La compactación de la cromatina durante profase I",
          "feedback": "La condensación cambia la organización física del cromosoma, no el número de juegos cromosómicos."
        },
        {
          "key": "B",
          "label": "La síntesis de ADN que precede a las divisiones",
          "feedback": "La fase S aumenta la cantidad de ADN de 2C a 4C y conserva la ploidía 2n."
        },
        {
          "key": "C",
          "label": "La separación de las dos hebras de cada molécula de ADN",
          "feedback": "Las hebras complementarias no se distribuyen como juegos cromosómicos durante la segregación meiótica."
        },
        {
          "key": "D",
          "label": "El reparto de un homólogo de cada par a cada núcleo hijo",
          "feedback": "Cada núcleo recibe un representante de cada tipo cromosómico en lugar de los dos del núcleo diploide. Ese reparto reduce de dos juegos a uno."
        }
      ],
      "correct": "D",
      "hint": "La ploidía cuenta juegos completos, no la longitud ni la compactación de los cromosomas.",
      "explanation": "La reducción del número de juegos depende de la segregación de homólogos en la primera división, aunque cada cromosoma aún esté duplicado.",
      "figure": null
    },
    {
      "id": "MEI-09",
      "unit": 3,
      "title": "La unidad que se separa",
      "prompt": "¿Qué sucede con una cromátida cuando se separa de su hermana durante anafase II?",
      "options": [
        {
          "key": "A",
          "label": "Pasa a contarse como un cromosoma hijo independiente",
          "feedback": "La separación convierte cada antigua cromátida en una unidad cromosómica independiente que se dirige hacia un polo."
        },
        {
          "key": "B",
          "label": "Se convierte en un cromosoma con dos cromátidas nuevas",
          "feedback": "La separación no replica ADN. Cada cromosoma hijo conserva una sola cromátida en este momento."
        },
        {
          "key": "C",
          "label": "Se transforma en una hebra aislada de ADN monocatenario",
          "feedback": "Una cromátida contiene ADN bicatenario asociado a proteínas. La segregación no separa sus hebras complementarias."
        },
        {
          "key": "D",
          "label": "Se fusiona con el cromosoma homólogo que llegó del otro polo",
          "feedback": "No se produce esa fusión. Los homólogos se distribuyeron durante meiosis I y las hermanas se separan ahora."
        }
      ],
      "correct": "A",
      "hint": "El criterio de recuento cambia cuando las dos hermanas se vuelven unidades independientes.",
      "explanation": "La separación de hermanas aumenta transitoriamente el recuento de cromosomas en la célula que aún no completó la citocinesis, sin una nueva replicación.",
      "figure": null
    },
    {
      "id": "MEI-10",
      "unit": 3,
      "title": "Metafase II en humanos",
      "prompt": "Considerá un ovocito secundario humano con segregación previa correcta, detenido en metafase II. ¿Cuántos cromosomas y cromátidas contiene?",
      "options": [
        {
          "key": "A",
          "label": "46 cromosomas y 92 cromátidas",
          "feedback": "Ese es el recuento del ovocito primario después de S, antes de repartir los homólogos en meiosis I."
        },
        {
          "key": "B",
          "label": "46 cromosomas y 46 cromátidas",
          "feedback": "Ese recuento corresponde a una célula diploide no replicada, no a un ovocito secundario en metafase II."
        },
        {
          "key": "C",
          "label": "23 cromosomas y 23 cromátidas",
          "feedback": "Ese es el recuento de un producto después de completar meiosis II. En metafase II las hermanas siguen asociadas."
        },
        {
          "key": "D",
          "label": "23 cromosomas y 46 cromátidas",
          "feedback": "El ovocito secundario tiene un juego de 23 cromosomas; cada cromosoma conserva dos cromátidas: 23 × 2 = 46."
        }
      ],
      "correct": "D",
      "hint": "La primera división ya repartió los homólogos, pero la segunda separación aún no ocurrió.",
      "explanation": "El ovocito secundario es n, 2C. En la ovogénesis humana, habitualmente la fecundación desencadena la finalización de la segunda división.",
      "figure": null
    },
    {
      "id": "MEI-11",
      "unit": 3,
      "title": "Contar toda la célula o un polo",
      "prompt": "Una especie tiene 2n = 4. En una de las células que realizan meiosis II, las hermanas ya se separaron en anafase II, pero todavía no ocurrió la citocinesis. ¿Qué recuento es correcto?",
      "options": [
        {
          "key": "A",
          "label": "2 cromosomas en toda la célula y 1 en cada polo",
          "feedback": "Antes de separar las hermanas había dos cromosomas duplicados. Después de separarse se cuentan cuatro cromosomas hijos en toda la célula."
        },
        {
          "key": "B",
          "label": "4 cromosomas en toda la célula y 2 en cada polo",
          "feedback": "Los dos cromosomas duplicados originan cuatro cromosomas hijos al separar sus hermanas. Dos se dirigen a cada polo."
        },
        {
          "key": "C",
          "label": "8 cromosomas en toda la célula y 4 en cada polo",
          "feedback": "Ese recuento duplicaría nuevamente las unidades sin que haya ocurrido otra replicación. La célula de meiosis II comenzó con dos cromosomas duplicados."
        },
        {
          "key": "D",
          "label": "4 cromosomas en toda la célula y 4 en cada polo",
          "feedback": "El total de cuatro se reparte entre ambos polos. No pueden llegar cuatro a cada polo si la célula tiene cuatro en total."
        }
      ],
      "correct": "B",
      "hint": "Declarar la unidad de recuento evita confundir el total transitorio con el conjunto que llegará a cada núcleo.",
      "explanation": "Dos cromosomas duplicados producen cuatro cromosomas hijos en esa célula. El estado final de cada núcleo es n = 2, 1C.",
      "figure": "anaphase_ii"
    },
    {
      "id": "MEI-12",
      "unit": 3,
      "title": "Hermanas después de recombinar",
      "prompt": "Durante profase I, una cromátida participó en un crossing-over con una cromátida del homólogo. ¿Qué puede ocurrir al separar las hermanas en meiosis II?",
      "options": [
        {
          "key": "A",
          "label": "Las hermanas deben conservar exactamente los mismos alelos en toda su longitud",
          "feedback": "Un intercambio con una no hermana puede modificar una de las cromátidas y dejar a la otra sin ese intercambio. Por eso pueden diferir en sus asociaciones alélicas."
        },
        {
          "key": "B",
          "label": "Cada hermana debe llevar dos juegos completos de cromosomas",
          "feedback": "Una cromátida es parte de un cromosoma, no un núcleo con dos juegos. El crossing-over no convierte una cromátida en un complemento diploide."
        },
        {
          "key": "C",
          "label": "Las hermanas pueden transportar asociaciones alélicas diferentes",
          "feedback": "El origen por replicación no obliga a que las hermanas sigan siendo idénticas después de un intercambio que afectó a una de ellas."
        },
        {
          "key": "D",
          "label": "Las hermanas pasan a ser los dos homólogos de un mismo par",
          "feedback": "La relación de hermanas conserva su origen por replicación. Recombinar segmentos no las convierte en los dos cromosomas parentales originales."
        }
      ],
      "correct": "C",
      "hint": "Seguí por separado la cromátida que participó y la que no participó en el intercambio.",
      "explanation": "Meiosis II separa hermanas, pero esas hermanas pueden ser genéticamente diferentes como consecuencia de la recombinación anterior.",
      "figure": null
    },
    {
      "id": "MEI-13",
      "unit": 4,
      "title": "SPO11 y selección de sitios",
      "prompt": "En humanos, ¿qué asociación de funciones describe correctamente a SPO11 y PRDM9 en el inicio de la recombinación meiótica?",
      "options": [
        {
          "key": "A",
          "label": "PRDM9 realiza directamente el corte y SPO11 selecciona las regiones preferenciales",
          "feedback": "Estas funciones están intercambiadas: SPO11 participa catalíticamente en la rotura, mientras PRDM9 contribuye a la selección de regiones preferenciales."
        },
        {
          "key": "B",
          "label": "SPO11 participa en la rotura de doble cadena y PRDM9 contribuye a seleccionar regiones preferenciales",
          "feedback": "SPO11 participa directamente en el corte programado. PRDM9 influye en la localización de regiones preferenciales de recombinación y no es la enzima que corta el ADN."
        },
        {
          "key": "C",
          "label": "Ambas proteínas separan las cromátidas hermanas durante anafase II",
          "feedback": "El enunciado se refiere al inicio de recombinación en profase I. La separación de hermanas depende de otro contexto de regulación de cohesión y segregación."
        },
        {
          "key": "D",
          "label": "Ambas proteínas intercambian por sí solas los brazos cromosómicos completos",
          "feedback": "La recombinación requiere procesamiento de extremos, búsqueda de homología, síntesis y procesamiento de intermediarios. No es una reacción instantánea de esas dos proteínas."
        }
      ],
      "correct": "B",
      "hint": "Separá la actividad que produce una lesión del ADN de la selección de su ubicación.",
      "explanation": "Después de la rotura, la resección deja extremos 3′ monocatenarios. RAD51 y DMC1 participan en la búsqueda de homología y la invasión de cadena; la rotura todavía no es un crossing-over.",
      "figure": null
    },
    {
      "id": "MEI-14",
      "unit": 4,
      "title": "Qué representan los elementos laterales",
      "prompt": "El esquema amplía un complejo sinaptonémico. Cada elemento lateral está asociado a un eje cromosómico. ¿Qué representa cada uno de sus dos lados?",
      "options": [
        {
          "key": "A",
          "label": "Una de las dos hebras complementarias de una molécula de ADN",
          "feedback": "El complejo sinaptonémico se organiza a escala de ejes cromosómicos, no como un puente entre las hebras de una sola doble hélice."
        },
        {
          "key": "B",
          "label": "Una cromátida hermana de un único cromosoma duplicado",
          "feedback": "Los dos elementos laterales se relacionan con ejes de homólogos diferentes. Las dos hermanas de un homólogo están asociadas al mismo eje."
        },
        {
          "key": "C",
          "label": "Un cromosoma no replicado de una célula haploide",
          "feedback": "La sinapsis del modelo ocurre después de la fase S, entre dos homólogos duplicados de una célula diploide."
        },
        {
          "key": "D",
          "label": "Un cromosoma homólogo duplicado, con sus dos hermanas asociadas",
          "feedback": "Cada eje lateral corresponde a un homólogo replicado. El conjunto sinapsado conserva dos cromosomas y cuatro cromátidas."
        }
      ],
      "correct": "D",
      "hint": "Relacioná la escala del esquema con la organización de un bivalente.",
      "explanation": "Dos elementos laterales, filamentos transversales y una región central organizan la interfaz entre ejes homólogos. La sinapsis no fusiona los cromosomas.",
      "figure": "sc"
    },
    {
      "id": "MEI-15",
      "unit": 4,
      "title": "Reparación sin crossing-over",
      "prompt": "Una rotura meiótica se repara utilizando una secuencia homóloga. Los brazos que flanquean la región reparada conservan su configuración de origen. ¿Qué conclusión es válida?",
      "options": [
        {
          "key": "A",
          "label": "La reparación puede corresponder a un producto sin entrecruzamiento",
          "feedback": "La reparación homóloga puede terminar sin intercambio recíproco de brazos flanqueantes. Puede existir transferencia local de información sin un crossing-over."
        },
        {
          "key": "B",
          "label": "Toda reparación homóloga debe intercambiar los brazos flanqueantes",
          "feedback": "Los productos con y sin entrecruzamiento son destinos diferentes de la reparación. Reparar no implica siempre un intercambio recíproco de brazos."
        },
        {
          "key": "C",
          "label": "La falta de intercambio demuestra que nunca hubo una rotura",
          "feedback": "El enunciado indica que la rotura existió y fue reparada. La ausencia de crossing-over no niega ese proceso de reparación."
        },
        {
          "key": "D",
          "label": "El ADN se duplicó de nuevo mediante una segunda fase S",
          "feedback": "La síntesis local de reparación no es una fase S adicional ni duplica el genoma completo."
        }
      ],
      "correct": "A",
      "hint": "El uso de un molde homólogo y el intercambio recíproco de brazos son propiedades distintas.",
      "explanation": "La vía SDSA puede producir reparación sin entrecruzamiento, pero no es la única fuente posible de esos productos. Recombinación es un concepto más amplio que crossing-over.",
      "figure": null
    },
    {
      "id": "MEI-16",
      "unit": 4,
      "title": "Del intercambio al quiasma",
      "prompt": "En diploteno se desorganiza gran parte del complejo sinaptonémico. ¿Qué interpretación explica que los homólogos mantengan conexiones mediante quiasmas?",
      "options": [
        {
          "key": "A",
          "label": "El quiasma es una rotura de doble cadena que continúa abierta hasta metafase I",
          "feedback": "Un quiasma no es una lesión de ADN que deba permanecer abierta. Refleja la conexión resultante de intercambios previos y de cohesión."
        },
        {
          "key": "B",
          "label": "El quiasma es un filamento transversal nuevo que reemplaza al complejo sinaptonémico",
          "feedback": "El quiasma no es un componente nuevo del complejo sinaptonémico. La conexión depende de la historia del intercambio y de la cohesión."
        },
        {
          "key": "C",
          "label": "El quiasma expresa citológicamente un intercambio previo sostenido por cohesión entre hermanas",
          "feedback": "El crossing-over es un acontecimiento molecular previo; el quiasma es la conexión citológica que puede persistir al separarse parcialmente los ejes."
        },
        {
          "key": "D",
          "label": "El quiasma indica que los dos homólogos se fusionaron en un único cromosoma",
          "feedback": "El bivalente mantiene dos cromosomas homólogos. La conexión no los fusiona ni modifica el número de juegos de la célula."
        }
      ],
      "correct": "C",
      "hint": "Distinguí el momento molecular del intercambio de la conexión visible durante diploteno.",
      "explanation": "El intercambio y la cohesión distal permiten mantener una conexión mecánica entre homólogos después del desensamblaje del complejo sinaptonémico.",
      "figure": null
    },
    {
      "id": "MEI-17",
      "unit": 5,
      "title": "Aplicar 2ⁿ",
      "prompt": "Una especie tiene 2n = 6. Considerá únicamente la distribución independiente, sin crossing-over ni distorsión de segregación. ¿Cuántas combinaciones de origen cromosómico son posibles a lo largo de muchas meiosis?",
      "options": [
        {
          "key": "A",
          "label": "6 combinaciones",
          "feedback": "Seis es el número diploide de cromosomas. El número de combinaciones se obtiene con dos opciones para cada uno de los tres pares."
        },
        {
          "key": "B",
          "label": "64 combinaciones",
          "feedback": "Ese resultado usaría 2⁶. El exponente es el número de pares, n = 3, no el número diploide 2n = 6."
        },
        {
          "key": "C",
          "label": "8 combinaciones",
          "feedback": "Hay tres pares de homólogos. Dos opciones por par producen 2 × 2 × 2 = 2³ = 8 combinaciones de origen."
        },
        {
          "key": "D",
          "label": "3 combinaciones",
          "feedback": "Tres es el número de pares. Cada par aporta dos posibilidades y sus elecciones se combinan multiplicativamente."
        }
      ],
      "correct": "C",
      "hint": "Identificá primero cuántos pares hay; después combiná las dos opciones de cada par.",
      "explanation": "La expresión 2ⁿ cuenta combinaciones de origen entre muchas meiosis. No cuenta todos los genotipos posibles cuando se incorpora recombinación ni exige que una meiosis genere todas las combinaciones.",
      "figure": null
    },
    {
      "id": "MEI-18",
      "unit": 5,
      "title": "Una sola meiosis",
      "prompt": "En un modelo 2n = 4, A y B están en pares cromosómicos diferentes. Sin recombinación y con segregación correcta, una orientación concreta dirige A1 y B1 hacia un mismo polo. ¿Qué cuatro productos se esperan?",
      "options": [
        {
          "key": "A",
          "label": "A1B1, A1B1, A2B2 y A2B2",
          "feedback": "Esa orientación genera dos clases complementarias. Al separar las hermanas sin recombinación, cada clase aparece dos veces entre los cuatro productos."
        },
        {
          "key": "B",
          "label": "A1B1, A1B2, A2B1 y A2B2",
          "feedback": "Las cuatro posibilidades se reconocen entre distintas meiosis. No son los cuatro productos de esta orientación concreta sin recombinación."
        },
        {
          "key": "C",
          "label": "A1B1, A1B1, A1B1 y A1B1",
          "feedback": "Los homólogos complementarios también deben segregarse. Esta propuesta omite los productos que reciben A2 y B2."
        },
        {
          "key": "D",
          "label": "A1A2, A1A2, B1B2 y B1B2",
          "feedback": "Los productos deben recibir un cromosoma de cada par, no ambos del mismo par y ninguno del otro."
        }
      ],
      "correct": "A",
      "hint": "Seguí la combinación complementaria que debe viajar hacia el otro polo en meiosis I.",
      "explanation": "Un producto haploide recibe un cromosoma de cada par. En este modelo sin recombinación, los cuatro productos de una meiosis contienen dos clases complementarias repetidas.",
      "figure": "one_meiosis"
    },
    {
      "id": "MEI-19",
      "unit": 5,
      "title": "Un intercambio entre dos loci ligados",
      "prompt": "Ahora A y B están en un mismo cromosoma: un homólogo lleva A1B1 y el otro A2B2. Un único crossing-over ocurre entre ambos loci, entre dos cromátidas no hermanas, sin conversión génica. ¿Qué asociaciones se encuentran en las cuatro cromátidas?",
      "options": [
        {
          "key": "A",
          "label": "A1B2, A1B2, A2B1 y A2B1",
          "feedback": "Un intercambio entre dos no hermanas modifica dos cromátidas. Las otras dos conservan asociaciones parentales, por lo que no son cuatro recombinantes."
        },
        {
          "key": "B",
          "label": "A1B1, A1B1, A2B2 y A2B2",
          "feedback": "Esas asociaciones se conservarían sin un intercambio entre los loci en este modelo. El evento descrito genera dos asociaciones recombinantes."
        },
        {
          "key": "C",
          "label": "A1A2, A1A2, B1B2 y B1B2",
          "feedback": "Cada cromátida conserva los dos loci en posiciones correspondientes. El intercambio no reúne dos alelos de A y elimina el locus B de una cromátida."
        },
        {
          "key": "D",
          "label": "A1B1, A1B2, A2B1 y A2B2",
          "feedback": "Las dos cromátidas participantes producen A1B2 y A2B1. Las no participantes conservan A1B1 y A2B2: dos recombinantes y dos parentales."
        }
      ],
      "correct": "D",
      "hint": "Separá las dos cromátidas que participan del intercambio de las dos que no participan.",
      "explanation": "Este resultado corresponde a un único intercambio dentro del intervalo A–B. Un evento fuera del intervalo puede conservar las asociaciones de esos marcadores.",
      "figure": "linked"
    },
    {
      "id": "MEI-20",
      "unit": 5,
      "title": "De dónde vienen las variantes",
      "prompt": "¿Qué relación entre recombinación y mutación describe mejor sus aportes a la diversidad genética?",
      "options": [
        {
          "key": "A",
          "label": "La recombinación crea siempre alelos nuevos y la mutación solo reordena los existentes",
          "feedback": "La función principal de la recombinación es reorganizar variantes. La mutación es una fuente primaria de nuevas variantes de secuencia."
        },
        {
          "key": "B",
          "label": "La recombinación reorganiza variantes existentes y la mutación puede originar variantes nuevas",
          "feedback": "La recombinación cambia asociaciones de segmentos o alelos. Las mutaciones pueden producir cambios de secuencia que originen variantes nuevas."
        },
        {
          "key": "C",
          "label": "Ambas producen necesariamente cromosomas adicionales",
          "feedback": "Reorganizar información o cambiar una secuencia no implica ganar cromosomas. El número cromosómico es otra variable."
        },
        {
          "key": "D",
          "label": "La mutación solo ocurre en la fecundación y la recombinación solo en meiosis II",
          "feedback": "Las mutaciones pueden surgir en diferentes contextos celulares. La recombinación meiótica estudiada transcurre durante profase I, no se limita a meiosis II."
        }
      ],
      "correct": "B",
      "hint": "Distinguí generar una variante de cambiar las asociaciones entre variantes.",
      "explanation": "La distribución independiente, la recombinación y la fecundación combinan información. La mutación puede aportar nuevas variantes de secuencia.",
      "figure": null
    },
    {
      "id": "MEI-21",
      "unit": 6,
      "title": "No disyunción en meiosis I",
      "prompt": "En un modelo 2n = 4, los homólogos de un único par no se separan en meiosis I. El otro par y ambas divisiones de meiosis II segregan correctamente. ¿Qué números cromosómicos presentan los cuatro productos finales?",
      "options": [
        {
          "key": "A",
          "label": "2, 2, 2 y 2",
          "feedback": "Ese es el resultado de una segregación equilibrada. No incorpora el fallo del par que recibió una célula y faltó en la otra."
        },
        {
          "key": "B",
          "label": "3, 1, 2 y 2",
          "feedback": "Ese patrón corresponde al modelo de un error aislado en una sola célula de meiosis II, después de una primera división correcta."
        },
        {
          "key": "C",
          "label": "4, 4, 0 y 0",
          "feedback": "El otro par se distribuye correctamente. Cada producto conserva al menos su cromosoma de ese par; el error afecta a un solo par."
        },
        {
          "key": "D",
          "label": "3, 3, 1 y 1",
          "feedback": "El número haploide esperado es dos. Una célula recibe ambos homólogos del par afectado y la otra ninguno: después de meiosis II se forman dos productos n + 1 y dos n − 1."
        }
      ],
      "correct": "D",
      "hint": "Seguí el par afectado hacia las dos células de la primera división y mantené normal el reparto del otro par.",
      "explanation": "El patrón ideal de un error aislado en meiosis I es n + 1, n + 1, n − 1, n − 1. Los cuatro productos están desequilibrados en este modelo.",
      "figure": "mi_error"
    },
    {
      "id": "MEI-22",
      "unit": 6,
      "title": "No disyunción en meiosis II",
      "prompt": "Una célula de una especie con 2n = 4 completa meiosis I correctamente. En una sola de las dos células resultantes, las hermanas de un cromosoma no se separan en meiosis II. El resto segrega correctamente. ¿Cuál es el resultado final?",
      "options": [
        {
          "key": "A",
          "label": "3, 3, 1 y 1",
          "feedback": "Ese es el patrón del modelo de no disyunción de homólogos en meiosis I. Aquí la primera división fue correcta."
        },
        {
          "key": "B",
          "label": "3, 1, 2 y 2",
          "feedback": "La célula con el fallo produce un producto n + 1 y otro n − 1. La otra origina dos productos con n = 2."
        },
        {
          "key": "C",
          "label": "2, 2, 2 y 2",
          "feedback": "La no disyunción de hermanas desequilibra dos productos. Solo los dos derivados de la célula que segregó correctamente conservan n = 2."
        },
        {
          "key": "D",
          "label": "4, 0, 2 y 2",
          "feedback": "Solo falla un cromosoma en esa célula de meiosis II. El otro cromosoma se reparte y no desaparece del producto deficitario."
        }
      ],
      "correct": "B",
      "hint": "Distinguí los productos de la célula que falla de los productos de la célula que completa una división normal.",
      "explanation": "El patrón ideal es n + 1, n − 1, n, n. La comparación con meiosis I exige asumir un error aislado y ausencia de otros fallos.",
      "figure": "mii_error"
    },
    {
      "id": "MEI-23",
      "unit": 6,
      "title": "De un gameto al cigoto",
      "prompt": "En una especie con 2n = 6, un gameto recibe un cromosoma adicional de un único tipo. Se une con un gameto con el complemento haploide esperado. ¿Qué constitución se espera en el cigoto?",
      "options": [
        {
          "key": "A",
          "label": "6 cromosomas; complemento diploide equilibrado",
          "feedback": "El gameto aneuploide aporta cuatro cromosomas y el otro tres. La suma es siete, no seis."
        },
        {
          "key": "B",
          "label": "9 cromosomas; tres juegos completos",
          "feedback": "Nueve sería 3n en esta especie. El gameto tiene un cromosoma individual adicional, no un juego haploide extra."
        },
        {
          "key": "C",
          "label": "7 cromosomas; trisomía del tipo afectado",
          "feedback": "El número haploide es tres: el gameto n + 1 aporta cuatro cromosomas y el otro aporta tres. 4 + 3 = 7 = 2n + 1; hay tres copias del tipo afectado."
        },
        {
          "key": "D",
          "label": "5 cromosomas; monosomía del tipo afectado",
          "feedback": "Cinco resultaría de unir un gameto n − 1 con otro n. Aquí el gameto tiene un cromosoma de más, no de menos."
        }
      ],
      "correct": "C",
      "hint": "Calculá primero el número haploide y sumá los cromosomas aportados por ambos gametos.",
      "explanation": "Una trisomía afecta a un tipo cromosómico: 2n + 1. La triploidía implica tres juegos completos: 3n. No son el mismo cambio.",
      "figure": null
    },
    {
      "id": "MEI-24",
      "unit": 6,
      "title": "Mosaicismo y momento del error",
      "prompt": "Un individuo presenta dos linajes celulares con distinta constitución cromosómica. ¿Qué explicación muestra por qué ese hallazgo no demuestra por sí solo una no disyunción meiótica?",
      "options": [
        {
          "key": "A",
          "label": "Un error mitótico después de la fecundación puede originar linajes diferentes",
          "feedback": "Si una segregación embrionaria es incorrecta y persisten linajes con constituciones distintas, puede producirse mosaicismo. El hallazgo no fija por sí solo el momento del error."
        },
        {
          "key": "B",
          "label": "Todo mosaicismo demuestra que fallaron simultáneamente meiosis I y II",
          "feedback": "Las constituciones celulares diferentes no demuestran ese doble fallo. También pueden originarse por errores mitóticos posteriores a la fecundación."
        },
        {
          "key": "C",
          "label": "Una célula haploide siempre contiene el mismo número de cromosomas que una diploide",
          "feedback": "En el modelo diploide estudiado, haploidía y diploidía difieren en el número de juegos. Esa afirmación no explica la formación de los linajes."
        },
        {
          "key": "D",
          "label": "La recombinación entre alelos cambia necesariamente la ploidía de cada célula",
          "feedback": "El crossing-over reorganiza segmentos sin aumentar necesariamente el número de juegos. No explica por sí solo un mosaicismo de número cromosómico."
        }
      ],
      "correct": "A",
      "hint": "Considerá las divisiones celulares que ocurren una vez formado el cigoto.",
      "explanation": "Reconstruir el origen de una alteración requiere información adicional. Un cariotipo o la observación de mosaicismo no reconstruyen automáticamente toda la historia de segregación.",
      "figure": null
    }
  ],
  "source": {
    "title": "Aurelio–Spruce · Biología Celular Esencial 02 — Meiosis",
    "scope": "PDF del microcurso, seis videoclases y guion de cierre.",
    "courseUnits": 7
  }
};
