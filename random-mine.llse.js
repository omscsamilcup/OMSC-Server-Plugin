// LiteLoader-AIDS automatic generated
/// <reference path="C:\Users\pc\.vscode\dts\HelperLib-master\src/dts/HelperLib-master/src/index.d.ts"/> 

mc.listen("onDestroyBlock",(pl, bl) => {
    if (bl.type == 'minecraft:cobblestone') {
        var random = Math.floor(Math.random() * 101)
        if (random >= 0 && random <= 10) {
            mc.setBlock(bl.pos,'minecraft:coal_ore', 0)
        } else if (random >= 11 && random <= 64) {
           mc.setBlock(bl.pos,'minecraft:cobblestone', 0)
        } else if (random >= 65 && random <= 66) {
            mc.setBlock(bl.pos,'minecraft:diamond_ore', 0)
        } else if (random >= 67 && random <= 68) {
            mc.setBlock(bl.pos,'minecraft:emerald_ore', 0)
        } else if (random >= 69 && random <= 77) {
            mc.setBlock(bl.pos,'minecraft:gold_ore', 0)
        } else if (random >= 78 && random <= 86) {
            mc.setBlock(bl.pos,'minecraft:iron_ore', 0)
        } else if (random >= 87 && random <= 93) {
            mc.setBlock(bl.pos,'minecraft:lapis_ore', 0)
        } else if (random >= 94 && random <= 100) {
            mc.setBlock(bl.pos,'minecraft:redstone_ore', 0)
        } else if (random == 101) {
            mc.setBlock(bl.pos,'minecraft:ancient_debris_ore', 0)
        }
    }
})