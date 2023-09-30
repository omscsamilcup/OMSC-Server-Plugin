//轉賬系統
mc.listen("onServerStarted",()=>{
    var cmd = mc.newCommand('pay','轉賬系統',PermType.Any)
    cmd.mandatory('name', ParamType.Player)
    cmd.mandatory('money', ParamType.Int)
    cmd.overload(['name','money'])
    cmd.setCallback((_cmd,ori,_out,res) => {
        const {name,money} = res
        if (mc.getOnlinePlayers().includes(name)) {
            if (ori.player.realName >= money) {
                ori.player.reduceScore('money',money)
                mc.runcmd(`scoreboard players add money ${name} ${money * 0.9}`)
                ori.player.tell('§l§a你已成功轉賬' + money +'空島SC幣給玩家' + name)
                mc.runcmd(`tellraw ${ori.player.realName} {"rawtext":[{"text":"§l§a玩家${ori.player.realName}轉賬了${money}空島SC幣給你"}]}`)
            }
        } else {
            ori.player.tell('§l§c玩家不在綫')
        }
    })
    cmd.setup()
})