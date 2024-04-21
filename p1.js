
        const indexbox=document.getElementById("indexbox");
        const listcontainers=document.getElementById("third");
        function addtask(){
            if(indexbox.value ==='' ){
              console.log(alert("Add your tasks for today"));
                alert("Add your tasks for today");
            }
            else{
                let li=document.createElement("li");
                li.innerHTML=indexbox.value;
                listcontainers.appendChild(li);
                let span=document.createElement("span");
                span.innerHTML="\u00d7";
                li.appendChild(span);

            }
            indexbox.value="";
            localstorage();
        }

        listcontainers.addEventListener("click",function(e) {
            if(e.target.tagName==='LI'){
                e.target.classList.toggle("checked");
                localstorage();
            }
            else if(e.target.tagName=== "SPAN"){
               e.target.parentElement.remove();
               localstorage();
            }
            
        },false) 

        function localstorage() {
            localStorage.setItem("data",listcontainers.innerHTML)
        }
        function showeverytime(){
            listcontainers.innerHTML=localStorage.getItem("data");
        }
        showeverytime();