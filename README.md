# 📦 TypeScript Library Template

This is a template repository for a TypeScript library for Omni projects.

## Features

- 🚀 **Modern Stack**: Built with [Bun](https://bun.sh) and TypeScript for fast development and runtime performance
- 📦 **ESM Output**: Fast builds via [Bun](https://bun.sh/docs/bundler) bundler with TypeScript declarations
- 🧪 **Testing**: [Bun test runner](https://bun.sh/docs/cli/test) for fast, native TypeScript testing
- 🛠️ **Developer Experience**:
  - Hot reloading during development with watch mode
  - Code quality with [Biome](https://biomejs.dev) for linting and formatting
  - Git hooks with [Husky](https://typicode.github.io/husky)
  - TypeScript strict mode with comprehensive type safety
  - [Knip](https://knip.dev) for unused dependency detection
  - Automated updates with [Renovate](https://docs.renovatebot.com)
  - Easy spin up with [Tilt](https://tilt.dev)
- 🚢 **Production Ready**:
  - [Changesets](https://github.com/changesets/changesets) for versioning and changelog generation
  - GitHub Actions for CI/CD (testing, preview publishing, releases)
  - Automatic type declaration generation

## Local Development

### Installation

```sh
bun install
```

### Building and Running

Run `tilt up`, or:

```sh
bun dev       # watch mode
bun build     # build the library
bun test      # run tests
bun check     # lint and format check
bun knip      # check for unused dependencies
```

### Building

```sh
bun run build
```

Outputs to `build/` with ESM format and TypeScript declarations.

### Testing

```sh
bun test
```

## Creating a New Library

1. Replace `@omnidotdev/template-typescript-library` with your package name in:
   - `package.json`
   - `.changeset/config.json`

2. Update repository URLs in `package.json`

3. Add your source code to `src/`

4. Add tests to `test/`

## Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Watch mode for development |
| `bun build` | Build the library |
| `bun test` | Run tests |
| `bun check` | Run biome check |
| `bun lint` | Run biome lint with fixes |
| `bun format` | Run biome format with fixes |
| `bun knip` | Check for unused dependencies |
| `bun clean` | Remove build artifacts and node_modules |
| `bun release` | Build and publish via changesets |

## License

The code in this repository is licensed under MIT, &copy; [Omni LLC](https://omni.dev). See [LICENSE.md](LICENSE.md) for more information.
