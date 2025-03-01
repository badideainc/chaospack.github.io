#Cycle between
execute as @a[hasitem={item=worldpack:fast_pass,location=slot.weapon.mainhand}] at @s run scoreboard players add @s TeleportDest 1
execute as @a[scores={TeleportDest=400..}] at @s run scoreboard players set @s TeleportDest 1

#Assign tags
execute as @a[tag=!HoldingStick] at @s run tag @s[hasitem={item=worldpack:fast_pass, location=slot.weapon.mainhand}] add HoldingStick

execute as @a[tag=HoldingStick] at @s run tag @s add CanDrop

#Teleports
execute as @a[scores={TeleportDest=..20},tag=CanDrop, tag =! HoldingStick] at @s run tp @s 26 4 -156
execute as @a[scores={TeleportDest=..20},tag=CanDrop, tag =! HoldingStick] at @s run tp @e[type=item, name="Fast Pass", c=1] @p
execute as @a[scores={TeleportDest=..20}, hasitem={item=worldpack:fast_pass, location=slot.weapon.mainhand}] at @s run title @s actionbar Next Stop: Scotsbroad
execute as @a[scores={TeleportDest=..20},tag=CanDrop, tag =! HoldingStick] at @s run tag @s remove CanDrop

#Removes tag
execute as @a[tag=HoldingStick, hasitem={item=worldpack:fast_pass, quantity=0}] at @s run tag @s remove HoldingStick