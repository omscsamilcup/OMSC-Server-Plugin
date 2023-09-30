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
    
    var logs = mc.newSimpleForm()
    logs.setTitle('§l§9木頭類')
    logs.addButton('§l§9橡樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c5/Oak_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200328083939')
    logs.addButton('§l§9杉樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/5/51/Spruce_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200118130553')
    logs.addButton('§l§9樺樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/d/d4/Birch_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200117162119')
    logs.addButton('§l§9叢林原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/68/Jungle_Log_Axis_Y_JE6_BE3.png/revision/latest?cb=20200117162648')
    logs.addButton('§l§9相思樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/be/Acacia_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200117162054')
    logs.addButton('§l§9黑橡樹原木','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/9/93/Dark_Oak_Log_Axis_Y_JE5_BE3.png/revision/latest?cb=20200117162447')
    
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
    brick.addButton('§l§9磚頭','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/62/Bricks_JE5_BE3.png/revision/latest?cb=20200328092244')
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
    seed.addButton('§l§9甘蔗','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/41/Sugar_Cane_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20190911165104')
    seed.addButton('§l§9竹子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3b/Big_Leaves_Bamboo_JE1_BE2.png/revision/latest/scale-to-width-down/150?cb=20190420010948')
    seed.addButton('§l§9胡蘿蔔','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4e/Carrot_JE3_BE2.png/revision/latest?cb=20200612155731')
    seed.addButton('§l§9馬鈴薯','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/ff/Potato_JE1_BE1.png/revision/latest?cb=20200128042948')

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
    egg.addButton('§l§9村民', 'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/2/24/Tadpole_Spawn_Egg_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20211218155349')

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
    sell.addButton('§l§9農作物','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UAo3XLPaeVYVNkt7uccY3CN3AuiPJAvncQ&usqp=CAU')

    var md = mc.newSimpleForm()
    md.setTitle('§l§9怪物/生物掉落物')
    md.addButton('§l§9皮革','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/6/6d/Leather_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20190424095735')
    md.addButton('§l§9終界珍珠','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4c/Ender_Pearl_JE2_BE2.png/revision/latest?cb=20200612161622')
    md.addButton('§l§9烈焰棒','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/8/87/Blaze_Rod_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20190907013007')
    md.addButton('§l§9墨囊','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/c/c6/Ink_Sac_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20190424094524')
    md.addButton('§l§9綫','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/b/b0/Tripwire_%28ES%29.png/revision/latest/scale-to-width-down/150?cb=20200125105803')
    md.addButton('§l§9界伏殼','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/f5/Shulker_Shell_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20190424103348')

    var crops = mc.newSimpleForm()
    crops.setTitle('§l§9農作物出售')
    crops.addButton('§l§9小麥','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/7/75/Wheat_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20190424114455')
    crops.addButton('§l§9胡蘿蔔','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4e/Carrot_JE3_BE2.png/revision/latest?cb=20200612155731')
    crops.addButton('§l§9馬鈴薯','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/f/ff/Potato_JE1_BE1.png/revision/latest?cb=20200128042948')
    crops.addButton('§l§9甘蔗','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/41/Sugar_Cane_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20190911165104')
    crops.addButton('§l§9竹子','https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/3/3b/Big_Leaves_Bamboo_JE1_BE2.png/revision/latest/scale-to-width-down/150?cb=20190420010948')
    
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
        { id: 24, id2: 1, name: 'stone', price: 3},
        { id: 25, id2: 3, name: 'stone', price: 3},
        { id: 26, id2: 6, name: 'stone', price: 3},
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
        { id: 57, id2: 0, name: 'sea_lantern', price: 15},
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
        { id: 139, id2: 0, name: 'sheep_spawn_egg', price: 100000},
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
        { id: 272, id2: 0, name: 'sugar_cane', price:5},
        { id: 273, id2: 0, name: 'leather', price:5},
        { id: 274, id2: 0, name: 'ender_pearl', price:15},
        { id: 275, id2: 0, name: 'blaze_rod', price:10},
        { id: 276, id2: 0, name: 'bamboo', price:5},
        { id: 277, id2: 0, name: 'string', price:5},
        { id: 278, id2: 0, name: 'shulker_shell', price:1000},
        { id: 279, id2: 0, name: 'ink_sac', price:5},
        { id: 280, id2: 0, name: 'potato' , price:5},
        { id: 281, id2: 0, name: 'carrot' , price:5},
        { id: 282, id2: 0, name: 'village_spawn_egg', price:100000}
    ]

    var produts_sell = [
        { id: 1, id2: 0, name: 'dirt', sellprice: 1},
        { id: 2, id2: 0, name: 'grass', sellprice: 3},
        { id: 3, id2: 0, name: 'podzol', sellprice: 1},
        { id: 4, id2: 0, name: 'mycelium', sellprice: 1},
        { id: 5, id2: 0, name: 'sand', sellprice: 1},
        { id: 6, id2: 0, name: 'red_sand', sellprice: 1},
        { id: 7, id2: 0, name: 'sandstone', sellprice: 1},
        { id: 8, id2: 1, name: 'sandstone', sellprice: 2},
        { id: 9, id2: 2, name: 'sandstone', sellprice: 2},
        { id: 10, id2: 3, name: 'sandstone', sellprice: 2},
        { id: 11, id2: 0, name: 'red_sandstone', sellprice: 1},
        { id: 12, id2: 1, name: 'red_sandstone', sellprice: 2},
        { id: 13, id2: 2, name: 'red_sandstone', sellprice: 2},
        { id: 14, id2: 3, name: 'red_sandstone', sellprice: 2},
        { id: 15, id2: 0, name: 'oak_log', sellprice: 3},
        { id: 16, id2: 0, name: 'spruce_log', sellprice: 3},
        { id: 17, id2: 0, name: 'birch_log', sellprice: 3},
        { id: 18, id2: 0, name: 'jungle_log', sellprice: 3},
        { id: 19, id2: 0, name: 'acacia_log', sellprice: 3},
        { id: 20, id2: 0, name: 'dark_oak_log', sellprice: 3},
        { id: 21, id2: 0, name: 'stone', sellprice: 3},
        { id: 22, id2: 0, name: 'cobblestone', sellprice: 1},
        { id: 23, id2: 0, name: 'gravel', sellprice: 1},
        { id: 24, id2: 0, name: 'granite', sellprice: 1},
        { id: 25, id2: 0, name: 'diorite', sellprice: 1},
        { id: 26, id2: 0, name: 'amdesite', sellprice: 1},
        { id: 27, id2: 0, name: 'blackstone', sellprice: 1},
        { id: 28, id2: 0, name: 'deepslate', sellprice: 1},
        { id: 29, id2: 0, name: 'basalt', sellprice: 1},
        { id: 30, id2: 0, name: 'tuff', sellprice: 3},
        { id: 31, id2: 0, name: 'calcite', sellprice: 3},
        { id: 32, id2: 0, name: 'obsidian', sellprice: 150},
        { id: 33, id2: 0, name: 'coal', sellprice: 10},
        { id: 34, id2: 0, name: 'coal_ore', sellprice: 10},
        { id: 35, id2: 0, name: 'coal_block', sellprice: 90},
        { id: 36, id2: 0, name: 'iron_ingot', sellprice: 15},
        { id: 37, id2: 0, name: 'iron_ore', sellprice: 15},
        { id: 38, id2: 0, name: 'iron_block', sellprice: 135},
        { id: 39, id2: 0, name: 'lapis_lazuli', sellprice: 5},
        { id: 40, id2: 0, name: 'lapis_ore', sellprice: 5},
        { id: 41, id2: 0, name: 'lapis_block', sellprice: 45},
        { id: 42, id2: 0, name: 'gold_ingot', sellprice: 15},
        { id: 43, id2: 0, name: 'gold_ore', sellprice: 15},
        { id: 44, id2: 0, name: 'gold_block', sellprice: 135},
        { id: 45, id2: 0, name: 'redstone', sellprice: 5},
        { id: 46, id2: 0, name: 'redstone_ore', sellprice: 5},
        { id: 47, id2: 0, name: 'redstone_block', sellprice: 45},
        { id: 48, id2: 0, name: 'diamond', sellprice: 50},
        { id: 49, id2: 0, name: 'diamond_ore', sellprice: 50},
        { id: 50, id2: 0, name: 'diamond_block', sellprice: 450},
        { id: 51, id2: 0, name: 'emerald', sellprice: 60},
        { id: 52, id2: 0, name: 'emerald_ore', sellprice: 60},
        { id: 53, id2: 0, name: 'emerald_block', sellprice: 540},
        { id: 54, id2: 0, name: 'axolotl_spawn_egg', sellprice: 190000},
        { id: 55, id2: 0, name: 'blaze_spawn_egg', sellprice: 140000},
        { id: 56, id2: 0, name: 'cave_spider_spawn_egg', sellprice: 140000},
        { id: 57, id2: 0, name: 'chicken_spawn_egg', sellprice: 140000},
        { id: 58, id2: 0, name: 'cow_spawn_egg', sellprice: 140000},
        { id: 59, id2: 0, name: 'creeper_spawn_egg', sellprice: 190000},
        { id: 60, id2: 0, name: 'drowned_spawn_egg', sellprice: 140000},
        { id: 61, id2: 0, name: 'elder_guardian_spawn_egg', sellprice: 190000},
        { id: 62, id2: 0, name: 'enderman_spawn_egg', sellprice: 290000},
        { id: 63, id2: 0, name: 'endermite_spawn_egg', sellprice: 90000},
        { id: 64, id2: 0, name: 'evoker_spawn_egg', sellprice: 240000},
        { id: 65, id2: 0, name: 'goat_spawn_egg', sellprice: 140000},
        { id: 66, id2: 0, name: 'guardian_spawn_egg', sellprice: 140000},
        { id: 67, id2: 0, name: 'hoglin_spawn_egg', sellprice: 90000},
        { id: 68, id2: 0, name: 'husk_spawn_egg', sellprice: 140000},
        { id: 69, id2: 0, name: 'iron_gol', sellprice: 490000},
        { id: 70, id2: 0, name: 'magma_cube_spawn_egg', sellprice: 140000},
        { id: 71, id2: 0, name: 'mooshroom_spawn_egg', sellprice: 190000},
        { id: 72, id2: 0, name: 'panda_spawn_egg', sellprice: 140000},
        { id: 73, id2: 0, name: 'pig_spawn_egg', sellprice: 140000},
        { id: 74, id2: 0, name: 'piglin_brute_sawn_egg', sellprice: 190000},
        { id: 75, id2: 0, name: 'piglin_spawn_egg', sellprice: 190000},
        { id: 76, id2: 0, name: 'pillager_spawn_egg', sellprice: 190000},
        { id: 77, id2: 0, name: 'rabbit_spawn_egg', sellprice: 140000},
        { id: 78, id2: 0, name: 'ravager_spawn_egg', sellprice: 190000},
        { id: 79, id2: 0, name: 'sheeep_spawn_egg', sellprice: 90000},
        { id: 80, id2: 0, name: 'shulker_spawn_egg', sellprice: 440000},
        { id: 81, id2: 0, name: 'skeleton_horse_spawn_egg', sellprice: 190000},
        { id: 82, id2: 0, name: 'skeleton_spawn_egg', sellprice: 140000},
        { id: 83, id2: 0, name: 'slime_spawn_egg', sellprice: 140000},
        { id: 84, id2: 0, name: 'snow_golem_spawn_egg', sellprice: 90000},
        { id: 85, id2: 0, name: 'spider_spawn_egg', sellprice: 140000},
        { id: 86, id2: 0, name: 'stray_spawn_egg', sellprice: 140000},
        { id: 87, id2: 0, name: 'strider_spawn_egg', sellprice: 240000},
        { id: 88, id2: 0, name: 'vindicator_spawn_egg', sellprice: 240000},
        { id: 89, id2: 0, name: 'witch_spawn_egg', sellprice: 140000},
        { id: 90, id2: 0, name: 'wither_skeleton_spawm_egg', sellprice: 190000},
        { id: 91, id2: 0, name: 'zoglin_spawn_egg', sellprice: 140000},
        { id: 92, id2: 0, name: 'zombie_horse_spawn_egg', sellprice: 140000},
        { id: 93, id2: 0, name: 'zombie_pigman_spawn_egg', sellprice: 90000},
        { id: 94, id2: 0, name: 'zombie_spawn_egg', sellprice: 90000},
        { id: 95, id2: 0, name: 'zombie_villager_spawn_egg', sellprice: 90000},
        { id: 96, id2: 0, name: 'wool', sellprice:3 },
        { id: 97, id2: 0, name: 'light_gray_wool', sellprice:3 },
        { id: 98, id2: 0, name: 'gray_wool', sellprice:3 },
        { id: 99, id2: 0, name: 'black_wool', sellprice:3 },
        { id: 100, id2: 0, name: 'brown_wool', sellprice:3 },
        { id: 101, id2: 0, name: 'red_wool', sellprice:3 },
        { id: 102, id2: 0, name: 'orange_wool', sellprice:3 },
        { id: 103, id2: 0, name: 'yellow_wool', sellprice:3 },
        { id: 104, id2: 0, name: 'lime_wool', sellprice:3 },
        { id: 105, id2: 0, name: 'green_wool', sellprice:3 },
        { id: 106, id2: 0, name: 'cyan_wool', sellprice:3 },
        { id: 107, id2: 0, name: 'light_blue_wool', sellprice:3 },
        { id: 108, id2: 0, name: 'blue_wool', sellprice:3 },
        { id: 109, id2: 0, name: 'purple_wool', sellprice:3 },
        { id: 110, id2: 0, name: 'magenta_wool', sellprice:3 },
        { id: 111, id2: 0, name: 'pink_wool', sellprice:3 },
        { id: 112, id2: 0, name: 'hardened_clay', sellprice:6 },
        { id: 113, id2: 0, name: 'stained_hardened_clay', sellprice:6 },
        { id: 114, id2: 8, name: 'stained_hardened_clay', sellprice:6 },
        { id: 115, id2: 7, name: 'stained_hardened_clay', sellprice:6 },
        { id: 116, id2: 15, name: 'stained_hardened_clay', sellprice:6 },
        { id: 117, id2: 12, name: 'stained_hardened_clay', sellprice:6 },
        { id: 118, id2: 14, name: 'stained_hardened_clay', sellprice:6 },
        { id: 119, id2: 1, name: 'stained_hardened_clay', sellprice:6},
        { id: 120, id2: 4, name: 'stained_hardened_clay', sellprice:6},
        { id: 121, id2: 5, name: 'stained_hardened_clay', sellprice:6 },
        { id: 122, id2: 13, name: 'stained_hardened_clay', sellprice:6 },
        { id: 123, id2: 9, name: 'stained_hardened_clay', sellprice:6 },
        { id: 124, id2: 3, name: 'stained_hardened_clay', sellprice:6 },
        { id: 125, id2: 11, name: 'stained_hardened_clay', sellprice:6 },
        { id: 126, id2: 10, name: 'stained_hardened_clay', sellprice:6 },
        { id: 127, id2: 2, name: 'stained_hardened_clay', sellprice:6 },
        { id: 128, id2: 6, name: 'stained_hardened_clay', sellprice:6 },
        { id: 129, id2: 0, name: 'white_glazed_terracotta', sellprice: 10},
        { id: 130, id2: 0, name: 'silver_glazed_terracotta', sellprice: 10},
        { id: 131, id2: 0, name: 'gray_glazed_terracotta', sellprice: 10},
        { id: 132, id2: 0, name: 'black_glazed_terracotta', sellprice: 10},
        { id: 133, id2: 0, name: 'brown_glazed_terracotta', sellprice: 10},
        { id: 134, id2: 0, name: 'red_glazed_terracotta', sellprice: 10},
        { id: 135, id2: 0, name: 'orange_glazed_terracotta', sellprice: 10},
        { id: 136, id2: 0, name: 'lime_glazed_terracotta', sellprice: 10},
        { id: 137, id2: 0, name: 'green_glazed_terracotta', sellprice: 10},
        { id: 138, id2: 0, name: 'cyan_glazed_terracotta', sellprice: 10},
        { id: 139, id2: 0, name: 'light_blue_glazed_terracotta', sellprice: 10},
        { id: 140, id2: 0, name: 'blue_glazed_terracotta', sellprice: 10},
        { id: 141, id2: 0, name: 'purple_glazed_terracotta', sellprice: 10},
        { id: 142, id2: 0, name: 'magenta_glazed_terracotta', sellprice: 10},
        { id: 143, id2: 0, name: 'pink_glazed_terracotta', sellprice: 10},
        { id: 144, id2: 0, name: 'yellow_glazed_terracotta', sellprice: 10},
        { id: 145, id2: 0, name: 'white_concrete', sellprice: 10},
        { id: 146, id2: 0, name: 'light_gray_concrete', sellprice: 10},
        { id: 147, id2: 0, name: 'gray_concrete', sellprice: 10},
        { id: 148, id2: 0, name: 'black_concrete', sellprice: 10},
        { id: 149, id2: 0, name: 'brown_concrete', sellprice: 10},
        { id: 150, id2: 0, name: 'red_concrete', sellprice: 10},
        { id: 151, id2: 0, name: 'orange_concrete', sellprice: 10},
        { id: 152, id2: 0, name: 'yellow_concrete', sellprice: 10},
        { id: 153, id2: 0, name: 'lime_concrete', sellprice: 10},
        { id: 154, id2: 0, name: 'green_concrete', sellprice: 10},
        { id: 155, id2: 0, name: 'cyan_concrete', sellprice: 10},
        { id: 156, id2: 0, name: 'light_blue_concrete', sellprice: 10},
        { id: 157, id2: 0, name: 'blue_concrete', sellprice: 10},
        { id: 158, id2: 0, name: 'purple_concrete', sellprice: 10},
        { id: 159, id2: 0, name: 'magenta_concrete', sellprice: 10},
        { id: 160, id2: 0, name: 'pink_concrete', sellprice: 10},
        { id: 161, id2: 0, name: 'netherrack', sellprice: 3},
        { id: 162, id2: 0, name: 'soul_sand', sellprice: 5},
        { id: 163, id2: 0, name: 'magma', sellprice: 8},
        { id: 164, id2: 0, name: 'nether_wart_block', sellprice: 45},
        { id: 165, id2: 0, name: 'warped_wart_block', sellprice: 45},
        { id: 166, id2: 0, name: 'shroomlight', sellprice: 5},
        { id: 167, id2: 0, name: 'crimson_nylium', sellprice: 5},
        { id: 168, id2: 0, name: 'warped_nylium', sellprice: 5},
        { id: 169, id2: 0, name: 'mangrove_log', sellprice: 5},
        { id: 170, id2: 0, name: 'crimson_stem', sellprice: 5},
        { id: 171, id2: 0, name: 'warped_stem', sellprice: 5},
        { id: 172, id2: 0, name: 'nether_brick', sellprice: 5},
        { id: 173, id2: 0, name: 'red_nether_brick', sellprice: 10},
        { id: 174, id2: 0, name: 'end_stone', sellprice: 3},
        { id: 175, id2:0, name: 'chorus_plant',sellprice: 1},
        { id: 176, id2: 0, name: 'chorus_flower', sellprice: 3},
        { id: 177, id2: 0, name: 'end_bricks', sellprice: 5},
        { id: 178, id2: 0, name: 'purpur_block', sellprice: 5},
        { id: 179, id2: 2, name: 'purpur_block', sellprice: 5},
        { id: 180, id2: 0, name: 'wheat', sellprice: 3},
        { id: 181, id2: 0, name: 'carrot', sellprice: 3},
        { id: 182, id2: 0, name: 'potato', sellprice: 3},
        { id: 183, id2: 0, name: 'sugar_cane', sellprice: 3},
        { id: 184, id2: 0, name: 'bamboo', sellprice: 3},
        { id: 185, id2: 0, name: 'village_spawn_egg', sellprice: 90000}
    ]      

    function buyM(itemId,pl) {
        var item = produts_buy.find((produts) => produts.id === itemId)
        var buyMenu = mc.newCustomForm()
        buyMenu.setTitle('§l§e買東西')
        buyMenu.addLabel(`§l§b物品名稱§l§a${item.name}`)
        buyMenu.addLabel(`§l§6物品單價§l§e${item.price}`)
        buyMenu.addInput('§l§a購買數量')
        if (!item) {
            player.tell('§l§c該商品不存在!')
            return
        } else {
            var buyMenu = mc.newCustomForm()
            buyMenu.setTitle('§l§e買東西')
            buyMenu.addLabel(`§l§b物品名稱§l§a${item.name}`)
            buyMenu.addLabel(`§l§6物品單價§l§e${item.price}`)
            buyMenu.addInput('§l§a購買數量')
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

    function buyM_mob(itemId,pl) {
        var item = produts_buy.find((produts) => produts.id === itemId)
        var buyMenu = mc.newCustomForm()
        buyMenu.setTitle('§l§e買東西')
        buyMenu.addLabel(`§l§b物品名稱§l§a${item.name}`)
        buyMenu.addLabel(`§l§6物品單價§l§e${item.price}`)
        buyMenu.addInput('§l§a購買數量')
        if (!item) {
            player.tell('§l§c該商品不存在!')
            return
        } else {
            var buyMenu = mc.newCustomForm()
            buyMenu.setTitle('§l§e買東西')
            buyMenu.addLabel(`§l§b物品名稱§l§a${item.name}`)
            buyMenu.addLabel(`§l§6物品單價§l§e${item.price}`)
            buyMenu.addInput('§l§a購買數量')
            pl.sendForm(buyMenu,(pl,data) => {
                var player = pl
                var quantity = parseInt(data[2])
                if (isNaN(quantity) || quantity <= 0) {
                    pl.tell('§l§c請輸入正確的數字')
                } else {
                    purchaseItem_buy_mob(player,itemId, quantity,item)
                }
            })
        }
    }

    function sellM(itemId, pl) {
        var item = produts_sell.find((produts) => produts.id === itemId)
    
        if (!item) {
            pl.tell('§c該商品不存在!')
            return;
        }
    
        var sellMenu = mc.newCustomForm()
        sellMenu.setTitle('§l§e賣東西')
        sellMenu.addLabel(`§l§b物品名稱§l§a${item.name}`)
        sellMenu.addLabel(`§l§6物品售價§l§e${item.sellprice}`)
        sellMenu.addLabel('§l§c若出售，將會將你身上所以該物品同時出售')
        sellMenu.addSlider('§l§a可選擇要販售的組數§g',1,5)  
    
        pl.sendForm(sellMenu, (pl, data) => {
            var player = pl
            var slider = data[3]
            for (var i = 0 ; i < slider ; i++) {
                purchaseItem_sell(player, itemId) 
            }
        })
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
            mc.runcmd(`give ${player.realName} ${item.name} ${quantity}`)
        } else {
            mc.runcmd(`give ${player.realName} ${item.name} ${quantity} ${item.id2}`)
        }
            player.tell('§l§6購買該產品成功，你購買了' + quantity + '個')
    }

    function purchaseItem_buy_mob(player,itemId,quantity, item) {
        var item = produts_buy.find((produts) => produts.id === itemId)
        var playerCurrency = player.getScore('money')
        var totalPrice = item.price * quantity
        if (playerCurrency < totalPrice) {
            player.tell("§l§cyou don't have enough money to buy")
            return
        }
        player.reduceScore("money",totalPrice)
        if (item.id2 == 0) {
            mc.runcmd(`give ${player.realName} ${item.name} ${quantity}`)
            mc.runcmd(`give ${player.realName} mob_spawner`)
        } else {
            mc.runcmd(`give ${player.realName} ${item.name} ${quantity} ${item.id2}`)
        }
            player.tell('§l§6購買該產品成功，你購買了' + quantity + '個')
    }

    function purchaseItem_sell(player, itemId) {
        var item = produts_sell.find((produts) => produts.id === itemId)
    
        if (!item) {
            player.tell('該商品不存在！')
            return;
        }
       
        const quantity = player.clearItem(`minecraft:${item.name}`)
    
        if (quantity < 1) {
            player.tell('§l>>>§c你的物品數量不足，無法出售\n§g如果發現身上無物品又刻意刷\n造成遊戲負擔\n將會嚴懲')
    
            if (item.id2 == 0) {
                mc.runcmd(`give ${player.realName} ${item.name} ${quantity}`)
            } else {
                mc.runcmd(`give ${player.realName} ${item.name} ${quantity} ${item.id2}`)
            }
        } else {
            let earn = quantity * item.sellprice
            player.tell(`§l§a你已成功出售該物品§ex${quantity}§a，獲得§6${earn}元`)
            player.addScore('money', earn)
        }
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
                                pl.sendForm(logs,(pl,id) => {
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
                                        } else if (id == 4) {
                                            var itemId = 272
                                            buyM(itemId,pl)
                                        } else if (id == 5) {
                                            var itemId = 276
                                            buyM(itemId,pl)
                                        } else if (id == 6) {
                                            var itemId = 280
                                            buyM(itemId,pl)
                                        } else if (id == 7) {
                                            var itemId = 281
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
                                buyM_mob(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 115
                                buyM_mob(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 116
                                buyM_mob(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 117
                                buyM_mob(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 118
                                buyM_mob(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 119
                                buyM_mob(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 120
                                buyM_mob(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 121
                                buyM_mob(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 122
                                buyM_mob(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 123
                                buyM_mob(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 124
                                buyM_mob(itemId,pl)
                            } else if (id == 11) {
                                var itemId = 125
                                buyM_mob(itemId,pl)
                            } else if (id == 12) {
                                var itemId = 126
                                buyM_mob(itemId,pl)
                            } else if (id == 13) {
                                var itemId = 127
                                buyM_mob(itemId,pl)
                            } else if (id == 14) {
                                var itemId = 128
                                buyM_mob(itemId,pl)
                            } else if (id == 15) {
                                var itemId = 129
                                buyM_mob(itemId,pl)
                            } else if (id == 16) {
                                var itemId = 130
                                buyM_mob(itemId,pl)
                            } else if (id == 17) {
                                var itemId = 131
                                buyM_mob(itemId,pl)
                            } else if (id == 18) {
                                var itemId = 132
                                buyM_mob(itemId,pl)
                            } else if (id == 19) {
                                var itemId = 133
                                buyM_mob(itemId,pl)
                            } else if (id == 20) {
                                var itemId = 134
                                buyM_mob(itemId,pl)
                            } else if (id == 21) {
                                var itemId = 135
                                buyM_mob(itemId,pl)
                            } else if (id == 22) {
                                var itemId = 136
                                buyM_mob(itemId,pl)
                            } else if (id == 23) {
                                var itemId = 137
                                buyM_mob(itemId,pl)
                            } else if (id == 24) {
                                var itemId = 138
                                buyM_mob(itemId,pl)
                            } else if (id == 25) {
                                var itemId = 139
                                buyM_mob(itemId,pl)
                            } else if (id == 26) {
                                var itemId = 140
                                buyM_mob(itemId,pl)
                            } else if (id == 27) {
                                var itemId = 141
                                buyM_mob(itemId,pl)
                            } else if (id == 28) {
                                var itemId = 142
                                buyM_mob(itemId,pl)
                            } else if (id == 29) {
                                var itemId = 143
                                buyM_mob(itemId,pl)
                            } else if (id == 30) {
                                var itemId = 144
                                buyM_mob(itemId,pl)
                            } else if (id == 31) {
                                var itemId = 145
                                buyM_mob(itemId,pl)
                            } else if (id == 32) {
                                var itemId = 146
                                buyM_mob(itemId,pl)
                            } else if (id == 33) {
                                var itemId = 147
                                buyM_mob(itemId,pl)
                            } else if (id == 34) {
                                var itemId = 148
                                buyM_mob(itemId,pl)
                            } else if (id == 35) {
                                var itemId = 149
                                buyM_mob(itemId,pl)
                            } else if (id == 36) {
                                var itemId = 150
                                buyM_mob(itemId,pl)
                            } else if (id == 37) {
                                var itemId = 151
                                buyM_mob(itemId,pl)
                            } else if (id == 38) {
                                var itemId = 152
                                buyM_mob(itemId,pl)
                            } else if (id == 39) {
                                var itemId = 153
                                buyM_mob(itemId,pl)
                            } else if (id == 40) {
                                var itemId = 154
                                buyM_mob(itemId,pl)
                            } else if (id == 41) {
                                var itemId = 155
                                buyM_mob(itemId,pl)
                            } else if (id == 42) {
                                var itemId = 282
                                buyM_mob(itemId,pl)
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
                            if (id == 0) {
                                var itemId = 1
                                sellM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 2
                                sellM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 3
                                sellM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 4
                                sellM(itemId,pl)
                            }
                          })
                      } else if (id == 1){
                          pl.sendForm(sand,(pl,id) => {
                            if (id == 0) {
                                var itemId = 5
                                sellM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 6
                                sellM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 7
                                sellM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 8
                                sellM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 9
                                sellM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 10
                                sellM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 11
                                sellM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 12
                                sellM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 13
                                sellM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 14
                                sellM(itemId,pl)
                            }
                          })
                      } else if (id == 2){
                          pl.sendForm(logs,(pl,id) => {
                            if (id == 0) {
                                var itemId = 15
                                sellM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 2
                                sellM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 17
                                sellM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 18
                                sellM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 19
                                sellM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 20
                                sellM(itemId,pl)
                            }
                          })
                      } else if (id == 3){
                          pl.sendForm(stone,(pl,id) => {
                            if (id == 0) {
                                var itemId = 21
                                sellM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 22
                                sellM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 23
                                sellM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 24
                                sellM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 25
                                sellM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 26
                                sellM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 27
                                sellM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 28
                                sellM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 29
                                sellM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 30
                                sellM(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 31
                                sellM(itemId,pl)
                            } else if (id == 11) {
                                var itemId = 32
                                sellM(itemId,pl)
                            }
                          })
                      } else if (id == 4){
                          pl.sendForm(wool,(pl,id) => {
                            if (id == 0) {
                                var itemId = 96
                                sellM(itemId,pl)
                            }else if (id == 1) {
                                var itemId = 97
                                sellM(itemId,pl)
                            }else if (id == 2) {
                                var itemId = 98
                                sellM(itemId,pl)
                            }else if (id == 3) {
                                var itemId = 99
                                sellM(itemId,pl)
                            }else if (id == 4) {
                                var itemId = 100
                                sellM(itemId,pl)
                            }else if (id == 5) {
                                var itemId = 101
                                sellM(itemId,pl)
                            }else if (id == 6) {
                                var itemId = 102
                                sellM(itemId,pl)
                            }else if (id == 7) {
                                var itemId = 103
                                sellM(itemId,pl)
                            }else if (id == 8) {
                                var itemId = 104
                                sellM(itemId,pl)
                            }else if (id == 9) {
                                var itemId = 105
                                sellM(itemId,pl)
                            }else if (id == 10) {
                                var itemId = 107
                                sellM(itemId,pl)
                            }else if (id == 11) {
                                var itemId = 107
                                sellM(itemId,pl)
                            }else if (id == 12) {
                                var itemId = 108
                                sellM(itemId,pl)
                            }else if (id == 13) {
                                var itemId = 109
                                sellM(itemId,pl)
                            }else if (id == 14) {
                                var itemId = 110
                                sellM(itemId,pl)
                            }else if (id == 15) {
                                var itemId = 111
                                sellM(itemId,pl)
                            }
                          })
                      } else if (id == 5){
                          pl.sendForm(tr,(pl,id) => {
                              if (id == 0){
                                  pl.sendForm(ttr,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 112
                                        sellM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 113
                                        sellM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 114
                                        sellM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 115
                                        sellM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 116
                                        sellM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 117
                                        sellM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 118
                                        sellM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 119
                                        sellM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 120
                                        sellM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 121
                                        sellM(itemId,pl)
                                    } else if (id == 10) {
                                        var itemId = 122
                                        sellM(itemId,pl)
                                    } else if (id == 11) {
                                        var itemId = 123
                                        sellM(itemId,pl)
                                    } else if (id == 12) {
                                        var itemId = 124
                                        sellM(itemId,pl)
                                    } else if (id == 13) {
                                        var itemId = 125
                                        sellM(itemId,pl)
                                    } else if (id == 14) {
                                        var itemId = 126
                                        sellM(itemId,pl)
                                    } else if (id == 15) {
                                        var itemId = 127
                                        sellM(itemId,pl)
                                    } else if (id == 16) {
                                        var itemId = 128
                                        sellM(itemId,pl)
                                    } 
                                  })
                              } else if (id == 1){
                              pl.sendForm(etr,(pl,id)=> {
                                if (id == 0) {
                                    var itemId = 129
                                    sellM(itemId,pl)
                                }else if (id == 1) {
                                    var itemId = 130
                                    sellM(itemId,pl)
                                }else if (id == 2) {
                                    var itemId = 131
                                    sellM(itemId,pl)
                                }else if (id == 3) {
                                    var itemId = 132
                                    sellM(itemId,pl)
                                }else if (id == 4) {
                                    var itemId = 133
                                    sellM(itemId,pl)
                                }else if (id == 5) {
                                    var itemId = 134
                                    sellM(itemId,pl)
                                }else if (id == 6) {
                                    var itemId = 135
                                    sellM(itemId,pl)
                                }else if (id == 7) {
                                    var itemId = 136
                                    sellM(itemId,pl)
                                }else if (id == 8) {
                                    var itemId = 144
                                    sellM(itemId,pl)
                                }else if (id == 9) {
                                    var itemId = 137
                                    sellM(itemId,pl)
                                }else if (id == 10) {
                                    var itemId = 138
                                    sellM(itemId,pl)
                                }else if (id == 11) {
                                    var itemId = 139
                                    sellM(itemId,pl)
                                }else if (id == 12) {
                                    var itemId = 140
                                    sellM(itemId,pl)
                                }else if (id == 13) {
                                    var itemId = 141
                                    sellM(itemId,pl)
                                }else if (id == 14) {
                                    var itemId = 142
                                    sellM(itemId,pl)
                                }else if (id == 15) {
                                    var itemId = 143
                                    sellM(itemId,pl)
                                }
                              })
                              }
                          })
                      } else if (id == 6){
                      pl.sendForm(cct,(pl,id)=>{
                        if (id == 0) {
                            var itemId = 145
                            sellM(itemId,pl)
                        } else if (id == 1) {
                            var itemId = 146
                            sellM(itemId,pl)
                        }else if (id == 2) {
                            var itemId = 147
                            sellM(itemId,pl)
                        }else if (id == 3) {
                            var itemId = 148
                            sellM(itemId,pl)
                        }else if (id == 4) {
                            var itemId = 149
                            sellM(itemId,pl)
                        }else if (id == 5) {
                            var itemId = 150
                            sellM(itemId,pl)
                        }else if (id == 6) {
                            var itemId = 151
                            sellM(itemId,pl)
                        }else if (id == 7) {
                            var itemId = 152
                            sellM(itemId,pl)
                        }else if (id == 8) {
                            var itemId = 153
                            sellM(itemId,pl)
                        }else if (id == 9) {
                            var itemId = 154
                            sellM(itemId,pl)
                        }else if (id == 10) {
                            var itemId = 155
                            sellM(itemId,pl)
                        }else if (id == 11) {
                            var itemId = 156
                            sellM(itemId,pl)
                        }else if (id == 12) {
                            var itemId = 157
                            sellM(itemId,pl)
                        }else if (id == 13) {
                            var itemId = 158
                            sellM(itemId,pl)
                        }else if (id == 14) {
                            var itemId = 159
                            sellM(itemId,pl)
                        }else if (id == 15) {
                            var itemId = 160
                            sellM(itemId,pl)
                        }
                      })  
                      } else if (id == 7){
                        pl.sendForm(nth,(pl,id)=>{
                            if (id == 0) {
                                var itemId = 161
                                sellM(itemId,pl)
                            }else if (id == 1) {
                                var itemId = 162
                                sellM(itemId,pl)
                            }else if (id == 2) {
                                var itemId = 163
                                sellM(itemId,pl)
                            }else if (id == 3) {
                                var itemId = 164
                                sellM(itemId,pl)
                            }else if (id == 4) {
                                var itemId = 165
                                sellM(itemId,pl)
                            }else if (id == 5) {
                                var itemId = 166
                                sellM(itemId,pl)
                            }else if (id == 6) {
                                var itemId = 167
                                sellM(itemId,pl)
                            }else if (id == 7) {
                                var itemId = 168
                                sellM(itemId,pl)
                            }else if (id == 8) {
                                var itemId = 169
                                sellM(itemId,pl)
                            }else if (id == 9) {
                                var itemId = 170
                                sellM(itemId,pl)
                            }else if (id == 10) {
                                var itemId = 171
                                sellM(itemId,pl)
                            }else if (id == 11) {
                                var itemId = 172
                                sellM(itemId,pl)
                            }else if (id == 12) {
                                var itemId = 173
                                sellM(itemId,pl)
                            }
                        })
                      } else if (id == 8){
                        pl.sendForm(end,(pl,id)=>{
                            if (id == 0) {
                                var itemId = 174
                                sellM(itemId,pl)
                            }else if (id == 1) {
                                var itemId = 175
                                sellM(itemId,pl)
                            }else if (id == 2) {
                                var itemId = 176
                                sellM(itemId,pl)
                            }else if (id == 3) {
                                var itemId = 177
                                sellM(itemId,pl)
                            }else if (id == 4) {
                                var itemId = 178
                                sellM(itemId,pl)
                            }else if (id == 5) {
                                var itemId = 179
                                sellM(itemId,pl)
                            }
                        })
                      }
                  })
              } else if(id == 1){
                pl.sendForm(ore,(pl,id) => {
                    if (id == 0) {
                        var itemId = 33
                        sellM(itemId,pl)
                    } else if (id == 1) {
                        var itemId = 34
                        sellM(itemId,pl)
                    } else if (id == 2) {
                        var itemId = 35
                        sellM(itemId,pl)
                    } else if (id == 3) {
                        var itemId = 36
                        sellM(itemId,pl)
                    } else if (id == 4) {
                        var itemId = 37
                        sellM(itemId,pl)
                    } else if (id == 5) {
                        var itemId = 38
                        sellM(itemId,pl)
                    } else if (id == 6) {
                        var itemId = 39
                        sellM(itemId,pl)
                    } else if (id == 7) {
                        var itemId = 40
                        sellM(itemId,pl)
                    } else if (id == 8) {
                        var itemId = 41
                        sellM(itemId,pl)
                    } else if (id == 9) {
                        var itemId = 42
                        sellM(itemId,pl)
                    } else if (id == 10) {
                        var itemId = 43
                        sellM(itemId,pl)
                    } else if (id == 11) {
                        var itemId = 44
                        sellM(itemId,pl)
                    } else if (id == 12) {
                        var itemId = 45
                        sellM(itemId,pl)
                    } else if (id == 13) {
                        var itemId = 46
                        sellM(itemId,pl)
                    } else if (id == 14) {
                        var itemId = 47
                        sellM(itemId,pl)
                    } else if (id == 15) {
                        var itemId = 48
                        sellM(itemId,pl)
                    } else if (id == 16) {
                        var itemId = 49
                        sellM(itemId,pl)
                    } else if (id == 17) {
                        var itemId = 50
                        sellM(itemId,pl)
                    } else if (id == 18) {
                        var itemId = 51
                        sellM(itemId,pl)
                    } else if (id == 19) {
                        var itemId = 52
                        sellM(itemId,pl)
                    } else if (id == 20) {
                        var itemId = 53 
                        sellM(itemId,pl)
                    }
                  })
              } else if(id == 2){
                pl.sendForm(egg,(pl,id) => {
                    if (id == 0) {
                        var itemId = 54
                        sellM(itemId,pl)
                    } else if (id == 1) {
                        var itemId = 55
                        sellM(itemId,pl)
                    } else if (id == 2) {
                        var itemId = 56
                        sellM(itemId,pl)
                    } else if (id == 3) {
                        var itemId = 57
                        sellM(itemId,pl)
                    } else if (id == 4) {
                        var itemId = 58
                        sellM(itemId,pl)
                    } else if (id == 5) {
                        var itemId = 59
                        sellM(itemId,pl)
                    } else if (id == 6) {
                        var itemId = 60
                        sellM(itemId,pl)
                    } else if (id == 7) {
                        var itemId = 61
                        sellM(itemId,pl)
                    } else if (id == 8) {
                        var itemId = 62
                        sellM(itemId,pl)
                    } else if (id == 9) {
                        var itemId = 63
                        sellM(itemId,pl)
                    } else if (id == 10) {
                        var itemId = 64
                        sellM(itemId,pl)
                    } else if (id == 11) {
                        var itemId = 65
                        sellM(itemId,pl)
                    } else if (id == 12) {
                        var itemId = 66
                        sellM(itemId,pl)
                    } else if (id == 13) {
                        var itemId = 67
                        sellM(itemId,pl)
                    } else if (id == 14) {
                        var itemId = 68
                        sellM(itemId,pl)
                    } else if (id == 15) {
                        var itemId = 69
                        sellM(itemId,pl)
                    } else if (id == 16) {
                        var itemId = 70
                        sellM(itemId,pl)
                    } else if (id == 17) {
                        var itemId = 71
                        sellM(itemId,pl)
                    } else if (id == 18) {
                        var itemId = 72
                        sellM(itemId,pl)
                    } else if (id == 19) {
                        var itemId = 73
                        sellM(itemId,pl)
                    } else if (id == 20) {
                        var itemId = 74
                        sellM(itemId,pl)
                    } else if (id == 21) {
                        var itemId = 75
                        sellM(itemId,pl)
                    } else if (id == 22) {
                        var itemId = 76
                        sellM(itemId,pl)
                    } else if (id == 23) {
                        var itemId = 77
                        sellM(itemId,pl)
                    } else if (id == 24) {
                        var itemId = 78
                        sellM(itemId,pl)
                    } else if (id == 25) {
                        var itemId = 79
                        sellM(itemId,pl)
                    } else if (id == 26) {
                        var itemId = 80
                        sellM(itemId,pl)
                    } else if (id == 27) {
                        var itemId = 81
                        sellM(itemId,pl)
                    } else if (id == 28) {
                        var itemId = 82
                        sellM(itemId,pl)
                    } else if (id == 29) {
                        var itemId = 83
                        sellM(itemId,pl)
                    } else if (id == 30) {
                        var itemId = 84
                        sellM(itemId,pl)
                    } else if (id == 31) {
                        var itemId = 85
                        sellM(itemId,pl)
                    } else if (id == 32) {
                        var itemId = 86
                        sellM(itemId,pl)
                    } else if (id == 33) {
                        var itemId = 87
                        sellM(itemId,pl)
                    } else if (id == 34) {
                        var itemId = 88
                        sellM(itemId,pl)
                    } else if (id == 35) {
                        var itemId = 89
                        sellM(itemId,pl)
                    } else if (id == 36) {
                        var itemId = 90
                        sellM(itemId,pl)
                    } else if (id == 37) {
                        var itemId = 91
                        sellM(itemId,pl)
                    } else if (id == 38) {
                        var itemId = 92
                        sellM(itemId,pl)
                    } else if (id == 39) {
                        var itemId = 93
                        sellM(itemId,pl)
                    } else if (id == 40) {
                        var itemId = 94
                        sellM(itemId,pl)
                    } else if (id == 41) {
                        var itemId = 95
                        sellM(itemId,pl)
                    } else if (id == 42) {
                        var itemId = 185
                        sellM(itemId,pl)
                    }
                  })
                } else if (id == 3) {
                    pl.sendForm(crops,(pl,id) => {
                        if (id == 0) {
                            var itemId = 180
                            sellM(itemId,pl)
                        } else if (id == 1) {
                            var itemId = 181
                            sellM(itemId,pl)
                        } else if (id == 2) {
                            var itemId = 182
                            sellM(itemId,pl)
                        } else if (id == 3) {
                            var itemId = 183
                            sellM(itemId,pl)
                        } else if (id == 4) {
                            var itemId = 184
                            sellM(itemId,pl)
                        } 
                    })
                }
                })
        }else if (res.chose == null) {
            ori.player.sendForm(fm,(pl,id) => {
                if (id == 0) {
                    pl.sendForm(buy,(pl,id) => {
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
                                  pl.sendForm(logs,(pl,id) => {
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
                                          } else if (id == 4) {
                                                var itemId = 272
                                                buyM(itemId,pl)
                                          } else if (id == 5) {
                                            var itemId = 276
                                            buyM(itemId,pl)
                                          } else if (id == 6) {
                                            var itemId = 280
                                            buyM(itemId,pl)
                                          } else if (id == 7) {
                                            var itemId = 281
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
                                  buyM_mob(itemId,pl)
                              } else if (id == 1) {
                                  var itemId = 115
                                  buyM_mob(itemId,pl)
                              } else if (id == 2) {
                                  var itemId = 116
                                  buyM_mob(itemId,pl)
                              } else if (id == 3) {
                                  var itemId = 117
                                  buyM_mob(itemId,pl)
                              } else if (id == 4) {
                                  var itemId = 118
                                  buyM_mob(itemId,pl)
                              } else if (id == 5) {
                                  var itemId = 119
                                  buyM_mob(itemId,pl)
                              } else if (id == 6) {
                                  var itemId = 120
                                  buyM_mob(itemId,pl)
                              } else if (id == 7) {
                                  var itemId = 121
                                  buyM_mob(itemId,pl)
                              } else if (id == 8) {
                                  var itemId = 122
                                  buyM_mob(itemId,pl)
                              } else if (id == 9) {
                                  var itemId = 123
                                  buyM_mob(itemId,pl)
                              } else if (id == 10) {
                                  var itemId = 124
                                  buyM_mob(itemId,pl)
                              } else if (id == 11) {
                                  var itemId = 125
                                  buyM_mob(itemId,pl)
                              } else if (id == 12) {
                                  var itemId = 126
                                  buyM_mob(itemId,pl)
                              } else if (id == 13) {
                                  var itemId = 127
                                  buyM_mob(itemId,pl)
                              } else if (id == 14) {
                                  var itemId = 128
                                  buyM_mob(itemId,pl)
                              } else if (id == 15) {
                                  var itemId = 129
                                  buyM_mob(itemId,pl)
                              } else if (id == 16) {
                                  var itemId = 130
                                  buyM_mob(itemId,pl)
                              } else if (id == 17) {
                                  var itemId = 131
                                  buyM(itemId,pl)
                              } else if (id == 18) {
                                  var itemId = 132
                                  buyM_mob(itemId,pl)
                              } else if (id == 19) {
                                  var itemId = 133
                                  buyM_mob(itemId,pl)
                              } else if (id == 20) {
                                  var itemId = 134
                                  buyM_mob(itemId,pl)
                              } else if (id == 21) {
                                  var itemId = 135
                                  buyM_mob(itemId,pl)
                              } else if (id == 22) {
                                  var itemId = 136
                                  buyM_mob(itemId,pl)
                              } else if (id == 23) {
                                  var itemId = 137
                                  buyM_mob(itemId,pl)
                              } else if (id == 24) {
                                  var itemId = 138
                                  buyM_mob(itemId,pl)
                              } else if (id == 25) {
                                  var itemId = 139
                                  buyM_mob(itemId,pl)
                              } else if (id == 26) {
                                  var itemId = 140
                                  buyM_mob(itemId,pl)
                              } else if (id == 27) {
                                  var itemId = 141
                                  buyM_mob(itemId,pl)
                              } else if (id == 28) {
                                  var itemId = 142
                                  buyM_mob(itemId,pl)
                              } else if (id == 29) {
                                  var itemId = 143
                                  buyM_mob(itemId,pl)
                              } else if (id == 30) {
                                  var itemId = 144
                                  buyM_mob(itemId,pl)
                              } else if (id == 31) {
                                  var itemId = 145
                                  buyM_mob(itemId,pl)
                              } else if (id == 32) {
                                  var itemId = 146
                                  buyM_mob(itemId,pl)
                              } else if (id == 33) {
                                  var itemId = 147
                                  buyM_mob(itemId,pl)
                              } else if (id == 34) {
                                  var itemId = 148
                                  buyM_mob(itemId,pl)
                              } else if (id == 35) {
                                  var itemId = 149
                                  buyM_mob(itemId,pl)
                              } else if (id == 36) {
                                  var itemId = 150
                                  buyM_mob(itemId,pl)
                              } else if (id == 37) {
                                  var itemId = 151
                                  buyM_mob(itemId,pl)
                              } else if (id == 38) {
                                  var itemId = 152
                                  buyM_mob(itemId,pl)
                              } else if (id == 39) {
                                  var itemId = 153
                                  buyM_mob(itemId,pl)
                              } else if (id == 40) {
                                  var itemId = 154
                                  buyM_mob(itemId,pl)
                              } else if (id == 41) {
                                  var itemId = 155
                                  buyM_mob(itemId,pl)
                              }  else if (id == 42) {
                                var itemId = 282
                                buyM_mob(itemId,pl)
                            }
                            })
                        } else if (id == 6) {
                            pl.sendForm(md,(pl,id) => {
                                if (id == 0) {
                                    var itemId = 273
                                    buyM(itemId,pl)
                                } else if (id == 1) {
                                    var itemId = 274
                                    buyM(itemId,pl)
                                } else if (id == 2) {
                                    var itemId = 275
                                    buyM(itemId,pl)
                                } else if (id == 3) {
                                    var itemId = 277
                                    buyM(itemId,pl)
                                } else if (id == 4) {
                                    var itemId = 278
                                    buyM(itemId,pl)
                                } else if (id == 5) {
                                    var itemId = 279
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
                                    if (id == 0) {
                                        var itemId = 1
                                        sellM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 2
                                        sellM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 3
                                        sellM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 4
                                        sellM(itemId,pl)
                                    }
                                  })
                              } else if (id == 1){
                                  pl.sendForm(sand,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 5
                                        sellM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 6
                                        sellM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 7
                                        sellM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 8
                                        sellM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 9
                                        sellM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 10
                                        sellM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 11
                                        sellM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 12
                                        sellM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 13
                                        sellM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 14
                                        sellM(itemId,pl)
                                    }
                                  })
                              } else if (id == 2){
                                  pl.sendForm(logs,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 15
                                        sellM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 2
                                        sellM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 17
                                        sellM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 18
                                        sellM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 19
                                        sellM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 20
                                        sellM(itemId,pl)
                                    }
                                  })
                              } else if (id == 3){
                                  pl.sendForm(stone,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 21
                                        sellM(itemId,pl)
                                    } else if (id == 1) {
                                        var itemId = 22
                                        sellM(itemId,pl)
                                    } else if (id == 2) {
                                        var itemId = 23
                                        sellM(itemId,pl)
                                    } else if (id == 3) {
                                        var itemId = 24
                                        sellM(itemId,pl)
                                    } else if (id == 4) {
                                        var itemId = 25
                                        sellM(itemId,pl)
                                    } else if (id == 5) {
                                        var itemId = 26
                                        sellM(itemId,pl)
                                    } else if (id == 6) {
                                        var itemId = 27
                                        sellM(itemId,pl)
                                    } else if (id == 7) {
                                        var itemId = 28
                                        sellM(itemId,pl)
                                    } else if (id == 8) {
                                        var itemId = 29
                                        sellM(itemId,pl)
                                    } else if (id == 9) {
                                        var itemId = 30
                                        sellM(itemId,pl)
                                    } else if (id == 10) {
                                        var itemId = 31
                                        sellM(itemId,pl)
                                    } else if (id == 11) {
                                        var itemId = 32
                                        sellM(itemId,pl)
                                    }
                                  })
                              } else if (id == 4){
                                  pl.sendForm(wool,(pl,id) => {
                                    if (id == 0) {
                                        var itemId = 96
                                        sellM(itemId,pl)
                                    }else if (id == 1) {
                                        var itemId = 97
                                        sellM(itemId,pl)
                                    }else if (id == 2) {
                                        var itemId = 98
                                        sellM(itemId,pl)
                                    }else if (id == 3) {
                                        var itemId = 99
                                        sellM(itemId,pl)
                                    }else if (id == 4) {
                                        var itemId = 100
                                        sellM(itemId,pl)
                                    }else if (id == 5) {
                                        var itemId = 101
                                        sellM(itemId,pl)
                                    }else if (id == 6) {
                                        var itemId = 102
                                        sellM(itemId,pl)
                                    }else if (id == 7) {
                                        var itemId = 103
                                        sellM(itemId,pl)
                                    }else if (id == 8) {
                                        var itemId = 104
                                        sellM(itemId,pl)
                                    }else if (id == 9) {
                                        var itemId = 105
                                        sellM(itemId,pl)
                                    }else if (id == 10) {
                                        var itemId = 107
                                        sellM(itemId,pl)
                                    }else if (id == 11) {
                                        var itemId = 107
                                        sellM(itemId,pl)
                                    }else if (id == 12) {
                                        var itemId = 108
                                        sellM(itemId,pl)
                                    }else if (id == 13) {
                                        var itemId = 109
                                        sellM(itemId,pl)
                                    }else if (id == 14) {
                                        var itemId = 110
                                        sellM(itemId,pl)
                                    }else if (id == 15) {
                                        var itemId = 111
                                        sellM(itemId,pl)
                                    }
                                  })
                              } else if (id == 5){
                                  pl.sendForm(tr,(pl,id) => {
                                      if (id == 0){
                                          pl.sendForm(ttr,(pl,id) => {
                                            if (id == 0) {
                                                var itemId = 112
                                                sellM(itemId,pl)
                                            } else if (id == 1) {
                                                var itemId = 113
                                                sellM(itemId,pl)
                                            } else if (id == 2) {
                                                var itemId = 114
                                                sellM(itemId,pl)
                                            } else if (id == 3) {
                                                var itemId = 115
                                                sellM(itemId,pl)
                                            } else if (id == 4) {
                                                var itemId = 116
                                                sellM(itemId,pl)
                                            } else if (id == 5) {
                                                var itemId = 117
                                                sellM(itemId,pl)
                                            } else if (id == 6) {
                                                var itemId = 118
                                                sellM(itemId,pl)
                                            } else if (id == 7) {
                                                var itemId = 119
                                                sellM(itemId,pl)
                                            } else if (id == 8) {
                                                var itemId = 120
                                                sellM(itemId,pl)
                                            } else if (id == 9) {
                                                var itemId = 121
                                                sellM(itemId,pl)
                                            } else if (id == 10) {
                                                var itemId = 122
                                                sellM(itemId,pl)
                                            } else if (id == 11) {
                                                var itemId = 123
                                                sellM(itemId,pl)
                                            } else if (id == 12) {
                                                var itemId = 124
                                                sellM(itemId,pl)
                                            } else if (id == 13) {
                                                var itemId = 125
                                                sellM(itemId,pl)
                                            } else if (id == 14) {
                                                var itemId = 126
                                                sellM(itemId,pl)
                                            } else if (id == 15) {
                                                var itemId = 127
                                                sellM(itemId,pl)
                                            } else if (id == 16) {
                                                var itemId = 128
                                                sellM(itemId,pl)
                                            } 
                                          })
                                      } else if (id == 1){
                                      pl.sendForm(etr,(pl,id)=> {
                                        if (id == 0) {
                                            var itemId = 129
                                            sellM(itemId,pl)
                                        }else if (id == 1) {
                                            var itemId = 130
                                            sellM(itemId,pl)
                                        }else if (id == 2) {
                                            var itemId = 131
                                            sellM(itemId,pl)
                                        }else if (id == 3) {
                                            var itemId = 132
                                            sellM(itemId,pl)
                                        }else if (id == 4) {
                                            var itemId = 133
                                            sellM(itemId,pl)
                                        }else if (id == 5) {
                                            var itemId = 134
                                            sellM(itemId,pl)
                                        }else if (id == 6) {
                                            var itemId = 135
                                            sellM(itemId,pl)
                                        }else if (id == 7) {
                                            var itemId = 136
                                            sellM(itemId,pl)
                                        }else if (id == 8) {
                                            var itemId = 144
                                            sellM(itemId,pl)
                                        }else if (id == 9) {
                                            var itemId = 137
                                            sellM(itemId,pl)
                                        }else if (id == 10) {
                                            var itemId = 138
                                            sellM(itemId,pl)
                                        }else if (id == 11) {
                                            var itemId = 139
                                            sellM(itemId,pl)
                                        }else if (id == 12) {
                                            var itemId = 140
                                            sellM(itemId,pl)
                                        }else if (id == 13) {
                                            var itemId = 141
                                            sellM(itemId,pl)
                                        }else if (id == 14) {
                                            var itemId = 142
                                            sellM(itemId,pl)
                                        }else if (id == 15) {
                                            var itemId = 143
                                            sellM(itemId,pl)
                                        }
                                      })
                              } else if (id == 6){
                              pl.sendForm(cct,(pl,id)=>{
                                if (id == 0) {
                                    var itemId = 145
                                    sellM(itemId,pl)
                                } else if (id == 1) {
                                    var itemId = 146
                                    sellM(itemId,pl)
                                }else if (id == 2) {
                                    var itemId = 147
                                    sellM(itemId,pl)
                                }else if (id == 3) {
                                    var itemId = 148
                                    sellM(itemId,pl)
                                }else if (id == 4) {
                                    var itemId = 149
                                    sellM(itemId,pl)
                                }else if (id == 5) {
                                    var itemId = 150
                                    sellM(itemId,pl)
                                }else if (id == 6) {
                                    var itemId = 151
                                    sellM(itemId,pl)
                                }else if (id == 7) {
                                    var itemId = 152
                                    sellM(itemId,pl)
                                }else if (id == 8) {
                                    var itemId = 153
                                    sellM(itemId,pl)
                                }else if (id == 9) {
                                    var itemId = 154
                                    sellM(itemId,pl)
                                }else if (id == 10) {
                                    var itemId = 155
                                    sellM(itemId,pl)
                                }else if (id == 11) {
                                    var itemId = 156
                                    sellM(itemId,pl)
                                }else if (id == 12) {
                                    var itemId = 157
                                    sellM(itemId,pl)
                                }else if (id == 13) {
                                    var itemId = 158
                                    sellM(itemId,pl)
                                }else if (id == 14) {
                                    var itemId = 159
                                    sellM(itemId,pl)
                                }else if (id == 15) {
                                    var itemId = 160
                                    sellM(itemId,pl)
                                }
                              })  
                            }
                        })
                              } else if (id == 7){
                                pl.sendForm(nth,(pl,id)=>{
                                    if (id == 0) {
                                        var itemId = 161
                                        sellM(itemId,pl)
                                    }else if (id == 1) {
                                        var itemId = 162
                                        sellM(itemId,pl)
                                    }else if (id == 2) {
                                        var itemId = 163
                                        sellM(itemId,pl)
                                    }else if (id == 3) {
                                        var itemId = 164
                                        sellM(itemId,pl)
                                    }else if (id == 4) {
                                        var itemId = 165
                                        sellM(itemId,pl)
                                    }else if (id == 5) {
                                        var itemId = 166
                                        sellM(itemId,pl)
                                    }else if (id == 6) {
                                        var itemId = 167
                                        sellM(itemId,pl)
                                    }else if (id == 7) {
                                        var itemId = 168
                                        sellM(itemId,pl)
                                    }else if (id == 8) {
                                        var itemId = 169
                                        sellM(itemId,pl)
                                    }else if (id == 9) {
                                        var itemId = 170
                                        sellM(itemId,pl)
                                    }else if (id == 10) {
                                        var itemId = 171
                                        sellM(itemId,pl)
                                    }else if (id == 11) {
                                        var itemId = 172
                                        sellM(itemId,pl)
                                    }else if (id == 12) {
                                        var itemId = 173
                                        sellM(itemId,pl)
                                    }
                                })
                              } else if (id == 8){
                                pl.sendForm(end,(pl,id)=>{
                                    if (id == 0) {
                                        var itemId = 174
                                        sellM(itemId,pl)
                                    }else if (id == 1) {
                                        var itemId = 175
                                        sellM(itemId,pl)
                                    }else if (id == 2) {
                                        var itemId = 176
                                        sellM(itemId,pl)
                                    }else if (id == 3) {
                                        var itemId = 177
                                        sellM(itemId,pl)
                                    }else if (id == 4) {
                                        var itemId = 178
                                        sellM(itemId,pl)
                                    }else if (id == 5) {
                                        var itemId = 179
                                        sellM(itemId,pl)
                                    }
                                })
                              }
                          })
                      }  else if(id == 1){
                        pl.sendForm(ore,(pl,id) => {
                            if (id == 0) {
                                var itemId = 33
                                sellM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 34
                                sellM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 35
                                sellM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 36
                                sellM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 37
                                sellM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 38
                                sellM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 39
                                sellM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 40
                                sellM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 41
                                sellM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 42
                                sellM(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 43
                                sellM(itemId,pl)
                            } else if (id == 11) {
                                var itemId = 44
                                sellM(itemId,pl)
                            } else if (id == 12) {
                                var itemId = 45
                                sellM(itemId,pl)
                            } else if (id == 13) {
                                var itemId = 46
                                sellM(itemId,pl)
                            } else if (id == 14) {
                                var itemId = 47
                                sellM(itemId,pl)
                            } else if (id == 15) {
                                var itemId = 48
                                sellM(itemId,pl)
                            } else if (id == 16) {
                                var itemId = 49
                                sellM(itemId,pl)
                            } else if (id == 17) {
                                var itemId = 50
                                sellM(itemId,pl)
                            } else if (id == 18) {
                                var itemId = 51
                                sellM(itemId,pl)
                            } else if (id == 19) {
                                var itemId = 52
                                sellM(itemId,pl)
                            } else if (id == 20) {
                                var itemId = 53 
                                sellM(itemId,pl)
                            }
                          })
                      } else if(id == 2){
                        pl.sendForm(egg,(pl,id) => {
                            if (id == 0) {
                                var itemId = 54
                                sellM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 55
                                sellM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 56
                                sellM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 57
                                sellM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 58
                                sellM(itemId,pl)
                            } else if (id == 5) {
                                var itemId = 59
                                sellM(itemId,pl)
                            } else if (id == 6) {
                                var itemId = 60
                                sellM(itemId,pl)
                            } else if (id == 7) {
                                var itemId = 61
                                sellM(itemId,pl)
                            } else if (id == 8) {
                                var itemId = 62
                                sellM(itemId,pl)
                            } else if (id == 9) {
                                var itemId = 63
                                sellM(itemId,pl)
                            } else if (id == 10) {
                                var itemId = 64
                                sellM(itemId,pl)
                            } else if (id == 11) {
                                var itemId = 65
                                sellM(itemId,pl)
                            } else if (id == 12) {
                                var itemId = 66
                                sellM(itemId,pl)
                            } else if (id == 13) {
                                var itemId = 67
                                sellM(itemId,pl)
                            } else if (id == 14) {
                                var itemId = 68
                                sellM(itemId,pl)
                            } else if (id == 15) {
                                var itemId = 69
                                sellM(itemId,pl)
                            } else if (id == 16) {
                                var itemId = 70
                                sellM(itemId,pl)
                            } else if (id == 17) {
                                var itemId = 71
                                sellM(itemId,pl)
                            } else if (id == 18) {
                                var itemId = 72
                                sellM(itemId,pl)
                            } else if (id == 19) {
                                var itemId = 73
                                sellM(itemId,pl)
                            } else if (id == 20) {
                                var itemId = 74
                                sellM(itemId,pl)
                            } else if (id == 21) {
                                var itemId = 75
                                sellM(itemId,pl)
                            } else if (id == 22) {
                                var itemId = 76
                                sellM(itemId,pl)
                            } else if (id == 23) {
                                var itemId = 77
                                sellM(itemId,pl)
                            } else if (id == 24) {
                                var itemId = 78
                                sellM(itemId,pl)
                            } else if (id == 25) {
                                var itemId = 79
                                sellM(itemId,pl)
                            } else if (id == 26) {
                                var itemId = 80
                                sellM(itemId,pl)
                            } else if (id == 27) {
                                var itemId = 81
                                sellM(itemId,pl)
                            } else if (id == 28) {
                                var itemId = 82
                                sellM(itemId,pl)
                            } else if (id == 29) {
                                var itemId = 83
                                sellM(itemId,pl)
                            } else if (id == 30) {
                                var itemId = 84
                                sellM(itemId,pl)
                            } else if (id == 31) {
                                var itemId = 85
                                sellM(itemId,pl)
                            } else if (id == 32) {
                                var itemId = 86
                                sellM(itemId,pl)
                            } else if (id == 33) {
                                var itemId = 87
                                sellM(itemId,pl)
                            } else if (id == 34) {
                                var itemId = 88
                                sellM(itemId,pl)
                            } else if (id == 35) {
                                var itemId = 89
                                sellM(itemId,pl)
                            } else if (id == 36) {
                                var itemId = 90
                                sellM(itemId,pl)
                            } else if (id == 37) {
                                var itemId = 91
                                sellM(itemId,pl)
                            } else if (id == 38) {
                                var itemId = 92
                                sellM(itemId,pl)
                            } else if (id == 39) {
                                var itemId = 93
                                sellM(itemId,pl)
                            } else if (id == 40) {
                                var itemId = 94
                                sellM(itemId,pl)
                            } else if (id == 41) {
                                var itemId = 95
                                sellM(itemId,pl)
                            }  else if (id == 42) {
                                var itemId = 185
                                sellM(itemId,pl)
                            }
                          })
                    } else if (id == 3) {
                        pl.sendForm(crops,(pl,id) => {
                            if (id == 0) {
                                var itemId = 180
                                sellM(itemId,pl)
                            } else if (id == 1) {
                                var itemId = 181
                                sellM(itemId,pl)
                            } else if (id == 2) {
                                var itemId = 182
                                sellM(itemId,pl)
                            } else if (id == 3) {
                                var itemId = 183
                                sellM(itemId,pl)
                            } else if (id == 4) {
                                var itemId = 184
                                sellM(itemId,pl)
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