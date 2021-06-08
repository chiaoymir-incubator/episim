var global_confirmed_data = []
const xx = 0
function fetch_pop(){
    global_confirmed_data = []
    d3.csv("../../data/populations_2021.csv", function(data) {
        // global_confirmed_data = data   
        // global_confirmed_data.push(global_confirmed_data) 
        return data
    }).then(function(data) {
        console.log("file has " + data.length + " rows");
        console.log(data)
        // global_confirmed_data = data
        // update_global_combobox_items()
        
        // logger(data);
      }); ;
}

function btn_fetch_global_OnClick(){
    global_confirmed_data = []
    d3.csv("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv", function(data) {
        // global_confirmed_data = data   
        // global_confirmed_data.push(global_confirmed_data) 
        return data
    }).then(function(data) {
        console.log("file has " + data.length + " rows");
        console.log(data)
        global_confirmed_data = data
        update_global_combobox_items()
        
        // logger(data);
      }); ;
}

function update_global_combobox_items(){
    const cbb_global_countries_ctrl  = document.getElementById("cbb_global_countries")
    cbb_global_countries_ctrl.innerHTML = ""
    global_confirmed_data.map((r)=>{
        let option = document.createElement("option");
        option.text = r["Country/Region"];
        option.value = r["Country/Region"];
        cbb_global_countries_ctrl.appendChild(option);
    })
}