import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const CustomCakeComponent = {
    onPlayerInteract({ block, dimension }) {
        let state = block.permutation.getState("chaospack:eat");
        const sound = "random.eat";

        if (state === 3) {
            const blockPos = block.location;

            dimension.runCommand("give @p chaospack:pizza_slice")

            dimension.playSound(sound, block.center(), {
                pitch: 0.9,
                volume: 0.9,
            });

            dimension.runCommand("setblock " + blockPos.x + " " + blockPos.y + " " + blockPos.z + " air")
            return;
        }

        block.setPermutation(block.permutation.withState("chaospack:eat", state + 1));

        dimension.runCommand("give @p chaospack:pizza_slice")

        dimension.playSound(sound, block.center(), {
            pitch: 0.9,
            volume: 0.9,
        });
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent(
        "chaospack:custom_consume",
        CustomCakeComponent
    );
});