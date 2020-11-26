
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos"
    }).done(function (data) {
        console.log(data);
        var table = document.getElementById('myTable');
        var output = "";
        $('.todo-list-add-btn').on("click", function(event) {
          event.preventDefault();
        });
        $('#myTable')
            .append(data.map(function (val) {
              if(val.completed== true){
              output+="<tr>\n";
              
              output += "<td>" + val.title + "</td>\n" ;
             
                output += "<td>" + "<input type = 'checkbox' checked disabled > "  +"</td>\n" ;
              
    
              output += "</tr>\n";
              }
              else{
               
              
              output += "<td>" + val.title + "</td>\n" ;
             
                output += "<td>" + "<input type = 'checkbox' > "  +"</td>\n" ;
              
    
              output += "</tr>\n";
              }
           }));
            table.innerHTML+=output;
           
              
     });
    let count = 0;
$("#myTable").on("change", ":checkbox", function () {
  var status=this.checked;
  var promise = new Promise(function (resolve,reject) {
    if(status === true)
    count++ ;
    else
    if(status ===false)
    count--;
    console.log(count,status);
    if (count == 5) {
        resolve("Congrats. 5 Tasks have been  successfully completed");
    }
});
promise
    .then(function (test) {
        alert(test);
       
    })
    .catch(function(done){
      alert(done + count);
   
    })
 });

 