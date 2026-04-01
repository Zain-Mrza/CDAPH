import type { DiabetesSurveyTypes } from "../types";

export const DiabetesSurveyText: DiabetesSurveyTypes = {
    intro: {
        title: "Encuesta de riesgo de diabetes",
        description:
            "Ahora le haremos tres preguntas para ayudar a evaluar su riesgo de diabetes.",
        bullet1: "Esta encuesta toma aproximadamente 1 minuto.",
        bullet2: "Puede omitir la encuesta en cualquier momento.",
        skipLabel: "Omitir esta encuesta",
    },

    questions: {
        yes: "Sí",
        no: "No",
        unknown: "No sé",
        skipLabel: "Omitir esta encuesta",
        questionCounter: (current, total) =>
            `Pregunta ${current} de ${total}`,
        relative:
            "¿Tiene un padre, hermano o hijo con diabetes?",
        hypertension: "¿Alguna vez ha tenido presión arterial alta?",
        physicallyActive: "¿Es físicamente activo?",
    },

    summary: {
        title: "Revise sus respuestas",
        instruction:
            "Confirme que sus respuestas a continuación sean correctas antes de que calculemos su riesgo de diabetes.",
        relativeLabel: "Padre, hermano o hijo con diabetes",
        hypertensionLabel: "Historial de hipertensión",
        physicallyActiveLabel: "Físicamente activo",
        yes: "Sí",
        no: "No",
        unknown: "No sé",
        notAnswered: "Sin respuesta",
        skipLabel: "Omitir esta encuesta",
    },

    results: {
        title: "Resultados del riesgo de diabetes",
        unavailable: "No es posible mostrar su resultado en este momento.",
        skipped: "Se omitiÃ³ esta encuesta de diabetes.",
        noResults: "No hay resultados de riesgo de diabetes para mostrar.",
        conditionName: "Diabetes",
        highRiskIntro:
            "Sus respuestas sugieren que puede tener un mayor riesgo de desarrollar diabetes tipo 2.",
        highRiskBullet1:
            "Considere pruebas de confirmación, como glucosa en ayunas o HbA1c.",
        highRiskBullet2:
            "Los cambios en el estilo de vida, como mejorar la dieta y realizar actividad física con regularidad, pueden reducir el riesgo.",
        highRiskBullet3:
            "Podría beneficiarse de un programa de prevención de la diabetes o de asesoría nutricional.",
        lowRiskIntro:
            "Sus respuestas sugieren un menor riesgo de desarrollar diabetes tipo 2.",
        lowRiskBullet1: "Continúe manteniendo un estilo de vida saludable.",
        lowRiskBullet2:
            "La actividad física regular y una dieta equilibrada ayudan a reducir el riesgo de diabetes.",
        lowRiskBullet3:
            "Considere hacerse exámenes periódicos según lo recomiende su profesional de salud.",
    },
};
