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