//關閉伺服器
mc.listen('onServerStarted',() => {
    mc.regPlayerCmd('stopser', '§l§c關閉伺服器',function(pl){
        if (pl.isOP() == true) {
            mc.broadcast('§l§c伺服器將在5秒後關閉')
            setTimeout(`mc.broadcast('§l§c伺服器將在4秒後關閉')`,1000)
            setTimeout(`mc.broadcast('§l§c伺服器將在3秒後關閉')`,2000)
            setTimeout(`mc.broadcast('§l§c伺服器將在2秒後關閉')`,3000)
            setTimeout(`mc.broadcast('§l§c伺服器將在1秒後關閉')`,4000)
            setTimeout(`mc.broadcast('§l§c伺服器將在0秒後關閉')`,4500)
            setTimeout(`mc.runcmd('stop')`,5000)
        } else {
            pl.tell('§l§c你不是管理員無法使用該指令')
        }
    })
})