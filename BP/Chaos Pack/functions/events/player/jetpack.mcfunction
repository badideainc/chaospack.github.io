
execute as @a[hasitem={item=chaospack:jetpack,location=slot.armor.chest}] at @s if block ~ ~-1 ~ air at @s run scoreboard players set @s chaospack:jetpack 1

execute as @a[hasitem={item=chaospack:jetpack,location=slot.armor.chest}] at @s unless entity @s[y=~1.5, dy=0] if entity @s[y=~0.7, dy=0] at @s run scoreboard players set @s chaospack:jetpack 0

execute as @a at @s if score @s chaospack:jetpack matches 1 run effect @s levitation 1 2 true

execute as @a at @s if score @s chaospack:jetpack matches 1 run particle minecraft:basic_flame_particle ^0.1 ^0.7 ^-0.5
execute as @a at @s if score @s chaospack:jetpack matches 1 run particle minecraft:basic_flame_particle ^-0.1 ^0.7 ^-0.5
execute as @a at @s if score @s chaospack:jetpack matches 1 run playsound mob.ghast.fireball @a[r=10] ~ ~ ~ 0.4

execute as @a at @s if score @s chaospack:jetpack matches 0 run effect @s clear levitation

execute as @a[hasitem={item=chaospack:jetpack,location=slot.armor.chest,quantity=0},scores={chaospack:jetpack=1}] at @s run scoreboard players set @s chaospack:jetpack 0