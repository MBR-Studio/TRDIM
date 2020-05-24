player.onChat("./ban", function () {
    blocks.place(MAGMA_BLOCK, pos(0, -1, 0))
    blocks.place(WATER, pos(0, 2, 0))
    blocks.place(LAVA, pos(0, 3, 0))
    loops.pause(1000)
    blocks.place(WHITE_CARPET, pos(0, 0, 0))
    blocks.place(OBSIDIAN, pos(1, 3, 0))
    blocks.place(OBSIDIAN, pos(-1, 3, 0))
    blocks.place(OBSIDIAN, pos(0, 3, 1))
    blocks.place(OBSIDIAN, pos(0, 3, -1))
    blocks.place(OBSIDIAN, pos(1, 0, 0))
    blocks.place(OBSIDIAN, pos(-1, 0, 0))
    blocks.place(OBSIDIAN, pos(0, 0, 1))
    blocks.place(OBSIDIAN, pos(0, 0, -1))
    blocks.place(GLASS, pos(1, 1, 0))
    blocks.place(GLASS, pos(-1, 1, 0))
    blocks.place(GLASS, pos(0, 1, 1))
    blocks.place(GLASS, pos(0, 1, -1))
})
player.onChat("./tr", function () {
    for (let index = 0; index < 10; index++) {
        mobs.spawn(PRIMED_TNT, pos(0, 32, 0))
        mobs.spawn(PRIMED_TNT, pos(0, 16, 0))
        mobs.spawn(PRIMED_TNT, pos(0, -6, 0))
        mobs.spawn(PRIMED_TNT, pos(0, -3, 0))
        mobs.spawn(PRIMED_TNT, pos(5, 32, 0))
        mobs.spawn(PRIMED_TNT, pos(-5, 32, 0))
        mobs.spawn(PRIMED_TNT, pos(0, 32, 5))
        mobs.spawn(PRIMED_TNT, pos(0, 32, -5))
        mobs.spawn(PRIMED_TNT, pos(3, 32, 0))
        mobs.spawn(PRIMED_TNT, pos(0, 32, -3))
        mobs.spawn(PRIMED_TNT, pos(0, 32, 3))
        mobs.spawn(PRIMED_TNT, pos(-3, 32, 0))
        mobs.spawn(PRIMED_TNT, pos(0, -4, 0))
        mobs.spawn(PRIMED_TNT, pos(0, -8, 0))
        mobs.spawn(PRIMED_TNT, pos(0, -10, 0))
        mobs.spawn(PRIMED_TNT, pos(0, -12, 0))
    }
})
player.onChat("./dim", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    blocks.blockByName("diamond_helmet"),
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    blocks.blockByName("diamond_chestplate"),
    1
    )
})
player.say("Minecraft Play - MBRjun.cn 载入成功")
player.say("输入 ./tr ./dim ./ban激活")
