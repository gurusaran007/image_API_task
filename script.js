var container = document.createElement("div");
container.className="container";
container.className="main";

var row = document.createElement("div");
row.className="row";




async function get_data()
{
    var res = await fetch("https://ffxivcollect.com/api/mounts/");
    var final_res = await res.json();
    console.log(final_res);

    value_data(final_res);
}

get_data();

function value_data(final_res)
{
    try{
        
        for(let i=0;i<final_res.results.length;i++)
        {
            if(final_res.results[i].image==undefined)
            {
                throw new Error("Invalid");
            }
            
    
            var col = document.createElement("div");
                        col.className="col-md-4";
                        col.innerHTML += 
                    `
            
            <div style = margin:20px>
                        <img src=${final_res.results[i].image} class="image-fluid"  width=150px height = 150px alt=${`FIF`}>
                        <p ><b>name:<b>${final_res.results[i].name}</p>
                        </div>`
    
                        row.append(col);
                        container.append(row);
                        document.body.append(container);
        }
    }
    catch(error)
    {
        console.log(error.message);
    }
    
   
}