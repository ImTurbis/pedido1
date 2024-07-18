(async () => {
    const chalk = (await import('chalk')).default;

    class ErrorHandler {
        constructor() {
            process.on('uncaughtException', async (err, origin) => {
                console.log(chalk.blue('[SYS] ::') + chalk.red(' [ERROR] :: ') + chalk.white(err.message));
                console.log(chalk.blue('[SYS] ::') + chalk.red(' [ERROR] :: ') + chalk.white(origin));
            });
            process.on('unhandledRejection', async (reason, _promise) => {
                console.log(chalk.blue('[SYS] ::') + chalk.red(' [ERROR] :: ') + chalk.white(reason));
            });
            process.on('uncaughtExceptionMonitor', (err, origin) => {
                console.log(chalk.blue('[SYS] ::') + chalk.red(' [ERROR] :: ') + chalk.white(err.message));
                console.log(chalk.blue('[SYS] ::') + chalk.red(' [ERROR] :: ') + chalk.white(origin));
            });
            process.on('warning', async (warning) => {
                console.log(chalk.blue('[SYS] ::') + chalk.yellow(' [WARN] :: ') + chalk.white(warning.name));
                console.log(chalk.blue('[SYS] ::') + chalk.yellow(' [WARN] :: ') + chalk.white(warning.message));
                console.log(chalk.blue('[SYS] ::') + chalk.yellow(' [WARN] :: ') + chalk.white(warning.stack || 'No stack available'));
            });

            console.log(chalk.blue('[SYS] ::') + chalk.green(' [INFO] :: ') + chalk.white('AntiCrash ready'));
        }
    }

    module.exports =  {ErrorHandler}
})();
