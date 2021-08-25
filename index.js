var userlocation="";
var Pre36;

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
    
})
}

//use this func when loading
function loadpageFunc(){
FetchData('36P','https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EED5FE00-AC69-4FA0-9F01-4E32D94AB7A4');
Pre36=localStorage.getItem("36hrPredition");

}
//shown drop down boxes
function showSearchResult(){
    let inputText=document.getElementById("SearchBox").value;
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




}
//use this func when user press the dropdown menu
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



