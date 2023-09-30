//拿NBT Data
mc.listen("onServerStarted",()=>{
    var cmd = mc.newCommand('nbt', 'getnbt')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        var itemnbt = ori.player.getHand()
        var nbt = itemnbt.getNbt().toSNBT()
        log(nbt)
    })
    cmd.setup()
})