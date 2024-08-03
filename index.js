import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    const blog = {
        name: req.body["name"],
        theme: req.body["theme"],
        title: req.body["title"],
        text: req.body["text"],
        date: getTime()
    }

    res.render("index.ejs", { blog })
})

/*************************
    UPDATE THE BLOG
**************************/
app.get('/edit', (req, res) => {
    res.render("update.ejs")
})

app.post("/update", (req, res) => {
    const blog = {
        name: req.body["update_name"],
        theme: req.body["update_theme"],
        title: req.body["update_title"],
        text: req.body["update_text"],
        date: getTime()
    }

    res.render("index.ejs", { blog })
})

/************************
    DELETE THE BLOG
*************************/
app.get('/delete', (req, res) => {
    res.render("destroy.ejs")
})

app.post("/delete", (req, res) => {
    res.render("index.ejs")
})

function getTime() {
    const date = new Date();

    // Define options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date to "Month Day, Year"
    const time = date.toLocaleDateString('en-US', options);

    return time
}

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})