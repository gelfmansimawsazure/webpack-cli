const packageExists = require('./package-exists');
const cli = packageExists('webpack') ? require('webpack').cli : undefined;

const BASIC_GROUP = 'basic';

const groups = {
    BASIC_GROUP,
};

const commands = [
    {
        name: 'init',
        alias: 'c',
        type: String,
        usage: 'init [scaffold] [options]',
        description: 'Initialize a new webpack configuration',
        flags: [
            {
                name: 'auto',
                type: Boolean,
                description: 'To generate default config',
            },
            {
                name: 'force',
                type: Boolean,
                description: 'To force config generation',
            },
            {
                name: 'generation-path',
                type: String,
                description: 'To scaffold in a specified path',
            },
        ],
    },
    {
        name: 'migrate',
        alias: 'm',
        type: String,
        usage: 'migrate',
        description: 'Migrate a configuration to a new version',
    },
    {
        name: 'loader',
        scope: 'external',
        alias: 'l',
        type: String,
        usage: 'loader [path]',
        description: 'Scaffold a loader repository',
    },
    {
        name: 'plugin',
        alias: 'p',
        scope: 'external',
        type: String,
        usage: 'plugin [path]',
        description: 'Scaffold a plugin repository',
    },
    {
        name: 'info',
        scope: 'external',
        alias: 'i',
        type: String,
        usage: 'info [options]',
        description: 'Outputs information about your system and dependencies',
        flags: [
            {
                name: 'output',
                type: String,
                description: 'To get the output in specified format ( accept json or markdown )',
            },
            {
                name: 'version',
                type: Boolean,
                description: 'Print version information of info package',
            },
        ],
    },
    {
        name: 'serve',
        alias: 's',
        scope: 'external',
        type: String,
        usage: 'serve [options]',
        description: 'Run the webpack Dev Server',
    },
];

const core = [
    {
        name: 'entry',
        usage: '--entry <path to entry file> | --entry <path> --entry <path>',
        type: String,
        multiple: true,
        group: BASIC_GROUP,
        description: 'The entry point(s) of your application e.g. ./src/main.js',
        link: 'https://webpack.js.org/concepts/#entry',
    },
    {
        name: 'config',
        usage: '--config <path to webpack configuration file>',
        alias: 'c',
        type: String,
        multiple: true,
        description: 'Provide path to a webpack configuration file e.g. ./webpack.config.js',
        link: 'https://webpack.js.org/configuration/',
    },
    {
        name: 'color',
        usage: '--color',
        type: Boolean,
        negative: true,
        defaultValue: true,
        description: 'Enable/Disable colors on console',
    },
    {
        name: 'merge',
        usage: '--merge',
        alias: 'm',
        type: Boolean,
        description: 'Merge two or more configurations using webpack-merge e.g. -c ./webpack.config.js -c ./webpack.test.config.js --merge',
        link: 'https://github.com/survivejs/webpack-merge',
    },
    {
        name: 'progress',
        usage: '--progress',
        type: [Boolean, String],
        group: BASIC_GROUP,
        description: 'Print compilation progress during build',
    },
    {
        name: 'help',
        usage: '--help',
        type: Boolean,
        description: 'Outputs list of supported flags',
    },
    {
        name: 'output-path',
        usage: '--output-path <path to output directory>',
        alias: 'o',
        type: String,
        description: 'Output location of the file generated by webpack e.g. ./dist/',
        link: 'https://webpack.js.org/configuration/output/#outputpath',
    },
    {
        name: 'target',
        usage: '--target <value>',
        alias: 't',
        type: String,
        multiple: cli !== undefined,
        description: 'Sets the build target e.g. node',
        link: 'https://webpack.js.org/configuration/target/#target',
    },
    {
        name: 'watch',
        usage: '--watch',
        type: Boolean,
        alias: 'w',
        group: BASIC_GROUP,
        description: 'Watch for files changes',
        link: 'https://webpack.js.org/configuration/watch/',
    },
    {
        name: 'hot',
        usage: '--hot',
        alias: 'h',
        type: Boolean,
        negative: true,
        description: 'Enables Hot Module Replacement',
        link: 'https://webpack.js.org/concepts/hot-module-replacement/',
    },
    {
        name: 'devtool',
        usage: '--devtool <value>',
        type: String,
        alias: 'd',
        group: BASIC_GROUP,
        description: 'Determine source maps to use',
        link: 'https://webpack.js.org/configuration/devtool/#devtool',
    },
    {
        name: 'prefetch',
        usage: '--prefetch <request>',
        type: String,
        description: 'Prefetch this request',
        link: 'https://webpack.js.org/plugins/prefetch-plugin/',
    },
    {
        name: 'json',
        usage: '--json',
        type: [String, Boolean],
        alias: 'j',
        description: 'Prints result as JSON or store it in a file',
    },
    {
        name: 'mode',
        usage: '--mode <development | production | none>',
        type: String,
        description: 'Defines the mode to pass to webpack',
        link: 'https://webpack.js.org/concepts/#mode',
    },
    {
        name: 'version',
        usage: '--version | --version <external-package>',
        alias: 'v',
        type: Boolean,
        description: 'Get current version',
    },
    {
        name: 'stats',
        usage: '--stats <value>',
        type: [String, Boolean],
        negative: true,
        description: 'It instructs webpack on how to treat the stats e.g. verbose',
        link: 'https://webpack.js.org/configuration/stats/#stats',
    },
    {
        name: 'env',
        usage: '--env',
        type: String,
        multipleType: true,
        description: 'Environment passed to the configuration when it is a function',
        link: 'https://webpack.js.org/api/cli/#environment-options',
    },
    {
        name: 'name',
        usage: '--name',
        type: String,
        group: BASIC_GROUP,
        description: 'Name of the configuration. Used when loading multiple configurations.',
        link: 'https://webpack.js.org/configuration/other-options/#name',
    },
    {
        name: 'config-name',
        usage: '--config-name <name of config>',
        type: String,
        multiple: true,
        description: 'Name of the configuration to use',
    },
    {
        name: 'analyze',
        usage: '--analyze',
        type: Boolean,
        multiple: false,
        description: 'It invokes webpack-bundle-analyzer plugin to get bundle information',
        link: 'https://github.com/webpack-contrib/webpack-bundle-analyzer',
    },
    /* 		{
        name: "interactive",
        type: Boolean,
        alias: "i",
        description: "Use webpack interactively",
        group: BASIC_GROUP
    } */
];

// Extract all the flags being exported from core. A list of cli flags generated by core
// can be found here https://github.com/webpack/webpack/blob/master/test/__snapshots__/Cli.test.js.snap
let flagsFromCore =
    cli !== undefined
        ? Object.entries(cli.getArguments()).map(([flag, meta]) => {
              if (meta.simpleType === 'string') {
                  meta.type = String;
                  meta.usage = `--${flag} <value>`;
              } else if (meta.simpleType === 'number') {
                  meta.type = Number;
                  meta.usage = `--${flag} <value>`;
              } else {
                  meta.type = Boolean;
                  meta.negative = !flag.endsWith('-reset');
                  meta.usage = `--${flag}`;
              }
              return {
                  ...meta,
                  name: flag,
                  group: 'core',
              };
          })
        : [];

// duplicate flags
const duplicateFlags = core.map((flag) => flag.name);

// remove duplicate flags
flagsFromCore = flagsFromCore.filter((flag) => !duplicateFlags.includes(flag.name));

const coreFlagMap = flagsFromCore.reduce((acc, cur) => {
    acc.set(cur.name, cur);
    return acc;
}, new Map());

const defaultCommands = {
    init: 'init',
    loader: 'generate-loader',
    plugin: 'generate-plugin',
    info: 'info',
    migrate: 'migrate',
    serve: 'serve',
};

module.exports = {
    groups,
    commands,
    core: [...core, ...flagsFromCore],
    flagsFromCore,
    coreFlagMap,
    defaultCommands,
};
