//玩家資料
mc.listen("onJoin",(pl) => {
    var record = {}
    let dv = pl.getDevice()
    record = data.parseJson(file.readFrom('/home/container/plugins/主插件/data.json'))
    record[pl.realName] = {}
    record[pl.realName].xuid = pl.xuid
    record[pl.realName].os = dv.os
    record[pl.realName].ip = dv.ip
    file.writeTo('/home/container/plugins/主插件/data.json', JSON.stringify(record,null,"\t"))
})