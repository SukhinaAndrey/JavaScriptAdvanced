

window.addEventListener("load",function(){

    var place = document.getElementsByClassName("place");
    var textarea = document.getElementById("textarea");
    var button = document.getElementById("buy");
    var extra = document.getElementById("extra");
    var n = 0;
    var sum;

    for (var i = 0; i < place.length; i++) {
        place[i].addEventListener('click', function() {
            if(this.style.background){
                this.style.background = "";
                n--;
                if(n==0){
                    button.disabled = true;
                }
                sum = n*100;
                textarea.innerText = sum+" грн за - "+n+" билет(а,ов). ";
            }

            else{
                this.style.background = "#EB7D3E";
                n++;
                button.disabled = false;
                sum = n*100;
                textarea.innerText = sum+" грн за - "+n+" билет(а,ов). ";
            }
            return sum,textarea.value;
        });
    }

    for(var j =0; j<extra.options.length; j++){
        extra.options[j].addEventListener("click", function(){
            if(this.selected){
            textarea.innerText = textarea.value+"Стоимость "+this.text+" = "+this.value+" грн. ";
            sum += parseInt(this.value);
            }
        return sum,textarea.value;
        })
    }

    button.addEventListener("click",function(){
        if(sum>300){
        textarea.innerText = textarea.value+"Вы получаете 1 билет в подарок! Общая сумма = "+sum+" грн. ";
        }else
        textarea.innerText = textarea.value+"Общая сумма = "+sum+" грн. ";
    })

},false);

