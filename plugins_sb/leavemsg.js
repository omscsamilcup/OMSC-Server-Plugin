//離開訊息
mc.listen('onLeft', (pl) => {
    if (pl.hasTag('vip')) {
        mc.broadcast('§aVIP玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('vipp')) {
        mc.broadcast('§aVIP§6+§a玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('vippp')) {
        mc.broadcast('§aVIP§6++§a玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('mvp')) {
        mc.broadcast('§6MVP§6玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('mvpp')) {
        mc.broadcast('§6MVP§c+§6玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('mvppp')) {
        mc.broadcast('§6MVP§c++§6玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('yt')) {
        mc.broadcast('§cYouTube玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('team')) { 
        mc.broadcast('§b伺服器團隊成員' + pl.realName + '離開伺服器')
    } else{
        mc.broadcast('§f玩家' + pl.realName + '離開伺服器')
    }
})