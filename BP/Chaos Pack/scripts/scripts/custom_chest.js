import { world } from "@minecraft/server";

/** @type {import("@minecraft/server").BlockCustomComponent} */
const AlignEntityBlockComponent = {
    beforeOnPlayerPlace(event) {

        const location = event.block.center();
        event.dimension.spawnEntity("chaospack:crate", location);
    },
};

world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("chaospack:align_entity", AlignEntityBlockComponent);
});