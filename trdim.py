def on_chat():
    for index in range(10):
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
player.on_chat("./tr", on_chat)
def on_chat2():
    mobs.give(mobs.target(NEAREST_PLAYER),
        blocks.block_by_name("diamond_helmet"),
        1)
    mobs.give(mobs.target(NEAREST_PLAYER),
        blocks.block_by_name("diamond_chestplate"),
        1)
player.on_chat("./dim", on_chat2)
player.say("Minecraft Play - MBRjun.cn 载入成功")
player.say("输入 ./tr ./dim 激活")
