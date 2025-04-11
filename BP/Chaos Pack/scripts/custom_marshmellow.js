import { world } from "@minecraft/server";

const ItemFoodEffectsComponent = {
    onConsume({ itemStack, source }) {
        // Check for the item that should trigger the following effects
        if (itemStack.typeId === "chaospack:cooked_marshmellow_on_a_stick") {
            // minecraft:speed is the name of the effect.
            // 100 is the duration of the effect in ticks (1 second is 20 ticks, divide by 20 to get the results in seconds).
            source.addEffect("minecraft:night_vision", 100, {
                amplifier: 2, // The effect level, starting at 1 and ending at 256.
                showParticle: true, // A boolean representing whether the particles will appear or not.
            });
        }
    },
};

world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    // Register the custom component for use in the item JSON file:
    itemComponentRegistry.registerCustomComponent("chaospack:custom_marshmellow", ItemFoodEffectsComponent);
});