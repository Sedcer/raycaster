controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.raycastingView)
})
info.onScore(randint(100, 500), function () {
    game.setGameOverMessage(true, "GAME WIN!")
    gamewin += 1
    game.gameOver(true)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setViewMode(ViewMode.tilemapView)
})
info.onCountdownEnd(function () {
    info.setLife(0)
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
    info.setScore(0)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
info.startCountdown(200)
let mySprite = Render.getRenderSpriteVariable()
let gamewin = 0
info.setLife(3)
info.setScore(0)
scene.setBackgroundImage(assets.image`background`)
Render.setViewMode(ViewMode.raycastingView)
tiles.setCurrentTilemap(tilemap`level`)
let mySprite2 = sprites.create(assets.image`food`, SpriteKind.Food)
let mySprite3 = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
forever(function () {
	
})
forever(function () {
    for (let index = 0; index < 1; index++) {
        if (mySprite.overlapsWith(mySprite2)) {
            mySprite2.setPosition(randint(25, 130), randint(20, 92))
            pause(500)
            info.changeScoreBy(3)
            info.changeCountdownBy(35)
        }
        if (mySprite.overlapsWith(mySprite3)) {
            pause(500)
            mySprite3.setPosition(randint(25, 130), randint(20, 92))
            info.changeScoreBy(-1)
            info.changeCountdownBy(-5)
            info.changeLifeBy(-1)
        }
    }
})
