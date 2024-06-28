const axios = require('axios');
const fs = require('fs');

async function callGpt4ApiWithPdf(apiUrl, pdfFilePath, request, fileName) {
    try {
        // Read the PDF file as a buffer
        const pdfFile = fs.readFileSync(pdfFilePath);

        // Prepare the HTTP request data
        const formData = new FormData();
        formData.append('file', pdfFile, { filename: fileName }); // Adjust filename as needed
        formData.append('question', request);

        // Send HTTP POST request to the API endpoint
        const response = await axios.post(apiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // Add any additional headers or authentication tokens if required
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error calling GPT-4 API:', error);
        throw error;
    }
}