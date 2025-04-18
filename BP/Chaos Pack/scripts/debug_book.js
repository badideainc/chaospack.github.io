import { ActionFormData } from "@minecraft/server-ui";
import { world } from "@minecraft/server";

let form = new ActionFormData()
	.title("[---Debugronomicon---]")
	.button("Kill")
	.button("Reset Startup")
	.button("Quack");

world.afterEvents.itemUse.subscribe(event => {

	const {source, itemStack} = event

	if (itemStack.typeId === "chaospack:debugronomicon") {

		form.show(source).then(r => {
			// This will stop the code when the player closes the form
			if (r.canceled) return;

			let response = r.selection;
			switch (response) {
				case 0:
					kill(source);
					break;
				case 1:
					reset(source);
					break;
				case 2:
					getDuck(source);
					break;

				// You can add cases for each button
				default:
				// Use this when your button doesn't have a function yet
				// You don't need to use "break" on default case
				// Remember to place the default on very bottom
			}
		}).catch(e => {
			console.error(e, e.stack);
		});
	};
});

function kill(source) {
	source.runCommand(
		"gamemode s @s"
	)
	source.runCommand(
		"kill @s"
	)
	source.runCommand(
		"gamemode c @s"
	)
};

function getDuck(source) {
	source.runCommand(
		"playsound mob.duck.say @s"
	)
	source.runCommand(
		"give @s chaospack:eldritch_rubber_ducky"
	)
}

function reset(source) {
	source.runCommand(
		"tag @a remove chaospack:first_join"
	)
}