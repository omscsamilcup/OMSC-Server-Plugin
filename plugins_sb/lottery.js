//抽獎
mc.listen("onServerStarted",() => {
    var cmd = mc.newCommand('lottery','抽獎',PermType.Any)
    cmd.mandatory('money',ParamType.Int)
    cmd.mandatory('bouns',ParamType.Int)
    cmd.overload(['money','bouns'])
    cmd.setCallback((_cmd,ori,_out,res) => {
        const {money,bouns} = res
        if (ori.player.getScore('money') >= money && bouns <= 5) {
            if (money >= 1000000) {
                ori.player.reduceScore('money', money)
                var numbers = Math.floor(Math.random() * 1001)
                if (numbers >= 0 && numbers < 150) {
                    ori.player.tell('§l§e你成功抽到Bouns了，你獲得了' + money * bouns)
                    ori.player.addScore('money',money * bouns)
                } else if (numbers >= 150 && numbers < 450) {
                    ori.player.tell('§l§b你成功抽到了Normal，你獲得了' + money)
                    ori.player.addScore('money', money)
                } else if (numbers >= 450 && numbers < 800) {
                    ori.player.tell('§l§c哈哈，你運氣真的差，抽到了空氣，你的錢都沒了，你一共損失了' + money)
                } else if (numbers >= 800 && numbers < 1000){
                    ori.player.tell('§l§c你運氣沒人能比了，不僅要減錢，還要*Bouns')
                    ori.player.reduceScore('money', money * bouns)
                } else if (numbers == 1000) {
                    ori.player.tell('§l§d你簡直是天選之子，抽到了百分之0.1機率的鎬子和Bouns')
                    ori.player.giveItem(mc.newItem(NBT.parseSNBT('{"CanDestroy":["minecraft:emerald_block","minecraft:emerald_ore"],"Count":1b,"Damage":0s,"Name":"minecraft:netherite_pickaxe","WasPickedUp":0b,"tag":{"Damage":0,"RepairCost":0,"display":{"Name":"§l§c抽獎特別鎬子"},"ench":[{"id":18s,"lvl":30s},{"id":15s,"lvl":30s},{"id":17s,"lvl":25s},{"id":26s,"lvl":15s}]}}')))
                    ori.player.addScore('money',money * bouns)
                }
            } else if (money < 1000000) {
                    ori.player.reduceScore('money', money)
                var numbers = Math.floor(Math.random() * 1001)
                if (numbers >= 0 && numbers < 150) {
                    ori.player.tell('§l§e你成功抽到Bouns了，你獲得了' + money * (bouns / 2))
                    ori.player.addScore('money',money * bouns)
                } else if (numbers >= 150 && numbers < 450) {
                    ori.player.tell('§l§b你成功抽到了Normal，你獲得了' + money)
                    ori.player.addScore('money', money)
                } else if (numbers >= 450 && numbers < 800) {
                    ori.player.tell('§l§c哈哈，你運氣真的差，抽到了空氣，你的錢都沒了，你一共損失了' + money)
                } else if (numbers >= 800 && numbers <= 1000){
                    ori.player.tell('§l§c你運氣沒人能比了，不僅要減錢，還要*Bouns')
                    ori.player.reduceScore('money', money * bouns)
                }
            }
        } else if (ori.player.getScore('money') < money) {
            ori.player.tell('§l§c你的錢不足，無法購買')
        } else if (bouns > 5) {
            ori.player.tell('§l§cBouns的上限為5，你所輸入的數字過大')
        }
    })
    cmd.setup()
})