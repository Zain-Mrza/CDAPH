# The Chronic Disease Assessment and Prevention Hub (CDAPH)

A modular health assessment kiosk meant to collect basic health metrics and survey responses and present structured output to guide users with health advice. This is meant to be a supplement to primary care, not a replacement.

---

## Overview

The Healthcare Kiosk guides a user through a step-by-step workflow to enter or collect health measurements (e.g. blood pressure, height, weight), stores those values, and uses them to generate downstream health-related advice.

The system is designed with the following goals in mind:

- Simple and accessible UI
- Clear separation of frontend and backend
- Regulatory compliance
- Offline-first operation with optional online features
- Alignment with real-world medical software considerations

---

## Tech Stack

- **Frontend:**
    - React
    - TypeScript
    - Vite
    - CSS (kiosk-style layout)

- **Design Patterns:**
    - Controlled components
    - Lifted state (App-level data ownership)
    - Prop-driven navigation
    - Functional, declarative UI

---

## Application Flow

1. **Start Screen**
    - Introduces the kiosk experience
    - User begins the assessment

2. **Measurement Screens**
    - Blood Pressure
    - Height
    - Weight
    - Each screen:
        - Has an instruction screen before
        - Validates user input
        - Persists data when navigating back

3. **Diabetes Survey**

4. **Vaccine Survey**

5. **Completion / Results (Planned)**
    - Summary of collected values
    - General, clinically sound health guidance
    - Optional export to printer or email

---

## Security & Privacy Considerations

This project is designed with healthcare constraints in mind:

- No PHI is stored persistently
- Offline-first execution (localhost / kiosk device)
- Clear separation between UI and any future network logic
- Designed to align with HIPAA-aware workflows if expanded

---

## Work in Progress

Planned or in-progress features:

- Results summary screen
- Risk scoring logic
- Sensor integration (BP cuff, scale, etc.)
- Internationalization (i18n)
- Kiosk-mode OS deployment
- Optional secure data export (e.g. PDF or SMS)
- Vaccine survey
- Diabetes survey

---

## Local Development Setup

### 1. Clone the repository

```bash
cd <wherever-you-want-the-folder>
git clone https://github.com/Zain-Mrza/CDAPH
cd CDAPH
```

---

## 🔙 Backend Setup (Python)

### 2. Create a virtual environment

```bash
cd backend
python3 -m venv venv
```

### 3. Activate the virtual environment

**macOS / Linux**

```bash
source venv/bin/activate
```

**Windows (Command Prompt)**

```bat
venv\Scripts\activate.bat
```

**Windows (PowerShell)**

```powershell
venv\Scripts\Activate.ps1
```

### 4. Install backend dependencies

```bash
pip install -r ../requirements.txt
```

### 5. Run the backend server

```bash
python app.py
```

The backend will typically be available at:

```
http://localhost:5000
```

---

## Frontend Setup (React)

### 6. Install Node.js

Ensure you have **Node.js 18 or newer** installed:

```bash
node -v
npm -v
```

Download from: [https://nodejs.org/](https://nodejs.org/)

---

### 7. Install frontend dependencies

From the project root:

```bash
cd frontend
npm install
```

---

### 8. Run the React development server

```bash
npm run dev
```

The frontend will typically be available at:

```
http://localhost:5173
```

---

## 🔁 Running the Full Application

You will usually run **both servers simultaneously**:

| Service  | Directory   | Command         |
| -------- | ----------- | --------------- |
| Backend  | `backend/`  | `python app.py` |
| Frontend | `frontend/` | `npm run dev`   |

The frontend communicates with the backend over localhost.

---

## License

This project is currently intended for academic and research use. Licensing details will be added as the project matures.
