
               var month = document.getElementById('month');
               var day = document.getElementById('day');
               document.getElementById('form').addEventListener('submit', getFact);
           
               function getFact(e){
                  e.preventDefault();
                  var monthValue = month.value;
                  var dayValue = day.value;
                  fetch(`http://numbersapi.com/${monthValue}/${dayValue}/date`).then((res) => res.text()).then((data) => {
                       if(monthValue != '' || dayValue != ''){
                        document.getElementById('factText').innerHTML = data;
                        document.getElementById('heading').style.display="block";
                       }
                       
                       
                   }).catch((err) => console.log(err))
                  
               }
   
