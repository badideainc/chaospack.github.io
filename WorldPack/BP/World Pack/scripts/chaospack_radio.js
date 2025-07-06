import { world } from "@minecraft/server";

const jukeboxEntityId = "chaospack:radio_entity"; // Or your custom jukebox entity

const discMap = {
    "minecraft:music_disc_13": "record.13",
    "minecraft:music_disc_cat": "record.cat",
    "minecraft:music_disc_blocks": "record.blocks",
    "minecraft:music_disc_chirp": "record.chirp",
    "minecraft:music_disc_far": "record.far",
    "minecraft:music_disc_mall": "record.mall",
    "minecraft:music_disc_mellohi": "record.mellohi",
    "minecraft:music_disc_stal": "record.stal",
    "minecraft:music_disc_strad": "record.strad",
    "minecraft:music_disc_ward": "record.ward",
    "minecraft:music_disc_11": "record.11",
    "minecraft:music_disc_wait": "record.wait",
    "minecraft:music_disc_pigstep": "record.pigstep",
    "minecraft:music_disc_otherside": "record.otherside",
    "minecraft:music_disc_relic": "record.relic",
    "minecraft:music_disc_5": "record.5",
    "minecraft:music_disc_creator": "record.creator",
    "minecraft:music_disc_creator_music_box": "record.creator_music_box",
    "minecraft:music_disc_precipice": "record.precipice",
    "minecraft:music_disc_tears": "record.tears",
    "minecraft:music_disc_lava_chicken": "record.lava_chicken",
    "worldpack:delay_in_delivery": "record.delay_in_delivery",
    "worldpack:warehouse_blues": "record.warehouse_blues"
};

world.afterEvents.playerInteractWithEntity.subscribe(event => {
    const { player, target: entity, itemStack } = event;

    if (entity.typeId !== jukeboxEntityId) return;

    // If empty hand, stop the music
    if (!itemStack) {
        player.dimension.runCommandAsync(
            `stopsound @a`
        );
        player.sendMessage("Stopped music.");
        return;
    }

    const sound = discMap[itemStack.typeId];
    if (!sound) {
        player.dimension.runCommandAsync(
            `stopsound @a`
        );
        player.sendMessage("Stopped music.");
        return;
    }

    const { x, y, z } = entity.location;
    // Stop any previous record sound first
    player.dimension.runCommandAsync(
        `stopsound @a`
    ).then(() => {
        player.dimension.runCommandAsync(
            `playsound ${sound} @a ${x + 0.5} ${y + 0.5} ${z + 0.5} 1 1`
        );
        player.sendMessage(`Now playing: ${sound.replace('record.', '').replace('_', ' ')}`);
    });
});