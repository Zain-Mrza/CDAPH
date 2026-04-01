import styles from "../styles/progress-bar.module.css";
import { loadLanguage } from "../i18n";
import { progressSections, type Step } from "../navigation/steps";

type Props = {
    currentStep: number;
    totalSteps: number;
    currentStepId: Step;
    language: "en" | "es";
};

export default function ProgressBar({
    currentStep,
    totalSteps,
    currentStepId,
    language,
}: Props) {
    const t = loadLanguage(language).progressBar;
    const progressPercent = Math.round((currentStep / totalSteps) * 100);
    const currentSectionIndex = progressSections.findIndex((section) =>
        section.steps.includes(currentStepId),
    );
    const currentSection =
        progressSections[currentSectionIndex] ?? progressSections[0];
    const currentSectionStep =
        currentSection.steps.findIndex((step) => step === currentStepId) + 1;
    const currentSectionTitle = t.sections[currentSection.id];

    return (
        <div
            className={styles.progressBarContainer}
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-valuetext={t.ariaValueText(
                currentSectionTitle,
                currentStep,
                totalSteps,
            )}
        >
            <div className={styles.progressLayout}>
                <div className={styles.progressMain}>
                    <div className={styles.progressHeader}>
                        <p className={styles.progressEyebrow}>
                            {t.currentSection}
                        </p>
                        <p className={styles.progressStepText}>
                            {t.stepOf(currentStep, totalSteps)}
                        </p>
                    </div>

                    <div className={styles.progressTrack} aria-hidden="true">
                        <div
                            className={styles.progressFill}
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>

                    <div className={styles.progressMeta}>
                        <p className={styles.progressTitle}>
                            {currentSectionTitle}
                        </p>
                        <p className={styles.progressSectionText}>
                            {t.sectionStepOf(
                                currentSectionStep,
                                currentSection.steps.length,
                            )}
                        </p>
                    </div>
                </div>

                <div className={styles.progressPercentWrap}>
                    <p className={styles.progressPercent}>{progressPercent}%</p>
                    <p className={styles.progressPercentLabel}>
                        {t.completedLabel}
                    </p>
                </div>
            </div>
        </div>
    );
}
