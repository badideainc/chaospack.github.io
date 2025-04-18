import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const CustomTrapdoorBlockComponent = {
    onPlayerInteract({ block, dimension }) {
        let state = block.permutation.getState("chaospack:flower");
        const sound = state ? "close.wooden_trapdoor" : "open.wooden_trapdoor";

        if (state === 3) {
            state = -1
        }

        block.setPermutation(block.permutation.withState("chaospack:flower", state + 1));

        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "chaospack:custom_mushroom",
        CustomTrapdoorBlockComponent
    );
});