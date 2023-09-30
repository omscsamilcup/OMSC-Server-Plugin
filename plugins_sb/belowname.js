//belowname
setInterval(() => {
    mc.getOnlinePlayers().forEach(pls => {
        var pl = pls
        var dv = pl.getDevice()
        var os = dv.os
        var ping = dv.avgPing
        if (ping < 110) {
            ping = '§a' + ping
        } else if (ping < 250) {
            ping = '§e' + ping
        } else if (ping >= 250) {
            ping = '§c' + ping 
        } 
        var rank = ''
        if (pl.hasTag('team')) {
            if (pl.hasTag('owner')) {
                rank = '§cOwner'
            } else if (pl.hasTag('coop')) {
                rank = '§bCo-Owner'
            } else if (pl.hasTag('admin')) {
                rank = '§gAdmin'
            } else if (pl.hasTag('builder')) {
                rank = '§aBuilder'
            } else if (pl.hasTag('develop')) {
                rank = '§bPlugins Develop'
            } else if (pl.hasTag('helpadmin')) {
                rank = '§9Admin Helper'
            }
        } else if (pl.hasTag('donate')) {
            if (pl.hasTag('mvp')) {
                rank = '§bMVP(D)'
            } else if (pl.hasTag('mvpp')) {
                rank = '§bMVP§c+(D)'
            } else if (pl.hasTag('mvppp')) {
                rank = '§bMVP§c++(D)'
            } else if (pl.hasTag('vip')) {
                rank = '§aVIP(D)'
            } else if (pl.hasTag('vipp')) {
                rank = '§aVIP§6+(D)'
            }
        } else if (!pl.hasTag('donate')) {
            if (pl.hasTag('mvp')) {
                rank = '§bMVP'
            } else if (pl.hasTag('mvpp')) {
                rank = '§bMVP§c+'
            } else if (pl.hasTag('vippp')) {
                rank = '§aVIP§6++'
            } else if (pl.hasTag('vip')) {
                rank = '§aVIP'
            } else if (pl.hasTag('vipp')) {
                rank = '§aVIP§6+'
            } else {
                rank = 'None'
            }
        }
        var time = pl.getScore('playDays') + '天' + pl.getScore('playHours') + '小時' + pl.getScore('playMin') + '分鐘' + pl.getScore('playSec') + '秒'
        
        pl.rename('§b>§d'+pl.realName + '§b<\n§b>§a設備:' + os + '§b<\n§b>§6延遲:' + ping + '§b<\n§b>§9Rank:' +rank +'§b<\n§b>§eLv.' + pl.getScore('level') + '§b<\n§b>游玩時間' + time +'§b<')
    })
},1000)