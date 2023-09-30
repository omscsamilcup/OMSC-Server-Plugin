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