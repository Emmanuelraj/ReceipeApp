module.exports = function (app)
{


  //import the model
  const Receipe = require('../models/receipe');

  app.get('/', function(request,response)
  {
    console.log('get method');

    Receipe.find({},function (err,receipes)
    {
        if(err)
         {
               console.log(err);
               response.json(err);
         }
         else
         {
              response.render('index',{receipes:receipes});
         }
    })

  });





  app.post('/add',function(request,response)
  {
     console.log('add method');

      var  title= request.body.title;
      var  ingredients = request.body.ingredients;
      var  directions = request.body.directions;

      new Receipe({

           title:request.body.title,
           ingredients:request.body.ingredients,
           directions:request.body.directions
      }).save(function(err)
      {
        if(err)
         {
           console.log(err);
         }
         else {
           response.redirect ("/") ;
         }

      });
});




//delete by id

app.get('/delete/:id',function(request,response)
 {
   console.log('delete id'+request.params.id);

   Receipe.remove({_id:request.params.id},function(err)
   {
       if(err)
        {
          console.log(err);
          response.json(err);
        }
        else {
           response.redirect ("/") ;
        }
   });
});


//edit ( by id get method
app.get('/edit/:id',function (request,response)
{
    console.log('edit get method');

    Receipe.findById({_id:request.params.id},function(err,receipes)
     {
        if(err)
        {
          console.log("err"+err);
          response.json(err);
        }
        else
        {
           response.render('editById',{title:'Edit_By_Id',receipes:receipes});
        }
    })



//update by id
app.post('/update/:id', function (request,response)
 {
     console.log('update post method of'+request.params.id);


     let query =  {_id:request.params.id};

     Receipe.update(query, request.body, function(err)
     {

       if(err)
         {
           console.log(err);
         }
        else {
          response.redirect('/');
        }
     })

 })



});






}
