//ScoreBoard
mc.listen('onServerStarted',() => {
    mc.regConsoleCmd('score','加載計分板',() => {
        var score = ['money','level','playSec','playMin','playHours','playDays','score','antispam','antispam2','daily','point','ownercoins','spin1','spin2','spin3','spin4','spin5','spin6','spin7','bossbar','fly']
        var score_name = ['空島SC幣','等級','秒','分','小時','天','開關計分板','防刷屏','防刷屏2','簽到','點數','服主幣','spin1','spin2','spin3','spin4','spin5','spin6','spin7','bossbar','fly']
        var a = 0
        if (score.length == score_name.length) {
            while (a < score.length) {
                mc.newScoreObjective(score[a],score_name[a])
                a += 1
            }
            log('完成安裝計分板')
        } else if (score.length != score_name.length) {
            log ('出現重大錯誤，無法成功加載')
            mc.runcmd('ll unload emeraldomsc.ll.js')
        }
    })
})