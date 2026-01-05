export class CollisionMapGenerator {
    private landscapeData: any;

    constructor(landscapeData: any) {
        this.landscapeData = landscapeData;
    }

    generate() {
        console.log('[CollisionMapGenerator] Building server-side navigation grid');
        const { width, height, tiles } = this.landscapeData;
        const grid = new Uint8Array(width * height);

        // Basic RSC collision logic: blocked if any wall exists
        // In RSC, flags are: 1 (north), 2 (east), 4 (south), 8 (west), 16 (diagonal), etc.
        for (let i = 0; i < grid.length; i++) {
            const tile = tiles[i];
            if (tile && (tile.horizontalWall > 0 || tile.verticalWall > 0 || tile.diagonalWalls > 0)) {
                grid[i] = 255; // fully blocked for now
            }
        }

        return grid;
    }
}
