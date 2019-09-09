window.onload = function() {
  var videoUrls = window.ytplayer.config.args.url_encoded_fmt_stream_map.split(',').map(function(item){
    return item.split("&").reduce(function(pre, cur){
      console.log(pre, cur);
      cur = cur.split("=");
      return Object.assign(pre, {[cur[0]]: decodeURIComponent(cur[1])});
    }, {});
  });
  console.log("our extension is loaded",videoUrls);
}
var container1 = document.getElementById("container");
var container2 = document.getElementById("info");
var btn = document.createElement("button").style.display="inline-block";
btn.className = "style-scope ytd-video-primary-info-renderer";
btn.setAttribute("force-default-style", "")
btn.setAttribute("role", "button");
btn.innerText="Download";
container1.appendChild(btn);
