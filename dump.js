/**
 * DUMP
 *
 *	Dumps a variable in a readable form to the console, this is a recursive function
 *	so be careful of nested references that may cause it to overflow... (untested for that)
 *
 *	@v		ANYTHING		[Any variable]
 *	@name		STRING			[The name of the variable, optional, used internally when looping objects and arrays]
 *	@spacing	STRING			[The prefix spacing, used internally when looping objects and arrays]
 */
const dump = (v, name, spacing) => {
    const chalk = require("chalk");

    var n;
    // Default the spacing to none (incremented on subsequent calls)
    spacing = spacing || "";
    // If we've been given a name, append a ": "

    // Figure out the type, fixes for NULL and ARRAY
    var type = typeof v;
    if (type == "object") {
        if (v === null) {
            type = "null";
        } else if (Object.prototype.toString.call(v) === "[object Array]") {
            type = "array";
        }
        name =
            type +
            chalk.keyword("orange")("(") +
            chalk.cyan(v.length ? v.length : Object.keys(v).length) +
            chalk.keyword("orange")(")");
    }

    name = name ? name + chalk.keyword("orange")(": ") : "";

    // Switch the type
    switch (type) {
        case "number":
            console.log(spacing + chalk.cyan(name) + chalk.bold.cyan(v));
            break;
        case "string":
            console.log(
                spacing +
                    chalk.cyan(name) +
                    chalk.keyword("orange")('"') +
                    chalk.bold.green(v) +
                    chalk.keyword("orange")('"')
            );
            break;
        case "boolean":
            console.log(
                spacing + chalk.cyan(name) + chalk.bold.keyword("orange")(v)
            );
            break;
        case "null":
            console.log(spacing + chalk.cyan(name) + v);
            break;
        case "undefined":
            console.log(spacing + chalk.cyan(name) + v);
            break;
        case "object":
            console.log(
                spacing + chalk.cyan(name) + chalk.keyword("orange")(" {")
            );
            for (n in v) {
                dump(v[n], n, spacing + "  ");
            }
            console.log(spacing + chalk.keyword("orange")("}"));
            break;
        case "array":
            console.log(
                spacing + chalk.cyan(name) + chalk.keyword("orange")(" [")
            );
            for (n in v) {
                dump(v[n], n, spacing + "  ");
            }
            console.log(spacing + chalk.keyword("orange")("]"));
            break;
    }
};

module.exports = dump;
