scoreboard objectives add chaospack:joined dummy
scoreboard players add @a chaospack:joined 0

## Your Commands Here (Example)
execute if entity @a[scores={chaospack:joined=0}] run scoreboard objectives add chaospack:is_dead dummy
execute if entity @a[scores={chaospack:joined=0}] run scoreboard objectives add chaospack:emit_light dummy
execute if entity @a[scores={chaospack:joined=0}] run scoreboard objectives add chaospack:frogshot dummy
execute if entity @a[scores={chaospack:joined=0}] run scoreboard objectives add chaospack:jetpack dummy


### Mark Players as Joined
### Clear 'joined' score of online and offline players
scoreboard players reset * chaospack:joined
### Set online players score to 1
scoreboard players set @a chaospack:joined 1