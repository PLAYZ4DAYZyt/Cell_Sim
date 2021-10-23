namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const cursor = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.cursor, SpriteKind.Button, function (sprite, otherSprite) {
	
})
scene.setBackgroundImage(assets.image`mega thicc`)
let button = sprites.create(assets.image`play button`, SpriteKind.Button)
button.setPosition(79, 60)
let cursor = sprites.create(assets.image`cursor`, SpriteKind.cursor)
cursor.setStayInScreen(true)
controller.moveSprite(cursor, 100, 100)
