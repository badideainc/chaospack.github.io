execute as @e[type=chaospack:solumn,tag=!chaospack:monitor] run scoreboard players add solumn_wait chaospack:aliveTime 1

execute if score solumn_wait chaospack:aliveTime matches ..1 run effect @e[type=chaospack:solumn,tag=!chaospack:monitor] levitation 5 120 true

execute if score solumn_wait chaospack:aliveTime matches 100 run function events/world/boss/solumn/solumn_emerge
execute if score solumn_wait chaospack:aliveTime matches 110 run tag @e[type=chaospack:solumn,tag=!chaospack:monitor] add chaospack:monitor

execute as @e[type=chaospack:solumn,tag=chaospack:monitor] run scoreboard players reset solumn_wait chaospack:aliveTime