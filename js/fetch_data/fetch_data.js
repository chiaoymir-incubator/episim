var global_confirmed_data = []
var global_death_data = []
var global_recovered_data = []
var global_gathered_data = []
var global_data_dates = []

var countries_pop_data =[]
const xx = 0
fetch_pop()
fetch_jhu_global_data()
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

function fetch_jhu_global_data(){
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
                r = global_confirmed_data[0]
                
                let _dates = Object.keys(r)

                _dates.splice(_dates.indexOf("Province/State"),1)
                _dates.splice(_dates.indexOf("Country/Region"),1)
                _dates.splice(_dates.indexOf("Lat"),1)
                _dates.splice(_dates.indexOf("Long"),1)
                _dates.sort((x,y)=>(Date.parse(x)-Date.parse(y)))
                global_data_dates = _dates
                document.getElementById("txt_global_start_date").value = global_data_dates[0]
                document.getElementById("txt_global_end_date").value = global_data_dates[global_data_dates.length-1]

                update_global_combobox_items()
            }); 
            
        }); 
    }); 
}

function update_global_combobox_items(){
    const cbb_global_countries_ctrl  = document.getElementById("cbb_global_countries")
    cbb_global_countries_ctrl.innerHTML = ""
    global_confirmed_data.map((r,ind)=>{
        let option = document.createElement("option");
        option.text = r["Country/Region"];
        option.value = ind;
        cbb_global_countries_ctrl.appendChild(option);
    })
}

function btn_fetch_data_OnClick(){
    let country_name_index = document.getElementById("cbb_global_countries").value
    let d_c = global_confirmed_data[country_name_index]
    let d_r = (global_recovered_data.filter((x)=>(x["Country/Region"]===d_c["Country/Region"])))[0]
    let d_d = (global_death_data.filter((x)=>(x["Country/Region"]===d_c["Country/Region"])))[0]
    let population = Number(countries_pop_data.filter((x)=>(x.country===d_c["Country/Region"]))[0].population)
    let start_date = document.getElementById("txt_global_start_date").value
    let end_date = document.getElementById("txt_global_end_date").value
    let jhu_data = []
    let start_date_index = global_data_dates.indexOf(start_date)
    let end_date_index = global_data_dates.indexOf(end_date)
    for (let i=start_date_index;i<=end_date_index;i++)
    {
        let percentage_c = Number(d_c[global_data_dates[i]]) / population
        let percentage_remove = (Number(d_r[global_data_dates[i]])+Number(d_d[global_data_dates[i]])) / population
        jhu_data.push([
            percentage_c,percentage_remove, 1-percentage_c-percentage_remove
        ])
    }
    console.log(jhu_data)
}