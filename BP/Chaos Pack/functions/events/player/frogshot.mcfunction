
execute as @a[hasitem={item=chaospack:frogshot,location=slot.weapon.mainhand,quantity=0}] at @s run scoreboard players set @s chaospack:frogshot 0
execute as @a[hasitem={item=chaospack:frogshot,location=slot.weapon.mainhand,quantity=0}] at @s run clear @p chaospack:frogshot_ammo

execute as @a[hasitem={item=chaospack:frogshot,location=slot.weapon.mainhand}] at @s run scoreboard players set @s chaospack:frogshot 1

execute if score @p[hasitem={item=chaospack:frogshot_ammo,quantity=0}] chaospack:frogshot matches 1 run give @p chaospack:frogshot_ammo

execute if score @p chaospack:frogshot matches 1 at @p run tp @p ^ ^0.1 ^0.7 facing @e[type=chaospack:frogshot_grapple,tag="chaospack:frogshot_hit"]

execute if score @p chaospack:frogshot matches 0 at @e[type=chaospack:frogshot_grapple] run kill @e[type=chaospack:frogshot_grapple]
