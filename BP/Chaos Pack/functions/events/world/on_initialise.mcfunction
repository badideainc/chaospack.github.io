## Initialisation
### Add objective
scoreboard objectives add chaospack:world dummy
### Register to objective
scoreboard players add Initialised chaospack:world 0

## Your Commands Here (Example)
execute if score Initialised chaospack:world matches 0 run say ChaosPack successfully installed!
execute if score Initialised chaospack:world matches 0 run scoreboard objectives add chaospack:is_dead dummy
execute if score Initialised chaospack:world matches 0 run scoreboard objectives add chaospack:emit_light dummy
execute if score Initialised chaospack:world matches 0 run tag @a add chaospack:remove_light
## Mark as Initialised
scoreboard players set Initialised chaospack:world 1