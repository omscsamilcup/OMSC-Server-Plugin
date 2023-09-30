//飛行
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('fly','§l§e開關飛行',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        var pl = ori.player
        if (pl.hasTag('donate') || pl.hasTag('mvpp') || pl.hasTag('yt') || pl.hasTag('team')) {
            if (pl.getScore('fly') == 0) {
                pl.tell('§l§a成功開啟飛行')
                pl.setScore('fly', 1)
            } else if (pl.getScore('fly') == 1) {
                pl.setAbility(10,false)
                pl.tell('§l§c成功關閉飛行')
                pl.setScore('fly', 0)
            }
        } else {
            pl.tell('§l§c你沒有權限使用飛行')
            pl.setScore('fly', 0)
            pl.setAbility(10,false)
        }
    })
    cmd.setup()
})
setInterval(() => { 
    mc.getOnlinePlayers().forEach(pls => {
        var pl = pls
        if (pl.getScore('fly') == 1) {
            pl.setAbility(10,true)
        } else if (pl.getScore('fly') == 0) {
            pl.setAbility(10,false)
        }
    })
}, 1000);