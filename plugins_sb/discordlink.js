//Discord
mc.listen('onServerStarted',() => {
    mc.regPlayerCmd('discord','獲取伺服器Discord群組連結', (pl) => {
        pl.tell('§l§6本服Discord代碼:VMN3cgeUBd')
    })
    mc.regPlayerCmd('dc','獲取伺服器Discord群組連結', (pl) => {
        pl.tell('§l§6本服Discord代碼:VMN3cgeUBd')
    })
})