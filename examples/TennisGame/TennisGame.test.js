import { TennisGame } from "./TennisGame"

describe('TennisGame', () => {
    test('score is Love-all at start', () => {
        const game = new TennisGame()
        expect(game.getScore()).toBe('Love-all')
    })
})
