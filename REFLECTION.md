# Reflection Report - Bantay Baha IoT Project

## 1. Project Overview
The Bantay Baha project is an IoT-based flood monitoring dashboard designed to collect real-time water level data from sensor simulators and display it on an interactive web interface.

## 2. Key Challenges & Technical Learnings
During the development and deployment phases, several key challenges were encountered and resolved:

* **Static File Serving Issue:** 
  - *Challenge:* Initially, accessing the live application on Render resulted in a blank page or routing errors because the static front-end files (`index.html`) were not being served properly.
  - *Solution:* Configured Express middleware using `app.use(express.static('public'))` and added explicit route handling to correctly serve `index.html` from the `public/` directory.

* **Deployment Configuration on Render:**
  - *Challenge:* Met deployment issues related to project directory structures and build configurations.
  - *Solution:* Ensured the `package.json` file was properly referenced in the root directory and configured manual build refreshes to update server routes.

* **Simulator & API Integration:**
  - *Challenge:* Connecting the local sensor simulator (`simulator.js`) to the live production endpoint instead of `localhost`.
  - *Solution:* Updated the target API URL to point directly to the live Render backend (`https://bantay-baha.onrender.com/api/readings`), ensuring seamless real-time data ingestion.

## 3. Personal Growth & Future Improvements
Building this project provided hands-on experience in full-stack Node.js/Express development, cloud deployment workflows, and real-time data handling. 

For future enhancements, the project could integrate WebSockets (Socket.io) for instantaneous push updates, database persistence (e.g., MongoDB/PostgreSQL) instead of in-memory arrays, and automated SMS alerts for critical water level thresholds.