const cityName=document.getElementById("cityName");
const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status")
const temp_real_val=document.getElementById("temp_real_val");
const datahide=document.querySelector('.middle_layer');


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    //let url='https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9baa4e478c854098420f43879e97ab35`;
    if(cityVal===""){
        city_name.innerText=`please write valid city name`;
         datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9baa4e478c854098420f43879e97ab35`;
            const response=await fetch(url);
            const data=await response.json();
            //console.log(data);
            const arrData=[data];
            //console.log(arrData);
            //console.log(response);
            temp_real_val.innerText=arrData[0].main.temp;
           // temp_status.innerText=arrData[0].weather[0].main;
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            const tempStatus=arrData[0].weather[0].main;

            if (tempStatus == "Sunny") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempStatus == "Rainy") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
              }
               datahide.classList.remove('data_hide');
        
        }
        catch{
            city_name.innerText=`plzz enter the name properly`;
             datahide.classList.add('data_hide');
        }

    }
}
submitBtn.addEventListener('click',getInfo);