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