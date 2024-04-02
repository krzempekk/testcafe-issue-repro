import { Selector } from 'testcafe';

fixture`Sample fixture`
    .page`http://localhost:4000`;

test('Test1', async t => {
    await t.switchToIframe('#mfe')
    await t.click('#button');
    await t.expect(Selector('#header').innerText).eql('Button clicked!')
});

