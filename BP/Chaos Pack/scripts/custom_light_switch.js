import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const CustomTrapdoorBlockComponent = {
    onPlayerInteract({ block, dimension }) {
        const isOpen = block.permutation.getState("chaospack:light_on");
        const sound = isOpen ? "random.lever_click" : "random.lever_click";

        block.setPermutation(block.permutation.withState("chaospack:light_on", !isOpen));

        dimension.playSound(sound, block.center(), {
            pitch: 0.6,
            volume: 0.9,
        });
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "chaospack:custom_light_switch",
        CustomTrapdoorBlockComponent
    );
});