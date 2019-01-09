$.getJSON("https://api.ipify.org/?format=json", function(e) {
    $.getJSON("https://extreme-ip-lookup.com/json/" + e.ip, function(e) {
    	$("#ip").html("IP: " + e.query + " (" + e.isp + ")")
    	$("#location").html(e.city + ", " + e.country)
	})
})

console.log(document.referrer)
