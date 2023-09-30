//Sidebar
var CurrentTPS = ll.import("QueryTPS", "GetCurrentTPS")
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]

        var rank = {}
        if (pl.hasTag('vip')) {
            rank = '§aVIP'
        } else if (pl.hasTag('vipp')) {
            rank = '§aVIP§6+'
        } else if (pl.hasTag('vippp')) {
            rank = '§aVIP§6++'
        } else if (pl.hasTag('mvp')) {
            rank = '§bMVP'
        } else if (pl.hasTag('mvpp')) {
            rank = '§bMVP§c+'
        } else if (pl.hasTag('mvppp')) {
            rank = '§bMVP§c++'
        } else if (pl.hasTag('team')) {
            rank = '§6Server Team'
        } else {
            rank = 'None'
        }

        var str0 = '§l§e| §r§b玩家名稱$name'.replace('$name',pl.realName)
        var str1 = '§l§e| §r§b你有$money空島SC幣'.replace('$money',pl.getScore('money'))
        var str2 = '§l§e| §r§b你有$point點數 $ownercoins服主幣'.replace('$point',pl.getScore('point')).replace('$ownercoins',pl.getScore('ownercoins'))
        var str3 = '§l§e| §r§b你的空島等級$level'.replace('$level',pl.getScore('level'))
        var str4 = '§l§e| §r§b伺服器TPS:$tps'.replace('$tps',CurrentTPS())
        var str5 = '§l§e| §r§b你的延遲$pingms'.replace('$ping',pl.getDevice().avgPing)
        var str6 = '§l§e| §r§b游玩時間$playD天$playH小時'.replace('$playD',pl.getScore('playDays')).replace('$playH',pl.getScore('playHours'))
        var str7 = '§l§e| §r§b           $playm分鐘$plays秒'.replace('$playm',pl.getScore('playMin')).replace('$plays',pl.getScore('playSec'))
        var str8 = '§l§e| §r§b你的設備:$os'.replace('$os', pl.getDevice().os)
        var str9 = '§l§e| §r§b在綫人數:$online/100'.replace('$online', mc.getOnlinePlayers().length)
        var str10 = '§l§e| §r§b你的Rank:$rank'.replace('$rank', rank)
        var arr = [str0,str1,str2,str3,str4,str5,str6,str7,str8,str9,str10]

        var bar = '{"'
        for (var i in arr) {
            bar = bar + "\§r" + arr[i] + '":' + String(Number(i)+1) + ',"'
        }
        bar = bar.slice(0,-2) + '}'
        if (pl.getScore('score') == 0) {
            pl.removeSidebar()
            pl.setSidebar('§l§cO§6M§eS§aC§2空§b島§d伺§c服§6器', JSON.parse(bar),0)
        } else if (pl.getScore('score') == 1) {
            pl.removeSidebar()
        }
    }
}, 1000);

mc.listen("onServerStarted",() => {
    mc.regPlayerCmd('sidebar','開關計分板顯示',(pl) => {
        if (pl.getScore('score') == 1) {
            pl.setScore('score', 0)
            pl.tell("§l§a你已成功開啟計分板")
        } else if (pl.getScore('score') == 0) {
            pl.setScore('score',1)
            pl.tell('§l§c你已成功關閉計分板')
        }
    })
})