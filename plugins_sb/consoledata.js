//後臺顯示資料
mc.listen('onJoin', function(player) {
    var ip = {}
    var dv = player.getDevice()
    colorLog("yellow", `玩家${player.realName}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入是的延遲是${dv.avgPing}`)
})