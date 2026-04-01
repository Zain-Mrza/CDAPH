import type { MiniEatSurveyTypes } from "../types";

export const MiniEatSurveyText: MiniEatSurveyTypes = {
    intro: {
        title: "Encuesta Mini-EAT",
        description:
            "Ahora le haremos nueve preguntas sobre su alimentacion habitual para estimar su puntuacion Mini-EAT.",
        bullet1: "Esta encuesta toma aproximadamente de 2 a 3 minutos.",
        bullet2: "Puede omitir la encuesta en cualquier momento.",
        skipLabel: "Omitir esta encuesta",
    },

    questions: {
        skipLabel: "Omitir esta encuesta",
        questionCounter: (current, total) => `Pregunta ${current} de ${total}`,
        examplesLabel: "Ejemplos",
        servingSizeLabel: "Una porcion equivale a",
        answerSectionLabel: "Seleccione su respuesta",
        answerInstruction:
            "Seleccione la opcion que mejor describa con que frecuencia suele consumir este alimento.",
        answerPlaceholder: "Seleccione con que frecuencia lo consume",
        options: [
            "No lo consumo en absoluto",
            "Menos de 1 porcion por semana",
            "1-2 porciones por semana",
            "3-4 porciones por semana",
            "5-6 porciones por semana",
            "1 porcion por dia",
            "2-3 porciones por dia",
            "4-5 porciones por dia",
            "6 o mas porciones por dia",
        ],
        items: [
            {
                prompt: "Con que frecuencia consume frutas frescas?",
                summaryLabel: "Frutas frescas",
                examples: [
                    "Manzanas, bananas, peras, naranjas, uvas, fresas, arandanos y frutas similares.",
                ],
                notes: [
                    "Incluya frutas frescas y frutas congeladas sin azucar agregada.",
                    "No incluya frutas en conserva, frutas secas ni jugo de fruta en sus estimaciones.",
                ],
                servingSize:
                    "1 manzana pequena o 1/2 banana grande (aproximadamente 1 taza, o el tamano de un puno pequeno); 1 taza de mandarinas, melon o frambuesas; 3/4 taza de arandanos; 1 1/2 tazas de fresas enteras.",
            },
            {
                prompt: "Con que frecuencia consume verduras?",
                summaryLabel: "Verduras",
                examples: [
                    "Tomates, pimientos, pepinos, brocoli, zanahorias, ejotes, repollo, espinaca, arugula y otras verduras de hoja verde.",
                ],
                notes: [
                    "Incluya verduras sin almidon, crudas o cocidas.",
                    "No incluya verduras con almidon como las papas ni verduras fritas en sus estimaciones.",
                ],
                servingSize:
                    "1 taza de verduras crudas como tomates, zanahorias pequenas, apio o chicharos; 1/2 taza de verduras cocidas como brocoli o espinaca; 1 taza de arugula.",
            },
            {
                prompt: "Con que frecuencia consume legumbres, nueces y semillas?",
                summaryLabel: "Legumbres, nueces y semillas",
                examples: [
                    "Legumbres: frijoles cocidos o enlatados, lentejas, garbanzos o chicharos, miso, tofu, tempeh, hummus.",
                    "Nueces: almendras, nueces, avellanas, cacahuates y nueces similares.",
                    "Semillas: sesamo, girasol, calabaza, linaza y semillas similares.",
                ],
                notes: [],
                servingSize:
                    "1/2 taza de legumbres cocidas o enlatadas; 1/3 taza de hummus o dip de frijol; 1/2 taza de tofu; 1/4 taza de tempeh; un pequeno punado de nueces o semillas.",
            },
            {
                prompt: "Con que frecuencia consume pescado o mariscos?",
                summaryLabel: "Pescado o mariscos",
                examples: [
                    "Pescado de agua dulce o de mar como salmon, sardinas, trucha, caballa del Atlantico o del Pacifico, y mariscos.",
                ],
                notes: ["Incluya pescado o mariscos enlatados en sus estimaciones."],
                servingSize:
                    "3 onzas de pescado cocido o enlatado, aproximadamente del tamano de una baraja, o una pieza de pescado crudo del tamano de la palma de la mano.",
            },
            {
                prompt: "Con que frecuencia consume granos integrales?",
                summaryLabel: "Granos integrales",
                examples: [
                    "Pan integral, bollo integral, muesli, cereal sin azucar listo para comer, grits o porridge cocidos, arroz integral, pasta integral, tortilla de maiz.",
                ],
                notes: [
                    "No incluya pan blanco, bolillos o bagels blancos, arroz blanco o pasta blanca, ni tortillas de harina en sus estimaciones.",
                ],
                servingSize:
                    "1 rebanada de pan integral; 1/2 taza de cereal cocido como avena, oatmeal o quinoa; 1/2 taza de arroz integral cocido o pasta integral; 1 tortilla pequena de maiz; 1/2 taza de grits cocidos; 1 taza de cereal en hojuelas listo para comer.",
            },
            {
                prompt: "Con que frecuencia consume granos refinados?",
                summaryLabel: "Granos refinados",
                examples: [
                    "Pan blanco, bolillo blanco, bagel o muffin ingles, arroz blanco o pasta blanca, tortilla de harina.",
                ],
                notes: [
                    "No incluya los granos integrales contados en la pregunta anterior, como pan integral o bollo integral.",
                ],
                servingSize:
                    "1 rebanada de pan blanco; 1/2 bolillo; 1/2 bagel blanco pequeno o muffin ingles; 1/2 taza de arroz blanco cocido o pasta blanca; 1 tortilla pequena de harina.",
            },
            {
                prompt: "Con que frecuencia consume lacteos bajos en grasa?",
                summaryLabel: "Lacteos bajos en grasa",
                examples: [
                    "Leche baja en grasa (1%) o descremada, leche de soya, yogur bajo en grasa, queso bajo en grasa, mozzarella, requeson.",
                ],
                notes: [],
                servingSize:
                    "1 taza de leche baja en grasa o descremada; 3/4 taza (6 oz.) de yogur bajo en grasa; 1 rebanada empaquetada de queso bajo en grasa; 1 1/2 oz. de mozzarella.",
            },
            {
                prompt: "Con que frecuencia consume lacteos altos en grasa y grasas saturadas?",
                summaryLabel: "Lacteos altos en grasa y grasas saturadas",
                examples: [
                    "Leche al 2% o entera, mantequilla, crema, queso crema, queso que no es reducido en grasa, yogur con 2% o mas de grasa de leche, helado.",
                    "Mantequilla, aceite de coco o manteca usados para cocinar.",
                ],
                notes: [
                    "No incluya los lacteos bajos en grasa contados en la pregunta anterior en sus estimaciones.",
                ],
                servingSize:
                    "1 taza de leche al 2% o entera; 3/4 taza (6 oz.) de yogur; 1 rebanada empaquetada de queso; 2 oz. de queso procesado; 1/2 taza de helado; 1 cucharadita de mantequilla, manteca o aceite de coco.",
            },
            {
                prompt: "Con que frecuencia consume dulces y alimentos dulces?",
                summaryLabel: "Dulces y alimentos dulces",
                examples: [
                    "Dulces comerciales, caramelos, galletas, pasteles, reposteria y bocadillos dulces.",
                ],
                notes: [],
                servingSize:
                    "1.5 oz. de gomitas como Haribo; 3 piezas de caramelo duro como Werther's; 1 porcion pequena de pastel o reposteria; 1 dona mediana o bocadillo dulce; 2-3 galletas dulces (aproximadamente 1 oz.).",
            },
        ],
    },

    summary: {
        title: "Revise sus respuestas",
        instruction:
            "Confirme que sus respuestas de Mini-EAT sean correctas antes de calcular su puntuacion.",
        notAnswered: "Sin respuesta",
        skipLabel: "Omitir esta encuesta",
    },

    results: {
        title: "Resultados de Mini-EAT",
        unavailable: "No es posible mostrar su resultado de Mini-EAT en este momento.",
        eyebrow: "Su puntuacion Mini-EAT",
        conditionName: "Mini-EAT",
        unhealthyLabel: "No saludable",
        intermediateLabel: "Intermedia",
        healthyLabel: "Saludable",
        unhealthyCaption:
            "Su puntuacion se encuentra en el rango no saludable de esta encuesta.",
        intermediateCaption:
            "Su puntuacion se encuentra en el rango intermedio de esta encuesta.",
        healthyCaption:
            "Su puntuacion se encuentra en el rango saludable de esta encuesta.",
        scaleAriaLabel: (score, maxScore) =>
            `Escala de puntuacion nutricional de 0 a ${maxScore}. Su puntuacion es ${score}.`,
        unhealthyIntro:
            "Sus respuestas sugieren que su patron actual de alimentacion podria beneficiarse de cambios importantes.",
        unhealthyBullet1:
            "Empiece con uno o dos cambios realistas, como agregar frutas o verduras con mas frecuencia.",
        unhealthyBullet2:
            "Intente reemplazar granos refinados o dulces por granos integrales y bocadillos menos procesados.",
        unhealthyBullet3:
            "Considere consejeria nutricional o seguimiento si desea ayuda para crear un plan.",
        intermediateIntro:
            "Sus respuestas sugieren que su alimentacion tiene algunos patrones saludables y otras areas que aun pueden mejorar.",
        intermediateBullet1:
            "Siga fortaleciendo la constancia con frutas, verduras, pescado y granos integrales.",
        intermediateBullet2:
            "Busque pequenas oportunidades para reducir dulces, granos refinados y lacteos altos en grasa.",
        intermediateBullet3:
            "Habitos constantes y repetibles pueden ayudarle a llegar al rango saludable con el tiempo.",
        healthyIntro:
            "Sus respuestas sugieren un patron de alimentacion generalmente saludable.",
        healthyBullet1:
            "Mantenga los habitos que estan apoyando su puntuacion.",
        healthyBullet2:
            "Procure ser constante con los alimentos que consume con mas frecuencia, especialmente frutas, verduras y granos integrales.",
        healthyBullet3:
            "Siga revisando su alimentacion con el tiempo para que las rutinas saludables sean sostenibles.",
    },
};
