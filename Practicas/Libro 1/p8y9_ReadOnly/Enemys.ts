interface Enemy {
    readonly  size: number,
    health: number,
    range: number,
    readonly damage: number
}

interface EnemyHit {
    (name: Enemy, damageDone: number): number;
}
/*En el siguiente fragmento no se usa el mismo nombre en parametros
para trabajar con los mismos datos*/
let tankHit: EnemyHit = function(tankName: Enemy, damageDone: number){
    tankName.health -= damageDone;
    return tankName.health;
}

let tank: Enemy = {
    size : 50,
    health: 100,
    range: 60,
    damage: 12
}

tank.health = 95;/* Está bien porque lo permite*/
/*tank.damage = 10;/*Estó está mal porque es readonly*/