//在綫獎勵
mc.listen("onServerStarted",() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        setInterval(() => {
            pl.addScore('money', 100)
            mc.broadcast('§l§e在綫獎勵已派發')
        },1800000)
    }
})