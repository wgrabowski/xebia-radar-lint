import { argv, stdout } from "process";
import { format, status } from "../src/check-status";
import { getRadars } from "./radar-api";

const packageNames = argv.slice(2);

async function main() {
	const radars = await getRadars();
	const results = await status(radars, packageNames);

	stdout.write(format(results));
}

if (!packageNames.length) {
	stdout.write("Provide package names, separated by space\n");
} else {
	main();
}