---
title: Updating SnailyCAD to a new version
createdAt: April 16, 2021
updatedAt: April 24, 2021
intro: How to update SnailyCAD
keywords: snaily-cad, CAD, fivem
---

## Updating

First run the following command

```bash
git pull origin main
```

If you get an error that includes the following text:

```txt
Please stash or commit your changes
```

Do the following:

1. **If you have translated the CAD, make sure to copy the content of the `language.json` file and keep it save.**
2. Run `git stash`
3. Run `git pull origin main`
4. Open the `src` folder, then open the `language.json` file
5. Paste the contents from the old `language.json` file into the new `language.json`
6. Done!

## Creating the config file

If you haven't already, create a new file in the `src` folder and call it `config.ts`

Paste the following content inside and change where needed.

```ts
/* eslint-disable prettier/prettier */
// @ts-nocheck

// You can find more information about what everything is here:
// https://github.com/Dev-CasperTheGhost/snaily-cadv3/wiki/Config-file
const config = {
  port: Number(process.env.PORT) || 3030,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "admin",
  databaseName: process.env.DB_NAME || "snaily-cad",
  jwtSecret: process.env.JWT_SECRET || "bongo super cat",
  env: process.env.PROFILE || "production",
};

export default config;
```

once done, save the file.

## Installing the dependencies

Now we'll install the dependencies.

```bash
npm install
```

## Starting

to start the CAD simply run the following command:

```bash
npm start
```

## 🎉 woohoo

After a few seconds it should log

```txt
[APP]: Running on http://localhost:<port>/
```

## Support

If you need extra help or support, feel free to [join our Discord server](https://discord.gg/eGnrPqEH7U)
