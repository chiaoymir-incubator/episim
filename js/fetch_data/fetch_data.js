var global_confirmed_data = []
var global_death_data = []
var global_recovered_data = []
var global_gathered_data = []

var countries_pop_data =[]
const xx = 0
fetch_pop()
// fetch global population data
function fetch_pop(){
    global_confirmed_data = []
    d3.csv("https://raw.githubusercontent.com/woodcutter-eric/Epidemic-Simulation/newChart/data/populations_2021.csv", function(data) {
        return data
    }).then(function(data) {
        console.log("file has " + data.length + " rows");
        countries_pop_data = data
      }); ;
}

function btn_fetch_global_OnClick(){
    global_confirmed_data = []
    global_death_data = []
    global_recovered_data = []
    global_gathered_data = []
    d3.csv("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv", function(data) {
        return data
    }).then(function(data) {
        global_confirmed_data = data.filter((x)=>(x["Province/State"] === ""))
        console.log("global_confirmed_data #" + global_confirmed_data.length);
        d3.csv("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv", function(data) {
            return data
        }).then(function(data) {
            global_death_data = data.filter((x)=>(x["Province/State"] === ""))
            console.log("global_death_data #" + global_death_data.length);

            d3.csv("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv", function(data) {
                return data
            }).then(function(data) {
                global_recovered_data = data.filter((x)=>(x["Province/State"] === ""))
                console.log("global_recovered_data #" + global_recovered_data.length);
                global_confirmed_data.map((r,ind)=>{
                    let d = (global_recovered_data.filter((x)=>(x["Country/Region"]===r["Country/Region"])))
                    console.log(d)
                    if (d.length == 0){
                        console.log("NO "+r["Country/Region"])
                    }
                })

                // update_global_combobox_items()
            }); 
            
        }); 
    }); 
}

function update_global_combobox_items(){
    const cbb_global_countries_ctrl  = document.getElementById("cbb_global_countries")
    cbb_global_countries_ctrl.innerHTML = ""
    global_confirmed_data.map((r,ind)=>{
        if (r["Province/State"] === ""){
            let option = document.createElement("option");
            option.text = r["Country/Region"];
            option.value = ind;
            cbb_global_countries_ctrl.appendChild(option);
        }
    })
}