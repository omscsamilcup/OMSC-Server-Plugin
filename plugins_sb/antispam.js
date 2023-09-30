//防刷屏
mc.listen("onPlayerCmd",(pl,cmd) => {
    if (cmd.includes('@e') || cmd.includes('@a') || cmd.includes('@p') || cmd.includes('@r')) {
        if (!pl.hasTag('team')) {
            pl.tell('§l§c請不要嘗試刷屏')
            return false
        }
    }
})

setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        if (pl.getScore('antispam') > 0) {
            pl.reduceScore('antispam', 1)
        }
        if (pl.getScore('antispam2') == 3) {
            pl.setScore('antispam2', 0)
            pl.kick('§l§c你在短時間的聊天速度太快/字數太多了，你暫時已被踢出伺服器。重新進入伺服器則可。')
        }
    }
},1000)

setInterval(()=>{
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        if (pl.getScore('antispam2') > 0) {
            pl.reduceScore('antispam2', 1)
        }
    }
},10000)