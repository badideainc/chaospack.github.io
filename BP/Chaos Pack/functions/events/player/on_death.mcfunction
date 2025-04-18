## Set Player States
### Not dead
scoreboard players set @e [type=player] chaospack:is_dead 0
### Dead
execute as @a at @s unless entity @e [type=player, r=0.01] run scoreboard players add @s chaospack:is_dead 1

## Your Commands Here (examples)
### Summon armor stand at death position
execute as @a [scores={chaospack:is_dead=1}] at @s run summon chaospack:gravestone "RIP" ~~~
