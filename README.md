# ChatGPT3 Telegram Bot

This is a Telegram bot that uses OpenAI's GPT-3 API to generate responses to messages.

## How to use

Fork this repo and add your bot and open-ai token to the `.env` file

- Create a Telegram bot and get the API key

- Deploy the bot to a server and set the webhook url to the Telegram Bot API

- Set webhook url to Telegram Bot API

```bash
curl --location --request POST 'https://api.telegram.org/bot<your-telegram-api-key>/setWebhook' \
--form 'url="https://<your-domain>/api/webhook/telegram"'
```

## How it works

The bot uses the [nestjs-telegram](https://github.com/hypeertech/nestjs-telegram) package to send messages to the
Telegram API and the [nestjs-chatgpt](https://www.npmjs.com/package/nestjs-chatgpt) package to generate responses.