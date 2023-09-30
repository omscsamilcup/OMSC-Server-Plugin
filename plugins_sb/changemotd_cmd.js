//更改Motd
mc.listen("onServerStarted",() => {
    const cmd = mc.newCommand('motd', "設定伺服器motd");
    cmd.mandatory('motd', ParamType.String);
    cmd.overload(['motd']);
    cmd.setCallback((_cmd, _ori, out, res)=>{
        const { motd } = res
        mc.setMotd(`${motd}`);
        out.success("§l§eMotd已更換成§r" + motd)
    });
    cmd.setup()
    colorLog('yellow',`Motd插件成功加載`)
})