async function display(){
    try{
        let res=await fetch("https://urlhaus-api.abuse.ch/v1/urls/recent/")
        let data=await res.json()
        if(data.urls){
            let root=document.getElementById("root")
            data.urls.forEach((e)=>{
                let div=document.createElement("div")
                div.innerHTML=`<h4>Url:${e.url}</h4>
                <ul class="list-group">
                <li class="list-group-item"><b>Id:</b>${e.id}</li>
                <li class="list-group-item"><b>Reference Url:</b>${e.urlhaus_reference}</li>
                <li class="list-group-item"><b>Status:</b>${e.url_status}</li>
                <li class="list-group-item"><b>Host:</b>${e.host}</li>
                <li class="list-group-item"><b>Date:</b>${e.date_added}</li>
                <li class="list-group-item"><b>Reporter:</b>${e.reporter}</li>
                <li class="list-group-item"><b>larted:</b>${e.larted}</li>
                <li class="list-group-item"><b>Date:</b>${e.date_added}</li>
                <li class="list-group-item"><b>Tag:</b>${e.tags}</li><br>
                </ul>`
                root.appendChild(div)
            })
        }
        else{
            console.log("no data found")
        }
    }
   catch(error)
   {
    console.log(error)
   }
}
display()