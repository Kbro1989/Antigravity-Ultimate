# Wrangler CLI Reference

Generated 2026-01-09T22:54:50.868Z

## `wrangler `

```text
wrangler

COMMANDS
  wrangler docs [search..]        📚 Open Wrangler's command documentation in your browser

  wrangler init [name]            📥 Initialize a basic Worker
  wrangler dev [script]           👂 Start a local server for developing your Worker
  wrangler deploy [script]        🆙 Deploy a Worker to Cloudflare
  wrangler setup                  🪄 Setup a project to work on Cloudflare [experimental]
  wrangler deployments            🚢 List and view the current and past deployments for your Worker
  wrangler rollback [version-id]  🔙 Rollback a deployment for a Worker
  wrangler versions               🫧 List, view, upload and deploy Versions of your Worker to Cloudflare
  wrangler triggers               🎯 Updates the triggers of your current deployment [experimental]
  wrangler delete [script]        🗑  Delete a Worker from Cloudflare
  wrangler tail [worker]          🦚 Start a log tailing session for a Worker
  wrangler secret                 🤫 Generate a secret that can be referenced in a Worker
  wrangler types [path]           📝 Generate types from your Worker configuration

  wrangler kv                     🗂️  Manage Workers KV Namespaces
  wrangler queues                 📬 Manage Workers Queues
  wrangler r2                     📦 Manage R2 buckets & objects
  wrangler d1                     🗄  Manage Workers D1 databases
  wrangler vectorize              🧮 Manage Vectorize indexes
  wrangler hyperdrive             🚀 Manage Hyperdrive databases
  wrangler cert                   🪪 Manage client mTLS certificates and CA certificate chains used for secured connections [open-beta]
  wrangler pages                  ⚡️ Configure Cloudflare Pages
  wrangler mtls-certificate       🪪 Manage certificates used for mTLS connections
  wrangler containers             📦 Manage Containers [open-beta]
  wrangler pubsub                 📮 Manage Pub/Sub brokers [private beta]
  wrangler dispatch-namespace     🏗️  Manage dispatch namespaces
  wrangler ai                     🤖 Manage AI models
  wrangler secrets-store          🔐 Manage the Secrets Store [open-beta]
  wrangler workflows              🔁 Manage Workflows
  wrangler pipelines              🚰 Manage Cloudflare Pipelines [open-beta]
  wrangler vpc                    🌐 Manage VPC [open-beta]
  wrangler login                  🔓 Login to Cloudflare
  wrangler logout                 🚪 Logout from Cloudflare
  wrangler whoami                 🕵️  Retrieve your user information

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

Please report any issues to https://github.com/cloudflare/workers-sdk/issues/new/choose
```

## `wrangler docs`

```text
wrangler docs [search..]

📚 Open Wrangler's command documentation in your browser


POSITIONALS
  search  Enter search terms (e.g. the wrangler command) you want to know more about  [array] [default: []]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --yes  Takes you to the docs, even if search fails  [boolean]
```

## `wrangler init`

```text
wrangler init [name]

📥 Initialize a basic Worker

POSITIONALS
  name  The name of your worker  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --yes        Answer "yes" to any prompts for new projects  [boolean]
      --from-dash  The name of the Worker you wish to download from the Cloudflare dashboard for local development.  [string]
```

## `wrangler dev`

```text
wrangler dev [script]

👂 Start a local server for developing your Worker

POSITIONALS
  script  The path to an entry point for your Worker  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name                                       Name of the Worker  [string]
      --compatibility-date                         Date to use for compatibility checks  [string]
      --compatibility-flags, --compatibility-flag  Flags to use for compatibility checks  [array]
      --latest                                     Use the latest version of the Workers runtime  [boolean] [default: true]
      --assets                                     Static assets to be served. Replaces Workers Sites.  [string]
      --no-bundle                                  Skip internal build steps and directly deploy script  [boolean] [default: false]
      --ip                                         IP address to listen on  [string]
      --port                                       Port to listen on  [number]
      --inspector-port                             Port for devtools to connect to  [number]
      --routes, --route                            Routes to upload  [array]
      --host                                       Host to forward requests to, defaults to the zone of project  [string]
      --local-protocol                             Protocol to listen to requests on, defaults to http.  [choices: "http", "https"]
      --https-key-path                             Path to a custom certificate key  [string]
      --https-cert-path                            Path to a custom certificate  [string]
      --local-upstream                             Host to act as origin in local mode, defaults to dev.host or route  [string]
      --upstream-protocol                          Protocol to forward requests to host on, defaults to https.  [choices: "http", "https"]
      --var                                        A key-value pair to be injected into the script as a variable  [array]
      --define                                     A key-value pair to be substituted in the script  [array]
      --alias                                      A module pair to be substituted in the script  [array]
      --jsx-factory                                The function that is called for each JSX element  [string]
      --jsx-fragment                               The function that is called for each JSX fragment  [string]
      --tsconfig                                   Path to a custom tsconfig.json file  [string]
  -r, --remote                                     Run on the global Cloudflare network with access to production resources  [boolean] [default: false]
  -l, --local                                      Run locally with remote bindings disabled  [boolean]
      --minify                                     Minify the script  [boolean]
      --persist-to                                 Specify directory to use for local persistence (defaults to .wrangler/state)  [string]
      --live-reload                                Auto reload HTML pages when change is detected in local mode  [boolean]
      --test-scheduled                             Test scheduled events by visiting /__scheduled in browser  [boolean] [default: false]
      --log-level                                  Specify logging level  [choices: "debug", "info", "log", "warn", "error", "none"]
      --show-interactive-dev-session               Show interactive dev session (defaults to true if the terminal supports interactivity)  [boolean]
```

## `wrangler deploy`

```text
wrangler deploy [script]

🆙 Deploy a Worker to Cloudflare

POSITIONALS
  script  The path to an entry point for your Worker  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name                                       Name of the Worker  [string]
      --no-bundle                                  Skip internal build steps and directly deploy Worker  [boolean] [default: false]
      --outdir                                     Output directory for the bundled Worker  [string]
      --outfile                                    Output file for the bundled worker  [string]
      --compatibility-date                         Date to use for compatibility checks  [string]
      --compatibility-flags, --compatibility-flag  Flags to use for compatibility checks  [array]
      --latest                                     Use the latest version of the Workers runtime  [boolean] [default: false]
      --assets                                     Static assets to be served. Replaces Workers Sites.  [string]
      --var                                        A key-value pair to be injected into the script as a variable  [array]
      --define                                     A key-value pair to be substituted in the script  [array]
      --alias                                      A module pair to be substituted in the script  [array]
      --triggers, --schedule, --schedules          cron schedules to attach  [array]
      --routes, --route                            Routes to upload  [array]
      --domains, --domain                          Custom domains to deploy to  [array]
      --jsx-factory                                The function that is called for each JSX element  [string]
      --jsx-fragment                               The function that is called for each JSX fragment  [string]
      --tsconfig                                   Path to a custom tsconfig.json file  [string]
      --minify                                     Minify the Worker  [boolean]
      --dry-run                                    Don't actually deploy  [boolean]
      --metafile                                   Path to output build metadata from esbuild. If flag is used without a path, defaults to 'bundle-meta.json' inside the directory specified by --outdir.  [string]
      --keep-vars                                  When not used (or set to false), Wrangler will delete all vars before setting those found in the Wrangler configuration.
                                                   When used (and set to true), the environment variables are not deleted before the deployment.
                                                   If you set variables via the dashboard you probably want to use this flag.
                                                   Note that secrets are never deleted by deployments.  [boolean] [default: false]
      --logpush                                    Send Trace Events from this Worker to Workers Logpush.
                                                   This will not configure a corresponding Logpush job automatically.  [boolean]
      --upload-source-maps                         Include source maps when uploading this Worker.  [boolean]
      --old-asset-ttl                              Expire old assets in given seconds rather than immediate deletion.  [number]
      --dispatch-namespace                         Name of a dispatch namespace to deploy the Worker to (Workers for Platforms)  [string]
      --containers-rollout                         Rollout strategy for Containers changes. If set to immediate, it will override `rollout_percentage_steps` if configured and roll out to 100% of instances in one step.  [choices: "immediate", "gradual"]
      --strict                                     Enables strict mode for the deploy command, this prevents deployments to occur when there are even small potential risks.  [boolean] [default: false]
      --experimental-autoconfig, --x-autoconfig    Experimental: Enables framework detection and automatic configuration when deploying  [boolean] [default: false]
```

## `wrangler setup`

```text
wrangler setup

🪄 Setup a project to work on Cloudflare [experimental]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --yes      Answer "yes" to any prompts for configuring your project  [boolean] [default: false]
      --build    Run your project's build command once it has been configured  [boolean] [default: false]
      --dry-run  Runs the command without applying any filesystem modifications  [boolean]
```

## `wrangler deployments`

```text
wrangler deployments

🚢 List and view the current and past deployments for your Worker

COMMANDS
  wrangler deployments list    Displays the 10 most recent deployments of your Worker
  wrangler deployments status  View the current state of your production

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler rollback`

```text
wrangler rollback [version-id]

🔙 Rollback a deployment for a Worker

POSITIONALS
  version-id  The ID of the Worker Version to rollback to  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name     The name of your Worker  [string]
  -m, --message  The reason for this rollback  [string]
  -y, --yes      Automatically accept defaults to prompts  [boolean] [default: false]
```

## `wrangler versions`

```text
wrangler versions

🫧 List, view, upload and deploy Versions of your Worker to Cloudflare

COMMANDS
  wrangler versions view <version-id>         View the details of a specific version of your Worker
  wrangler versions list                      List the 10 most recent Versions of your Worker
  wrangler versions upload [script]           Uploads your Worker code and config as a new Version
  wrangler versions deploy [version-specs..]  Safely roll out new Versions of your Worker by splitting traffic between multiple Versions
  wrangler versions secret                    Generate a secret that can be referenced in a Worker

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler triggers`

```text
wrangler triggers

🎯 Updates the triggers of your current deployment [experimental]

COMMANDS
  wrangler triggers deploy  Updates the triggers of your current deployment [experimental]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler delete`

```text
wrangler delete [script]

🗑  Delete a Worker from Cloudflare

POSITIONALS
  script  The path to an entry point for your worker  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name     Name of the worker  [string]
      --dry-run  Don't actually delete  [boolean]
      --force    Delete even if doing so will break other Workers that depend on this one  [boolean]
```

## `wrangler tail`

```text
wrangler tail [worker]

🦚 Start a log tailing session for a Worker

POSITIONALS
  worker  Name or route of the worker to tail  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --format         The format of log entries  [choices: "json", "pretty"]
      --status         Filter by invocation status  [array] [choices: "ok", "error", "canceled"]
      --header         Filter by HTTP header  [string]
      --method         Filter by HTTP method  [array]
      --sampling-rate  Adds a percentage of requests to log sampling rate  [number]
      --search         Filter by a text match in console.log messages  [string]
      --ip             Filter by the IP address the request originates from. Use "self" to filter for your own IP  [array]
      --version-id     Filter by Worker version  [string]
```

## `wrangler secret`

```text
wrangler secret

🤫 Generate a secret that can be referenced in a Worker

COMMANDS
  wrangler secret put <key>     Create or update a secret variable for a Worker
  wrangler secret delete <key>  Delete a secret variable from a Worker
  wrangler secret list          List all secrets for a Worker
  wrangler secret bulk [file]   Bulk upload secrets for a Worker

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler types`

```text
wrangler types [path]

📝 Generate types from your Worker configuration


POSITIONALS
  path  The path to the declaration file for the generated types  [string] [default: "worker-configuration.d.ts"]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --env-interface    The name of the generated environment interface  [string] [default: "Env"]
      --include-runtime  Include runtime types in the generated types  [boolean] [default: true]
      --include-env      Include Env types in the generated types  [boolean] [default: true]
      --strict-vars      Generate literal and union types for variables  [boolean] [default: true]

📖 Learn more at https://developers.cloudflare.com/workers/languages/typescript/#generate-types
```

## `wrangler kv`

```text
wrangler kv

🗂️  Manage Workers KV Namespaces

COMMANDS
  wrangler kv namespace  Interact with your Workers KV Namespaces
  wrangler kv key        Individually manage Workers KV key-value pairs
  wrangler kv bulk       Interact with multiple Workers KV key-value pairs at once

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues`

```text
wrangler queues

📬 Manage Workers Queues

COMMANDS
  wrangler queues list                    List queues
  wrangler queues create <name>           Create a queue
  wrangler queues update <name>           Update a queue
  wrangler queues delete <name>           Delete a queue
  wrangler queues info <name>             Get queue information
  wrangler queues consumer                Configure queue consumers
  wrangler queues pause-delivery <name>   Pause message delivery for a queue
  wrangler queues resume-delivery <name>  Resume message delivery for a queue
  wrangler queues purge <name>            Purge messages from a queue
  wrangler queues subscription            Manage event subscriptions for a queue

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2`

```text
wrangler r2

📦 Manage R2 buckets & objects

COMMANDS
  wrangler r2 object  Manage R2 objects
  wrangler r2 bucket  Manage R2 buckets
  wrangler r2 sql     Send queries and manage R2 SQL [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler d1`

```text
wrangler d1

🗄  Manage Workers D1 databases

COMMANDS
  wrangler d1 create <name>       Creates a new D1 database, and provides the binding and UUID that you will put in your config file
  wrangler d1 info <name>         Get information about a D1 database, including the current database size and state
  wrangler d1 list                List all D1 databases in your account
  wrangler d1 delete <name>       Delete a D1 database
  wrangler d1 execute <database>  Execute a command or SQL file
  wrangler d1 export <name>       Export the contents or schema of your database as a .sql file
  wrangler d1 time-travel         Use Time Travel to restore, fork or copy a database at a specific point-in-time
  wrangler d1 migrations          Interact with D1 migrations
  wrangler d1 insights <name>     Get information about the queries run on a D1 database [experimental]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler vectorize`

```text
wrangler vectorize

🧮 Manage Vectorize indexes

COMMANDS
  wrangler vectorize create <name>                 Create a Vectorize index
  wrangler vectorize delete <name>                 Delete a Vectorize index
  wrangler vectorize get <name>                    Get a Vectorize index by name
  wrangler vectorize list                          List your Vectorize indexes
  wrangler vectorize list-vectors <name>           List vector identifiers in a Vectorize index
  wrangler vectorize query <name>                  Query a Vectorize index
  wrangler vectorize insert <name>                 Insert vectors into a Vectorize index
  wrangler vectorize upsert <name>                 Upsert vectors into a Vectorize index
  wrangler vectorize get-vectors <name>            Get vectors from a Vectorize index
  wrangler vectorize delete-vectors <name>         Delete vectors in a Vectorize index
  wrangler vectorize info <name>                   Get additional details about the index
  wrangler vectorize create-metadata-index <name>  Enable metadata filtering on the specified property
  wrangler vectorize list-metadata-index <name>    List metadata properties on which metadata filtering is enabled
  wrangler vectorize delete-metadata-index <name>  Delete metadata indexes

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler hyperdrive`

```text
wrangler hyperdrive

🚀 Manage Hyperdrive databases

COMMANDS
  wrangler hyperdrive create <name>  Create a Hyperdrive config
  wrangler hyperdrive delete <id>    Delete a Hyperdrive config
  wrangler hyperdrive get <id>       Get a Hyperdrive config
  wrangler hyperdrive list           List Hyperdrive configs
  wrangler hyperdrive update <id>    Update a Hyperdrive config

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler cert`

```text
wrangler cert

🪪 Manage client mTLS certificates and CA certificate chains used for secured connections [open-beta]

COMMANDS
  wrangler cert upload  Upload a new cert [open-beta]
  wrangler cert list    List uploaded mTLS certificates
  wrangler cert delete  Delete an mTLS certificate

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pages`

```text
wrangler pages

⚡️ Configure Cloudflare Pages

COMMANDS
  wrangler pages dev [directory] [command]  Develop your full-stack Pages application locally
  wrangler pages functions                  Helpers related to Pages Functions
  wrangler pages project                    Interact with your Pages projects
  wrangler pages deployment                 Interact with the deployments of a project
  wrangler pages deploy [directory]         Deploy a directory of static assets as a Pages deployment
  wrangler pages secret                     Generate a secret that can be referenced in a Pages project
  wrangler pages download                   Download settings from your project

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler mtls-certificate`

```text
wrangler mtls-certificate

🪪 Manage certificates used for mTLS connections

COMMANDS
  wrangler mtls-certificate upload  Upload an mTLS certificate
  wrangler mtls-certificate list    List uploaded mTLS certificates
  wrangler mtls-certificate delete  Delete an mTLS certificate

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler containers`

```text
wrangler containers

📦 Manage Containers [open-beta]

COMMANDS
  wrangler containers build PATH  Build a container image
  wrangler containers push TAG    Push a tagged image to a Cloudflare managed registry
  wrangler containers images      Perform operations on images in your Cloudflare managed registry
  wrangler containers info ID     Get information about a specific container
  wrangler containers list        List containers
  wrangler containers delete ID   Delete a container

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pubsub`

```text
wrangler pubsub

📮 Manage Pub/Sub brokers [private beta]

COMMANDS
  wrangler pubsub namespace  Manage your Pub/Sub Namespaces
  wrangler pubsub broker     Interact with your Pub/Sub Brokers

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler dispatch-namespace`

```text
wrangler dispatch-namespace

🏗️  Manage dispatch namespaces

COMMANDS
  wrangler dispatch-namespace list                        List all dispatch namespaces
  wrangler dispatch-namespace get <name>                  Get information about a dispatch namespace
  wrangler dispatch-namespace create <name>               Create a dispatch namespace
  wrangler dispatch-namespace delete <name>               Delete a dispatch namespace
  wrangler dispatch-namespace rename <oldName> <newName>  Rename a dispatch namespace

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler ai`

```text
wrangler ai

🤖 Manage AI models

COMMANDS
  wrangler ai models    List catalog models
  wrangler ai finetune  Interact with finetune files

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler secrets-store`

```text
wrangler secrets-store

🔐 Manage the Secrets Store [open-beta]

COMMANDS
  wrangler secrets-store store   🔐 Manage Stores within the Secrets Store [open-beta]
  wrangler secrets-store secret  🔐 Manage Secrets within the Secrets Store [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler workflows`

```text
wrangler workflows

🔁 Manage Workflows

COMMANDS
  wrangler workflows list                     List Workflows associated to account
  wrangler workflows describe <name>          Describe Workflow resource
  wrangler workflows delete <name>            Delete workflow - when deleting a workflow, it will also delete it's own instances
  wrangler workflows trigger <name> [params]  Trigger a workflow, creating a new instance. Can optionally take a JSON string to pass a parameter into the workflow instance
  wrangler workflows instances                Manage Workflow instances

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pipelines`

```text
wrangler pipelines

🚰 Manage Cloudflare Pipelines [open-beta]

COMMANDS
  wrangler pipelines setup              Interactive setup for a complete pipeline [open-beta]
  wrangler pipelines create <pipeline>  Create a new pipeline [open-beta]
  wrangler pipelines list               List all pipelines [open-beta]
  wrangler pipelines get <pipeline>     Get details about a specific pipeline [open-beta]
  wrangler pipelines update <pipeline>  Update a pipeline configuration (legacy pipelines only) [open-beta]
  wrangler pipelines delete <pipeline>  Delete a pipeline [open-beta]
  wrangler pipelines streams            Manage streams for pipelines [open-beta]
  wrangler pipelines sinks              Manage sinks for pipelines [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler vpc`

```text
wrangler vpc

🌐 Manage VPC [open-beta]

COMMANDS
  wrangler vpc service  🔗 Manage VPC services

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler login`

```text
wrangler login

🔓 Login to Cloudflare

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --scopes-list    List all the available OAuth scopes with descriptions
      --browser        Automatically open the OAuth link in a browser  [boolean] [default: true]
      --scopes         Pick the set of applicable OAuth scopes when logging in  [array]
      --callback-host  Use the ip or host address for the temporary login callback server.  [string] [default: "localhost"]
      --callback-port  Use the port for the temporary login callback server.  [number] [default: 8976]
```

## `wrangler logout`

```text
wrangler logout

🚪 Logout from Cloudflare

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler whoami`

```text
wrangler whoami

🕵️  Retrieve your user information

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --account  Show membership information for the given account (id or name).  [string]
```

## `wrangler deployments list`

```text
wrangler deployments list

Displays the 10 most recent deployments of your Worker

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Name of the Worker  [string]
      --json  Display output as clean JSON  [boolean] [default: false]
```

## `wrangler deployments status`

```text
wrangler deployments status

View the current state of your production

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Name of the Worker  [string]
      --json  Display output as clean JSON  [boolean] [default: false]
```

## `wrangler versions view`

```text
wrangler versions view <version-id>

View the details of a specific version of your Worker

POSITIONALS
  version-id  The Worker Version ID to view  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Name of the worker  [string]
      --json  Display output as clean JSON  [boolean] [default: false]
```

## `wrangler versions list`

```text
wrangler versions list

List the 10 most recent Versions of your Worker

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Name of the Worker  [string]
      --json  Display output as clean JSON  [boolean] [default: false]
```

## `wrangler versions upload`

```text
wrangler versions upload [script]

Uploads your Worker code and config as a new Version

POSITIONALS
  script  The path to an entry point for your Worker  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name                                       Name of the Worker  [string]
      --tag                                        A tag for this Worker Gradual Rollouts Version  [string]
      --message                                    A descriptive message for this Worker Gradual Rollouts Version  [string]
      --preview-alias                              Name of an alias for this Worker version  [string]
      --no-bundle                                  Skip internal build steps and directly upload Worker  [boolean] [default: false]
      --outdir                                     Output directory for the bundled Worker  [string]
      --outfile                                    Output file for the bundled worker  [string]
      --compatibility-date                         Date to use for compatibility checks  [string]
      --compatibility-flags, --compatibility-flag  Flags to use for compatibility checks  [array]
      --latest                                     Use the latest version of the Worker runtime  [boolean] [default: false]
      --assets                                     Static assets to be served. Replaces Workers Sites.  [string]
      --var                                        A key-value pair to be injected into the script as a variable  [array]
      --define                                     A key-value pair to be substituted in the script  [array]
      --alias                                      A module pair to be substituted in the script  [array]
      --jsx-factory                                The function that is called for each JSX element  [string]
      --jsx-fragment                               The function that is called for each JSX fragment  [string]
      --tsconfig                                   Path to a custom tsconfig.json file  [string]
      --minify                                     Minify the Worker  [boolean]
      --upload-source-maps                         Include source maps when uploading this Worker Gradual Rollouts Version.  [boolean]
      --dry-run                                    Compile a project without actually uploading the version.  [boolean]
```

## `wrangler versions deploy`

```text
wrangler versions deploy [version-specs..]

Safely roll out new Versions of your Worker by splitting traffic between multiple Versions

POSITIONALS
  version-specs  Shorthand notation to deploy Worker Version(s) [<version-id>@<percentage>..]  [array] [default: []]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name        Name of the worker  [string]
      --version-id  Worker Version ID(s) to deploy  [array]
      --percentage  Percentage of traffic to split between Worker Version(s) (0-100)  [number]
      --message     Description of this deployment (optional)  [string]
  -y, --yes         Automatically accept defaults to prompts  [boolean] [default: false]
      --dry-run     Don't actually deploy  [boolean] [default: false]
```

## `wrangler versions secret`

```text
wrangler versions secret

Generate a secret that can be referenced in a Worker

COMMANDS
  wrangler versions secret put [key]     Create or update a secret variable for a Worker
  wrangler versions secret bulk [file]   Create or update a secret variable for a Worker
  wrangler versions secret delete [key]  Delete a secret variable from a Worker
  wrangler versions secret list          List the secrets currently deployed

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler triggers deploy`

```text
wrangler triggers deploy

Updates the triggers of your current deployment [experimental]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name                               Name of the worker  [string]
      --triggers, --schedule, --schedules  cron schedules to attach  [array]
      --routes, --route                    Routes to upload  [array]
      --dry-run                            Don't actually deploy  [boolean]
```

## `wrangler secret put`

```text
wrangler secret put <key>

Create or update a secret variable for a Worker

POSITIONALS
  key  The variable name to be accessible in the Worker  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Name of the Worker  [string]
```

## `wrangler secret delete`

```text
wrangler secret delete <key>

Delete a secret variable from a Worker

POSITIONALS
  key  The variable name to be accessible in the Worker  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Name of the Worker  [string]
```

## `wrangler secret list`

```text
wrangler secret list

List all secrets for a Worker

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name    Name of the Worker  [string]
      --format  The format to print the secrets in  [choices: "json", "pretty"] [default: "json"]
```

## `wrangler secret bulk`

```text
wrangler secret bulk [file]

Bulk upload secrets for a Worker

POSITIONALS
  file  The file of key-value pairs to upload, as JSON in form {"key": value, ...} or .dev.vars file in the form KEY=VALUE  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Name of the Worker  [string]
```

## `wrangler kv namespace`

```text
wrangler kv namespace

Interact with your Workers KV Namespaces

COMMANDS
  wrangler kv namespace create <namespace>  Create a new namespace
  wrangler kv namespace list                Output a list of all KV namespaces associated with your account id
  wrangler kv namespace delete              Delete a given namespace.
  wrangler kv namespace rename [old-name]   Rename a KV namespace

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler kv key`

```text
wrangler kv key

Individually manage Workers KV key-value pairs

COMMANDS
  wrangler kv key put <key> [value]  Write a single key/value pair to the given namespace
  wrangler kv key list               Output a list of all keys in a given namespace
  wrangler kv key get <key>          Read a single value by key from the given namespace
  wrangler kv key delete <key>       Remove a single key value pair from the given namespace

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler kv bulk`

```text
wrangler kv bulk

Interact with multiple Workers KV key-value pairs at once

COMMANDS
  wrangler kv bulk get <filename>     Gets multiple key-value pairs from a namespace [open-beta]
  wrangler kv bulk put <filename>     Upload multiple key-value pairs to a namespace
  wrangler kv bulk delete <filename>  Delete multiple key-value pairs from a namespace

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues list`

```text
wrangler queues list

List queues

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page  Page number for pagination  [number]
```

## `wrangler queues create`

```text
wrangler queues create <name>

Create a queue

POSITIONALS
  name  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --delivery-delay-secs            How long a published message should be delayed for, in seconds. Must be between 0 and 42300  [number] [default: 0]
      --message-retention-period-secs  How long to retain a message in the queue, in seconds. Must be between 60 and 1209600  [number] [default: 345600]
```

## `wrangler queues update`

```text
wrangler queues update <name>

Update a queue

POSITIONALS
  name  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --delivery-delay-secs            How long a published message should be delayed for, in seconds. Must be between 0 and 42300  [number]
      --message-retention-period-secs  How long to retain a message in the queue, in seconds. Must be between 60 and 1209600  [number]
```

## `wrangler queues delete`

```text
wrangler queues delete <name>

Delete a queue

POSITIONALS
  name  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues info`

```text
wrangler queues info <name>

Get queue information

POSITIONALS
  name  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues consumer`

```text
wrangler queues consumer

Configure queue consumers

COMMANDS
  wrangler queues consumer add <queue-name> <script-name>     Add a Queue Worker Consumer
  wrangler queues consumer remove <queue-name> <script-name>  Remove a Queue Worker Consumer
  wrangler queues consumer http                               Configure Queue HTTP Pull Consumers
  wrangler queues consumer worker                             Configure Queue Worker Consumers

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues pause-delivery`

```text
wrangler queues pause-delivery <name>

Pause message delivery for a queue

POSITIONALS
  name  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues resume-delivery`

```text
wrangler queues resume-delivery <name>

Resume message delivery for a queue

POSITIONALS
  name  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues purge`

```text
wrangler queues purge <name>

Purge messages from a queue

POSITIONALS
  name  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --force  Skip the confirmation dialog and forcefully purge the Queue  [boolean]
```

## `wrangler queues subscription`

```text
wrangler queues subscription

Manage event subscriptions for a queue

COMMANDS
  wrangler queues subscription create <queue>  Create a new event subscription for a queue
  wrangler queues subscription list <queue>    List event subscriptions for a queue
  wrangler queues subscription get <queue>     Get details about a specific event subscription
  wrangler queues subscription delete <queue>  Delete an event subscription from a queue
  wrangler queues subscription update <queue>  Update an existing event subscription

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 object`

```text
wrangler r2 object

Manage R2 objects

COMMANDS
  wrangler r2 object get <objectPath>     Fetch an object from an R2 bucket
  wrangler r2 object put <objectPath>     Create an object in an R2 bucket
  wrangler r2 object delete <objectPath>  Delete an object in an R2 bucket

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket`

```text
wrangler r2 bucket

Manage R2 buckets

COMMANDS
  wrangler r2 bucket create <name>    Create a new R2 bucket
  wrangler r2 bucket update           Update bucket state
  wrangler r2 bucket list             List R2 buckets
  wrangler r2 bucket info <bucket>    Get information about an R2 bucket
  wrangler r2 bucket delete <bucket>  Delete an R2 bucket
  wrangler r2 bucket sippy            Manage Sippy incremental migration on an R2 bucket
  wrangler r2 bucket catalog          Manage the data catalog for your R2 buckets - provides an Iceberg REST interface for query engines like Spark and PyIceberg [open-beta]
  wrangler r2 bucket notification     Manage event notification rules for an R2 bucket
  wrangler r2 bucket domain           Manage custom domains for an R2 bucket
  wrangler r2 bucket dev-url          Manage public access via the r2.dev URL for an R2 bucket
  wrangler r2 bucket lifecycle        Manage lifecycle rules for an R2 bucket
  wrangler r2 bucket cors             Manage CORS configuration for an R2 bucket
  wrangler r2 bucket lock             Manage lock rules for an R2 bucket

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 sql`

```text
wrangler r2 sql

Send queries and manage R2 SQL [open-beta]

COMMANDS
  wrangler r2 sql query <warehouse> <query>  Execute SQL query against R2 Data Catalog [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler d1 create`

```text
wrangler d1 create <name>

Creates a new D1 database, and provides the binding and UUID that you will put in your config file

POSITIONALS
  name  The name of the new D1 database  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --location       A hint for the primary location of the new DB. Options:
                       	weur: Western Europe
                       	eeur: Eastern Europe
                       	apac: Asia Pacific
                       	oc: Oceania
                       	wnam: Western North America
                       	enam: Eastern North America
  [string] [choices: "weur", "eeur", "apac", "oc", "wnam", "enam"]
      --jurisdiction   The location to restrict the D1 database to run and store data within to comply with local regulations. Note that if jurisdictions are set, the location hint is ignored. Options:
                       	eu: The European Union
                       	fedramp: FedRAMP-compliant data centers  [string] [choices: "eu", "fedramp"]
      --use-remote     Use a remote binding when adding the newly created resource to your config  [boolean]
      --update-config  Automatically update your config file with the newly added resource  [boolean]
      --binding        The binding name of this resource in your Worker  [string]

This command acts on remote D1 Databases.
```

## `wrangler d1 info`

```text
wrangler d1 info <name>

Get information about a D1 database, including the current database size and state

POSITIONALS
  name  The name of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  Return output as clean JSON  [boolean] [default: false]

This command acts on remote D1 Databases.
```

## `wrangler d1 list`

```text
wrangler d1 list

List all D1 databases in your account

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  Return output as clean JSON  [boolean] [default: false]

This command acts on remote D1 Databases.
```

## `wrangler d1 delete`

```text
wrangler d1 delete <name>

Delete a D1 database

POSITIONALS
  name  The name or binding of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --skip-confirmation  Skip confirmation  [boolean] [default: false]

This command acts on remote D1 Databases.
```

## `wrangler d1 execute`

```text
wrangler d1 execute <database>

Execute a command or SQL file

POSITIONALS
  database  The name or binding of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --command     The SQL query you wish to execute, or multiple queries separated by ';'  [string]
      --file        A .sql file to ingest  [string]
  -y, --yes         Answer "yes" to any prompts  [boolean]
      --local       Execute commands/files against a local DB for use with wrangler dev  [boolean]
      --remote      Execute commands/files against a remote D1 database for use with remote bindings or your deployed Worker  [boolean]
      --persist-to  Specify directory to use for local persistence (for use with --local)  [string]
      --json        Return output as clean JSON  [boolean] [default: false]
      --preview     Execute commands/files against a preview D1 database  [boolean] [default: false]

You must provide either --command or --file for this command to run successfully.
```

## `wrangler d1 export`

```text
wrangler d1 export <name>

Export the contents or schema of your database as a .sql file

POSITIONALS
  name  The name of the D1 database to export  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --local      Export from your local DB you use with wrangler dev  [boolean]
      --remote     Export from a remote D1 database  [boolean]
      --output     Path to the SQL file for your export  [string] [required]
      --table      Specify which tables to include in export  [string]
      --no-schema  Only output table contents, not the DB schema  [boolean]
      --no-data    Only output table schema, not the contents of the DBs themselves  [boolean]
```

## `wrangler d1 time-travel`

```text
wrangler d1 time-travel

Use Time Travel to restore, fork or copy a database at a specific point-in-time

COMMANDS
  wrangler d1 time-travel info <database>     Retrieve information about a database at a specific point-in-time using Time Travel
  wrangler d1 time-travel restore <database>  Restore a database back to a specific point-in-time

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler d1 migrations`

```text
wrangler d1 migrations

Interact with D1 migrations

COMMANDS
  wrangler d1 migrations create <database> <message>  Create a new migration
  wrangler d1 migrations list <database>              View a list of unapplied migration files
  wrangler d1 migrations apply <database>             Apply any unapplied D1 migrations

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler d1 insights`

```text
wrangler d1 insights <name>

Get information about the queries run on a D1 database [experimental]

POSITIONALS
  name  The name of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --timePeriod      Fetch data from now to the provided time period  [string] [default: "1d"]
      --sort-type       Choose the operation you want to sort insights by  [string] [choices: "sum", "avg"] [default: "sum"]
      --sort-by         Choose the field you want to sort insights by  [string] [choices: "time", "reads", "writes", "count"] [default: "time"]
      --sort-direction  Choose a sort direction  [string] [choices: "ASC", "DESC"] [default: "DESC"]
      --limit           fetch insights about the first X queries  [number] [default: 5]
      --json            return output as clean JSON  [boolean] [default: false]

This command acts on remote D1 Databases.
```

## `wrangler vectorize create`

```text
wrangler vectorize create <name>

Create a Vectorize index

POSITIONALS
  name  The name of the Vectorize index to create (must be unique).  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --dimensions     The dimension size to configure this index for, based on the output dimensions of your ML model.  [number]
      --metric         The distance metric to use for searching within the index.  [string] [choices: "euclidean", "cosine", "dot-product"]
      --preset         The name of an preset representing an embeddings model: Vectorize will configure the dimensions and distance metric for you when provided.  [string] [choices: "@cf/baai/bge-small-en-v1.5", "@cf/baai/bge-base-en-v1.5", "@cf/baai/bge-large-en-v1.5", "openai/text-embedding-ada-002", "cohere/embed-multilingual-v2.0"]
      --description    An optional description for this index.  [string]
      --json           Return output as clean JSON  [boolean] [default: false]
      --deprecated-v1  Create a deprecated Vectorize V1 index. This is not recommended and indexes created with this option need all other Vectorize operations to have this option enabled.  [deprecated] [boolean] [default: false]
      --use-remote     Use a remote binding when adding the newly created resource to your config  [boolean]
      --update-config  Automatically update your config file with the newly added resource  [boolean]
      --binding        The binding name of this resource in your Worker  [string]
```

## `wrangler vectorize delete`

```text
wrangler vectorize delete <name>

Delete a Vectorize index

POSITIONALS
  name  The name of the Vectorize index  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --force          Skip confirmation  [boolean] [default: false]
      --deprecated-v1  Delete a deprecated Vectorize V1 index.  [boolean] [default: false]
```

## `wrangler vectorize get`

```text
wrangler vectorize get <name>

Get a Vectorize index by name

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json           Return output as clean JSON  [boolean] [default: false]
      --deprecated-v1  Fetch a deprecated V1 Vectorize index. This must be enabled if the index was created with V1 option.  [boolean] [default: false]
```

## `wrangler vectorize list`

```text
wrangler vectorize list

List your Vectorize indexes

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json           Return output as clean JSON  [boolean] [default: false]
      --deprecated-v1  List deprecated Vectorize V1 indexes for your account.  [boolean] [default: false]
```

## `wrangler vectorize list-vectors`

```text
wrangler vectorize list-vectors <name>

List vector identifiers in a Vectorize index

POSITIONALS
  name  The name of the Vectorize index  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --count   Maximum number of vectors to return (1-1000)  [number]
      --cursor  Cursor for pagination to get the next page of results  [string]
      --json    Return output as clean JSON  [boolean] [default: false]

EXAMPLES
  wrangler vectorize list-vectors my-index                  List vector identifiers in the index 'my-index'
  wrangler vectorize list-vectors my-index --count 50       List up to 50 vector identifiers
  wrangler vectorize list-vectors my-index --cursor abc123  Continue listing from a specific cursor position
```

## `wrangler vectorize query`

```text
wrangler vectorize query <name>

Query a Vectorize index

POSITIONALS
  name  The name of the Vectorize index  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --vector           Vector to query the Vectorize Index  [number]
      --vector-id        Identifier for a vector in the index against which the index should be queried  [string]
      --top-k            The number of results (nearest neighbors) to return  [number] [default: 5]
      --return-values    Specify if the vector values should be included in the results  [boolean] [default: false]
      --return-metadata  Specify if the vector metadata should be included in the results  [string] [choices: "all", "indexed", "none"] [default: "none"]
      --namespace        Filter the query results based on this namespace  [string]
      --filter           Filter the query results based on this metadata filter.  [string]

EXAMPLES
  wrangler vectorize query --vector 1 2 3 0.5 1.25 6                                                                      Query the Vectorize Index by vector
  wrangler vectorize query --vector $(jq -r '.[]' data.json | xargs)                                                      Query the Vectorize Index by vector from a json file that contains data in the format [1, 2, 3].
  wrangler vectorize query --filter '{ 'p1': 'abc', 'p2': { '$ne': true }, 'p3': 10, 'p4': false, 'nested.p5': 'abcd' }'  Filter the query results.
```

## `wrangler vectorize insert`

```text
wrangler vectorize insert <name>

Insert vectors into a Vectorize index

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --file           A file containing line separated json (ndjson) vector objects.  [string] [required]
      --batch-size     Number of vector records to include when sending to the Cloudflare API.  [number] [default: 1000]
      --json           return output as clean JSON  [boolean] [default: false]
      --deprecated-v1  Insert into a deprecated V1 Vectorize index. This must be enabled if the index was created with the V1 option.  [boolean] [default: false]
```

## `wrangler vectorize upsert`

```text
wrangler vectorize upsert <name>

Upsert vectors into a Vectorize index

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --file        A file containing line separated json (ndjson) vector objects.  [string] [required]
      --batch-size  Number of vector records to include in a single upsert batch when sending to the Cloudflare API.  [number] [default: 5000]
      --json        return output as clean JSON  [boolean] [default: false]
```

## `wrangler vectorize get-vectors`

```text
wrangler vectorize get-vectors <name>

Get vectors from a Vectorize index

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --ids  Vector identifiers to be fetched from the Vectorize Index. Example: `--ids a 'b' 1 '2'`  [array] [required]
```

## `wrangler vectorize delete-vectors`

```text
wrangler vectorize delete-vectors <name>

Delete vectors in a Vectorize index

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --ids  Vector identifiers to be deleted from the Vectorize Index.  Example: `--ids a 'b' 1 '2'`  [array] [required]
```

## `wrangler vectorize info`

```text
wrangler vectorize info <name>

Get additional details about the index

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  return output as clean JSON  [boolean] [default: false]
```

## `wrangler vectorize create-metadata-index`

```text
wrangler vectorize create-metadata-index <name>

Enable metadata filtering on the specified property

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --propertyName  The name of the metadata property to index.  [string] [required]
      --type          The type of metadata property to index. Valid types are 'string', 'number' and 'boolean'.  [string] [required] [choices: "string", "number", "boolean"]
```

## `wrangler vectorize list-metadata-index`

```text
wrangler vectorize list-metadata-index <name>

List metadata properties on which metadata filtering is enabled

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  return output as clean JSON  [boolean] [default: false]
```

## `wrangler vectorize delete-metadata-index`

```text
wrangler vectorize delete-metadata-index <name>

Delete metadata indexes

POSITIONALS
  name  The name of the Vectorize index.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --propertyName  The name of the metadata property to index.  [string] [required]
```

## `wrangler hyperdrive create`

```text
wrangler hyperdrive create <name>

Create a Hyperdrive config

Configure using a connection string
      --connection-string  The connection string for the database you want Hyperdrive to connect to - ex: protocol://user:password@host:port/database  [string]

Configure using individual parameters [conflicts with --connection-string]
      --origin-host, --host          The host of the origin database  [string]
      --origin-port, --port          The port number of the origin database  [number]
      --origin-scheme, --scheme      The scheme used to connect to the origin database  [string] [choices: "postgres", "postgresql", "mysql"] [default: "postgresql"]
      --database                     The name of the database within the origin database  [string]
      --origin-user, --user          The username used to connect to the origin database  [string]
      --origin-password, --password  The password used to connect to the origin database  [string]

Hyperdrive over Access [conflicts with --connection-string, --origin-port]
      --access-client-id      The Client ID of the Access token to use when connecting to the origin database  [string]
      --access-client-secret  The Client Secret of the Access token to use when connecting to the origin database  [string]

Caching Options
      --caching-disabled  Disables the caching of SQL responses  [boolean]
      --max-age           Specifies max duration for which items should persist in the cache, cannot be set when caching is disabled  [number]
      --swr               Indicates the number of seconds cache may serve the response after it becomes stale, cannot be set when caching is disabled  [number]

POSITIONALS
  name  The name of the Hyperdrive config  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --ca-certificate-id, --ca-certificate-uuid      Sets custom CA certificate when connecting to origin database. Must be valid UUID of already uploaded CA certificate.  [string]
      --mtls-certificate-id, --mtls-certificate-uuid  Sets custom mTLS client certificates when connecting to origin database. Must be valid UUID of already uploaded public/private key certificates.  [string]
      --sslmode                                       Sets CA sslmode for connecting to database.  [string] [choices: "require", "verify-ca", "verify-full"]
      --origin-connection-limit                       The (soft) maximum number of connections that Hyperdrive may establish to the origin database  [number]
      --binding                                       The binding name of this resource in your Worker  [string]
      --use-remote                                    Use a remote binding when adding the newly created resource to your config  [boolean]
      --update-config                                 Automatically update your config file with the newly added resource  [boolean]
```

## `wrangler hyperdrive delete`

```text
wrangler hyperdrive delete <id>

Delete a Hyperdrive config

POSITIONALS
  id  The ID of the Hyperdrive config  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler hyperdrive get`

```text
wrangler hyperdrive get <id>

Get a Hyperdrive config

POSITIONALS
  id  The ID of the Hyperdrive config  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler hyperdrive list`

```text
wrangler hyperdrive list

List Hyperdrive configs

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler hyperdrive update`

```text
wrangler hyperdrive update <id>

Update a Hyperdrive config

Configure using a connection string
      --connection-string  The connection string for the database you want Hyperdrive to connect to - ex: protocol://user:password@host:port/database  [string]

Configure using individual parameters [conflicts with --connection-string]
      --origin-host, --host          The host of the origin database  [string]
      --origin-port, --port          The port number of the origin database  [number]
      --origin-scheme, --scheme      The scheme used to connect to the origin database  [string] [choices: "postgres", "postgresql", "mysql"]
      --database                     The name of the database within the origin database  [string]
      --origin-user, --user          The username used to connect to the origin database  [string]
      --origin-password, --password  The password used to connect to the origin database  [string]

Hyperdrive over Access [conflicts with --connection-string, --origin-port]
      --access-client-id      The Client ID of the Access token to use when connecting to the origin database  [string]
      --access-client-secret  The Client Secret of the Access token to use when connecting to the origin database  [string]

Caching Options
      --caching-disabled  Disables the caching of SQL responses  [boolean]
      --max-age           Specifies max duration for which items should persist in the cache, cannot be set when caching is disabled  [number]
      --swr               Indicates the number of seconds cache may serve the response after it becomes stale, cannot be set when caching is disabled  [number]

POSITIONALS
  id  The ID of the Hyperdrive config  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name                                          Give your config a new name  [string]
      --ca-certificate-id, --ca-certificate-uuid      Sets custom CA certificate when connecting to origin database. Must be valid UUID of already uploaded CA certificate.  [string]
      --mtls-certificate-id, --mtls-certificate-uuid  Sets custom mTLS client certificates when connecting to origin database. Must be valid UUID of already uploaded public/private key certificates.  [string]
      --sslmode                                       Sets CA sslmode for connecting to database.  [string] [choices: "require", "verify-ca", "verify-full"]
      --origin-connection-limit                       The (soft) maximum number of connections that Hyperdrive may establish to the origin database  [number]
```

## `wrangler cert upload`

```text
wrangler cert upload

Upload a new cert [open-beta]

COMMANDS
  wrangler cert upload mtls-certificate       Upload an mTLS certificate
  wrangler cert upload certificate-authority  Upload a CA certificate chain

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler cert list`

```text
wrangler cert list

List uploaded mTLS certificates

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler cert delete`

```text
wrangler cert delete

Delete an mTLS certificate

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --id    The id of the mTLS certificate to delete  [string]
      --name  The name of the mTLS certificate record to delete  [string]
```

## `wrangler pages dev`

```text
wrangler pages dev [directory] [command]

Develop your full-stack Pages application locally

POSITIONALS
  directory  The directory of static assets to serve  [string]
  command    The proxy command to run  [deprecated]  [string]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --compatibility-date                         Date to use for compatibility checks  [string]
      --compatibility-flags, --compatibility-flag  Flags to use for compatibility checks  [array]
      --ip                                         The IP address to listen on  [string]
      --port                                       The port to listen on (serve from)  [number]
      --inspector-port                             Port for devtools to connect to  [number]
      --proxy                                      The port to proxy (where the static assets are served)  [deprecated] [number]
      --script-path                                The location of the single Worker script if not using functions  [default: _worker.js]  [deprecated] [string]
      --no-bundle                                  Whether to run bundling on `_worker.js`  [boolean]
  -b, --binding                                    Bind variable/secret (KEY=VALUE)  [array]
  -k, --kv                                         KV namespace to bind (--kv KV_BINDING)  [array]
      --d1                                         D1 database to bind (--d1 D1_BINDING)  [array]
  -o, --do                                         Durable Object to bind (--do DO_BINDING=CLASS_NAME@SCRIPT_NAME)  [array]
      --r2                                         R2 bucket to bind (--r2 R2_BINDING)  [array]
      --ai                                         AI to bind (--ai AI_BINDING)  [string]
      --version-metadata                           Worker Version metadata (--version-metadata VERSION_METADATA_BINDING)  [string]
      --service                                    Service to bind (--service SERVICE=SCRIPT_NAME)  [array]
      --live-reload                                Auto reload HTML pages when change is detected  [boolean] [default: false]
      --local-protocol                             Protocol to listen to requests on, defaults to http.  [choices: "http", "https"]
      --https-key-path                             Path to a custom certificate key  [string]
      --https-cert-path                            Path to a custom certificate  [string]
      --persist-to                                 Specify directory to use for local persistence (defaults to .wrangler/state)  [string]
      --log-level                                  Specify logging level  [choices: "debug", "info", "log", "warn", "error", "none"]
      --show-interactive-dev-session               Show interactive dev session (defaults to true if the terminal supports interactivity)  [boolean]
```

## `wrangler pages functions`

```text
wrangler pages functions

Helpers related to Pages Functions

COMMANDS
  wrangler pages functions build [directory]  Compile a folder of Pages Functions into a single Worker

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pages project`

```text
wrangler pages project

Interact with your Pages projects

COMMANDS
  wrangler pages project list                   List your Cloudflare Pages projects
  wrangler pages project create <project-name>  Create a new Cloudflare Pages project
  wrangler pages project delete <project-name>  Delete a Cloudflare Pages project

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pages deployment`

```text
wrangler pages deployment

Interact with the deployments of a project

COMMANDS
  wrangler pages deployment list                List deployments in your Cloudflare Pages project
  wrangler pages deployment create [directory]  Deploy a directory of static assets as a Pages deployment

                                                Alias for "wrangler pages deploy".
  wrangler pages deployment tail [deployment]   Start a tailing session for a project's deployment and livestream logs from your Functions

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pages deploy`

```text
wrangler pages deploy [directory]

Deploy a directory of static assets as a Pages deployment

POSITIONALS
  directory  The directory of static files to upload  [string]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name        The name of the project you want to deploy to  [string]
      --branch              The name of the branch you want to deploy to  [string]
      --commit-hash         The SHA to attach to this deployment  [string]
      --commit-message      The commit message to attach to this deployment  [string]
      --commit-dirty        Whether or not the workspace should be considered dirty for this deployment  [boolean]
      --skip-caching        Skip asset caching which speeds up builds  [boolean]
      --no-bundle           Whether to run bundling on `_worker.js` before deploying  [boolean]
      --upload-source-maps  Whether to upload any server-side sourcemaps with this deployment  [boolean] [default: false]
```

## `wrangler pages secret`

```text
wrangler pages secret

Generate a secret that can be referenced in a Pages project

COMMANDS
  wrangler pages secret put <key>     Create or update a secret variable for a Pages project
  wrangler pages secret bulk [file]   Bulk upload secrets for a Pages project
  wrangler pages secret delete <key>  Delete a secret variable from a Pages project
  wrangler pages secret list          List all secrets for a Pages project

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pages download`

```text
wrangler pages download

Download settings from your project

COMMANDS
  wrangler pages download config [projectName]  Download your Pages project config as a Wrangler configuration file [experimental]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler mtls-certificate upload`

```text
wrangler mtls-certificate upload

Upload an mTLS certificate

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --cert  The path to a certificate file (.pem) containing a chain of certificates to upload  [string] [required]
      --key   The path to a file containing the private key for your leaf certificate  [string] [required]
      --name  The name for the certificate  [string]
```

## `wrangler mtls-certificate list`

```text
wrangler mtls-certificate list

List uploaded mTLS certificates

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler mtls-certificate delete`

```text
wrangler mtls-certificate delete

Delete an mTLS certificate

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --id    The id of the mTLS certificate to delete  [string]
      --name  The name of the mTLS certificate record to delete  [string]
```

## `wrangler containers build`

```text
wrangler containers build PATH

Build a container image

POSITIONALS
  PATH  Path for the directory containing the Dockerfile to build  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -t, --tag             Name and optionally a tag (format: "name:tag")  [string] [required]
      --path-to-docker  Path to your docker binary if it's not on $PATH  [string] [default: "docker"]
  -p, --push            Push the built image to Cloudflare's managed registry  [boolean] [default: false]
```

## `wrangler containers push`

```text
wrangler containers push TAG

Push a tagged image to a Cloudflare managed registry

POSITIONALS
  TAG  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --path-to-docker  Path to your docker binary if it's not on $PATH  [string] [default: "docker"]
```

## `wrangler containers images`

```text
wrangler containers images

Perform operations on images in your Cloudflare managed registry

COMMANDS
  wrangler containers images list            List images in the Cloudflare managed registry  [aliases: ls]
  wrangler containers images delete <image>  Remove an image from the Cloudflare managed registry  [aliases: rm]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler containers info`

```text
wrangler containers info ID

Get information about a specific container

POSITIONALS
  ID  id of the containers to view  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler containers list`

```text
wrangler containers list

List containers

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler containers delete`

```text
wrangler containers delete ID

Delete a container

POSITIONALS
  ID  id of the containers to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pubsub namespace`

```text
wrangler pubsub namespace

Manage your Pub/Sub Namespaces

COMMANDS
  wrangler pubsub namespace create <name>    Create a new Pub/Sub Namespace
  wrangler pubsub namespace list             List your existing Pub/Sub Namespaces
  wrangler pubsub namespace delete <name>    Delete a Pub/Sub Namespace
  wrangler pubsub namespace describe <name>  Describe a Pub/Sub Namespace

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker`

```text
wrangler pubsub broker

Interact with your Pub/Sub Brokers

COMMANDS
  wrangler pubsub broker create <name>            Create a new Pub/Sub Broker
  wrangler pubsub broker update <name>            Update an existing Pub/Sub Broker's configuration.
  wrangler pubsub broker list                     List the Pub/Sub Brokers within a Namespace
  wrangler pubsub broker delete <name>            Delete an existing Pub/Sub Broker
  wrangler pubsub broker describe <name>          Describe an existing Pub/Sub Broker.
  wrangler pubsub broker issue <name>             Issue new client credentials for a specific Pub/Sub Broker.
  wrangler pubsub broker revoke <name>            Revoke a set of active client credentials associated with the given Broker
  wrangler pubsub broker unrevoke <name>          Restore access to a set of previously revoked client credentials.
  wrangler pubsub broker show-revocations <name>  Show all previously revoked client credentials.
  wrangler pubsub broker public-keys <name>       Show the public keys used for verifying on-publish hooks and credentials for a Broker.

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler dispatch-namespace list`

```text
wrangler dispatch-namespace list

List all dispatch namespaces

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler dispatch-namespace get`

```text
wrangler dispatch-namespace get <name>

Get information about a dispatch namespace

POSITIONALS
  name  Name of the dispatch namespace  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler dispatch-namespace create`

```text
wrangler dispatch-namespace create <name>

Create a dispatch namespace

POSITIONALS
  name  Name of the dispatch namespace  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler dispatch-namespace delete`

```text
wrangler dispatch-namespace delete <name>

Delete a dispatch namespace

POSITIONALS
  name  Name of the dispatch namespace  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler dispatch-namespace rename`

```text
wrangler dispatch-namespace rename <oldName> <newName>

Rename a dispatch namespace

POSITIONALS
  oldName  Name of the dispatch namespace  [string] [required]
  newName  New name of the dispatch namespace  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler ai models`

```text
wrangler ai models

List catalog models

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  Return output as clean JSON  [boolean] [default: false]
```

## `wrangler ai finetune`

```text
wrangler ai finetune

Interact with finetune files

COMMANDS
  wrangler ai finetune list                                               List your finetune files
  wrangler ai finetune create <model_name> <finetune_name> <folder_path>  Create finetune and upload assets

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler secrets-store store`

```text
wrangler secrets-store store

🔐 Manage Stores within the Secrets Store [open-beta]

COMMANDS
  wrangler secrets-store store create <name>      Create a store within an account [open-beta]
  wrangler secrets-store store delete <store-id>  Delete a store within an account [open-beta]
  wrangler secrets-store store list               List stores within an account [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler secrets-store secret`

```text
wrangler secrets-store secret

🔐 Manage Secrets within the Secrets Store [open-beta]

COMMANDS
  wrangler secrets-store secret create <store-id>     Create a secret within a store [open-beta]
  wrangler secrets-store secret list <store-id>       List secrets within a store [open-beta]
  wrangler secrets-store secret get <store-id>        Get a secret within a store [open-beta]
  wrangler secrets-store secret update <store-id>     Update a secret within a store [open-beta]
  wrangler secrets-store secret delete <store-id>     Delete a secret within a store [open-beta]
  wrangler secrets-store secret duplicate <store-id>  Duplicate a secret within a store [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler workflows list`

```text
wrangler workflows list

List Workflows associated to account

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page      Show a sepecific page from the listing, can configure page size using "per-page"  [number] [default: 1]
      --per-page  Configure the maximum number of workflows to show per page  [number]
```

## `wrangler workflows describe`

```text
wrangler workflows describe <name>

Describe Workflow resource

POSITIONALS
  name  Name of the workflow  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler workflows delete`

```text
wrangler workflows delete <name>

Delete workflow - when deleting a workflow, it will also delete it's own instances

POSITIONALS
  name  Name of the workflow  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler workflows trigger`

```text
wrangler workflows trigger <name> [params]

Trigger a workflow, creating a new instance. Can optionally take a JSON string to pass a parameter into the workflow instance

POSITIONALS
  name    Name of the workflow  [string] [required]
  params  Params for the workflow instance, encoded as a JSON string  [string] [default: ""]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --id  Custom instance ID, if not provided it will default to a random UUIDv4  [string]
```

## `wrangler workflows instances`

```text
wrangler workflows instances

Manage Workflow instances

COMMANDS
  wrangler workflows instances list <name>            Instance related commands (list, describe, terminate, pause, resume)
  wrangler workflows instances describe <name> [id]   Describe a workflow instance - see its logs, retries and errors
  wrangler workflows instances terminate <name> <id>  Terminate a workflow instance
  wrangler workflows instances restart <name> <id>    Restart a workflow instance
  wrangler workflows instances pause <name> <id>      Pause a workflow instance
  wrangler workflows instances resume <name> <id>     Resume a workflow instance

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pipelines setup`

```text
wrangler pipelines setup

Interactive setup for a complete pipeline [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name  Pipeline name  [string]
```

## `wrangler pipelines create`

```text
wrangler pipelines create <pipeline>

Create a new pipeline [open-beta]

POSITIONALS
  pipeline  The name of the pipeline to create  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --sql       Inline SQL query for the pipeline  [string]
      --sql-file  Path to file containing SQL query for the pipeline  [string]
```

## `wrangler pipelines list`

```text
wrangler pipelines list

List all pipelines [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page      Page number for pagination  [number] [default: 1]
      --per-page  Number of pipelines per page  [number] [default: 20]
      --json      Output in JSON format  [boolean] [default: false]
```

## `wrangler pipelines get`

```text
wrangler pipelines get <pipeline>

Get details about a specific pipeline [open-beta]

POSITIONALS
  pipeline  The ID of the pipeline to retrieve  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  Output in JSON format  [boolean] [default: false]
```

## `wrangler pipelines update`

```text
wrangler pipelines update <pipeline>

Update a pipeline configuration (legacy pipelines only) [open-beta]

Source settings
      --source             Space separated list of allowed sources. Options are 'http' or 'worker'  [array]
      --require-http-auth  Require Cloudflare API Token for HTTPS endpoint authentication  [boolean]
      --cors-origins       CORS origin allowlist for HTTP endpoint (use * for any origin). Defaults to an empty array  [array]

Batch hints
      --batch-max-mb       Maximum batch size in megabytes before flushing. Defaults to 100 MB if unset. Minimum: 1, Maximum: 100  [number]
      --batch-max-rows     Maximum number of rows per batch before flushing. Defaults to 10,000,000 if unset. Minimum: 100, Maximum: 10,000,000  [number]
      --batch-max-seconds  Maximum age of batch in seconds before flushing. Defaults to 300 if unset. Minimum: 1, Maximum: 300  [number]

Destination settings
      --r2-bucket             Destination R2 bucket name  [string]
      --r2-access-key-id      R2 service Access Key ID for authentication. Leave empty for OAuth confirmation.  [string]
      --r2-secret-access-key  R2 service Secret Access Key for authentication. Leave empty for OAuth confirmation.  [string]
      --r2-prefix             Prefix for storing files in the destination bucket. Default is no prefix  [string]
      --compression           Compression format for output files  [string] [choices: "none", "gzip", "deflate"]

Pipeline settings
      --shard-count  Number of shards for the pipeline. More shards handle higher request volume; fewer shards produce larger output files. Defaults to 2 if unset. Minimum: 1, Maximum: 15  [number]

POSITIONALS
  pipeline  The name of the legacy pipeline to update  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pipelines delete`

```text
wrangler pipelines delete <pipeline>

Delete a pipeline [open-beta]

POSITIONALS
  pipeline  The ID or name of the pipeline to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --force  Skip confirmation  [boolean] [default: false]
```

## `wrangler pipelines streams`

```text
wrangler pipelines streams

Manage streams for pipelines [open-beta]

COMMANDS
  wrangler pipelines streams create <stream>  Create a new stream [open-beta]
  wrangler pipelines streams list             List all streams [open-beta]
  wrangler pipelines streams get <stream>     Get details about a specific stream [open-beta]
  wrangler pipelines streams delete <stream>  Delete a stream [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pipelines sinks`

```text
wrangler pipelines sinks

Manage sinks for pipelines [open-beta]

COMMANDS
  wrangler pipelines sinks create <sink>  Create a new sink [open-beta]
  wrangler pipelines sinks list           List all sinks [open-beta]
  wrangler pipelines sinks get <sink>     Get details about a specific sink [open-beta]
  wrangler pipelines sinks delete <sink>  Delete a sink [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler vpc service`

```text
wrangler vpc service

🔗 Manage VPC services

COMMANDS
  wrangler vpc service create <name>        Create a new VPC service
  wrangler vpc service delete <service-id>  Delete a VPC service
  wrangler vpc service get <service-id>     Get a VPC service
  wrangler vpc service list                 List VPC services
  wrangler vpc service update <service-id>  Update a VPC service

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler versions secret put`

```text
wrangler versions secret put [key]

Create or update a secret variable for a Worker

POSITIONALS
  key  The variable name to be accessible in the Worker  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name     Name of the Worker  [string]
      --message  Description of this deployment  [string]
      --tag      A tag for this version  [string]
```

## `wrangler versions secret bulk`

```text
wrangler versions secret bulk [file]

Create or update a secret variable for a Worker

POSITIONALS
  file  The file of key-value pairs to upload, as JSON in form {"key": value, ...} or .dev.vars file in the form KEY=VALUE  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name     Name of the Worker  [string]
      --message  Description of this deployment  [string]
      --tag      A tag for this version  [string]
```

## `wrangler versions secret delete`

```text
wrangler versions secret delete [key]

Delete a secret variable from a Worker

POSITIONALS
  key  The variable name to be accessible in the Worker  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name     Name of the Worker  [string]
      --message  Description of this deployment  [string]
      --tag      A tag for this version  [string]
```

## `wrangler versions secret list`

```text
wrangler versions secret list

List the secrets currently deployed

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name            Name of the Worker  [string]
      --latest-version  Only show the latest version  [boolean] [default: false]
```

## `wrangler kv namespace create`

```text
wrangler kv namespace create <namespace>

Create a new namespace

POSITIONALS
  namespace  The name of the new namespace  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --preview        Interact with a preview namespace  [boolean]
      --use-remote     Use a remote binding when adding the newly created resource to your config  [boolean]
      --update-config  Automatically update your config file with the newly added resource  [boolean]
      --binding        The binding name of this resource in your Worker  [string]
```

## `wrangler kv namespace list`

```text
wrangler kv namespace list

Output a list of all KV namespaces associated with your account id

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler kv namespace delete`

```text
wrangler kv namespace delete

Delete a given namespace.

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --binding            The binding name to the namespace to delete from  [string]
      --namespace-id       The id of the namespace to delete  [string]
      --preview            Interact with a preview namespace  [boolean]
  -y, --skip-confirmation  Skip confirmation  [boolean] [default: false]
```

## `wrangler kv namespace rename`

```text
wrangler kv namespace rename [old-name]

Rename a KV namespace

POSITIONALS
  old-name  The current name (title) of the namespace to rename  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace-id  The id of the namespace to rename  [string]
      --new-name      The new name for the namespace  [string] [required]
```

## `wrangler kv key put`

```text
wrangler kv key put <key> [value]

Write a single key/value pair to the given namespace

POSITIONALS
  key    The key to write to  [string] [required]
  value  The value to write  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --path          Read value from the file at a given path  [string]
      --binding       The binding name to the namespace to write to  [string]
      --namespace-id  The id of the namespace to write to  [string]
      --preview       Interact with a preview namespace  [boolean]
      --ttl           Time for which the entries should be visible  [number]
      --expiration    Time since the UNIX epoch after which the entry expires  [number]
      --metadata      Arbitrary JSON that is associated with a key  [string]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
```

## `wrangler kv key list`

```text
wrangler kv key list

Output a list of all keys in a given namespace

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --binding       The binding name to the namespace to list  [string]
      --namespace-id  The id of the namespace to list  [string]
      --preview       Interact with a preview namespace  [boolean] [default: false]
      --prefix        A prefix to filter listed keys  [string]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
```

## `wrangler kv key get`

```text
wrangler kv key get <key>

Read a single value by key from the given namespace

POSITIONALS
  key  The key value to get.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --text          Decode the returned value as a utf8 string  [boolean] [default: false]
      --binding       The binding name to the namespace to get from  [string]
      --namespace-id  The id of the namespace to get from  [string]
      --preview       Interact with a preview namespace  [boolean] [default: false]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
```

## `wrangler kv key delete`

```text
wrangler kv key delete <key>

Remove a single key value pair from the given namespace

POSITIONALS
  key  The key value to delete.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --binding       The binding name to the namespace to delete from  [string]
      --namespace-id  The id of the namespace to delete from  [string]
      --preview       Interact with a preview namespace  [boolean]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
```

## `wrangler kv bulk get`

```text
wrangler kv bulk get <filename>

Gets multiple key-value pairs from a namespace [open-beta]

POSITIONALS
  filename  The file containing the keys to get  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --binding       The binding name to the namespace to get from  [string]
      --namespace-id  The id of the namespace to get from  [string]
      --preview       Interact with a preview namespace  [boolean] [default: false]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
```

## `wrangler kv bulk put`

```text
wrangler kv bulk put <filename>

Upload multiple key-value pairs to a namespace

POSITIONALS
  filename  The file containing the key/value pairs to write  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --binding       The binding name to the namespace to write to  [string]
      --namespace-id  The id of the namespace to write to  [string]
      --preview       Interact with a preview namespace  [boolean]
      --ttl           Time for which the entries should be visible  [number]
      --expiration    Time since the UNIX epoch after which the entry expires  [number]
      --metadata      Arbitrary JSON that is associated with a key  [string]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
```

## `wrangler kv bulk delete`

```text
wrangler kv bulk delete <filename>

Delete multiple key-value pairs from a namespace

POSITIONALS
  filename  The file containing the keys to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -f, --force         Do not ask for confirmation before deleting  [boolean]
      --binding       The binding name to the namespace to delete from  [string]
      --namespace-id  The id of the namespace to delete from  [string]
      --preview       Interact with a preview namespace  [boolean]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
```

## `wrangler queues consumer add`

```text
wrangler queues consumer add <queue-name> <script-name>

Add a Queue Worker Consumer

POSITIONALS
  queue-name   Name of the queue to configure  [string] [required]
  script-name  Name of the consumer script  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --batch-size         Maximum number of messages per batch  [number]
      --batch-timeout      Maximum number of seconds to wait to fill a batch with messages  [number]
      --message-retries    Maximum number of retries for each message  [number]
      --dead-letter-queue  Queue to send messages that failed to be consumed  [string]
      --max-concurrency    The maximum number of concurrent consumer Worker invocations. Must be a positive integer  [number]
      --retry-delay-secs   The number of seconds to wait before retrying a message  [number]
```

## `wrangler queues consumer remove`

```text
wrangler queues consumer remove <queue-name> <script-name>

Remove a Queue Worker Consumer

POSITIONALS
  queue-name   Name of the queue to configure  [string] [required]
  script-name  Name of the consumer script  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues consumer http`

```text
wrangler queues consumer http

Configure Queue HTTP Pull Consumers

COMMANDS
  wrangler queues consumer http add <queue-name>     Add a Queue HTTP Pull Consumer
  wrangler queues consumer http remove <queue-name>  Remove a Queue HTTP Pull Consumer

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues consumer worker`

```text
wrangler queues consumer worker

Configure Queue Worker Consumers

COMMANDS
  wrangler queues consumer worker add <queue-name> <script-name>     Add a Queue Worker Consumer
  wrangler queues consumer worker remove <queue-name> <script-name>  Remove a Queue Worker Consumer

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues subscription create`

```text
wrangler queues subscription create <queue>

Create a new event subscription for a queue

POSITIONALS
  queue  The name of the queue to create the subscription for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --source         The event source type  [string] [required] [choices: "kv", "r2", "superSlurper", "vectorize", "workersAi.model", "workersBuilds.worker", "workflows.workflow"]
      --events         Comma-separated list of event types to subscribe to  [string] [required]
      --name           Name for the subscription (auto-generated if not provided)  [string]
      --enabled        Whether the subscription should be active  [boolean] [default: true]
      --model-name     Workers AI model name (required for workersAi.model source)  [string]
      --worker-name    Worker name (required for workersBuilds.worker source)  [string]
      --workflow-name  Workflow name (required for workflows.workflow source)  [string]
```

## `wrangler queues subscription list`

```text
wrangler queues subscription list <queue>

List event subscriptions for a queue

POSITIONALS
  queue  The name of the queue to list subscriptions for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page      Page number for pagination  [number] [default: 1]
      --per-page  Number of subscriptions per page  [number] [default: 20]
      --json      Output in JSON format  [boolean] [default: false]
```

## `wrangler queues subscription get`

```text
wrangler queues subscription get <queue>

Get details about a specific event subscription

POSITIONALS
  queue  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --id    The ID of the subscription to retrieve  [string] [required]
      --json  Output in JSON format  [boolean] [default: false]
```

## `wrangler queues subscription delete`

```text
wrangler queues subscription delete <queue>

Delete an event subscription from a queue

POSITIONALS
  queue  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --id     The ID of the subscription to delete  [string] [required]
  -y, --force  Skip confirmation  [boolean] [default: false]
```

## `wrangler queues subscription update`

```text
wrangler queues subscription update <queue>

Update an existing event subscription

POSITIONALS
  queue  The name of the queue  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --id       The ID of the subscription to update  [string] [required]
      --name     New name for the subscription  [string]
      --events   Comma-separated list of event types to subscribe to  [string]
      --enabled  Whether the subscription should be active  [boolean]
      --json     Output in JSON format  [boolean] [default: false]
```

## `wrangler r2 object get`

```text
wrangler r2 object get <objectPath>

Fetch an object from an R2 bucket

POSITIONALS
  objectPath  The source object path in the form of {bucket}/{key}  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -f, --file          The destination file to create  [string]
  -p, --pipe          Enables the file to be piped to a destination, rather than specified with the --file option  [boolean]
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
  -J, --jurisdiction  The jurisdiction where the object exists  [string]
```

## `wrangler r2 object put`

```text
wrangler r2 object put <objectPath>

Create an object in an R2 bucket

POSITIONALS
  objectPath  The destination object path in the form of {bucket}/{key}  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --content-type, --ct         A standard MIME type describing the format of the object data  [string]
      --content-disposition, --cd  Specifies presentational information for the object  [string]
      --content-encoding, --ce     Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field  [string]
      --content-language, --cl     The language the content is in  [string]
      --cache-control, --cc        Specifies caching behavior along the request/reply chain  [string]
      --expires                    The date and time at which the object is no longer cacheable  [string]
      --local                      Interact with local storage  [boolean]
      --remote                     Interact with remote storage  [boolean]
      --persist-to                 Directory for local persistence  [string]
  -J, --jurisdiction               The jurisdiction where the object will be created  [string]
  -s, --storage-class              The storage class of the object to be created  [string]
  -f, --file                       The path of the file to upload  [string]
  -p, --pipe                       Enables the file to be piped in, rather than specified with the --file option  [boolean]
```

## `wrangler r2 object delete`

```text
wrangler r2 object delete <objectPath>

Delete an object in an R2 bucket

POSITIONALS
  objectPath  The destination object path in the form of {bucket}/{key}  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --local         Interact with local storage  [boolean]
      --remote        Interact with remote storage  [boolean]
      --persist-to    Directory for local persistence  [string]
  -J, --jurisdiction  The jurisdiction where the object exists  [string]
```

## `wrangler r2 bucket create`

```text
wrangler r2 bucket create <name>

Create a new R2 bucket

POSITIONALS
  name  The name of the new bucket  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --location       The optional location hint that determines geographic placement of the R2 bucket  [string] [choices: "weur", "eeur", "apac", "wnam", "enam", "oc"]
  -s, --storage-class  The default storage class for objects uploaded to this bucket  [string]
  -J, --jurisdiction   The jurisdiction where the new bucket will be created  [string]
      --use-remote     Use a remote binding when adding the newly created resource to your config  [boolean]
      --update-config  Automatically update your config file with the newly added resource  [boolean]
      --binding        The binding name of this resource in your Worker  [string]
```

## `wrangler r2 bucket update`

```text
wrangler r2 bucket update

Update bucket state

COMMANDS
  wrangler r2 bucket update storage-class <name>  Update the default storage class of an existing R2 bucket

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket list`

```text
wrangler r2 bucket list

List R2 buckets

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction to list  [string]
```

## `wrangler r2 bucket info`

```text
wrangler r2 bucket info <bucket>

Get information about an R2 bucket

POSITIONALS
  bucket  The name of the bucket to retrieve info for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
      --json          Return the bucket information as JSON  [boolean] [default: false]
```

## `wrangler r2 bucket delete`

```text
wrangler r2 bucket delete <bucket>

Delete an R2 bucket

POSITIONALS
  bucket  The name of the bucket to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket sippy`

```text
wrangler r2 bucket sippy

Manage Sippy incremental migration on an R2 bucket

COMMANDS
  wrangler r2 bucket sippy enable <name>   Enable Sippy on an R2 bucket
  wrangler r2 bucket sippy disable <name>  Disable Sippy on an R2 bucket
  wrangler r2 bucket sippy get <name>      Check the status of Sippy on an R2 bucket

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket catalog`

```text
wrangler r2 bucket catalog

Manage the data catalog for your R2 buckets - provides an Iceberg REST interface for query engines like Spark and PyIceberg [open-beta]

COMMANDS
  wrangler r2 bucket catalog enable <bucket>   Enable the data catalog on an R2 bucket [open-beta]
  wrangler r2 bucket catalog disable <bucket>  Disable the data catalog for an R2 bucket [open-beta]
  wrangler r2 bucket catalog get <bucket>      Get the status of the data catalog for an R2 bucket [open-beta]
  wrangler r2 bucket catalog compaction        Control settings for automatic file compaction maintenance jobs for your R2 data catalog [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket notification`

```text
wrangler r2 bucket notification

Manage event notification rules for an R2 bucket

COMMANDS
  wrangler r2 bucket notification get <bucket>     List event notification rules for an R2 bucket

                                                   Alias for "wrangler r2 bucket notification list".
  wrangler r2 bucket notification list <bucket>    List event notification rules for an R2 bucket
  wrangler r2 bucket notification create <bucket>  Create an event notification rule for an R2 bucket
  wrangler r2 bucket notification delete <bucket>  Delete an event notification rule from an R2 bucket

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket domain`

```text
wrangler r2 bucket domain

Manage custom domains for an R2 bucket

COMMANDS
  wrangler r2 bucket domain list <bucket>    List custom domains for an R2 bucket
  wrangler r2 bucket domain get <bucket>     Get custom domain connected to an R2 bucket
  wrangler r2 bucket domain add <bucket>     Connect a custom domain to an R2 bucket
  wrangler r2 bucket domain remove <bucket>  Remove a custom domain from an R2 bucket
  wrangler r2 bucket domain update <bucket>  Update settings for a custom domain connected to an R2 bucket

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket dev-url`

```text
wrangler r2 bucket dev-url

Manage public access via the r2.dev URL for an R2 bucket

COMMANDS
  wrangler r2 bucket dev-url get <bucket>      Get the r2.dev URL and status for an R2 bucket
  wrangler r2 bucket dev-url enable <bucket>   Enable public access via the r2.dev URL for an R2 bucket
  wrangler r2 bucket dev-url disable <bucket>  Disable public access via the r2.dev URL for an R2 bucket

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket lifecycle`

```text
wrangler r2 bucket lifecycle

Manage lifecycle rules for an R2 bucket

COMMANDS
  wrangler r2 bucket lifecycle list <bucket>                 List lifecycle rules for an R2 bucket
  wrangler r2 bucket lifecycle add <bucket> [name] [prefix]  Add a lifecycle rule to an R2 bucket
  wrangler r2 bucket lifecycle remove <bucket>               Remove a lifecycle rule from an R2 bucket
  wrangler r2 bucket lifecycle set <bucket>                  Set the lifecycle configuration for an R2 bucket from a JSON file

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket cors`

```text
wrangler r2 bucket cors

Manage CORS configuration for an R2 bucket

COMMANDS
  wrangler r2 bucket cors delete <bucket>  Clear the CORS configuration for an R2 bucket
  wrangler r2 bucket cors list <bucket>    List the CORS rules for an R2 bucket
  wrangler r2 bucket cors set <bucket>     Set the CORS configuration for an R2 bucket from a JSON file

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket lock`

```text
wrangler r2 bucket lock

Manage lock rules for an R2 bucket

COMMANDS
  wrangler r2 bucket lock list <bucket>                 List lock rules for an R2 bucket
  wrangler r2 bucket lock add <bucket> [name] [prefix]  Add a lock rule to an R2 bucket
  wrangler r2 bucket lock remove <bucket>               Remove a bucket lock rule from an R2 bucket
  wrangler r2 bucket lock set <bucket>                  Set the lock configuration for an R2 bucket from a JSON file

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 sql query`

```text
wrangler r2 sql query <warehouse> <query>

Execute SQL query against R2 Data Catalog [open-beta]

POSITIONALS
  warehouse  R2 Data Catalog warehouse name  [string] [required]
  query      The SQL query to execute  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler d1 time-travel info`

```text
wrangler d1 time-travel info <database>

Retrieve information about a database at a specific point-in-time using Time Travel

POSITIONALS
  database  The name or binding of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --timestamp  Accepts a Unix (seconds from epoch) or RFC3339 timestamp (e.g. 2023-07-13T08:46:42.228Z) to retrieve a bookmark for  [string]
      --json       Return output as clean JSON  [boolean] [default: false]

This command acts on remote D1 Databases.

For more information about Time Travel, see https://developers.cloudflare.com/d1/reference/time-travel/
```

## `wrangler d1 time-travel restore`

```text
wrangler d1 time-travel restore <database>

Restore a database back to a specific point-in-time

POSITIONALS
  database  The name or binding of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --bookmark   Bookmark to use for time travel  [string]
      --timestamp  Accepts a Unix (seconds from epoch) or RFC3339 timestamp (e.g. 2023-07-13T08:46:42.228Z) to retrieve a bookmark for (within the last 30 days)  [string]
      --json       Return output as clean JSON  [boolean] [default: false]

This command acts on remote D1 Databases.

For more information about Time Travel, see https://developers.cloudflare.com/d1/reference/time-travel/
```

## `wrangler d1 migrations create`

```text
wrangler d1 migrations create <database> <message>

Create a new migration

POSITIONALS
  database  The name or binding of the DB  [string] [required]
  message   The Migration message  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

This will generate a new versioned file inside the 'migrations' folder. Name
your migration file as a description of your change. This will make it easier
for you to find your migration in the 'migrations' folder. An example filename
looks like:

	0000_create_user_table.sql

The filename will include a version number and the migration name you specify.
```

## `wrangler d1 migrations list`

```text
wrangler d1 migrations list <database>

View a list of unapplied migration files

POSITIONALS
  database  The name or binding of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --local       Check migrations against a local DB for use with wrangler dev  [boolean]
      --remote      Check migrations against a remote DB for use with wrangler dev --remote  [boolean]
      --preview     Check migrations against a preview D1 DB  [boolean] [default: false]
      --persist-to  Specify directory to use for local persistence (you must use --local with this flag)  [string]
```

## `wrangler d1 migrations apply`

```text
wrangler d1 migrations apply <database>

Apply any unapplied D1 migrations

POSITIONALS
  database  The name or binding of the DB  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --local       Execute commands/files against a local DB for use with wrangler dev  [boolean]
      --remote      Execute commands/files against a remote DB for use with wrangler dev --remote  [boolean]
      --preview     Execute commands/files against a preview D1 DB  [boolean] [default: false]
      --persist-to  Specify directory to use for local persistence (you must use --local with this flag)  [string]

This command will prompt you to confirm the migrations you are about to apply.
Confirm that you would like to proceed. After applying, a backup will be captured.

The progress of each migration will be printed in the console.

When running the apply command in a CI/CD environment or another non-interactive
command line, the confirmation step will be skipped, but the backup will still be
captured.

If applying a migration results in an error, this migration will be rolled back,
and the previous successful migration will remain applied.
```

## `wrangler cert upload mtls-certificate`

```text
wrangler cert upload mtls-certificate

Upload an mTLS certificate

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --cert  The path to a certificate file (.pem) containing a chain of certificates to upload  [string] [required]
      --key   The path to a file containing the private key for your leaf certificate  [string] [required]
      --name  The name for the certificate  [string]
```

## `wrangler cert upload certificate-authority`

```text
wrangler cert upload certificate-authority

Upload a CA certificate chain

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name     The name for the certificate  [string]
      --ca-cert  The path to a certificate file (.pem) containing a chain of CA certificates to upload  [string] [required]
```

## `wrangler pages functions build`

```text
wrangler pages functions build [directory]

Compile a folder of Pages Functions into a single Worker

POSITIONALS
  directory  The directory of Pages Functions  [string] [default: "functions"]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --outfile                                    The location of the output Worker script  [deprecated] [string]
      --outdir                                     Output directory for the bundled Worker  [string]
      --output-config-path                         The location for the output config file  [string]
      --build-metadata-path                        The location for the build metadata file  [string]
      --project-directory                          The location of the Pages project  [string]
      --output-routes-path                         The location for the output _routes.json file  [string]
      --minify                                     Minify the output Worker script  [boolean] [default: false]
      --sourcemap                                  Generate a sourcemap for the output Worker script  [boolean] [default: false]
      --fallback-service                           The service to fallback to at the end of the `next` chain. Setting to '' will fallback to the global `fetch`.  [string] [default: "ASSETS"]
      --watch                                      Watch for changes to the functions and automatically rebuild the Worker script  [boolean] [default: false]
      --plugin                                     Build a plugin rather than a Worker script  [boolean] [default: false]
      --build-output-directory                     The directory to output static assets to  [string]
      --compatibility-date                         Date to use for compatibility checks  [string]
      --compatibility-flags, --compatibility-flag  Flags to use for compatibility checks  [array]
      --external                                   A list of module imports to exclude from bundling  [array]
      --metafile                                   Path to output build metadata from esbuild. If flag is used without a path, defaults to 'bundle-meta.json' inside the directory specified by --outdir.  [string]
```

## `wrangler pages project list`

```text
wrangler pages project list

List your Cloudflare Pages projects

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pages project create`

```text
wrangler pages project create <project-name>

Create a new Cloudflare Pages project

POSITIONALS
  project-name  The name of your Pages project  [string] [required]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --production-branch                          The name of the production branch of your project  [string]
      --compatibility-flags, --compatibility-flag  Flags to use for compatibility checks  [array]
      --compatibility-date                         Date to use for compatibility checks  [string]
```

## `wrangler pages project delete`

```text
wrangler pages project delete <project-name>

Delete a Cloudflare Pages project

POSITIONALS
  project-name  The name of your Pages project  [string] [required]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --yes  Answer "yes" to confirm project deletion  [boolean]
```

## `wrangler pages deployment list`

```text
wrangler pages deployment list

List deployments in your Cloudflare Pages project

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name  The name of the project you would like to list deployments for  [string]
      --environment   Environment type to list deployments for  [string] [choices: "production", "preview"]
      --json          Return output as clean JSON  [boolean] [default: false]
```

## `wrangler pages deployment create`

```text
wrangler pages deployment create [directory]

Deploy a directory of static assets as a Pages deployment

Alias for "wrangler pages deploy".

POSITIONALS
  directory  The directory of static files to upload  [string]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name        The name of the project you want to deploy to  [string]
      --branch              The name of the branch you want to deploy to  [string]
      --commit-hash         The SHA to attach to this deployment  [string]
      --commit-message      The commit message to attach to this deployment  [string]
      --commit-dirty        Whether or not the workspace should be considered dirty for this deployment  [boolean]
      --skip-caching        Skip asset caching which speeds up builds  [boolean]
      --no-bundle           Whether to run bundling on `_worker.js` before deploying  [boolean]
      --upload-source-maps  Whether to upload any server-side sourcemaps with this deployment  [boolean] [default: false]
```

## `wrangler pages deployment tail`

```text
wrangler pages deployment tail [deployment]

Start a tailing session for a project's deployment and livestream logs from your Functions

POSITIONALS
  deployment  (Optional) ID or URL of the deployment to tail. Specify by environment if deployment ID is unknown.  [string]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name   The name of the project you would like to tail  [string]
      --environment    When not providing a specific deployment ID, specifying environment will grab the latest production or preview deployment  [string] [choices: "production", "preview"] [default: "production"]
      --format         The format of log entries  [string] [choices: "json", "pretty"]
      --status         Filter by invocation status  [array] [choices: "ok", "error", "canceled"]
      --header         Filter by HTTP header  [string]
      --method         Filter by HTTP method  [array]
      --search         Filter by a text match in console.log messages  [string]
      --sampling-rate  Adds a percentage of requests to log sampling rate  [number]
      --ip             Filter by the IP address the request originates from. Use "self" to filter for your own IP  [array]
```

## `wrangler pages secret put`

```text
wrangler pages secret put <key>

Create or update a secret variable for a Pages project

POSITIONALS
  key  The variable name to be accessible in the Pages project  [string] [required]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name, --project  The name of your Pages project  [string]
```

## `wrangler pages secret bulk`

```text
wrangler pages secret bulk [file]

Bulk upload secrets for a Pages project

POSITIONALS
  file  The file of key-value pairs to upload, as JSON in form {"key": value, ...} or .dev.vars file in the form KEY=VALUE  [string]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name, --project  The name of your Pages project  [string]
```

## `wrangler pages secret delete`

```text
wrangler pages secret delete <key>

Delete a secret variable from a Pages project

POSITIONALS
  key  The variable name to be accessible in the Pages project  [string] [required]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name, --project  The name of your Pages project  [string]
```

## `wrangler pages secret list`

```text
wrangler pages secret list

List all secrets for a Pages project

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --project-name, --project  The name of your Pages project  [string]
```

## `wrangler pages download config`

```text
wrangler pages download config [projectName]

Download your Pages project config as a Wrangler configuration file [experimental]

POSITIONALS
  projectName  The Pages project to download  [string]

GLOBAL FLAGS
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --force  Overwrite an existing Wrangler configuration file without prompting  [boolean]
```

## `wrangler containers images list`

```text
wrangler containers images list

List images in the Cloudflare managed registry

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --filter  Regex to filter results  [string]
      --json    Format output as JSON  [boolean] [default: false]
```

## `wrangler containers images delete`

```text
wrangler containers images delete <image>

Remove an image from the Cloudflare managed registry

POSITIONALS
  image  Image and tag to delete, of the form IMAGE:TAG  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pubsub namespace create`

```text
wrangler pubsub namespace create <name>

Create a new Pub/Sub Namespace

POSITIONALS
  name  The name of the new Namespace. This name will form part of the public endpoint, in the form <broker>.<namespace>.cloudflarepubsub.com  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --description  Textual description of Namespace  [string]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub namespace list`

```text
wrangler pubsub namespace list

List your existing Pub/Sub Namespaces

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub namespace delete`

```text
wrangler pubsub namespace delete <name>

Delete a Pub/Sub Namespace

POSITIONALS
  name  The name of the namespace to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub namespace describe`

```text
wrangler pubsub namespace describe <name>

Describe a Pub/Sub Namespace

POSITIONALS
  name  The name of the namespace to describe.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker create`

```text
wrangler pubsub broker create <name>

Create a new Pub/Sub Broker

POSITIONALS
  name  The name of the Pub/Sub Broker. This name will form part of the public endpoint, in the form <broker>.<namespace>.cloudflarepubsub.com  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  An existing Namespace to associate the Broker with. This name will form part of the public endpoint, in the form <broker>.<namespace>.cloudflarepubsub.com  [string] [required]
      --description      Longer description for the broker  [string]
      --expiration       Time to allow token validity (can use seconds, hours, months, weeks, years)  [string]
      --on-publish-url   A (HTTPS) Cloudflare Worker (or webhook) URL that messages will be sent to on-publish.  [string]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker update`

```text
wrangler pubsub broker update <name>

Update an existing Pub/Sub Broker's configuration.

POSITIONALS
  name  The name of an existing Pub/Sub Broker  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Broker is associated with  [string] [required]
      --description      A optional description of the Broker.  [string]
      --expiration       The expiration date for all client credentials issued by the Broker (can use seconds, hours, months, weeks, years)  [string]
      --on-publish-url   A (HTTPS) Cloudflare Worker (or webhook) URL that messages will be sent to on-publish.  [string]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker list`

```text
wrangler pubsub broker list

List the Pub/Sub Brokers within a Namespace

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Brokers are associated with.  [string] [required]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker delete`

```text
wrangler pubsub broker delete <name>

Delete an existing Pub/Sub Broker

POSITIONALS
  name  The name of the Broker to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Broker is associated with.  [string] [required]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker describe`

```text
wrangler pubsub broker describe <name>

Describe an existing Pub/Sub Broker.

POSITIONALS
  name  The name of the Broker to describe.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Broker is associated with.  [string] [required]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker issue`

```text
wrangler pubsub broker issue <name>

Issue new client credentials for a specific Pub/Sub Broker.

POSITIONALS
  name  The name of the Broker to issue credentials for.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns    The Namespace the Broker is associated with.  [string] [required]
  -n, --number             The number of credentials to generate.  [number] [default: 1]
      --type               The type of credential to generate.  [string] [default: "TOKEN"]
      --expiration, --exp  The expiration to set on the issued credentials. This overrides any Broker-level expiration that is set.  [string]
      --client-id, --jti   A list of existing clientIds to generate tokens for. By default, clientIds are randomly generated.  [array]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker revoke`

```text
wrangler pubsub broker revoke <name>

Revoke a set of active client credentials associated with the given Broker

POSITIONALS
  name  The name of the Broker to revoke credentials against.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Broker is associated with.  [string] [required]
      --jti              Tokens to revoke  [array] [required]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker unrevoke`

```text
wrangler pubsub broker unrevoke <name>

Restore access to a set of previously revoked client credentials.

POSITIONALS
  name  The name of the Broker to revoke credentials against.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Broker is associated with.  [string] [required]
      --jti              Tokens to revoke  [array] [required]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker show-revocations`

```text
wrangler pubsub broker show-revocations <name>

Show all previously revoked client credentials.

POSITIONALS
  name  The name of the Broker to revoke credentials against.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Broker is associated with.  [string] [required]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler pubsub broker public-keys`

```text
wrangler pubsub broker public-keys <name>

Show the public keys used for verifying on-publish hooks and credentials for a Broker.

POSITIONALS
  name  The name of the Broker to revoke credentials against.  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --namespace, --ns  The Namespace the Broker is associated with.  [string] [required]

👷🏽 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/
```

## `wrangler ai finetune list`

```text
wrangler ai finetune list

List your finetune files

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  Return output as clean JSON  [boolean] [default: false]
```

## `wrangler ai finetune create`

```text
wrangler ai finetune create <model_name> <finetune_name> <folder_path>

Create finetune and upload assets

POSITIONALS
  model_name     The catalog model name  [string] [required]
  finetune_name  The finetune name  [string] [required]
  folder_path    The folder path containing the finetune assets  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler secrets-store store create`

```text
wrangler secrets-store store create <name>

Create a store within an account [open-beta]

POSITIONALS
  name  Name of the store  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --remote  Execute command against remote Secrets Store  [boolean] [default: false]
```

## `wrangler secrets-store store delete`

```text
wrangler secrets-store store delete <store-id>

Delete a store within an account [open-beta]

POSITIONALS
  store-id  ID of the store  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --remote  Execute command against remote Secrets Store  [boolean] [default: false]
```

## `wrangler secrets-store store list`

```text
wrangler secrets-store store list

List stores within an account [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page      Page number of stores listing results, can configure page size using "per-page"  [number] [default: 1]
      --per-page  Number of stores to show per page  [number] [default: 10]
      --remote    Execute command against remote Secrets Store  [boolean] [default: false]
```

## `wrangler secrets-store secret create`

```text
wrangler secrets-store secret create <store-id>

Create a secret within a store [open-beta]

POSITIONALS
  store-id  ID of the store in which the secret resides  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name        Name of the secret  [string] [required]
      --value       Value of the secret (Note: Only for testing. Not secure as this will leave secret value in plain-text in terminal history, exclude this flag and use automatic prompt instead)  [string]
      --scopes      Scopes for the secret (comma-separated list of scopes eg:"workers")  [string] [required]
      --comment     Comment for the secret  [string]
      --remote      Execute command against remote Secrets Store  [boolean] [default: false]
      --persist-to  Directory for local persistence  [string]
```

## `wrangler secrets-store secret list`

```text
wrangler secrets-store secret list <store-id>

List secrets within a store [open-beta]

POSITIONALS
  store-id  ID of the store in which to list secrets  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page        Page number of secrets listing results, can configure page size using "per-page"  [number] [default: 1]
      --per-page    Number of secrets to show per page  [number] [default: 10]
      --remote      Execute command against remote Secrets Store  [boolean] [default: false]
      --persist-to  Directory for local persistence  [string]
```

## `wrangler secrets-store secret get`

```text
wrangler secrets-store secret get <store-id>

Get a secret within a store [open-beta]

POSITIONALS
  store-id  ID of the store in which the secret resides  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --secret-id   ID of the secret to retrieve  [string] [required]
      --remote      Execute command against remote Secrets Store  [boolean] [default: false]
      --persist-to  Directory for local persistence  [string]
```

## `wrangler secrets-store secret update`

```text
wrangler secrets-store secret update <store-id>

Update a secret within a store [open-beta]

POSITIONALS
  store-id  ID of the store in which the secret resides  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --secret-id   ID of the secret to update  [string] [required]
      --value       Updated value of the secret (Note: Only for testing. Not secure as this will leave secret value in plain-text in terminal history, exclude this flag and use automatic prompt instead)  [string]
      --scopes      Updated scopes for the secret (comma-separated list of scopes eg:"workers")  [string]
      --comment     Updated comment for the secret  [string]
      --remote      Execute command against remote Secrets Store  [boolean] [default: false]
      --persist-to  Directory for local persistence  [string]
```

## `wrangler secrets-store secret delete`

```text
wrangler secrets-store secret delete <store-id>

Delete a secret within a store [open-beta]

POSITIONALS
  store-id  ID of the store in which the secret resides  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --secret-id   ID of the secret to delete  [string] [required]
      --remote      Execute command against remote Secrets Store  [boolean] [default: false]
      --persist-to  Directory for local persistence  [string]
```

## `wrangler secrets-store secret duplicate`

```text
wrangler secrets-store secret duplicate <store-id>

Duplicate a secret within a store [open-beta]

POSITIONALS
  store-id  ID of the store in which the secret resides  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --secret-id   ID of the secret to duplicate the secret value of  [string] [required]
      --name        Name of the new secret  [string] [required]
      --scopes      Scopes for the new secret  [string] [required]
      --comment     Comment for the new secret  [string]
      --remote      Execute command against remote Secrets Store  [boolean] [default: false]
      --persist-to  Directory for local persistence  [string]
```

## `wrangler workflows instances list`

```text
wrangler workflows instances list <name>

Instance related commands (list, describe, terminate, pause, resume)

POSITIONALS
  name  Name of the workflow  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --reverse   Reverse order of the instances table  [boolean] [default: false]
      --status    Filters list by instance status (can be one of: queued, running, paused, errored, terminated, complete)  [string]
      --page      Show a sepecific page from the listing, can configure page size using "per-page"  [number] [default: 1]
      --per-page  Configure the maximum number of instances to show per page  [number]
```

## `wrangler workflows instances describe`

```text
wrangler workflows instances describe <name> [id]

Describe a workflow instance - see its logs, retries and errors

POSITIONALS
  name  Name of the workflow  [string] [required]
  id    ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it  [string] [default: "latest"]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --step-output            Don't output the step output since it might clutter the terminal  [boolean] [default: true]
      --truncate-output-limit  Truncate step output after x characters  [number] [default: 5000]
```

## `wrangler workflows instances terminate`

```text
wrangler workflows instances terminate <name> <id>

Terminate a workflow instance

POSITIONALS
  name  Name of the workflow  [string] [required]
  id    ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler workflows instances restart`

```text
wrangler workflows instances restart <name> <id>

Restart a workflow instance

POSITIONALS
  name  Name of the workflow  [string] [required]
  id    ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler workflows instances pause`

```text
wrangler workflows instances pause <name> <id>

Pause a workflow instance

POSITIONALS
  name  Name of the workflow  [string] [required]
  id    ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and pause it  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler workflows instances resume`

```text
wrangler workflows instances resume <name> <id>

Resume a workflow instance

POSITIONALS
  name  Name of the workflow  [string] [required]
  id    ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and resume it  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler pipelines streams create`

```text
wrangler pipelines streams create <stream>

Create a new stream [open-beta]

POSITIONALS
  stream  The name of the stream to create  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --schema-file   Path to JSON file containing stream schema  [string]
      --http-enabled  Enable HTTP endpoint  [boolean] [default: true]
      --http-auth     Require authentication for HTTP endpoint  [boolean] [default: true]
      --cors-origin   CORS origin  [array]
```

## `wrangler pipelines streams list`

```text
wrangler pipelines streams list

List all streams [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page         Page number for pagination  [number] [default: 1]
      --per-page     Number of streams per page  [number] [default: 20]
      --pipeline-id  Filter streams by pipeline ID  [string]
      --json         Output in JSON format  [boolean] [default: false]
```

## `wrangler pipelines streams get`

```text
wrangler pipelines streams get <stream>

Get details about a specific stream [open-beta]

POSITIONALS
  stream  The ID of the stream to retrieve  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  Output in JSON format  [boolean] [default: false]
```

## `wrangler pipelines streams delete`

```text
wrangler pipelines streams delete <stream>

Delete a stream [open-beta]

POSITIONALS
  stream  The ID of the stream to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --force  Skip confirmation  [boolean] [default: false]
```

## `wrangler pipelines sinks create`

```text
wrangler pipelines sinks create <sink>

Create a new sink [open-beta]

POSITIONALS
  sink  The name of the sink to create  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --type                   The type of sink to create  [string] [required] [choices: "r2", "r2-data-catalog"]
      --bucket                 R2 bucket name  [string] [required]
      --format                 Output format  [string] [choices: "json", "parquet"] [default: "parquet"]
      --compression            Compression method (parquet only)  [string] [choices: "uncompressed", "snappy", "gzip", "zstd", "lz4"] [default: "zstd"]
      --target-row-group-size  Target row group size for parquet format  [string]
      --path                   The base prefix in your bucket where data will be written  [string]
      --partitioning           Time partition pattern (r2 sinks only)  [string]
      --roll-size              Roll file size in MB  [number]
      --roll-interval          Roll file interval in seconds  [number] [default: 300]
      --access-key-id          R2 access key ID (leave empty for R2 credentials to be automatically created)  [string]
      --secret-access-key      R2 secret access key (leave empty for R2 credentials to be automatically created)  [string]
      --namespace              Data catalog namespace (required for r2-data-catalog)  [string]
      --table                  Table name within namespace (required for r2-data-catalog)  [string]
      --catalog-token          Authentication token for data catalog (required for r2-data-catalog)  [string]
```

## `wrangler pipelines sinks list`

```text
wrangler pipelines sinks list

List all sinks [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --page         Page number for pagination  [number] [default: 1]
      --per-page     Number of sinks per page  [number] [default: 20]
      --pipeline-id  Filter sinks by pipeline ID  [string]
      --json         Output in JSON format  [boolean] [default: false]
```

## `wrangler pipelines sinks get`

```text
wrangler pipelines sinks get <sink>

Get details about a specific sink [open-beta]

POSITIONALS
  sink  The ID of the sink to retrieve  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --json  Output in JSON format  [boolean] [default: false]
```

## `wrangler pipelines sinks delete`

```text
wrangler pipelines sinks delete <sink>

Delete a sink [open-beta]

POSITIONALS
  sink  The ID of the sink to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -y, --force  Skip confirmation  [boolean] [default: false]
```

## `wrangler vpc service create`

```text
wrangler vpc service create <name>

Create a new VPC service

Required Configuration
      --type       The type of the VPC service  [string] [required] [choices: "http"]
      --tunnel-id  UUID of the Cloudflare tunnel  [string] [required]

Port Configuration
      --http-port   HTTP port (default: 80)  [number]
      --https-port  HTTPS port number (default: 443)  [number]

IP Configuration [conflicts with --hostname, --resolver-ips]
      --ipv4  IPv4 address for the host [conflicts with --ipv6]  [string]
      --ipv6  IPv6 address for the host [conflicts with --ipv4]  [string]

Hostname Configuration [conflicts with --ipv4, --ipv6]
      --hostname      Hostname for the host  [string]
      --resolver-ips  Comma-separated list of resolver IPs  [string]

POSITIONALS
  name  The name of the VPC service  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler vpc service delete`

```text
wrangler vpc service delete <service-id>

Delete a VPC service

POSITIONALS
  service-id  The ID of the service to delete  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler vpc service get`

```text
wrangler vpc service get <service-id>

Get a VPC service

POSITIONALS
  service-id  The ID of the VPC service  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler vpc service list`

```text
wrangler vpc service list

List VPC services

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler vpc service update`

```text
wrangler vpc service update <service-id>

Update a VPC service

Required Configuration
      --name       The name of the VPC service  [string] [required]
      --type       The type of the VPC service  [string] [required] [choices: "http"]
      --tunnel-id  UUID of the Cloudflare tunnel  [string] [required]

Port Configuration
      --http-port   HTTP port (default: 80)  [number]
      --https-port  HTTPS port number (default: 443)  [number]

IP Configuration [conflicts with --hostname, --resolver-ips]
      --ipv4  IPv4 address for the host [conflicts with --ipv6]  [string]
      --ipv6  IPv6 address for the host [conflicts with --ipv4]  [string]

Hostname Configuration [conflicts with --ipv4, --ipv6]
      --hostname      Hostname for the host  [string]
      --resolver-ips  Comma-separated list of resolver IPs  [string]

POSITIONALS
  service-id  The ID of the VPC service to update  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues consumer http add`

```text
wrangler queues consumer http add <queue-name>

Add a Queue HTTP Pull Consumer

POSITIONALS
  queue-name  Name of the queue for the consumer  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --batch-size               Maximum number of messages per batch  [number]
      --message-retries          Maximum number of retries for each message  [number]
      --dead-letter-queue        Queue to send messages that failed to be consumed  [string]
      --visibility-timeout-secs  The number of seconds a message will wait for an acknowledgement before being returned to the queue.  [number]
      --retry-delay-secs         The number of seconds to wait before retrying a message  [number]
```

## `wrangler queues consumer http remove`

```text
wrangler queues consumer http remove <queue-name>

Remove a Queue HTTP Pull Consumer

POSITIONALS
  queue-name  Name of the queue for the consumer  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler queues consumer worker add`

```text
wrangler queues consumer worker add <queue-name> <script-name>

Add a Queue Worker Consumer

POSITIONALS
  queue-name   Name of the queue to configure  [string] [required]
  script-name  Name of the consumer script  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --batch-size         Maximum number of messages per batch  [number]
      --batch-timeout      Maximum number of seconds to wait to fill a batch with messages  [number]
      --message-retries    Maximum number of retries for each message  [number]
      --dead-letter-queue  Queue to send messages that failed to be consumed  [string]
      --max-concurrency    The maximum number of concurrent consumer Worker invocations. Must be a positive integer  [number]
      --retry-delay-secs   The number of seconds to wait before retrying a message  [number]
```

## `wrangler queues consumer worker remove`

```text
wrangler queues consumer worker remove <queue-name> <script-name>

Remove a Queue Worker Consumer

POSITIONALS
  queue-name   Name of the queue to configure  [string] [required]
  script-name  Name of the consumer script  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket update storage-class`

```text
wrangler r2 bucket update storage-class <name>

Update the default storage class of an existing R2 bucket

POSITIONALS
  name  The name of the existing bucket  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction   The jurisdiction of the bucket to be updated  [string]
  -s, --storage-class  The new default storage class for this bucket  [string] [required]
```

## `wrangler r2 bucket sippy enable`

```text
wrangler r2 bucket sippy enable <name>

Enable Sippy on an R2 bucket

POSITIONALS
  name  The name of the bucket  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction              The jurisdiction where the bucket exists  [string]
      --provider  [choices: "AWS", "GCS"]
      --bucket                    The name of the upstream bucket  [string]
      --region                    (AWS provider only) The region of the upstream bucket  [string]
      --access-key-id             (AWS provider only) The secret access key id for the upstream bucket  [string]
      --secret-access-key         (AWS provider only) The secret access key for the upstream bucket  [string]
      --service-account-key-file  (GCS provider only) The path to your Google Cloud service account key JSON file  [string]
      --client-email              (GCS provider only) The client email for your Google Cloud service account key  [string]
      --private-key               (GCS provider only) The private key for your Google Cloud service account key  [string]
      --r2-access-key-id          The secret access key id for this R2 bucket  [string]
      --r2-secret-access-key      The secret access key for this R2 bucket  [string]
```

## `wrangler r2 bucket sippy disable`

```text
wrangler r2 bucket sippy disable <name>

Disable Sippy on an R2 bucket

POSITIONALS
  name  The name of the bucket  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket sippy get`

```text
wrangler r2 bucket sippy get <name>

Check the status of Sippy on an R2 bucket

POSITIONALS
  name  The name of the bucket  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket catalog enable`

```text
wrangler r2 bucket catalog enable <bucket>

Enable the data catalog on an R2 bucket [open-beta]

POSITIONALS
  bucket  The name of the bucket to enable  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket catalog disable`

```text
wrangler r2 bucket catalog disable <bucket>

Disable the data catalog for an R2 bucket [open-beta]

POSITIONALS
  bucket  The name of the bucket to disable the data catalog for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket catalog get`

```text
wrangler r2 bucket catalog get <bucket>

Get the status of the data catalog for an R2 bucket [open-beta]

POSITIONALS
  bucket  The name of the R2 bucket whose data catalog status to retrieve  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket catalog compaction`

```text
wrangler r2 bucket catalog compaction

Control settings for automatic file compaction maintenance jobs for your R2 data catalog [open-beta]

COMMANDS
  wrangler r2 bucket catalog compaction enable <bucket> [namespace] [table]   Enable automatic file compaction for your R2 data catalog or a specific table [open-beta]
  wrangler r2 bucket catalog compaction disable <bucket> [namespace] [table]  Disable automatic file compaction for your R2 data catalog or a specific table [open-beta]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```

## `wrangler r2 bucket notification get`

```text
wrangler r2 bucket notification get <bucket>

List event notification rules for an R2 bucket

Alias for "wrangler r2 bucket notification list".

POSITIONALS
  bucket  The name of the R2 bucket to get event notification rules for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket notification list`

```text
wrangler r2 bucket notification list <bucket>

List event notification rules for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to get event notification rules for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket notification create`

```text
wrangler r2 bucket notification create <bucket>

Create an event notification rule for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to create an event notification rule for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --event-types, --event-type  The type of event(s) that will emit event notifications  [array] [required] [choices: "object-create", "object-delete"]
      --prefix                     The prefix that an object must match to emit event notifications (note: regular expressions not supported)  [string]
      --suffix                     The suffix that an object must match to emit event notifications (note: regular expressions not supported)  [string]
      --queue                      The name of the queue that will receive event notification messages  [string] [required]
  -J, --jurisdiction               The jurisdiction where the bucket exists  [string]
      --description                A description that can be used to identify the event notification rule after creation  [string]
```

## `wrangler r2 bucket notification delete`

```text
wrangler r2 bucket notification delete <bucket>

Delete an event notification rule from an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to delete an event notification rule for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --queue         The name of the queue that corresponds to the event notification rule. If no rule is provided, all event notification rules associated with the bucket and queue will be deleted  [string] [required]
      --rule          The ID of the event notification rule to delete  [string]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket domain list`

```text
wrangler r2 bucket domain list <bucket>

List custom domains for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket whose connected custom domains will be listed  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket domain get`

```text
wrangler r2 bucket domain get <bucket>

Get custom domain connected to an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket whose custom domain to retrieve  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --domain        The custom domain to get information for  [string] [required]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket domain add`

```text
wrangler r2 bucket domain add <bucket>

Connect a custom domain to an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to connect a custom domain to  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --domain        The custom domain to connect to the R2 bucket  [string] [required]
      --zone-id       The zone ID associated with the custom domain  [string] [required]
      --min-tls       Set the minimum TLS version for the custom domain (defaults to 1.0 if not set)  [string] [choices: "1.0", "1.1", "1.2", "1.3"]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket domain remove`

```text
wrangler r2 bucket domain remove <bucket>

Remove a custom domain from an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to remove the custom domain from  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --domain        The custom domain to remove from the R2 bucket  [string] [required]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket domain update`

```text
wrangler r2 bucket domain update <bucket>

Update settings for a custom domain connected to an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket associated with the custom domain to update  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --domain        The custom domain whose settings will be updated  [string] [required]
      --min-tls       Update the minimum TLS version for the custom domain  [string] [choices: "1.0", "1.1", "1.2", "1.3"]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket dev-url get`

```text
wrangler r2 bucket dev-url get <bucket>

Get the r2.dev URL and status for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket whose r2.dev URL status to retrieve  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket dev-url enable`

```text
wrangler r2 bucket dev-url enable <bucket>

Enable public access via the r2.dev URL for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to enable public access via its r2.dev URL  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket dev-url disable`

```text
wrangler r2 bucket dev-url disable <bucket>

Disable public access via the r2.dev URL for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to disable public access via its r2.dev URL  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket lifecycle list`

```text
wrangler r2 bucket lifecycle list <bucket>

List lifecycle rules for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to list lifecycle rules for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket lifecycle add`

```text
wrangler r2 bucket lifecycle add <bucket> [name] [prefix]

Add a lifecycle rule to an R2 bucket

POSITIONALS
  bucket    The name of the R2 bucket to add a lifecycle rule to  [string] [required]
  name, id  A unique name for the lifecycle rule, used to identify and manage it.  [string]
  prefix    Prefix condition for the lifecycle rule (leave empty for all prefixes)  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --expire-days           Number of days after which objects expire  [number]
      --expire-date           Date after which objects expire (YYYY-MM-DD)  [string]
      --ia-transition-days    Number of days after which objects transition to Infrequent Access storage  [number]
      --ia-transition-date    Date after which objects transition to Infrequent Access storage (YYYY-MM-DD)  [string]
      --abort-multipart-days  Number of days after which incomplete multipart uploads are aborted  [number]
  -J, --jurisdiction          The jurisdiction where the bucket exists  [string]
  -y, --force                 Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket lifecycle remove`

```text
wrangler r2 bucket lifecycle remove <bucket>

Remove a lifecycle rule from an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to remove a lifecycle rule from  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name, --id    The unique name of the lifecycle rule to remove  [string] [required]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket lifecycle set`

```text
wrangler r2 bucket lifecycle set <bucket>

Set the lifecycle configuration for an R2 bucket from a JSON file

POSITIONALS
  bucket  The name of the R2 bucket to set lifecycle configuration for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --file          Path to the JSON file containing lifecycle configuration  [string] [required]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket cors delete`

```text
wrangler r2 bucket cors delete <bucket>

Clear the CORS configuration for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to delete the CORS configuration for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket cors list`

```text
wrangler r2 bucket cors list <bucket>

List the CORS rules for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to list the CORS rules for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket cors set`

```text
wrangler r2 bucket cors set <bucket>

Set the CORS configuration for an R2 bucket from a JSON file

POSITIONALS
  bucket  The name of the R2 bucket to set the CORS configuration for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --file          Path to the JSON file containing the CORS configuration  [string] [required]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket lock list`

```text
wrangler r2 bucket lock list <bucket>

List lock rules for an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to list lock rules for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket lock add`

```text
wrangler r2 bucket lock add <bucket> [name] [prefix]

Add a lock rule to an R2 bucket

POSITIONALS
  bucket    The name of the R2 bucket to add a bucket lock rule to  [string] [required]
  name, id  A unique name for the bucket lock rule, used to identify and manage it.  [string]
  prefix    Prefix condition for the bucket lock rule (set to "" for all prefixes)  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --retention-days        Number of days which objects will be retained for  [number]
      --retention-date        Date after which objects will be retained until (YYYY-MM-DD)  [string]
      --retention-indefinite  Retain objects indefinitely  [boolean]
  -J, --jurisdiction          The jurisdiction where the bucket exists  [string]
  -y, --force                 Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket lock remove`

```text
wrangler r2 bucket lock remove <bucket>

Remove a bucket lock rule from an R2 bucket

POSITIONALS
  bucket  The name of the R2 bucket to remove a bucket lock rule from  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --name, --id    The unique name of the bucket lock rule to remove  [string] [required]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
```

## `wrangler r2 bucket lock set`

```text
wrangler r2 bucket lock set <bucket>

Set the lock configuration for an R2 bucket from a JSON file

POSITIONALS
  bucket  The name of the R2 bucket to set lock configuration for  [string] [required]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --file          Path to the JSON file containing lock configuration  [string] [required]
  -J, --jurisdiction  The jurisdiction where the bucket exists  [string]
  -y, --force         Skip confirmation  [boolean] [default: false]
```

## `wrangler r2 bucket catalog compaction enable`

```text
wrangler r2 bucket catalog compaction enable <bucket> [namespace] [table]

Enable automatic file compaction for your R2 data catalog or a specific table [open-beta]

POSITIONALS
  bucket     The name of the bucket which contains the catalog  [string] [required]
  namespace  The namespace containing the table (optional, for table-level compaction)  [string]
  table      The name of the table (optional, for table-level compaction)  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]

OPTIONS
      --target-size  The target size for compacted files in MB (allowed values: 64, 128, 256, 512)  [number] [default: 128]
      --token        A cloudflare api token with access to R2 and R2 Data Catalog (required for catalog-level compaction settings only)  [string]
```

## `wrangler r2 bucket catalog compaction disable`

```text
wrangler r2 bucket catalog compaction disable <bucket> [namespace] [table]

Disable automatic file compaction for your R2 data catalog or a specific table [open-beta]

POSITIONALS
  bucket     The name of the bucket which contains the catalog  [string] [required]
  namespace  The namespace containing the table (optional, for table-level compaction)  [string]
  table      The name of the table (optional, for table-level compaction)  [string]

GLOBAL FLAGS
  -c, --config    Path to Wrangler configuration file  [string]
      --cwd       Run as if Wrangler was started in the specified directory instead of the current working directory  [string]
  -e, --env       Environment to use for operations, and for selecting .env and .dev.vars files  [string]
      --env-file  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files  [array]
  -h, --help      Show help  [boolean]
  -v, --version   Show version number  [boolean]
```