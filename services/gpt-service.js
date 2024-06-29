const config = require('../config');
const fs = require('fs');
const pdf = require('pdf-parse');
const axios = require('axios');

// TODO: implement API endpoint to call ChatGPT with routing guide and logic to parse response and write to DB
// Function to read and parse the PDF
const readPDF = async (filePath) => {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
};

// Function to query the GPT-4 API with the extracted text and a query
const queryGPT4 = async (pdfText, query) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const endpoint = config.gpt4Endpoint;

    const response = await axios.post(
        endpoint,
        {
            prompt: `${pdfText}\n\n${query}`,
            max_tokens: 1500,
            temperature: 0.7
        },
        {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        }
    );

    return response.data;
};