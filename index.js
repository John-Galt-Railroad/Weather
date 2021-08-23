var userlocation="";


function FetchData(url){

fetch(url).then(response=>{
    if(response.status==200){
        console.log(`Access Succesful at ${url}`);
        return response.json();
    }else{
        console.log(`Access Failed Please Retry at ${url}`);
        console.log(response);
    }

}).then(data=>{
    return data;
})

}


function loadpageFunc(){
FetchData('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EED5FE00-AC69-4FA0-9F01-4E32D94AB7A4')


}
  
