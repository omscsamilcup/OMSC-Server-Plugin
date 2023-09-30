//加入訊息
mc.listen('onJoin', (pl) => {
    if (pl.hasTag('vip')) {
        mc.broadcast('§a歡迎VIP玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('vipp')) {
        mc.broadcast('§a歡迎VIP§6+§a玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('vippp')) {
        mc.broadcast('§a歡迎VIP§6++§a玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('mvp')) {
        mc.broadcast('§6歡迎MVP§6玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('mvpp')) {
        mc.broadcast('§6歡迎MVP§c+§6玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('mvppp')) {
        mc.broadcast('§6歡迎MVP§c++§6玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('yt')) {
        mc.broadcast('§c歡迎YouTube玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('team')) { 
        mc.broadcast('§b歡迎伺服器團隊成員' + pl.realName + '加入伺服器')
    } else{
        mc.broadcast('§f歡迎玩家' + pl.realName + '加入伺服器')
    }
})