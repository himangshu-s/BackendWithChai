Good question. Your server is actually running on port 3000, but you're logging the wrong variable, which is why the terminal shows 4000.

Let's break it down.

Your code
require('dotenv').config()

const express = require('express');
const app = express()

const port = 4000

Here you've created a JavaScript variable:

const port = 4000

Then later you start the server using:

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

Notice these are two different things:

process.env.PORT → comes from .env (3000)
port → your own variable (4000)

So Express does this:

app.listen(process.env.PORT)

which means:

app.listen(3000)

✅ The server starts on 3000.

But then you print:

console.log(`Example app listening on port ${port}`)

which prints:

Example app listening on port 4000

because port is 4000.

How to verify

Open your browser:

http://localhost:3000

It should work.

Now try:

http://localhost:4000

It won't work.

That proves the server is actually running on 3000.