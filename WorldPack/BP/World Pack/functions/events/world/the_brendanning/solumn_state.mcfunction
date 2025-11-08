
execute if score solumn_state chaospack:aliveTime matches ..20 at @e[type=chaospack:solumn,tag="chaospack:monitor"] run function events/world/boss/solumn/solumn_starfall

execute if score solumn_state chaospack:aliveTime matches 21..30 at @a run function events/world/boss/solumn/solumn_starfarer

execute if score solumn_state chaospack:aliveTime matches 41..50 at @e[type=chaospack:solumn,tag="chaospack:monitor"] run function events/world/boss/solumn/solumn_encircle

execute if score solumn_state chaospack:aliveTime matches 51..91 at @e[type=chaospack:solumn] run function events/world/boss/solumn/solumn_eye_of_solumn

execute if score solumn_state chaospack:aliveTime matches 91..100 at @e[type=chaospack:solumn] run function events/world/boss/solumn/solumn_wrath