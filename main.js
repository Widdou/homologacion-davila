import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import https from 'https';

const app = express();
const PORT = 5050;

const davilaUrl = 'https://agendaweb.davila.cl/api/'
const davila_endpoints = {
	'registrarpaciente': '',
	'especialidades': 'https://agendaweb.davila.cl/api/v1/search/6813c9473ba9b25731fc744f'
}

console.log('Hola!')

const searchData = {
	agenda_id: '',
	office_id: '4',
	spec_id: '',
}

app.get('/specialties', async (req, res) => {

  try {
    // Fetch the HTML using axios.  The key is to get the HTML
    const response = await axios.post(davila_endpoints.especialidades, {
			// office_id: 4	// Las Condes
			office_id: 'TODOS'
		}, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Or the correct content type
      },
			httpsAgent: new https.Agent({ rejectUnauthorized: false })
    });
    const htmlContent = response.data.data; //  response.data holds the HTML

    const specialties = await parseSpecialties(htmlContent);
		console.log('AAA')
    res.json(specialties);
  } catch (error) {
    console.error('Error fetching or parsing HTML:', error);
    res.status(500).json({ error: 'Error processing request' });
  }

}) 

async function parseSpecialties(htmlString) {
  const specialties = [];
  const dom = new JSDOM(htmlString);
  const document = dom.window.document;
  const listItems = document.querySelectorAll('#result-speciality li a');

	console.log('listItems: ', listItems)

  listItems.forEach(item => {
    specialties.push({
      name: item.textContent.trim(),
      id: item.getAttribute('data-id'),
      dataType: item.getAttribute('data-type'),
      dataClinic: item.getAttribute('data-clinic'),
			dataWarningException: item.getAttribute('data-warning-except'),
    });
  });

	console.log('specialities', specialties)

  return specialties;
}

app.listen(PORT)