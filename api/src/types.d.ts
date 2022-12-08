import { IncomingMessage, Server } from 'http';

export type StatusCode = number;

export type Port = string | number;

export type Client = Server<typeof IncomingMessage>;
