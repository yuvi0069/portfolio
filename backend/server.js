const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User } = require('./table/db'); 

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

// Handle form submission
app.post('/submit-form', async (req, res) => {
    const { name, email, phone, message } = req.body; 
    console.log(name, email, phone, message);  
    try {
        await User.create({ name, email, phone, message });
        res.status(200).send('User created');
    } catch (error) {
        console.error('Error creating user:', error); 
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
