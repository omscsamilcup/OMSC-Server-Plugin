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
    mc.regConsoleCmd('score','score', () => {
    mc.newScoreObjective('money', '閃幣')
    mc.newScoreObjective('level', '等級')
    mc.newScoreObjective('exp','經驗值')
    mc.newScoreObjective('times','挖掘次數')
    mc.newScoreObjective('playSec','秒')
    mc.newScoreObjective('playMin','分')
    mc.newScoreObjective('playHours','小時')
    mc.newScoreObjective('playDays','天')
    mc.newScoreObjective('point','點數')
    mc.newScoreObjective('ownercoins','服主幣')
    mc.newScoreObjective('rebirth', '重生次數')
    var score = ['money','level','exp','times','playSec','playMin','playHours','playDays','point','ownercoins', 'rebirth']
    var score_name = ['閃幣','等級']
    })
})

//玩家首次進入
mc.listen('onJoin',(pl) => {
    if (pl.hasTag('first') == false) {
        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:writable_book","WasPickedUp":0b,"tag":{"pages":[{"photoname":"","text":"§l§b歡迎你加入OMSC伺服器！\n§l§6我是本服的新手教學書\n§l§d閲讀這本書 來學習怎麽玩\n§l§d本服吧\n§l§9新玩家你好，我是本服服主，§9§l杯子小\n§l§a伺服器類型-綠寶石商店\n§c本服有著完美的插件體系\n§l§b所本服有地方都能用選單/指令前往"},{"photoname":"","text":""},{"photoname":"","text":"§l§9伺服器常用指令\n/mine - 前往最原本的礦場\n/vipmine - 前往VIP礦場\n/vippmine - 前往VIP+礦場\n/vipppmine - 前往VIP++礦場\n§l§9/mvpmine - 前往MVP礦場\n§l§9/mvppmine - 前往MVP+礦場\n§l§9/mvpppmine-前往MVP++礦場\n/rank - 購買Rank"},{"photoname":"","text":""},{"photoname":"","text":""}]}}')))
        pl.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:iron_pickaxe","WasPickedUp":0b,"tag":{"Damage":0}}')))
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
        pl.addTag('first')
        mc.runcmd(`give \"${pl.realName}\" compass`)
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

//聊天訊息
mc.listen('onChat',(pl,msg)=> {
    if (msg.length > 75) {
        return false
    } else if (pl.hasTag('team')) {
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
    pl.setBossBar(1,'§l§c歡迎§6你加§e入本§a伺服§2器，§b請你§d記得§c加入§6本服§eDC', 100,8)
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
                        player.tell('§l§c你的閃幣不足，需要5000閃幣。你還差' + need)
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
                        player.tell('§l§c你的閃幣不足，需要10000閃幣。你還差' + need)
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
                        player.tell('§l§c你的閃幣不足，需要25000閃幣。你還差' + need)
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
                        player.tell('§l§c你的閃幣不足，需要50000閃幣。你還差' + need)
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
                        player.tell('§l§c你的閃幣不足，需要100000閃幣。你還差' + need)
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
        var str1 = '§l§e|§r §b你擁有$o.money閃幣'.replace('$o.money', pl.getScore('money'))
        var str2 = '§l§e|§r §b服主幣$o.ownermoney 點數$o.point'.replace('$o.ownermoney', pl.getScore('ownercoins')).replace('$o.point', pl.getScore('point'))
        var str3 = '§l§e|§r §b你的重生次數o.rebirth'.replace('$o.rebirth', pl.getScore('rebirth'))
        var str4 = '§l§e|§r §b你的等級:$o.level($o.exp)'.replace('$o.level', pl.getScore('level')).replace('$o.exp', pl.getScore('exp'))
        var str5 = '§l§e|§r §b你的延遲:$o.pingms'.replace('$o.ping', dv.avgPing)
        var str6 = '§l§e|§r §b你的總游玩時間$o.playD天$o.playH小時$o.playm分鐘$o.plays'.replace('$o.playD',pl.getScore('playDays')).replace('$o.playHours',pl.getScore('playHours')).replace('$o.playm',pl.getScore('playMin')).replace('$o.plays',pl.getScore('playSec'))
        var str7 = '§l§e|§r §b你的設備:$o.os'.replace('$o.os', dv.os)
        var str8 = '§l§e|§r §b在綫人數:$o.online/100'.replace('$o.online', mc.getOnlinePlayers().length)
        var str9 = '§l§e|§r §b你的Rank:$o.rank'.replace('$o.rank', rank)
        var str10 = '§l§e|§r §b伺服器IP:omsctop.ddns.net(待定)'
        var str11 = '§l§e|§r §b埠:19132'
        var str12 = '§l§e|§r §b伺服器版本:MCPE$o.version'.replace('$o.version', mc.getBDSVersion())
        var arr = [str0,str1,str2,str3,str4,str5,str6,str7,str8,str9,str10,str11,str12]
        
        bar = '{"'
        for (i in arr) {
            bar = bar + "\§r" + arr[i] + '":' + String(Number(i)+1) + ',"'
        }
        bar = bar.slice(0,-2) + '}'
        pl.removeSidebar()
        pl.setSidebar('§l§cO§6M§eS§aC§2伺§b服§d器', JSON.parse(bar),0)
    }
}, 1000);

//抽獎
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('lottery','抽獎',PermType.Any)
    cmd.mandatory('money',ParamType.Int)
    cmd.mandatory('bouns',ParamType.Int)
    cmd.overload(['money','bouns'])
    cmd.setCallback((_cmd,ori,_out,res) => {
        const {money,bouns} = res
        if (ori.player.getScore('money') >= money) {
            ori.player.reduceScore('money', money)
            var numbers = Math.floor(Math.random() * 101)
            if (numbers >= 0 && numbers < 21) {
                ori.player.tell('§l§e你成功抽到Bouns了，你獲得了' + money * bouns)
                ori.player.addScore('money',money * bouns)
            } else if (numbers >= 21 && numbers < 51) {
                ori.player.tell('§l§b你成功抽到了Normal，你獲得了' + money)
                ori.player.addScore('money', money)
            } else if (numbers >= 51 && numbers < 101) {
                ori.player.tell('§l§c哈哈，你運氣真的差，抽到了Null，你的錢都沒了')
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
    pay.addLabel('§l§c轉賬將會收取10%手續費')
    pay.addInput('收錢者ID(請確保該玩家在綫，如果不在綫，本服將不會賠償):')
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
                        var givemoney = data[2] - (data[2]*0.1)
                        mc.runcmd(`scoreboard players add \"${data[1]}\" ${givemoney}"`)
                        pl.reduceScore('money',)
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
                    } else {
                        pl.tell('§l§c你的點數不足')
                    }
                })
            }
        })
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
                pl.runcmd('cdk')
            } else if (id == 6) {
                pl.runcmd('donate')
            } else if (id == 7) {
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
    }
    return false
})

//指南針選單
mc.listen('onUseItem',(pl,item) => {
    if (item.name == 'Compass') {
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
    tp.addInput('請輸入你要傳送的玩家(如玩家名稱有空格請加上"")');

    var kick = mc.newCustomForm()
    kick.setTitle('§l§9踢出玩家')
    kick.addInput('請輸入你要踢出的玩家(如玩家名稱有空格請加上"")');
    kick.addInput('請輸入踢出的原因(選填，請加上"")')

    var ban = mc.newCustomForm()
    ban.setTitle('§l§9封禁玩家')
    ban.addInput('請輸入玩家名稱(如玩家名稱有空格請加上""):')
    ban.addInput('請輸入封禁原因(選填，請加上""):')
    ban.addInput('請輸入封禁時間(分鐘，選填(如填寫此處必須填寫封禁原因)):')

    var unban = mc.newCustomForm()
    unban.setTitle('§l§9解除封禁(如玩家名稱有空格請加上"")')
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
                                pl.runcmd(`ban ${data[0]} ${data[1]} ${data[2]}`)
                                pl.tell('§l§a成功封禁玩家' + data[0] + '原因爲' + data[1] + '時間爲' + data[2] + '分鐘')
                            } else if (data[2] == '') {
                                pl.runcmd(`ban ${data[0]} ${data[1]}`)
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
                        pl.runcmd(`unban ${data[0]}`)
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
            } else if (id == 9) {
                pl.runcmd(`restart`)
            } else if (id == 10) {
                pl.runcmd(`stopser`)
            } else if (id == 11) {
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
    high_level_weapon.setContent('§l§9請選取你要購買的鎬子')
    high_level_weapon.addButton('§l§9超值武器')
    high_level_weapon.addButton('§l§9超凡武器')
    high_level_weapon.addButton('§l§9卓越武器')
    high_level_weapon.addButton('§l§9大師武器')

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
    second_extraordinary_pickaxe.setLabel('§l§6『低級超凡鎬子『，一把售價為350000SC幣')

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
    excellen_equipment.setTitle('§l§9超凡鎬子')
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值鎬子"},"ench":[{"id":18s,"lvl":10s},{"id":15s,"lvl":10s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超值鎬子"},"ench":[{"id":18s,"lvl":15s},{"id":15s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值鎬子"},"ench":[{"id":18s,"lvl":20s},{"id":15s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡鎬子"},"ench":[{"id":18s,"lvl":25s},{"id":15s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡鎬子"},"ench":[{"id":18s,"lvl":30s},{"id":15s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":15s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡鎬子"},"ench":[{"id":18s,"lvl":35s},{"id":15s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越鎬子"},"ench":[{"id":18s,"lvl":40s},{"id":15s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越鎬子"},"ench":[{"id":18s,"lvl":45s},{"id":15s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越鎬子"},"ench":[{"id":18s,"lvl":50s},{"id":15s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級大師鎬子"},"ench":[{"id":18s,"lvl":60s},{"id":15s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級大師鎬子"},"ench":[{"id":18s,"lvl":70s},{"id":15s,"lvl":70s},{"id":17s,"lvl":65s},{"id":26s,"lvl":60s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師鎬子"},"ench":[{"id":18s,"lvl":80s},{"id":15s,"lvl":80s},{"id":17s,"lvl":75s},{"id":26s,"lvl":70s}]}}')))
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

                                    })
                                } else if (id == 1) {
                                    pl.sendForm(second_great_equipment,(pl,data) => {

                                    })
                                } else if (id == 2) {
                                    pl.sendForm(high_great_equipment,(pl,data) => {
                                        
                                    })
                                }
                            })
                        } else if (id == 1) {
                            pl.sendForm(excellen_equipment,(pl,id) => {

                            })
                        } else if (id == 2) {
                            pl.sendForm(extraordinary_equipment,(pl,id) => {

                            })
                        } else if (id == 3) {
                            pl.sendForm(GrandMaster_equipment,(pl,id) => {

                            })
                        }
                    })
                } else if (id == 2) {
                    pl.sendForm(high_level_weapon,(pl,id) => {

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
        var pl = pl[pls]
        if (pl.getScore('exp') > pl.getScore('level') * pl.getScore('level') * 5 + 5) {
            pl.addScore('level', 1)
            mc.broadcast('§l§b恭喜玩家' + pl.realName + '的等級到達了' + pl.getScore('level'))
            pl.tell('§l§d恭喜你達到' + pl.getScore('level') + '級，這是升級的獎勵:' + pl.getScore('level') * pl.getScore('level') * 2 + 'SC幣，下一級所需的經驗值為:' + pl.getScore('exp') - (pl.getScore('level') * pl.getScore('level') * 5 + 5) + '總需要經驗值:' + pl.getScore('level') * pl.getScore('level') * 5 + 5)
        }
    }
})

//計算挖掘數量和經驗值
mc.listen("onDestroyBlock",(pl,bl) => {
    if (bl.name == 'emerald_ore') {
        pl.addScore('exp', 1)
        pl.addScore('times', 1)
    } else if (bl.name == 'emerald_block') {
        pl.addScore('exp', 1)
        pl.addScore('times', 1)
    }
})

//玩家Info
mc.listen('onServerStarted',() => {
    var cmd = mc.newCommand('info','你的資料')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
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
        ori.player.tell('§l§6=======玩家資料=======\n§l§c玩家名稱\n§l§6擁有SC幣' + pl.getScore('money')+'\n§l§e擁有服主幣' + pl.getScore('ownercoins')+'\n§l§a擁有點數' + pl.getScore('point') +'\n§l§2玩家等級:' + pl.getScore('level') + '經驗:' + pl.getScore('exp') + '\n§l§b你的Rank:' + rank + '\n§l§d重生次數:' + pl.getScore('rebirth'))
        
    })
})