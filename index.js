var userlocation="";
var weatherStatus=document.getElementById("WeatherStatus");
var city=document.getElementById("City");
var tempature=document.getElementById("tempatureValue");
var rainValue=document.getElementById("rainingValue");
var selfSenseTemp;
var selfSenseStatus=document.getElementById("selfFeelingStatus");
var selfSenseIcon=document.getElementById("EmotionIcon");



//fetch data and save it Name: 36P means 36 hour Prediction 3hrupdate means 3hr update(City scale)
function FetchData(storeName,url){
fetch(url).then(response=>{
    if(response.status==200){
        console.log(`Access Succesful at ${url}`);
        return response.json();
    }else{
        console.alert(`Access Failed,Please Retry at ${url}`);
        console.log(response);
    }

}).then(data=>{
    console.log(data);
    localStorage.setItem(storeName,JSON.stringify(data.records));
    changeShownValue(5,'NULL');
})
}

//use this func when loading
function loadpageFunc(){
FetchData('36P','https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EED5FE00-AC69-4FA0-9F01-4E32D94AB7A4');
FetchData('3hrupdate','https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-EED5FE00-AC69-4FA0-9F01-4E32D94AB7A4');

}

//shown drop down boxes
function showSearchResult(){
    var inputText=document.getElementById("SearchBox").value;
    for(i=0;i<inputText.length;i++){
        if(inputText[i]=='台'){
            inputText=inputText.substring(0,i)+'臺'+inputText.substring(i+1);
            console.log( inputText);
        }
        if(inputText[i]==' '){
            inputText=inputText.substring(0,i)+inputText.substring(i+1);
        }
    }
    let li=document.getElementById("CityList");
    let ul=li.getElementsByTagName("a");
    for(w=0;w<ul.length;w++){
        var ListItem=li.getElementsByTagName("a")[w];
        if(ListItem.innerHTML.includes(inputText)){
            ListItem.style.display="";

        }else{
            ListItem.style.display="none";

        }
    }
}
window.addEventListener("mousedown",(e)=>{
    Citylist.addEventListener("mousedown",(e)=>{
       
    })
}
)
// sunny: https://image.flaticon.com/icons/png/512/1163/1163662.png
// mostly clear: https://image.flaticon.com/icons/png/512/1163/1163661.png
// cloudy: https://image.flaticon.com/icons/png/512/414/414825.png
// rainy: https://image.flaticon.com/icons/png/512/1146/1146858.png
// lightning: https://image.flaticon.com/icons/png/512/3445/3445722.png
// windy: https://image.flaticon.com/icons/png/512/708/708462.png
// snowy: https://image.flaticon.com/icons/png/512/2204/2204343.png


//emotion_icon change
// sweat: 
// umbrella: https://image.flaticon.com/icons/png/512/4667/4667059.png

// very good: https://image.flaticon.com/icons/png/512/1023/1023656.png 
function changeDetailedValue(Cityname){
    var b=JSON.parse(localStorage.getItem('3hrupdate'));
    console.log(b);
    for(i=0;i<b.locations[0].location.length;i++){
        if(b.locations[0].location[i].locationName==Cityname){
            console.log(b);
            document.getElementById("Td").innerHTML=b.locations[0].location[i].weatherElement[10].time[0].elementValue[0].value;
            document.getElementById("Rh").innerHTML=b.locations[0].location[i].weatherElement[4].time[0].elementValue[0].value;
        }
    }




}
//changevalue when shown different city
function changeShownValue(dataPos,District){
    console.log(District);
    var lotemp,hightemp,data_selfSenseStatus;
    var a=JSON.parse(localStorage.getItem('36P'));
    console.log(a);
    if(District=='NULL'){
    city.innerHTML=`${a.location[dataPos].locationName} 全境`;
    lotemp=a.location[dataPos].weatherElement[2].time[0].parameter.parameterName;
    hightemp=a.location[dataPos].weatherElement[4].time[0].parameter.parameterName;
    tempature.innerHTML=`${lotemp}~${hightemp}°C`;

    rainValue.innerHTML=`${a.location[dataPos].weatherElement[1].time[0].parameter.parameterName}%`;
    weatherStatus.innerHTML=a.location[dataPos].weatherElement[0].time[0].parameter.parameterName;
    
    data_selfSenseStatus=a.location[dataPos].weatherElement[3].time[0].parameter.parameterName;
}else {
    console.log(District);
    city.innerHTML=`${a.location[dataPos].locationName} ${District}`;
}
console.log(a);

    selfSenseStatus.innerHTML=data_selfSenseStatus;
    if(data_selfSenseStatus.includes('舒適')){
        selfSenseIcon.src="https://image.flaticon.com/icons/png/512/747/747402.png";
    }
    else if(data_selfSenseStatus.includes('悶熱至易中暑')){
        selfSenseIcon.src="https://image.flaticon.com/icons/png/512/152/152520.png";
    }
    else if(data_selfSenseStatus.includes('悶熱')){
        //terrible face
        selfSenseIcon.src="https://image.flaticon.com/icons/png/512/42/42847.png";


    }else if(data_selfSenseStatus.includes('中暑')){
        selfSenseIcon.src="https://github.com/John-Galt-Railroad/Weather/blob/main/sweating-emoticon-square-face.png?raw=true";
    }
    
changeDetailedValue(a.location[dataPos].locationName);

}
//use this func when user press the dropdown element

document.getElementById("CityList").style.display="none";
document.getElementById("SearchBox").addEventListener("input",(e)=>{
    if(document.getElementById("SearchBox").value.length==0){
        document.getElementById("CityList").style.display="none";
    }else{
        document.getElementById("CityList").style.display="";
    }

});

document.getElementById("SearchButton").addEventListener("click",(e)=>{
    console.log("click");
})


