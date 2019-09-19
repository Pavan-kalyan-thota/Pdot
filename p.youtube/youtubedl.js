var videoUrls = window.ytplayer.config.args.url_encoded_fmt_stream_map.split(',').map(function(item){
    return item.split("&").reduce(function(pre, cur){
      console.log(pre, cur);
      cur = cur.split("=");
      return Object.assign(pre, {[cur[0]]: decodeURIComponent(cur[1])});
    }, {});
  });
console.log("extension loaded",videoUrls);

var container = document.getElementById("info");
var btn = document.createElement("button");
btn.className = "style-scope ytd-watch-flexy";
btn.setAttribute("role", "button");
btn.innerText="Download";


var dropdown=document.createElement("div");
dropdown.id="videoDownloadDropdown";
container.appendChild(dropdown); 

var dropList=document.createElement("ul");
dropdown.appendChild(dropList);


container.appendChild(btn);

for(i in videoUrls)
{
  var item=document.createElement("a");
  item.innerText=videoUrls[i]["quality"];
  item.setAttribute("href",videoUrls[i]["url"]);
  dropList.appendChild(item);
  var break1 = document.createElement("br");
  dropList.appendChild(break1);

}

btn.addEventListener("click",downloadVideo);


function downloadVideo(){
  console.log("download the video");
  var dl=document.getElementById("videoDownloadDropdown");

  if(dl.className.indexOf("shown") > -1)
  {
    dl.className=dl.className.replace("shown","");
  }
  else
  {
    dl.className+="shown";
  }
}
