var userlocation="";
var weatherStatus=document.getElementById("WeatherStatus");
var city=document.getElementById("City");
var tempature=document.getElementById("tempatureValue");
var rainValue=document.getElementById("rainingValue");
var selfSenseTemp;
var selfSenseStatus=document.getElementById("selfFeelingStatus");


//fetch data and save it Name: 36P means 36 hour Prediction
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
    changeShownValue(5);
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
            inputText='臺';

            console.log( inputText[i]);
        }
    }
    let li=document.getElementById("CityList");
    let ul=li.getElementsByTagName("a");
    for(w=0;w<ul.length;w++){
        var ListItem=li.getElementsByTagName("a")[w];
        if(ListItem.innerHTML.indexOf(inputText)>-1){
            ListItem.style.display="";
        }else{
            ListItem.style.display="none";
        }
    }
}

//changevalue when shown different city
function changeShownValue(dataPos){
    var a=JSON.parse(localStorage.getItem('36P'));
console.log(a);
    city.innerHTML=`${a.location[dataPos].locationName} 全境`;
    var lotemp=a.location[dataPos].weatherElement[2].time[0].parameter.parameterName;
    var hightemp=a.location[dataPos].weatherElement[4].time[0].parameter.parameterName;
    tempature.innerHTML=`${lotemp}°C~${hightemp}°C`;

    rainValue.innerHTML=`${a.location[dataPos].weatherElement[1].time[0].parameter.parameterName}%`;
    weatherStatus.innerHTML=a.location[dataPos].weatherElement[0].time[0].parameter.parameterName;
    selfSenseStatus.innerHTML=a.location[dataPos].weatherElement[3].time[0].parameter.parameterName;


}
//use this func when user press the dropdown element
function Search(CityToSearch){

        
var a=JSON.parse(localStorage.getItem('36P'));
console.log(a);
for(i=0;i<a.location.length;i++){
    if(a.location[i].locationName==CityToSearch){
        console.log(CityToSearch);
        changeShownValue(i);
    }
}


}
document.getElementById("CityList").style.display="none";
document.getElementById("SearchBox").addEventListener("input",(e)=>{
    if(document.getElementById("SearchBox").value.length==0){
        document.getElementById("CityList").style.display="none";
    }else{
        document.getElementById("CityList").style.display="";
    }

});


