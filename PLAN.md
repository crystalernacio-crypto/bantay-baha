# Bantay Baha - Sprint Plan

## 1. User Stories
* **As a resident,** I want to view real-time water level updates and safety alerts on my mobile phone so that I can prepare for potential floods early.
* **As a barangay official,** I want to monitor aggregated water level statistics and trends so that I can issue timely evacuation orders.
* **As a system administrator,** I want incoming sensor data to be validated automatically so that erroneous or fake readings do not compromise system reliability.

## 2. Acceptance Criteria
* **User Story 1:** 
  * The front-end page loads successfully on a 375px mobile screen without horizontal scrolling.
  * The water level status color changes dynamically (Green for normal, Orange for alert, Red for danger).
* **User Story 2:** 
  * The `/api/summary` endpoint accurately calculates minimum, maximum, and average water levels from stored readings.
* **User Story 3:** 
  * Any POST request missing required fields or containing out-of-range values is rejected with a `400` status code.

## 3. Sprint Backlog
* Setup repository and environment - **Done**
* Back-end API endpoints (`/api/readings`, `/api/summary`) - **Done**
* IoT sensor simulator script - **Done**
* Mobile-responsive front end with auto-refresh and charts - **Done**
* Data analytics calculation logic - **Done**
* Generative AI advisory integration with rule-based fallback - **Done**
* Cloud deployment on Render - **Done**
* Security, ethics, and emerging tech reflection - **Done**

## 4. SDLC Model
This lab follows the **Agile/Scrum** model because it is structured as a rapid 3-hour single-sprint development cycle focused on delivering a working minimum viable product (MVP) iteratively.
```[cite: 9, 10]

4. I-save ang file (`Ctrl + S` o `Cmd + S`).

---

### Paano gawin ang `REFLECTION.md`:
1. Mag-click ulit sa **New File** icon sa kaliwang sidebar.
2. I-type naman ang eksaktong pangalan na: `REFLECTION.md` at pindutin ang Enter.
3. Kopyahin at i-paste ang code na ito sa loob ng file na ito:

```markdown
# Reflection: Security, Ethics, and Emerging Tech

## 1. Security Risks and Fixes
* **Risk 1:** Unauthorized data injection where anyone can send fake POST requests to `/api/readings` and spoof sensor data. **Fix:** Implement API key authentication or JWT verification headers that only authorized IoT hardware possesses.
* **Risk 2:** Lack of rate limiting on API endpoints, making the server vulnerable to Denial of Service (DoS) attacks by malicious scripts flooding HTTP requests. **Fix:** Add rate-limiting middleware (such as `express-rate-limit`) to restrict excessive requests from a single IP address.

## 2. AI Responsibility and Safeguards
* **Responsibility:** When an AI generates an erroneous advisory, accountability primarily rests on the developers and municipal authorities who deployed the automated system without sufficient verification layers. 
* **Safeguard:** We implemented a rule-based deterministic fallback mechanism that triggers if the AI call fails, alongside strict input validation bounds to ensure summaries stay anchored strictly to verified numerical data.

## 3. Emerging Tech Integration (Blockchain)
* **Realistic Application:** Blockchain technology could secure IoT flood readings by logging them onto an immutable ledger, ensuring that historical flood data cannot be tampered with or disputed during post-disaster audits.
* **Cost/Drawback Reason:** It might not be worth the cost due to high computational overhead, transaction latency, and unnecessary complexity for a localized barangay-level monitoring tool.

## 4. Big Data Analytics Scaling
* Installing 200 sensors across Metro Manila would shift architecture from a simple in-memory array to a distributed database system (e.g., time-series databases like TimescaleDB). It would require real-time stream processing pipelines, spatial-temporal indexing for geographical mapping, and advanced predictive machine learning models to analyze city-wide cascading flood risks.
```[cite: 11]

