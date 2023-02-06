import express, { Request, Response } from 'express';
 
export function get(req: Request, res: Response) {
    return res.status(200).send({ path: req.params[0].split('/') })
}