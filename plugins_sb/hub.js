//返回大廳指令
mc.listen('onServerStarted',() => {
    var cmd = mc.newCommand('hub','返回大廳',PermType.Any)
    cmd.setAlias('lobby')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.teleport(0,4,7,0)
        ori.player.tell('§l§a你已回到大廳')
    })
    cmd.setup()
})