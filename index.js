const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const travel = require('./data/travel/travel.json');
const travelDetails = require('./data/details/details.json');

app.use(cors());
app.get('/', (req, res) => {
	res.send('Travel-Guru Api server Running');
});
//*Send  all travel With News ID
app.get('/travel', (req, res) => {
	res.send(travel);
});
//*Send  travel With travel ID
app.get('/travel/:id', (req, res) => {
	const id = req.params.id;
	const selectedTravel = travel.find((n) => n.id === id);
	res.send(selectedTravel);
});
//*Send  travel details With details ID
app.get('/travel-details/:id', (req, res) => {
	const id = req.params.id;
	const details = travelDetails.filter((tv) => tv.category_id === id);
	res.send(details);
});
app.listen(port, () => {
	console.log('Newyap Local server Running on Port', port);
});
