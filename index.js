var userlocation="";
var weatherStatus=document.getElementById("WeatherStatus");
var city=document.getElementById("City");
var tempature=document.getElementById("tempatureValue");
var rainValue=document.getElementById("rainingValue");
var selfSenseTemp;
var selfSenseStatus=document.getElementById("selfFeelingStatus");
var selfSenseIcon=document.getElementById("EmotionIcon");
var weatherIcon=document.getElementById("weatherIcon");
var backgroundImg=document.getElementById("backgroundImg");

//fetch data and save it Name: 36P means 36 hour Prediction 3hrupdate means 3hr update(City scale)
function FetchData(storeName,datastore){
    var url=`
    https://opendata.cwb.gov.tw/api/v1/rest/datastore/${datastore}?Authorization=CWB-EED5FE00-AC69-4FA0-9F01-4E32D94AB7A4
    `

fetch(url).then(response=>{
    if(response.status==200){
        console.log(`Access Succesful at ${url}`);
        return response.json();
    }else{
        console.alert(`Access Failed,Please Retry at ${url}`);
        console.log(response);
    }

}).then(data=>{
    console.log('a');
    console.log(data);
    localStorage.setItem(storeName,JSON.stringify(data.records));
})
}

//use this func when loading
function loadpageFunc(){
FetchData('36P','F-C0032-001');
FetchData('3hrupdate','F-D0047-089');

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
function changeShownValue(CityDis){

    var lotemp,hightemp,data_selfSenseStatus,data_weatherStatus;
    var a=JSON.parse(localStorage.getItem('36P'));

    if(CityDis.length==3){
    for(i=0;i<a.location.length;i++){
        if(a.location[i].locationName==CityDis){
            city.innerHTML=`${CityDis} 全境`
            lotemp=a.location[i].weatherElement[2].time[0].parameter.parameterName;
            hightemp=a.location[i].weatherElement[4].time[0].parameter.parameterName;
            tempature.innerHTML=`${lotemp}~${hightemp}°C`;
        
            rainValue.innerHTML=`${a.location[i].weatherElement[1].time[0].parameter.parameterName}%`;
            data_weatherStatus=a.location[i].weatherElement[0].time[0].parameter.parameterName;
            data_selfSenseStatus=a.location[i].weatherElement[3].time[0].parameter.parameterName;
    
    weatherStatus.innerHTML=data_weatherStatus;
    selfSenseStatus.innerHTML=data_selfSenseStatus;
    
changeDetailedValue(CityDis);

        }
    }
    


}else if(CityDis.length>3){
    city.innerHTML=CityDis;
    var City=CityDis.substring(0,3);
    var Dist=CityDis.substring(4);
    var FetchCode2d,FetchCode1w;
    if(City=='花蓮縣'){
FetchCode2d='F-D0047-041';
FetchCode1w='F-D0047-043';
    }else if(City=='臺東縣'){
        FetchCode2d='F-D0047-037';
        FetchCode1w='F-D0047-039';
    }else if(City=='澎湖縣'){
        FetchCode2d='F-D0047-045';
FetchCode1w='F-D0047-047';
    }else if(City=='金門縣'){
        FetchCode2d='F-D0047-085';
FetchCode1w='F-D0047-087';
    }else if(City=='連江縣'){
        FetchCode2d='F-D0047-081';
FetchCode1w='F-D0047-083';
    }else if(City=='臺北市'){
        FetchCode2d='F-D0047-061';
FetchCode1w='F-D0047-063';
    }else if(City=='新北市'){
        FetchCode2d='F-D0047-069';
FetchCode1w='F-D0047-071';
    }else if(City=='桃園市'){
        FetchCode2d='F-D0047-005';
FetchCode1w='F-D0047-007';
    }else if(City=='臺中市'){
        FetchCode2d='F-D0047-073';
FetchCode1w='F-D0047-075';
    }else if(City=='臺南市'){
        FetchCode2d='F-D0047-077';
FetchCode1w='F-D0047-079';
    }else if(City=='高雄市'){
        FetchCode2d='F-D0047-065';
FetchCode1w='F-D0047-067';
    }else if(City=='基隆市'){
        FetchCode2d='F-D0047-049';
FetchCode1w='F-D0047-051';
    }else if(City=='新竹縣'){
        FetchCode2d='F-D0047-009';
FetchCode1w='F-D0047-011';
    }else if(City=='新竹市'){
        FetchCode2d='F-D0047-053';
FetchCode1w='F-D0047-055';
    }else if(City=='苗栗縣'){
        FetchCode2d='F-D0047-013';
FetchCode1w='F-D0047-015';
    }else if(City=='彰化縣'){
        FetchCode2d='F-D0047-017';
FetchCode1w='F-D0047-019';
    }else if(City=='南投縣'){
        FetchCode2d='F-D0047-021';
FetchCode1w='F-D0047-023';
    }else if(City=='雲林縣'){
        FetchCode2d='F-D0047-025';
FetchCode1w='F-D0047-027';
    }else if(City=='嘉義市'){
        FetchCode2d='F-D0047-057';
FetchCode1w='F-D0047-059';
    }else if(City=='嘉義縣'){
        FetchCode2d='F-D0047-029';
        FetchCode1w='F-D0047-031';   
    }else if(City=='屏東縣'){
        FetchCode2d='F-D0047-033';
        FetchCode1w='F-D0047-035'; 
    }
    
    FetchData(`${City} 2d`,FetchCode2d);
    FetchData(`${City} 1w`,FetchCode1w);


    var data=JSON.parse(localStorage.getItem(`${City} 2d`));
    console.log(data);
    for(i=0;i<data.locations[0].location.length;i++){
       
        if(data.locations[0].location[i].locationName==Dist){
            data_weatherStatus=data.locations[0].location[i].weatherElement[1].time[0].elementValue[0].value;
            weatherStatus.innerHTML=data_weatherStatus;
            tempature.innerHTML=`${data.locations[0].location[i].weatherElement[3].time[0].elementValue[0].value} °C`;
            rainValue.innerHTML=`${data.locations[0].location[i].weatherElement[7].time[0].elementValue[0].value}%`
            data_selfSenseStatus=data.locations[0].location[i].weatherElement[5].time[0].elementValue[1].value;
            selfSenseStatus.innerHTML=data_selfSenseStatus;
            document.getElementById("Td").innerHTML=data.locations[0].location[i].weatherElement[10].time[0].elementValue[0].value;
            document.getElementById("Rh").innerHTML=data.locations[0].location[i].weatherElement[4].time[0].elementValue[0].value;
            document.getElementById("windD").innerHTML=`${data.locations[0].location[i].weatherElement[8].time[0].elementValue[0].value} m/h`;
            document.getElementById("windS").innerHTML=data.locations[0].location[i].weatherElement[9].time[0].elementValue[0].value;

        }
    }
}
    //background change weather icon change
    if(data_weatherStatus.includes('雷')){
        backgroundImg.src="./picture/thunderLandscape.jpg";
        weatherIcon.src="https://image.flaticon.com/icons/png/512/3445/3445722.png";
    }
    else if(data_weatherStatus.includes('雨')){
        backgroundImg.src="https://media.istockphoto.com/vectors/rainy-weather-urban-background-outdoor-street-in-rain-pavement-in-vector-id1271367650?b=1&k=6&m=1271367650&s=170667a&w=0&h=b7Di-lsZITnz-_kA8nvbtDD7zrEL3I2wrneEEU34Q1o="
        weatherIcon.src="https://image.flaticon.com/icons/png/512/1146/1146858.png";
    }
    else if(data_weatherStatus.includes('雲'&'晴')){
        backgroundImg.src="https://github.com/John-Galt-Railroad/Weather/blob/main/picture/cloudy.jpg?raw=true";
        weatherIcon.src="https://image.flaticon.com/icons/png/512/1163/1163661.png";
    }
    else if(data_weatherStatus.includes('雲')){
        backgroundImg.src="https://github.com/John-Galt-Railroad/Weather/blob/main/picture/cloudy.jpg?raw=true";
        weatherIcon.src="https://image.flaticon.com/icons/png/512/414/414825.png";
    }
    else if(data_weatherStatus.includes('晴')){
        backgroundImg.src="./picture/sunnyLandscape.jpg"; 
        weatherIcon.src="https://image.flaticon.com/icons/png/512/1163/1163662.png";
    }
 
    //emotion icon change 

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
    changeShownValue(document.getElementById("SearchBox").value);
})


