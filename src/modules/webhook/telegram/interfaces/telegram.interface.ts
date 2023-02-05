export interface TelegramWebhookMessageEvent {
  update_id?: number;
  message?: Message;
}

export interface Message {
  message_id?: number;
  from?: From;
  chat?: Chat;
  date?: number;
  text?: string;
}

export interface Chat {
  id?: number;
  first_name?: string;
  username?: string;
  type?: string;
}

export interface From {
  id?: number;
  is_bot?: boolean;
  first_name?: string;
  username?: string;
  language_code?: string;
}
