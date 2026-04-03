import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { resetBackendState, resetBackendStateOnPageExit } from "./client";
import "./styles/kiosk.css";
import "./styles/risk-slider.css";
import "./styles/survey.css";
import "./styles/snellen_chart.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const renderApp = () => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
};

const renderStartupFailure = () => {
    root.render(
        <React.StrictMode>
            <main className="kioskShell">
                <section className="kioskContent">
                    <h1>Unable to start kiosk safely</h1>
                    <p>
                        The previous patient session could not be cleared from
                        the backend.
                    </p>
                    <p>
                        Restore the backend connection and reload this app
                        before screening the next patient.
                    </p>
                </section>
            </main>
        </React.StrictMode>,
    );
};

const registerResetOnPageExit = () => {
    window.addEventListener("pagehide", resetBackendStateOnPageExit);

    if (import.meta.hot) {
        import.meta.hot.dispose(() => {
            window.removeEventListener("pagehide", resetBackendStateOnPageExit);
        });
    }
};

async function bootstrap() {
    try {
        await resetBackendState();
    } catch (error) {
        console.error(
            "Unable to reset backend state during app startup.",
            error,
        );
        renderStartupFailure();
        return;
    }

    registerResetOnPageExit();
    renderApp();
}

void bootstrap();
