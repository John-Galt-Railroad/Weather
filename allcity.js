let Citylist=document.getElementById("CityList");
//lol放棄
Citylist.innerHTML+='<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">宜蘭縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 秀林鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 新城鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 花蓮市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 吉安鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 壽豐鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 萬榮鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 鳳林鎮</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 豐濱鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 光復鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 卓溪鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 瑞穗鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 玉里鎮</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">花蓮縣 富里鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 長濱鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 海端鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 池上鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 成功鎮</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 關山鎮</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 東河鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 鹿野鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 延平鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 卑南鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 臺東市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 太麻里鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 綠島鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 達仁鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 大武鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 蘭嶼鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺東縣 金峰鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">澎湖縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">澎湖縣 白沙鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">澎湖縣 西嶼鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">澎湖縣 湖西鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">澎湖縣 馬公市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">澎湖縣 望安鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">澎湖縣 七美鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">金門縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">金門縣 金城鎮</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">金門縣 金湖鎮</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">金門縣 金沙鎮</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">金門縣 金寧鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">金門縣 烈嶼鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">金門縣 烏坵鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">連江縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">連江縣 南竿鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">連江縣 北竿鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">連江縣 莒光鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">連江縣 東引鄉</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 北投區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 士林區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 內湖區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 中山區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 大同區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 松山區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 南港區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 中正區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 萬華區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 信義區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 大安區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺北市 文山區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 石門區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 三芝區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 金山區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 淡水區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 萬里區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 八里區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 汐止區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 林口區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 五股區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 瑞芳區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 蘆洲區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 雙溪區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 三重區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 貢寮區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 平溪區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 泰山區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 新莊區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 石碇區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 板橋區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 深坑區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 永和區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 樹林區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 中和區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 土城區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 新店區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 坪林區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 鶯歌區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 三峽區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新北市 烏來區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">桃園市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺中市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">臺南市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">高雄市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">基隆市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新竹縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新竹市 北區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新竹市 香山區</a></li>'+  
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">新竹市 東區</a></li>'+    
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">苗栗縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">彰化縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">南投縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">雲林縣</a></li>'+    
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">嘉義市</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">嘉義市 東區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">嘉義市 西區</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">嘉義縣</a></li>'+
'<li><a href="#" onclick="ShowFilterResult(this.innerHTML)">屏東縣</a></li>';


function ShowFilterResult(CityToShowFilterResult){
        document.getElementById("SearchBox").value=CityToShowFilterResult;
}

