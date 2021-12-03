# Introduction

This application is the TR custom JukeBox. It is hosted at https://tr-jukebox.vercel.app/

## Development

The application is a [Remix App](https://docs.remix.run), execute the following steps to have a running application locally

1. Run `yarn install`
2. Run `yarn dev`

This spins up the dev server on http://localhost:3000 and in parallel the Tailwind JIT compiler (see more at https://tailwindcss.com/).

## Adding new sounds

1. Place the new sound in the `sound` subfolder
2. Add a new entry to `sound.ts` (choos between adding to an existing category or creating an new one)
3. Create a new PR at https://github.com/davincho/tr-jukebox/pulls