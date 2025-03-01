import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const CustomTrapdoorBlockComponent = {
    onPlayerInteract({ block, dimension }) {
        const isOpen = block.permutation.getState("chaospack:open");
        const sound = isOpen ? "close.iron_trapdoor" : "open.iron_trapdoor";

        block.setPermutation(block.permutation.withState("chaospack:open", !isOpen));

        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "chaospack:custom_metal_door",
        CustomTrapdoorBlockComponent
    );
});