const app = require('express')()
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(cors())
app.use(bodyParser.json())

const CONNECTION_URL = 'mongodb+srv://jatinwatts:27J%40tinfb@cluster0.e1q4pd3.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log('connected'))
   .catch((error) => console.log(error.message))

const razorpay = new Razorpay({
	key_id: 'rzp_test_6jCSKE4bhQo4fG',
	key_secret: 'zYVhy42RmMQPEg0phN9Zaicn'
})



app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
        debugger
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

app.listen(5000, () => {
	console.log('Listening on 5000')
})