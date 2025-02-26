## Set Player States
scoreboard players set @e [type=player] chaospack:emit_light 0
execute at @a[tag=chaospack:remove_light] run fill ~5 ~3 ~5 ~-5 ~-3 ~-5 air replace light_block_10

### All light emitting blocks
execute as @a[hasitem={item=lantern,location=slot.weapon.mainhand}] at @s run scoreboard players add @s chaospack:emit_light 1
execute as @a[hasitem={item=soul_lantern,location=slot.weapon.mainhand}] at @s run scoreboard players add @s chaospack:emit_light 1
execute as @a[hasitem={item=torch,location=slot.weapon.mainhand}] at @s run scoreboard players add @s chaospack:emit_light 1
execute as @a[hasitem={item=soul_torch,location=slot.weapon.mainhand}] at @s run scoreboard players add @s chaospack:emit_light 1

## Your Commands Here (examples)
execute as @a [scores={chaospack:emit_light=1},tag=chaospack:remove_light] at @s run fill ~1 ~-2 ~1 ~-1 ~2 ~-1 light_block_10 replace air