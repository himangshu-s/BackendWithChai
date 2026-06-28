import express from "express";
const app = express();

app.get('/' , (req, res)=>{
  res.send('server is ready');
});


// get va list of 5 jokes.
app.get('/jokes', (req,res)=>
{
  const jokes=[
    {
      id: 1, 
      title: 'a joke',
      content:'this is joke'
    },
    {
      id: 2, 
      title: '2 joke',
      content:'this is second joke'
    },
    {
      id: 3, 
      title: '3 joke',
      content:'this is third joke'
    }
  ]
  res.send(jokes);
})
const port= process.env.PORT || 3000;

app.listen(port , ()=>{
  console.log(`serve at http://localhost;${port}`);
})

// there are two js models , one is common wala whoch wprks synchronously and here we use the require statement and another is module wala where we use import and the we use import here and the synta is kittle bit different. 