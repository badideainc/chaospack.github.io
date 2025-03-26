import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const CustomDigitBlockComponent = {
    onPlayerInteract({ block, dimension }) {
        let state = block.permutation.getState("chaospack:number");
        const sound = state ? "close.wooden_trapdoor" : "open.wooden_trapdoor";

        if (state === 9) {
            state = -1
        }

        block.setPermutation(block.permutation.withState("chaospack:number", state + 1));

        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "chaospack:custom_number",
        CustomDigitBlockComponent
    );
});