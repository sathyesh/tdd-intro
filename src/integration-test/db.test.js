import { expect } from 'chai';
import { getUserByUsername } from './db';
import { getDatabaseData, setDatabaseData, resetDatabase } from './test-helpers';

describe('getUserByUsername', () => {
    
    beforeEach('setting the database', async () => {
        const fakeData = [{
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        }, {
            id: '124',
            username: 'wrong',
            email: 'wrong@wrong.com',
        }];
        await setDatabaseData('users', fakeData);
 
    });

    afterEach('reset the database', async () => {
        await resetDatabase();
    });

    it('get the correct user from the database given a username', async () => {
        const actual = await getUserByUsername('abc');
        const expected = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };
        expect(actual).excludingEvery('_id').to.deep.equal(expected);
    });

    it('returns null when user is not found', async () => {
        const expected = null;
        const actual = await getUserByUsername('def');
        console.log('actual',actual);
        expect(actual).to.be.equal(expected);
    });
    
});