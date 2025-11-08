
execute at @a[tag="chaospack:in_battle"] run summon chaospack:shooting_star ~ ~30 ~

execute as @e[type=chaospack:shooting_star] run titleraw @a actionbar {"rawtext":[{"text":"\u00A7u[ !!! ]"}]}
execute as @e[type=chaospack:shooting_star] run playsound hit.amethyst_block @a ~~~