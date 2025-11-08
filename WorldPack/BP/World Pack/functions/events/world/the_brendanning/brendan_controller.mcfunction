
execute as @e[type=worldpack:the_brendanning] at @s run setblock ~ ~-1 ~ minecraft:obsidian

execute as @e[type=!worldpack:the_brendanning, scores={chaospack:alive_time=5}] at @s if entity @e[type=worldpack:the_brendanning,r=2] run summon lightning_bolt ~ ~ ~

execute as @e[type=worldpack:the_brendanning, scores={chaospack:alive_time=10}] at @s run scoreboard players set @s chaospack:aliveTime 0