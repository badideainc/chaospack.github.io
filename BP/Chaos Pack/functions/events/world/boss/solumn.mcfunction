execute as @p[tag=chaospack:in_battle] run scoreboard players add timer chaospack:solumn 1

execute as @a[tag=chaospack:in_battle] at @e[type=chaospack:solumn] run tag @a[rm=100] remove chaospack:in_battle
execute as @a[tag=!chaospack:in_battle] at @e[type=chaospack:solumn] run tag @a[r=100] add chaospack:in_battle

execute if score interval chaospack:solumn matches 5 run scoreboard players random state chaospack:solumn 0 100
execute if score interval chaospack:solumn matches 5 run scoreboard players set interval chaospack:solumn 0

execute if score timer chaospack:solumn matches 50 run scoreboard players add interval chaospack:solumn 1
execute if score timer chaospack:solumn matches 50 run scoreboard players set timer chaospack:solumn 0

#Star Fall
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches ..20 at @a run summon chaospack:shooting_star ~ ~30 ~

#Spawn Starfarer
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 21..40 at @a run summon lightning_bolt ^ ^ ^7
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 21..40 at @a run summon chaospack:starfarer ^ ^ ^7

#Starfall + Starfarer
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 41..60 at @a run summon chaospack:shooting_star ~ ~30 ~
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 41..60 at @a run summon lightning_bolt ^ ^ ^7
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 41..60 at @a run summon chaospack:starfarer ^ ^ ^7

#Spawn Eyes
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 61..90 at @e[type=chaospack:solumn] run summon chaospack:eye_of_solumn ~ ~15 ~

#All Three
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 91..100 at @a run summon chaospack:shooting_star ~ ~30 ~
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 91..100 at @a run summon lightning_bolt ^ ^ ^7
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 91..100 at @a run summon chaospack:starfarer ^ ^ ^7
execute if score timer chaospack:solumn matches 10 run execute if score state chaospack:solumn matches 91..100 at @e[type=chaospack:solumn] run summon chaospack:eye_of_solumn ~ ~15 ~

execute if entity @e[type=chaospack:shooting_star] run titleraw @a actionbar {"rawtext":[{"text":"[ !!! ]"}]}
execute if entity @e[type=chaospack:shooting_star] run playsound hit.amethyst_block @a