namespace SpriteKind {
    export const Player1 = SpriteKind.create()
    export const Car_enemy = SpriteKind.create()
    export const tilemap = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Pollution = SpriteKind.create()
    export const Mushroom = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Character.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
scene.onHitWall(SpriteKind.Pollution, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Pollution)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Character.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
})
info.onCountdownEnd(function () {
    game.over(false, effects.smiles)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Character.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Character.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f 4 e . . 
        . . f e 4 1 f d d f 1 4 e e . . 
        . . . f e 4 d d d d 4 e 4 f . . 
        . . f e f 2 2 2 2 2 2 2 f e f . 
        . . e 4 f 2 2 2 2 2 2 2 f 4 e . 
        . . . . f 4 4 5 5 5 4 4 f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f . . . f f f . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    music.magicWand.play()
    info.changeScoreBy(2)
    Flower1.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pollution, function (sprite, otherSprite) {
    scene.cameraShake(4, 200)
    music.bigCrash.play()
    pause(220)
    info.changeLifeBy(-1)
})
scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    Tree.destroy()
    pause(100)
    info.changeLifeBy(1)
})
scene.onHitWall(SpriteKind.Mushroom, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Mushroom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mushroom, function (sprite, otherSprite) {
    music.magicWand.play()
    Mushroom2.destroy()
    pause(100)
    info.changeScoreBy(4)
    info.changeLifeBy(1)
})
scene.onHitWall(SpriteKind.Flower, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Flower)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(3, 200)
    music.smallCrash.play()
    Harmful_gas.destroy()
    pause(200)
    info.changeLifeBy(-1)
})
let Pollution1: Sprite = null
let Harmful_gas: Sprite = null
let Mushroom2: Sprite = null
let Tree: Sprite = null
let Flower1: Sprite = null
let Character: Sprite = null
info.setScore(0)
info.startCountdown(180)
Character = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Character, 100, 100)
Character.setStayInScreen(false)
info.setLife(5)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Character)
music.footstep.loop()
let Name = game.askForString("What is your name?")
pause(500)
game.splash(Name, "Get ready to save the planet Earth, avoid harmful gases as much as you can, touch trees to heal and collect special items to save the Earth. Remember: items' spawning and de-spawning is randomized. ")
Character.sayText("We must reach the score of 30 under 3 minutes to save the planet Earth!", 5000, true)
music.stopAllSounds()
game.onUpdateInterval(5000, function () {
    Flower1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......e.e.e........
        .......eeeee........
        .......e3eec........
        .......eeecc........
        ........ecc.........
        .........7..77......
        .........7.77.......
        .........7.77.......
        .........7776.......
        .........776........
        .........776........
        .........66.........
        ....................
        `, SpriteKind.Flower)
    Flower1.setVelocity(-100, 0)
    Flower1.setPosition(250, randint(0, 300))
})
game.onUpdateInterval(2000, function () {
    Pollution1 = sprites.create(img`
        .........bbbb...........
        .......bb1111bb.........
        ......bb111111bbbbb.....
        ......b1111111ddd11b....
        ......b11111111d1111b...
        ...bbbd11111111d1111b...
        ..b11111111111111111bb..
        .b11111111111111111d11b.
        .b111d11111111111111111b
        cdd1d111111111111111111c
        cdddd11111111111111111dc
        cddbd11111d11111dd111dc.
        .cbbdd111dddd11ddbdddcc.
        .ccbbdddddbdddddddbcc...
        ...cccdddbbbdddddcc.....
        ......ccccccccccc.......
        `, SpriteKind.Pollution)
    Pollution1.setVelocity(-50, 0)
    Pollution1.setPosition(250, randint(0, 300))
})
game.onUpdateInterval(1000, function () {
    Harmful_gas = sprites.create(img`
        ....................
        ..7.6..77....6...77.
        .7.6.....66...677..7
        .7....67666........7
        .7...777777666...6..
        ....77677776777..66.
        ..6.767777677777..6.
        ...7777767777767..6.
        7..77677766777677...
        ..7777766677766767.7
        .76677677767677767..
        .76776677776777777..
        .77767777777766776..
        .67777777777676677..
        .77777777777767676..
        .667776776777777767.
        ...76776766676766...
        .7........666.....7.
        ..7777............7.
        ..............66....
        `, SpriteKind.Enemy)
    Harmful_gas.setVelocity(-50, 0)
    Harmful_gas.setPosition(250, randint(0, 300))
})
game.onUpdateInterval(4000, function () {
    Tree = sprites.create(img`
        .............6666...............
        ..........666667766.6666........
        .........677777777767776........
        ......66667775577757777666......
        .....677666675557557776777666...
        .....6776777775555577777766776..
        ...66666777777775777777766666...
        .66667767777755757555777776776..
        6666777677775577557555777767766.
        .6667767777777775577777777767666
        .c6766777677777775777777677766..
        cc77666667777777777777777666666c
        cc76666677777777777777777766776c
        c6666776777777777777766677666776
        66667766667776777767767766766666
        ccc76677677776677766767776776ccc
        cc7766776777677677676667767766cc
        .666c676667677766667766666666cc.
        .ccc66676666776666677677666cccc.
        ...ccc77c6767666676676677666ccc.
        ...cc676c7766676677666666c666cc.
        ....c6cc676c6677677c66c666ccc...
        ....ccccc6c66667667cc6ccc6ccc...
        ......ccccc66c66c66cccccccc.....
        .......cc.cc6c6ccc6cccc.cc......
        ...........cccccccccc...........
        .............feeeeee............
        ............feeeeeefe...........
        .........eeeeefeeeffee..........
        ............ffffeef..ee.........
        ...............fee..............
        ................e...............
        `, SpriteKind.Food)
    Tree.setVelocity(-50, 0)
    Tree.setPosition(250, randint(0, 300))
})
forever(function () {
    if (info.score() >= 30) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(10000, function () {
    Mushroom2 = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . b b 3 3 3 3 b b . . . . 
        . . . c b 3 3 3 3 1 1 b c . . . 
        . . c b 3 3 3 3 3 1 1 1 b c . . 
        . c c 1 1 1 3 3 3 3 1 1 3 c c . 
        c c d 1 1 1 3 3 3 3 3 3 3 b c c 
        c b d d 1 3 3 3 3 3 1 1 1 b b c 
        c b b b 3 3 1 1 3 3 1 1 d d b c 
        c b b b b d d 1 1 3 b d d d b c 
        . c b b b b d d b b b b b b c . 
        . . c c b b b b b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        . . . . . . b 1 1 b . . . . . . 
        . . . . . . b 1 1 b b . . . . . 
        . . . . . b b d 1 1 b . . . . . 
        . . . . . b d d 1 1 b . . . . . 
        `, SpriteKind.Mushroom)
    Mushroom2.setVelocity(-150, 0)
    Mushroom2.setPosition(250, randint(0, 300))
})
