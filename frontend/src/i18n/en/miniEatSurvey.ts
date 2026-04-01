import type { MiniEatSurveyTypes } from "../types";

export const MiniEatSurveyText: MiniEatSurveyTypes = {
    intro: {
        title: "Mini-EAT Survey",
        description:
            "We will now ask nine questions about your usual diet to estimate your Mini-EAT nutrition score.",
        bullet1: "This survey takes about 2 to 3 minutes.",
        bullet2: "You may skip the survey at any time.",
        skipLabel: "Skip this survey",
    },

    questions: {
        skipLabel: "Skip this survey",
        questionCounter: (current, total) => `Question ${current} of ${total}`,
        examplesLabel: "Examples",
        servingSizeLabel: "One serving equals",
        answerSectionLabel: "Choose your answer",
        answerInstruction:
            "Select the option that best matches how often you usually eat this food.",
        answerPlaceholder: "Select how often you eat it",
        options: [
            "I do not eat it at all",
            "Less than 1 serving per week",
            "1-2 servings per week",
            "3-4 servings per week",
            "5-6 servings per week",
            "1 serving per day",
            "2-3 servings per day",
            "4-5 servings per day",
            "6 or more servings per day",
        ],
        items: [
            {
                prompt: "How often do you eat fresh fruits?",
                summaryLabel: "Fresh fruits",
                examples: [
                    "Apples, bananas, pears, oranges, grapes, strawberries, blueberries, and similar fruits.",
                ],
                notes: [
                    "Include fresh fruits and frozen fruits with no added sugar.",
                    "Do not include preserved or dried fruits or fruit juice in your estimates.",
                ],
                servingSize:
                    "1 small apple or 1/2 large banana (about 1 cup, or the size of a small fist); 1 cup mandarin oranges, melon, or raspberries; 3/4 cup blueberries; 1 1/2 cups whole strawberries.",
            },
            {
                prompt: "How often do you eat vegetables?",
                summaryLabel: "Vegetables",
                examples: [
                    "Tomatoes, peppers, cucumbers, broccoli, carrots, green beans, cabbage, spinach, arugula, and other leafy vegetables.",
                ],
                notes: [
                    "Include raw or cooked non-starchy vegetables.",
                    "Do not include starchy vegetables such as potatoes or fried vegetables in your estimates.",
                ],
                servingSize:
                    "1 cup raw vegetables such as tomatoes, baby carrots, celery, or green peas; 1/2 cup cooked vegetables such as broccoli or spinach; 1 cup arugula.",
            },
            {
                prompt: "How often do you eat legumes, nuts, and seeds?",
                summaryLabel: "Legumes, nuts, and seeds",
                examples: [
                    "Legumes: cooked or canned beans, lentils, chickpeas or peas, miso, tofu, tempeh, hummus.",
                    "Nuts: almonds, walnuts, hazelnuts, peanuts, and similar nuts.",
                    "Seeds: sesame, sunflower, pumpkin, flax seeds, and similar seeds.",
                ],
                notes: [],
                servingSize:
                    "1/2 cup cooked or canned legumes; 1/3 cup hummus or bean dip; 1/2 cup tofu; 1/4 cup tempeh; a small handful of nuts or seeds.",
            },
            {
                prompt: "How often do you eat fish or seafood?",
                summaryLabel: "Fish or seafood",
                examples: [
                    "Fresh water fish or sea water fish such as salmon, sardines, trout, Atlantic or Pacific mackerel, and seafood.",
                ],
                notes: ["Include canned fish or seafood in your estimates."],
                servingSize:
                    "3 ounces of cooked or canned fish, about the size of a deck of cards, or a palm-size piece of raw fish.",
            },
            {
                prompt: "How often do you eat whole grains?",
                summaryLabel: "Whole grains",
                examples: [
                    "Whole grain bread, whole grain bread roll, muesli, unsweetened ready-to-eat cereal, cooked grits or porridge, brown rice, whole grain pasta, corn tortilla.",
                ],
                notes: [
                    "Do not include white bread, white rolls or bagels, white rice or pasta, or wheat tortillas in your estimates.",
                ],
                servingSize:
                    "1 slice of whole grain bread; 1/2 cup cooked cereal such as oats, oatmeal, or quinoa; 1/2 cup cooked brown rice or whole grain pasta; 1 small corn tortilla; 1/2 cup cooked grits; 1 cup ready-to-eat cereal flakes.",
            },
            {
                prompt: "How often do you eat refined grains?",
                summaryLabel: "Refined grains",
                examples: [
                    "White bread, white roll, bagel or English muffin, white rice or pasta, wheat tortilla.",
                ],
                notes: [
                    "Do not include whole grains counted in the previous question, such as whole grain bread or a whole grain bread roll.",
                ],
                servingSize:
                    "1 slice white bread; 1/2 roll; 1/2 small white bagel or English muffin; 1/2 cup cooked white rice or pasta; 1 small wheat tortilla.",
            },
            {
                prompt: "How often do you eat low-fat dairy?",
                summaryLabel: "Low-fat dairy",
                examples: [
                    "Low-fat milk (1%) or fat-free skim milk or soy milk, yogurt with reduced fat content, low-fat cheese, mozzarella, cottage cheese.",
                ],
                notes: [],
                servingSize:
                    "1 cup low-fat or skim milk; 3/4 cup (6 oz.) low-fat yogurt; 1 pre-packaged slice of low-fat cheese; 1 1/2 oz. mozzarella.",
            },
            {
                prompt: "How often do you eat high-fat dairy and saturated fats?",
                summaryLabel: "High-fat dairy and saturated fats",
                examples: [
                    "2% milk or whole milk, butter, cream, cream cheese, cheese that is not reduced-fat, yogurt with 2% or higher milk fat, ice cream.",
                    "Butter, coconut oil, or shortening used for cooking.",
                ],
                notes: [
                    "Do not include low-fat dairy counted in the previous question in your estimates.",
                ],
                servingSize:
                    "1 cup 2% milk or whole milk; 3/4 cup (6 oz.) yogurt; 1 pre-packaged slice of cheese; 2 oz. processed cheese; 1/2 cup ice cream; 1 teaspoon butter, shortening, or coconut oil.",
            },
            {
                prompt: "How often do you eat sweets and sweet foods?",
                summaryLabel: "Sweets and sweet foods",
                examples: [
                    "Commercial sweets, candies, cookies, cakes, pastries, and sweet snacks.",
                ],
                notes: [],
                servingSize:
                    "1.5 oz. gummy candy such as Haribo; 3 pieces of hard candy such as Werther's; 1 small piece of cake or pastry; 1 medium doughnut or sweet snack; 2-3 sweet biscuits or cookies (about 1 oz.).",
            },
        ],
    },

    summary: {
        title: "Review Your Responses",
        instruction:
            "Please confirm that your Mini-EAT answers below are correct before we calculate your score.",
        notAnswered: "Not answered",
        skipLabel: "Skip this survey",
    },

    results: {
        title: "Mini-EAT Results",
        unavailable: "Unable to display your Mini-EAT result at this time.",
        eyebrow: "Your Mini-EAT Score",
        conditionName: "Mini-EAT",
        unhealthyLabel: "Unhealthy",
        intermediateLabel: "Intermediate",
        healthyLabel: "Healthy",
        unhealthyCaption:
            "Your score falls in the unhealthy range for this survey.",
        intermediateCaption:
            "Your score falls in the intermediate range for this survey.",
        healthyCaption: "Your score falls in the healthy range for this survey.",
        scaleAriaLabel: (score, maxScore) =>
            `Nutrition score scale from 0 to ${maxScore}. Your score is ${score}.`,
        unhealthyIntro:
            "Your answers suggest that your current eating pattern could benefit from meaningful nutrition changes.",
        unhealthyBullet1:
            "Start with one or two realistic swaps, such as adding fruit or vegetables more often.",
        unhealthyBullet2:
            "Try replacing refined grains or sweets with whole grains and minimally processed snacks.",
        unhealthyBullet3:
            "Consider nutrition counseling or follow-up support if you would like help building a plan.",
        intermediateIntro:
            "Your answers suggest that your diet has some healthy patterns and some areas that could still improve.",
        intermediateBullet1:
            "Keep building consistency with fruits, vegetables, fish, and whole grains.",
        intermediateBullet2:
            "Look for small chances to reduce sweets, refined grains, and high-fat dairy.",
        intermediateBullet3:
            "Steady, repeatable habits can help move your score into the healthy range over time.",
        healthyIntro:
            "Your answers suggest a generally healthy eating pattern.",
        healthyBullet1:
            "Keep maintaining the habits that are supporting your score.",
        healthyBullet2:
            "Aim to stay consistent with the foods you eat most often, especially fruits, vegetables, and whole grains.",
        healthyBullet3:
            "Continue checking in on your diet over time so healthy routines stay sustainable.",
    },
};
