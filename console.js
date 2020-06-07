class Console {
    /**
     * Write a string as standard output.
     *
     * @param  string  $string
     * @param  string|null  $style
     * @return void
     */
    static line($string, $style = null) {
        const chalk = require("chalk");
        const log = console.log;
        const dump = require("./dump");

        switch ($style) {
            case "info":
                log(chalk.whiteBright.bgGreen($string));
                break;
            case "warning":
                log(chalk.black.bgYellow($string));
                break;
            case "error":
                log(chalk.whiteBright.bgRed($string));
                break;
            case "comment":
                log(chalk.yellow($string));
                break;
            case "question":
                log(chalk.black.bgBlue($string));
                break;
            case "success":
                log(chalk.black.bgGreen($string));
                break;
            default:
                dump($string);
        }
    }

    /**
     * Write a string as information output.
     *
     * @param  string  $string
     * @return void
     */
    static info($string) {
        this.line($string, "info");
    }

    /**
     * Write a string as error output.
     *
     * @param  string  $string
     * @return void
     */
    static error($string) {
        this.line($string, "error");
    }

    /**
     * Write a string as comment output.
     *
     * @param  string  $string
     * @return void
     */
    static comment($string) {
        this.line($string, "comment");
    }

    /**
     * Write a string as question output.
     *
     * @param  string  $string
     * @return void
     */
    static question($string) {
        this.line($string, "question");
    }

    /**
     * Write a string as warning output.
     *
     * @param  string  $string
     * @return void
     */
    static warn($string) {
        this.line($string, "warning");
    }

    /**
     * Write a string as warning output.
     *
     * @param  string  $string
     * @return void
     */
    static success($string) {
        this.line($string, "success");
    }

    /**
     * Write a string in an alert box.
     *
     * @param  string  $string
     * @return void
     */
    static alert($string) {
        const $length = $string.length + 12;

        this.comment("*".repeat($length));
        this.comment("*     " + $string + "     *");
        this.comment("*".repeat($length));
    }

    /**
     * Write a string in an alert box.
     *
     * @param  string  $string
     * @return void
     */
    static notice($string) {
        $length = $string.length + 12;

        this.info("*".repeat($length));
        this.info("*     " + $string + "     *");
        this.info("*".repeat($length));
        this.info("\n");
    }

    /**
     * Format input to textual table.
     *
     * @param  array  $array
     * @param  \Illuminate\Contracts\Support\Arrayable|array  $rows
     * @param  string  $tableStyle
     * @param  array  $columnStyles
     * @return \Symfony\Component\Console\Helper\Table
     */
    static table($array) {
        console.table($array);
    }

    static output($value) {
        this.line($value);
    }
}
module.exports = Console;
