//menu系統(選單)
mc.listen('onServerStarted',()=>{
    var fm = mc.newSimpleForm()
    fm.addButton('§l§9傳送系統')
    fm.addButton('§l§9銀行系統')
    fm.addButton('§l§9商店系統')
    fm.addButton('§l§9Rank系統')
    fm.addButton('§l§9高級商店')
    fm.addButton('§l§9貨幣系統')
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
            } else if (id == 5) {
                pl.runcmd('coins')
            }else if (id == 6) {
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
mc.listen('onUseItem',(pl,item) => {
    if (item.type == 'minecraft:compass') {
        pl.runcmd('menu')
    }
})
mc.listen('onServerStarted',() => {
    mc.regPlayerCmd('compass','獲取指南針(選單)',(pl) => {
        pl.giveItem(mc.newItem(NBT.parseSNBT('{"Count":1b,"Damage":0s,"Name":"minecraft:compass","WasPickedUp":0b,"tag":{"RepairCost":0,"display":{"Name":"§l§b選單"}}}')))
    })
})