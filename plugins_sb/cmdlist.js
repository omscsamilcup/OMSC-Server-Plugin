//指令列表提示
mc.listen('onServerStarted',() => {
    var cmd = mc.newCommand('cmdhelp','指令列表',PermType.Any)
    cmd.setEnum('choose',['ui','msg'])
    cmd.optional('chose',ParamType.Enum,'choose',1)
    cmd.overload('chose')

    cmd.setCallback((_cmd,ori,_out,res) => {
        var not_op = '§l§e===§r§b空島類指令§l§e===§r\n§d/is --- 打開空島選單/創建新空島\n/is accept --- 接受空島邀請\n/is create --- 創建空島\n/is delete --- 刪除空島\n/is home --- 返回空島\n/is invite --- 向玩家發送一個空島邀請訊息\n/is level --- 計算你的空島等級\n/is permission --- 空島權限設置\n/is refuse --- 拒絕來自其他玩家的空島邀請\n/is top --- 空島等級排行榜\n/is spawn --- 設置空島返回點\n/is warp create --- 創建空島傳送點\n/is warp list --- 獲取空島傳送點列表\n/is warp get --- 打開空島傳送點GUI\n/is warp remove --- 刪除空島傳送點\n/is warp set --- 設置是否公開空島傳送點\n§l§e===§r§b伺服器主插件指令§e===§r\n§d/bossbar --- 開關Bossbar\n/cmdhelp --- 查看本服指令列表\n/daily --- 簽到(00:00重置)\n/dc --- 查看本服Discord群組連結\n/discord --- 查看本服Discord群組連結\n/donate --- 贊助者選單\n/guessright --- 獲得猜數字游戲的資料\n/highshop --- 高級商店\n/hub --- 返回大廳\n/lottery --- 抽獎系統(1)\n/menu --- 伺服器選單系統\n/pay --- 轉賬系統\n/rank --- 伺服器Rank商店\n/shop --- 伺服器商店系統\n/spinshop --- 抽獎系統(2)\n/sidebar --- 開關計分板\n§l§e===§r§b伺服器其他插件指令§e===§r\n§d/cdk --- 兌換Code\n/guess --- 猜數字游戲\n/top --- 伺服器排行榜'
        var op = '§l§e===§r§b空島類指令§l§e===§r\n§d/is --- 打開空島選單/創建新空島\n/is accept --- 接受空島邀請\n/is create --- 創建空島\n/is delete --- 刪除空島\n/is home --- 返回空島\n/is invite --- 向玩家發送一個空島邀請訊息\n/is level --- 計算你的空島等級\n/is permission --- 空島權限設置\n/is refuse --- 拒絕來自其他玩家的空島邀請\n/is top --- 空島等級排行榜\n/is spawn --- 設置空島返回點\n/is warp create --- 創建空島傳送點\n/is warp list --- 獲取空島傳送點列表\n/is warp get --- 打開空島傳送點GUI\n/is warp remove --- 刪除空島傳送點\n/is warp set --- 設置是否公開空島傳送點\n§l§e===§r§b伺服器主插件指令§e===§r\n§d/bossbar --- 開關Bossbar\n/cmdhelp --- 查看本服指令列表\n/daily --- 簽到(00:00重置)\n/dc --- 查看本服Discord群組連結\n/discord --- 查看本服Discord群組連結\n/donate --- 贊助者選單\n/highshop --- 高級商店\n/hub --- 返回大廳\n/lottery --- 抽獎系統(1)\n/menu --- 伺服器選單系統\n/pay --- 轉賬系統\n/rank --- 伺服器Rank商店\n/shop --- 伺服器商店系統\n/spinshop --- 抽獎系統(2)\n/sidebar --- 開關計分板\n§l§e===§r§b伺服器其他插件指令§l§e===§r\n§d/cdk --- 兌換Code\n/guess --- 猜數字游戲\n/top --- 伺服器排行榜\n§l§e===§r§b管理員指令§l§e===\n§r§d/is manage --- 管理玩家空島\n/is setworld --- 設置世界權限\n/nbt --- 獲得物品NBT\n/admin --- 打開管理員選單\n/cddksetting --- 設置CDKey Code\n/motd --- 設置伺服器Motd\n/ench --- 附魔突破的附魔\n/ban --- 封禁玩家\n/unban --- 取消封禁玩家\n/math --- 猜數字游戲\n/wnrestart --- 重開伺服器\n/wnstop --- 關閉伺服器(15s)\n/stopser --- 關閉伺服器(5s)'
        var pl = ori.player
        

        var msg = {}
        if (pl.isOP()) {
            msg = op
        } else  {
            msg = not_op
        }
        
        var fm = mc.newCustomForm()
        fm.setTitle('§l§b指令列表')
        fm.addLabel(msg)

        if (res.chose == 'msg') {
            pl.tell(msg)
        } else if (res.chose == 'ui') {
            pl.sendForm(fm,(_pl,_data) => {

            })
        } else if (res.chose == null) {
            pl.tell(msg)
        }
    })
    cmd.setup()
})