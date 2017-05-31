import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions'

describe('reducer', () => {
	it('should set the intitial state when nothing is passed in', () => {
		const state = reducer(undefined, {type: 'unknown'});
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
		expect(state.showInfoModal).toEqual(false);
	});

	it('should return the current state on an unknown action', () => {
		let currentState = {}
		const state = reducer(currentState, {type: 'unknown'});
		expect(state).toBe(currentState);
	});
});	

describe('newGame', () => {
    it('Should start a new game', () => {
        let state = {
            guesses: [1, 2, 3, 4],
            feedback: 'Awesome',
            correctAnswer: -1 
        };
        state = reducer(state, newGame());
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });
});

describe('makeGuess', () => {
    it('Should make a guess', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 100 
        };

        state = reducer(state, makeGuess(25));
        expect(state.guesses).toEqual([25]);
        expect(state.feedback).toEqual('You\'re Ice Cold...');

        state = reducer(state, makeGuess(60));
        expect(state.guesses).toEqual([25, 60]);
        expect(state.feedback).toEqual('You\'re Cold...');

        state = reducer(state, makeGuess(80));
        expect(state.guesses).toEqual([25, 60, 80]);
        expect(state.feedback).toEqual('You\'re Warm');

        state = reducer(state, makeGuess(95));
        expect(state.guesses).toEqual([25, 60, 80, 95]);
        expect(state.feedback).toEqual('You\'re Hot!');

        state = reducer(state, makeGuess(100));
        expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
        expect(state.feedback).toEqual('You got it!');
    });
});

describe('toggleInfoModal', () => {
    it('Should toggle info modal on', () => {
        let state = {
            showInfoModal: false
        };
        state = reducer(state, toggleInfoModal());
        expect(state.showInfoModal).toEqual(true);
    });

    it('Should toggle info modal off', () => {
        let state = {
            showInfoModal: true
        };
        state = reducer(state, toggleInfoModal());
        expect(state.showInfoModal).toEqual(false);
    });
});
