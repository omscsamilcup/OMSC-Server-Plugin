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