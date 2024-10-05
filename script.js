for (var i = 1; i < (document.querySelectorAll("div.col").length+1); i++) {
    (function(index) {
        document.querySelector("#image" + index).addEventListener("mouseover", function(){
            document.querySelector("#image" + index).style.display = "none";
            document.querySelector("#video" + index).style.display = "block";
            document.querySelectorAll(".card-text")[index - 1].style.display="block";
            document.querySelector("#video" + index).play();
            document.querySelector("#video" + index).loop = true;
            document.querySelector("#job" + index).play();

        });

        document.querySelector("#video" + index).addEventListener("mouseout", function(){
            document.querySelector("#video" + index).style.display = "none";
            document.querySelector("#image" + index).style.display = "block";
            document.querySelectorAll(".card-text")[index - 1].style.display="none";
        });
    })(i);

    
}


document.addEventListener("keydown", function(event){
    jobSound(event.key);
   })

function jobSound (key){

    switch (key) {
        case "d":
            var job1 = document.getElementById("job1");
            var job_1= document.querySelector(".job_1")
            job_1.style.display="block";

            setTimeout(function(){
                job_1.style.display="none";
                }, 4000 );
            job1.play();
            break;
        case "t":
            var job2 = document.getElementById("job2");
            var job_2= document.querySelector(".job_2");
            job_2.style.display="block";
            setTimeout(function(){
                job_2.style.display="none";
                }, 4000 );
            job2.play();
            break;
        case "e":
            var job3 = document.getElementById("job3");
            var job_3= document.querySelector(".job_3");
            job_3.style.display="block";
            setTimeout(function(){
                job_3.style.display="none";
                }, 4000 );
            job3.play();
            break;
        case "w":
            var job4 = document.getElementById("job4");
            var job_4= document.querySelector(".job_4");  
             job_4.style.display="block";

            setTimeout(function(){
                job_4.style.display="none";
                }, 4000 );
            job4.play();
            break;
        case "l":
            var job5 = document.getElementById("job5");
            var job_5= document.querySelector(".job_5");
            job_5.style.display="block";

            setTimeout(function(){
                job_5.style.display="none";
                }, 4000 );
            job5.play();
            break;
        case "c":
            var job6 = document.getElementById("job6");
            var job_6= document.querySelector(".job_6");
            job_6.style.display="block";

            setTimeout(function(){
                job_6.style.display="none";
                }, 4000 );
            job6.play();
            break;
        case "a":
            var job7 = document.getElementById("job7");
            var job_7= document.querySelector(".job_7");
            job_7.style.display="block";

            setTimeout(function(){
                job_7.style.display="none";
                }, 4000 );
            job7.play();
            break;
            case "p":
                var job8 = document.getElementById("job8");
                var job_8= document.querySelector(".job_8");
                job_8.style.display="block";

                setTimeout(function(){
                    job_8.style.display="none";
                    }, 4000 );
                job8.play();
                break;
        case "f":
         var job9 = document.getElementById("job9");
         var job_9= document.querySelector(".job_9");
         job_9.style.display="block";

         setTimeout(function(){
             job_9.style.display="none";
             }, 4000 );
         job9.play();
           break;
    
    
    
        default:console.log(buttonInnerHTML);
            break;
       }
}