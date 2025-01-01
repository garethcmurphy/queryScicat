# SciCat Query NPM Package Playground 🛠️📦  

This repository is a **sandbox playground** for developing and testing an **NPM package** to query the **SciCat** science data catalog. It provides tools to experiment with querying APIs and managing responses.

---

## Features ✨  

- **NPM Package Development**: Focus on building a reusable SciCat query package.  
- **API Querying**: Perform queries against the SciCat API.  
- **Sandbox Environment**: Experiment with features before finalizing the package.  

---

## Prerequisites 🛠️  

- Node.js (14+ recommended).  
- Access to a SciCat instance with API credentials.  

---

## Installation  

1. Clone the repository:  
   git clone https://github.com/your-username/scicat-query-playground.git  
   cd scicat-query-playground  

2. Install dependencies:  
   npm install  

---

## Usage 🔧  

1. Set your SciCat API credentials in `config.json`.  

2. Test queries with the playground script:  
   npm start  

3. Modify the code in `src/` to add or refine features.  

---

## Configuration  

- **API Settings**: Update `config.json` with the following details:  
  - API URL  
  - Authentication token  

---

## File Structure 📂  

- `src/`: Contains the main code for the NPM package.  
  - `query.js`: Script for performing API queries.  
  - `utils.js`: Utility functions for handling responses.  
- `config.json`: API credentials and settings.  
- `package.json`: Project configuration and dependencies.  
- `README.md`: Documentation for the repository.  

---

## Example Commands  

- Start the playground:  
  npm start  

- Test queries interactively:  
  node src/query.js  

---

## Contributing 🤝  

1. Fork the repository.  
2. Create a new branch:  
   git checkout -b feature/your-feature  

3. Commit your changes:  
   git commit -m "Add your feature"  

4. Push the branch:  
   git push origin feature/your-feature  

5. Open a pull request.  

---

## License 📝  

This project is licensed under the MIT License. See the LICENSE file for details.  

---

**Experiment and refine your SciCat querying workflows with this NPM package playground!** 🛠️📦  
