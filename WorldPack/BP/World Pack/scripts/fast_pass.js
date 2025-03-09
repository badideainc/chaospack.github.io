import { ActionFormData } from "@minecraft/server-ui";
import { world } from "@minecraft/server";

let form = new ActionFormData();
form.title("[---Fast Pass---]");
form.body("Next Stop:")
form.button("Now I'm Here", "textures/ui/location1");
form.button("Now I'm There", "textures/ui/location2");

world.afterEvents.itemUse.subscribe(event => {

	const {source, itemStack} = event

	if (itemStack.typeId === "worldpack:fast_pass") {

		form.show(source).then(r => {
			// This will stop the code when the player closes the form
			if (r.canceled) return;

			let response = r.selection;
			switch (response) {
				case 0:
					source.runCommand(
						"tp @p ~100 78 ~"
					)
					break;

				case 1:
					source.runCommand(
						"tp @p ~-100 78 ~"
					)
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