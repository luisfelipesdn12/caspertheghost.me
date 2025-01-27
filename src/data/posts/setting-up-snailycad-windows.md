---
title: Setting up SnailyCADv3 on Windows
createdAt: April 4, 2021
updatedAt: April 16, 2021
intro: How to setup SnailyCADv3 on Windows 10 - In-depth guide.
keywords: snaily-cad, CAD, fivem
---

# Getting started

This is a Windows guide for installing SnailyCAD. You [can view the Linux (Ubuntu) guide here](/blog/setting-up-snailycad-linux)

## Requirements

Before starting the installation of SnailyCAD, you need to have the follow installed on your machine:

- [GIT](https://git-scm.com/downloads)
- [NodeJS v14](https://nodejs.org) (**Must be v14 or you'll run into problems!**)
- [MySQL](https://www.apachefriends.org/download.html)

## Setting up XAMPP

**If you already have XAMPP setup or another MySQL database, you can skip to [Installing SnailyCAD](#installing-snailycad).**

After successfully installing XAMPP, open the XAMPP Control Panel

You should see something like this:

![xampp-control-panel](/blog/xampp-control-panel.webp)

Now we'll start both `Apache` and `MySQL` by clicking the `Start` button.

If started successfully, you can now access <http://localhost/phpmyadmin> in your browser

---

Let's create the database and insert the `snaily-cad.sql` file

In the sidebar you can see a link: "New", click that, it should look something like this:

![create-database](/blog/create-database.webp)

Enter `snaily-cad` in the input field then click `Create`.

Once finished creating the database, you can should see a navbar at the top, click the `import` button:

![import-button](/blog/import-button.webp)

Now a new window should appear, click the `browse...` button and select the `snaily-cad.sql` file. It's located in the root folder of SnailyCAD. After selecting it you can click the `Go` button on the bottom right corner.

![database-browse](/blog/database-browse.webp)

🎉 You've successfully setup XAMPP and MySQL for SnailyCAD! If you're experiencing issues, [feel free to join our Discord server](https://discord.gg/eGnrPqEH7U).

## Installing SnailyCAD

Firstly, [open your command prompt](https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/)

Once opened, we'll need to clone down the code, run the following command:

```console
git clone https://github.com/Dev-CasperTheGhost/snaily-cadv3
```

Once that's finished, we can go into the SnailyCAD folder with the following command:

```console
cd snaily-cadv3
```

Now we need to install all the dependencies to run the CAD. Run the following command:

_This can take several minutes to finish, please be patient!_

```console
npm install
```

Once it has finished installing, you [can open windows file explorer](https://www.howtogeek.com/693474/12-ways-to-open-file-explorer-in-windows-10/) and navigate to the folder where you installed SnailyCAD. (Keep the command prompt open)

Now you should see the following files and folders:

![snaily-cad-root-folder](/blog/snaily-cad-root-folder.webp)

If you don't see the file extensions (`.js`, `.md`, `.sql`, ...) I [recommend enabling this](https://www.msftnext.com/show-file-extensions-windows-10-explorer/)

---

Now navigate into the `src` folder and look for the `config.example.ts` file. **Copy and rename** this file to `config.ts`.

Your server folder should look like this now:

![server-folder-config](/blog/server-folder-config.webp)

Now open the `config.ts` file with `notepad` or any other text-editor. You can [view more information about what the values mean here](https://github.com/Dev-CasperTheGhost/snaily-cadv3/wiki/Config-file).

Once modified, make sure to save the config file (CTRL + S).

Now you can go back to your command prompt from earlier and run the following command:

```console
npm start
```

This will start SnailyCAD.

## Woohoo 🎉🎉

You've successfully installed SnailyCAD!

You can now open <http://localhost:3030> in your browser.

## Further support and questions

If you have any other questions or need help installing SnailCAD, [feel free to join the Discord server](https://discord.gg/eGnrPqEH7U).
