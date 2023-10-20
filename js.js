
function store(){
    let keys;
    let values;
    let local;
    let session;
    keys=document.getElementById("Key").value;
    values=document.getElementById("Value").value;

    let s=document.getElementById("storage").value;
    if(s==="Local storage"){
        localStorage.setItem(keys,values);
        local=localStorage.getItem(keys)
        console.log(local)
        document.getElementById("eredmeny").innerHTML=local;


    }else if(s==="Session storage"){
        sessionStorage.setItem(keys,values);
        session=sessionStorage.getItem(keys);
        console.log(session);
        document.getElementById("eredmeny").innerHTML=session;
    }


}