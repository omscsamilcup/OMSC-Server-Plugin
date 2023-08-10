//LiteLoaderScript Dev Helper
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

var CurrentTPS = ll.import("QueryTPS", "GetCurrentTPS")

//Sidebar
setInterval(() => {
    var pls = mc.getOnlinePlayers()
    for (pl in pls) {
        var pl = pls[pl]

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

        var str0 = '§l§e| §r§b玩家名稱$name'.replace('$name',pl.realName)
        var str1 = '§l§e| §r§b你有$money空島SC幣'.replace('$money',pl.getScore('money'))
        var str2 = '§l§e| §r§b你有$point點數 $ownercoins服主幣'.replace('$point',pl.getScore('point')).replace('$ownercoins',pl.getScore('ownercoins'))
        var str3 = '§l§e| §r§b你的空島等級$level'.replace('$level',pl.getScore('level'))
        var str4 = '§l§e| §r§b伺服器TPS:$tps'.replace('$tps',CurrentTPS())
        var str5 = '§l§e| §r§b你的延遲$pingms'.replace('$ping',pl.getDevice().avgPing)
        var str6 = '§l§e| §r§b游玩時間$playD天$playH小時'.replace('$playD',pl.getScore('playDays')).replace('$playH',pl.getScore('playHours'))
        var str7 = '§l§e| §r§b           $playm分鐘$plays秒'.replace('$playm',pl.getScore('playMin')).replace('$plays',pl.getScore('playSec'))
        var str8 = '§l§e| §r§b你的設備:$os'.replace('$os', pl.getDevice().os)
        var str9 = '§l§e| §r§b在綫人數:$online/100'.replace('$online', mc.getOnlinePlayers().length)
        var str10 = '§l§e| §r§b你的Rank:$rank'.replace('$rank', rank)
        var arr = [str0,str1,str2,str3,str4,str5,str6,str7,str8,str9,str10]

        var bar = '{"'
        for (var i in arr) {
            bar = bar + "\§r" + arr[i] + '":' + String(Number(i)+1) + ',"'
        }
        bar = bar.slice(0,-2) + '}'
        if (pl.getScore('score') == 0) {
            pl.removeSidebar()
            pl.setSidebar('§l§cO§6M§eS§aC§2空§b島§d伺§c服§6器', JSON.parse(bar),0)
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

    var block = mc.newSimpleForm()
    block.setTitle('§l§9方塊類')
    block.addButton('§l§9泥土類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/9b/Dirt_JE2_BE2.png/revision/latest?cb=20200716010242')
    block.addButton('§l§9沙子類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/71/Sand_JE5_BE3.png/revision/latest?cb=20200123015955')
    block.addButton('§l§9木頭類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c5/Oak_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200328083939')
    block.addButton('§l§9石頭類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3b/Stone_JE5_BE3.png/revision/latest?cb=20200328093314')
    block.addButton('§l§9羊毛類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/66/White_Wool_JE2_BE2.png/revision/latest?cb=20200716012722')
    block.addButton('§l§9陶瓦類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e8/Terracotta_JE2_BE2.png/revision/latest?cb=20200105084827')
    block.addButton('§l§9混凝土類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/59/White_Concrete_JE1_BE1.png/revision/latest?cb=20190406132651')
    block.addButton('§l§9地獄類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/02/Netherrack_JE4_BE2.png/revision/latest?cb=20200612164913')
    block.addButton('§l§9終界類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/43/End_Stone_JE3_BE2.png/revision/latest?cb=20200612161542')
    
    var dirt = mc.newSimpleForm()
    dirt.setTitle('§l§9泥土類')
    dirt.addButton('§l§9泥土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/9b/Dirt_JE2_BE2.png/revision/latest?cb=20200716010242')
    dirt.addButton('§l§9草地','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/93/Grass_Block_JE7_BE6.png/revision/latest?cb=20201112041755')
    dirt.addButton('§l§9灰壤','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/94/Podzol_JE2_BE2.png/revision/latest?cb=20200612165551')
    dirt.addButton('§l§9菌絲土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b0/Mycelium_JE3_BE3.png/revision/latest?cb=20220330125126')
    
    var sand = mc.newSimpleForm()
    sand.setTitle('§l§9沙子類')
    sand.addButton('§l§9沙子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/71/Sand_JE5_BE3.png/revision/latest?cb=20200123015955')
    sand.addButton('§l§9紅沙','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/36/Red_Sand_JE3_BE2.png/revision/latest?cb=20200612170106')
    sand.addButton('§l§9砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/95/Sandstone_JE6_BE3.png/revision/latest?cb=20200328093034')
    sand.addButton('§l§9雕刻砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/91/Cut_Sandstone_JE5_BE2.png/revision/latest?cb=20200328092404')
    sand.addButton('§l§9切割砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d9/Chiseled_Sandstone_JE5_BE2.png/revision/latest?cb=20200612160126')
    sand.addButton('§l§9平滑砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3c/Smooth_Sandstone.png/revision/latest?cb=20200328093153')
    sand.addButton('§l§9紅砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/47/Red_Sandstone_JE4_BE2.png/revision/latest?cb=20200328093004')
    sand.addButton('§l§9雕刻紅砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/36/Cut_Red_Sandstone_JE4_BE2.png/revision/latest?cb=20200328092343')
    sand.addButton('§l§9切割紅砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1c/Chiseled_Red_Sandstone_JE4_BE2.png/revision/latest?cb=20200612160105')
    sand.addButton('§l§9平滑紅砂岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d3/Smooth_Red_Sandstone.png/revision/latest?cb=20200328093134')
    
    var log = mc.newSimpleForm()
    log.setTitle('§l§9木頭類')
    log.addButton('§l§9橡樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c5/Oak_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200328083939')
    log.addButton('§l§9杉樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/51/Spruce_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200118130553')
    log.addButton('§l§9樺樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d4/Birch_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200117162119')
    log.addButton('§l§9叢林原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/68/Jungle_Log_Axis_Y_JE6_BE3.png/revision/latest?cb=20200117162648')
    log.addButton('§l§9相思樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/be/Acacia_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200117162054')
    log.addButton('§l§9黑橡樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/93/Dark_Oak_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200117162447')
    
    var stone = mc.newSimpleForm()
    stone.setTitle('§l§9石頭類')
    stone.addButton('§l§9石頭','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3b/Stone_JE5_BE3.png/revision/latest?cb=20200328093314')
    stone.addButton('§l§9鵝卵石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/67/Cobblestone_JE5_BE3.png/revision/latest?cb=20211003165513')
    stone.addButton('§l§9礫石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/9d/Gravel_JE5_BE4.png/revision/latest?cb=20200612162432')
    stone.addButton('§l§9花崗岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/7e/Granite_JE2_BE2.png/revision/latest?cb=20200328092603')
    stone.addButton('§l§9閃長岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d7/Diorite_JE4_BE3.png/revision/latest?cb=20200328092504')
    stone.addButton('§l§9安山岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/28/Andesite_JE3_BE2.png/revision/latest?cb=20200328092204')
    stone.addButton('§l§9黑石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4f/Blackstone_JE3_BE2.png/revision/latest?cb=20210706040320')
    stone.addButton('§l§9深板岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/9c/Deepslate_JE3_BE2.png/revision/latest?cb=20210311020426')
    stone.addButton('§l§9玄武岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/ac/Basalt_Axis_Y_JE1_BE1.png/revision/latest?cb=20200329120515')
    stone.addButton('§l§9凝灰岩','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/96/Tuff_JE1_BE1.png/revision/latest?cb=20201105014631')
    stone.addButton('§l§9方解石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/45/Calcite_JE2_BE1.png/revision/latest?cb=20201112053015')
    stone.addButton('§l§9黑曜石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/99/Obsidian_JE3_BE2.png/revision/latest?cb=20200128071500')
    
    var ore = mc.newSimpleForm()
    ore.setTitle('§l§9礦物類')
    ore.addButton('§l§9煤炭','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5f/Coal_JE3_BE2.png/revision/latest?cb=20190606013740')
    ore.addButton('§l§9煤炭礦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/77/Coal_Ore_JE3.png/revision/latest?cb=20210218041112')
    ore.addButton('§l§9煤炭塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/cc/Block_of_Coal_JE3_BE2.png/revision/latest?cb=20200612154918')
    ore.addButton('§l§9鐵錠','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fc/Iron_Ingot_JE3_BE2.png/revision/latest?cb=20200612162943')
    ore.addButton('§l§9鐵礦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/19/Iron_Ore_JE6_BE4.png/revision/latest?cb=20210311020227')
    ore.addButton('§l§9鐵磚','https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Block_of_Iron_JE4_BE3.png/revision/latest?cb=20200226013546')
    ore.addButton('§l§9青金石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/43/Lapis_Lazuli_JE2_BE2.png/revision/latest?cb=20190606013932')
    ore.addButton('§l§9青金石礦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/8d/Lapis_Lazuli_Ore_JE3_BE3.png/revision/latest?cb=20210225131306')
    ore.addButton('§l§9青金石磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/55/Block_of_Lapis_Lazuli_JE3_BE3.png/revision/latest?cb=20200612163214')
    ore.addButton('§l§9金錠','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/8a/Gold_Ingot_JE4_BE2.png/revision/latest?cb=20200612162142')
    ore.addButton('§l§9金礦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/18/Gold_Ore_JE7_BE4.png/revision/latest?cb=20210414232612')
    ore.addButton('§l§9金磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/72/Block_of_Gold_JE6_BE3.png/revision/latest?cb=20200612154958')
    ore.addButton('§l§9紅石粉','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d5/Redstone_Dust_JE1_BE1.png/revision/latest?cb=20200202143419')
    ore.addButton('§l§9紅石礦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/cd/Redstone_Ore_JE4_BE3.png/revision/latest?cb=20210225132553')
    ore.addButton('§l§9紅石磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/26/Block_of_Redstone_JE2_BE2.png/revision/latest?cb=20200117162139')
    ore.addButton('§l§9鑽石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6a/Diamond_JE2_BE2.png/revision/latest?cb=20200612161112')
    ore.addButton('§l§9鑽石礦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/29/Diamond_Ore_JE5_BE5.png/revision/latest?cb=20210311020223')
    ore.addButton('§l§9鑽石磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png/revision/latest?cb=20200612154939')
    ore.addButton('§l§9綠寶石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/26/Emerald_JE3_BE3.png/revision/latest?cb=20200612161342')
    ore.addButton('§l§9綠寶石礦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3b/Emerald_Ore_JE3_BE3.png/revision/latest?cb=20210225133147')
    ore.addButton('§l§9綠寶石磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/0b/Block_of_Emerald_JE4_BE3.png/revision/latest?cb=20200612130938')
    
    var buy3 = mc.newSimpleForm()
    buy3.setTitle('§l§9雜物類')
    
    var dr = mc.newSimpleForm()
    dr.setTitle('§l§9裝飾類')
    dr.addButton('§l§9磚塊類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5a/Stone_Bricks_JE3_BE2.png/revision/latest?cb=20200328093253')
    dr.addButton('§l§9照明類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/46/Torch_JE4_BE2.png/revision/latest?cb=20200612171103')
    dr.addButton('§l§9園藝類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f5/Grass_JE4_BE3.png/revision/latest?cb=20200612162352')
    dr.addButton('§l§9珊瑚礁類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4c/Tube_Coral_Block_JE2_BE1.png/revision/latest?cb=20200716012352')
    dr.addButton('§l§9玻璃類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3e/Glass_JE4_BE2.png/revision/latest?cb=20190519011607')
    
    var brick = mc.newSimpleForm()
    brick.setTitle('§l§9磚塊類')
    brick.addButton('§l§9磚頭','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5a/Stone_Bricks_JE3_BE2.png/revision/latest?cb=20200328093253')
    brick.addButton('§l§9海麟石磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/21/Prismarine_Bricks_JE2_BE2.png/revision/latest?cb=20200328092823')
    brick.addButton('§l§9泥磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/da/Mud_Bricks_JE1_BE1.png/revision/latest?cb=20220317091916')
    
    var bright = mc.newSimpleForm()
    bright.setTitle('§l§9照明類')
    bright.addButton('§l§9螢光石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a5/Glowstone_JE4_BE2.png/revision/latest?cb=20200612162124')
    bright.addButton('§l§9海燈籠','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/75/Sea_Lantern_JE1_BE1.gif/revision/latest?cb=20190913081154')
    bright.addButton('§l§9烽火台','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/25/Beacon_JE6_BE2.png/revision/latest?cb=20200510101341')
    bright.addButton('§l§9南瓜燈','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c2/Jack_o%27Lantern_JE3_BE2.png/revision/latest?cb=20200612163045')
    bright.addButton('§l§9珠光蛙燈','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/42/Pearlescent_Froglight_JE1.png/revision/latest?cb=20220621045346')
    bright.addButton('§l§9翠綠蛙燈','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fd/Verdant_Froglight_JE1.png/revision/latest?cb=20220621045345')
    bright.addButton('§l§9赭色挖燈','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/91/Ochre_Froglight_JE1.png/revision/latest?cb=20220621045343')
    
    var grd = mc.newSimpleForm()
    grd.setTitle('§l§9園藝類')
    grd.addButton('§l§9花類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/0e/Dandelion_JE2_BE2.png/revision/latest?cb=20200612160822')
    grd.addButton('§l§9種子類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c7/Wheat_Age_0_JE3_BE2.png/revision/latest?cb=20191013070952')
    
    var flower = mc.newSimpleForm()
    flower.setTitle('§l§9花類')
    flower.addButton('§l§9蒲公英','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/0e/Dandelion_JE2_BE2.png/revision/latest?cb=20200612160822')
    flower.addButton('§l§9罌粟','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/7e/Poppy_JE3_BE2.png/revision/latest?cb=20200612165631')
    flower.addButton('§l§9藍色蝴蝶蘭','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/32/Blue_Orchid_JE2_BE2.png/revision/latest?cb=20200612155132')
    flower.addButton('§l§9紫色球花','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/01/Allium_JE2_BE2.png/revision/latest?cb=20200612153838')
    flower.addButton('§l§9雛草','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5b/Azure_Bluet_JE2_BE2.png/revision/latest?cb=20200612154349')
    flower.addButton('§l§9紅鬱金香','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/dd/Red_Tulip_JE2_BE2.png/revision/latest?cb=20200612170146')
    flower.addButton('§l§9橙鬱金香','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c8/Orange_Tulip_JE2_BE2.png/revision/latest?cb=20200612165259')
    flower.addButton('§l§9白鬱金香','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5e/White_Tulip_JE2_BE2.png/revision/latest?cb=20200612171559')
    flower.addButton('§l§9粉紅鬱金香','')
    flower.addButton('§l§9雛菊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3d/Oxeye_Daisy_JE2_BE2.png/revision/latest?cb=20200612165318')
    flower.addButton('§l§9矢車菊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/73/Cornflower_JE1_BE1.png/revision/latest?cb=20190714083934')
    flower.addButton('§l§9向日葵','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/53/Sunflower_JE2_BE2.png/revision/latest?cb=20200612170923')
    flower.addButton('§l§9紫丁香','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/be/Rose_Bush_JE2_BE3.png/revision/latest?cb=20200612170427')
    flower.addButton('§l§9玫瑰叢','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/be/Rose_Bush_JE2_BE3.png/revision/latest?cb=20200612170427')
    flower.addButton('§l§9牡丹花','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f5/Peony_JE2_BE3.png/revision/latest?cb=20200612165418')
    flower.addButton('§l§9凋零玫瑰','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fa/Wither_Rose_JE1_BE1.png/revision/latest?cb=20200716012742')
    
    var seed = mc.newSimpleForm()
    seed.setTitle('§l§9種子類')
    seed.addButton('§l§9小麥種子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fb/Wheat_Age_6_JE4_BE2.png/revision/latest?cb=20191013070939')
    seed.addButton('§l§9南瓜種子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b4/Attached_Stem_JE2_BE2.png/revision/latest?cb=20190714083634')
    seed.addButton('§l§9西瓜種子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b4/Attached_Stem_JE2_BE2.png/revision/latest?cb=20190714083634')
    seed.addButton('§l§9甜菜種子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b4/Attached_Stem_JE2_BE2.png/revision/latest?cb=20190714083634')
    
    var cr = mc.newSimpleForm()
    cr.setTitle('§l§9珊瑚礁')
    cr.addButton('§l§9紅色珊瑚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d3/Fire_Coral_JE2_BE1.png/revision/latest?cb=20190516071757')
    cr.addButton('§l§9粉紅珊瑚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/26/Brain_Coral_JE1_BE1.png/revision/latest?cb=20190516065955')
    cr.addButton('§l§9洋紅色珊瑚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/22/Bubble_Coral_JE1_BE1.png/revision/latest?cb=20190516070456')
    cr.addButton('§l§9藍色珊瑚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/44/Tube_Coral_JE1_BE1.png/revision/latest?cb=20200716012412')
    cr.addButton('§l§9黃色珊瑚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/75/Horn_Coral_JE1_BE1.png/revision/latest?cb=20190516072718')
    cr.addButton('§l§9紅色瑚扇','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/8f/Fire_Coral_Fan_JE1_BE2.png/revision/latest?cb=20190516071817')
    cr.addButton('§l§9粉紅瑚扇','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/8f/Fire_Coral_Fan_JE1_BE2.png/revision/latest?cb=20190516071817')
    cr.addButton('§l§9洋紅色瑚扇','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e5/Bubble_Coral_Fan_JE1_BE2.png/revision/latest?cb=20190406123049')
    cr.addButton('§l§9藍色瑚扇','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/89/Tube_Coral_Fan_JE1_BE2.png/revision/latest?cb=20190406132520')
    cr.addButton('§l§9黃色瑚扇','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/03/Horn_Coral_Fan_JE1_BE2.png/revision/latest?cb=20190406124627')
    cr.addButton('§l§9紅色瑚扇方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/ff/Fire_Coral_Block_JE2_BE1.png/revision/latest?cb=20180406150159')
    cr.addButton('§l§9粉紅色瑚扇方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5e/Brain_Coral_Block_JE2_BE1.png/revision/latest?cb=20180310000937')
    cr.addButton('§l§9洋紅色瑚扇方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6c/Bubble_Coral_Block_JE2_BE1.png/revision/latest?cb=20180310000958')
    cr.addButton('§l§9藍色瑚扇方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4c/Tube_Coral_Block_JE2_BE1.png/revision/latest?cb=20200716012352')
    cr.addButton('§l§9黃色瑚扇方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4a/Horn_Coral_Block_JE2_BE2.png/revision/latest?cb=20180310001041')
    
    var glass = mc.newSimpleForm()
    glass.setTitle('§l§玻璃類')
    glass.addButton('§l§9玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3e/Glass_JE4_BE2.png/revision/latest?cb=20190519011607')
    glass.addButton('§l§9白色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/83/White_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309070544')
    glass.addButton('§l§9淺灰色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e2/Light_Gray_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309070359')
    glass.addButton('§l§9灰色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/cd/Gray_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071249')
    glass.addButton('§l§9黑色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3a/Black_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071512')
    glass.addButton('§l§9棕色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/46/Brown_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071453')
    glass.addButton('§l§9紅色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/bf/Red_Stained_Glass_JE4_BE4.png/revision/latest?cb=20211121011854')
    glass.addButton('§l§9橘色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/13/Orange_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309070826')
    glass.addButton('§l§9黃色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/af/Yellow_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071226')
    glass.addButton('§l§9淺綠色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/7d/Lime_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071234')
    glass.addButton('§l§9綠色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/76/Green_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071500')
    glass.addButton('§l§9青綠色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d0/Cyan_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071259')
    glass.addButton('§l§9淺藍色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/26/Light_Blue_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309070936')
    glass.addButton('§l§9藍色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b3/Blue_Stained_Glass_JE4_BE4.png/revision/latest?cb=20211121011856')
    glass.addButton('§l§9紫色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/ca/Purple_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071308')
    glass.addButton('§l§9洋紅色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/ad/Magenta_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309070911')
    glass.addButton('§l§9粉紅色玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/68/Pink_Stained_Glass_JE3_BE3.png/revision/latest?cb=20190309071240')
    glass.addButton('§l§9遮光玻璃','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/43/Tinted_Glass_JE2_BE1.png/revision/latest?cb=20201112051825')
    
    var egg = mc.newSimpleForm()
    egg.setTitle('§l§9生怪磚')
    egg.addButton('§l§9蠑螈','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b1/Axolotl_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20201217021846')
    egg.addButton('§l§9烈焰使者','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b1/Blaze_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129164046')
    egg.addButton('§l§9毒蜘蛛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/81/Cave_Spider_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129164126')
    egg.addButton('§l§9雞','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1d/Chicken_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129164146')
    egg.addButton('§l§9牛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a1/Cow_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129164243')
    egg.addButton('§l§9苦力怕','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/00/Creeper_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129164319')
    egg.addButton('§l§9沉屍','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/63/Drowned_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200129164427')
    egg.addButton('§l§9遠古守衛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2d/Elder_Guardian_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129164507')
    egg.addButton('§l§9終界使者','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/54/Enderman_Spawn_Egg_JE2_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129164524')
    egg.addButton('§l§9終界蟎','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/cb/Endermite_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129164544')
    egg.addButton('§l§9喚魔者','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/19/Evoker_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129164605')
    egg.addButton('§l§9山羊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/93/Llama_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129164815')
    egg.addButton('§l§9深海守衛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/dd/Guardian_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129164713')
    egg.addButton('§l§9豬布獸','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/26/Hoglin_Spawn_Egg_JE2_BE2.png/revision/latest?cb=20200217132005')
    egg.addButton('§l§9屍殼','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/46/Husk_Spawn_Egg_JE1_BE2.png/revision/latest?cb=20200129164756')
    egg.addButton('§l§9鐵巨人','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e6/Iron_Golem_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20221102182628')
    egg.addButton('§l§9熔岩史萊姆','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c9/Magma_Cube_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129164835')
    egg.addButton('§l§9蘑菇牛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/59/Mooshroom_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129164916')
    egg.addButton('§l§9貓熊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/34/Panda_Spawn_Egg_JE1.png/revision/latest?cb=20210131054338')
    egg.addButton('§l§9豬','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/25/Pig_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129165217')
    egg.addButton('§l§9豬布林蠻兵','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/00/Piglin_Brute_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200626032936')
    egg.addButton('§l§9豬布林','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e6/Piglin_Spawn_Egg_JE1_BE2.png/revision/latest?cb=20200217132433')
    egg.addButton('§l§9掠奪者','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/82/Pillager_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200129165239')
    egg.addButton('§l§9兔子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c0/Rabbit_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200129165402')
    egg.addButton('§l§9劫毀獸','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1a/Ravager_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129165421')
    egg.addButton('§l§9綿羊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fd/Sheep_Spawn_Egg_JE2_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129165518')
    egg.addButton('§l§9界浮蚌','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/df/Shulker_Spawn_Egg_JE1_BE2.png/revision/latest/scale-to-width-down/150?cb=20200129165538')
    egg.addButton('§l§9骷髏馬','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/52/Skeleton_Horse_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200129165624')
    egg.addButton('§l§9骷髏','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c0/Skeleton_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129165643')
    egg.addButton('§l§9史萊姆','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4f/Slime_Spawn_Egg_JE2_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129165704')
    egg.addButton('§l§9雪人','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/9a/Snow_Golem_Spawn_Egg_JE2_BE1.png/revision/latest/scale-to-width-down/150?cb=20221102182630')
    egg.addButton('§l§9蜘蛛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/05/Spider_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129165748')
    egg.addButton('§l§9流髑','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5b/Vex_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129165948')
    egg.addButton('§l§9熾足獸','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2e/Strider_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200715105904')
    egg.addButton('§l§9衛道士','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/50/Turtle_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200129165927')
    egg.addButton('§l§9女巫','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/ca/Witch_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200129170118')
    egg.addButton('§l§9凋零骷髏','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4d/Wither_Skeleton_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200129170138')
    egg.addButton('§l§9豬屍獸','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/5c/Zoglin_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200715110133')
    egg.addButton('§l§9殭屍馬','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1d/Zombie_Horse_JE5_BE2.png/revision/latest?cb=20190823144426')
    egg.addButton('§l§9殭屍化豬布林','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/39/Zombified_Piglin_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129170223')
    egg.addButton('§l§9殭屍','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/db/Zombie_Spawn_Egg_JE2_BE1.png/revision/latest?cb=20200129170243')
    egg.addButton('§l§9村民殭屍','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a6/Zombie_Villager_Spawn_Egg_JE1_BE1.png/revision/latest?cb=20200129170303')
    var wool = mc.newSimpleForm()
    wool.setTitle('§l§9羊毛類')
    wool.addButton('§l§9白色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/66/White_Wool_JE2_BE2.png/revision/latest?cb=20200716012722')
    wool.addButton('§l§9淺灰色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/10/Light_Gray_Wool_JE3_BE3.png/revision/latest?cb=20190516073639')
    wool.addButton('§l§9灰色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/75/Gray_Wool_JE3_BE3.png/revision/latest?cb=20190516072307')
    wool.addButton('§l§9黑色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/33/Black_Wool_JE3_BE3.png/revision/latest?cb=20190406120815')
    wool.addButton('§l§9棕色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/16/Brown_Wool_JE3_BE3.png/revision/latest?cb=20190516070426')
    wool.addButton('§l§9紅色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/48/Red_Wool_JE3_BE3.png/revision/latest?cb=20190516080702')
    wool.addButton('§l§9橘色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/57/Orange_Wool_JE3_BE3.png/revision/latest?cb=20190516075040')
    wool.addButton('§l§9黃色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/74/Yellow_Wool_JE3_BE3.png/revision/latest?cb=20190516081933')
    wool.addButton('§l§9淺綠色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/bc/Lime_Wool_JE3_BE3.png/revision/latest?cb=20190516073959')
    wool.addButton('§l§9綠色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b7/Green_Wool_JE3_BE3.png/revision/latest?cb=20190516072628')
    wool.addButton('§l§9青綠色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4d/Cyan_Wool_JE3_BE3.png/revision/latest?cb=20190516071026')
    wool.addButton('§l§9淺藍色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/37/Light_Blue_Wool_JE3_BE3.png/revision/latest?cb=20190516073338')
    wool.addButton('§l§9藍色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b4/Blue_Wool_JE3_BE3.png/revision/latest?cb=20190516065915')
    wool.addButton('§l§9紫色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a5/Purple_Wool_JE3_BE3.png/revision/latest?cb=20190516080111')
    wool.addButton('§l§9洋紅色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/ff/Magenta_Wool_JE3_BE3.png/revision/latest?cb=20190516074339')
    wool.addButton('§l§9粉紅色羊毛','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/72/Pink_Wool_JE3_BE3.png/revision/latest?cb=20190516075430')
    
    var tr = mc.newSimpleForm()
    tr.setTitle('§l§9陶土類')
    tr.addButton('§l§9一般陶瓦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e8/Terracotta_JE2_BE2.png/revision/latest?cb=20200105084827')
    tr.addButton('§l§9帶釉陶瓦','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f1/Magenta_Glazed_Terracotta_JE2_BE2.png/revision/latest?cb=20191002161621')
    
    var ttr = mc.newSimpleForm()
    ttr.setTitle('§l§9一般陶土')
    ttr.addButton('§l§9陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e8/Terracotta_JE2_BE2.png/revision/latest?cb=20200105084827')
    ttr.addButton('§l§9白色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4c/White_Terracotta_JE1_BE1.png/revision/latest?cb=20200716012702')
    ttr.addButton('§l§9淺灰色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/7e/Light_Gray_Terracotta_JE1_BE1.png/revision/latest?cb=20190516073558')
    ttr.addButton('§l§9灰色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a4/Gray_Terracotta_JE1_BE1.png/revision/latest?cb=20190516072227')
    ttr.addButton('§l§9黑色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a3/Black_Terracotta_JE1_BE1.png/revision/latest?cb=20190516065445')
    ttr.addButton('§l§9棕色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/61/Brown_Terracotta_JE1_BE1.png/revision/latest?cb=20190516070345')
    ttr.addButton('§l§9紅色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/da/Red_Terracotta_JE1_BE1.png/revision/latest?cb=20190516080611')
    ttr.addButton('§l§9橘色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/07/Orange_Terracotta_JE1_BE1.png/revision/latest?cb=20190516074950')
    ttr.addButton('§l§9黃色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f9/Yellow_Terracotta_JE1_BE1.png/revision/latest?cb=20190516081853')
    ttr.addButton('§l§9淺綠色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/07/Lime_Terracotta_JE1_BE1.png/revision/latest?cb=20190516073919')
    ttr.addButton('§l§9綠色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/7b/Green_Terracotta_JE1_BE1.png/revision/latest?cb=20190516072548')
    ttr.addButton('§l§9青綠色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c2/Cyan_Terracotta_JE1_BE1.png/revision/latest?cb=20190516070946')
    ttr.addButton('§l§9淺藍色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/05/Light_Blue_Terracotta_JE1_BE1.png/revision/latest?cb=20190516073259')
    ttr.addButton('§l§9藍色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/8b/Blue_Terracotta_JE1_BE1.png/revision/latest?cb=20190516065835')
    ttr.addButton('§l§9紫色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4f/Purple_Terracotta_JE1_BE1.png/revision/latest?cb=20190516080031')
    ttr.addButton('§l§9洋紅色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c5/Magenta_Terracotta_JE1_BE1.png/revision/latest?cb=20190516074300')
    ttr.addButton('§l§9粉紅色陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b7/Pink_Terracotta_JE1_BE1.png/revision/latest?cb=20190516075340')
    
    var etr = mc.newSimpleForm()
    etr.setTitle('§l§9帶釉陶瓦')
    etr.addButton('§l§9白色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6b/White_Glazed_Terracotta_JE2_BE2.png/revision/latest?cb=20191002161558')
    etr.addButton('§l§9淺灰色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a5/Light_Gray_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161739')
    etr.addButton('§l§9灰色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d1/Gray_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161726')
    etr.addButton('§l§9黑色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/aa/Black_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161905')
    etr.addButton('§l§9棕色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f2/Brown_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161828')
    etr.addButton('§l§9紅色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/13/Red_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161854')
    etr.addButton('§l§9橘色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3f/Orange_Glazed_Terracotta_JE2_BE2.png/revision/latest?cb=20191002161610')
    etr.addButton('§l§9黃色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f1/Yellow_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161237')
    etr.addButton('§l§9淺綠色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/66/Lime_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161701')
    etr.addButton('§l§9綠色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/8d/Green_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161839')
    etr.addButton('§l§9青綠色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/10/Cyan_Glazed_Terracotta_JE2_BE2.png/revision/latest?cb=20191002161749')
    etr.addButton('§l§9淺藍色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/22/Light_Blue_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161630')
    etr.addButton('§l§9藍色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/84/Blue_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161816')
    etr.addButton('§l§9紫色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3d/Purple_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161803')
    etr.addButton('§l§9洋紅色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f1/Magenta_Glazed_Terracotta_JE2_BE2.png/revision/latest?cb=20191002161621')
    etr.addButton('§l§9粉紅色帶釉陶土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/94/Pink_Glazed_Terracotta_JE1_BE1.png/revision/latest?cb=20191002161712')
    
    var cct = mc.newSimpleForm()
    cct.setTitle('§l§9混凝土類')
    cct.addButton('§l§9白色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/59/White_Concrete_JE1_BE1.png/revision/latest?cb=20190406132651')
    cct.addButton('§l§9淺灰色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fb/Light_Gray_Concrete_JE1_BE1.png/revision/latest?cb=20190516073438')
    cct.addButton('§l§9灰色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/ad/Gray_Concrete_JE1_BE1.png/revision/latest?cb=20190516072107')
    cct.addButton('§l§9黑色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/0b/Black_Concrete_JE1_BE1.png/revision/latest?cb=20190516065325')
    cct.addButton('§l§9棕色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/34/Brown_Concrete_JE1_BE1.png/revision/latest?cb=20190516070215')
    cct.addButton('§l§9紅色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b1/Red_Concrete_JE1_BE1.png/revision/latest?cb=20190516080311')
    cct.addButton('§l§9橘色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/ab/Orange_Concrete_JE1_BE1.png/revision/latest?cb=20190516074830')
    cct.addButton('§l§9黃色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f5/Yellow_Concrete_JE1_BE1.png/revision/latest?cb=20190516081732')
    cct.addButton('§l§9淺綠色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fe/Lime_Concrete_JE1_BE1.png/revision/latest?cb=20190516073759')
    cct.addButton('§l§9綠色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/33/Green_Concrete_JE1_BE1.png/revision/latest?cb=20190516072427')
    cct.addButton('§l§9青綠色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/39/Cyan_Concrete_JE1_BE1.png/revision/latest?cb=20190516070826')
    cct.addButton('§l§9淺藍色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/93/Light_Blue_Concrete_JE1_BE1.png/revision/latest?cb=20190516073138')
    cct.addButton('§l§9藍色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/25/Blue_Concrete_JE1_BE1.png/revision/latest?cb=20190516065705')
    cct.addButton('§l§9紫色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/92/Purple_Concrete_JE1_BE1.png/revision/latest?cb=20190516075911')
    cct.addButton('§l§9洋紅色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f3/Magenta_Concrete_JE1_BE1.png/revision/latest?cb=20190516074139')
    cct.addButton('§l§9粉紅色混凝土','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/09/Pink_Concrete_JE1_BE1.png/revision/latest?cb=20190516075220')
    
    var nth = mc.newSimpleForm()
    nth.setTitle('§l§9地獄類')
    nth.addButton('§l§9地獄石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/02/Netherrack_JE4_BE2.png/revision/latest?cb=20200612164913')
    nth.addButton('§l§9靈魂沙','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6d/Soul_Sand_JE2_BE2.png/revision/latest?cb=20180501044105')
    nth.addButton('§l§9熔岩塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d1/Magma_Block_JE2_BE2.gif/revision/latest?cb=20191123031151')
    nth.addButton('§l§9地獄疙瘩方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d0/Nether_Wart_Block_JE3.png/revision/latest?cb=20200328085553')
    nth.addButton('§l§9奇怪疙瘩方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f0/Warped_Wart_Block_JE1_BE1.png/revision/latest?cb=20200328071855')
    nth.addButton('§l§9菌光體','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/83/Shroomlight_JE1_BE1.png/revision/latest?cb=20200329152758')
    nth.addButton('§l§9深紅菌絲石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/69/Crimson_Nylium_JE1_BE1.png/revision/latest?cb=20200402091340')
    nth.addButton('§l§9奇怪菌絲石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/25/Warped_Nylium_JE1_BE1.png/revision/latest?cb=20200402091800')
    nth.addButton('§l§9紅樹木原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1e/Mangrove_Log_%28UD%29_JE1_BE1.png/revision/latest?cb=20220317063223')
    nth.addButton('§l§9深紅莖','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/0/08/Crimson_Stem_Axis_Y_JE2_BE1.gif/revision/latest?cb=20200410000051')
    nth.addButton('§l§9奇怪蕈柄','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/ff/Warped_Stem_Axis_Y_JE2_BE1.gif/revision/latest?cb=20200410004855')
    nth.addButton('§l§9地獄磚塊方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/99/Nether_Bricks_JE3_BE4.png/revision/latest?cb=20200117162809')
    nth.addButton('§l§9紅色地獄磚塊方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/95/Red_Nether_Bricks_JE3_BE2.png/revision/latest?cb=20200328092943')
    
    var end = mc.newSimpleForm()
    end.setTitle('§l§9終界類')
    end.addButton('§l§9終界石','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/43/End_Stone_JE3_BE2.png/revision/latest?cb=20200612161542')
    end.addButton('§l§9歌萊花','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/ca/Chorus_Flower_JE2_BE2.png/revision/latest?cb=20200612160205')
    end.addButton('§l§9歌萊枝','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a7/Chorus_Plant_JE2_BE2.png/revision/latest?cb=20200612160225')
    end.addButton('§l§9終界石磚塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/72/End_Stone_Bricks_JE2_BE2.png/revision/latest?cb=20200328092544')
    end.addButton('§l§9紫珀塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d1/Purpur_Block_JE2_BE2.png/revision/latest?cb=20200328092924')
    end.addButton('§l§9紫珀柱','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3b/Purpur_Pillar_Axis_X_JE3_BE2.png/revision/latest?cb=20200227013509')

    var food = mc.newSimpleForm()
    food.setTitle('§l§9食物類')
    food.addButton('§l§9蘋果','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/af/Apple_JE3_BE3.png/revision/latest?cb=20200612153948')
    food.addButton('§l§9烤馬鈴薯','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/e0/Baked_Potato_JE4_BE2.png/revision/latest?cb=20190424065345')
    food.addButton('§l§9麵包','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/44/Bread_JE3_BE3.png/revision/latest?cb=20190424085127')
    food.addButton('§l§9胡蘿蔔','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4c/Carrot_JE2_BE1.png/revision/latest?cb=20200125214359')
    food.addButton('§l§9烤雞','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/29/Cooked_Chicken_JE2_BE2.png/revision/latest?cb=20200612160528')
    food.addButton('§l§9烤鱈魚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/53/Cooked_Cod_JE4_BE3.png/revision/latest?cb=20190606121828')
    food.addButton('§l§9烤羊肉','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/7d/Cooked_Mutton_JE3_BE2.png/revision/latest?cb=20190424100446')
    food.addButton('§l§9烤豬排','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/ee/Cooked_Porkchop_JE4_BE3.png/revision/latest?cb=20190424101537')
    food.addButton('§l§9烤兔肉','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1b/Cooked_Rabbit_JE3_BE2.png/revision/latest?cb=20190424102257')
    food.addButton('§l§9烤鮭魚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2b/Cooked_Salmon_JE2_BE2.png/revision/latest?cb=20180227031141')
    food.addButton('§l§9餅乾','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b3/Cookie_JE2_BE2.png/revision/latest?cb=20190424091121')
    food.addButton('§l§9海帶乾','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1a/Dried_Kelp_JE1_BE2.png/revision/latest?cb=20191208083902')
    food.addButton('§l§9附魔金蘋果','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/e/ed/Enchanted_Golden_Apple_JE2_BE2.gif/revision/latest?cb=20190914063414')
    food.addButton('§l§9金蘋果','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/54/Golden_Apple_JE2_BE2.png/revision/latest?cb=20200612162222')
    food.addButton('§l§9西瓜片','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f2/Melon_Slice_JE2_BE2.png/revision/latest?cb=20190424100306')
    food.addButton('§l§9南瓜派','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/ac/Pumpkin_Pie_JE2_BE2.png/revision/latest?cb=20190424101937')
    food.addButton('§l§9牛排','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1b/Steak_JE3_BE3.png/revision/latest?cb=20190424065405')
    food.addButton('§l§9種子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/a/a2/Wheat_Age_7_JE4_BE2.png/revision/latest?cb=20200612171429')
    
    var others = mc.newSimpleForm()
    others.setTitle('§l§9雜物類')
    others.addButton('§l§9岩漿桶','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/74/Lava_Bucket_JE2_BE2.png/revision/latest?cb=20200612163314')
    others.addButton('§l§9水桶','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/dc/Water_Bucket_JE2_BE2.png/revision/latest?cb=20190424085557')
    others.addButton('§l§9史萊姆方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/bb/Slime_Block_JE2_BE3.png/revision/latest?cb=20200612170447')
    others.addButton('§l§9蜂蜜方塊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c4/Honey_Block_JE1_BE2.png/revision/latest?cb=20200716010622')
    others.addButton('§l§9界伏盒','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/85/Shulker_Box_JE1_BE1.png/revision/latest?cb=20190406131617')
    others.addButton('§l§9龍蛋','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/72/Dragon_Egg_JE2.png/revision/latest?cb=20220819081722')
    others.addButton('§l§9龍首','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/7c/Dragon_Head_JE1_BE1.png/revision/latest?cb=20200717123836')
    others.addButton('§l§9鞘翅','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/1/1f/Elytra_%28item%29_JE1_BE1.png/revision/latest?cb=20190424092402')
    others.addButton('§l§9煙火','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/fd/Firework_Rocket_JE2_BE2.png/revision/latest?cb=20200716063447')
    others.addButton('§l§9三叉戟','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/ba/Trident_%28item%29.png/revision/latest?cb=20200602091354')
    others.addButton('§l§9不死圖騰','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2e/Totem_of_Undying_JE2_BE2.png/revision/latest?cb=20200612171123')
    
    var buy = mc.newSimpleForm()
    buy.setTitle('§l§9購買物品')
    buy.addButton('§l§9方塊類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2d/Plains_Grass_Block.png/revision/latest?cb=20190718020450')
    buy.addButton('§l§9礦物類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6a/Diamond_JE2_BE2.png/revision/latest?cb=20200612161112')
    buy.addButton('§l§9食物類','https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/6/66/Steak.png')
    buy.addButton('§l§9裝飾類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f5/Peony_JE2_BE3.png/revision/latest?cb=20200612165418')
    buy.addButton('§l§9雜物類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/87/Blaze_Rod_JE1_BE1.png/revision/latest?cb=20190907013007')
    buy.addButton('§l§9生怪磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/40/Spawner_JE3.png/revision/latest/scale-to-width-down/150?cb=20200612170702')

    var sell = mc.newSimpleForm()
    sell.setTitle('§l§9出售物品')
    sell.addButton('§l§9方塊類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/2d/Plains_Grass_Block.png/revision/latest?cb=20190718020450')
    sell.addButton('§l§9礦物類','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6a/Diamond_JE2_BE2.png/revision/latest?cb=20200612161112')
    sell.addButton('§l§9生怪磚','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/40/Spawner_JE3.png/revision/latest/scale-to-width-down/150?cb=20200612170702')
    
    //function
    var produts_buy = [
        { id: 1, id2: 0, name: 'dirt', price: 3},
        { id: 2, id2: 0, name: 'grass', price: 5},
        { id: 3, id2: 0, name: 'podzol', price: 3},
        { id: 4, id2: 0, name: 'mycelium', price: 5},
        { id: 5, id2: 0, name: 'sand', price: 3},
        { id: 6, id2: 0, name: 'red_sand', price: 2},
        { id: 7, id2: 0, name: 'sandstone', price: 2},
        { id: 8, id2: 1, name: 'sandstone', price: 3},
        { id: 9, id2: 2, name: 'sandstone', price: 3},
        { id: 10, id2: 3, name: 'sandstone', price: 3},
        { id: 11, id2: 0, name: 'red_sandstone', price: 2},
        { id: 12, id2: 1, name: 'red_sandstone', price: 3},
        { id: 13, id2: 2, name: 'red_sandstone', price: 3},
        { id: 14, id2: 3, name: 'red_sandstone', price: 3},
        { id: 15, id2: 0, name: 'oak_log', price: 5},
        { id: 16, id2: 0, name: 'spruce_log', price: 5},
        { id: 17, id2: 0, name: 'birch_log', price: 5},
        { id: 18, id2: 0, name: 'jungle_log', price: 5},
        { id: 19, id2: 0, name: 'acacia_log', price: 5},
        { id: 20, id2: 0, name: 'dark_oak_log', price: 5},
        { id: 21, id2: 0, name: 'stone', price: 3},
        { id: 22, id2: 0, name: 'cobblestone', price: 3},
        { id: 23, id2: 0, name: 'gravel', price: 6},
        { id: 24, id2: 0, name: 'granite', price: 3},
        { id: 25, id2: 0, name: 'diorite', price: 3},
        { id: 26, id2: 0, name: 'amdesite', price: 3},
        { id: 27, id2: 0, name: 'blackstone', price: 3},
        { id: 28, id2: 0, name: 'deepslate', price: 3},
        { id: 29, id2: 0, name: 'basalt', price: 3},
        { id: 30, id2: 0, name: 'tuff', price: 5},
        { id: 31, id2: 0, name: 'calcite', price: 5},
        { id: 32, id2: 0, name: 'obsidian', price: 200},
        { id: 33, id2: 0, name: 'coal', price: 15},
        { id: 34, id2: 0, name: 'coal_ore', price: 15},
        { id: 35, id2: 0, name: 'coal_block', price: 135},
        { id: 36, id2: 0, name: 'iron_ingot', price: 20},
        { id: 37, id2: 0, name: 'iron_ore', price: 20},
        { id: 38, id2: 0, name: 'iron_block', price: 180},
        { id: 39, id2: 0, name: 'lapis_lazuli', price: 10},
        { id: 40, id2: 0, name: 'lapis_ore', price: 10},
        { id: 41, id2: 0, name: 'gold_ingot', price: 20},
        { id: 42, id2: 0, name: 'gold_ore', price: 20},
        { id: 43, id2: 0, name: 'gold_block', price: 180},
        { id: 44, id2: 0, name: 'redstone', price: 10},
        { id: 45, id2: 0, name: 'redstone_ore', price: 10},
        { id: 46, id2: 0, name: 'redstone_block', price: 90},
        { id: 47, id2: 0, name: 'diamond', price: 55},
        { id: 48, id2: 0, name: 'diamond_ore', price: 55},
        { id: 49, id2: 0, name: 'diamond_block', price: 495},
        { id: 50, id2: 0, name: 'emerald', price: 65},
        { id: 51, id2: 0, name: 'emerald_ore', price: 65},
        { id: 52, id2: 0, name: 'emerald_block', price: 585},
        { id: 53, id2: 0, name: 'brick_block', price: 5},
        { id: 54, id2: 2, name: 'prismarine', price: 5},
        { id: 55, id2: 0, name: 'mud_bricks', price: 5},
        { id: 56, id2: 0, name: 'glowstone', price: 10},
        { id: 57, id2: 0, name: 'ea_lantern', price: 15},
        { id: 58, id2: 0, name: 'beacon', price: 20000},
        { id: 59, id2: 0, name: 'lit_pumpkin', price: 10},
        { id: 60, id2: 0, name: 'pearlescent_froglight', price: 10},
        { id: 61, id2: 0, name: 'verdant_froglight', price: 10},
        { id: 62, id2: 0, name: 'ochre_froglight', price: 10},
        { id: 63, id2: 0, name: 'yellow_flower', price: 1},
        { id: 64, id2: 0, name: 'red_flower', price: 1},
        { id: 65, id2: 1, name: 'red_flower', price: 1},
        { id: 66, id2: 2, name: 'red_flower', price: 1},
        { id: 67, id2: 3, name: 'red_flower', price: 1},
        { id: 68, id2: 4, name: 'red_flower', price: 1},
        { id: 69, id2: 5, name: 'red_flower', price: 1},
        { id: 70, id2: 6, name: 'red_flower', price: 1},
        { id: 71, id2: 7, name: 'red_flower', price: 1},
        { id: 72, id2: 8, name: 'red_flower', price: 1},
        { id: 73, id2: 9, name: 'double_plant', price: 1},
        { id: 74, id2: 1, name: 'double_plant', price: 1},
        { id: 75, id2: 4, name: 'double_plant', price: 1},
        { id: 76, id2: 5, name: 'double_plant', price: 1},
        { id: 77, id2: 0, name: 'wither_rose', price: 3},
        { id: 78, id2: 0, name: 'wheat_seeds', price: 3},
        { id: 79, id2: 0, name: 'pumpkin_seeds', price: 3},
        { id: 80, id2: 0, name: 'beetroot_seeds', price: 3},
        { id: 81, id2: 3, name: 'coral', price: 5},
        { id: 82, id2: 1, name: 'coral', price: 5},
        { id: 83, id2: 2, name: 'coral', price: 5},
        { id: 84, id2: 0, name: 'coral', price: 5},
        { id: 85, id2: 4, name: 'coral', price: 5},
        { id: 86, id2: 3, name: 'coral_fan', price: 5},
        { id: 87, id2: 1, name: 'coral_fan', price: 5},
        { id: 88, id2: 2, name: 'coral_fan', price: 5},
        { id: 89, id2: 0, name: 'coral_fan', price: 5},
        { id: 90, id2: 4, name: 'coral_fan', price: 5},
        { id: 91, id2: 3, name: 'coral_block', price: 5},
        { id: 92, id2: 1, name: 'coral_block', price: 5},
        { id: 93, id2: 2, name: 'coral_block', price: 5},
        { id: 94, id2: 0, name: 'coral_block', price: 5},
        { id: 95, id2: 4, name: 'coral_block', price: 5},
        { id: 96, id2: 0, name: 'glass', price: 5},
        { id: 97, id2: 0, name: 'stained_glass', price: 5},
        { id: 98, id2: 8, name: 'stained_glass', price: 5},
        { id: 99, id2: 7, name: 'stained_glass', price: 5},
        { id: 100, id2: 15, name: 'stained_glass', price: 5},
        { id: 101, id2: 12, name: 'stained_glass', price: 5},
        { id: 102, id2: 14, name: 'stained_glass', price: 5},
        { id: 103, id2: 1, name: 'stained_glass', price: 5},
        { id: 104, id2: 4, name: 'stained_glass', price: 5},
        { id: 105, id2: 5, name: 'stained_glass', price: 5},
        { id: 106, id2: 13, name: 'stained_glass', price: 5},
        { id: 107, id2: 9, name: 'stained_glass', price: 5},
        { id: 108, id2: 3, name: 'stained_glass', price: 5},
        { id: 109, id2: 11, name: 'stained_glass', price: 5},
        { id: 110, id2: 10, name: 'stained_glass', price: 5},
        { id: 111, id2: 2, name: 'stained_glass', price: 5},
        { id: 112, id2: 6, name: 'stained_glass', price: 5},
        { id: 113, id2: 0, name: 'tinted_glass', price: 5},
        { id: 114, id2: 0, name: 'axolotl_spawn_egg', price: 200000},
        { id: 115, id2: 0, name: 'blaze_spawn_egg', price: 150000},
        { id: 116, id2: 0, name: 'cave_spider_spawn_egg', price: 150000},
        { id: 117, id2: 0, name: 'chicken_spawn_egg', price: 150000},
        { id: 118, id2: 0, name: 'cow_spawn_egg', price: 150000},
        { id: 119, id2: 0, name: 'creeper_spawn_egg', price: 200000},
        { id: 120, id2: 0, name: 'drowned_spawn_egg', price: 150000},
        { id: 121, id2: 0, name: 'elder_guardian_spawn_egg', price: 200000},
        { id: 122, id2: 0, name: 'enderman_spawn_egg', price: 300000},
        { id: 123, id2: 0, name: 'endermite_spawn_egg', price: 100000},
        { id: 124, id2: 0, name: 'evoker_spawn_egg', price: 2500000},
        { id: 125, id2: 0, name: 'goat_spawn_egg', price: 150000},
        { id: 126, id2: 0, name: 'guardian_spawn_egg', price: 150000},
        { id: 127, id2: 0, name: 'hoglin_spawn_egg', price: 100000},
        { id: 128, id2: 0, name: 'husk_spawn_egg', price: 150000},
        { id: 129, id2: 0, name: 'iron_gol', price: 500000},
        { id: 130, id2: 0, name: 'magma_cube_spawn_egg', price: 150000},
        { id: 131, id2: 0, name: 'mooshroom_spawn_egg', price: 200000},
        { id: 132, id2: 0, name: 'panda_spawn_egg', price: 150000},
        { id: 133, id2: 0, name: 'pig_spawn_egg', price: 150000},
        { id: 134, id2: 0, name: 'piglin_brute_sawn_egg', price: 200000},
        { id: 135, id2: 0, name: 'piglin_spawn_egg', price: 200000},
        { id: 136, id2: 0, name: 'pillager_spawn_egg', price: 200000},
        { id: 137, id2: 0, name: 'rabbit_spawn_egg', price: 150000},
        { id: 138, id2: 0, name: 'ravager_spawn_egg', price: 200000},
        { id: 139, id2: 0, name: 'sheeep_spawn_egg', price: 100000},
        { id: 140, id2: 0, name: 'shulker_spawn_egg', price: 450000},
        { id: 141, id2: 0, name: 'skeleton_horse_spawn_egg', price: 200000},
        { id: 142, id2: 0, name: 'skeleton_spawn_egg', price: 150000},
        { id: 143, id2: 0, name: 'slime_spawn_egg', price: 150000},
        { id: 144, id2: 0, name: 'snow_golem_spawn_egg', price: 10000},
        { id: 145, id2: 0, name: 'spider_spawn_egg', price: 150000},
        { id: 146, id2: 0, name: 'stray_spawn_egg', price: 150000},
        { id: 147, id2: 0, name: 'strider_spawn_egg', price: 250000},
        { id: 148, id2: 0, name: 'vindicator_spawn_egg', price: 250000},
        { id: 149, id2: 0, name: 'witch_spawn_egg', price: 150000},
        { id: 150, id2: 0, name: 'wither_skeleton_spawm_egg', price: 200000},
        { id: 151, id2: 0, name: 'zoglin_spawn_egg', price: 150000},
        { id: 152, id2: 0, name: 'zombie_horse_spawn_egg', price: 150000},
        { id: 153, id2: 0, name: 'zombie_pigman_spawn_egg', price: 100000},
        { id: 154, id2: 0, name: 'zombie_spawn_egg', price: 100000},
        { id: 155, id2: 0, name: 'zombie_villager_spawn_egg', price: 100000},
        { id: 156, id2: 0, name: 'white_wool', price: 6},
        { id: 157, id2: 0, name: 'light_gray_wool', price: 6},
        { id: 158, id2: 0, name: 'gray_wool', price: 6},
        { id: 159, id2: 0, name: 'black_wool', price: 6},
        { id: 160, id2: 0, name: 'brown_wool', price: 6},
        { id: 161, id2: 0, name: 'red_wool', price: 6},
        { id: 162, id2: 0, name: 'orange_wool', price: 6},
        { id: 163, id2: 0, name: 'yellow_wool', price: 6},
        { id: 164, id2: 0, name: 'green_wool', price: 6},
        { id: 165, id2: 0, name: 'cyan_wool', price: 6},
        { id: 166, id2: 0, name: 'light_blue_wool', price: 6},
        { id: 167, id2: 0, name: 'blue_wool', price: 6},
        { id: 168, id2: 0, name: 'purple_wool', price: 6},
        { id: 169, id2: 0, name: 'magenta_wool', price: 6},
        { id: 170, id2: 0, name: 'pink_wool', price: 6},
        { id: 171, id2: 0, name: 'hardened_clay', price: 10},
        { id: 172, id2: 0, name: 'stained_hardened_clay', price: 10},
        { id: 173, id2: 8, name: 'stained_hardened_clay', price: 10},
        { id: 174, id2: 7, name: 'stained_hardened_clay', price: 10},
        { id: 175, id2: 15, name: 'stained_hardened_clay', price: 10},
        { id: 176, id2: 12, name: 'stained_hardened_clay', price: 10},
        { id: 177, id2: 14, name: 'stained_hardened_clay', price: 10},
        { id: 178, id2: 1, name: 'stained_hardened_clay', price: 10},
        { id: 179, id2: 4, name: 'stained_hardened_clay', price: 10},
        { id: 180, id2: 5, name: 'stained_hardened_clay', price: 10},
        { id: 181, id2: 13, name: 'stained_hardened_clay', price: 10},
        { id: 182, id2: 9, name: 'stained_hardened_clay', price: 10},
        { id: 183, id2: 3, name: 'stained_hardened_clay', price: 10},
        { id: 184, id2: 11, name: 'stained_hardened_clay', price: 10},
        { id: 185, id2: 10, name: 'stained_hardened_clay', price: 10},
        { id: 186, id2: 2, name: 'stained_hardened_clay', price: 10},
        { id: 187, id2: 6, name: 'stained_hardened_clay', price: 10},
        { id: 188, id2: 0, name: 'white_glazed_terracotta', price: 15},
        { id: 189, id2: 0, name: 'silver_glazed_terracotta', price: 15},
        { id: 190, id2: 0, name: 'gray_glazed_terracotta', price: 15},
        { id: 191, id2: 0, name: 'black_glazed_terracotta', price: 15},
        { id: 192, id2: 0, name: 'brown_glazed_terracotta', price: 15},
        { id: 193, id2: 0, name: 'red_glazed_terracotta', price: 15},
        { id: 194, id2: 0, name: 'orange_glazed_terracotta', price: 15},
        { id: 195, id2: 0, name: 'lime_glazed_terracotta', price: 15},
        { id: 196, id2: 0, name: 'green_glazed_terracotta', price: 15},
        { id: 197, id2: 0, name: 'cyan_glazed_terracotta', price: 15},
        { id: 198, id2: 0, name: 'light_blue_glazed_terracotta', price: 15},
        { id: 199, id2: 0, name: 'blue_glazed_terracotta', price: 15},
        { id: 200, id2: 0, name: 'purple_glazed_terracotta', price: 15},
        { id: 201, id2: 0, name: 'magenta_glazed_terracotta', price: 15},
        { id: 202, id2: 0, name: 'pink_glazed_terracotta', price: 15},
        { id: 203, id2: 0, name: 'white_concrete', price: 15},
        { id: 204, id2: 0, name: 'light_gray_concrete', price: 15},
        { id: 205, id2: 0, name: 'gray_concrete', price: 15},
        { id: 206, id2: 0, name: 'black_concrete', price: 15},
        { id: 207, id2: 0, name: 'brown_concrete', price: 15},
        { id: 208, id2: 0, name: 'red_concrete', price: 15},
        { id: 209, id2: 0, name: 'orange_concrete', price: 15},
        { id: 210, id2: 0, name: 'yellow_concrete', price: 15},
        { id: 211, id2: 0, name: 'lime_concrete', price: 15},
        { id: 212, id2: 0, name: 'green_concrete', price: 15},
        { id: 213, id2: 0, name: 'cyan_concrete', price: 15},
        { id: 214, id2: 0, name: 'light_blue_concrete', price: 15},
        { id: 215, id2: 0, name: 'blue_concrete', price: 15},
        { id: 216, id2: 0, name: 'purple_concrete', price: 15},
        { id: 217, id2: 0, name: 'magenta_concrete', price: 15},
        { id: 218, id2: 0, name: 'pink_concrete', price: 15},
        { id: 219, id2: 0, name: 'netherrack', price: 5},
        { id: 220, id2: 0, name: 'soul_sand', price: 10},
        { id: 221, id2: 0, name: 'magma', price: 15},
        { id: 222, id2: 0, name: 'nether_wart_block', price: 90},
        { id: 223, id2: 0, name: 'warped_wart_block', price: 90},
        { id: 224, id2: 0, name: 'shroomlight', price: 10},
        { id: 225, id2: 0, name: 'crimson_nylium', price: 10},
        { id: 226, id2: 0, name: 'warped_nylium', price: 10},
        { id: 227, id2: 0, name: 'mangrove_log', price: 15},
        { id: 228, id2: 0, name: 'crimson_stem', price: 15},
        { id: 229, id2: 0, name: 'warped_stem', price: 15},
        { id: 230, id2: 0, name: 'nether_brick', price: 15},
        { id: 231, id2: 0, name: 'red_nether_brick', price: 20},
        { id: 232, id2: 0, name: 'end_stone', price: 5},
        { id: 233, id2: 0, name: 'chorus_flower', price: 3},
        { id: 234, id2: 0, name: 'end_bricks', price: 7},
        { id: 235, id2: 0, name: 'purpur_block', price: 7},
        { id: 236, id2: 2, name: 'purpur_block', price: 7},
        { id: 237, id2: 0, name: 'apple', price: 3},
        { id: 238, id2: 0, name: 'baked_potato', price: 5},
        { id: 239, id2: 0, name: 'bread', price: 3},
        { id: 240, id2: 0, name: 'carrot', price: 3},
        { id: 241, id2: 0, name: 'cooked_chicken', price: 5},
        { id: 242, id2: 0, name: 'cooked_cod', price: 5},
        { id: 243, id2: 0, name: 'cooked_mutton', price: 5},
        { id: 244, id2: 0, name: 'cooked_porkchop', price: 5},
        { id: 245, id2: 0, name: 'cooked_rabbit', price: 5},
        { id: 246, id2: 0, name: 'cooked_salmon', price: 5},
        { id: 247, id2: 0, name: 'cookie', price: 1},
        { id: 248, id2: 0, name: 'dried_kelp', price: 1},
        { id: 249, id2: 0, name: 'enchanted_golden_apple', price: 1000},
        { id: 250, id2: 0, name: 'golden_apple', price: 500},
        { id: 251, id2: 0, name: 'melon_slice', price: 3},
        { id: 252, id2: 0, name: 'pumpkin_pie', price: 1},
        { id: 253, id2: 0, name: 'cooked_beef', price: 7},
        { id: 254, id2: 0, name: 'wheat_seeds', price: 3},
        { id: 255, id2: 0, name: 'lava_bucket', price: 10},
        { id: 256, id2: 0, name: 'water_bucket', price: 10},
        { id: 257, id2: 0, name: 'slime', price: 5},
        { id: 258, id2: 0, name: 'honey_block', price: 5},
        { id: 259, id2: 0, name: 'shulker_box', price: 2000},
        { id: 260, id2: 0, name: 'dragon_egg', price: 50000},
        { id: 261, id2: 5, name: 'skull', price: 35000},
        { id: 262, id2: 0, name: 'elytra', price: 750},
        { id: 263, id2: 0, name: 'firework_rocket', price: 3},
        { id: 264, id2: 0, name: 'trident', price: 500},
        { id: 265, id2: 0, name: 'totem_of_undying', price: 1000},
        { id: 266, id2: 0, name: 'lime_wool', price: 6},
        { id: 267, id2: 0, name: 'yellow_glazed_terracotta', price: 15},
        { id: 268, id2: 0, name: 'chorus_plant', price: 5},
        { id: 269, id2: 0, name: 'lapis_block', price: 90},
        { id: 270, id2: 9, name: 'red_flower', price: 1},
        { id: 271, id2: 9, name: 'melon_seeds', price: 3},
    ]

    var produts_sell = [
        { id: 1, id2: 9, name: 'dirt', swlllPrice: 1},
    ]      
    function buyM(itemId,pl) {
        var item = produts_buy.find((produts) => produts.id === itemId)
        var buyMenu = mc.newCustomForm()
        buyMenu.setTitle('買東西')
        buyMenu.addLabel(`物品名稱§l§a${item.name}`)
        buyMenu.addLabel(`物品單價§l§e${item.price}`)
        buyMenu.addInput('購買數量')
        if (!item) {
            player.tell('該商品不存在!')
            return
        } else {
            var buyMenu = mc.newCustomForm()
            buyMenu.setTitle('買東西')
            buyMenu.addLabel(`物品名稱§l§a${item.name}`)
            buyMenu.addLabel(`物品單價§l§e${item.price}`)
            buyMenu.addInput('購買數量')
            pl.sendForm(buyMenu,(pl,data) => {
                var player = pl
                var quantity = parseInt(data[2])
                if (isNaN(quantity) || quantity <= 0) {
                    pl.tell('§l§c請輸入正確的數字')
                } else {
                    purchaseItem_buy(player,itemId, quantity,item)
                }
            })
        }
    }

    function sellM(itemId,pl) {
        var item = produts_sell.find((produts) => produts.id === itemId)
        var sellMenu = mc.newCustomForm()
        sellMenu.setTitle('賣東西')
        sellMenu.addLabel(`物品名稱§l§a${item.name}`)
        sellMenu.addLabel(`物品售價§l§e${item.sellPrice}`)
        buyMenu.addInput('賣出數量')
        if (!item) {
            player.tell('該商品不存在!')
            return
        } else {
            var sellMenu = mc.newCustomForm()
            sellMenu.setTitle('賣東西')
            sellMenu.addLabel(`物品名稱§l§a${item.name}`)
            sellMenu.addLabel(`物品售價§l§e${item.sellPrice}`)
            buyMenu.addInput('賣出數量')
            pl.sendForm(sellMenu,(pl,data) => {
                var player = pl
                var quantity = parseInt(data[2])
                if (isNaN(quantity) || quantity <= 0) {
                    pl.tell('§l§c請輸入正確的數字')
                } else {
                    purchaseItem_sell(player,itemId, quantity,item)
                }
            })
        }
    }


    //function
    function purchaseItem_buy(player,itemId,quantity, item) {
        var item = produts_buy.find((produts) => produts.id === itemId)
        var playerCurrency = player.getScore('money')
        var totalPrice = item.price * quantity
        if (playerCurrency < totalPrice) {
            player.tell("§l§cyou don't have enough money to buy")
            return
        }
        player.reduceScore("money",totalPrice)
        if (item.id2 == 0) {
            mc.runcmd(`give \"${player.name}\" ${item.name} ${quantity}`)
        } else {
            mc.runcmd(`give ${player.name} ${item.name} ${quantity} ${item.id2}`)
        }
        player.tell('§l§6購買該產品成功，你購買了' + quantity + '個')
    }

    function purchaseItem_sell(player,itemId,quantity, item) {
        var item = produts_buy.find((produts) => produts.id === itemId)
        var playerCurrency = player.getScore('money')
        var totalPrice = item.price * quantity
        if (playerCurrency < totalPrice) {
            player.tell("§l§cyou don't have enough money to buy")
            return
        }
        player.reduceScore("money",totalPrice)
        if (item.id2 == 0) {
            mc.runcmd(`give \"${player.name}\" ${item.name} ${quantity}`)
        } else {
            mc.runcmd(`give ${player.name} ${item.name} ${quantity} ${item.id2}`)
        }
        player.tell('§l§6購買該產品成功，你購買了' + quantity + '個')
    }

    var cmd = mc.newCommand('shop','商店',PermType.Any)
    cmd.setEnum('choose',['buy','sell'])
    cmd.optional('chose',ParamType.Enum,'choose',1)
    cmd.overload(['choose'])
    cmd.setCallback((_cmd,ori,_out,res) => {
        if (res.chose == 'buy') {
            ori.player.sendForm(buy,(pl,id)=>{
                if (id == 0) {
                  pl.sendForm(block,(pl,id) => {
                      if (id == 0){
                          pl.sendForm(dirt,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 1
                                        buyM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 2
                                        buyM(itemId,pl)
                                    }  else if (id == 2) {
                                        var itemId = 3
                                        buyM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 4
                                        buyM(itemId,pl)
                                    }
                                })
                                
                        } else if (id == 1){
                                pl.sendForm(sand,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 5
                                        buyM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 6
                                        buyM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 7
                                        buyM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 8
                                        buyM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 9
                                        buyM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 10
                                        buyM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 11
                                        buyM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 12
                                        buyM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 13
                                        buyM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 14
                                        buyM(itemId,pl)
                                    }
                                })
                            } else if (id == 2){
                                pl.sendForm(log,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 15
                                        buyM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 16
                                        buyM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 17
                                        buyM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 18
                                        buyM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 19
                                        buyM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 20
                                        buyM(itemId,pl)
                                    }
                                })
                            } else if (id == 3){
                                pl.sendForm(stone,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 21
                                        buyM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 22
                                        buyM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 23
                                        buyM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 24
                                        buyM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 25
                                        buyM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 26
                                        buyM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 27
                                        buyM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 28
                                        buyM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 29
                                        buyM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 30
                                        buyM(itemId,pl)
                                    } else if (id == 10) {
                                        var itemId = 31
                                        buyM(itemId,pl)
                                    } else if (id == 11) {
                                        var itemId = 32
                                        buyM(itemId,pl)
                                    }
                                })
                            } else if (id == 4){
                                pl.sendForm(wool,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 156
                                        buyM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 157
                                        buyM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 158
                                        buyM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 159
                                        buyM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 160
                                        buyM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 161
                                        buyM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 162
                                        buyM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 163
                                        buyM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 266
                                        buyM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 164
                                        buyM(itemId,pl)
                                    } else if (id == 10) {
                                        var itemId = 165
                                        buyM(itemId,pl)
                                    } else if (id == 11) {
                                        var itemId = 166
                                        buyM(itemId,pl)
                                    } else if (id == 12) {
                                        var itemId = 167
                                        buyM(itemId,pl)
                                    } else if (id == 13) {
                                        var itemId = 168
                                        buyM(itemId,pl)
                                    } else if (id == 14) {
                                        var itemId = 169
                                        buyM(itemId,pl)
                                    } else if (id == 15) {
                                        var itemId = 170
                                        buyM(itemId,pl)
                                    }
                                })
                            } else if (id == 5){
                                pl.sendForm(tr,(pl,id) => {
                                    if (id == 0){
                                        pl.sendForm(ttr,(pl,id) => {
                                            if (id == 0) {
                                                var itemId = 171
                                                buyM(itemId,pl)
                                            } else if (id == 1) {
                                                var itemId = 172
                                                buyM(itemId,pl)
                                            } else if (id == 2) {
                                                var itemId = 173
                                                buyM(itemId,pl)
                                            } else if (id == 3) {
                                                var itemId = 174
                                                buyM(itemId,pl)
                                            } else if (id == 4) {
                                                var itemId = 175
                                                buyM(itemId,pl)
                                            } else if (id == 5) {
                                                var itemId = 176
                                                buyM(itemId,pl)
                                            } else if (id == 6) {
                                                var itemId = 177
                                                buyM(itemId,pl)
                                            } else if (id == 7) {
                                                var itemId = 178
                                                buyM(itemId,pl)
                                            } else if (id == 8) {
                                                var itemId = 179
                                                buyM(itemId,pl)
                                            } else if (id == 9) {
                                                var itemId = 180
                                                buyM(itemId,pl)
                                            } else if (id == 10) {
                                                var itemId = 181
                                                buyM(itemId,pl)
                                            } else if (id == 11) {
                                                var itemId = 182
                                                buyM(itemId,pl)
                                            } else if (id == 12) {
                                                var itemId = 183
                                                buyM(itemId,pl)
                                            } else if (id == 13) {
                                                var itemId = 184
                                                buyM(itemId,pl)
                                            } else if (id == 14) {
                                                var itemId = 185
                                                buyM(itemId,pl)
                                            } else if (id == 15) {
                                                var itemId = 186
                                                buyM(itemId,pl)
                                            } else if (id == 16) {
                                                var itemId = 187
                                                buyM(itemId,pl)
                                            }
                                        })
                                    } else if (id == 1){
                                    pl.sendForm(etr,(pl,id)=> {
                                        if (id == 0) {
                                            var itemId = 188
                                            buyM(itemId,pl)
                                        } else if (id == 1) {
                                            var itemId = 189
                                            buyM(itemId,pl)
                                        } else if (id == 2) {
                                            var itemId = 190
                                            buyM(itemId,pl)
                                        } else if (id == 3) {
                                            var itemId = 191
                                            buyM(itemId,pl)
                                        } else if (id == 4) {
                                            var itemId = 192
                                            buyM(itemId,pl)
                                        } else if (id == 5) {
                                            var itemId = 193
                                            buyM(itemId,pl)
                                        } else if (id == 6) {
                                            var itemId = 194
                                            buyM(itemId,pl)
                                        } else if (id == 7) {
                                            var itemId = 267
                                            buyM(itemId,pl)
                                        } else if (id == 8) {
                                            var itemId = 195
                                            buyM(itemId,pl)
                                        } else if (id == 9) {
                                            var itemId = 196
                                            buyM(itemId,pl)
                                        } else if (id == 10) {
                                            var itemId = 197
                                            buyM(itemId,pl)
                                        } else if (id == 11) {
                                            var itemId = 198
                                            buyM(itemId,pl)
                                        } else if (id == 12) {
                                            var itemId = 199
                                            buyM(itemId,pl)
                                        } else if (id == 13) {
                                            var itemId = 200
                                            buyM(itemId,pl)
                                        } else if (id == 14) {
                                            var itemId = 201
                                            buyM(itemId,pl)
                                        } else if (id == 15) {
                                            var itemId = 202
                                            buyM(itemId,pl)
                                        }
                                    })
                                    }
                                })
                            } else if (id == 6){
                                pl.sendForm(cct,(pl,id)=>{
                                    if (id == 0) {
                                        var itemId = 203 
                                        buyM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 204
                                        buyM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 205
                                        buyM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 206
                                        buyM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 207
                                        buyM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 208
                                        buyM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 209
                                        buyM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 210
                                        buyM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 211
                                        buyM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 212
                                        buyM(itemId,pl)
                                    } else if (id == 10) {
                                        var itemId = 213
                                        buyM(itemId,pl)
                                    } else if (id == 11) {
                                        var itemId = 214
                                        buyM(itemId,pl)
                                    } else if (id == 12) {
                                        var itemId = 215
                                        buyM(itemId,pl)
                                    } else if (id == 13) {
                                        var itemId = 216
                                        buyM(itemId,pl)
                                    } else if (id == 14) {
                                        var itemId = 217
                                        buyM(itemId,pl)
                                    } else if (id == 15) {
                                        var itemId = 218
                                        buyM(itemId,pl)
                                    }
                                }) 
                            } else if (id == 7){
                              pl.sendForm(nth,(pl,id)=>{
                                    if (id == 0) {
                                        var itemId = 219
                                        buyM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 220
                                        buyM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 221
                                        buyM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 222
                                        buyM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 223
                                        buyM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 224
                                        buyM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 225
                                        buyM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 226 
                                        buyM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 227 
                                        buyM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 228
                                        buyM(itemId,pl)
                                    } else if (id == 10) {
                                        var itemId = 229
                                        buyM(itemId,pl)
                                    } else if (id == 11) {
                                        var itemId = 230 
                                        buyM(itemId,pl)
                                    } else if (id == 12) {
                                        var itemId = 231
                                        buyM(itemId,pl)
                                    }
                              })
                            } else if (id == 8){
                              pl.sendForm(end,(pl,id)=>{
                                if (id == 0) {
                                    var itemId = 232
                                    buyM(itemId,pl)
                                } else if (id == 1) {
                                    var itemId = 233
                                    buyM(itemId,pl)
                                } else if (id == 2) {
                                    var itemId = 268
                                    buyM(itemId,pl)
                                } else if (id == 3) {
                                    var itemId = 234
                                    buyM(itemId,pl)
                                } else if (id == 4) {
                                    var itemId = 235
                                    buyM(itemId,pl)
                                } else if (id == 5) {
                                    var itemId = 236
                                    buyM(itemId,pl)
                                }
                              })
                            }
                        })
                    } else if(id == 1){
                        pl.sendForm(ore,(pl,id) => {
                            if (id == 0) {
                                var itemId = 33
                                buyM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 34
                                buyM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 35
                                buyM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 36
                                buyM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 37
                                buyM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 38
                                buyM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 39
                                buyM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 40
                                buyM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 269
                                buyM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 41
                                buyM(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 42
                                buyM(itemId,pl)
                            } else if (id == 11) {
                                var itemId = 43
                                buyM(itemId,pl)
                            } else if (id == 12) {
                                var itemId = 44
                                buyM(itemId,pl)
                            } else if (id == 13) {
                                var itemId = 45
                                buyM(itemId,pl)
                            } else if (id == 14) {
                                var itemId = 46
                                buyM(itemId,pl)
                            } else if (id == 15) {
                                var itemId = 47
                                buyM(itemId,pl)
                            } else if (id == 16) {
                                var itemId = 48
                                buyM(itemId,pl)
                            } else if (id == 17) {
                                var itemId = 49
                                buyM(itemId,pl)
                            } else if (id == 18) {
                                var itemId = 50
                                buyM(itemId,pl)
                            } else if (id == 19) {
                                var itemId = 51
                                buyM(itemId,pl)
                            } else if (id == 20) {
                                var itemId = 52 
                                buyM(itemId,pl)
                            }
                        })
                    } else if (id ==2){
                        pl.sendForm(food,(pl,id) => {
                            if (id == 0) {
                                var itemId = 237
                                buyM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 238
                                buyM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 239
                                buyM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 240
                                buyM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 241
                                buyM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 242
                                buyM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 243
                                buyM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 244
                                buyM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 245
                                buyM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 246
                                buyM(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 247
                                buyM(itemId,pl)
                            } else if (id == 11) {
                                var itemId = 248
                                buyM(itemId,pl)
                            } else if (id == 12) {
                                var itemId = 249
                                buyM(itemId,pl)
                            } else if (id == 13) {
                                var itemId = 250
                                buyM(itemId,pl)
                            } else if (id == 14) {
                                var itemId = 251
                                buyM(itemId,pl)
                            } else if (id == 15) {
                                var itemId = 252
                                buyM(itemId,pl)
                            } else if (id == 16) {
                                var itemId = 253
                                buyM(itemId,pl)
                            } else if (id == 17) {
                                var itemId = 254
                                buyM(itemId,pl)
                            }
                        })
                    } else if (id ==3){
                        pl.sendForm(dr,(pl,id) => {
                          if (id == 0){
                            pl.sendForm(brick,(pl,id)=>{
                                if (id == 0) {
                                    var itemId = 53
                                    buyM(itemId,pl)
                                } else if (id == 1) {
                                    var itemId = 54
                                    buyM(itemId,pl)
                                } else if (id == 2) {
                                    var itemId = 55
                                    buyM(itemId,pl)
                                }
                            })
                          } else if (id == 1){
                            pl.sendForm(bright,(pl,id)=>{
                                if (id == 0) {
                                    var itemId = 56
                                    buyM(itemId,pl)
                                } else if (id == 1) {
                                    var itemId = 57
                                    buyM(itemId,pl)
                                } else if (id == 2) {
                                    var itemId = 58
                                    buyM(itemId,pl)
                                } else if (id == 3) {
                                    var itemId = 59
                                    buyM(itemId,pl)
                                } else if (id == 4) {
                                    var itemId = 60
                                    buyM(itemId,pl)
                                } else if (id == 5) {
                                    var itemId = 61
                                    buyM(itemId,pl)
                                } else if (id == 6) {
                                    var itemId = 62
                                    buyM(itemId,pl)
                                }
                            })
                          } else if (id == 2){
                            pl.sendForm(grd,(pl,id)=>{
                                if (id == 0) {
                                    pl.sendForm(flower,(pl,id)=>{
                                        if (id == 0) {
                                            var itemId = 63
                                            buyM(itemId,pl)
                                        } else if (id == 1) {
                                            var itemId = 64
                                            buyM(itemId,pl)
                                        } else if (id == 2) {
                                            var itemId = 65
                                            buyM(itemId,pl)
                                        } else if (id == 3) {
                                            var itemId = 66
                                            buyM(itemId,pl)
                                        } else if (id == 4) {
                                            var itemId = 67
                                            buyM(itemId,pl)
                                        } else if (id == 5) {
                                            var itemId = 68
                                            buyM(itemId,pl)
                                        } else if (id == 6) {
                                            var itemId = 69
                                            buyM(itemId,pl)
                                        } else if (id == 7) {
                                            var itemId = 70
                                            buyM(itemId,pl)
                                        } else if (id == 8) {
                                            var itemId = 71
                                            buyM(itemId,pl)
                                        } else if (id == 9) {
                                            var itemId = 72
                                            buyM(itemId,pl)
                                        } else if (id == 10) {
                                            var itemId = 270
                                            buyM(itemId,pl)
                                        } else if (id == 11) {
                                            var itemId = 73
                                            buyM(itemId,pl)
                                        } else if (id == 12) {
                                            var itemId = 74
                                            buyM(itemId,pl)
                                        } else if (id == 13) {
                                            var itemId = 75
                                            buyM(itemId,pl)
                                        } else if (id == 14) {
                                            var itemId = 76
                                            buyM(itemId,pl)
                                        } else if (id == 15) {
                                            var itemId = 77
                                            buyM(itemId,pl)
                                        }
                                    })
                                } else if (id == 1) {
                                    pl.sendForm(seed,(pl,id)=>{
                                        if (id == 0) {
                                            var itemId =78
                                            buyM(itemId,pl)
                                        } else if (id == 1) {
                                            var itemId = 79
                                            buyM(itemId,pl)
                                        } else if (id == 2) {
                                            var itemId = 271
                                            buyM(itemId,pl)
                                        } else if (id == 3) {
                                            var itemId = 80
                                            buyM(itemId,pl)
                                        }
                                    })
                                }
                            })
                          } else if (id == 3){
                            pl.sendForm(cr,(pl,id)=>{
                                if (id == 0) {
                                    var itemId = 81
                                    buyM(itemId,pl)
                                } else if (id == 1) {
                                    var itemId = 82
                                    buyM(itemId,pl)
                                } else if (id == 2) {
                                    var itemId = 83
                                    buyM(itemId,pl)
                                } else if (id == 3) {
                                    var itemId = 84
                                    buyM(itemId,pl)
                                } else if (id == 4) {
                                    var itemId = 85
                                    buyM(itemId,pl)
                                } else if (id == 5) {
                                    var itemId = 86
                                    buyM(itemId,pl)
                                } else if (id == 6) {
                                    var itemId = 87
                                    buyM(itemId,pl)
                                } else if (id == 7) {
                                    var itemId = 88
                                    buyM(itemId,pl)
                                } else if (id == 8) {
                                    var itemId = 89
                                    buyM(itemId,pl)
                                } else if (id == 9) {
                                    var itemId = 90
                                    buyM(itemId,pl)
                                } else if (id == 10) {
                                    var itemId = 91
                                    buyM(itemId,pl)
                                } else if (id == 11) {
                                    var itemId = 92
                                    buyM(itemId,pl)
                                } else if (id == 12) {
                                    var itemId = 93
                                    buyM(itemId,pl)
                                } else if (id == 13) {
                                    var itemId = 94
                                    buyM(itemId,pl)
                                } else if (id == 14) {
                                    var itemId = 95
                                    buyM(itemId,pl)
                                }
                            })
                          } else if (id == 4){
                            pl.sendForm(glass,(pl,id)=>{
                                if (id == 0) {
                                    var itemId = 96
                                    buyM(itemId,pl)
                                } else if (id == 1) {
                                    var itemId = 97
                                    buyM(itemId,pl)
                                } else if (id == 2) {
                                    var itemId = 98
                                    buyM(itemId,pl)
                                } else if (id == 3) {
                                    var itemId = 99
                                    buyM(itemId,pl)
                                } else if (id == 4) {
                                    var itemId = 100
                                    buyM(itemId,pl)
                                } else if (id == 5) {
                                    var itemId = 101
                                    buyM(itemId,pl)
                                } else if (id == 6) {
                                    var itemId = 102
                                    buyM(itemId,pl)
                                } else if (id == 7) {
                                    var itemId = 103
                                    buyM(itemId,pl)
                                } else if (id == 8) {
                                    var itemId = 104
                                    buyM(itemId,pl)
                                } else if (id == 9) {
                                    var itemId = 105
                                    buyM(itemId,pl)
                                } else if (id == 10) {
                                    var itemId = 106
                                    buyM(itemId,pl)
                                } else if (id == 11) {
                                    var itemId = 107
                                    buyM(itemId,pl)
                                } else if (id == 12) {
                                    var itemId = 108
                                    buyM(itemId,pl)
                                } else if (id == 13) {
                                    var itemId = 109
                                    buyM(itemId,pl)
                                } else if (id == 14) {
                                    var itemId = 110
                                    buyM(itemId,pl)
                                } else if (id == 15) {
                                    var itemId = 111
                                    buyM(itemId,pl)
                                } else if (id == 16) {
                                    var itemId = 112
                                    buyM(itemId,pl)
                                } else if (id == 17) {
                                    var itemId = 113
                                    buyM(itemId,pl)
                                }
                            })
                          }
                        })
                    } else if (id ==4){
                        pl.sendForm(others,(pl,id) => {
                            if (id == 0) {
                                var itemId = 255
                                buyM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 256
                                buyM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 257
                                buyM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 258
                                buyM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 259
                                buyM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 260
                                buyM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 261
                                buyM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 262
                                buyM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 263
                                buyM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 264
                                buyM(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 265
                                buyM(itemId,pl)
                            }
                        })
                    } else if (id == 5){
                        pl.sendForm(egg,(pl,id) => {
                            if (id == 0) {
                                var itemId = 114
                                buyM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 115
                                buyM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 116
                                buyM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 117
                                buyM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 118
                                buyM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 119
                                buyM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 120
                                buyM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 121
                                buyM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 122
                                buyM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 123
                                buyM(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 124
                                buyM(itemId,pl)
                            } else if (id == 11) {
                                var itemId = 125
                                buyM(itemId,pl)
                            } else if (id == 12) {
                                var itemId = 126
                                buyM(itemId,pl)
                            } else if (id == 13) {
                                var itemId = 127
                                buyM(itemId,pl)
                            } else if (id == 14) {
                                var itemId = 128
                                buyM(itemId,pl)
                            } else if (id == 15) {
                                var itemId = 129
                                buyM(itemId,pl)
                            } else if (id == 16) {
                                var itemId = 130
                                buyM(itemId,pl)
                            } else if (id == 17) {
                                var itemId = 131
                                buyM(itemId,pl)
                            } else if (id == 18) {
                                var itemId = 132
                                buyM(itemId,pl)
                            } else if (id == 19) {
                                var itemId = 133
                                buyM(itemId,pl)
                            } else if (id == 20) {
                                var itemId = 134
                                buyM(itemId,pl)
                            } else if (id == 21) {
                                var itemId = 135
                                buyM(itemId,pl)
                            } else if (id == 22) {
                                var itemId = 136
                                buyM(itemId,pl)
                            } else if (id == 23) {
                                var itemId = 137
                                buyM(itemId,pl)
                            } else if (id == 24) {
                                var itemId = 138
                                buyM(itemId,pl)
                            } else if (id == 25) {
                                var itemId = 139
                                buyM(itemId,pl)
                            } else if (id == 26) {
                                var itemId = 140
                                buyM(itemId,pl)
                            } else if (id == 27) {
                                var itemId = 141
                                buyM(itemId,pl)
                            } else if (id == 28) {
                                var itemId = 142
                                buyM(itemId,pl)
                            } else if (id == 29) {
                                var itemId = 143
                                buyM(itemId,pl)
                            } else if (id == 30) {
                                var itemId = 144
                                buyM(itemId,pl)
                            } else if (id == 31) {
                                var itemId = 145
                                buyM(itemId,pl)
                            } else if (id == 32) {
                                var itemId = 146
                                buyM(itemId,pl)
                            } else if (id == 33) {
                                var itemId = 147
                                buyM(itemId,pl)
                            } else if (id == 34) {
                                var itemId = 148
                                buyM(itemId,pl)
                            } else if (id == 35) {
                                var itemId = 149
                                buyM(itemId,pl)
                            } else if (id == 36) {
                                var itemId = 150
                                buyM(itemId,pl)
                            } else if (id == 37) {
                                var itemId = 151
                                buyM(itemId,pl)
                            } else if (id == 38) {
                                var itemId = 152
                                buyM(itemId,pl)
                            } else if (id == 39) {
                                var itemId = 153
                                buyM(itemId,pl)
                            } else if (id == 40) {
                                var itemId = 154
                                buyM(itemId,pl)
                            } else if (id == 41) {
                                var itemId = 155
                                buyM(itemId,pl)
                            }
                        })
                    }
                })
        }else if (res.chose == 'sell') {
            ori.player.sendForm(sell,(pl,id) => {
              if (id == 0) {
                  pl.sendForm(block,(pl,id) => {
                      if (id == 0){
                          pl.sendForm(dirt,(pl,id) => {
    
                          })
                      } else if (id == 1){
                          pl.sendForm(sand,(pl,id) => {
    
                          })
                      } else if (id == 2){
                          pl.sendForm(log,(pl,id) => {
    
                          })
                      } else if (id == 3){
                          pl.sendForm(stone,(pl,id) => {
    
                          })
                      } else if (id == 4){
                          pl.sendForm(wool,(pl,id) => {
    
                          })
                      } else if (id == 5){
                          pl.sendForm(tr,(pl,id) => {
                              if (id == 0){
                                  pl.sendForm(ttr,(pl,id) => {
    
                                  })
                              } else if (id == 1){
                              pl.sendForm(etr,(pl,id)=> {
                                
                              })
                              }
                          })
                      } else if (id == 6){
                      pl.sendForm(cct,(pl,id)=>{
                        
                      })  
                      } else if (id == 7){
                        pl.sendForm(nth,(pl,id)=>{
                          
                        })
                      } else if (id == 8){
                        pl.sendForm(end,(pl,id)=>{
                          
                        })
                      }
                  })
              } else if(id == 1){
                pl.sendForm(ore,(pl,id) => {
                  })
              } else if(id == 2){
                pl.sendForm(egg,(pl,id) => {
                  })
              }
              })
        }else if (res.chose == null) {
            ori.player.sendForm(fm,(pl,id) => {
                if (id == 0) {
                    pl.sendForm(block,(pl,id) => {
                        if (id == 0){
                            pl.sendForm(dirt,(pl,id) => {
                                      if (id == 0) {
                                          var itemId = 1
                                          buyM(itemId,pl)
                                      } else if (id == 1) {
                                          var itemId = 2
                                          buyM(itemId,pl)
                                      }  else if (id == 2) {
                                          var itemId = 3
                                          buyM(itemId,pl)
                                      } else if (id == 3) {
                                          var itemId = 4
                                          buyM(itemId,pl)
                                      }
                                  })
                                  
                          } else if (id == 1){
                                  pl.sendForm(sand,(pl,id) => {
                                      if (id == 0) {
                                          var itemId = 5
                                          buyM(itemId,pl)
                                      } else if (id == 1) {
                                          var itemId = 6
                                          buyM(itemId,pl)
                                      } else if (id == 2) {
                                          var itemId = 7
                                          buyM(itemId,pl)
                                      } else if (id == 3) {
                                          var itemId = 8
                                          buyM(itemId,pl)
                                      } else if (id == 4) {
                                          var itemId = 9
                                          buyM(itemId,pl)
                                      } else if (id == 5) {
                                          var itemId = 10
                                          buyM(itemId,pl)
                                      } else if (id == 6) {
                                          var itemId = 11
                                          buyM(itemId,pl)
                                      } else if (id == 7) {
                                          var itemId = 12
                                          buyM(itemId,pl)
                                      } else if (id == 8) {
                                          var itemId = 13
                                          buyM(itemId,pl)
                                      } else if (id == 9) {
                                          var itemId = 14
                                          buyM(itemId,pl)
                                      }
                                  })
                              } else if (id == 2){
                                  pl.sendForm(log,(pl,id) => {
                                      if (id == 0) {
                                          var itemId = 15
                                          buyM(itemId,pl)
                                      } else if (id == 1) {
                                          var itemId = 16
                                          buyM(itemId,pl)
                                      } else if (id == 2) {
                                          var itemId = 17
                                          buyM(itemId,pl)
                                      } else if (id == 3) {
                                          var itemId = 18
                                          buyM(itemId,pl)
                                      } else if (id == 4) {
                                          var itemId = 19
                                          buyM(itemId,pl)
                                      } else if (id == 5) {
                                          var itemId = 20
                                          buyM(itemId,pl)
                                      }
                                  })
                              } else if (id == 3){
                                  pl.sendForm(stone,(pl,id) => {
                                      if (id == 0) {
                                          var itemId = 21
                                          buyM(itemId,pl)
                                      } else if (id == 1) {
                                          var itemId = 22
                                          buyM(itemId,pl)
                                      } else if (id == 2) {
                                          var itemId = 23
                                          buyM(itemId,pl)
                                      } else if (id == 3) {
                                          var itemId = 24
                                          buyM(itemId,pl)
                                      } else if (id == 4) {
                                          var itemId = 25
                                          buyM(itemId,pl)
                                      } else if (id == 5) {
                                          var itemId = 26
                                          buyM(itemId,pl)
                                      } else if (id == 6) {
                                          var itemId = 27
                                          buyM(itemId,pl)
                                      } else if (id == 7) {
                                          var itemId = 28
                                          buyM(itemId,pl)
                                      } else if (id == 8) {
                                          var itemId = 29
                                          buyM(itemId,pl)
                                      } else if (id == 9) {
                                          var itemId = 30
                                          buyM(itemId,pl)
                                      } else if (id == 10) {
                                          var itemId = 31
                                          buyM(itemId,pl)
                                      } else if (id == 11) {
                                          var itemId = 32
                                          buyM(itemId,pl)
                                      }
                                  })
                              } else if (id == 4){
                                  pl.sendForm(wool,(pl,id) => {
                                      if (id == 0) {
                                          var itemId = 156
                                          buyM(itemId,pl)
                                      } else if (id == 1) {
                                          var itemId = 157
                                          buyM(itemId,pl)
                                      } else if (id == 2) {
                                          var itemId = 158
                                          buyM(itemId,pl)
                                      } else if (id == 3) {
                                          var itemId = 159
                                          buyM(itemId,pl)
                                      } else if (id == 4) {
                                          var itemId = 160
                                          buyM(itemId,pl)
                                      } else if (id == 5) {
                                          var itemId = 161
                                          buyM(itemId,pl)
                                      } else if (id == 6) {
                                          var itemId = 162
                                          buyM(itemId,pl)
                                      } else if (id == 7) {
                                          var itemId = 163
                                          buyM(itemId,pl)
                                      } else if (id == 8) {
                                          var itemId = 266
                                          buyM(itemId,pl)
                                      } else if (id == 9) {
                                          var itemId = 164
                                          buyM(itemId,pl)
                                      } else if (id == 10) {
                                          var itemId = 165
                                          buyM(itemId,pl)
                                      } else if (id == 11) {
                                          var itemId = 166
                                          buyM(itemId,pl)
                                      } else if (id == 12) {
                                          var itemId = 167
                                          buyM(itemId,pl)
                                      } else if (id == 13) {
                                          var itemId = 168
                                          buyM(itemId,pl)
                                      } else if (id == 14) {
                                          var itemId = 169
                                          buyM(itemId,pl)
                                      } else if (id == 15) {
                                          var itemId = 170
                                          buyM(itemId,pl)
                                      }
                                  })
                              } else if (id == 5){
                                  pl.sendForm(tr,(pl,id) => {
                                      if (id == 0){
                                          pl.sendForm(ttr,(pl,id) => {
                                              if (id == 0) {
                                                  var itemId = 171
                                                  buyM(itemId,pl)
                                              } else if (id == 1) {
                                                  var itemId = 172
                                                  buyM(itemId,pl)
                                              } else if (id == 2) {
                                                  var itemId = 173
                                                  buyM(itemId,pl)
                                              } else if (id == 3) {
                                                  var itemId = 174
                                                  buyM(itemId,pl)
                                              } else if (id == 4) {
                                                  var itemId = 175
                                                  buyM(itemId,pl)
                                              } else if (id == 5) {
                                                  var itemId = 176
                                                  buyM(itemId,pl)
                                              } else if (id == 6) {
                                                  var itemId = 177
                                                  buyM(itemId,pl)
                                              } else if (id == 7) {
                                                  var itemId = 178
                                                  buyM(itemId,pl)
                                              } else if (id == 8) {
                                                  var itemId = 179
                                                  buyM(itemId,pl)
                                              } else if (id == 9) {
                                                  var itemId = 180
                                                  buyM(itemId,pl)
                                              } else if (id == 10) {
                                                  var itemId = 181
                                                  buyM(itemId,pl)
                                              } else if (id == 11) {
                                                  var itemId = 182
                                                  buyM(itemId,pl)
                                              } else if (id == 12) {
                                                  var itemId = 183
                                                  buyM(itemId,pl)
                                              } else if (id == 13) {
                                                  var itemId = 184
                                                  buyM(itemId,pl)
                                              } else if (id == 14) {
                                                  var itemId = 185
                                                  buyM(itemId,pl)
                                              } else if (id == 15) {
                                                  var itemId = 186
                                                  buyM(itemId,pl)
                                              } else if (id == 16) {
                                                  var itemId = 187
                                                  buyM(itemId,pl)
                                              }
                                          })
                                      } else if (id == 1){
                                      pl.sendForm(etr,(pl,id)=> {
                                          if (id == 0) {
                                              var itemId = 188
                                              buyM(itemId,pl)
                                          } else if (id == 1) {
                                              var itemId = 189
                                              buyM(itemId,pl)
                                          } else if (id == 2) {
                                              var itemId = 190
                                              buyM(itemId,pl)
                                          } else if (id == 3) {
                                              var itemId = 191
                                              buyM(itemId,pl)
                                          } else if (id == 4) {
                                              var itemId = 192
                                              buyM(itemId,pl)
                                          } else if (id == 5) {
                                              var itemId = 193
                                              buyM(itemId,pl)
                                          } else if (id == 6) {
                                              var itemId = 194
                                              buyM(itemId,pl)
                                          } else if (id == 7) {
                                              var itemId = 267
                                              buyM(itemId,pl)
                                          } else if (id == 8) {
                                              var itemId = 195
                                              buyM(itemId,pl)
                                          } else if (id == 9) {
                                              var itemId = 196
                                              buyM(itemId,pl)
                                          } else if (id == 10) {
                                              var itemId = 197
                                              buyM(itemId,pl)
                                          } else if (id == 11) {
                                              var itemId = 198
                                              buyM(itemId,pl)
                                          } else if (id == 12) {
                                              var itemId = 199
                                              buyM(itemId,pl)
                                          } else if (id == 13) {
                                              var itemId = 200
                                              buyM(itemId,pl)
                                          } else if (id == 14) {
                                              var itemId = 201
                                              buyM(itemId,pl)
                                          } else if (id == 15) {
                                              var itemId = 202
                                              buyM(itemId,pl)
                                          }
                                      })
                                      }
                                  })
                              } else if (id == 6){
                                  pl.sendForm(cct,(pl,id)=>{
                                      if (id == 0) {
                                          var itemId = 203 
                                          buyM(itemId,pl)
                                      } else if (id == 1) {
                                          var itemId = 204
                                          buyM(itemId,pl)
                                      } else if (id == 2) {
                                          var itemId = 205
                                          buyM(itemId,pl)
                                      } else if (id == 3) {
                                          var itemId = 206
                                          buyM(itemId,pl)
                                      } else if (id == 4) {
                                          var itemId = 207
                                          buyM(itemId,pl)
                                      } else if (id == 5) {
                                          var itemId = 208
                                          buyM(itemId,pl)
                                      } else if (id == 6) {
                                          var itemId = 209
                                          buyM(itemId,pl)
                                      } else if (id == 7) {
                                          var itemId = 210
                                          buyM(itemId,pl)
                                      } else if (id == 8) {
                                          var itemId = 211
                                          buyM(itemId,pl)
                                      } else if (id == 9) {
                                          var itemId = 212
                                          buyM(itemId,pl)
                                      } else if (id == 10) {
                                          var itemId = 213
                                          buyM(itemId,pl)
                                      } else if (id == 11) {
                                          var itemId = 214
                                          buyM(itemId,pl)
                                      } else if (id == 12) {
                                          var itemId = 215
                                          buyM(itemId,pl)
                                      } else if (id == 13) {
                                          var itemId = 216
                                          buyM(itemId,pl)
                                      } else if (id == 14) {
                                          var itemId = 217
                                          buyM(itemId,pl)
                                      } else if (id == 15) {
                                          var itemId = 218
                                          buyM(itemId,pl)
                                      }
                                  }) 
                              } else if (id == 7){
                                pl.sendForm(nth,(pl,id)=>{
                                      if (id == 0) {
                                          var itemId = 219
                                          buyM(itemId,pl)
                                      } else if (id == 1) {
                                          var itemId = 220
                                          buyM(itemId,pl)
                                      } else if (id == 2) {
                                          var itemId = 221
                                          buyM(itemId,pl)
                                      } else if (id == 3) {
                                          var itemId = 222
                                          buyM(itemId,pl)
                                      } else if (id == 4) {
                                          var itemId = 223
                                          buyM(itemId,pl)
                                      } else if (id == 5) {
                                          var itemId = 224
                                          buyM(itemId,pl)
                                      } else if (id == 6) {
                                          var itemId = 225
                                          buyM(itemId,pl)
                                      } else if (id == 7) {
                                          var itemId = 226 
                                          buyM(itemId,pl)
                                      } else if (id == 8) {
                                          var itemId = 227 
                                          buyM(itemId,pl)
                                      } else if (id == 9) {
                                          var itemId = 228
                                          buyM(itemId,pl)
                                      } else if (id == 10) {
                                          var itemId = 229
                                          buyM(itemId,pl)
                                      } else if (id == 11) {
                                          var itemId = 230 
                                          buyM(itemId,pl)
                                      } else if (id == 12) {
                                          var itemId = 231
                                          buyM(itemId,pl)
                                      }
                                })
                              } else if (id == 8){
                                pl.sendForm(end,(pl,id)=>{
                                  if (id == 0) {
                                      var itemId = 232
                                      buyM(itemId,pl)
                                  } else if (id == 1) {
                                      var itemId = 233
                                      buyM(itemId,pl)
                                  } else if (id == 2) {
                                      var itemId = 268
                                      buyM(itemId,pl)
                                  } else if (id == 3) {
                                      var itemId = 234
                                      buyM(itemId,pl)
                                  } else if (id == 4) {
                                      var itemId = 235
                                      buyM(itemId,pl)
                                  } else if (id == 5) {
                                      var itemId = 236
                                      buyM(itemId,pl)
                                  }
                                })
                              }
                          })
                      } else if(id == 1){
                          pl.sendForm(ore,(pl,id) => {
                              if (id == 0) {
                                  var itemId = 33
                                  buyM(itemId,pl)
                              } else if (id == 1) {
                                  var itemId = 34
                                  buyM(itemId,pl)
                              } else if (id == 2) {
                                  var itemId = 35
                                  buyM(itemId,pl)
                              } else if (id == 3) {
                                  var itemId = 36
                                  buyM(itemId,pl)
                              } else if (id == 4) {
                                  var itemId = 37
                                  buyM(itemId,pl)
                              } else if (id == 5) {
                                  var itemId = 38
                                  buyM(itemId,pl)
                              } else if (id == 6) {
                                  var itemId = 39
                                  buyM(itemId,pl)
                              } else if (id == 7) {
                                  var itemId = 40
                                  buyM(itemId,pl)
                              } else if (id == 8) {
                                  var itemId = 269
                                  buyM(itemId,pl)
                              } else if (id == 9) {
                                  var itemId = 41
                                  buyM(itemId,pl)
                              } else if (id == 10) {
                                  var itemId = 42
                                  buyM(itemId,pl)
                              } else if (id == 11) {
                                  var itemId = 43
                                  buyM(itemId,pl)
                              } else if (id == 12) {
                                  var itemId = 44
                                  buyM(itemId,pl)
                              } else if (id == 13) {
                                  var itemId = 45
                                  buyM(itemId,pl)
                              } else if (id == 14) {
                                  var itemId = 46
                                  buyM(itemId,pl)
                              } else if (id == 15) {
                                  var itemId = 47
                                  buyM(itemId,pl)
                              } else if (id == 16) {
                                  var itemId = 48
                                  buyM(itemId,pl)
                              } else if (id == 17) {
                                  var itemId = 49
                                  buyM(itemId,pl)
                              } else if (id == 18) {
                                  var itemId = 50
                                  buyM(itemId,pl)
                              } else if (id == 19) {
                                  var itemId = 51
                                  buyM(itemId,pl)
                              } else if (id == 20) {
                                  var itemId = 52 
                                  buyM(itemId,pl)
                              }
                          })
                      } else if (id ==2){
                          pl.sendForm(food,(pl,id) => {
                              if (id == 0) {
                                  var itemId = 237
                                  buyM(itemId,pl)
                              } else if (id == 1) {
                                  var itemId = 238
                                  buyM(itemId,pl)
                              } else if (id == 2) {
                                  var itemId = 239
                                  buyM(itemId,pl)
                              } else if (id == 3) {
                                  var itemId = 240
                                  buyM(itemId,pl)
                              } else if (id == 4) {
                                  var itemId = 241
                                  buyM(itemId,pl)
                              } else if (id == 5) {
                                  var itemId = 242
                                  buyM(itemId,pl)
                              } else if (id == 6) {
                                  var itemId = 243
                                  buyM(itemId,pl)
                              } else if (id == 7) {
                                  var itemId = 244
                                  buyM(itemId,pl)
                              } else if (id == 8) {
                                  var itemId = 245
                                  buyM(itemId,pl)
                              } else if (id == 9) {
                                  var itemId = 246
                                  buyM(itemId,pl)
                              } else if (id == 10) {
                                  var itemId = 247
                                  buyM(itemId,pl)
                              } else if (id == 11) {
                                  var itemId = 248
                                  buyM(itemId,pl)
                              } else if (id == 12) {
                                  var itemId = 249
                                  buyM(itemId,pl)
                              } else if (id == 13) {
                                  var itemId = 250
                                  buyM(itemId,pl)
                              } else if (id == 14) {
                                  var itemId = 251
                                  buyM(itemId,pl)
                              } else if (id == 15) {
                                  var itemId = 252
                                  buyM(itemId,pl)
                              } else if (id == 16) {
                                  var itemId = 253
                                  buyM(itemId,pl)
                              } else if (id == 17) {
                                  var itemId = 254
                                  buyM(itemId,pl)
                              }
                          })
                      } else if (id ==3){
                          pl.sendForm(dr,(pl,id) => {
                            if (id == 0){
                              pl.sendForm(brick,(pl,id)=>{
                                  if (id == 0) {
                                      var itemId = 53
                                      buyM(itemId,pl)
                                  } else if (id == 1) {
                                      var itemId = 54
                                      buyM(itemId,pl)
                                  } else if (id == 2) {
                                      var itemId = 55
                                      buyM(itemId,pl)
                                  }
                              })
                            } else if (id == 1){
                              pl.sendForm(bright,(pl,id)=>{
                                  if (id == 0) {
                                      var itemId = 56
                                      buyM(itemId,pl)
                                  } else if (id == 1) {
                                      var itemId = 57
                                      buyM(itemId,pl)
                                  } else if (id == 2) {
                                      var itemId = 58
                                      buyM(itemId,pl)
                                  } else if (id == 3) {
                                      var itemId = 59
                                      buyM(itemId,pl)
                                  } else if (id == 4) {
                                      var itemId = 60
                                      buyM(itemId,pl)
                                  } else if (id == 5) {
                                      var itemId = 61
                                      buyM(itemId,pl)
                                  } else if (id == 6) {
                                      var itemId = 62
                                      buyM(itemId,pl)
                                  }
                              })
                            } else if (id == 2){
                              pl.sendForm(grd,(pl,id)=>{
                                  if (id == 0) {
                                      pl.sendForm(flower,(pl,id)=>{
                                          if (id == 0) {
                                              var itemId = 63
                                              buyM(itemId,pl)
                                          } else if (id == 1) {
                                              var itemId = 64
                                              buyM(itemId,pl)
                                          } else if (id == 2) {
                                              var itemId = 65
                                              buyM(itemId,pl)
                                          } else if (id == 3) {
                                              var itemId = 66
                                              buyM(itemId,pl)
                                          } else if (id == 4) {
                                              var itemId = 67
                                              buyM(itemId,pl)
                                          } else if (id == 5) {
                                              var itemId = 68
                                              buyM(itemId,pl)
                                          } else if (id == 6) {
                                              var itemId = 69
                                              buyM(itemId,pl)
                                          } else if (id == 7) {
                                              var itemId = 70
                                              buyM(itemId,pl)
                                          } else if (id == 8) {
                                              var itemId = 71
                                              buyM(itemId,pl)
                                          } else if (id == 9) {
                                              var itemId = 72
                                              buyM(itemId,pl)
                                          } else if (id == 10) {
                                              var itemId = 270
                                              buyM(itemId,pl)
                                          } else if (id == 11) {
                                              var itemId = 73
                                              buyM(itemId,pl)
                                          } else if (id == 12) {
                                              var itemId = 74
                                              buyM(itemId,pl)
                                          } else if (id == 13) {
                                              var itemId = 75
                                              buyM(itemId,pl)
                                          } else if (id == 14) {
                                              var itemId = 76
                                              buyM(itemId,pl)
                                          } else if (id == 15) {
                                              var itemId = 77
                                              buyM(itemId,pl)
                                          }
                                      })
                                  } else if (id == 1) {
                                      pl.sendForm(seed,(pl,id)=>{
                                          if (id == 0) {
                                              var itemId =78
                                              buyM(itemId,pl)
                                          } else if (id == 1) {
                                              var itemId = 79
                                              buyM(itemId,pl)
                                          } else if (id == 2) {
                                              var itemId = 271
                                              buyM(itemId,pl)
                                          } else if (id == 3) {
                                              var itemId = 80
                                              buyM(itemId,pl)
                                          }
                                      })
                                  }
                              })
                            } else if (id == 3){
                              pl.sendForm(cr,(pl,id)=>{
                                  if (id == 0) {
                                      var itemId = 81
                                      buyM(itemId,pl)
                                  } else if (id == 1) {
                                      var itemId = 82
                                      buyM(itemId,pl)
                                  } else if (id == 2) {
                                      var itemId = 83
                                      buyM(itemId,pl)
                                  } else if (id == 3) {
                                      var itemId = 84
                                      buyM(itemId,pl)
                                  } else if (id == 4) {
                                      var itemId = 85
                                      buyM(itemId,pl)
                                  } else if (id == 5) {
                                      var itemId = 86
                                      buyM(itemId,pl)
                                  } else if (id == 6) {
                                      var itemId = 87
                                      buyM(itemId,pl)
                                  } else if (id == 7) {
                                      var itemId = 88
                                      buyM(itemId,pl)
                                  } else if (id == 8) {
                                      var itemId = 89
                                      buyM(itemId,pl)
                                  } else if (id == 9) {
                                      var itemId = 90
                                      buyM(itemId,pl)
                                  } else if (id == 10) {
                                      var itemId = 91
                                      buyM(itemId,pl)
                                  } else if (id == 11) {
                                      var itemId = 92
                                      buyM(itemId,pl)
                                  } else if (id == 12) {
                                      var itemId = 93
                                      buyM(itemId,pl)
                                  } else if (id == 13) {
                                      var itemId = 94
                                      buyM(itemId,pl)
                                  } else if (id == 14) {
                                      var itemId = 95
                                      buyM(itemId,pl)
                                  }
                              })
                            } else if (id == 4){
                              pl.sendForm(glass,(pl,id)=>{
                                  if (id == 0) {
                                      var itemId = 96
                                      buyM(itemId,pl)
                                  } else if (id == 1) {
                                      var itemId = 97
                                      buyM(itemId,pl)
                                  } else if (id == 2) {
                                      var itemId = 98
                                      buyM(itemId,pl)
                                  } else if (id == 3) {
                                      var itemId = 99
                                      buyM(itemId,pl)
                                  } else if (id == 4) {
                                      var itemId = 100
                                      buyM(itemId,pl)
                                  } else if (id == 5) {
                                      var itemId = 101
                                      buyM(itemId,pl)
                                  } else if (id == 6) {
                                      var itemId = 102
                                      buyM(itemId,pl)
                                  } else if (id == 7) {
                                      var itemId = 103
                                      buyM(itemId,pl)
                                  } else if (id == 8) {
                                      var itemId = 104
                                      buyM(itemId,pl)
                                  } else if (id == 9) {
                                      var itemId = 105
                                      buyM(itemId,pl)
                                  } else if (id == 10) {
                                      var itemId = 106
                                      buyM(itemId,pl)
                                  } else if (id == 11) {
                                      var itemId = 107
                                      buyM(itemId,pl)
                                  } else if (id == 12) {
                                      var itemId = 108
                                      buyM(itemId,pl)
                                  } else if (id == 13) {
                                      var itemId = 109
                                      buyM(itemId,pl)
                                  } else if (id == 14) {
                                      var itemId = 110
                                      buyM(itemId,pl)
                                  } else if (id == 15) {
                                      var itemId = 111
                                      buyM(itemId,pl)
                                  } else if (id == 16) {
                                      var itemId = 112
                                      buyM(itemId,pl)
                                  } else if (id == 17) {
                                      var itemId = 113
                                      buyM(itemId,pl)
                                  }
                              })
                            }
                          })
                      } else if (id ==4){
                          pl.sendForm(others,(pl,id) => {
                              if (id == 0) {
                                  var itemId = 255
                                  buyM(itemId,pl)
                              } else if (id == 1) {
                                  var itemId = 256
                                  buyM(itemId,pl)
                              } else if (id == 2) {
                                  var itemId = 257
                                  buyM(itemId,pl)
                              } else if (id == 3) {
                                  var itemId = 258
                                  buyM(itemId,pl)
                              } else if (id == 4) {
                                  var itemId = 259
                                  buyM(itemId,pl)
                              } else if (id == 5) {
                                  var itemId = 260
                                  buyM(itemId,pl)
                              } else if (id == 6) {
                                  var itemId = 261
                                  buyM(itemId,pl)
                              } else if (id == 7) {
                                  var itemId = 262
                                  buyM(itemId,pl)
                              } else if (id == 8) {
                                  var itemId = 263
                                  buyM(itemId,pl)
                              } else if (id == 9) {
                                  var itemId = 264
                                  buyM(itemId,pl)
                              } else if (id == 10) {
                                  var itemId = 265
                                  buyM(itemId,pl)
                              }
                          })
                      } else if (id == 5){
                          pl.sendForm(egg,(pl,id) => {
                              if (id == 0) {
                                  var itemId = 114
                                  buyM(itemId,pl)
                              } else if (id == 1) {
                                  var itemId = 115
                                  buyM(itemId,pl)
                              } else if (id == 2) {
                                  var itemId = 116
                                  buyM(itemId,pl)
                              } else if (id == 3) {
                                  var itemId = 117
                                  buyM(itemId,pl)
                              } else if (id == 4) {
                                  var itemId = 118
                                  buyM(itemId,pl)
                              } else if (id == 5) {
                                  var itemId = 119
                                  buyM(itemId,pl)
                              } else if (id == 6) {
                                  var itemId = 120
                                  buyM(itemId,pl)
                              } else if (id == 7) {
                                  var itemId = 121
                                  buyM(itemId,pl)
                              } else if (id == 8) {
                                  var itemId = 122
                                  buyM(itemId,pl)
                              } else if (id == 9) {
                                  var itemId = 123
                                  buyM(itemId,pl)
                              } else if (id == 10) {
                                  var itemId = 124
                                  buyM(itemId,pl)
                              } else if (id == 11) {
                                  var itemId = 125
                                  buyM(itemId,pl)
                              } else if (id == 12) {
                                  var itemId = 126
                                  buyM(itemId,pl)
                              } else if (id == 13) {
                                  var itemId = 127
                                  buyM(itemId,pl)
                              } else if (id == 14) {
                                  var itemId = 128
                                  buyM(itemId,pl)
                              } else if (id == 15) {
                                  var itemId = 129
                                  buyM(itemId,pl)
                              } else if (id == 16) {
                                  var itemId = 130
                                  buyM(itemId,pl)
                              } else if (id == 17) {
                                  var itemId = 131
                                  buyM(itemId,pl)
                              } else if (id == 18) {
                                  var itemId = 132
                                  buyM(itemId,pl)
                              } else if (id == 19) {
                                  var itemId = 133
                                  buyM(itemId,pl)
                              } else if (id == 20) {
                                  var itemId = 134
                                  buyM(itemId,pl)
                              } else if (id == 21) {
                                  var itemId = 135
                                  buyM(itemId,pl)
                              } else if (id == 22) {
                                  var itemId = 136
                                  buyM(itemId,pl)
                              } else if (id == 23) {
                                  var itemId = 137
                                  buyM(itemId,pl)
                              } else if (id == 24) {
                                  var itemId = 138
                                  buyM(itemId,pl)
                              } else if (id == 25) {
                                  var itemId = 139
                                  buyM(itemId,pl)
                              } else if (id == 26) {
                                  var itemId = 140
                                  buyM(itemId,pl)
                              } else if (id == 27) {
                                  var itemId = 141
                                  buyM(itemId,pl)
                              } else if (id == 28) {
                                  var itemId = 142
                                  buyM(itemId,pl)
                              } else if (id == 29) {
                                  var itemId = 143
                                  buyM(itemId,pl)
                              } else if (id == 30) {
                                  var itemId = 144
                                  buyM(itemId,pl)
                              } else if (id == 31) {
                                  var itemId = 145
                                  buyM(itemId,pl)
                              } else if (id == 32) {
                                  var itemId = 146
                                  buyM(itemId,pl)
                              } else if (id == 33) {
                                  var itemId = 147
                                  buyM(itemId,pl)
                              } else if (id == 34) {
                                  var itemId = 148
                                  buyM(itemId,pl)
                              } else if (id == 35) {
                                  var itemId = 149
                                  buyM(itemId,pl)
                              } else if (id == 36) {
                                  var itemId = 150
                                  buyM(itemId,pl)
                              } else if (id == 37) {
                                  var itemId = 151
                                  buyM(itemId,pl)
                              } else if (id == 38) {
                                  var itemId = 152
                                  buyM(itemId,pl)
                              } else if (id == 39) {
                                  var itemId = 153
                                  buyM(itemId,pl)
                              } else if (id == 40) {
                                  var itemId = 154
                                  buyM(itemId,pl)
                              } else if (id == 41) {
                                  var itemId = 155
                                  buyM(itemId,pl)
                              }
                          })
                      }
            })
              } else if (id ==1){
                pl.sendForm(sell,(pl,id)=>{
                                      if (id == 0) {
                        pl.sendForm(block,(pl,id) => {
                            if (id == 0){
                                pl.sendForm(dirt,(pl,id) => {

                                })
                            } else if (id == 1){
                                pl.sendForm(sand,(pl,id) => {

                                })
                            } else if (id == 2){
                                pl.sendForm(log,(pl,id) => {

                                })
                            } else if (id == 3){
                                pl.sendForm(stone,(pl,id) => {

                                })
                            } else if (id == 4){
                                pl.sendForm(wool,(pl,id) => {

                                })
                            } else if (id == 5){
                                pl.sendForm(tr,(pl,id) => {
                                    if (id == 0){
                                        pl.sendForm(ttr,(pl,id) => {

                                        })
                                    } else if (id == 1){
                                    pl.sendForm(etr,(pl,id)=> {
                                      
                                    })
                                    }
                                })
                            } else if (id == 6){
                            pl.sendForm(cct,(pl,id)=>{
                              
                            })  
                            } else if (id == 7){
                              pl.sendForm(nth,(pl,id)=>{
                                
                              })
                            } else if (id == 8){
                              pl.sendForm(end,(pl,id)=>{
                                
                              })
                            }
                        })
                    } else if(id == 1){
                        pl.sendForm(ore,(pl,id) => {

                        })
                    } else if(id == 2){
                      pl.sendForm(egg,(pl,id) => {

                        })
                    }
                }) 
              }
        })
    cmd.setup()
})

//玩家首次進入
mc.listen('onJoin',(pl) => {
    if (pl.hasTag('first') == false) {
        pl.addScore('money',500)
        pl.setScore('playDays',0)
        pl.setScore('playHours',0)
        pl.setScore('playMin',0)
        pl.setScore('playSec',0)
        pl.setScore('fly', 1)
        pl.addTag('first')
        mc.broadcast('§l§e歡迎新玩家' + pl.realName + '加入伺服器')
        log(pl.realName + '首次加入伺服器')

        var fm = mc.newSimpleForm()
        fm.setTitle('§l§c本§6伺§e服§a器§2條§b款')
        fm.setContent('§l§b歡迎你加入OMSC伺服器\n§e我是本服的服主杯子小，以下是一些有關本伺服器的條款，請仔細閲讀！§d\n1.伺服器會在你每次進入伺服器時記錄下你的IP、使用設備和你的Xuid\n2.伺服器的所有系統基本上都是由插件製作，如果有發現任何Bug，但是不回報，玩家將會處以重罰\n3.任何色情言論/粗俗語言，玩家都會被封禁1天-永久天，根據次數決定\n4.非因爲伺服器的原因而導致物品消失，本服將不予賠償(本服有記錄)\n5伺服器禁止使用外挂，違規者將會被永久封禁\n5如玩家遭到管理員的惡意判罰，例如無理由封禁，玩家需要在一天内到Discord開"回報工單"否則不予處理\n\n伺服器Discord連結https://discord.gg/VMN3cgeUBd \n\n\n§6伺服器條款到這裏，如果玩家接受本服的條款請按"同意伺服器退款"，不同意請按"不同意伺服器條款"\n\n\n\n伺服器Discord:https://discord.gg/VMN3cgeUBd')
        fm.addButton('§l§a同意伺服器條款')
        fm.addButton('§l§c不同意伺服器條款')
        pl.sendForm(fm,(pl,id) => {
            if (id == 0) {
                pl.tell('§l§b感謝你同意本服條款！')
                log(pl.realName + '同意伺服器條款')
                var confirm = {}
                confirm = data.parseJson(file.readFrom('./plugins/主插件/terms.json'))
                confirm[pl.realName] = '在' + system.getTimeStr() + '同意伺服器條款'
                file.writeTo('./plugins/主插件/terms.json', JSON.stringify(confirm,null,'\t'))
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
    }}
)

//防刷屏
mc.listen("onPlayerCmd",(pl,cmd) => {
    if (cmd.includes('@e') || cmd.includes('@a') || cmd.includes('@p') || cmd.includes('@r')) {
        if (!pl.hasTag('team')) {
            pl.tell('§l§c請不要嘗試刷屏')
            return false
        }
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
            pl.tell('§l§a你已成功簽到，獲得500空島SC幣')
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

//後臺顯示資料
mc.listen('onJoin', function(player) {
    var ip = {}
    var dv = player.getDevice()
    colorLog("yellow", `玩家${player.realName}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入是的延遲是${dv.avgPing}`)
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
                        player.tell('§l§c你的空島SC幣不足，需要5000空島SC幣。你還差' + need)
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
                        player.tell('§l§c你的空島SC幣不足，需要10000空島SC幣。你還差' + need)
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
                        player.tell('§l§c你的空島SC幣不足，需要25000空島SC幣。你還差' + need)
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
                        player.tell('§l§c你的空島SC幣不足，需要50000空島SC幣。你還差' + need)
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
                        player.tell('§l§c你空島SC幣不足，需要100000空島SC幣。你還差' + need)
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

//Discord
mc.listen('onServerStarted',() => {
    mc.regPlayerCmd('discord','獲取伺服器Discord群組連結', (pl) => {
        pl.tell('§l§6本服Discord代碼:VMN3cgeUBd')
    })
    mc.regPlayerCmd('dc','獲取伺服器Discord群組連結', (pl) => {
        pl.tell('§l§6本服Discord代碼:VMN3cgeUBd')
    })
})

//Bossbar
mc.listen("onServerStarted",() => {
    var i = 0
    setInterval(() => {
        var pls = mc.getOnlinePlayers()
        for (pl in pls) {
            var pl = pls[pl]
                var bossbar = ['§l§c歡迎§6你加§e入本§a伺服§2器，§b請你§d記得§c加入§6本服§eDiscord','§l§c你§6的§e游§a玩§2時§b間§d' + pl.getScore('playDays') + '天' + pl.getScore('playHours') + '小時' + pl.getScore('playMin') + '分' + pl.getScore('playSec') + '秒','§l§c伺服器§6TPS§e' + CurrentTPS() + ' §a你的§2延遲§b' + pl.getDevice().avgPing + '§dms','§l§c伺§6服§e器§a在§2綫§b玩§d家§c數§6量§e:§a' + mc.getOnlinePlayers().length,'§l§c你§6擁§e有§a空§2島§bS§dC§d幣§c:§6' + pl.getScore('money') + ' §e服§a主§2幣§b:§d' + pl.getScore('ownercoins') + ' §c點§6數§e:§a' + pl.getScore('point')]
                if (i > 4) {
                    i = 0
                }
            if (pl.getScore('bossbar') == 0) {
                pl.setBossBar(1,bossbar[i], 100,8)
                i += 1
            }
        }
    },2000)
    
    var cmd = mc.newCommand('bossbar','開關Bossbar')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        var pl = ori.player
        if (pl.getScore('bossbar') == 1) {
            pl.setScore('bossbar', 0)
            pl.tell("§l§a你已成功開啟Bossbar")
        } else if (pl.getScore('bossbar') == 0) {
            pl.setScore('bossbar',1)
            pl.tell('§l§c你已成功關閉Bossbar')
        }
    })
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

//reload本插件
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('resc',"§l§e重新加載OMSC空島插件")
    cmd.overload()
    cmd.setCallback((_cmd,_ori,out,_res) => {
        out.success('§l§e正在重新加載插件...')
        setTimeout('§l§e插件已重新加載',5000)
        mc.runcmd('ll reload skyblockomsc.ll.js')
    })
    cmd.setup()
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
                    ori.player.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c抽獎特別鎬子"},"ench":[{"id":18s,"lvl":30s},{"id":15s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":15s}]}}')))
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
                ori.player.tell('§l§a你已成功轉賬' + money +'空島SC幣給玩家' + name)
                name.tell('§l§a玩家' + ori.player.realName + '轉賬' + money+ '空島SC幣給你')
            }
        } else {
            pl.tell('§l§c玩家不在綫')
        }
    })
    cmd.setup()
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

//每秒空島SC幣
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

//Anti Minecart Crasher
mc.listen('onCmdBlockExecute',(isMinecart,pos) => {
    if (isMinecart == true) {
        log('有玩家使用命令方塊礦車惡意崩服，坐標為' + pos)
        return false
    }    
})

//返回大廳指令
mc.listen('onServerStarted',() => {
    var cmd = mc.newCommand('hub','返回大廳',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.teleport(0,4,7,0)
        ori.player.tell('§l§a你已回到大廳')
    })
    cmd.setup()
})

//Motd
mc.listen("onServerStarted",() => {
    var i = 0
    setInterval(() => {
        var motd = ['§eOMSC§d空島§b伺服器','§dOMSC§b空島§e伺服器','§bOMSC§e空島§d伺服器']
        i += 1
        if (i > 2) {
            i = 0
        }
        mc.setMotd(motd[i])
    }, 10000);
})

//抽獎系統(Paper)
mc.listen("onServerStarted",() => {
    var fm = mc.newSimpleForm()
    fm.setTitle('§l§9抽獎系統')
    fm.setContent('§l§d點擊你要購買的抽獎券')
    fm.addButton('§l§bSC青銅抽獎券')
    fm.addButton('§l§bSC白金抽獎券')
    fm.addButton('§l§bSC黃金抽獎券')
    fm.addButton('§l§bSC鉑金抽獎券')
    fm.addButton('§l§bSC鑽石抽獎券')
    fm.addButton('§l§bSC星曜抽獎券')
    fm.addButton('§l§bSC惡魔抽獎券','https://png.pngtree.com/png-clipart/20220113/ourmid/pngtree-cartoon-hand-painted-devil-png-image_4164171.png')

    var bronze = mc.newCustomForm()
    bronze.setTitle('§l§bSC青銅抽獎券')
    bronze.addLabel('§l§9價錢為1000空島SC幣 x1')
    bronze.addInput('§l§b請輸入你要購買的數量','§l§b請輸入你要購買的數量')

    var platinum = mc.newCustomForm()
    platinum.setTitle('§l§bSC白金抽獎券')
    platinum.addLabel('§l§9價錢為3000空島SC幣 x1')
    platinum.addInput('§l§b請輸入你要購買的數量','§l§b請輸入你要購買的數量')

    var gold = mc.newCustomForm()
    gold.setTitle('§l§bSC黃金抽獎券')
    gold.addLabel('§l§9價錢為5000空島SC幣 x1')
    gold.addInput('§l§b請輸入你要購買的數量','§l§b請輸入你要購買的數量')
    
    var high_platinum = mc.newCustomForm()
    high_platinum.setTitle('§l§bSC鉑金抽獎券')
    high_platinum.addLabel('§l§9價錢為10000空島SC幣 x1')
    high_platinum.addInput('§l§b請輸入你要購買的數量','§l§b請輸入你要購買的數量')

    var diamond = mc.newCustomForm()
    diamond.setTitle('§l§bSC鑽石抽獎券')
    diamond.addLabel('§l§9價錢為20000空島SC幣 x1')
    diamond.addInput('§l§b請輸入你要購買的數量','§l§b請輸入你要購買的數量')

    var Starshine = mc.newCustomForm()
    Starshine.setTitle('§l§bSC星曜抽獎券')
    Starshine.addLabel('§l§9價錢為50000空島SC幣 x1')
    Starshine.addInput('§l§b請輸入你要購買的數量','§l§b請輸入你要購買的數量')

    var demon = mc.newCustomForm()
    demon.setTitle('§l§bSC惡魔抽獎券')
    demon.addLabel('§l§9價錢為100000空島SC幣 x1')
    demon.addInput('§l§b請輸入你要購買的數量','§l§b請輸入你要購買的數量')
    
    var cmd = mc.newCommand('spinshop','抽獎券商店')
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(fm,(pl,id) => {
            if (id == 0) {
                pl.sendForm(bronze,(pl,data) => {
                    if (data[1] > 0) {
                        if (pl.getScore('money') > data[1] * 1000) {
                            pl.giveItem(mc.newItem(NBT.parseSNBT(`{"Count":${data[1]}b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§a青銅抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`)))
                            pl.tell(`§a成功購買青銅抽獎券x${data[1]}`)
                            pl.reduceScore('money',1000)
                        } else {
                            pl.tell('§c你的錢不足')
                        }
                    } else {
                        pl.tell('§l§c請正確輸入購買數量')
                    }
                })
            } else if (id == 1) {
                pl.sendForm(platinum,(pl,data) => {
                    if (data[1] > 0) {
                        if (pl.getScore('money') > data[1] * 3000) {
                            pl.giveItem(mc.newItem(NBT.parseSNBT(`{"Count":${data[1]}b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§f白金抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`)))
                            pl.tell(`§a成功購買白金抽獎券x${data[1]}`)
                            pl.reduceScore('money',3000)
                        } else {
                            pl.tell('§c你的錢不足')
                        }
                    } else {
                        pl.tell('§l§c請正確輸入購買數量')
                    }
                })
            } else if (id == 2) {
                pl.sendForm(gold,(pl,data) => {
                    if (data[1] > 0) {
                        if (pl.getScore('money') > data[1] * 5000) {
                            pl.giveItem(mc.newItem(NBT.parseSNBT(`{"Count":${data[1]}b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§g黃金抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`)))
                            pl.tell(`§a成功購買黃金抽獎券x${data[1]}`)
                            pl.reduceScore('money',5000)
                        } else {
                            pl.tell('§c你的錢不足')
                        }
                    } else {
                        pl.tell('§l§c請正確輸入購買數量')
                    }
                })
            } else if (id == 3) {
                pl.sendForm(high_platinum,(pl,data) => {
                    if (data[1] > 0) {
                        if (pl.getScore('money') > data[1] * 10000) {
                            pl.giveItem(mc.newItem(NBT.parseSNBT(`{"Count":${data[1]}b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§f鉑金抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`)))
                            pl.tell(`§a成功購買鉑金抽獎券x${data[1]}`)
                            pl.reduceScore('money',10000)
                        } else {
                            pl.tell('§c你的錢不足')
                        }
                    } else {
                        pl.tell('§l§c請正確輸入購買數量')
                    }
                })
            } else if (id == 4) {
                pl.sendForm(diamond,(pl,data) => {
                    if (data[1] > 0) {
                        if (pl.getScore('money') > data[1] * 20000) {
                            pl.giveItem(mc.newItem(NBT.parseSNBT(`{"Count":${data[1]}b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§b鑽石抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`)))
                            pl.tell(`§a成功購買鑽石抽獎券x${data[1]}`)
                            pl.reduceScore('money',20000)
                        } else {
                            pl.tell('§c你的錢不足')
                        }
                    } else {
                        pl.tell('§l§c請正確輸入購買數量')
                    }
                })
            } else if (id == 5) {
                pl.sendForm(Starshine,(pl,data) =>{
                    if (data[1] > 0) {
                        if (pl.getScore('money') > data[1] * 50000) {
                            pl.giveItem(mc.newItem(NBT.parseSNBT(`{"Count":${data[1]}b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§e星曜抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`)))
                            pl.tell(`§a成功購買星曜抽獎券x${data[1]}`)
                            pl.reduceScore('money',50000)
                        } else {
                            pl.tell('§c你的錢不足')
                        }
                    } else {
                        pl.tell('§l§c請正確輸入購買數量')
                    }
                })
            } else if (id == 6) {
                pl.sendForm(demon,(pl,data) => {
                    if (data[1] > 0) {
                        if (pl.getScore('money') > data[1] * 100000) {
                            pl.giveItem(mc.newItem(NBT.parseSNBT(`{"Count":${data[1]}b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§4惡魔抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`)))
                            pl.tell(`§a成功購買惡魔抽獎券x${data[1]}`)
                            pl.reduceScore('money',100000)
                        } else {
                            pl.tell('§c你的錢不足')
                        }
                    } else {
                        pl.tell('§l§c請正確輸入購買數量')
                    }
                })
            }
        })
    }) 
    cmd.setup()
})

mc.listen("onUseItem",(pl,item) => {
    var nbt = item.getNbt().toSNBT()
    if (nbt == `{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§a青銅抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他同紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`) {
        pl.addScore('spin1',1)
    } else if (nbt == `{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§f白銀抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`) {
        pl.addScore('spin2',1)
    } else if (nbt == `{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§g黃金抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`) {
        pl.addScore('spin3',1)
    } else if (nbt == `{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§f鉑金抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`) {
        pl.addScore('spin4',1)
    } else if (nbt == `{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§b鑽石抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`) {
        pl.addScore('spin5',1)
    } else if (nbt == `{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§e星曜抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`) {
        pl.addScore('spin6',1)
    } else if (nbt == `{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§4惡魔抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}`) {
        pl.addScore('spin7',1)
    }
})

mc.listen("onTick",() => {
    var pls = mc.getOnlinePlayers()
    var numbers = Math.floor(Math.random() * 1001)
    for (pl in pls) {
        var pl = pls[pl]
        if (pl.getScore('spin1') == 3) {
            var numbers = Math.floor(Math.random() * 1001)
            pl.setScore('spin1',0)
            pl.clearItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§a青銅抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}')))
            if (numbers > 0 && numbers < 201) {
                pl.addScore('money',5000)
                pl.tell('§l§b恭喜你，你成功抽到了4000空島SC幣')
            } else if (numbers > 200 && numbers < 401) {
                pl.addScore('money',1000)
                pl.tell('§l§b你什麽也沒有抽到，但是你成功回本了，你獲得了1000空島SC幣')
            } else if (numbers > 400 && numbers < 601) {
                pl.reduceScore('money',9000)
                pl.tell('§l§c恭喜你，你抽到了-9000，你一下子虧了10000SC空島幣了！')
            } else if (numbers > 600 && numbers < 801) {
                pl.addScore('money',10000)
                pl.tell('§l§b恭喜你，你成功抽到了9000空島SC幣')
            } else if (numbers > 800 && numbers < 1001) {
                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Lore":["§a這是青銅抽獎的最高物品，恭喜你成功抽到了.."],"Name":"§a青銅抽獎券的奇跡"},"ench":[{"id":15s,"lvl":5s},{"id":17s,"lvl":5s},{"id":18s,"lvl":5s},{"id":26s,"lvl":5s}]}}')))
                pl.tell('§l§b恭喜你，你成功抽到了青銅抽獎券的奇跡')
                mc.broadcast('§l§e'+pl.realName + '抽到了青銅抽獎券的奇跡')
            }
        } else if (pl.getScore('spin2') == 3) {
            var numbers = Math.floor(Math.random() * 1001)
            pl.setScore('spin2',0)
            pl.clearItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:paper","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§f白銀抽獎券(使用方法:點擊三次地面，請每次一張一張使用，也請背包不要有其他紙張)"},"ench":[{"id":0s,"lvl":10s}]}}')))
            if (numbers > 0 && numbers < 201) {
                pl.addScore('money',11000)
                pl.tell('§l§b恭喜你，你成功抽到了8000空島SC幣')
            } else if (numbers > 200 && numbers < 401) {
                pl.addScore('money',3000)
                pl.tell('§l§b你什麽也沒有抽到，但是你成功回本了，你獲得了3000空島SC幣')
            } else if (numbers > 400 && numbers < 601) {
                pl.reduceScore('money',15000)
                pl.tell('§l§c恭喜你，你抽到了-15000，你一下子虧了18000SC空島幣了！')
            } else if (numbers > 600 && numbers < 801) {
                pl.addScore('money',16000)
                pl.tell('恭喜你，你成功抽到15000空島SC幣')
            } else if (numbers > 800 && numbers < 1001) {
                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Lore":["§f這是白銀抽獎的最高物品，恭喜你成功抽到了.."],"Name":"§f白銀抽獎券的奇跡"},"ench":[{"id":15s,"lvl":10s},{"id":17s,"lvl":10s},{"id":18s,"lvl":10s},{"id":26s,"lvl":10s}]}}')))
                pl.tell('§l§b恭喜你，你成功抽到了白銀抽獎券的奇跡')
                mc.broadcast('§l§e'+pl.realName + '抽到了白銀抽獎券的奇跡')
            }
        } else if (pl.getScore('spin3') == 3) {
            var numbers = Math.floor(Math.random() * 1001)
            pl.setScore('spin3',0)
            if (numbers > 0 && numbers < 201) {
                pl.addScore('money',17000)
                pl.tell('§l§b恭喜你，你成功抽到了12000空島SC幣')
            } else if (numbers > 200 && numbers < 401) {
                pl.addScore('money',5000)
                pl.tell('§l§b你什麽也沒有抽到，但是你成功回本了，你獲得了5000空島SC幣')
            } else if (numbers > 400 && numbers < 601) {
                pl.reduceScore('money',20000)
                pl.tell('§l§c恭喜你，你抽到了-20000，你一下子虧了25000SC空島幣了！')
            } else if (numbers > 600 && numbers < 801) {
                pl.addScore('money',21000)
                pl.tell('恭喜你，你成功抽到16000空島SC幣')
            } else if (numbers > 800 && numbers < 1001) {
                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Lore":["§f這是黃金抽獎的最高物品，恭喜你成功抽到了.."],"Name":"§f黃金抽獎券的奇跡"},"ench":[{"id":15s,"lvl":15s},{"id":17s,"lvl":15s},{"id":18s,"lvl":15s},{"id":26s,"lvl":15s}]}}')))
                pl.tell('§l§b恭喜你，你成功抽到了黃金抽獎券的奇跡')
                mc.broadcast('§l§e'+pl.realName + '抽到了黃金抽獎券的奇跡')
            }
        } else if (pl.getScore('spin4') == 3) {
            var numbers = Math.floor(Math.random() * 1001)
            pl.setScore('spin4',0)
            if (numbers > 0 && numbers < 201) {

            } else if (numbers > 200 && numbers < 401) {

            } else if (numbers > 400 && numbers < 601) {

            } else if (numbers > 600 && numbers < 801) {

            } else if (numbers > 800 && numbers < 1001) {
                
            }
        } else if (pl.getScore('spin5') == 3) {
            var numbers = Math.floor(Math.random() * 1001)
            pl.setScore('spin5',0)
            if (numbers > 0 && numbers < 201) {

            } else if (numbers > 200 && numbers < 401) {

            } else if (numbers > 400 && numbers < 601) {

            } else if (numbers > 600 && numbers < 801) {

            } else if (numbers > 800 && numbers < 1001) {
                
            }
        } else if (pl.getScore('spin6') == 3) {
            var numbers = Math.floor(Math.random() * 1001)
            pl.setScore('spin6',0)
            if (numbers > 0 && numbers < 201) {

            } else if (numbers > 200 && numbers < 401) {

            } else if (numbers > 400 && numbers < 601) {

            } else if (numbers > 600 && numbers < 801) {

            } else if (numbers > 800 && numbers < 1001) {
                
            }
        } else if (pl.getScore('spin7') == 3) {
            var numbers = Math.floor(Math.random() * 1001)
            pl.setScore('spin7',0)
            if (numbers > 0 && numbers < 251) {

            } else if (numbers > 250 && numbers < 501) {

            } else if (numbers > 500 && numbers < 751) {

            } else if (numbers > 750 && numbers < 901) {

            } else if (numbers > 900 && numbers < 1001) {
                
            }
        }
    }
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超值劍"},"ench":[{"id":9s,"lvl":10s},{"id":14s,"lvl":10s},{"id":12s,"lvl":10s},{"id":17s,"lvl":5s},{"id":26s,"lvl":1s},{"id":13s,"lvl":10s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b中級超值劍"},"ench":[{"id":9s,"lvl":15s},{"id":14s,"lvl":15s},{"id":12s,"lvl":15s},{"id":17s,"lvl":10s},{"id":26s,"lvl":5s},{"id":13s,"lvl":15s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超值劍"},"ench":[{"id":9s,"lvl":20s},{"id":14s,"lvl":20s},{"id":12s,"lvl":20s},{"id":17s,"lvl":15s},{"id":26s,"lvl":10s},{"id":13s,"lvl":20s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級超凡劍"},"ench":[{"id":9s,"lvl":25s},{"id":14s,"lvl":25s},{"id":12s,"lvl":25s},{"id":17s,"lvl":20s},{"id":26s,"lvl":15s},{"id":13s,"lvl":25s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級超凡劍"},"ench":[{"id":9s,"lvl":30s},{"id":14s,"lvl":30s},{"id":12s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":20s},{"id":13s,"lvl":30s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級超凡劍"},"ench":[{"id":9s,"lvl":35s},{"id":14s,"lvl":35s},{"id":12s,"lvl":35s},{"id":17s,"lvl":30s},{"id":26s,"lvl":25s},{"id":13s,"lvl":35s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級卓越劍"},"ench":[{"id":9s,"lvl":40s},{"id":14s,"lvl":40s},{"id":12s,"lvl":40s},{"id":17s,"lvl":35s},{"id":26s,"lvl":30s},{"id":13s,"lvl":40s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d中級卓越劍"},"ench":[{"id":9s,"lvl":45s},{"id":14s,"lvl":45s},{"id":12s,"lvl":45s},{"id":17s,"lvl":40s},{"id":26s,"lvl":35s},{"id":13s,"lvl":45s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級卓越劍"},"ench":[{"id":9s,"lvl":50s},{"id":14s,"lvl":50s},{"id":12s,"lvl":50s},{"id":17s,"lvl":45s},{"id":26s,"lvl":40s},{"id":13s,"lvl":50s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§b低級大師劍"},"ench":[{"id":9s,"lvl":60s},{"id":14s,"lvl":60s},{"id":12s,"lvl":60s},{"id":17s,"lvl":55s},{"id":26s,"lvl":50s},{"id":13s,"lvl":60s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§d高級大師劍"},"ench":[{"id":9s,"lvl":70s},{"id":14s,"lvl":70s},{"id":12s,"lvl":70s},{"id":17s,"lvl":65s},{"id":26s,"lvl":60s},{"id":13s,"lvl":70s}]}}')))
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
                                                pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:netherite_sword","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級大師劍"},"ench":[{"id":9s,"lvl":80s},{"id":14s,"lvl":80s},{"id":12s,"lvl":80s},{"id":17s,"lvl":75s},{"id":26s,"lvl":70s},{"id":13s,"lvl":80s}]}}')))
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
                                        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:bow","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c高級弓"},"ench":[{"id":20s,"lvl":50s},{"id":17s,"lvl":45s},{"id":19s,"lvl":50s},{"id":21s,"lvl":50s},{"id":22s,"lvl":1s},{"id":26s,"lvl":40s}]}}')))
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
    tp.addButton('§l§9我的空島')

    var cmd = mc.newCommand('menu','§l§e選單系統',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(fm,(pl,id) => {
            if (id == 0) {
                pl.sendForm(tp,(pl,id) => {
                    if (id == 0) {
                        pl.teleport(4,4,4,0)
                    } else if (id == 1) {
                        pl.runcmd('is home')
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

//指令列表提示
mc.listen('onServerStarted',() => {
    var cmd = mc.newCommand('cmdhelp','指令列表',PermType.Any)
    cmd.setEnum('choose',['ui','msg'])
    cmd.optional('chose',ParamType.Enum,'choose',1)
    cmd.overload('chose')

    cmd.setCallback((_cmd,ori,_out,res) => {
        var not_op = '§l§e===§r§b空島類指令§l§e===§r\n§d/is --- 打開空島選單/創建新空島\n/is accept --- 接受空島邀請\n/is create --- 創建空島\n/is delete --- 刪除空島\n/is home --- 返回空島\n/is invite --- 向玩家發送一個空島邀請訊息\n/is level --- 計算你的空島等級\n/is permission --- 空島權限設置\n/is refuse --- 拒絕來自其他玩家的空島邀請\n/is top --- 空島等級排行榜\n/is spawn --- 設置空島返回點\n/is warp create --- 創建空島傳送點\n/is warp list --- 獲取空島傳送點列表\n/is warp get --- 打開空島傳送點GUI\n/is warp remove --- 刪除空島傳送點\n/is warp set --- 設置是否公開空島傳送點\n§l§e===§r§b伺服器主插件指令§e===§r\n§d/bossbar --- 開關Bossbar\n/cmdhelp --- 查看本服指令列表\n/daily --- 簽到(00:00重置)\n/dc --- 查看本服Discord群組連結\n/discord --- 查看本服Discord群組連結\n/donate --- 贊助者選單\n/guessright --- 獲得猜數字游戲的資料\n/highshop --- 高級商店\n/hub --- 返回大廳\n/lottery --- 抽獎系統(1)\n/menu --- 伺服器選單系統\n/pay --- 轉賬系統\n/rank --- 伺服器Rank商店\n/shop --- 伺服器商店系統\n/spinshop --- 抽獎系統(2)\n/sidebar --- 開關計分板\n§l§e===§r§b伺服器其他插件指令§e===§r\n§d/cdk --- 兌換Code\n/guess --- 猜數字游戲\n/top --- 伺服器排行榜'
        var op = '§l§e===§r§b空島類指令§l§e===§r\n§d/is --- 打開空島選單/創建新空島\n/is accept --- 接受空島邀請\n/is create --- 創建空島\n/is delete --- 刪除空島\n/is home --- 返回空島\n/is invite --- 向玩家發送一個空島邀請訊息\n/is level --- 計算你的空島等級\n/is permission --- 空島權限設置\n/is refuse --- 拒絕來自其他玩家的空島邀請\n/is top --- 空島等級排行榜\n/is spawn --- 設置空島返回點\n/is warp create --- 創建空島傳送點\n/is warp list --- 獲取空島傳送點列表\n/is warp get --- 打開空島傳送點GUI\n/is warp remove --- 刪除空島傳送點\n/is warp set --- 設置是否公開空島傳送點\n§l§e===§r§b伺服器主插件指令§e===§r\n§d/bossbar --- 開關Bossbar\n/cmdhelp --- 查看本服指令列表\n/daily --- 簽到(00:00重置)\n/dc --- 查看本服Discord群組連結\n/discord --- 查看本服Discord群組連結\n/donate --- 贊助者選單\n/highshop --- 高級商店\n/hub --- 返回大廳\n/lottery --- 抽獎系統(1)\n/menu --- 伺服器選單系統\n/pay --- 轉賬系統\n/rank --- 伺服器Rank商店\n/shop --- 伺服器商店系統\n/spinshop --- 抽獎系統(2)\n/sidebar --- 開關計分板\n§l§e===§r§b伺服器其他插件指令§l§e===§r\n§d/cdk --- 兌換Code\n/guess --- 猜數字游戲\n/top --- 伺服器排行榜\n§l§e===§r§b管理員指令§l§e===\n§r§d/is manage --- 管理玩家空島\n/is setworld --- 設置世界權限\n/nbt --- 獲得物品NBT\n/admin --- 打開管理員選單\n/cddksetting --- 設置CDKey Code\n/motd --- 設置伺服器Motd\n/ench --- 附魔突破的附魔\n/ban --- 封禁玩家\n/unban --- 取消封禁玩家\n/math --- 猜數字游戲\n/wnrestart --- 重開伺服器\n/wnstop --- 關閉伺服器(15s)\n/stopser --- 關閉伺服器(5s)'
        var pl = ori.player
        

        var msg = {}
        if (pl.isOP()) {
            msg = op
        } else  {
            msg = not_op
        }
        
        var fm = mc.newCustomForm()
        fm.setTitle('§l§b指令列表')
        fm.addLabel(msg)

        if (res.chose == 'msg') {
            pl.tell(msg)
        } else if (res.chose == 'ui') {
            pl.sendForm(fm,(_pl,_data) => {

            })
        } else if (res.chose == null) {
            pl.tell(msg)
        }
    })
    cmd.setup()
})

//飛行
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('fly','§l§e開關飛行',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        var pl = ori.player
        if (pl.hasTag('donate') || pl.hasTag('mvpp') || pl.hasTag('yt') || pl.hasTag('team')) {
            if (pl.getScore('fly') == 0) {
                pl.setAbility(10,true)
                pl.tell('§l§a成功開啟飛行')
                pl.setScore('fly', 1)
            } else if (pl.getScore('fly') == 1) {
                pl.setAbility(10,false)
                pl.tell('§l§c成功關閉飛行')
                pl.setScore('fly', 0)
            }
        } else {
            pl.tell('§l§c你沒有權限使用飛行')
        }
    })
    cmd.setup()
})

//belowname
setInterval(() => {
    mc.getOnlinePlayers().forEach(pls => {
        var pl = pls
        var dv = pl.getDevice()
        var os = dv.os
        var ping = dv.avgPing
        if (ping < 110) {
            ping = '§a' + ping
        } else if (ping < 250) {
            ping = '§e' + ping
        } else if (ping >= 250) {
            ping = '§c' + ping 
        } 
        
        pl.rename('§b>§d'+pl.realName + '§b<\n§b>§a設備:' + os + '§b<\n§b>§6延遲:' + ping + '§b<\n§b>§eLv.' + pl.getScore('level') + '§b<')
    })
},1000)