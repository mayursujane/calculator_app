let buttonbox=document.getElementsByClassName("btn");
let inputbox=document.getElementsByClassName("inputbox");
let st="";



let stringadd=(e)=>{
    if(e.target.textContent=="=")
    {
        try{
            let res=eval(st);
            console.log(res, inputbox[0].innerHTML=res)
            st=""
        }catch(error){
            console.log("syntex error", inputbox[0].innerHTML="syntex error")
        }
        
    }

    else if(e.target.textContent=="AC")
    {
        st="";
        console.log(st, inputbox[0].innerHTML="0")

    }

    else if(e.target.textContent=="DEL")
    {
        st=st.substring(0,st.length-1);
        console.log(st, inputbox[0].innerHTML=st)
    }

    else{
        st+=e.target.textContent;
        inputbox[0].innerHTML=st
        console.log(st); 
    }

    
}

buttonbox[0].addEventListener("click", stringadd);
buttonbox[1].addEventListener("click", stringadd);
buttonbox[2].addEventListener("click", stringadd);
buttonbox[3].addEventListener("click", stringadd);
buttonbox[4].addEventListener("click", stringadd);
buttonbox[5].addEventListener("click", stringadd);
buttonbox[6].addEventListener("click", stringadd);
buttonbox[7].addEventListener("click", stringadd);
buttonbox[8].addEventListener("click", stringadd);
buttonbox[9].addEventListener("click", stringadd);
buttonbox[10].addEventListener("click", stringadd);
buttonbox[11].addEventListener("click", stringadd);
buttonbox[12].addEventListener("click", stringadd);
buttonbox[13].addEventListener("click", stringadd);
buttonbox[14].addEventListener("click", stringadd);
buttonbox[15].addEventListener("click", stringadd);
buttonbox[16].addEventListener("click", stringadd);
buttonbox[17].addEventListener("click", stringadd);
buttonbox[18].addEventListener("click", stringadd);
buttonbox[19].addEventListener("click", stringadd);