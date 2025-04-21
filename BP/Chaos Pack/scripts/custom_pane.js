import { world } from "@minecraft/server";
console.log(Object.keys(world.beforeEvents));

const fences = ["chaospack:fancy_glass_pane", "chaospack:diamond_glass_pane", "chaospack:reinforced_glass_pane", "chaospack:steel_fence", "chaospack:panel_fence"];

world.afterEvents.playerPlaceBlock.subscribe((event) => {
    checkPos(event, event.block)
});

function checkPos(event, block) {

    if (fences.includes(event.block.typeId)) {
        let state = block.permutation.getState("chaospack:fence");

        const { x, y, z } = block.location;

        const eastBlock = event.dimension.getBlock({ x: x + 1, y, z });
        const westBlock = event.dimension.getBlock({ x: x - 1, y, z });
        const northBlock = event.dimension.getBlock({ x, y, z: z - 1 });
        const southBlock = event.dimension.getBlock({ x, y, z: z + 1 });

        state = "";

        if (northBlock.typeId !== "minecraft:air") {
            state = state + "n";
            updateOtherBlock(northBlock, event);
        };
        if (southBlock.typeId !== "minecraft:air") {
            state = state + "s";
            updateOtherBlock(southBlock, event);
        };
        if (eastBlock.typeId !== "minecraft:air") {
            state = state + "e";
            updateOtherBlock(eastBlock, event);
        };
        if (westBlock.typeId !== "minecraft:air") {
            state = state + "w";
            updateOtherBlock(westBlock, event);
        };

        block.setPermutation(block.permutation.withState("chaospack:fence", state));
    }
}

function updateOtherBlock(newBlock, event) {

    if (fences.includes(newBlock.typeId)) {
        let state = newBlock.permutation.getState("chaospack:fence");

        const { x, y, z } = newBlock.location;

        const eastBlock = event.dimension.getBlock({ x: x + 1, y, z });
        const westBlock = event.dimension.getBlock({ x: x - 1, y, z });
        const northBlock = event.dimension.getBlock({ x, y, z: z - 1 });
        const southBlock = event.dimension.getBlock({ x, y, z: z + 1 });

        state = "";

        if (northBlock.typeId !== "minecraft:air") {
            state = state + "n";
        };
        if (southBlock.typeId !== "minecraft:air") {
            state = state + "s"
        };
        if (eastBlock.typeId !== "minecraft:air") {
            state = state + "e";
        };
        if (westBlock.typeId !== "minecraft:air") {
            state = state + "w";
        };

        newBlock.setPermutation(newBlock.permutation.withState("chaospack:fence", state));
    }
};