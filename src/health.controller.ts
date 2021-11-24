import { Controller, Get, Res } from '@nestjs/common';;
import { Response } from 'express';

//healthcheck routes for the integrityCheck at AWS
@Controller()
export class HealthController {
    @Get('/')
    async findAll(@Res() response: Response): Promise<any> {
        return response.status(200).send('200 ok')
    }

    @Get('/health')
    async health(@Res() response: Response): Promise<any> {
        return response.status(200).send('200 ok')
  }
 }
