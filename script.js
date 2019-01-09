$.getJSON("https://api.ipify.org/?format=json", function(e) {
    $.getJSON("http://ip-api.com/json/" + e.ip, function(e) {
    	$("#ip").html("IP: " + e.query + " (" + e.isp + ")")
    	$("#location").html(e.city + ", " + e.regionName + ", " + e.country)
	})
})

console.log(document.referrer)
