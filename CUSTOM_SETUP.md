# Custom Waline Setup

This is a customized fork of the [Waline](https://github.com/walinejs/waline) comment system.

## Project Structure

| Component | Location          | Description                     |
| --------- | ----------------- | ------------------------------- |
| Client    | `packages/client` | Custom Vue-based comment widget |
| Server    | `packages/server` | Vercel-deployed backend         |

## Client

The client is published as `@martapanc/waline-client` to GitHub Packages.

**Registry:** `https://npm.pkg.github.com`

Local `~/.npmrc`:

```bash
@martapanc:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=ghp_xxx
```

The token can be generated from the [Settings](https://github.com/settings/tokens) page, as a "personal access token (classic)" with `write:packages` and `read:packages` scopes.

Client projects can pull this package as a dependency, e.g. as `"@martapanc/waline-client": "^4.0.5-ntf"`. To release a new version:

1. Update the version in `packages/client/package.json`
2. Build the client: `pnpm client:build`
3. Publish to GitHub Packages: `cd packages/client && pnpm publish`

## Server

The server is deployed to Vercel at **<https://comments.notruefeminist.com>**.

Any changes pushed to the main branch will trigger a Vercel deployment.

## Local Development

### Prerequisites

- Node.js >= 20
- pnpm

### Running the Client

```bash
pnpm client:dev
```

This starts a Vite dev server for the client.

### Running the Server

```bash
pnpm server:dev
```

This starts the server locally on port 9090.

### Full Build

```bash
pnpm build
```

This builds the admin panel, API, and client packages.

## Verifying Changes

1. Run the server locally: `pnpm server:dev`
2. Run the client dev server: `pnpm client:dev`
3. Open the client dev server URL in your browser to test the comment widget against the local server
