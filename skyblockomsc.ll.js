//LiteLoaderScript Dev Helper
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

//Sidebar
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        var str0 = '§l§e| §r§b玩家名稱$name'.replace('$name',pl.realName)
        var str1 = '§l§e| §r§b你有$moneySC空島幣'.replace('$money',pl.getScore('money'))
        var str2 = '§l§e| §r§b你的空島等級$level'.replace('$level',pl.getScore('level'))
        var str3 = '§l§e| §r§b你的延遲$ping'.replace('$ping',pl.getDevice().avgPing)
        var str4 = '§l§e| §r§b你的總游玩時間$playD天$playH小時$playm分鐘$plays秒'.replace('$playD',pl.getScore('playDays')).replace('$playH',pl.getScore('playHours')).replace('$playm',pl.getScore('playMin')).replace('$plays',pl.getScore('playSec'))
        var str5 = '§l§e| §r§b你的設備:$os'.replace('$os', pl.getDevice().os)
        var str6 = '§l§e| §r§b在綫人數:$online/100'.replace('$online', mc.getOnlinePlayers().length)
        var str7 = '§l§e| §r§b伺服器IP:omsctop.ddns.net(待定)'
        var str8 = '§l§e| §r§b埠:19133'
        var str9 = '§l§e| §r§b伺服器版本:MCPE$version'.replace('$version', mc.getBDSVersion())

        var arr = [str0,str1,str2,str3,str4,str5,str6,str7,str8,str9]

        var bar = '{"'
        for (var i in arr) {
            bar = bar + "\§r" + arr[i] + '":' + String(Number(i)+1) + ',"'
        }
        bar = bar.slice(0,-2) + '}'
        if (pl.getScore('score') == 0) {
            pl.removeSidebar()
            pl.setSidebar('§l§cO§6M§eS§aC§2伺§b服§d器', JSON.parse(bar),0)
        } else if (pl.getScore('score') == 1) {
            pl.removeSidebar()
        }
    }
}, 1000);

mc.listen("onServerStarted",() => {
    mc.regPlayerCmd('sidebar','開關計分板顯示',(pl) => {
        if (pl.getScore('score') == 1) {
            pl.setScore('score', 0)
            pl.tell("§l§a你已成功開啟計分板")
        } else if (pl.getScore('score') == 0) {
            pl.setScore('score',1)
            pl.tell('§l§c你已成功關閉計分板')
        }
    })
})

//商店系統
mc.listen("onServerStarted",()=>{
    var fm = mc.newSimpleForm()
    fm.setTitle('§l§9商店系統')
    fm.addButton('§l§9購買物品')
    fm.addButton('§l§9出售物品')

    var buy = mc.newSimpleForm()
    buy.setTitle('§l§9購買物品')
    buy.addButton('§l§9方塊類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2d/Plains_Grass_Block.png/revision/latest?cb=20190718020450')
    buy.addButton('§l§9礦物類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6a/Diamond_JE2_BE2.png/revision/latest?cb=20200612161112')
    buy.addButton('§l§9雜物類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/87/Blaze_Rod_JE1_BE1.png/revision/latest?cb=20190907013007')
    buy.addButton('§l§9裝飾類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f5/Peony_JE2_BE3.png/revision/latest?cb=20200612165418')
    buy.addButton('§l§9生怪磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/40/Spawner_JE3.png/revision/latest/scale-to-width-down/150?cb=20200612170702')

    var sell = mc.newSimpleForm()
    sell.setTitle('§l§9出售物品')
    sell.addButton('§l§9方塊類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2d/Plains_Grass_Block.png/revision/latest?cb=20190718020450')
    sell.addButton('§l§9礦物類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6a/Diamond_JE2_BE2.png/revision/latest?cb=20200612161112')
    sell.addButton('§l§9生怪磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/40/Spawner_JE3.png/revision/latest/scale-to-width-down/150?cb=20200612170702')

    var cmd = mc.newCommand('shop','商店',PermType.Any)
    cmd.setEnum('choose',['buy','sell'])
    cmd.optional('chose',ParamType.Enum,'choose',1)
    cmd.overload(['choose'])
    cmd.setCallback((_cmd,ori,_out,res) => {
        if (res.chose == 'buy') {
                ori.player.sendForm(buy,(pl,id) => {
                })
        }else if (res.chose == 'sell') {
            ori.player.sendForm(sell,(pl,id) => {
            
            })
        }else if (res.chose == null) {
            ori.player.sendForm(fm,(pl,id) => {
                if (id == 0) {
                    pl.sendForm(buy,(pl,id) => {

                    })
                } else if (id == 1) {
                    pl.sendForm(sell,(pl,id) => {

                    })
                }
            })
        }
    })
    cmd.setup()
})

//首次加入
//玩家首次進入
mc.listen('onJoin',(pl) => {
    if (pl.hasTag('first') == false) {
        pl.addScore('money',500)
        pl.setScore('playDays',0)
        pl.setScore('playHours',0)
        pl.setScore('playMin',0)
        pl.setScore('playSec',0)
        pl.addTag('first')
        mc.broadcast('§l§e歡迎新玩家' + pl.realName + '加入伺服器')
        log(pl.realName + '首次加入伺服器')

        var fm = mc.newSimpleForm()
        fm.setTitle('§l§c本§6伺§e服§a器§2條§b款')
        fm.setContent('§l§b歡迎你加入OMSC伺服器\n§e我是本服的服主，杯子小以下是一些有關本伺服器的條款，請仔細閲讀！§d\n1.伺服器會在你每次進入伺服器時記錄下你的IP、使用設備和你的Xuid\n2.伺服器的所有系統基本上都是由插件製作，如果有發現任何Bug，但是不回報，玩家將會處以重罰\n3.任何色情言論/粗俗語言，玩家都會被封禁1天-永久天，根據次數決定\n4.非因爲伺服器的原因而導致物品消失，本服將不予賠償(本服有記錄)\n5伺服器禁止使用外挂，違規者將會被永久封禁\n5如玩家遭到管理員的惡意判罰，例如無理由封禁，玩家需要在一天内到Discord開"回報工單"否則不予處理\n\n伺服器Discord連結https://discord.gg/VMN3cgeUBd \n\n\n§6伺服器條款到這裏，如果玩家接受本服的條款請按"同意伺服器退款"，不同意請按"不同意伺服器條款"\n\n\n\n伺服器Discord:https://discord.gg/VMN3cgeUBd')
        fm.addButton('§l§a同意伺服器條款')
        fm.addButton('§l§c不同意伺服器條款')
        pl.sendForm(fm,(pl,id) => {
            if (id == 0) {
                pl.tell('§l§b感謝你同意本服條款！')
                log(pl.realName + '同意伺服器條款')
                var confirm = {}
                confirm = data.parseJson(file.readFrom('plugins/主插件/terms.json'))
                confirm[pl.realName] = '在' + system.getTimeStr() + '同意伺服器條款'
                file.writeTo('plugins/主插件/terms.json', JSON.stringify(confirm,null,'\t'))
            } else if (id == 1) {
                mc.runcmd(`clear \"${pl.realName}\"`)
                pl.kick('§l§c你未能夠同意伺服器條款！')
                pl.removeTag('first')
                log(pl.realName + '不同意伺服器條款')
            } else if (id = 'Null') {
                mc.runcmd(`clear \"${pl.realName}\"`)
                pl.kick('§l§c你未能夠同意伺服器條款！')
                pl.removeTag('first')
                log(pl.realName + '不同意伺服器條款')
            }
        })
    }
})

//防刷屏
mc.listen("onPlayerCmd",(pl,cmd) => {
    if (cmd.includes('@e') || cmd.includes('@a') || cmd.includes('@p') || cmd.includes('@r')) {
        pl.tell('§l§c請不要嘗試刷屏')
        return false
    }
})

setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        if (pl.getScore('antispam') > 0) {
            pl.reduceScore('antispam', 1)
        }
        if (pl.getScore('antispam2') == 3) {
            pl.setScore('antispam2', 0)
            pl.kick('§l§c你在短時間的聊天速度太快/字數太多了，你暫時已被踢出伺服器。重新進入伺服器則可。')
        }
    }
},1000)

setInterval(()=>{
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        if (pl.getScore('antispam2') > 0) {
            pl.reduceScore('antispam2', 1)
        }
    }
},10000)

//在綫獎勵
mc.listen("onServerStarted",() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        setInterval(() => {
            pl.addScore('money', 100)
            mc.broadcast('§l§e在綫獎勵已派發')
        },1800000)
    }
})

//簽到系統
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('daily','簽到',PermType.Any)
    cmd.setAlias('dm')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res)=>{
        var pl = ori.player
        if (pl.getScore('daily') == 0) {
            pl.addScore('daily',1)
            pl.addScore('money', 500)
            pl.tell('§l§a你已成功簽到，獲得500SC幣')
        } else if (pl.getScore('daily') == 1) {
            pl.tell('§l§c你今天已經簽到了，請等待明天！')
        }
    })
    cmd.setup()
    
    setInterval(() => {
        var tm = system.getTimeObj()
        if (tm.m == 0 && tm.s == 0 && tm.h == 0) {
            mc.removeScoreObjective('daily')
            mc.newScoreObjective('daily','簽到')
            mc.broadcast('§l§b簽到已刷新')
        }
    },1000)
})
mc.listen("onJoin",(pl) => {
    if (pl.getScore('daily') == 0) {
        pl.tell('§l§d你今天還沒進行簽到，輸入/daily或/dm來簽到吧！')
    }
})

//ScoreBoard
mc.listen('onServerStarted',() => {
    mc.regConsoleCmd('score','加載計分板',() => {
        var score = ['money','level','playSec','playMin','playHours','playDays','score','antispam','antispam2','daily']
        var score_name = ['空島SC幣','等級','秒','分','小時','天','開關計分板','防刷屏','防刷屏2','簽到']
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

//游玩時間計算
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
    var pl = pls[pl]
        pl.addScore('playSec',1)
        if (pl.getScore('playSec') >= 60) {
            pl.addScore('playMin', 1)
            pl.reduceScore('playSec', 60)
        }
        if (pl.getScore('playMin') >= 60) {
            pl.addScore('playHours', 1)
            pl.reduceScore('playMin',60)
        }
        if (pl.getScore('playHours') >= 24) {
            pl.addScore('playDays', 1)
            pl.reduceScore('playHours', 1)
        }
    }
},1000)

//玩家資料
mc.listen("onJoin",(pl) => {
    var record = {}
    let dv = pl.getDevice()
    record = data.parseJson(file.readFrom('plugins/主插件/data.json'))
    record[pl.realName] = {}
    record[pl.realName].xuid = pl.xuid
    record[pl.realName].os = dv.os
    record[pl.realName].ip = dv.ip
    file.writeTo('plugins/主插件/data.json', JSON.stringify(record,null,"\t"))
})