//LiteLoaderScript Dev Helper
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "omsc綠寶石伺服器插件",
    /* introduction */ "OMSC插件",
    /* version */ [0,0,1],
    /* otherInformation */ {}
); 


//reload本插件
mc.regPlayerCmd('resc', "§l§e重新加載OMSC綠寶石插件",(pl) => {
    if (pl.isOP()) {
        pl.tell('§l§e正在重新加載插件...')
        setTimeout('§l§e插件已重新加載',5000)
        mc.runcmd('ll reload emeraldomsc.ll.js')
    } else {
        pl.tell('§l§c你不是管理員，無法使用該指令')
    }
})

//計分板
mc.listen('onServerStarted',() => {
    mc.regConsoleCmd('score','加載計分板',() => {
        var score = ['money','level','exp','times','playSec','playMin','playHours','playDays','point','ownercoins', 'rebirth','score','antispam','antispam2','daily']
        var score_name = ['SC幣','等級','經驗值','挖掘次數','秒','分','小時','天','點數','服主幣','重生次數','開關計分板','防刷屏','防刷屏2','簽到']
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

//玩家首次進入
mc.listen('onJoin',(pl) => {
    if (pl.hasTag('first') == false) {
        pl.giveItem(mc.newItem(NBT.parseSNBT('{Count:1b,tag:{generation:0,xuid:"",pages:[{text:"§l§g歡迎你來到OMSC伺服器\n§l§b目前有多項功能可以使用\n§d1.§9Rank系統\n§d2.§9轉帳系統\n§d3.§9簽到系統\n§d4.§9選單系統\n§d5.§9經濟系統\n§d6.§9商店系統\n§d7.§9等級系統\n§d8.§9計分板系統\n§d9.§9重生系統\n§d10.§9贊助者系統\n§d11.§9在線獎勵系統",photoname:""},{text:"§l§d12.§9挖掘系統\n§d13.§9效果系統\n§d14.§9防掛系統\n§d15.§9傳送系統\n§d16.§9抽獎系統\n§d17.§9聊天系統\n§a以上都是由本服插件師Br寫的\n之後有可能再增加",photoname:""},{text:"§l§9Rank系統\n§b購買Rank是要花Sc幣\n§g一般的Rank§c(就是後面沒加D的)\n§g可以用Sc幣購買必須照順序購買\n§l§gYt訂閱要150+ 必須放一個宣傳影片 觀看數要50+ 目前購買途徑有兩種 一種是打開羅盤 另一種是在聊天框輸入/rank\n",photoname:""},{text:"§l§9轉帳系統\n§g/pay\n每一筆轉帳都會抽10%\n轉帳單位為Sc幣作為計算\n如果轉帳者不在線\n會顯示不能轉帳\n輸入錯誤也會提醒",photoname:""},{text:"§l§9簽到系統\n§g/sign\n每天每一個人固定簽到一次\n過了午夜12點才能再簽到一次\n每天上線都會做提醒\n不能進行補簽",photoname:""},{text:"§l§9選單系統\n§g目前伺服器大部分重要功能\n都採以選單式的來簡化\n都以羅盤打開\n如果羅盤不見\n可以用/menu來開啟",photoname:""},{text:"§l§9經濟系統\n§g本伺服器擁有完善的經濟系統\n貨幣分成Sc幣，服主幣以及點數\n目前點數是用贊助伺服器\n才能獲得\n而Sc幣可以透過挖礦獲得\n服主幣也能進行兌換Sc幣\n服主幣要用抽獎",photoname:""},{text:"§l§9商店系統\n§g有分高級商店和一般商店\n一般商店有賣工具類附魔類\n裝備類而附魔是給書本\n高級商店\n§c請注意不能販賣給其他玩家\n如果發現直接封禁\n§g裡面有賣高級物品但必須是贊助者才能使用",photoname:""},{text:"§l§9等級系統\n§g目前獎勵的計算辦法為\n每升級一等將會給予\n等級*等級*2的Sc幣\n而目前Sc幣為本服的主要通用貨幣",photoname:""},{text:"§l§9計分板系統\n§g本服的計分板都是伺服器團隊\n精心設計的沒有一服會一樣\n都是經過反覆調整\n符合最佳視線的設計\n經過設計視線的隔擋畫最小了\n也可以透過/sidebar關閉顯示\n功能性十足都看到各人的信息\n不再像傳統的伺服器\n要一直打指令才能知道信息\n",photoname:""},{text:"§l§9重生系統\n§g目前分成八個等級\n如果到達了會跳出提示（後面21頁）\n重生後你的Rank會清除（不包括贊助者）然後會清除經驗，等級，sc幣包括身上的所有東西終界箱也會清除\n而重生後會增加1個綠寶石兌換Sc幣量\n沒重生1綠寶石=1sc幣\n重生1的1個綠寶石=2sc幣\n重生2的1個綠寶石=3綠寶石",photoname:""},{text:"§l§9贊助者系統\n§g目前本服的贊助者\n享受到的福利非常好\n不僅有高級商店還有能購買Rank贊助的相關細節在DC裡面有\n還有特別的聊天訊息\n本服的點數可以用贊助換來\n目前贊助者每秒會獲得75Sc幣",photoname:""},{text:"§l§9在線獎勵系統\n§g本服很佛心只要在線上\n都會有獎勵就算是掛機也會有\n一般玩家每三十分鐘獲得200Sc\n",photoname:""},{text:"§l§9挖掘系統\n§g目前升等的計算方式為\n等級*等級*5+5\n每挖掘綠寶石礦一次\n增加經驗一次\n可以透過附魔來增加效率\n",photoname:""},{text:"§l§9效果系統\n§g此系統是專門為贊助者設計的\n有心型\n水粒子\n氣泡水\n煙霧\n龍之吐息\n等等別人一眼就能看出你的身份地位十分炫泡",photoname:""},{text:"§l§9防掛系統\n§g目前本服封禁\n非法NBT\n就是不是透過正常管道取得的\n如果被發現將以封禁處理\n另外也嚴格禁止任何會讓\n伺服器崩掉或卡頓的東西\n就算沒有開掛就是違規請不要嘗試如果發現玩家有利用遊戲漏洞並未回報者會連同知情不報者連同處分如果有相關檢舉請去Dc檢舉",photoname:""},{text:"§l§9傳送系統\n§g傳送的區域有\n大廳\n普通礦場\nVIP礦場\nVIP+礦場\nMVP礦場\nMVP+礦場\nMVP++礦場\n以上都能透過傳送選單進行傳送",photoname:""},{text:"§l§9聊天系統\n§g本服的聊天插件都是服主自己寫\n因為不同的階級也會有不同的聊天顏色",photoname:""},{text:"§l§9抽獎系統\n§g目前抽獎活動都是不定時的\n如果有活動都會在Dc上進行公告\n抽獎有機會獲得服主幣，Sc幣，點數\n獎金豐厚請各位玩家多多關注Dc",photoname:""},{text:"§l§9重生升級需求\n§g1.500 10000000\n2.750 50000000\n3.1000 100000000\n4.1250 150000000\n5.1500 200000000\n6.1750 250000000\n7.2000 300000000\n8.2250 350000000\n每個重生等級都要擁有\nMvp,MVp+",photoname:""}],title:"§l§e[§aOMSC§e]\n§b新手須知\n§c(如果有不懂的請去dc詢問)",author:""},Damage:0s,WasPickedUp:0b,Name:"minecraft:written_book"}')))
        pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:iron_pickaxe","WasPickedUp":0b,"tag":{"Damage":0}}')))
        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:compass","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§l§b選單"}}}')))
        pl.addScore('money',500)
        pl.setScore('level', 0)
        pl.setScore('exp', 0)
        pl.setScore('rebirth', 0)
        pl.setScore('ownercoins',0)
        pl.setScore('point',0)
        pl.setScore('playDays',0)
        pl.setScore('playHours',0)
        pl.setScore('playMin',0)
        pl.setScore('playSec',0)
        pl.setScore('score',0)
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
                pl.removeTag('first')
                pl.setScore('money',0)
                pl.kick('§l§c你未能夠同意伺服器條款！')
                log(pl.realName + '不同意伺服器條款')
            } else if (id = 'Null') {
                mc.runcmd(`clear \"${pl.realName}\"`)
                pl.removeTag('first')
                pl.setScore('money',0)
                pl.kick('§l§c你未能夠同意伺服器條款！')
                log(pl.realName + '不同意伺服器條款')
            }
        })
    }
})

//聊天訊息
mc.listen('onChat',(pl,msg)=> {
    if (msg.length > 50 && pl.hasTag('team') == false) {
        pl.tell('§l§c請不要嘗試刷屏')
        pl.addScore('antispam2', 1)
        return false
    } else if (pl.getScore('antispam') != 0) {
        pl.tell('§l§c你在短時間的聊天次數過多，請暫停下來！')
        pl.addScore('antispam2', 1)
    }else if (pl.hasTag('team')) {
        if (pl.hasTag('owner')) {
            mc.broadcast('§8[§cOwner§8]§e' + pl.realName + '§b>>§6' + msg)
        } else if (pl.hasTag('admin')) {
            mc.broadcast('§8[§gAdmin§8]§6' + pl.realName + '§b>>§b' + msg) 
        } else if (pl.hasTag('builder')) {
            mc.broadcast('§8[§aBuilder§8]§e' + pl.realName + '§b>>§e' + msg)
        } else if (pl.hasTag('bugs')) {
            mc.broadcast('§8[§dVulnerability Checker§8]§e' + pl.realName + '§b>>§a' + msg)
        } else if (pl.hasTag('develop')) {
            mc.broadcast('§8[§bPlugins Develop§8]§e' + pl.realName + '§b>>§c' + msg) 
        } else if (pl.hasTag('helpadmin')) {
            mc.broadcast('§8[§9Auxiliary Admin§8]§e' + pl.realName + '§b>>§1' + msg)
        }
    } else if (pl.hasTag('donate')) {
        pl.addScore('antispam', 3)
        if (pl.hasTag('mvp')) {
            mc.broadcast('§b[MVP(D)] ' + pl.realName + '§b>>§e' + msg)
        } else if (pl.hasTag('mvpp')){
            mc.broadcast('§b[MVP§c+§b(D)]' + pl.realName + '§b>>§d' + msg)
        } else if (pl.hasTag('mvppp')) {
            mc.broadcast('§6[MVP§c++§6(D)]' + pl.realName + '§b>>§b' + msg)
        } else if ('vip'){
            mc.broadcast('§a[VIP(D)]' + pl.realName + '§b>>§6' + msg)
        } else if ('vipp') {
            mc.broadcast('§a[VIP§6+§a(D)]' + pl.realName + '§b>>§6' + msg)
        } 
    } else {
        pl.addScore('antispam', 5)
        if (pl.hasTag('yt')) {
            mc.broadcast('§c[§fYOUTUBE§c]' + pl.realName + '§b>>§f' + msg)
        } else if (pl.hasTag('mvp')) {
            mc.broadcast('§b[MVP] ' + pl.realName + '§b>>§e' + msg)
        } else if (pl.hasTag('mvpp')){
            mc.broadcast('§b[MVP§c+§b]' + pl.realName + '§b>>§d' + msg)
        } else if (pl.hasTag('vip')){
            mc.broadcast('§a[VIP]' + pl.realName + '§b>>§6' + msg)
        } else if (pl.hasTag('vipp')) {
            mc.broadcast('§a[VIP§6+§a]' + pl.realName + '§b>>§6' + msg)
        } else if (pl.hasTag('vipp')) {
            mc.broadcast('§a[VIP§6++§a]' + pl.realName + '§b>>§6' + msg)
        } else {
            mc.broadcast('§f[Player]' + pl.realName + '>>' + msg)
        }
    }
    return false
})

//加入訊息
mc.listen('onJoin', (pl) => {
    if (pl.hasTag('vip')) {
        mc.broadcast('§a歡迎VIP玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('vipp')) {
        mc.broadcast('§a歡迎VIP§6+§a玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('vippp')) {
        mc.broadcast('§a歡迎VIP§6++§a玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('mvp')) {
        mc.broadcast('§6歡迎MVP§6玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('mvpp')) {
        mc.broadcast('§6歡迎MVP§c+§6玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('mvppp')) {
        mc.broadcast('§6歡迎MVP§c++§6玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('yt')) {
        mc.broadcast('§c歡迎YouTube玩家' + pl.realName + '加入伺服器')
    } else if (pl.hasTag('team')) { 
        mc.broadcast('§b歡迎伺服器團隊成員' + pl.realName + '加入伺服器')
    } else{
        mc.broadcast('§f歡迎玩家' + pl.realName + '加入伺服器')
    }
})

//離開訊息
mc.listen('onLeft', (pl) => {
    if (pl.hasTag('vip')) {
        mc.broadcast('§aVIP玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('vipp')) {
        mc.broadcast('§aVIP§6+§a玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('vippp')) {
        mc.broadcast('§aVIP§6++§a玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('mvp')) {
        mc.broadcast('§6MVP§6玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('mvpp')) {
        mc.broadcast('§6MVP§c+§6玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('mvppp')) {
        mc.broadcast('§6MVP§c++§6玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('yt')) {
        mc.broadcast('§cYouTube玩家' + pl.realName + '離開伺服器')
    } else if (pl.hasTag('team')) { 
        mc.broadcast('§b伺服器團隊成員' + pl.realName + '離開伺服器')
    } else{
        mc.broadcast('§f玩家' + pl.realName + '離開伺服器')
    }
})

//後臺顯示資料
mc.listen('onJoin', function(player) {
    var ip = {}
    var dv = player.getDevice()
    colorLog("yellow", `玩家${player.name}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入是的延遲是${dv.avgPing}`)
})

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

//關閉伺服器
mc.listen('onServerStarted',() => {
    mc.regPlayerCmd('stopser', '§l§c關閉伺服器',function(pl){
        if (pl.isOP() == true) {
            mc.broadcast('§l§c伺服器將在5秒後關閉')
            setTimeout(`mc.broadcast('§l§c伺服器將在4秒後關閉')`,1000)
            setTimeout(`mc.broadcast('§l§c伺服器將在3秒後關閉')`,2000)
            setTimeout(`mc.broadcast('§l§c伺服器將在2秒後關閉')`,3000)
            setTimeout(`mc.broadcast('§l§c伺服器將在1秒後關閉')`,4000)
            setTimeout(`mc.broadcast('§l§c伺服器將在0秒後關閉')`,4500)
            setTimeout(`mc.runcmd('stop')`,5000)
        } else {
            pl.tell('§l§c你不是管理員無法使用該指令')
        }
    })
})

//Bossbar
mc.listen('onJoin',(pl) => {
    pl.setBossBar(1,'§l§c歡迎§6你加§e入本§a伺服§2器，§b請你§d記得§c加入§6本服§eDiscord', 100,8)
})

//Discord
mc.listen('onServerStarted',() => {
    mc.regPlayerCmd('discord','獲取伺服器Discord群組連結', (pl) => {
        pl.tell('§l§6本服Discord代碼:VMN3cgeUBd')
    })
    mc.regPlayerCmd('dc','獲取伺服器Discord群組連結', (pl) => {
        pl.tell('§l§6本服Discord代碼:VMN3cgeUBd')
    })
})

//購買Rank
mc.listen('onServerStarted',() => {
    var fm = mc.newSimpleForm()
    fm.setTitle('§l§e伺服器Rank商店')
    fm.setContent('§d點擊以下Rank便可購買，(D)的意思是Donate(贊助)，需要到Discord贊助，YouTube是要到Discord申請')
    fm.addButton('§aVIP')
    fm.addButton('§aVIP§6+')
    fm.addButton('§aVIP§6++')
    fm.addButton('§bMVP')
    fm.addButton('§bMVP§c+')
    fm.addButton('§aVIP§a(D)')
    fm.addButton('§aVIP§6+§a(D)')
    fm.addButton('§bMVP(D)')
    fm.addButton('§bMVP§c+§b(D)')
    fm.addButton('§6MVP§c++§6(D)')
    fm.addButton('§fYou§cTube')
    var cmd  = mc.newCommand('rank', '伺服器Rank商店', PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(fm,(player,id) => {
            if (id == 0) {
                if (player.hasTag('vip') == false && player.hasTag('vipp') == false && player.hasTag('vippp') == false && player.hasTag('mvp') == false && player.hasTag('mvpp') == false && player.hasTag('mvppp') == false && player.hasTag('team') == false && player.hasTag('yt') == false) {
                    if (player.getScore('money') >= 5000) {
                        player.addTag('vip')
                        player.reduceScore('money', 5000)
                        player.tell('§l§b成功購買§aVIP')
                        log(pl.realName + '購買了VIP')
                    } else {
                        var need = 5000 - player.getScore('money')
                        player.tell('§l§c你的SC幣不足，需要5000SC幣。你還差' + need)
                    }
                } else {
                    player.tell('§l§c你可能已經擁有更高級的Rank')
                }
            } else if (id == 1) {
                if (player.hasTag('vip') == true && player.hasTag('vipp') == false && player.hasTag('vippp') == false && player.hasTag('mvp') == false && player.hasTag('mvpp') == false && player.hasTag('mvppp') == false && player.hasTag('team') == false && player.hasTag('yt') == false) {
                    if (player.getScore('money') >= 10000) {
                        player.addTag('vipp')
                        player.removeTag('vip')
                        player.reduceScore('money', 10000)
                        player.tell('§l§b成功購買§aVIP§6+')
                        log(pl.realName + '購買了VIP+')
                    } else {
                        var need = 10000 - player.getScore('money')
                        player.tell('§l§c你的SC幣不足，需要10000SC幣。你還差' + need)
                    }
                } else if (player.hasTag('vip') == false && player.hasTag('vipp') == false&&player.hasTag('vippp') == false && player.hasTag('mvp') == false && player.hasTag('mvpp') == false&& player.hasTag('mvppp') == false && player.hasTag('yt') == false && player.hasTag('team') == false){
                    player.tell('§l§c你未擁有§aVIP §cRank，所以無法購買')
                } else {
                    player.tell('§l§c你已經擁有更高級的Rank')
                }
            } else if (id == 2) {
                if (player.hasTag('vip') == false && player.hasTag('vipp') == true && player.hasTag('vippp') == false && player.hasTag('mvp') == false && player.hasTag('mvpp') == false && player.hasTag('mvppp') == false && player.hasTag('team') == false&& player.hasTag('yt') == false) {
                    if (player.getScore('money') >= 25000) {
                        player.addTag('vippp')
                        player.removeTag('vipp')
                        player.reduceScore('money', 25000)
                        player.tell('§l§b成功購買§aVIP++')
                        log(pl.realName + '購買了VIP++')
                    } else {
                        var need = 25000 - player.getScore('money')
                        player.tell('§l§c你的SC幣不足，需要25000SC幣。你還差' + need)
                    }
                } else if (player.hasTag('vipp') == false && player.hasTag('vippp') == false && player.hasTag('mvp') == false && player.hasTag('mvpp') == false&& player.hasTag('mvppp') == false&& player.hasTag('yt') == false) {
                    player.tell('§l§c你未擁有§aVIP§6+ §cRank，所以無法購買')
                } else {
                    player.tell('§l§c你已經擁有更高級的Rank')
                }
            }else if (id == 3) {
                if (player.hasTag('vip') == false && player.hasTag('vipp') == false && player.hasTag('vippp') == true && player.hasTag('mvp') == false && player.hasTag('mvpp') == false && player.hasTag('mvppp') == false && player.hasTag('team') == false&& player.hasTag('yt') == false) {
                    if (player.getScore('money') >= 50000) {
                        player.addTag('mvp')
                        player.removeTag('vippp')
                        player.reduceScore('money', 50000)
                        player.tell('§l§b成功購買§bMVP')
                        log(pl.realName + '購買了MVP')
                    } else {
                        var need = 25000 - player.getScore('money')
                        player.tell('§l§c你的SC幣不足，需要50000SC幣。你還差' + need)
                    }
                } else if (player.hasTag('vippp') == false && player.hasTag('mvp') == false && player.hasTag('mvpp') == false&& player.hasTag('mvppp') == false && player.hasTag('yt') == false){
                    player.tell('§l§c你未擁有§aVIP§6++ §cRank，所以無法購買')
                } else {
                    player.tell('§l§c你已經擁有更高級的Rank')
                }
            } else if (id == 4) {
                if (player.hasTag('vip') == false && player.hasTag('vipp') == false && player.hasTag('vippp') == false && player.hasTag('mvp') == true && player.hasTag('mvpp') == false && player.hasTag('mvppp') == false && player.hasTag('team') == false && player.hasTag('yt') == false) {
                    if (player.getScore('money') >= 100000) {
                        player.addTag('mvpp')
                        player.removeTag('mvp')
                        player.reduceScore('money', 100000)
                        player.tell('§l§b成功購買§bMVP§c+')
                        log(pl.realName + '購買了MVP+')
                    } else {
                        var need = 100000 - player.getScore('money')
                        player.tell('§l§c你SC幣不足，需要100000SC幣。你還差' + need)
                    }
                } else if (player.hasTag('mvp') == false && player.hasTag('mvpp') == false&& player.hasTag('mvppp') == false && player.hasTag('yt') == false){
                    player.tell('§l§c你未擁有§bMVP §cRank，所以無法購買')
                } else {
                    player.tell('§l§c你已經擁有更高級的Rank')
                }
            } else if (id >= 5 && id < 10) {
                player.tell('§l§c此Rank需要贊助伺服器才可以獲得')
            } else if (id == 10) {
                player.tell('§l§b此Rank需要到Discord申請§fYou§cTube §bRank')
            }
        })
    })
    cmd.setup();
})

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

//Sidebar
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls){
        var pl = pls[pl]
        var dv = pl.getDevice()
        var rank = {}
        if (pl.hasTag('vip')) {
            rank = '§aVIP'
        } else if (pl.hasTag('vipp')) {
            rank = '§aVIP§6+'
        } else if (pl.hasTag('vippp')) {
            rank = '§aVIP§6++'
        } else if (pl.hasTag('mvp')) {
            rank = '§bMVP'
        } else if (pl.hasTag('mvpp')) {
            rank = '§bMVP§c+'
        } else if (pl.hasTag('mvppp')) {
            rank = '§bMVP§c++'
        } else if (pl.hasTag('team')) {
            rank = '§6Server Team'
        } else {
            rank = 'Null'
        }

        var str0 = '§l§e|§r §b玩家名稱: $o.name'.replace('$o.name', pl.realName)
        var str1 = '§l§e|§r §b你擁有$o.money SC幣'.replace('$o.money', pl.getScore('money'))
        var str2 = '§l§e|§r §b服主幣$o.ownermoney 點數$o.point'.replace('$o.ownermoney', pl.getScore('ownercoins')).replace('$o.point', pl.getScore('point'))
        var str3 = '§l§e|§r §b你的重生次數$o.rebirth'.replace('$o.rebirth', pl.getScore('rebirth'))
        var str4 = '§l§e|§r §b你的等級:$o.level($o.exp)'.replace('$o.level', pl.getScore('level')).replace('$o.exp', pl.getScore('exp'))
        var str5 = '§l§e|§r §b你的延遲:$o.pingms'.replace('$o.ping', dv.avgPing)
        var str6 = '§l§e|§r §b你的總游玩時間$o.playD天$o.playH小時$o.playm分鐘$o.plays秒'.replace('$o.playD',pl.getScore('playDays')).replace('$o.playH',pl.getScore('playHours')).replace('$o.playm',pl.getScore('playMin')).replace('$o.plays',pl.getScore('playSec'))
        var str7 = '§l§e|§r §b你的設備:$o.os'.replace('$o.os', dv.os)
        var str8 = '§l§e|§r §b在綫人數:$o.online/100'.replace('$o.online', mc.getOnlinePlayers().length)
        var str9 = '§l§e|§r §b你的Rank:$o.rank'.replace('$o.rank', rank)
        var str10 = '§l§e|§r §b伺服器IP:omsctop.ddns.net(待定)'
        var str11 = '§l§e|§r §b埠:19132'
        var str12 = '§l§e|§r §b伺服器版本:MCPE$o.version'.replace('$o.version', mc.getBDSVersion())
        var arr = [str0,str1,str2,str3,str4,str5,str6,str7,str8,str9,str10,str11,str12]
        
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

//抽獎
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('lottery','抽獎',PermType.Any)
    cmd.mandatory('money',ParamType.Int)
    cmd.mandatory('bouns',ParamType.Int)
    cmd.overload(['money','bouns'])
    cmd.setCallback((_cmd,ori,_out,res) => {
        const {money,bouns} = res
        if (ori.player.getScore('money') >= money && bouns <= ori.player.getScore('money') / 2) {
            if (money >= 100000) {
                ori.player.reduceScore('money', money)
                var numbers = Math.floor(Math.random() * 1001)
                if (numbers >= 0 && numbers < 210) {
                    ori.player.tell('§l§e你成功抽到Bouns了，你獲得了' + money * bouns)
                    ori.player.addScore('money',money * bouns)
                } else if (numbers >= 210 && numbers < 510) {
                    ori.player.tell('§l§b你成功抽到了Normal，你獲得了' + money)
                    ori.player.addScore('money', money)
                } else if (numbers >= 510 && numbers < 1000) {
                    ori.player.tell('§l§c哈哈，你運氣真的差，抽到了Null，你的錢都沒了')
                } else if (numbers == 1000) {
                    ori.player.tell('§l§d你簡直是天選之子，抽到了百分之0.1機率的鎬子和Bouns')
                    ori.player.giveItem(mc.newItem(NBT.parseJson('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c抽獎特別鎬子"},"ench":[{"id":18s,"lvl":30s},{"id":15s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":15s}]}}')))
                    ori.player.addScore('money',money * bouns)
                }
            } else if (money < 100000) {
                    ori.player.reduceScore('money', money)
                var numbers = Math.floor(Math.random() * 1001)
                if (numbers >= 0 && numbers < 210) {
                    ori.player.tell('§l§e你成功抽到Bouns了，你獲得了' + money * bouns)
                    ori.player.addScore('money',money * bouns)
                } else if (numbers >= 210 && numbers < 510) {
                    ori.player.tell('§l§b你成功抽到了Normal，你獲得了' + money)
                    ori.player.addScore('money', money)
                } else if (numbers >= 510 && numbers < 1000) {
                    ori.player.tell('§l§c哈哈，你運氣真的差，抽到了Null，你的錢都沒了')
                }
            }
        }
    })
    cmd.setup()
})

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

//銀行系統
mc.listen('onServerStarted',() => {
    var fm = mc.newSimpleForm()
    fm.setTitle('§l§b銀行系統')
    fm.addButton('§l§b轉賬系統(/pay)')
    fm.addButton('§l§b服主幣兌換')
    fm.addButton('§l§b點數兌換')

    var pay = mc.newCustomForm()
    pay.setTitle('§l§b轉賬系統')
    pay.addLabel('§l§c轉賬將會收取百分之10手續費')
    pay.addInput('收錢者ID:')
    pay.addInput('給與SC幣數量:')
    pay.addLabel('')

    var owner = mc.newCustomForm()
    owner.setTitle('§l§b服主幣兌換')
    owner.addLabel('§l§e1服主幣:100000SC幣')
    owner.addInput('兌換為SC幣的數量')
    owner.addLabel('')

    var point = mc.newCustomForm()
    point.setTitle('§l§b點數兌換')
    point.addLabel('§l§e1點數:100000SC幣')
    point.addInput('兌換為SC幣的數量')
    point.addLabel('')

    var cmd = mc.newCommand('bank','銀行系統',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res)=>{
        ori.player.sendForm(fm,(pl,id) => {
            if (id == 0) {
                pl.sendForm(pay,(pl,data) => {
                    if (data == undefined) {
                        pl.tell('§l§c銀行系統:你已取消操作')
                    } else if (data[2] <= pl.getScore('money')) {
                        if (mc.getOnlinePlayers().includes(data[1])) {
                            var givemoney = data[2] - (data[2]*0.1)
                            mc.runcmd(`scoreboard players add \"${data[1]}\" ${givemoney}"`)
                            pl.reduceScore('money',data[2])
                            pl.tell('§l§a你已成功轉賬' + data[2] +'給玩家' + data[1])
                            data[2].tell('§l§a玩家' + pl.realName + '轉賬' + data[2]+ 'SC幣給你')
                        } else {
                            pl.tell('§l§c玩家不在綫')
                        }
                    } else {
                        pl.tell('§l§c你的SC幣不足')
                    }
                })
            } else if (id == 1) {
                pl.sendForm(owner,(pl,data) => {
                    if (data == undefined) {
                        pl.tell('§l§c銀行系統:你已取消操作')
                    } else if (data[1] <= pl.getScore('ownercoins')) {
                        pl.addScore('money',data[1] * 100000)
                        pl.tell('§l§a你已成功兌換'+data[1] +'服主幣為' + data[1] *100000)
                    } else {
                        pl.tell('§l§c你的服主幣不足')
                    }
                })
            } else if (id == 2) {
                pl.sendForm(point,(pl,data) => {
                    if (data == undefined) {
                        pl.tell('§l§c銀行系統:你已取消操作')
                    } else if (data[1] <= pl.getScore('point')) {
                        pl.addScore('money', pl.getScore('money') * 100000) 
                        pl.tell('§l§a你已成功兌換'+data[1] +'點數為' + data[1] *100000)
                    } else {
                        pl.tell('§l§c你的點數不足')
                    }
                })
            }
        })
    })
    cmd.setup()
})

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
                name.addScore('money',money * 0.9)
                ori.player.tell('§l§a你已成功轉賬' + money +'SC幣給玩家' + name)
                name.tell('§l§a玩家' + ori.player.realName + '轉賬' + money+ 'SC幣給你')
            }
        } else {
            pl.tell('§l§c玩家不在綫')
        }
    })
    cmd.setup()
})


//menu系統(選單)
mc.listen('onServerStarted',()=>{
    var fm = mc.newSimpleForm()
    fm.addButton('§l§9傳送系統')
    fm.addButton('§l§9銀行系統')
    fm.addButton('§l§9商店系統')
    fm.addButton('§l§9Rank系統')
    fm.addButton('§l§9高級商店')
    fm.addButton('§l§9重生系統')
    fm.addButton('§l§9兌換碼系統')
    fm.addButton('§l§6贊助者系統')
    fm.addButton('§l§c管理員選單')

    var tp = mc.newSimpleForm()
    tp.addButton('§l§9大廳')
    tp.addButton('§l§9普通礦場')
    tp.addButton('§l§aVIP§9礦場')
    tp.addButton('§l§aVIP§6+§9礦場')
    tp.addButton('§l§aVIP§6++§9礦場')
    tp.addButton('§l§6MVP§9礦場')
    tp.addButton('§l§6MVP§c+§9礦場')
    tp.addButton('§l§6MVP§c++§9礦場')

    var cmd = mc.newCommand('menu','§l§e選單系統',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(fm,(pl,id) => {
            if (id == 0) {
                pl.sendForm(tp,(pl,id) => {
                    if (id == 0) {
                        pl.teleport()
                    } else if (id == 1) {
                        pl.teleport()
                    } else if (id ==2) {
                        pl.teleport()
                    } else if (id == 3) {
                        pl.teleport()
                    } else if (id == 4) {
                        pl.teleport()
                    } else if (id == 5) {
                        pl.teleport()
                    } else if (id == 6) {
                        pl.teleport()
                    } else if (id == 7) {
                        pl.teleport()
                    }
                })
            } else if (id == 1) {
                pl.runcmd('bank')
            } else if (id == 2) {
                pl.runcmd('shop')
            } else if (id == 3) {
                pl.runcmd('rank')
            } else if (id == 4) {
                pl.runcmd('highshop')
            } else if (id == 5) {
                pl.runcmd('rebirth')
            } else if (id == 6) {
                pl.runcmd('cdk')
            } else if (id == 7) {
                pl.runcmd('donate')
            } else if (id == 8) {
                pl.runcmd('admin')
            }
        })
    })
    cmd.setup()
})

//shop商店
mc.listen('onServerStarted',()=> {
    var fm = mc.newSimpleForm()
    fm.setTitle('§l§e商店')
    fm.addButton('§l§9工具類')
    fm.addButton('§l§9附魔類')
    fm.addButton('§l§9裝備類')

    var tool = mc.newSimpleForm()
    tool.setTitle('§l§e工具類')
    tool.addButton('§l§9鎬子')
    tool.addButton('§l§9武器')

    var pickaxe = mc.newSimpleForm()
    pickaxe.setTitle('§l§e鎬子')
    pickaxe.addButton('§l§9鐵鎬')
    pickaxe.addButton('§l§9鑽石鎬')
    pickaxe.addButton('§l§9獄髓鎬')

    var iron_pickaxe = mc.newCustomForm()
    iron_pickaxe.setTitle('§l§9鐵鎬')
    iron_pickaxe.addInput('請輸入你要購買的數量，一個$200SC幣:','請輸入你要購買的數量:','1')

    var diamond_pickaxe = mc.newCustomForm()
    diamond_pickaxe.setTitle('§l§9鑽石鎬')
    diamond_pickaxe.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var nethite_pickaxe = mc.newCustomForm()
    nethite_pickaxe.setTitle('§l§9獄髓鎬')
    nethite_pickaxe.addInput('請輸入你要購買的數量，一個$2000SC幣:','請輸入你要購買的數量:','1')

    var enchant = mc.newSimpleForm()
    enchant.setTitle('§l§9附魔類')
    enchant.addButton('§l§9鎬子類附魔')
    enchant.addButton('§l§9劍類附魔')
    enchant.addButton('§l§9裝備類附魔')
    enchant.addButton('§l§9弓類附魔')
    enchant.addButton('§l§9青金石/經驗')

    var pickaxe_enchant = mc.newSimpleForm()
    pickaxe_enchant.setTitle('§l§9鎬子類附魔')
    pickaxe_enchant.addButton('§l§9效率V')
    pickaxe_enchant.addButton('§l§9幸運III')
    pickaxe_enchant.addButton('§l§9耐久III')
    pickaxe_enchant.addButton('§l§9修補I')

    var pickaxe_efficiency = mc.newCustomForm()
    pickaxe_efficiency.setTitle('§l§9效率V')
    pickaxe_efficiency.addInput('請輸入你要購買的數量，一個$1250SC幣:','請輸入你要購買的數量:','1')

    var pickaxe_lucky = mc.newCustomForm()
    pickaxe_lucky.setTitle('§l§9幸運III')
    pickaxe_lucky.addInput('請輸入你要購買的數量，一個$1750SC幣:','請輸入你要購買的數量:','1')

    var pickaxe_unbreaking = mc.newCustomForm()
    pickaxe_unbreaking.setTitle('§l§9耐久III')
    pickaxe_unbreaking.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var pickaxe_mending = mc.newCustomForm()
    pickaxe_mending.setTitle('§l§9修補I')
    pickaxe_mending.addInput('請輸入你要購買的數量，一個$2150SC幣:','請輸入你要購買的數量:','1')

    var sword_enchant = mc.newSimpleForm()
    sword_enchant.setTitle('§l§9劍類附魔')
    sword_enchant.addButton('§l§9鋒利V')
    sword_enchant.addButton('§l§9耐久III')
    sword_enchant.addButton('§l§9擊退II')
    sword_enchant.addButton('§l§9奪寶III')
    sword_enchant.addButton('§l§9烈火II')
    sword_enchant.addButton('§l§9修補I')

    var sword_sharpness = mc.newCustomForm()
    sword_sharpness.setTitle('§l§9鋒利V')
    sword_sharpness.addInput('請輸入你要購買的數量，一個$1500SC幣:','請輸入你要購買的數量:','1')

    var sword_knockback = mc.newCustomForm()
    sword_knockback.setTitle('§l§9擊退II')
    sword_knockback.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var sword_looting = mc.newCustomForm()
    sword_knockback.setTitle('§l§9奪寶III')
    sword_knockback.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var sword_fire = mc.newCustomForm()
    sword_knockback.setTitle('§l§9烈火II')
    sword_knockback.addInput('請輸入你要購買的數量，一個$1250SC幣:','請輸入你要購買的數量:','1')

    var equipment_enchant = mc.newSimpleForm()
    equipment_enchant.addButton('§l§9保護IV')
    equipment_enchant.addButton('§l§9棘刺III')
    equipment_enchant.addButton('§l§9耐久III')
    equipment_enchant.addButton('§l§9修補I')

    var equipment_project = mc.newCustomForm()
    equipment_project.setTitle('§l§9保護IV')
    equipment_project.addInput('請輸入你要購買的數量，一個$1500SC幣:','請輸入你要購買的數量:','1')

    var equipment_thorns = mc.newCustomForm()
    equipment_thorns.setTitle('§l§9棘刺III')
    equipment_thorns.addInput('請輸入你要購買的數量，一個$1500SC幣:','請輸入你要購買的數量:','1')

    var bow_enchant = mc.newSimpleForm()
    bow_enchant.addButton('§l§9力量V')
    bow_enchant.addButton('§l§9無限I')
    bow_enchant.addButton('§l§9火焰I')
    bow_enchant.addButton('§l§9猛擊II')
    bow_enchant.addButton('§l§9耐久III')
    bow_enchant.addButton('§l§9修補I')

    var bow_power = mc.newCustomForm()
    bow_power.setTitle('§l§9力量V')
    bow_power.addInput('請輸入你要購買的數量，一個$2000SC幣:','請輸入你要購買的數量:','1')

    var bow_unlimited = mc.newCustomForm()
    bow_unlimited.setTitle('§l§9無限I')
    bow_unlimited.addInput('請輸入你要購買的數量，一個$1500SC幣:','請輸入你要購買的數量:','1')

    var bow_fire = mc.newCustomForm()
    bow_fire.setTitle('§l§9火焰I')
    bow_fire.addInput('請輸入你要購買的數量，一個$1250SC幣:','請輸入你要購買的數量:','1')
    
    var bow_slam = mc.newCustomForm()
    bow_slam.setTitle('§l§9猛擊II')
    bow_slam.addInput('請輸入你要購買的數量，一個$1250SC幣:','請輸入你要購買的數量:','1')

    var equipment = mc.newSimpleForm()
    equipment.addButton('§l§9鐵質裝備')
    equipment.addButton('§l§9鑽石裝備')
    equipment.addButton('§l§9獄髓裝備')

    var iron_equipment = mc.newSimpleForm()
    iron_equipment.addButton('§l§9鐵頭盔')
    iron_equipment.addButton('§l§9鐵護甲')
    iron_equipment.addButton('§l§9鐵護腿')
    iron_equipment.addButton('§l§9鐵靴')

    var iron_head = mc.newCustomForm()
    iron_head.setTitle('§l§9鐵頭盔')
    iron_head.addInput('請輸入你要購買的數量，一個$200SC幣:','請輸入你要購買的數量:','1')

    var iron_up = mc.newCustomForm()
    iron_up.setTitle('§l§9鐵護甲')
    iron_up.addInput('請輸入你要購買的數量，一個$200SC幣:','請輸入你要購買的數量:','1')

    var iron_le = mc.newCustomForm()
    iron_le.setTitle('§l§9鐵護腿')
    iron_le.addInput('請輸入你要購買的數量，一個$200SC幣:','請輸入你要購買的數量:','1')

    var iron_boost = mc.newCustomForm()
    iron_boost.setTitle('§l§9鐵靴')
    iron_boost.addInput('請輸入你要購買的數量，一個$200SC幣:','請輸入你要購買的數量:','1')

    var diamond_equipment = mc.newSimpleForm()
    diamond_equipment.addButton('§l§9鑽石頭盔')
    diamond_equipment.addButton('§l§9鑽石護甲')
    diamond_equipment.addButton('§l§9鑽石護腿')
    diamond_equipment.addButton('§l§9鑽石靴')

    var diamond_head = mc.newCustomForm()
    diamond_head.setTitle('§l§9鑽石頭盔')
    diamond_head.addInput('請輸入你要購買的數量，一個$500SC幣:','請輸入你要購買的數量:','1')

    var diamond_up = mc.newCustomForm()
    diamond_up.setTitle('§l§9鑽石護甲')
    diamond_up.addInput('請輸入你要購買的數量，一個$500SC幣:','請輸入你要購買的數量:','1')

    var diamond_le = mc.newCustomForm()
    diamond_le.setTitle('§l§9鑽石護腿')
    diamond_le.addInput('請輸入你要購買的數量，一個$500SC幣:','請輸入你要購買的數量:','1')

    var diamond_boost = mc.newCustomForm()
    diamond_boost.setTitle('§l§9鑽石靴')
    diamond_boost.addInput('請輸入你要購買的數量，一個$500SC幣:','請輸入你要購買的數量:','1')

    var nethite_equipment = mc.newSimpleForm()
    nethite_equipment.addButton('§l§9獄髓頭盔')
    nethite_equipment.addButton('§l§9獄髓護甲')
    nethite_equipment.addButton('§l§9獄髓護腿')
    nethite_equipment.addButton('§l§9獄髓靴')

    var nethite_head = mc.newCustomForm()
    nethite_head.setTitle('§l§9獄髓頭盔')
    nethite_head.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var nethite_up = mc.newCustomForm()
    nethite_up.setTitle('§l§9獄髓護甲')
    nethite_up.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var nethite_le = mc.newCustomForm()
    nethite_le.setTitle('§l§9獄髓護腿')
    nethite_le.addInput('請輸入你要購買的數量，一個$100SC幣:','請輸入你要購買的數量:','1')

    var nethite_boost = mc.newCustomForm()
    nethite_boost.setTitle('§l§9獄髓靴')
    nethite_boost.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var sword_bow = mc.newSimpleForm()
    sword_bow.addButton('§l§9鐵劍')
    sword_bow.addButton('§l§9鑽石劍')
    sword_bow.addButton('§l§9獄髓劍')
    sword_bow.addButton('§l§9弓')

    var iron_sword = mc.newCustomForm()
    iron_sword.setTitle('§l§9鐵劍')
    iron_sword.addInput('請輸入你要購買的數量，一個$500SC幣:','請輸入你要購買的數量:','1')

    var diamond_sword = mc.newCustomForm()
    diamond_sword.setTitle('§l§9鑽石劍')
    diamond_sword.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var nethite_sword = mc.newCustomForm()
    nethite_sword.setTitle('§l§9獄髓劍')
    nethite_sword.addInput('請輸入你要購買的數量，一個$1000SC幣:','請輸入你要購買的數量:','1')

    var bow = mc.newCustomForm()
    bow.setTitle('§l§9弓')
    bow.addInput('請輸入你要購買的數量，一個$500SC幣:','請輸入你要購買的數量:','1')

    var lapis_exp = mc.newSimpleForm()
    lapis_exp.addButton('§l§9青金石')
    lapis_exp.addButton('§l§9經驗')

    var lapis = mc.newCustomForm()
    lapis.setTitle('§l§9青金石')
    lapis.addInput('請輸入你要購買的數量，一個$5SC幣:','請輸入你要購買的數量:','1')

    var exp = mc.newCustomForm()
    exp.setTitle('§l§9經驗')
    exp.addInput('請輸入你要購買的等級，每一級$10幣')

    var cmd = mc.newCommand('shop','§l§e伺服器商店',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(fm,(pl,id) => {
            if (id == 0) {
                pl.sendForm(tool,(pl,id)=> {
                    if (id == 0) {
                        pl.sendForm(pickaxe,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(iron_pickaxe,(pl,data) => {
                                    if (pl.getScore('money') >= 200 * data[0]) {
                                        mc.runcmd(`give \"${pl.realName}\" iron_pickaxe ${data[0]} 0 {"minecraft:can_destroy":{"blocks":["emerald_ore","emerald_block","bedrock","air]}}`)
                                        pl.reduceScore('money', data[0] * 200)
                                        pl.tell('§l§a你已成功購買鐵鎬x' + data[0])
                                    } else if(pl.getScore('money') < data[0] * 200){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }else if (id == 1) {
                                pl.sendForm(diamond_pickaxe,(pl,data) => {
                                    if (pl.getScore('money') >= 1000 * data[0]) {
                                        mc.runcmd(`give \"${pl.realName}\" diamond_pickaxe ${data[0]} 0 {"minecraft:can_destroy":{"blocks":["emerald_ore","emerald_block","bedrock","air]}}`)
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你已成功購買鑽石鎬x' + data[0])
                                    }  else if (pl.getScore('money') < data[0] * 1000){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }else if(id == 2) {
                                pl.sendForm(nethite_pickaxe,(pl,data) => {
                                    if (pl.getScore('money') >= 2000 * data[0]) {
                                        mc.runcmd(`give \"${pl.realName}\" netherite_pickaxe ${data[0]} 0 {"minecraft:can_destroy":{"blocks":["emerald_ore","emerald_block","bedrock","air]}}`)
                                        pl.reduceScore('money', data[0] * 2000)
                                        pl.tell('§l§a你已成功購買獄髓鎬x' + data[0])
                                    } else if(pl.getScore('money') < data[0] * 2000) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    } 
                                })
                            }
                        })
                    } else if (id == 1) {
                        pl.sendForm(sword_bow,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(iron_sword,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 500) {
                                        mc.runcmd(`give \"${pl.realName}\" iron_sword ${data[0]}`)
                                        pl.reduceScore('money', data[0] * 500)
                                        pl.tell('§l§a你已成功購買鐵劍x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 500) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 1){
                                pl.sendForm(diamond_sword,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        mc.runcmd(`give \"${pl.realName}\" diamond_sword ${data[0]}`)
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你已成功購買鑽石劍x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1000){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                               })
                            } else if (id == 2){
                                pl.sendForm(nethite_sword,(pl,data)=>{
                                    if (pl.getScore('money') >= data[0] * 1500) {
                                        mc.runcmd(`give \"${pl.realName}\" netherite_sword ${data[0]}`)
                                        pl.reduceScore('money', data[0] * 1500)
                                        pl.tell('§l§a你已成功購買獄髓劍x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1500){
                                        pl.tell('§l§c你的錢不足')
                                    }else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 3){
                                pl.sendForm(bow,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 500) {
                                        mc.runcmd(`give ${pl.realName} bow ${data[0]}`)
                                        pl.reduceScore('money', data[0] * 500)
                                        pl.tell('§l§a你已成功購買弓x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 500){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }    
                        })
                    }
                })
            } else if (id == 1) {
                pl.sendForm(enchant,(pl,id) => {
                    if (id == 0) {
                        pl.sendForm(pickaxe_enchant,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(pickaxe_efficiency,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1250) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":15s,"lvl":5s}]}}')))
                                        pl.reduceScore('money', data[0] * 1250)
                                        pl.tell('§l§a你成功購買效率V附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1250){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 1) {
                                pl.sendForm(pickaxe_lucky,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 1750) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":18s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 1750)
                                        pl.tell('§l§a你成功購買幸運III附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1750){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 2) {
                                pl.sendForm(pickaxe_unbreaking,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你成功購買耐久III附魔書x' + data[0])
                                    } else if(pl.getScore('money')<data[0]*1000){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })     
                            } else if (id == 3) {
                                pl.sendForm(pickaxe_mending,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 2150) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 2150)
                                        pl.tell('§l§a你成功購買修補I附魔書x' + data[0])
                                    } else if(pl.getScore('money') < data[0] * 2150) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    } 
                                })    
                            }
                        })
                    } else if (id == 1) {
                        pl.sendForm(sword_enchant,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(sword_sharpness,(pl,data)=>{
                                    if (pl.getScore('money') >= data[0] * 1500) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":9s,"lvl":5s}]}}')))
                                        pl.reduceScore('money', data[0] * 1500)
                                        pl.tell('§l§a你成功購買鋒利V附魔書x' + data[0])
                                    } else if (pl.getScore('money')<data[0]*1500){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 1) {
                                pl.sendForm(pickaxe_unbreaking,(pl,data)=>{
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你成功購買耐久III附魔書x' + data[0])
                                    } else if(pl.getScore('money') < data[0] * 1000) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 2) {
                                pl.sendForm(sword_knockback,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":12s,"lvl":2s}]}}')))
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你成功購買耐久擊退II附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1000){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 3) {
                                pl.sendForm(sword_looting,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":14s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你成功購買耐久奪寶III附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1000){
                                        pl.tell('§l§c你的錢不足')
                                    }else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 4) {
                                pl.sendForm(sword_fire,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1260) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":13s,"lvl":2s}]}}')))
                                        pl.reduceScore('money', data[0] * 1250)
                                        pl.tell('§l§a你成功購買耐久烈火II附魔書x' + data[0])
                                    } else if(pl.getScore('money')< data[0] * 1250){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 5) {
                                pl.sendForm(pickaxe_mending,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 2150) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 2150)
                                        pl.tell('§l§a你成功購買修補I附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 2150){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })    
                            }
                        })
                    } else if (id == 2) {
                        pl.sendForm(equipment_enchant,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(equipment_project,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 1500) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":0s,"lvl":4s}]}}')))
                                        pl.reduceScore('money', data[0] * 1500)
                                        pl.tell('§l§a你成功購買保護IV附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1500){
                                        pl.tell('§l§c你的錢不足')
                                    }else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 1) {
                                pl.sendForm(equipment_thorns,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1500) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":5s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 1500)
                                        pl.tell('§l§a你成功購買棘刺III附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1500){
                                        pl.tell('§l§c你的錢不足')
                                    }else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 2) {
                                pl.sendForm(pickaxe_unbreaking,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你成功購買耐久III附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1000){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }else if (id == 3) {
                                pl.sendForm(pickaxe_mending,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 2150) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 2150)
                                        pl.tell('§l§a你成功購買修補I附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 2150) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }
                        })
                    } else if (id == 3) {
                        pl.sendForm(bow_enchant,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(bow_power,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 2000) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":19s,"lvl":5s}]}}')))
                                        pl.reduceScore('money', data[0] * 2000)
                                        pl.tell('§l§a你成功購買力量V附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 2000){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 1) {
                                pl.sendForm(bow_unlimited,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1500) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":22s,"lvl":1s}]}}')))
                                        pl.reduceScore('money', data[0] * 1500)
                                        pl.tell('§l§a你成功購買無限I附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1500){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 2) {
                                pl.sendForm(bow_unlimited,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1250) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":21s,"lvl":1s}]}}')))
                                        pl.reduceScore('money', data[0] * 1250)
                                        pl.tell('§l§a你成功購買火焰I附魔書x' + data[0])
                                    } else if(pl.getScore('money') < data[0] * 1250) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 3) {
                                pl.sendForm(bow_unlimited,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1250) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":20s,"lvl":2s}]}}')))
                                        pl.reduceScore('money', data[0] * 1250)
                                        pl.tell('§l§a你成功購買猛擊II附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1250) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 4) {
                                pl.sendForm(pickaxe_unbreaking,(pl,data)=>{
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 1000)
                                        pl.tell('§l§a你成功購買耐久III附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 1000){
                                        pl.tell('§l§c你的錢不足')
                                    }else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 5) {
                                pl.sendForm(pickaxe_mending,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 2150) {
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":'+data[0] +'b,"Damage":0s,"Name":"minecraft:enchanted_book","WasPickedUp":0b,"tag":{"ench":[{"id":17s,"lvl":3s}]}}')))
                                        pl.reduceScore('money', data[0] * 2150)
                                        pl.tell('§l§a你成功購買修補I附魔書x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 2150){
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })    
                            }
                        })
                    } else if (id == 4) {
                        pl.sendForm(lapis_exp,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(lapis,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 5) {
                                        mc.runcmd(`give \"pl.realName\" lapis_lazuli ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 5)
                                        pl.tell('§l§a你成功購買青金石x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 5) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 1) {
                                pl.sendForm(exp,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 10) {
                                        mc.runcmd(`give ${data[0]}L \"${pl.realName}\"`)
                                        pl.reduceScore('money',data[0] * 10)
                                        pl.tell('§l§a你成功購買經驗x' + data[0] + '級')
                                    } else if (pl.getScore('money') < data[0] * 10) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }
                        })
                    }
                })
            } else if (id == 2) {
                pl.sendForm(equipment,(pl,id) => {
                    if (id == 0) {
                        pl.sendForm(iron_equipment,(pl,id)=> {
                            if (id == 0) {
                                pl.sendForm(iron_head,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 200) {
                                        mc.runcmd(`give \"${pl.realName}\" iron_helmet ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 200)
                                        pl.tell('§l§a你成功購買鐵頭盔x' + data[0])
                                    }else if (pl.getScore('money') < data[0] * 200) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 1) {
                                pl.sendForm(iron_up,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 200) {
                                        mc.runcmd(`give \"${pl.realName}\" iron_chestplate ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 200)
                                        pl.tell('§l§a你成功購買鐵護甲x' + data[0])
                                    }else if (pl.getScore('money') < data[0] * 200) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 2) {
                                pl.sendForm(iron_le,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 200) {
                                        mc.runcmd(`give \"${pl.realName}\" iron_leggings ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 200)
                                        pl.tell('§l§a你成功購買鐵護腿x' + data[0])
                                    }else if (pl.getScore('money') < data[0] * 200) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 3) {
                                pl.sendForm(iron_boost,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 200) {
                                        mc.runcmd(`give \"${pl.realName}\" iron_boots ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 200)
                                        pl.tell('§l§a你成功購買鐵靴x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 200) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }
                        })
                    } else if (id == 1) {
                        pl.sendForm(diamond_equipment,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(diamond_head,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 500) {
                                        mc.runcmd(`give \"${pl.realName}\" diamond_helmet ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 500)
                                        pl.tell('§l§a你成功購買鑽石頭盔x' + data[0])
                                    }else if (pl.getScore('money') < data[0] * 500) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] ==undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 1) {
                                pl.sendForm(diamond_up,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 500) {
                                        mc.runcmd(`give \"${pl.realName}\" diamond_chestplate ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 500)
                                        pl.tell('§l§a你成功購買鑽石護甲x' + data[0])
                                    }else if (pl.getScore('money') < data[0] * 500) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id ==2 ) {
                                pl.sendForm(diamond_le,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 500) {
                                        mc.runcmd(`give \"${pl.realName}\" diamond_leggings ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 500)
                                        pl.tell('§l§a你成功購買鑽石護腿x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 500) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 3) {
                                pl.sendForm(diamond_boost,(pl,data)=> {
                                    if (pl.getScore('money') >= data[0] * 500) {
                                        mc.runcmd(`give \"${pl.realName}\" diamond_boots ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 500)
                                        pl.tell('§l§a你成功購買鑽石靴x' + data[0])
                                    } else if (pl.getScore('money') < data[0] * 500) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }
                        })
                    } else if (id == 2) {
                        pl.sendForm(nethite_equipment,(pl,id) => {
                            if (id == 0) {
                                pl.sendForm(nethite_head,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        mc.runcmd(`give \"${pl.realName}\" netherite_helmet ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 1000)
                                        pl.tell('§l§a你成功購買獄髓頭盔')
                                    } else if (pl.getScore('money') < data[0] * 1000) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 1) {
                                pl.sendForm(nethite_up,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        mc.runcmd(`give \"${pl.realName}\" netherite_chestplate ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 1000)
                                        pl.tell('§l§a你成功購買獄髓護甲')
                                    } else if (pl.getScore('money') < data[0] * 1000) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if (id == 2) {
                                pl.sendForm(nethite_le,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        mc.runcmd(`give \"${pl.realName}\" netherite_leggings ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 1000)
                                        pl.tell('§l§a你成功購買獄髓護腿')
                                    } else if (pl.getScore('money') < data[0] * 1000) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            } else if(id == 3) {
                                pl.sendForm(nethite_boost,(pl,data) => {
                                    if (pl.getScore('money') >= data[0] * 1000) {
                                        mc.runcmd(`give \"${pl.realName}\" netherite_boots ${data[0]}`)
                                        pl.reduceScore('money',data[0] * 1000)
                                        pl.tell('§l§a你成功購買獄髓靴')
                                    } else if (pl.getScore('money') < data[0] * 1000) {
                                        pl.tell('§l§c你的錢不足')
                                    } else if (data[0] == undefined) {
                                        pl.tell('§l§c你已取消購買')
                                    }
                                })
                            }
                        })
                    }
                })
            }
       })
    })
    cmd.setup()
})


//Anti Minecart Crasher
mc.listen('onCmdBlockExecute',(isMinecart,pos) => {
    if (isMinecart == true) {
        log('有玩家使用命令方塊礦車惡意崩服，坐標為' + pos)
        return false
    }    
})

//指南針選單
mc.listen('onUseItem',(pl,item) => {
    if (item.type == 'minecraft:compass') {
        pl.runcmd('menu')
    }
})

//贊助者選單
mc.listen('onServerStarted',() => {
    var fm = mc.newSimpleForm()
    fm.addButton('§l§9粒子效果')
    fm.addButton('§l§9獲取贊助者之鎬')
    fm.addButton('§l§9贊助者商店')

    var high = mc.newSimpleForm()
    high.setTitle('§l§9購買高級商店')
    high.setContent('§l§b系統檢測到你還沒購買高級商店權限，你是否要進行購買，價錢為50點數')
    high.addButton('§l§9確認購買')
    high.addButton('§l§9不購買')

    var particle = mc.newSimpleForm()
    particle.setTitle('§l§9粒子效果')
    particle.addButton('§l§9心形')
    particle.addButton('§l§9水粒子')
    particle.addButton('§l§9氣泡水')
    particle.addButton('§l§9煙霧')
    particle.addButton('§l§9龍之吐息')
    particle.addButton('§l§9熔岩粒子')
    particle.addButton('§l§9閃電擊中銅磚')
    particle.addButton('§l§9附魔台')
    particle.addButton('§l§9終界箱')

    var cmd = mc.newCommand('donate','贊助者選單',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        if (ori.player.hasTag('donate') == false) {
            ori.player.tell('§l§c你不是贊助者')
        } else {
            ori.player.sendForm(fm,(pl,id) => {
                if (id == 0) {
                    pl.sendForm(particle,(pl,id)=> {
                        if (id == 0) {
                            if (pl.hasTag('e1')) {
                                pl.removeTag('e1')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e1')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        } else if (id == 1) {
                            if (pl.hasTag('e2')) {
                                pl.removeTag('e2')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e2')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }else if (id == 2) {
                            if (pl.hasTag('e3')) {
                                pl.removeTag('e3')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e3')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }else if (id == 3) {
                            if (pl.hasTag('e4')) {
                                pl.removeTag('e4')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e4')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }else if (id == 4) {
                            if (pl.hasTag('e5')) {
                                pl.removeTag('e5')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e5')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }else if (id == 5) {
                            if (pl.hasTag('e6')) {
                                pl.removeTag('e6')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e6')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }else if (id == 6) {
                            if (pl.hasTag('e7')) {
                                pl.removeTag('e7')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e7')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }else if (id == 7) {
                            if (pl.hasTag('e8')) {
                                pl.removeTag('e8')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e8')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }else if (id == 8) {
                            if (pl.hasTag('e9')) {
                                pl.removeTag('e9')
                                pl.tell(`§l§a成功關閉該粒子`)
                            } else {
                                pl.addTag('e9')
                                pl.tell(`§l§a成功使用該粒子`)
                            }
                        }
                    })
                } else if (id == 1) {
                    pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d贊助者鎬子"},"ench":[{"id":18s,"lvl":15s},{"id":15s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":10s}]}}')))
                } else if (id == 2) {
                    if (pl.hasTag('high')) {
                        pl.runcmd('high')
                    } else if (pl.hasTag('high') == false) {
                        pl.sendForm(high,(pl,id) => {
                            if (id == 0) {
                                pl.addTag('high')
                                pl.reduceScore('point', 50)
                                pl.tell('§l§a你已成功購買高級商店的權限！')
                            } else if (id == 1) {
                                pl.tell('§l§c雖然你沒有購買高級商店權限，但是高級商店有很多的神級鎬和裝備哦！')
                            } else if (id == null) {
                                pl.tell('§l§c你已取消操作')
                            }
                        })
                    }
                }
            })
        }
    })
    cmd.setup()
})

//管理員選單
mc.listen("onServerStarted",()=> {
    var fm = mc.newSimpleForm()
    fm.setTitle('§l§c管理員選單')
    fm.addButton('§l§9更換游戲模式')
    fm.addButton('§l§9開關隱身模式')
    fm.addButton('§l§9封禁玩家')
    fm.addButton('§l§9解除封禁玩家')
    fm.addButton('§l§9傳送到其他玩家')
    fm.addButton('§l§9踢出玩家')
    fm.addButton('§l§9banlist')
    fm.addButton('§l§9blackbe')
    fm.addButton('§l§9查背包')
    fm.addButton('§l§9開關顯示伺服器現時狀態')
    fm.addButton('§l§9重啟伺服器§c(請勿胡亂使用！)')
    fm.addButton('§l§9關閉伺服器§c(倒數5秒，請勿胡亂使用！)')
    fm.addButton('§l§9關閉伺服器§c(倒數15秒，請勿胡亂使用！)')

    var gamemode = mc.newCustomForm()
    gamemode.setTitle('§l§9更換游戲模式')
    gamemode.addLabel('1:創造,2:生存,3:冒險,4:旁觀者')
    gamemode.addSlider('請選取你要更換的模式',1,4)

    var unsee = mc.newCustomForm()
    unsee.setTitle('§l§9隱身')
    unsee.addLabel('1:假裝離開伺服器,2:隱身效果')
    unsee.addSlider('請選取隱身等級',1,2)

    var tp = mc.newCustomForm()
    tp.setTitle('§l§9傳送玩家')
    tp.addInput('請輸入你要傳送的玩家');

    var kick = mc.newCustomForm()
    kick.setTitle('§l§9踢出玩家')
    kick.addInput('請輸入你要踢出的玩家');
    kick.addInput('請輸入踢出的原因(選填，請加上"")')

    var ban = mc.newCustomForm()
    ban.setTitle('§l§9封禁玩家')
    ban.addInput('請輸入玩家名稱:')
    ban.addInput('請輸入封禁原因(選填):')
    ban.addInput('請輸入封禁時間(分鐘，選填(如填寫此處必須填寫封禁原因)):')

    var unban = mc.newCustomForm()
    unban.setTitle('§l§9解除封禁')
    unban.addInput('請輸入你要解除封禁的玩家')

    var cmd = mc.newCommand('admin','管理員選單',PermType.GameMasters)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(fm,(pl,id)=>{
            if (id == 0) {
                pl.sendForm(gamemode,(pl,data) => {
                    if (data[1] == 1) {
                        pl.runcmd(`gamemode 1`)
                    } else if (data[1] == 2) {
                        pl.runcmd(`gamemode 0`)
                    } else if (data[1] == 3) {
                        pl.runcmd(`gamemode 2`)
                    } else if (data[1] == 4) {
                        pl.runcmd(`gamemode spectator`)
                    }else if (data[0] == undefined) {
                        pl.tell('§l§c你已取消操作')
                    }
                })
            } else if (id == 1) {
                pl.sendForm(unsee,(pl,data) => {
                    if (data[1] == 1) {
                        mc.broadcast('§e'+pl.realName+'離開了游戲')
                    } else if (data[1] == 2) {
                        pl.runcmd(`effect @s invisibility 99999 255 true`)
                    }else if (data[0] == undefined) {
                        pl.tell('§l§c你已取消操作')
                    }
                })
            } else if (id == 2) {
                pl.sendForm(ban,(pl,data) => {
                    if (data[0] != '') {
                        if (data[1] != '') {
                            if (data[2] != '') {
                                pl.runcmd(`ban \"${data[0]}\" ${data[1]} ${data[2]}`)
                                pl.tell('§l§a成功封禁玩家' + data[0] + '原因爲' + data[1] + '時間爲' + data[2] + '分鐘')
                            } else if (data[2] == '') {
                                pl.runcmd(`ban \"${data[0]}\" ${data[1]}`)
                                pl.tell('§l§a成功封禁玩家' + data[0] + '原因爲' + data[1])
                            }
                        } else if (data[1] == ''){
                            pl.runcmd(`ban ${data[0]}`)
                            pl.tell('§l§a成功封禁玩家' + data[0])
                        }
                    } else if (data[0] == '') {
                        pl.tell('§l§c請輸入你所封禁的玩家名稱')
                    }
                })
            } else if (id == 3) {
                pl.sendForm(unban,(pl,data) => {
                    if (data[0] != '') {
                        pl.runcmd(`unban \"${data[0]}\"`)
                        pl.tell('§l§a成功解除玩家' + data[0] + '的封禁')
                    }else if (data[0] == undefined) {
                        pl.tell('§l§c你已取消操作')
                    }
                })
            } else if (id == 4) {
                pl.sendForm(tp,(pl,data)=>{
                    if (data[0] != '' && mc.getOnlinePlayers().includes(data[0])) {
                            pl.runcmd(`tp \"${[data[0]]}\"`)
                            pl.tell(`§l§a你成功傳送到玩家${[data[0]]}`)
                    } else if (data[0] == '') {
                        pl.tell('§l§c請正確輸入玩家ID')
                    } else if (mc.getOnlinePlayers().includes(data[0]) == false) {
                        pl.tell('§l§c沒有該玩家')
                    } else if (data[0] == undefined) {
                        pl.tell('你已取消操作')
                    }
                })
            } else if (id == 5) {
                pl.sendForm(kick,(pl,data) => {
                    if (data[0] != '' && mc.getOnlinePlayers().includes(data[0])) {
                        if (data[1] != '') {
                            pl.runcmd(`kick \"${data[0]}\" §l§6玩家${[data[0]]}你已被伺服器管理員踢出伺服器\n原因爲:${data[1]}\n§l§d如有任何問題請到本服Discord群組詢問\n§bhttps://discord.gg/VMN3cgeUBd`)
                            pl.tell(`§l§a你成功踢出玩家${mc.getPlayer(players[data[0]])}`)
                        } else if (data[1] == ''){
                            pl.runcmd(`kick \"${[data[0]]}\" §l§6玩家${[data[0]]}你已被伺服器管理員踢出伺服器\n原因爲:空\n§l§d如有任何問題請到本服Discord群組詢問\n§bhttps://discord.gg/VMN3cgeUBd`)
                            pl.tell(`§l§a你成功踢出玩家${[data[0]]}`)
                        }else if (data[0] == undefined) {
                            pl.tell('§l§c你已取消操作')
                        }
                    } else if (data[0] == '') {
                        pl.tell('§l§c請正確輸入玩家ID')
                    }else if (mc.getOnlinePlayers().includes(data[0]) == false) {
                        pl.tell('§l§c沒有該玩家')
                    } else if (data[0] == undefined) {
                        pl.tell('你已取消操作')
                    }
                })
            } else if (id == 6) {
                pl.runcmd(`banlist`)
            } else if (id == 7) {
                pl.runcmd(`blackbe`)
            } else if (id == 8) {
                pl.runcmd(`cb`)
            }else if (id == 9) {
                if (pl.hasTag('nowdata')) {
                    pl.removeTag('nowdata')
                } else if (!pl.hasTag('nowdata')) {
                    pl.addTag('nowdata')
                }
            } else if (id == 10) {
                pl.runcmd(`restart`)
            } else if (id == 11) {
                pl.runcmd(`stopser`)
            } else if (id == 12) {
                pl.runcmd(`wnstop`)
            }
        })
    })
    cmd.setup()
})

//高級商店
mc.listen('onServerStarted',()=> {
    var fm = mc.newSimpleForm()
    fm.setTitle('§l§9高級商店')
    fm.setContent('§l§c高級商店系統提示你:倒賣高級商店物品屬於違規行爲，玩家將會被取消高級商店使用資格以及封禁(會根據情況判斷)')
    fm.addButton('§l§9高級鎬子')
    fm.addButton('§l§9高級裝備')
    fm.addButton('§l§9高級武器')

    var high_level_pickaxe = mc.newSimpleForm()
    high_level_pickaxe.setTitle('§l§9高級鎬子')
    high_level_pickaxe.setContent('§l§9請選取你要購買的鎬子種類')
    high_level_pickaxe.addButton('§l§9超值鎬子')
    high_level_pickaxe.addButton('§l§9超凡鎬子')
    high_level_pickaxe.addButton('§l§9卓越鎬子')
    high_level_pickaxe.addButton('§l§9大師鎬子')

    var high_level_equipment = mc.newSimpleForm()
    high_level_equipment.setTitle('§l§9高級裝備')
    high_level_equipment.setContent('§l§9請選取你要購買的裝備種類')
    high_level_equipment.addButton('§l§9超值裝備')
    high_level_equipment.addButton('§l§9超凡裝備')
    high_level_equipment.addButton('§l§9卓越裝備')
    high_level_equipment.addButton('§l§9大師裝備')

    var high_level_weapon = mc.newSimpleForm()
    high_level_weapon.setTitle('§l§9高級武器')
    high_level_weapon.setContent('§l§9請選取你要購買的武器種類')
    high_level_weapon.addButton('§l§9超值武器')
    high_level_weapon.addButton('§l§9超凡武器')
    high_level_weapon.addButton('§l§9卓越武器')
    high_level_weapon.addButton('§l§9大師武器')
    high_level_weapon.addButton('§l§9高級弓')

    var great_value_pickaxe = mc.newSimpleForm()
    great_value_pickaxe.setTitle('§l§9超值鎬子')
    great_value_pickaxe.addButton('§l§9低級超值鎬子')
    great_value_pickaxe.addButton('§l§9中級超值鎬子')
    great_value_pickaxe.addButton('§l§9高級超值鎬子')

    var extraordinary_pickaxe = mc.newSimpleForm()
    extraordinary_pickaxe.setTitle('§l§9超凡鎬子')
    extraordinary_pickaxe.addButton('§l§9低級超凡鎬子')
    extraordinary_pickaxe.addButton('§l§9中級超凡鎬子')
    extraordinary_pickaxe.addButton('§l§9高級超凡鎬子')

    var excellence_pickaxe = mc.newSimpleForm()
    excellence_pickaxe.setTitle('§l§9卓越鎬子')
    excellence_pickaxe.addButton('§l§9低級卓越鎬子')
    excellence_pickaxe.addButton('§l§9中級卓越鎬子')
    excellence_pickaxe.addButton('§l§9高級卓越鎬子')

    var Grandmaster_pickaxe = mc.newSimpleForm()
    Grandmaster_pickaxe.setTitle('§l§9大師鎬子')
    Grandmaster_pickaxe.addButton('§l§9低級大師鎬子')
    Grandmaster_pickaxe.addButton('§l§9中級大師鎬子')
    Grandmaster_pickaxe.addButton('§l§9高級大師鎬子')

    var low_great_pickaxe = mc.newCustomForm()
    low_great_pickaxe.setTitle('§l§9低級超值鎬子')
    low_great_pickaxe.addLabel('§l§6『低級超值鎬子』一把售價為150000SC幣')

    var second_great_pickaxe = mc.newCustomForm()
    second_great_pickaxe.setTitle('§l§9中級超值鎬子')
    second_great_pickaxe.addLabel('§l§6『中級超值鎬子』一把售價為200000SC幣')

    var high_great_pickaxe = mc.newCustomForm()
    high_great_pickaxe.setTitle('§l§9高級超值鎬子')
    high_great_pickaxe.addLabel('§l§6『高級超值鎬子』一把售價為250000SC幣')

    var low_extraordinary_pickaxe = mc.newCustomForm()
    low_extraordinary_pickaxe.setTitle('§l§9低級超凡鎬子')
    low_extraordinary_pickaxe.addLabel('§l§6『低級超凡鎬子』，一把售價為300000SC幣')

    var second_extraordinary_pickaxe = mc.newCustomForm()
    second_extraordinary_pickaxe.setTitle('§l§9中級超凡鎬子')
    second_extraordinary_pickaxe.addLabel('§l§6『低級超凡鎬子『，一把售價為350000SC幣')

    var high_extraordinary_pickaxe = mc.newCustomForm()
    high_extraordinary_pickaxe.setTitle('§l§9高級超凡鎬子')
    high_extraordinary_pickaxe.addLabel('§l§6『高級超凡鎬子』，一把售價為400000SC幣')

    var low_excellent_pickaxe = mc.newCustomForm()
    low_excellent_pickaxe.setTitle('§l§9低級卓越鎬子')
    low_excellent_pickaxe.addLabel('§l§6『低級卓越鎬子』，一把售價為450000SC幣')

    var second_excellent_pickaxe = mc.newCustomForm()
    second_excellent_pickaxe.setTitle('§l§9中級卓越鎬子')
    second_excellent_pickaxe.addLabel('§l§6『中級卓越鎬子』，一把售價為500000SC幣')

    var high_excellent_pickaxe = mc.newCustomForm()
    high_excellent_pickaxe.setTitle('§l§9高級卓越鎬子')
    high_excellent_pickaxe.addLabel('§l§6『高級卓越鎬子』，一把售價為550000SC幣')

    var low_GrandMaster_pickaxe = mc.newCustomForm()
    low_GrandMaster_pickaxe.setTitle('§l§9低級大師鎬子')
    low_GrandMaster_pickaxe.addLabel('§l§6『低級大師鎬子』，一把售價為650000SC幣')

    var second_GrandMaster_pickaxe = mc.newCustomForm()
    second_GrandMaster_pickaxe.setTitle('§l§9中級大師鎬子')
    second_GrandMaster_pickaxe.setTitle('§l§6『中級大師鎬子』，一把售價為750000SC幣')

    var high_GrandMaster_pickaxe = mc.newCustomForm()
    high_GrandMaster_pickaxe.setTitle('§l§9高級大師鎬子')
    high_GrandMaster_pickaxe.addLabel('§l§6『高級大師鎬子』，一把售價為850000SC幣')

    var great_value_equipment = mc.newSimpleForm()
    great_value_equipment.setTitle('§l§9超值裝備')
    great_value_equipment.addButton('§l§9低級超值裝備')
    great_value_equipment.addButton('§l§9中級超值裝備')
    great_value_equipment.addButton('§l§9高級超值裝備')

    var excellen_equipment = mc.newSimpleForm()
    excellen_equipment.setTitle('§l§9超凡裝備')
    excellen_equipment.addButton('§l§9低級超凡裝備')
    excellen_equipment.addButton('§l§9中級超凡裝備')
    excellen_equipment.addButton('§l§9高級超凡裝備')

    var extraordinary_equipment = mc.newSimpleForm()
    extraordinary_equipment.setTitle('§l§9卓越裝備')
    extraordinary_equipment.addButton('§l§9低級卓越裝備')
    extraordinary_equipment.addButton('§l§9中級卓越裝備')
    extraordinary_equipment.addButton('§l§9高級卓越裝備')
    
    var GrandMaster_equipment = mc.newSimpleForm()
    GrandMaster_equipment.setTitle('§l§9大師裝備')
    GrandMaster_equipment.addButton('§l§9低級大師裝備')
    GrandMaster_equipment.addButton('§l§9中級大師裝備')
    GrandMaster_equipment.addButton('§l§9高級大師裝備')

    var low_great_equipment = mc.newCustomForm()
    low_great_equipment.setTitle('§l§9低級超值裝備')
    low_great_equipment.addLabel('§l§6『低級超值裝備』，該物品為全套裝備，售價為200000SC幣')

    var second_great_equipment = mc.newCustomForm()
    second_great_equipment.setTitle('§l§9中級超值裝備')
    second_great_equipment.addLabel('§l§6『中級超值裝備』，該物品為全套裝備，售價為300000SC幣')

    var high_great_equipment = mc.newCustomForm()
    high_great_equipment.setTitle('§l§9高級超值裝備')
    high_great_equipment.addLabel('§l§6『高級超值裝備』，該物品為全套裝備，售價為400000SC幣')

    var low_excellen_equipment = mc.newCustomForm()
    low_excellen_equipment.setTitle('§l§9低級超凡裝備')
    low_excellen_equipment.addLabel('§l§6『低級超凡裝備』，該物品為全套裝備，售價為500000SC幣')

    var second_excellen_equipment = mc.newCustomForm()
    second_excellen_equipment.setTitle('§l§9中級超凡裝備')
    second_excellen_equipment.addLabel('§l§6『中級超凡裝備』，該物品為全套裝備，售價為600000SC幣')
    
    var high_excellen_equipment = mc.newCustomForm()
    high_excellen_equipment.setTitle('§l§9高級超凡裝備')
    high_excellen_equipment.addLabel('§l§6『高級超凡裝備』，該物品為全套裝備，售價為700000SC幣')

    var low_excellen_equipment = mc.newCustomForm()
    low_excellen_equipment.setTitle('§l§9低級超值裝備')
    low_excellen_equipment.addLabel('§l§6『低級超值裝備』，該物品為全套裝備，售價為800000SC幣')

    var second_excellen_equipment = mc.newCustomForm()
    second_excellen_equipment.setTitle('§l§9中級超值裝備')
    second_excellen_equipment.addLabel('§l§6『中級超值裝備』，該物品為全套裝備，售價為900000SC幣')
    
    var high_excellen_equipment = mc.newCustomForm()
    high_excellen_equipment.setTitle('§l§9高級超值裝備')
    high_excellen_equipment.addLabel('§l§6『高級超值裝備』，該物品為全套裝備，售價為700000SC幣')

    var low_extraordinary_equipment = mc.newCustomForm()
    low_extraordinary_equipment.setTitle('§l§9低級卓越裝備')
    low_extraordinary_equipment.addLabel('§l§6『低級卓越裝備』，該物品為全套裝備，售價為800000SC幣')

    var second_extraordinary_equipment = mc.newCustomForm()
    second_extraordinary_equipment.setTitle('§l§9中級卓越裝備')
    second_extraordinary_equipment.addLabel('§l§6『中級卓越裝備』，該物品為全套裝備，售價為900000SC幣')
    
    var high_extraordinary_equipment = mc.newCustomForm()
    high_extraordinary_equipment.setTitle('§l§9高級卓越裝備')
    high_extraordinary_equipment.addLabel('§l§6『高級卓越裝備』，該物品為全套裝備，售價為1000000SC幣')

    var low_GrandMaster_equipment = mc.newCustomForm()
    low_GrandMaster_equipment.setTitle('§l§9低級大師裝備')
    low_GrandMaster_equipment.addLabel('§l§6『低級大師裝備』，該物品為全套裝備，售價為1100000SC幣')

    var second_GrandMaster_equipment = mc.newCustomForm()
    second_GrandMaster_equipment.setTitle('§l§9中級大師裝備')
    second_GrandMaster_equipment.addLabel('§l§6『中級大師裝備』，該物品為全套裝備，售價為1200000SC幣')
    
    var high_GrandMaster_equipment = mc.newCustomForm()
    high_GrandMaster_equipment.setTitle('§l§9高級大師裝備')
    high_GrandMaster_equipment.addLabel('§l§6『高級大師裝備』，該物品為全套裝備，售價為1300000SC幣')

    var great_value_weapon = mc.newSimpleForm()
    great_value_weapon.setTitle('§l§9超值劍')
    great_value_weapon.addButton('§l§9低級超值劍')
    great_value_weapon.addButton('§l§9中級超值劍')
    great_value_weapon.addButton('§l§9高級超值劍')

    var extraordinary_weapon = mc.newSimpleForm()
    extraordinary_weapon.setTitle('§l§9超凡劍')
    extraordinary_weapon.addButton('§l§9低級超凡劍')
    extraordinary_weapon.addButton('§l§9中級超凡劍')
    extraordinary_weapon.addButton('§l§9高級超凡劍')

    var excellence_weapon = mc.newSimpleForm()
    excellence_weapon.setTitle('§l§9卓越劍')
    excellence_weapon.addButton('§l§9低級卓越劍')
    excellence_weapon.addButton('§l§9中級卓越劍')
    excellence_weapon.addButton('§l§9高級卓越劍')

    var Grandmaster_weapon = mc.newSimpleForm()
    Grandmaster_weapon.setTitle('§l§9大師劍')
    Grandmaster_weapon.addButton('§l§9低級大師劍')
    Grandmaster_weapon.addButton('§l§9中級大師劍')
    Grandmaster_weapon.addButton('§l§9高級大師劍')

    var low_great_weapon = mc.newCustomForm()
    low_great_weapon.setTitle('§l§9低級超值劍')
    low_great_weapon.addLabel('§l§6『低級超值劍』一把售價為150000SC幣')

    var second_great_weapon = mc.newCustomForm()
    second_great_weapon.setTitle('§l§9中級超值劍')
    second_great_weapon.addLabel('§l§6『中級超值劍』一把售價為200000SC幣')

    var high_great_weapon = mc.newCustomForm()
    high_great_weapon.setTitle('§l§9高級超值劍')
    high_great_weapon.addLabel('§l§6『高級超值劍』一把售價為250000SC幣')

    var low_extraordinary_weapon = mc.newCustomForm()
    low_extraordinary_weapon.setTitle('§l§9低級超凡劍')
    low_extraordinary_weapon.addLabel('§l§6『低級超凡劍』，一把售價為300000SC幣')

    var second_extraordinary_weapon = mc.newCustomForm()
    second_extraordinary_weapon.setTitle('§l§9中級超凡劍')
    second_extraordinary_weapon.addLabel('§l§6『低級超凡劍『，一把售價為350000SC幣')

    var high_extraordinary_weapon = mc.newCustomForm()
    high_extraordinary_weapon.setTitle('§l§9高級超凡劍')
    high_extraordinary_weapon.addLabel('§l§6『高級超凡劍』，一把售價為400000SC幣')

    var low_excellent_weapon = mc.newCustomForm()
    low_excellent_weapon.setTitle('§l§9低級卓越劍')
    low_excellent_weapon.addLabel('§l§6『低級卓越劍』，一把售價為450000SC幣')

    var second_excellent_weapon = mc.newCustomForm()
    second_excellent_weapon.setTitle('中級卓越劍')
    second_excellent_weapon.addLabel('§l§6『中級卓越劍』，一把售價為500000SC幣')

    var high_excellent_weapon = mc.newCustomForm()
    high_excellent_weapon.setTitle('§l§9高級卓越劍')
    high_excellent_weapon.addLabel('§l§6『高級卓越劍』，一把售價為550000SC幣')

    var low_GrandMaster_weapon = mc.newCustomForm()
    low_GrandMaster_weapon.setTitle('§l§9低級大師劍')
    low_GrandMaster_weapon.addLabel('§l§6『低級大師武器』，一把售價為650000SC幣')

    var second_GrandMaster_weapon = mc.newCustomForm()
    second_GrandMaster_weapon.setTitle('中級大師劍')
    second_GrandMaster_weapon.setTitle('§l§6『中級大師劍』，一把售價為750000SC幣')

    var high_GrandMaster_weapon = mc.newCustomForm()
    high_GrandMaster_weapon.setTitle('§l§9高級大師劍')
    high_GrandMaster_weapon.addLabel('§l§6『高級大師劍』，一把售價為850000SC幣')

    var bow = mc.newCustomForm()
    bow.setTitle('§l§9高級弓')
    bow.addLabel('§l§6『高級弓』，一把售價為500000SC幣')
  
    var cmd = mc.newCommand('highshop','高級商店',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        if (ori.player.hasTag('high') == false) {
            ori.player.tell('§l§c你不是贊助者/你沒有高級商店的權限')
        } else {
            ori.player.sendForm(fm,(pl,id) => {
                if (id == 0) {
                    pl.sendForm(high_level_pickaxe,(pl,id) => {
                        if (id == 0) {
                            pl.sendForm(great_value_pickaxe,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_great_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 150000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值鎬子"},"ench":[{"id":18s,"lvl":10s},{"id":15s,"lvl":10s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s}]}}')))
                                                pl.reduceScore('money',150000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_great_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 200000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超值鎬子"},"ench":[{"id":18s,"lvl":15s},{"id":15s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s}]}}')))
                                                pl.reduceScore('money',200000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_great_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 250000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值鎬子"},"ench":[{"id":18s,"lvl":20s},{"id":15s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s}]}}')))
                                                pl.reduceScore('money',250000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 1) {
                            pl.sendForm(extraordinary_pickaxe,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_excellent_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 300000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡鎬子"},"ench":[{"id":18s,"lvl":25s},{"id":15s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s}]}}')))
                                                pl.reduceScore('money',300000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_extraordinary_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 350000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡鎬子"},"ench":[{"id":18s,"lvl":30s},{"id":15s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":15s}]}}')))
                                                pl.reduceScore('money',350000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_extraordinary_pickaxe,(pl,data)=> {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 400000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡鎬子"},"ench":[{"id":18s,"lvl":35s},{"id":15s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s}]}}')))
                                                pl.reduceScore('money',400000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 2) {
                            pl.sendForm(excellence_pickaxe,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_excellent_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 450000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越鎬子"},"ench":[{"id":18s,"lvl":40s},{"id":15s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s}]}}')))
                                                pl.reduceScore('money',450000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_excellent_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 500000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越鎬子"},"ench":[{"id":18s,"lvl":45s},{"id":15s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s}]}}')))
                                                pl.reduceScore('money',500000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_excellent_pickaxe,(pl,data) =>{ 
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 550000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越鎬子"},"ench":[{"id":18s,"lvl":50s},{"id":15s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s}]}}')))
                                                pl.reduceScore('money',550000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 3) {
                            pl.sendForm(Grandmaster_pickaxe,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_GrandMaster_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 650000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級大師鎬子"},"ench":[{"id":18s,"lvl":60s},{"id":15s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s}]}}')))
                                                pl.reduceScore('money',650000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_GrandMaster_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 750000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級大師鎬子"},"ench":[{"id":18s,"lvl":70s},{"id":15s,"lvl":70s},{"id":17s,"lvl":65s},{"id":26s,"lvl":60s}]}}')))
                                                pl.reduceScore('money',750000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_GrandMaster_pickaxe,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 850000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師鎬子"},"ench":[{"id":18s,"lvl":80s},{"id":15s,"lvl":80s},{"id":17s,"lvl":75s},{"id":26s,"lvl":70s}]}}')))
                                                pl.reduceScore('money',850000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    })
                } else if (id == 1) {
                    pl.sendForm(high_level_equipment,(pl,id) => {
                        if (id == 0) {
                            pl.sendForm(great_value_equipment,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_great_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 200000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值裝備"},"ench":[{"id":0s,"lvl":10s},{"id":1s,"lvl":10s},{"id":3s,"lvl":10s},{"id":4s,"lvl":10s},{"id":10s,"lvl":5s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值裝備"},"ench":[{"id":0s,"lvl":10s},{"id":1s,"lvl":10s},{"id":3s,"lvl":10s},{"id":4s,"lvl":10s},{"id":5s,"lvl":10s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值裝備"},"ench":[{"id":0s,"lvl":10s},{"id":1s,"lvl":10s},{"id":3s,"lvl":10s},{"id":4s,"lvl":10s},{"id":5s,"lvl":10s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值裝備"},"ench":[{"id":0s,"lvl":10s},{"id":1s,"lvl":10s},{"id":2s,"lvl":10s},{"id":3s,"lvl":10s},{"id":4s,"lvl":10s},{"id":5s,"lvl":10s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s}]}}')))
                                                pl.reduceScore('money', 200000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })   
                                } else if (id == 1) {
                                    pl.sendForm(second_great_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 300000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超值裝備"},"ench":[{"id":0s,"lvl":15s},{"id":1s,"lvl":15s},{"id":3s,"lvl":15s},{"id":4s,"lvl":15s},{"id":5s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超值裝備"},"ench":[{"id":0s,"lvl":15s},{"id":1s,"lvl":15s},{"id":3s,"lvl":15s},{"id":4s,"lvl":15s},{"id":5s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超值裝備"},"ench":[{"id":0s,"lvl":15s},{"id":1s,"lvl":15s},{"id":3s,"lvl":15s},{"id":4s,"lvl":15s},{"id":5s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超值裝備"},"ench":[{"id":0s,"lvl":15s},{"id":1s,"lvl":15s},{"id":2s,"lvl":15s},{"id":3s,"lvl":15s},{"id":4s,"lvl":15s},{"id":5s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s}]}}')))
                                                pl.reduceScore('money', 300000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_great_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 400000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值裝備"},"ench":[{"id":0s,"lvl":20s},{"id":1s,"lvl":20s},{"id":3s,"lvl":20s},{"id":4s,"lvl":20s},{"id":5s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值裝備"},"ench":[{"id":0s,"lvl":20s},{"id":1s,"lvl":20s},{"id":3s,"lvl":20s},{"id":4s,"lvl":20s},{"id":5s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值裝備"},"ench":[{"id":0s,"lvl":20s},{"id":1s,"lvl":20s},{"id":3s,"lvl":20s},{"id":4s,"lvl":20s},{"id":5s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值裝備"},"ench":[{"id":0s,"lvl":20s},{"id":1s,"lvl":20s},{"id":2s,"lvl":20s},{"id":3s,"lvl":20s},{"id":4s,"lvl":20s},{"id":5s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s}]}}')))
                                                pl.reduceScore('money', 400000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 1) {
                            pl.sendForm(excellen_equipment,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_excellen_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 500000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡裝備"},"ench":[{"id":0s,"lvl":25s},{"id":1s,"lvl":25s},{"id":3s,"lvl":25s},{"id":4s,"lvl":25s},{"id":5s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡裝備"},"ench":[{"id":0s,"lvl":25s},{"id":1s,"lvl":25s},{"id":3s,"lvl":25s},{"id":4s,"lvl":25s},{"id":5s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡裝備"},"ench":[{"id":0s,"lvl":25s},{"id":1s,"lvl":25s},{"id":3s,"lvl":25s},{"id":4s,"lvl":25s},{"id":5s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡裝備"},"ench":[{"id":0s,"lvl":25s},{"id":1s,"lvl":25s},{"id":2s,"lvl":25s},{"id":3s,"lvl":25s},{"id":4s,"lvl":25s},{"id":5s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s}]}}')))
                                                pl.reduceScore('money', 500000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_excellen_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 600000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡裝備"},"ench":[{"id":0s,"lvl":30s},{"id":1s,"lvl":30s},{"id":3s,"lvl":30s},{"id":4s,"lvl":30s},{"id":5s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":20s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡裝備"},"ench":[{"id":0s,"lvl":30s},{"id":1s,"lvl":30s},{"id":3s,"lvl":30s},{"id":4s,"lvl":30s},{"id":5s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":20s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡裝備"},"ench":[{"id":0s,"lvl":30s},{"id":1s,"lvl":30s},{"id":3s,"lvl":30s},{"id":4s,"lvl":30s},{"id":5s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":20s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡裝備"},"ench":[{"id":0s,"lvl":30s},{"id":1s,"lvl":30s},{"id":2s,"lvl":30s},{"id":3s,"lvl":30s},{"id":4s,"lvl":30s},{"id":5s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":20s}]}}')))
                                                pl.reduceScore('money', 600000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_excellen_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 700000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡裝備"},"ench":[{"id":0s,"lvl":35s},{"id":1s,"lvl":35s},{"id":3s,"lvl":35s},{"id":4s,"lvl":35s},{"id":5s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡裝備"},"ench":[{"id":0s,"lvl":35s},{"id":1s,"lvl":35s},{"id":3s,"lvl":35s},{"id":4s,"lvl":35s},{"id":5s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡裝備"},"ench":[{"id":0s,"lvl":35s},{"id":1s,"lvl":35s},{"id":3s,"lvl":35s},{"id":4s,"lvl":35s},{"id":5s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡裝備"},"ench":[{"id":0s,"lvl":35s},{"id":1s,"lvl":35s},{"id":2s,"lvl":35s},{"id":3s,"lvl":35s},{"id":4s,"lvl":35s},{"id":5s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s}]}}')))
                                                pl.reduceScore('money', 700000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 2) {
                            pl.sendForm(extraordinary_equipment,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_extraordinary_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 800000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越裝備"},"ench":[{"id":0s,"lvl":40s},{"id":1s,"lvl":40s},{"id":3s,"lvl":40s},{"id":4s,"lvl":40s},{"id":5s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越裝備"},"ench":[{"id":0s,"lvl":40s},{"id":1s,"lvl":40s},{"id":3s,"lvl":40s},{"id":4s,"lvl":40s},{"id":5s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越裝備"},"ench":[{"id":0s,"lvl":40s},{"id":1s,"lvl":40s},{"id":3s,"lvl":40s},{"id":4s,"lvl":40s},{"id":5s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越裝備"},"ench":[{"id":0s,"lvl":40s},{"id":1s,"lvl":40s},{"id":2s,"lvl":40s},{"id":3s,"lvl":40s},{"id":4s,"lvl":40s},{"id":5s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s}]}}')))
                                                pl.reduceScore('money', 800000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_extraordinary_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 900000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越裝備"},"ench":[{"id":0s,"lvl":45s},{"id":1s,"lvl":45s},{"id":3s,"lvl":45s},{"id":4s,"lvl":45s},{"id":5s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越裝備"},"ench":[{"id":0s,"lvl":45s},{"id":1s,"lvl":45s},{"id":3s,"lvl":45s},{"id":4s,"lvl":45s},{"id":5s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越裝備"},"ench":[{"id":0s,"lvl":45s},{"id":1s,"lvl":45s},{"id":3s,"lvl":45s},{"id":4s,"lvl":45s},{"id":5s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越裝備"},"ench":[{"id":0s,"lvl":45s},{"id":1s,"lvl":45s},{"id":2s,"lvl":45s},{"id":3s,"lvl":45s},{"id":4s,"lvl":45s},{"id":5s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s}]}}')))
                                                pl.reduceScore('money', 900000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_extraordinary_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 1000000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越裝備"},"ench":[{"id":0s,"lvl":50s},{"id":1s,"lvl":50s},{"id":3s,"lvl":50s},{"id":4s,"lvl":50s},{"id":5s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越裝備"},"ench":[{"id":0s,"lvl":50s},{"id":1s,"lvl":50s},{"id":3s,"lvl":50s},{"id":4s,"lvl":50s},{"id":5s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越裝備"},"ench":[{"id":0s,"lvl":50s},{"id":1s,"lvl":50s},{"id":3s,"lvl":50s},{"id":4s,"lvl":50s},{"id":5s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越裝備"},"ench":[{"id":0s,"lvl":50s},{"id":1s,"lvl":50s},{"id":2s,"lvl":50s},{"id":3s,"lvl":50s},{"id":4s,"lvl":50s},{"id":5s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s}]}}')))
                                                pl.reduceScore('money', 1000000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 3) {
                            pl.sendForm(GrandMaster_equipment,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_GrandMaster_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 1100000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級大師裝備"},"ench":[{"id":0s,"lvl":55s},{"id":1s,"lvl":55s},{"id":3s,"lvl":55s},{"id":4s,"lvl":55s},{"id":5s,"lvl":55s},{"id":17s,"lvl":50s},{"id":26s,"lvl":45s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級大師裝備"},"ench":[{"id":0s,"lvl":55s},{"id":1s,"lvl":55s},{"id":3s,"lvl":55s},{"id":4s,"lvl":55s},{"id":5s,"lvl":55s},{"id":17s,"lvl":50s},{"id":26s,"lvl":45s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級大師裝備"},"ench":[{"id":0s,"lvl":55s},{"id":1s,"lvl":55s},{"id":3s,"lvl":55s},{"id":4s,"lvl":55s},{"id":5s,"lvl":55s},{"id":17s,"lvl":50s},{"id":26s,"lvl":45s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c低級大師裝備"},"ench":[{"id":0s,"lvl":55s},{"id":1s,"lvl":55s},{"id":2s,"lvl":55s},{"id":3s,"lvl":55s},{"id":4s,"lvl":55s},{"id":5s,"lvl":55s},{"id":17s,"lvl":50s},{"id":26s,"lvl":45s}]}}')))
                                                pl.reduceScore('money', 1100000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_GrandMaster_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 1200000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級大師裝備"},"ench":[{"id":0s,"lvl":60s},{"id":1s,"lvl":60s},{"id":3s,"lvl":60s},{"id":4s,"lvl":60s},{"id":5s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級大師裝備"},"ench":[{"id":0s,"lvl":60s},{"id":1s,"lvl":60s},{"id":3s,"lvl":60s},{"id":4s,"lvl":60s},{"id":5s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級大師裝備"},"ench":[{"id":0s,"lvl":60s},{"id":1s,"lvl":60s},{"id":3s,"lvl":60s},{"id":4s,"lvl":60s},{"id":5s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級大師裝備"},"ench":[{"id":0s,"lvl":60s},{"id":1s,"lvl":60s},{"id":2s,"lvl":60s},{"id":3s,"lvl":60s},{"id":4s,"lvl":60s},{"id":5s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s}]}}')))
                                                pl.reduceScore('money', 1200000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_GrandMaster_equipment,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 1300000) {
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_helmet","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師裝備"},"ench":[{"id":0s,"lvl":65s},{"id":1s,"lvl":65s},{"id":3s,"lvl":65s},{"id":4s,"lvl":65s},{"id":5s,"lvl":65s},{"id":17s,"lvl":60s},{"id":26s,"lvl":55s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_chestplate","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師裝備"},"ench":[{"id":0s,"lvl":65s},{"id":1s,"lvl":65s},{"id":3s,"lvl":65s},{"id":4s,"lvl":65s},{"id":5s,"lvl":65s},{"id":17s,"lvl":60s},{"id":26s,"lvl":55s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_leggings","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師裝備"},"ench":[{"id":0s,"lvl":65s},{"id":1s,"lvl":65s},{"id":3s,"lvl":65s},{"id":4s,"lvl":65s},{"id":5s,"lvl":65s},{"id":17s,"lvl":60s},{"id":26s,"lvl":55s}]}}')))
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_boots","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師裝備"},"ench":[{"id":0s,"lvl":65s},{"id":1s,"lvl":65s},{"id":2s,"lvl":65s},{"id":3s,"lvl":65s},{"id":4s,"lvl":65s},{"id":5s,"lvl":65s},{"id":17s,"lvl":60s},{"id":26s,"lvl":55s}]}}')))
                                                pl.reduceScore('money', 1300000)
                                                pl.tell('§l§a你已成功購買')
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    })
                } else if (id == 2) {
                    pl.sendForm(high_level_weapon,(pl,id) => {
                        if (id == 0) {
                            pl.sendForm(great_value_weapon,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_great_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 150000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值劍"},"ench":[{"id":9s,"lvl":10s},{"id":14s,"lvl":10s},{"id":12s,"lvl":10s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s},{"id":13s,"lvl":10s}]}}')))
                                                pl.reduceScore('money',150000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_great_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 200000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b中級超值劍"},"ench":[{"id":9s,"lvl":15s},{"id":14s,"lvl":15s},{"id":12s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s},{"id":13s,"lvl":15s}]}}')))
                                                pl.reduceScore('money',200000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_great_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 250000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值劍"},"ench":[{"id":9s,"lvl":20s},{"id":14s,"lvl":20s},{"id":12s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s},{"id":13s,"lvl":20s}]}}')))
                                                pl.reduceScore('money',250000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 1) {
                            pl.sendForm(excellence_weapon,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_excellent_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 300000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡劍"},"ench":[{"id":9s,"lvl":25s},{"id":14s,"lvl":25s},{"id":12s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s},{"id":13s,"lvl":25s}]}}')))
                                                pl.reduceScore('money',300000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_excellent_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 350000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡劍"},"ench":[{"id":9s,"lvl":30s},{"id":14s,"lvl":30s},{"id":12s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":20s},{"id":13s,"lvl":30s}]}}')))
                                                pl.reduceScore('money',350000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_excellent_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 400000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡劍"},"ench":[{"id":9s,"lvl":35s},{"id":14s,"lvl":35s},{"id":12s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s},{"id":13s,"lvl":35s}]}}')))
                                                pl.reduceScore('money',400000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 2) {
                            pl.sendForm(extraordinary_weapon,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_extraordinary_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 450000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越劍"},"ench":[{"id":9s,"lvl":40s},{"id":14s,"lvl":40s},{"id":12s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s},{"id":13s,"lvl":40s}]}}')))
                                                pl.reduceScore('money',450000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_extraordinary_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 500000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越劍"},"ench":[{"id":9s,"lvl":45s},{"id":14s,"lvl":45s},{"id":12s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s},{"id":13s,"lvl":45s}]}}')))
                                                pl.reduceScore('money',500000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_extraordinary_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 550000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越劍"},"ench":[{"id":9s,"lvl":50s},{"id":14s,"lvl":50s},{"id":12s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s},{"id":13s,"lvl":50s}]}}')))
                                                pl.reduceScore('money',550000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 3) {
                            pl.sendForm(Grandmaster_weapon,(pl,id) => {
                                if (id == 0) {
                                    pl.sendForm(low_GrandMaster_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 650000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級大師劍"},"ench":[{"id":9s,"lvl":60s},{"id":14s,"lvl":60s},{"id":12s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s},{"id":13s,"lvl":60s}]}}')))
                                                pl.reduceScore('money',650000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_GrandMaster_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 750000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d高級大師劍"},"ench":[{"id":9s,"lvl":70s},{"id":14s,"lvl":70s},{"id":12s,"lvl":70s},{"id":17s,"lvl":65s},{"id":26s,"lvl":60s},{"id":13s,"lvl":70s}]}}')))
                                                pl.reduceScore('money',750000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_GrandMaster_weapon,(pl,data) => {
                                        if (data == undefined) {
                                            pl.tell('§l§c你已取消購買')
                                        } else {
                                            if (pl.getScore('money') >= 850000) {
                                                pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師劍"},"ench":[{"id":9s,"lvl":80s},{"id":14s,"lvl":80s},{"id":12s,"lvl":80s},{"id":17s,"lvl":75s},{"id":26s,"lvl":70s},{"id":13s,"lvl":80s}]}}')))
                                                pl.reduceScore('money',850000)
                                            } else {
                                                pl.tell('§l§c你的錢不足')
                                            }
                                        }
                                    })
                                }
                            })
                        } else if (id == 4) {
                            pl.sendForm(bow,(pl,data) => {
                                if (data == undefined) {
                                    pl.tell('§l§c你已取消購買')
                                } else {
                                    if (pl.getScore('money') >= 500000) {
                                        pl.giveItem(mc.newItem(NBT.parseJson('{"Count":1b,"Damage":0s,"Name":"minecraft:bow","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級弓"},"ench":[{"id":20s,"lvl":50s},{"id":17s,"lvl":45s},{"id":19s,"lvl":50s},{"id":21s,"lvl":50s},{"id":22s,"lvl":1s},{"id":26s,"lvl":40s}]}}')))
                                    } else {
                                        pl.tell('§l§c你的錢不足')
                                    }
                                }
                            }) 
                        }
                    })
                }
            })
        }
    })
    cmd.setup()
})

/*粒子效果
execute as @a[tag=e1] run particle minecraft:heart_particle ~~-1~
execute as @a[tag=e2] run particle minecraft:water_wake_particle ~~-1~
execute as @a[tag=e3] run particle minecraft:bubble_column_up_particle ~~-1~
execute as @a[tag=e4] run particle minecraft:campfire_smoke_particle ~~-1~
execute as @a[tag=e5] run particle minecraft:dragon_breath_trail ~~-1~
execute as @a[tag=e6] run particle minecraft:lava_particle ~~-1~
execute as @a[tag=e7] run particle minecraft:electric_spark_particle ~~-1~
execute as @a[tag=e8] run particle minecraft:enchanting_table_particle ~~-1~
execute as @a[tag=e9] run particle minecraft:end_chest ~~-1~
*/

//等級系統
mc.listen("onTick", ()=> {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        if (pl.getScore('exp') > pl.getScore('level') * pl.getScore('level') * 5 + 5) {
            pl.addScore('money', pl.getScore('level') * pl.getScore('level') * 2)
            pl.addScore('level', 1)
            mc.broadcast('§l§b恭喜玩家' + pl.realName + '到達了' + pl.getScore('level') + '級')
            var level = pl.getScore('level') * pl.getScore('level') * 5 + 5 - pl.getScore('exp')
            pl.tell('§l§b恭喜你達到' + pl.getScore('level') +'你獲得了'+ (pl.getScore('level') * pl.getScore('level') * 2) + 'SC幣，你距離下一級還差' + level + '，總經驗值' + (pl.getScore('level') * pl.getScore('level') * 5 + 5))
        }
    }
})

//計算挖掘數量和經驗值
mc.listen("onDestroyBlock",(pl,bl) => {
    if (bl.type == 'minecraft:emerald_ore') {
        pl.addScore('exp', 1)
        pl.addScore('times', 1)
    } else if (bl.type == 'minecraft:emerald_block') {
        pl.addScore('exp', 9)
        pl.addScore('times', 1)
    }
})

//玩家Info
mc.listen('onServerStarted',() => {
    var cmd = mc.newCommand('info','你的資料',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        var pl = ori.player
        var rank = {}
        if (pl.hasTag('vip')) {
            rank = '§aVIP'
        } else if (pl.hasTag('vipp')) {
            rank = '§aVIP§6+'
        } else if (pl.hasTag('vippp')) {
            rank = '§aVIP§6++'
        } else if (pl.hasTag('mvp')) {
            rank = '§bMVP'
        } else if (pl.hasTag('mvpp')) {
            rank = '§bMVP§c+'
        } else if (pl.hasTag('mvppp')) {
            rank = '§bMVP§c++'
        } else if (pl.hasTag('team')) {
            rank = '§6Server Team'
        } else {
            rank = 'Null'
        }
        pl.tell('§l§6=======玩家資料=======\n§l§c玩家名稱\n§l§6擁有SC幣' + pl.getScore('money')+'\n§l§e擁有服主幣' + pl.getScore('ownercoins')+'\n§l§a擁有點數' + pl.getScore('point') +'\n§l§2玩家等級:' + pl.getScore('level') + '經驗:' + pl.getScore('exp') + '\n§l§b你的Rank:' + rank + '\n§l§d重生次數:' + pl.getScore('rebirth'))
    })
    cmd.setup()
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

//每秒SC幣
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        if (!pl.hasTag('donate')) {
            if (pl.hasTag('vip')) {
                pl.addScore('money',5)
            } else if (pl.hasTag('vipp')) {
                pl.addScore('money',10)
            } else if (pl.hasTag('vippp')) {
                pl.addScore('money', 20)
            } else if (pl.hasTag('mvp')) {
                pl.addScore('money', 35)
            } else if (pl.hasTag('mvpp')) {
                pl.addScore('money',50)
            } else if (pl.hasTag('team')) {
                pl.addScore('money', 100)
            } else if (pl.hasTag('yt')) {
                pl.addScore('money',50)
            }
        } else if (pl.hasTag('donate')) {
            pl.addScore('money',75)
        }
    }
}, 1000)

//重生系統
mc.listen("onServerStarted",() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]
        setInterval(() => {
            if (pl.getScore('rebirth') == 0) {
                if (pl.getScore('level') >= 500 && pl.getScore('money') >= 10000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生1的條件(等級達到500、SC幣有超過10,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 500 && pl.getScore('money') >= 10000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生1的條件(等級達到500、SC幣有超過10,000,000和擁有MVP++')
                }
            } else if (pl.getScore('rebirth') == 1) {
                if (pl.getScore('level') >= 750 && pl.getScore('money') >= 50000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生2的條件(等級達到750、SC幣有超過50,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 750 && pl.getScore('money') >= 50000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生2的條件(等級達到750、SC幣有超過50,000,000和擁有MVP++')
                }
            } else if (pl.getScore('rebirth') == 2) {
                if (pl.getScore('level') >= 1000 && pl.getScore('money') >= 100000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生3的條件(等級達到1000、SC幣有超過100,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 1000 && pl.getScore('money') >= 100000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生3的條件(等級達到1000、SC幣有超過100,000,000和擁有MVP++')
                }
            } else if (pl.getScore('rebirth') == 3) {
                if (pl.getScore('level') >= 1250 && pl.getScore('money') >= 150000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生4的條件(等級達到1250、SC幣有超過150,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 1250 && pl.getScore('money') >= 150000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生4的條件(等級達到1250、SC幣有超過150,000,000和擁有MVP++')
                }
            } else if (pl.getScore('rebirth') == 4) {
                if (pl.getScore('level') >= 1500 && pl.getScore('money') >= 200000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生5的條件(等級達到1500、SC幣有超過200,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 1500 && pl.getScore('money') >= 200000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生5的條件(等級達到1500、SC幣有超過200,000,000和擁有MVP++')
                }
            } else if (pl.getScore('rebirth') == 5) {
                if (pl.getScore('level') >= 1750 && pl.getScore('money') > 250000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生6的條件(等級達到1750、SC幣有超過250,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 1750 && pl.getScore('money') >= 250000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生6的條件(等級達到1750、SC幣有超過250,000,000和擁有MVP++')
                }
            } else if (pl.getScore('rebirth') == 6) {
                if (pl.getScore('level') >= 2000 && pl.getScore('money') >= 300000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生7的條件(等級達到2000、SC幣有超過300,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 2000 && pl.getScore('money') >= 300000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生7的條件(等級達到2000、SC幣有超過300,000,000和擁有MVP++')
                }
            } else if (pl.getScore('rebirth') == 7) {
                if (pl.getScore('level') >= 2250 && pl.getScore('money') >= 350000000 && pl.hasTag('mvpp')) {
                    pl.tell('§l§b你已達到重生8的條件(等級達到2250、SC幣有超過350,000,000和擁有MVP+')
                } else if (pl.getScore('level') >= 2250 && pl.getScore('money') >= 350000000 && pl.hasTag('mvppp')) {
                    pl.tell('§l§b你已達到重生8的條件(等級達到2250、SC幣有超過350,000,000和擁有MVP++')
                }
            }
        },1800000)
    }

    var fm = mc.newCustomForm()
    fm.setTitle('§l§9重生系統')
    fm.addInput('請輸入你現在的重生等級:','請輸入你現在的重生等級:')

    var rebirth_0 = mc.newCustomForm()
    rebirth_0.setTitle('§l§9重生系統')
    rebirth_0.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是0，升級要求是500級,10,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var rebirth_1 = mc.newCustomForm()
    rebirth_1.setTitle('§l§9重生系統')
    rebirth_1.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是1，升級要求是750級,50,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var rebirth_2 = mc.newCustomForm()
    rebirth_2.setTitle('§l§9重生系統')
    rebirth_2.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是2，升級要求是1000級,100,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var rebirth_3 = mc.newCustomForm()
    rebirth_3.setTitle('§l§9重生系統')
    rebirth_3.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是3，升級要求是1250級,150,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var rebirth_4 = mc.newCustomForm()
    rebirth_4.setTitle('§l§9重生系統')
    rebirth_4.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是4，升級要求是1500級,200,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var rebirth_5 = mc.newCustomForm()
    rebirth_5.setTitle('§l§9重生系統')
    rebirth_5.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是5，升級要求是1750級,250,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var rebirth_6 = mc.newCustomForm()
    rebirth_6.setTitle('§l§9重生系統')
    rebirth_6.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是6，升級要求是2000級,300,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var rebirth_7 = mc.newCustomForm()
    rebirth_7.setTitle('§l§9重生系統')
    rebirth_7.addLabel('§l§9玩家你好，歡迎使用重生系統，當你按下"送出"按鈕時，系統將會檢測你是否已經通過重生要求，現在你的重生次數是7，升級要求是2250級,350,000,000SC幣和擁有MVP+/MVP++，重生後，你的Rank(不包括贊助者)、等級(包括經驗值)、SC幣和所有身上的物品(你可以使用終界箱來儲存物品)會被清空')

    var cmd = mc.newCommand('rebirth','重生',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(fm,(pl,data) => {
            if (pl.getScore('rebirth') == data[0]) {
                if (pl.getScore('rebirth') < 8) {
                    if (data[0] == 0) {
                        pl.sendForm(rebirth_0,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 500 && pl.getScore('money') >= 10000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            }
                        })
                    } else if (data[0] == 1) {
                        pl.sendForm(rebirth_1,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 750 && pl.getScore('money') >= 50000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            } 
                        })
                    } else if (data[0] == 2) {
                        pl.sendForm(rebirth_2,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 1000 && pl.getScore('money') >= 100000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            }
                        })
                    } else if (data[0] == 3) {
                        pl.sendForm(rebirth_3,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 1250 && pl.getScore('money') >= 150000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            }
                        })
                    } else if (data[0] == 4) {
                        pl.sendForm(rebirth_4,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 1500 && pl.getScore('money') >= 200000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            }
                        })
                    } else if (data[0] == 5) {
                        pl.sendForm(rebirth_5,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 1750 && pl.getScore('money') >= 250000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            }
                        })
                    } else if (data[0] == 6) {
                        pl.sendForm(rebirth_6,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 2000 && pl.getScore('money') >= 300000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            }
                        })
                    } else if (data[0] == 7) {
                        pl.sendForm(rebirth_7,(pl,data) => {
                            if (data == undefined) {
                                pl.tell('§l§c你已取消操作')
                            } else {
                                if (pl.getScore('level') >= 2250 && pl.getScore('money') >= 350000000) {
                                    if (pl.hasTag('donate')) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    } else if (pl.hasTag('donate') == false) {
                                        pl.addScore('rebirth', 1)
                                        pl.setScore('level',0)
                                        pl.setScore('money',0)
                                        pl.setScore('exp',0)
                                        pl.removeTag('mvpp')
                                        mc.runcmd(`clear \"${pl.realName}\"`)
                                    }
                                } else {
                                    pl.tell('§l§c你未達到重生要求')
                                }
                            }
                        })
                    }
                } else if (pl.getScore('rebirth') >= 8) {
                    pl.tell('§l§c你已到達最高重生次數')
                }
            } else {
                pl.tell('§l§c請正確輸入數值')
            }
        })
    })
    cmd.setup(
    )
})

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

//獲取指南針
mc.listen('onServerStarted',() => {
    mc.regPlayerCmd('compass','獲取指南針(選單)',(pl) => {
        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:compass","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§l§b選單"}}}')))
    })
})

//防spam
mc.listen("onPlayerCmd",(pl,cmd) => {
    if (cmd.includes('@e') || cmd.includes('@a') || cmd.includes('@p') || cmd.includes('@r')) {
        if (!pl.hasTag('team')) {
            pl.tell('§l§c請不要嘗試刷屏')
            return false
        }
    }
})

//防聊天刷屏
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

mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('teachbook','獲取新手教學書',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        var pl = ori.player
        pl.giveItem(mc.newItem(NBT.parseSNBT('{Count:1b,tag:{generation:0,xuid:"",pages:[{text:"§l§g歡迎你來到OMSC伺服器\n§l§b目前有多項功能可以使用\n§d1.§9Rank系統\n§d2.§9轉帳系統\n§d3.§9簽到系統\n§d4.§9選單系統\n§d5.§9經濟系統\n§d6.§9商店系統\n§d7.§9等級系統\n§d8.§9計分板系統\n§d9.§9重生系統\n§d10.§9贊助者系統\n§d11.§9在線獎勵系統",photoname:""},{text:"§l§d12.§9挖掘系統\n§d13.§9效果系統\n§d14.§9防掛系統\n§d15.§9傳送系統\n§d16.§9抽獎系統\n§d17.§9聊天系統\n§a以上都是由本服插件師Br寫的\n之後有可能再增加",photoname:""},{text:"§l§9Rank系統\n§b購買Rank是要花Sc幣\n§g一般的Rank§c(就是後面沒加D的)\n§g可以用Sc幣購買必須照順序購買\n§l§gYt訂閱要150+ 必須放一個宣傳影片 觀看數要50+ 目前購買途徑有兩種 一種是打開羅盤 另一種是在聊天框輸入/rank\n",photoname:""},{text:"§l§9轉帳系統\n§g/pay\n每一筆轉帳都會抽10%\n轉帳單位為Sc幣作為計算\n如果轉帳者不在線\n會顯示不能轉帳\n輸入錯誤也會提醒",photoname:""},{text:"§l§9簽到系統\n§g/sign\n每天每一個人固定簽到一次\n過了午夜12點才能再簽到一次\n每天上線都會做提醒\n不能進行補簽",photoname:""},{text:"§l§9選單系統\n§g目前伺服器大部分重要功能\n都採以選單式的來簡化\n都以羅盤打開\n如果羅盤不見\n可以用/menu來開啟",photoname:""},{text:"§l§9經濟系統\n§g本伺服器擁有完善的經濟系統\n貨幣分成Sc幣，服主幣以及點數\n目前點數是用贊助伺服器\n才能獲得\n而Sc幣可以透過挖礦獲得\n服主幣也能進行兌換Sc幣\n服主幣要用抽獎",photoname:""},{text:"§l§9商店系統\n§g有分高級商店和一般商店\n一般商店有賣工具類附魔類\n裝備類而附魔是給書本\n高級商店\n§c請注意不能販賣給其他玩家\n如果發現直接封禁\n§g裡面有賣高級物品但必須是贊助者才能使用",photoname:""},{text:"§l§9等級系統\n§g目前獎勵的計算辦法為\n每升級一等將會給予\n等級*等級*2的Sc幣\n而目前Sc幣為本服的主要通用貨幣",photoname:""},{text:"§l§9計分板系統\n§g本服的計分板都是伺服器團隊\n精心設計的沒有一服會一樣\n都是經過反覆調整\n符合最佳視線的設計\n經過設計視線的隔擋畫最小了\n也可以透過/sidebar關閉顯示\n功能性十足都看到各人的信息\n不再像傳統的伺服器\n要一直打指令才能知道信息\n",photoname:""},{text:"§l§9重生系統\n§g目前分成八個等級\n如果到達了會跳出提示（後面21頁）\n重生後你的Rank會清除（不包括贊助者）然後會清除經驗，等級，sc幣包括身上的所有東西終界箱也會清除\n而重生後會增加1個綠寶石兌換Sc幣量\n沒重生1綠寶石=1sc幣\n重生1的1個綠寶石=2sc幣\n重生2的1個綠寶石=3綠寶石",photoname:""},{text:"§l§9贊助者系統\n§g目前本服的贊助者\n享受到的福利非常好\n不僅有高級商店還有能購買Rank贊助的相關細節在DC裡面有\n還有特別的聊天訊息\n本服的點數可以用贊助換來\n目前贊助者每秒會獲得75Sc幣",photoname:""},{text:"§l§9在線獎勵系統\n§g本服很佛心只要在線上\n都會有獎勵就算是掛機也會有\n一般玩家每三十分鐘獲得200Sc\n",photoname:""},{text:"§l§9挖掘系統\n§g目前升等的計算方式為\n等級*等級*5+5\n每挖掘綠寶石礦一次\n增加經驗一次\n可以透過附魔來增加效率\n",photoname:""},{text:"§l§9效果系統\n§g此系統是專門為贊助者設計的\n有心型\n水粒子\n氣泡水\n煙霧\n龍之吐息\n等等別人一眼就能看出你的身份地位十分炫泡",photoname:""},{text:"§l§9防掛系統\n§g目前本服封禁\n非法NBT\n就是不是透過正常管道取得的\n如果被發現將以封禁處理\n另外也嚴格禁止任何會讓\n伺服器崩掉或卡頓的東西\n就算沒有開掛就是違規請不要嘗試如果發現玩家有利用遊戲漏洞並未回報者會連同知情不報者連同處分如果有相關檢舉請去Dc檢舉",photoname:""},{text:"§l§9傳送系統\n§g傳送的區域有\n大廳\n普通礦場\nVIP礦場\nVIP+礦場\nMVP礦場\nMVP+礦場\nMVP++礦場\n以上都能透過傳送選單進行傳送",photoname:""},{text:"§l§9聊天系統\n§g本服的聊天插件都是服主自己寫\n因為不同的階級也會有不同的聊天顏色",photoname:""},{text:"§l§9抽獎系統\n§g目前抽獎活動都是不定時的\n如果有活動都會在Dc上進行公告\n抽獎有機會獲得服主幣，Sc幣，點數\n獎金豐厚請各位玩家多多關注Dc",photoname:""},{text:"§l§9重生升級需求\n§g1.500 10000000\n2.750 50000000\n3.1000 100000000\n4.1250 150000000\n5.1500 200000000\n6.1750 250000000\n7.2000 300000000\n8.2250 350000000\n每個重生等級都要擁有\nMvp,MVp+",photoname:""}],title:"§l§e[§aOMSC§e]\n§b新手須知\n§c(如果有不懂的請去dc詢問)",author:""},Damage:0s,WasPickedUp:0b,Name:"minecraft:written_book"}')))
        pl.tell('§l§a成功獲取新手教學書')
    })
})