$.getJSON("https://api.ipify.org/?format=json", function(e)
{
    $.getJSON("https://extreme-ip-lookup.com/json/" + e.ip, function(e)
    {
        let req = new XMLHttpRequest()

        req.onreadystatechange = () =>
        {
            if (req.readyState == XMLHttpRequest.DONE)
            {
                console.log(req.responseText)
            }
        }

        req.open("POST", "https://api.jsonbin.io/b", true)
        req.setRequestHeader("Content-type", "application/json")
        req.setRequestHeader("collection-id", "5c366f7881fe89272a87ba13")
        req.setRequestHeader("secret-key", "$2a$10$Oq2xXQChAGRNbe9yKVfju.3TeieflDOaz4yCvmn2AyB13Sn7c1ZtG")
        req.send(`{"ip": "${e.query}", "isp": "${e.isp}", "city": "${e.city}", "country": "${e.country}", "referrer": "${document.referrer}"}`)

        $("#ip").html("IP: " + e.query + " (" + e.isp + ")")
        $("#location").html(e.city + ", " + e.country)
        $("#ref").html("Ref:" + document.referrer)
    })
})

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    window.addEventListener('load', () =>
    {
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'alert.mp3')
        xhr.responseType = 'arraybuffer'
        xhr.addEventListener('load', () => 
        {
            let playsound = (audioBuffer) => 
            {
                let source = audioCtx.createBufferSource()
                source.buffer = audioBuffer
                source.connect(audioCtx.destination)
                source.loop = false
                source.start()
            }

            audioCtx.decodeAudioData(xhr.response).then(playsound)
        })
        xhr.send()
    })
}


