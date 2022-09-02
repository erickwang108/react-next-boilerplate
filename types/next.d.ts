import { Request, Response } from 'express';
import { NextPageContext } from 'next';

declare module 'next' {
  export interface PageContext extends NextPageContext {
    req: Request;
    res: Response;
  }
}
