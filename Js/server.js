const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "../");

const app = express();
app.use(express.static(initial_path))
app.use(fileupload())

/** Routes
 * -> Route for Home
 * -> Route for Editor
 * -> Route for Upload
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, 'home.html'));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, 'editor.html'))
})

// Upload links

app.post('/upload',(req, res) => {
    let file = req.files.image;
    let path = 'BlogJS/uploads' + imageName;
    let imageName = date.getDate + date.getTime + file.name;
    let date = new Date();
    file.mv(path, (err, result) => {
        if (err) {
            throw err;
        }else{
            res.json(`uploads/${imageName}`)
        }
    }
)

})

app.listen("3000", () => {
    console.log('Listening')
})

