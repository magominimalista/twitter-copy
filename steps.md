## Create a project 
npm create t3-app@latest

## Create a database
https://app.planetscale.com/
Go to branches, click on main, active and create a subbranch called dev

## Get the database url and put on .env
DATABASE_URL='mysql://xn8jcunr...'

## Alter schema.prisma
Remenber de add: @@index([userId])
Get the data in app.planetscale.com

## Comand to create and push the table
npx prisma db push

## Get the key of discord to connect login
https://discord.com/developers
And define url to call back
http://localhost:3000/api/auth/callback/discord

## Define the Auth Discord provider on .env
DISCORD_CLIENT_ID="..."
DISCORD_CLIENT_SECRET="..."

## Create a Openssl 32 key and put on .env
openssl rand -base64 32

## Run the application
npm run dev