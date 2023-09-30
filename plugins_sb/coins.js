//兌換貨幣
mc.listen("onServerStarted",() => {
    var coins = mc.newSimpleForm()
    coins.addButton('§l§9點數')
    coins.addButton('§l§9服主幣')

    var c_point = mc.newSimpleForm()
    c_point.setTitle('§l§9點數')
    c_point.addButton('§l§9點數=>SC幣')
    
    var c_owner = mc.newSimpleForm()
    c_owner.setTitle('§l§9服主幣')
    c_owner.addButton('§l§9服主幣=>SC幣')

    var point = mc.newCustomForm()
    point.setTitle('點數=>SC幣')
    point.addInput('1點數:100000SC幣')

    var owner = mc.newCustomForm()
    owner.setTitle('服主幣=>SC幣')
    owner.addInput('1服主幣:100000SC幣')
    
    var cmd = mc.newCommand('coins','§l§b貨幣',PermType.Any)
    cmd.overload()
    cmd.setCallback((_cmd,ori,_out,_res) => {
        ori.player.sendForm(coins,(pl,id) => {
            if (id == 0) {
                pl.sendForm(c_point,(pl,id) => {
                    if (id == 0) {
                        pl.sendForm(point,(pl,data) => {
                            if (data[0] <= pl.getScore('point')) {
                                pl.addScore('money', data[0] * 100000)
                                pl.tell('§l§a你已成功兌換' + data[0] + '點數為' + data[0] * 100000 + 'SC幣')
                            } else if (data[0] > pl.getScore('point')) {
                                pl.tell('§l§a你沒有足夠的點數兌換')
                            }
                        })
                    }
                })
            } if (id == 1) {
                pl.sendForm(c_owner,(pl,id) => {
                    if (id == 0) {
                        pl.sendForm(owner,(pl,data) => {
                            if (data[0] <= pl.getScore('ownercoins')) {
                                pl.addScore('money', data[0] * 100000)
                                pl.tell('§l§a你已成功兌換' + data[0] + '服主幣為' + data[0] * 100000 + 'SC幣')
                            } else if (data[0] > pl.getScore('ownercoins')) {
                                pl.tell('§l§a你沒有足夠的服主幣兌換')
                            }
                        })
                    }
                })
            }
        })
    })
    cmd.setup()
})