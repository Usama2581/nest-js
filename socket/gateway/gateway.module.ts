import { GateWay } from './gateway';
import { Module } from "@nestjs/common";

@Module({
    // imports: [],
    providers: [GateWay]
})

export class GateWayModule {}
