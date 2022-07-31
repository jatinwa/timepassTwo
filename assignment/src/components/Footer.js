import React,{ useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Img from '../assets/dhl.png'
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

const Footer = () => {

  const [name, setName] = useState('Jatin')


  async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_6jCSKE4bhQo4fG' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
      image: Img,
			name: 'payment',
			description: 'Thank you for shopping with us. Please proceed for payment.',
			handler: function (response) { 
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

  return (
    <div className='flex justify-between md:mx-24 flex-wrap md:mb-0 mb-4'>
        <div className='ml-8 md:ml-0 mt-2 md:mt-0'>
            <ArrowBackIcon/>
            Back
        </div>
        <div className='md:mr-12 flex flex-wrap'>
           <button className='border-2 border-gray-700 hover:bg-slate-100 rounded-3xl md:px-6 md:py-2 px-2 py-2 md:text-sm text-[10px] mr-2'>
            CONTINUE SHOPPING
           </button>
           <button className='rounded-3xl md:px-6 md:py-2 px-2 py-2 bg-green-400 hover:bg-green-300 md:text-sm text-[10px] text-white border-2 border-green-400' onClick={displayRazorpay}>
            PROCEED TO PAYMENT
           </button>
        </div>
    </div>
  )
}

export default Footer