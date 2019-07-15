import Switch from './Switch';
import { pointFactory } from '../Factories/PointFactory';
import { requestedPointPosition } from '../../definitions/Points';

export default class PointPosition {
    private readonly position: requestedPointPosition;
    private readonly point: Switch;
    private readonly safePositions: PointPosition[];

    constructor(
        pointId: number,
        position: requestedPointPosition,
        safePositions: { id: number, position: requestedPointPosition }[] = [],
    ) {
        this.point = pointFactory.findById(pointId);
        this.position = position;

        this.safePositions = safePositions.map(({id, position}) => {
            return new PointPosition(id, position);
        });
    };

    public async lock(id: number) {
        for (const index in this.safePositions) {
            const pos = this.safePositions[index];
            await pos.lock(id);
        }
        await this.point.lock(id, this.position);
        return;
    }

    public check() {
        for (const index in this.safePositions) {
            const pos = this.safePositions[index];
            pos.check();
        }
        this.point.check(this.position);
        return;
    }

    public unlock(id: number) {
        for (const index in this.safePositions) {
            const pos = this.safePositions[index];
            pos.unlock(id);
        }
        this.point.unlock(id);
        return;
    }

    public unlockBySector(id: number, sectorId: number) {
        if (this.point.sector === sectorId) {
            this.unlock(id);
        }
        return;
    }
}
