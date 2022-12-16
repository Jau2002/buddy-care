import { IncomingMessage, Server } from 'http';

export type Port = string | number;

export type Client = Server<typeof IncomingMessage>;
