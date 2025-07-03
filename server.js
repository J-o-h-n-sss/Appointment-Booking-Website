const express = require("express")
const bodyParser = require ('body-parser')
const cors = require('cors')
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore'); 

 const app = express();
 app.use(cors());
 app.use(bodyParser.json());

 const firebaseConfig = {
    apiKey: "AIzaSyAO9GtCmTwXHwg-JErqs9LCXE0blhdrSI4",
    authDomain: "hair-salon-hung-booking.firebaseapp.com",
    projectId: "hair-salon-hung-booking",
    storageBucket: "hair-salon-hung-booking.firebasestorage.app",
    messagingSenderId: "877475295805",
    appId: "1:877475295805:web:b7599a3699031912df3054",
    measurementId: "G-42JZD2V6W5"

 };

 const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);

 app.post('/book', async(req, res) => {
    const {name, phone, service, date, time} = req.body;

    try {
        const docRef = await addDoc(collection(db, 'bookings'),{
            name, phone, service, date, time
        });
        res.status(200).send({message: 'Booking saved', id:docRef.id});
    } catch (error) {
        res.status(500).send({message: 'Error saving booking',error});
    }


 });
 app.listen(3001, () =>{
    console.log('Backend server running on http://localhost:3001');
 });
