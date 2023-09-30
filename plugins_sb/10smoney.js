//每10秒空島SC幣
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        if (!pl.hasTag('donate')) {
            if (pl.hasTag('vip')) {
                pl.addScore('money',1)
            } else if (pl.hasTag('vipp')) {
                pl.addScore('money',5)
            } else if (pl.hasTag('vippp')) {
                pl.addScore('money', 10)
            } else if (pl.hasTag('mvp')) {
                pl.addScore('money', 25)
            } else if (pl.hasTag('mvpp')) {
                pl.addScore('money',40)
            } else if (pl.hasTag('team')) {
                pl.addScore('money', 100)
            } else if (pl.hasTag('yt')) {
                pl.addScore('money',50)
            }
        } else if (pl.hasTag('donate')) {
            pl.addScore('money',75)
        }
    }
}, 10000)