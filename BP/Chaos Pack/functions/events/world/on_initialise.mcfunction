## Initialisation
### Add objective
scoreboard objectives add chaospack:world dummy
### Register to objective
scoreboard players add Initialised chaospack:world 0

## Your Commands Here (Example)
execute if score Initialised chaospack:world matches 0 run say ChaosPack successfully installed!
execute if score Initialised chaospack:world matches 0 run scoreboard objectives add chaospack:is_dead dummy
execute if score Initialised chaospack:world matches 0 run scoreboard objectives add chaospack:emit_light dummy
execute if score Initialised chaospack:world matches 0 run scoreboard objectives add chaospack:emit_light dummy
execute if entity @a[tag=!chaospack:first_join] run say Welcome to ChaosPack! Explore, build, and question your life choices! Version No: 3.1.0
execute if entity @a[tag=!chaospack:first_join] run tag @a[tag=!chaospack:first_join] add chaospack:remove_light
execute if entity @a[tag=!chaospack:first_join] run tag @a add chaospack:first_join
## Mark as Initialised
scoreboard players set Initialised chaospack:world 1