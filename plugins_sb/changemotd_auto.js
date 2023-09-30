//Motd
mc.listen("onServerStarted",() => {
    var i = 0
    setInterval(() => {
        var motd = ['§eOMSC§d空島§b伺服器','§dOMSC§b空島§e伺服器','§bOMSC§e空島§d伺服器']
        i += 1
        if (i > 2) {
            i = 0
        }
        mc.setMotd(motd[i])
    }, 10000);
})