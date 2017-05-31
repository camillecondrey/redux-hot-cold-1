import {
	NEW_GAME,
	newGame,
	TOGGLE_INFO_MODAL,
	toggleInfoModal,
	FETCH_GAME_SUCCESS,
	fetchGameSuccess,
	MAKE_GUESS,
	makeGuess
} from './actions';

describe('newGame', () => {
	it('Should return the action', () => {
		// const correctAnswer = '10';
		const action = newGame();
		expect(action.type).toEqual(NEW_GAME);
		expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(action.correctAnswer).toBeLessThanOrEqual(100);
	});
});

describe('makeGuess', () => {
	it('SHould return the action', () => {
		const guess = '10';
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	});
});

describe('toggleInfoModal', () => {
	it('Should return the action', () => {
		const action = toggleInfoModal();
		expect(action.type).toEqual(TOGGLE_INFO_MODAL);

	});
});
