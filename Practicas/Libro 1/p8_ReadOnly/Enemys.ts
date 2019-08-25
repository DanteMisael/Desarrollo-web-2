interface Enemy {
    readonly  size: number,
    health: number,
    range: number,
    readonly damage: number
}
let tank: Enemy = {
    size : 50,
    health: 100,
    range: 60,
    damage: 12
}

tank.health = 95;/* Está bien porque lo permite*/
/*tank.damage = 10;/*Estó está mal porque es readonly*/