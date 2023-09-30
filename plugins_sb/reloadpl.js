//reload本插件
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('resc',"§l§e重新加載OMSC空島插件")
    cmd.overload()
    cmd.setCallback((_cmd,_ori,out,_res) => {
        var plugins = ['10smoney.js','adminmenu.js','anticrash.js','antispam.js','belowname.js','bossbar.js','changemotd_auto.js','changemotd_cmd.js','cmdlist.js','coins.js','consoledata.js','dailysign.js','discordlink.js','donatemenu.js','firstjoin.js','fly.js','getnbt.js','highshop.js','hub.js','joinmsg.js','leavemsg.js','lottery.js','lottery2.js','menu.js','onlinereward.js','playdata.js','playtime.js','rankshop.js','scordboardset.js','shop.js','sidebar.js','stopser.js','transfer.js']
        out.success('§l§e正在重新加載插件...')
        setTimeout('§l§e插件已重新加載',5000)
        for (var a = 1; a == plugins.length;a++) {
            mc.runcmd(`ll reload ${plungins[a]}`)
        }
        out.success(`§l§a已成功重新加載${a}個插件`)
        mc.runcmd('ll reload reloadpl.js')
    })
    cmd.setup()
})