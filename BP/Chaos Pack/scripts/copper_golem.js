import { world } from "@minecraft/server";

world.afterEvents.playerPlaceBlock.subscribe((event) => {

    let block = event.block;
    const { x, y, z } = block.location;

    if (block.typeId === "minecraft:copper_block") {
        if (event.dimension.getBlock({ x, y: y + 1, z }).typeId === "minecraft:carved_pumpkin") {
            summonGolem(event.dimension, x, y, z);
        }
    } else if (block.typeId === "minecraft:carved_pumpkin") {
        if (event.dimension.getBlock({ x, y: y - 1, z }).typeId === "minecraft:copper_block") {
            summonGolem(event.dimension, x, y - 1, z);
        }
    }
});

function summonGolem(dimension, x, y, z) {
    dimension.runCommand(
        "fill " + x + " " + y + " " + z + " " + x + " " + (y + 1) + " " + z + " air"
    );
    dimension.runCommand(
        "summon chaospack:copper_golem " + x + " " + y + " " + z
    );
    dimension.runCommand(
        "playsound place.copper @a[r=50]" + x + " " + y + " " + z
    );
}